import * as React from 'react';
import GraphMenu from './GraphMenu';
import { Chart } from "react-google-charts";
import { Box } from '@mui/material';
import { stockData } from "../../../stockData";
import { Stocks, getSingleStock, getClosingByDay, getStockNames } from "./Functions";
import ReactDOM from "react-dom/client";
import { useState } from 'react';

//console.log(stockData);
export const startDay = '2020-03-01'; // 2be replace by input data
export const endDay = '2020-07-01';

export var chartInput = {};
Object.assign(chartInput, { id: 'DE0008404005',start:'2020-03-01',end:'2020-07-01',mcas:false,rsi:false,median:true,medianInt:200,colorMedium:'#3028EB',bolFactor:2,colorBol:'#FFEB02',color:'#051700',bol:true,rsiColor:'#60EB00',mcasColor:'#55EAB1'} );


var cStockID = chartInput.id; 
let medianOn = chartInput.median;
//export const medianDays = 200;
//export const bolFactor = 2; // factor (k) for bollinger bander; 2 = 95% confidence 

export var options = {
  legend: 'bottom',
  chartArea: {
      width: '80%'
  },
  series : {
      0: { color: chartInput.color } // actuale stock value
  },
  vAxis: { viewWindowMode: "maximized" },
  intervals: {  },
};

options.interval = {
  'i0': { 'style':'boxes', 'fillOpacity':1 },
  'i1': { 'style':'boxes', 'fillOpacity':1 }
};

let medianoffset = 0;
if(chartInput.median == true) {
  console.log(chartInput.colorMedium);
  //options.series.n1 = { curveType: "function", color: i.colorMedium, opacity: 1}; // average line
  options.series[1] = { curveType: "function", color: chartInput.colorMedium, opacity: 1}; // average line
  medianoffset++;
}

if(chartInput.bol == true) {
  options.interval.i2 = {'style':'area', 'curveType':'function', color:chartInput.colorBol, 'fillOpacity':0.3};
  options.series[1+medianoffset] = { curveType: "function", color: chartInput.colorBol, opacity: 1}; // average bollinger
  //2: { curveType: "function", color: '#8677F2', opacity: 0.1}, // lower bollinger
  // 4: { curveType: "function", color: '#FF00D4', opacity: 0.1} // upper bollinger
}

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
let mcasHidden = (chartInput.mcas == true ? "" : "none");
let rsiHidden = (chartInput.rsi == true ? "" : "none");

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
                <br/><br/><br/>
                <h3>MCAS</h3><br/>
                <Chart
                chartType="Line"
                width="100%"
                height="300px"
                data={mcasData}
                options={optionsMCAS}
                />
              </Box>
              <Box sx={{ display: rsiHidden }} >
                <br/><br/><br/>
                <h3>RSI</h3><br/>
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