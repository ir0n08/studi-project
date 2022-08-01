import React from "react";
import GraphMenu from './GraphMenu';
import { Chart } from "react-google-charts";
//import {json-loader} from "json-loader";
import { stockData } from "../../../stockData";
import { Stocks,getSingleStock, getClosingByDay } from "./Test";

//console.log(stockData);
export const startDay = '2022-01-20'; // 2be replace by input data
export const endDay = '2022-02-22';
export const cStockID = 'DE0008404005'; //allian & 2be replaced

export const options = {
  title: 'Bars, default',
  curveType: 'function',
  series: [{'color': '#D9544C'}],
  intervals: { style: 'bars' },
  legend: 'none',
};



export const Testdata = [
  [
    { type: "String", label: "x" },
    { type: "number", label: "values" },
    { id: "i0", type: "number", role: "interval" },
    { id: "i1", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
  ],
  [1, 100, 90, 110, 85, 96, 104, 120],
  [2, 120, 95, 130, 90, 113, 124, 140],
  [3, 130, 105, 140, 100, 117, 133, 139],
  [4, 90, 85, 95, 85, 88, 92, 95],
  [5, 70, 74, 63, 67, 69, 70, 72],
  [6, 30, 39, 22, 21, 28, 34, 40],
  [7, 80, 77, 83, 70, 77, 85, 90],
  [8, 100, 90, 110, 85, 95, 102, 110],
];

export const Testoptions = {
  title: "Sticks, default",
  curveType: "function",
  series: [{ color: "#E7711B" }],
  intervals: { style: "area" },
  legend: "hoo",
};



export const cStockData = getSingleStock(cStockID,stockData);
export const stockClosingData = getClosingByDay(cStockData,startDay,endDay);
console.log(stockClosingData);
//export const stockClosingData = [['datum','name'],['freitag',55]];
  

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