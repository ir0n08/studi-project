import * as React from 'react';
import GraphMenu from './GraphMenu';
import { Chart } from "react-google-charts";
import { stockData } from "../../../stockData";
import { Stocks, getSingleStock, getClosingByDay, getStockNames } from "./Test";
import ReactDOM from "react-dom/client";
import { useState } from 'react';
import {chartInput} from '../navbar/SelectionCard';

//console.log(stockData);
export const startDay = '2020-03-01'; // 2be replace by input data
export const endDay = '2020-07-01';



var cStockID = chartInput.id;//'DE0008404005'; //React.useState.stockName; //test



export const medianDays = 200;
export const bolFactor = 2; // factor (k) for bollinger bander; 2 = 95% confidence 

export var options = {
  legend: 'bottom',
  hAxis: {
    title: "Datum",
  },
  vAxis: {
    title: "Stock value in EUR",

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

export var cStockData = getSingleStock(cStockID,stockData);
export var stockClosingData = getClosingByDay(cStockData,startDay,endDay);

export default function Graph(){

    return(
       
        <div>
            <Stocks />
            <div id="chartArea">
            <Chart
            chartType="LineChart"
            width="100%"
            height="600px"
            data={stockClosingData}
            options={options}
            />
            </div>
        </div>
    )
    


}