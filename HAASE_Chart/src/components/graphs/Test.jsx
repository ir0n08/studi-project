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
  var resArray = [["Datum", nameStock]];
  let oDay = prices.map((dayData) => {
    // if note in day range remove it 
    if(!(dayData.date < startDate || dayData.date > endDate)) {
      tempArray = [dayData.date,dayData.closing];
      resArray.push(tempArray);
    }
   
  });
  return resArray;
}


export const Stocks = () => {

    return(
        <div className="stock-container">
            
        </div>
    );
   
};