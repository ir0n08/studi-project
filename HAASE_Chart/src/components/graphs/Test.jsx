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

  var tempArray = []; var arrGD = [];var last12 = [];var last26 = []; let vGD = 0; let fEMA = 0; let sEMA = 0; let MACD = 0;
  var resArray = [[{ type: "string", label: "Datum"}, {type: "number", label:"Stock price"},{id: "i0", type: "number", role:"interval"},{id: "i1", type: "number", role:"interval"},{type: "number", label:"200 Tage gleitender Durchschnitt"}]];

  
  // funct get slow


  let oDay = prices.map((dayData) => {
    // if note in day range remove it 

    // get the avarage of last 200 days
    [vGD, arrGD] = get200Median(dayData.closing,arrGD);

    // get MACD data
    [fEMA,last12] = getEMA(dayData.closing,last12,12);
    [sEMA,last26] = getEMA(dayData.closing,last26,26);
    MACD = fEMA - sEMA; // MACD = fast EMA minus slow EMA

    if(!(dayData.date < startDate || dayData.date > endDate)) {
      tempArray = [dayData.date,dayData.closing,dayData.low,dayData.high,vGD];
      resArray.push(tempArray);
      console.log(MACD);
    }
   
  });
  return resArray;
}

export function get200Median(cVal,arrGD) {
  let median = 0;
  if(arrGD.length >= 200) { // if 200 ele in array then remove the first entry
    arrGD.shift();
  }
  arrGD.push(cVal);

  return [getAvg(arrGD),arrGD];
}

export function getMACD(close,arrMACD) {
  // do i need you?
  
}

export function getEMA(close,lastArr,n=12) {
  let res = 0;
  if(lastArr.length < n) {
    lastArr.push(close);
  } else if(lastArr.length == n) {
    res = getAvg(lastArr);
    lastArr.push(res);
  } else {
    let tLast = lastArr[lastArr.length-1];
    lastArr.shift();
    res = close * (2/(n+1)) + tLast*(1-(2/(n+1)));
    lastArr.push(res);
  }
  return [res,lastArr];
}

export function getAvg(arr) {
  let median = 0;
  let t = arr.map((tVal) => {
    median += tVal;
  });
  return median/arr.length;
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