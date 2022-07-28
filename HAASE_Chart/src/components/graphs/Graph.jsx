import React from "react";
import GraphMenu from './GraphMenu';
import { Chart } from "react-google-charts";
//import {json-loader} from "json-loader";
import { stockData } from "../../../stockDataS";
import { arrStocks, Stocks } from "./Test";



export const data = [
    [
      "Date",
      "Aktie " + stockData.name,
    ],
    ["2020-05-01", 34.7],
    ["2020-05-02", 37.8],
    ["2020-05-03", 37.8],
    ["2020-05-04", 34.8],
    ["2020-05-05", 33.8],
    ["2020-05-06", 37.8],
    ["2020-05-07", 37.8],
    ["2020-05-08", 31.8],
    ["2020-05-09", 35.8],
    ["2020-05-10", 37.8],
    ["2020-05-11", 37.8],
    ["2020-05-12", 70.8],
    ["2020-05-13", 74.8],
    ["2020-05-14", 77.8],
    ["2020-05-15", 72.8],
  ];

  export const options = {
    chart: {
      title: "Box Office Earnings in First Two Weeks of Opening",
      subtitle: "in millions of dollars (USD) ",
    },
  };
  

export default function Graph(){

    return(
       
        <div>
            <Stocks />
            <div id="chartArea">
            <Chart
            chartType="Line"
            width="100%"
            height="400px"
            data={data}
            options={options}
            />
            </div>
        </div>
    )
    


}