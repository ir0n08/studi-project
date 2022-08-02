import React from "react";
import GraphMenu from './GraphMenu';
import { Chart } from "react-google-charts";
//import {json-loader} from "json-loader";
import { stockData } from "../../../stockData";
import { Stocks, getSingleStock, getClosingByDay, getStockNames } from "./Test";

//console.log(stockData);
export const startDay = '2021-02-01'; // 2be replace by input data
export const endDay = '2022-02-28';
export const cStockID = 'DE0008404005'; //allian & 2be replaced

export const options = {
  legend: 'none',
  hAxis: {
    title: "Datum",
  },
  vAxis: {
    title: "Stock value in EUR",

  },
  intervals: { style: 'boxes' },
  series: {
    0: { color: '#D9544C' }, // actuale stock value
    1: { curveType: "function", color: '#49baff', opacity: 1} // average line
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