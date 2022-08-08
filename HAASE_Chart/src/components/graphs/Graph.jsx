import * as React from 'react';
import GraphMenu from './GraphMenu';
import { Chart } from "react-google-charts";
import { stockData } from "../../../stockData";
import { Stocks, getSingleStock, getClosingByDay, getStockNames } from "./Functions";
import ReactDOM from "react-dom/client";
import { useState } from 'react';

//console.log(stockData);
export const startDay = '2020-03-01'; // 2be replace by input data
export const endDay = '2020-07-01';

export var chartInput = {};
Object.assign(chartInput, { id: 'DE0008404005',start:'2020-03-01',end:'2020-07-01',mcas:false,median:true,medianInt:200,bolFactor:2,color:'#ff0007',bol:true} );


var cStockID = chartInput.id;//'DE0008404005'; 
let medianOn = chartInput.median;


//export const medianDays = 200;
//export const bolFactor = 2; // factor (k) for bollinger bander; 2 = 95% confidence 

export var options = {
  legend: 'bottom',
  chartArea: {
    width: '80%'
  },
  vAxis: {
    viewWindowMode: "maximized"

  },
  intervals: { 'color':'series-color',  },
  interval: {
    'i0': { 'style':'boxes', 'fillOpacity':1 },
    'i1': { 'style':'boxes', 'fillOpacity':1 },

    'i2': { 'style':'area', 'curveType':'function', 'fillOpacity':0.3 }
    //'b1': { 'style':'area', 'curveType':'function', 'fillOpacity':0.3 }
  },
  series: {
    0: { color: '#D9544C' }, // actuale stock value
    1: { curveType: "function", color: '#49baff', opacity: 1}, // average line
    //2: { curveType: "function", color: '#8677F2', opacity: 0.1}, // lower bollinger
    2: { curveType: "function", color: '#B588D4', opacity: 1}//, // average bollinger
   // 4: { curveType: "function", color: '#FF00D4', opacity: 0.1} // upper bollinger
  },
};

export var optionsMCAS = {
  chartArea: {
    width: '80%'
  },
  legend: 'bottom',
  series: {
    0: { curveType: "function", color: 'blue', opacity: 1 }, // MCAS
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
    1: { curveType: "function", color: 'orange', opacity: 1}, // ROI
    2: { color: 'blue', opacity: 1 }, // Obere Schwelle
  },
};

export var cStockData = getSingleStock(cStockID,stockData); 
export var [stockClosingData,mcasData,rsiData] = getClosingByDay(cStockData,chartInput.start,chartInput.end,chartInput.median,chartInput.medianInt,true,chartInput.bolFactor);

export default function Graph(){

    return(
       
        <div>
            <Stocks />
            <div id="chartArea">
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
              <div id="mcasChart">
                <br/><br/><br/>
                <h3>ROI</h3><br/>
                <Chart
                chartType="Line"
                width="100%"
                height="300px"
                data={rsiData}
                options={optionsRSI}
                />
              </div>
            </div>
        </div>
    );
    


}