import React from "react";
//import { stockData } from "../../../stockData";
import {bolFactor, medianDays} from "./Graph"; // check if solved with func-args or global vals


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

  var tempArray = []; var arrGD = [];var last12 = [];var last26 = [];var lastSignal = [];var lastRSI = []; var arrBollinger = []; 
  let vGD = 0; let fEMA = 0; let sEMA = 0; let MACD = 0; let signalMACD = 0; let closingDayBefore = prices[0].closing; let RSI = 0; let bolMed = 0; let bolLow = 0; let bolUpr = 0; let bolStdDev = 0;
  var resArray = [[{ 
    type: "string", label: "Datum"}, 
    {type: "number", label:"Stock price"},
    {id: "i0", type: "number", role:"interval"},
    {id: "i1", type: "number", role:"interval"},
    {type: "number", label: medianDays +" Tage gleitender Durchschnitt"},
    {type: "number", label: "Mittleres Bollinger Band"},
    {id: "i2", type: "number", label: "Unteres Bollinger Band", role:"interval"},
    {id: "i2", type: "number", label: "Oberes Bollinger Band", role:"interval"}
  ]];


  // funct get slow


  let oDay = prices.map((dayData) => {
    // if note in day range remove it 

    // get the avarage of last 200 days
    [vGD, arrGD] = getNmedian(dayData.closing,arrGD,medianDays);

    // get MACD data
    [fEMA,last12] = getEMA(dayData.closing,last12,12);
    [sEMA,last26] = getEMA(dayData.closing,last26,26);
    MACD = fEMA - sEMA; // MACD = fast EMA minus slow EMA
    [signalMACD, lastSignal] = getEMA(MACD,lastSignal,9);

    // get RSI data
    let stockChange = dayData.closing - closingDayBefore;
    [RSI,lastRSI] = getRSI(stockChange,lastRSI,14);
    closingDayBefore = dayData.closing;

    // get Bollinger Bander
    [bolMed, arrBollinger] = getNmedian(dayData.closing,arrBollinger,20); // get Center Bollinger Value, default 20, maybe add a changer later?
    bolStdDev = standardDeviation(arrBollinger,bolMed); // get the standard deveriation
    bolUpr = bolMed + (bolFactor * bolStdDev);
    bolLow = bolMed - (bolFactor * bolStdDev);
    

    if(!(dayData.date < startDate || dayData.date > endDate)) {
      tempArray = [dayData.date,dayData.closing,dayData.low,dayData.high,vGD,bolMed,bolLow,bolUpr];
      resArray.push(tempArray);
      console.log(dayData.date+": RSI("+RSI+"), MACD("+MACD+"), singnalMACD("+signalMACD+"), bollinger med ("+bolMed+")");
    }
   
  });
  return resArray;
}

export function standardDeviation(arr,xline) {
  let tSum = 0;
  arr.map((ele) => {
    tSum += Math.pow((ele-xline),2);
  });
  return Math.sqrt(tSum/(arr.length)); // n = (arr.length) minus 1 or not? is this the total space or only a sample?
}

export function getRSI(stockChange,lastRSI,n) {
  let medPos = 0; let medNeg = 0;

  if(lastRSI.length >= n) {
    lastRSI.shift();
  }
  lastRSI.push(stockChange);

  lastRSI.map((ele) => {
    if(ele >= 0) {
      medPos += ele;
    } else {
      medNeg += -(ele); // wichtig: für den durschnitt nur positive werte!
    }
  });

  return [((medPos/n) / ( (medNeg/n) + (medPos/n) )) * 100, lastRSI];
}


export function getNmedian(cVal,arrGD,n) {
  let median = 0;
  if(arrGD.length >= n) { // if 200 ele in array then remove the first entry
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