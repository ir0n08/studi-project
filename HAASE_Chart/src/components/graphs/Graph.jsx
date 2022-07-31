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
  chart: {
    title: "Box Office Earnings in First Two Weeks of Opening",
    subtitle: "in millions of dollars (USD) ",
  },
};

export const cStockData = getSingleStock(cStockID,stockData);
export const stockClosingData = getClosingByDay(cStockData,startDay,endDay);
//export const stockClosingData = [['datum','name'],['freitag',55]];
  

export default function Graph(){

    return(
       
        <div>
            <Stocks />
            <div id="chartArea">
            <Chart
            chartType="Line"
            width="100%"
            height="400px"
            data={stockClosingData}
            options={options}
            />
            </div>
        </div>
    )
    


}