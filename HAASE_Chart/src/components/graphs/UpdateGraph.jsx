import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { Chart } from "react-google-charts";
import { Box, Typography } from '@mui/material';
import {getStockNames,getSingleStock, getClosingByDay } from '../graphs/Functions';
import {chartInput } from '../graphs/Graph';
import { stockData } from '../../../stockData';


export function updateChart(i)  {

    var cStockData = getSingleStock(i.id,stockData); //startDate,endDate,median=false,medianDays=200,bol=false,bolFactor=2
    let [stockClosingData,mcasData,rsiData] = getClosingByDay(cStockData,i.start,i.end,i.median,i.medianInt,i.bol,i.bolFactor,i.candle);
    
    var options = {
        legend: 'bottom',
        chartArea: {
            width: '90%'
        },
        series : {
            0: { color: i.color } // actuale stock value
        },
        vAxis: { viewWindowMode: "maximized", format:'#.## \u20AC'  },
        intervals: {  },
        candlestick: {  }
    };
    
    options.interval = {
        'i0': { 'style':'boxes', 'fillOpacity':1 },
        'i1': { 'style':'boxes', 'fillOpacity':1 }
    };
    
    let medianoffset = 0;
    if(i.median == true) {
        options.series[1] = { curveType: "function", color: i.colorMedium, opacity: 1}; // average line
        medianoffset++;
    }

    if(i.bol == true) {
        options.interval.i2 = {'style':'area', 'curveType':'function', color:i.colorBol, 'fillOpacity':0.3};
        options.series[1+medianoffset] = { curveType: "function", color: i.colorBol, opacity: 1}; // average bollinger
        medianoffset++;
    }

    if(i.candle == true) {
        options.series[1+medianoffset] = { type: "candlesticks", color:'orange', dataOpacity: 0.6, legend: 'none',strokeWidth: 0 };
      
        options.candlestick.fallingColor = { strokeWidth: 0, fill: '#a52714',fillOpacity:0.8  };
        options.candlestick.risingColor = {strokeWidth: 0, fill: '#0f9d58',fillOpacity:0.8};
      }
      

    var optionsMCAS = {
        title: "MACS Chart",
        vAxis: {title: "Signalhöhe"},
        chartArea: {
            width: '75%'
          },
        legend: 'bottom',
        series: {
          0: { curveType: "function", color: i.mcasColor, opacity: 1 }, // MCAS
          1: { curveType: "function", color: 'red', opacity: 1}, // SIGNAL
        }
    };

    var optionsRSI = {
        title: "RS-Index Chart",
        chartArea: {
          width: '75%'
        },
        legend: 'bottom',
        series: {
          0: { color: 'blue', opacity: 1 }, // Untere Schwelle
          1: { curveType: "function", color: i.rsiColor, opacity: 1}, // ROI
          2: { color: 'blue', opacity: 1 }, // Obere Schwelle
        }
    };
    
    const rootUpdate = ReactDOM.createRoot(
        document.getElementById('chartArea')
    );
    //const chartContiner = document.getElementById('chartArea');

    
    let mcasHidden = (i.mcas == true ? "" : "none");
    let rsiHidden = (i.rsi == true ? "" : "none");
    var ele = (
        <Box>
            
            <Box id="mainChart">
            <Typography sx={{ marginLeft: '7%',position: 'relative',fontWeight: 'bold', textAlign: 'left', fontSize: '14pt', top: '80px', zIndex: 100 }}>{cStockData.name +" ("+ i.id + ")"}</Typography>
                    <Chart
                    chartType="LineChart"
                    width="100%"
                    height="600px"
                    data={stockClosingData}
                    options={options}
                    />
            </Box>
            <Box sx={{ display: mcasHidden }} >
                <br/><br/>
                <Typography sx={{ marginLeft: '7%',fontWeight: 'bold', textAlign: 'left', fontSize: '14pt',  zIndex: 100 }}>MACD Graph</Typography>
                <br/>
                <Chart
                chartType="Line"
                width="100%"
                height="300px"
                data={mcasData}
                options={optionsMCAS}
                />
            </Box>
            <Box sx={{ display: rsiHidden }} >
                    <br/><br/>
                    <Typography sx={{ marginLeft: '7%',fontWeight: 'bold', textAlign: 'left', fontSize: '14pt',  zIndex: 100 }}>RSI Graph</Typography>
                    <br/>
                    <Chart
                    chartType="Line"
                    width="100%"
                    height="300px"
                    data={rsiData}
                    options={optionsRSI}
                    />
            </Box>
        </Box>
    );
    rootUpdate.render(ele);
   
}