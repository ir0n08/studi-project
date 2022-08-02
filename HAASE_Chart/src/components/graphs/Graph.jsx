import React from "react";
import GraphMenu from './GraphMenu';
import { Chart } from "react-google-charts";
//import {json-loader} from "json-loader";
import { stockData } from "../../../stockData";
import { Stocks, getSingleStock, getClosingByDay, getStockNames } from "./Test";

//console.log(stockData);
export const startDay = '2020-04-01'; // 2be replace by input data
export const endDay = '2020-07-01';
export const cStockID = 'DE0008404005'; //allian & 2be replaced
export const medianDays = 200;
export const bolFactor = 2; // factor (k) for bollinger bander; 2 = 95% confidence 

export const options = {
  legend: 'bottom',
  hAxis: {
    title: "Datum",
  },
  vAxis: {
    title: "Stock value in EUR",

  },
  intervals: { style: 'boxes' },
  series: {
    0: { color: '#D9544C' }, // actuale stock value
    1: { curveType: "function", color: '#49baff', opacity: 1}, // average line
    2: { curveType: "function", color: '#8677F2', opacity: 0.1}, // lower bollinger
    3: { curveType: "function", color: '#B588D4', opacity: 1}, // average bollinger
    4: { curveType: "function", color: '#FF00D4', opacity: 0.1} // upper bollinger
  },
};

export const cStockData = getSingleStock(cStockID,stockData);
export const stockClosingData = getClosingByDay(cStockData,startDay,endDay);

export default function Graph(){

    return(
       
        <div>
            <Stocks />
            <div id="chartArea">
            <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={stockClosingData}
            options={options}
            />
            </div>
        </div>
    )
    


}