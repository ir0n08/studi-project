import React from "react";
//import { stockData } from "../../../stockData";


export function transStocks(stockData) {
  //console.log(stockData);
  //let objStock = stockData[0]; // write search func in json data
  
  //return Object.values(objStock);
  return stockData;
}



export function getSingleStock(id,stockData) {
  let resStock = [];

  let oStock = stockData[0]['values'].map((stock) => {
    // if note in day range remove it 
    if(stock.isin == id) {
      resStock = stock;
    }
   
  });
  return resStock;
  
}

export function getClosingByDay(stockData,startDate,endDate) {

  //let [isin, nameStock, symbol, prices] = transStocks(stockData);
  stockData = Object.values(stockData);
  console.log(stockData);
  let [isin, nameStock, symbol, prices] = stockData;

  var tempArray = [];
  var resArray = [[{ type: "string", label: "Datum"}, {type: "number", label:"Stock price"},{id: "i0", type: "number", role:"interval"},{id: "i1", type: "number", role:"interval"},{type: "number", label:"Average"}]];

  let oDay = prices.map((dayData) => {
    // if note in day range remove it 
    if(!(dayData.date < startDate || dayData.date > endDate)) {
      tempArray = [dayData.date,getMedium(dayData.opening,dayData.closing),dayData.closing,dayData.opening,200];
      resArray.push(tempArray);
    }
   
  });
  return resArray;
}

export function getMedium(lVal,rVal) {
  if(lVal < rVal) {
    return lVal + (rVal - lVal) / 2;
  } else {
    return rVal + (lVal - rVal) / 2;
  }
}

export function getStockNames(stockData) {
  var res = [];
  var tempArray = [];

  let oStock = stockData[0]['values'].map((stock) => {
    tempArray = {isin: stock.isin,name: stock.name,symbol: stock.symbol};
    res.push(tempArray);
  });
  return Object.values(res);
}



export const Stocks = () => {

    return(
        <div className="stock-container">
            
        </div>
    );
   
};