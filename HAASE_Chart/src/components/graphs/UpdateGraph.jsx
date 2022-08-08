import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { Chart } from "react-google-charts";
import {getStockNames,getSingleStock, getClosingByDay } from '../graphs/Functions';
import {chartInput } from '../graphs/Graph';
import { stockData } from '../../../stockData';


export function updateChart(i)  {

    var cStockData = getSingleStock(i.id,stockData); //startDate,endDate,median=false,medianDays=200,bol=false,bolFactor=2
    let [stockClosingData,mcasData,rsiData] = getClosingByDay(cStockData,i.start,i.end,i.median,i.medianInt,i.bol,i.bolFactor);
    
    var options = {
        legend: 'bottom',
        chartArea: {
            width: '80%'
        },
        series : {
            0: { color: i.color } // actuale stock value
        },
        vAxis: { viewWindowMode: "maximized" },
        intervals: { 'color':'series-color' },
    };
    
    options.interval = {
        'i0': { 'style':'boxes', 'fillOpacity':1 },
        'i1': { 'style':'boxes', 'fillOpacity':1 }
    };
    
    if(i.median == true) {
        console.log(i.colorMedium);
        options.series[1] = { curveType: "function", color: i.colorMedium, opacity: 1}; // average line
    }

    if(i.bol == true) {
        options.interval.i2 = {'style':'area', 'curveType':'function', 'fillOpacity':0.3};
        options.series[2] = { curveType: "function", color: i.colorBol, opacity: 1}; // average bollinger
        //2: { curveType: "function", color: '#8677F2', opacity: 0.1}, // lower bollinger
        // 4: { curveType: "function", color: '#FF00D4', opacity: 0.1} // upper bollinger
    }
    console.log(options);

    var optionsMCAS = {
        hAxis: {title: "Datum"},
        vAxis: {title: "Signalhöhe"},
        series: {
          0: { curveType: "function", color: 'blue', opacity: 1 }, // MCAS
          1: { curveType: "function", color: 'red', opacity: 1}, // SIGNAL
        },
    };

    var optionsRSI = {
        chartArea: {
          width: '80%'
        },
        legend: 'bottom',
        series: {
          0: { color: 'blue', opacity: 1 }, // Untere Schwelle
          1: { curveType: "function", color: 'orange', opacity: 1}, // ROI
          2: { color: 'blue', opacity: 1 }, // Obere Schwelle
        },
    };
      

    const root = ReactDOM.createRoot(
        document.getElementById('chartArea')
    );

    var ele = (
        <p>
            <div id="mainChart">
                    <Chart
                    chartType="LineChart"
                    width="100%"
                    height="600px"
                    data={stockClosingData}
                    options={options}
                    />
            </div>
                <div id="mcasChart">
                    <br/><br/><br/>
                    <h3>MCAS</h3><br/>
                    <Chart
                    chartType="Line"
                    width="100%"
                    height="300px"
                    data={mcasData}
                    options={optionsMCAS}
                    />
            </div>
            <div id="rsiChart">
                    <br/><br/><br/>
                    <h3>RSI</h3><br/>
                    <Chart
                    chartType="Line"
                    width="100%"
                    height="300px"
                    data={rsiData}
                    options={optionsRSI}
                    />
            </div>
        </p>
    );
    root.render(ele);
   
}