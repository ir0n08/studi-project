import * as React from 'react';
import GraphMenu from './GraphMenu';
import { Chart } from "react-google-charts";
import { Box } from '@mui/material';
import { stockData } from "../../../stockData";
import { Stocks, getSingleStock, getClosingByDay, getStockNames } from "./Functions";
import ReactDOM from "react-dom/client";
import { useState } from 'react';



export var chartInput = {};
Object.assign(chartInput, { id: 'DE0008404005',start:'2022-03-01',end:'2022-06-01',candle:false,mcas:true,rsi:true,median:false,medianInt:200,colorMedium:'#55EAB1',bolFactor:2,colorBol:'#858585',color:'#3028EB',bol:false,rsiColor:'#EB3C17',mcasColor:'#3028EB'} );


var cStockID = chartInput.id; 
let medianOn = chartInput.median;
export var cStockData = getSingleStock(cStockID,stockData); 

export var options = {
  title: cStockData.name +" ("+ chartInput.id + ")",
  legend: 'bottom',
  chartArea: {
      width: '80%'
  },
  series : {
      0: { color: chartInput.color } // actuale stock value
  },
  hAxis: { },
  vAxis: { viewWindowMode: "maximized",format:'#.## \u20AC' },
  intervals: {  },
  candlestick: {  }
};

options.interval = {
  'i0': { 'style':'boxes', 'fillOpacity':1 },
  'i1': { 'style':'boxes', 'fillOpacity':1 }
};

let medianoffset = 0;
if(chartInput.median == true) {
  options.series[1] = { curveType: "function", color: chartInput.colorMedium, opacity: 1}; // average line
  medianoffset++;
}

if(chartInput.bol == true) {
  options.interval.i2 = {'style':'area', 'curveType':'function', color:chartInput.colorBol, 'fillOpacity':0.3};
  options.series[1+medianoffset] = { curveType: "function", color: chartInput.colorBol, opacity: 1}; // average bollinger
  medianoffset++;
  //2: { curveType: "function", color: '#8677F2', opacity: 0.1}, // lower bollinger
  // 4: { curveType: "function", color: '#FF00D4', opacity: 0.1} // upper bollinger
}

if(chartInput.candle == true) {
  options.series[1+medianoffset] = { type: "candlesticks", opacity: 0.2, legend: 'none' };

  options.candlestick.fallingColor = { strokeWidth: 0, fill: '#a52714'  };
  options.candlestick.risingColor = {strokeWidth: 0, fill: '#0f9d58'};
}

export var optionsMCAS = {
  'title': "MACS_Chart",
  chartArea: {
    width: '80%'
  },
  legend: 'bottom',
  series: {
    0: { curveType: "function", color: chartInput.mcasColor, opacity: 1 }, // MCAS
    1: { curveType: "function", color: 'red', opacity: 1}, // SIGNAL
  },
};

export var optionsRSI = {
  chartArea: {
    width: '80%'
  },
  legend: 'bottom',
  series: {
    0: { color: 'blue', opacity: 1 }, // Untere Schwelle
    1: { curveType: "function", color: chartInput.rsiColor, opacity: 1}, // ROI
    2: { color: 'blue', opacity: 1 }, // Obere Schwelle
  },
  title:'RS-Index Chart'
};

export var [stockClosingData,mcasData,rsiData] = getClosingByDay(cStockData,chartInput.start,chartInput.end,chartInput.median,chartInput.medianInt,chartInput.bol,chartInput.bolFactor,chartInput.candle);
let mcasHidden = (chartInput.mcas == true ? "" : "none");
let rsiHidden = (chartInput.rsi == true ? "" : "none");

/* DEV AREA */


/* END DEV AREA */

export default function Graph(){

  

    return(
       
        <div>
            <Stocks />
            <div id="chartArea">
              <Box id="mainChart">
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

                <Chart
                chartType="Line"
                width="100%"
                height="300px"
                data={rsiData}
                options={optionsRSI}
                />
              </Box>
            </div>
        </div>
    );
    


}