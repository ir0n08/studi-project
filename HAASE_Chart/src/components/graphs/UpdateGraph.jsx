import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { Chart } from "react-google-charts";
import {getStockNames,getSingleStock, getClosingByDay } from '../graphs/Functions';
import {chartInput } from '../graphs/Graph';
import { stockData } from '../../../stockData';


export function updateChart(i)  {

    var cStockData = getSingleStock(i.id,stockData);
    let [stockClosingData,mcasData] = getClosingByDay(cStockData,i.start,i.end,i.medianInt,i.bolFactor);
    
    var options = {
        legend: 'bottom',
        chartArea: {
            width: '80%'
        },
        vAxis: { viewWindowMode: "maximized" },
        intervals: { 'color':'series-color' },
        interval: {
            'i0': { 'style':'boxes', 'fillOpacity':1 },
            'i1': { 'style':'boxes', 'fillOpacity':1 },
        
            'i2': { 'style':'area', 'curveType':'function', 'fillOpacity':0.3 }
            //'b1': { 'style':'area', 'curveType':'function', 'fillOpacity':0.3 }
        },
        series: {
            0: { color: i.color }, // actuale stock value
            1: { curveType: "function", color: '#49baff', opacity: 1}, // average line
            //2: { curveType: "function", color: '#8677F2', opacity: 0.1}, // lower bollinger
            2: { curveType: "function", color: '#B588D4', opacity: 1}//, // average bollinger
            // 4: { curveType: "function", color: '#FF00D4', opacity: 0.1} // upper bollinger
        },
    };

    var optionsMCAS = {
        hAxis: {title: "Datum"},
        vAxis: {title: "Signalhöhe"},
        series: {
          0: { curveType: "function", color: 'blue', opacity: 1 }, // MCAS
          1: { curveType: "function", color: 'red', opacity: 1}, // SIGNAL
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
        </p>
    );
    root.render(ele);
   
}