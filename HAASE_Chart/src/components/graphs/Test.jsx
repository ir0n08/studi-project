import React from "react";
import { stockData } from "../../../stockDataS";
import { data } from "./Graph";

export const arrStocks = stockData;
/*


export function transStocks(stockData) {
   
    {
        var output = {name: "data.name"};
        
        //stockData.map((data, key) => {

            
            
            //output['name'] = data.name;
            /*
            let i = 0;
            {
                data.prices.map((pdata, key) => {

                    
                    output.date = pdata.date;
                    
                    //output[i].open = pdata.opening;
                    i++;
                });
            }
            
        //});
        return output;
    }
    
}
*/

export const Stocks = () => {
    return(
        <div className="stock-container">
            
        </div>
    );
    /*
  return (
    <>
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>

              {data.name}

              {data.prices.map((pdata, key) => {
                return (
                   <div>{pdata.date + ": " + pdata.opening}</div>
                );
              })}
            </div>

            
          );
        })}


      </div>
    </>
  );*/

};