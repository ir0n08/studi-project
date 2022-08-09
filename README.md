# HAASE Stock Chart Analyse Site
by s-mablee, s-nsand1, s-rhanss, s-peisen & s-aaign2
<br><br>
## About HAASE
HAASE is a stock market analysing website using JS/REACT to apply five technical anylse function to an index supplied by a JSON file. The project was done as a student project at University of Applied Science Landshut, Germany. The code is public but reusage is only permitted by request. 
<br>
<br>
## Install HAASE 

1. **Add Git Repo**  
`git remote add origin https://github.com/ir0n08/studi-project.git`  
`git clone https://github.com/ir0n08/studi-project.git FOLDERNAME`  
or  
`git clone --branch BRANCHNAME https://github.com/ir0n08/studi-project.git FOLDERNAME`<br>
<br>
  
2. **Install modules**  
`cd /your/folder/HAASE_Chart`  
`npm install` // might require administrative rights  
<br>
  
3. **Run Dev version**  
`npm run dev`  
Open your local browser at http://localhost:3000/  
<br>
Our IDE of choice was **MS Visual Studio Code**  
  
# How does it works  
The user has the option to choose a stock of his choice, change the stock lines color. The technical analysises that are availabile are:  
1. [Candlesticks](https://school.stockcharts.com/doku.php?id=chart_analysis:introduction_to_candlesticks)
2. [Moving Average](https://school.stockcharts.com/doku.php?id=technical_indicators:moving_averages) of [30|60|100|200] days as line
3. [Bollinger Bands](https://school.stockcharts.com/doku.php?id=technical_indicators:bollinger_bands) (default setting: 20days)
4. [Relative Strength Indicator (RSI)](https://school.stockcharts.com/doku.php?id=technical_indicators:relative_strength_index_rsi) (default setting: 30/70)
5. [Moving Average Convergence/Divergence Oscillator (MACS)](https://school.stockcharts.com/doku.php?id=technical_indicators:moving_average_convergence_divergence_macd) (default setting: 26/12/9)
  
  
## Data Flow
`cd HAASE_Chart`
- Stock input data is in `./stockData.js`<br/>The json was declared as js so it can directly be imported into react
- The visual graph is displayed with the use of [Google Charts]() 
- Google Charts requires a singel dim array that is provied by the function `getClosingByDay()` that is in `./src/components/graphs/Functions.jsx`
- `getClosingByDay()` requires the following arguments: stock json array (of a singel stock), first day of visible chart, last day of visible chart, Moving Average visible?, Moving Average day range, Bollinger Bands visible?, Bollinger Bands standard devirabes factor (95,4% = 2x), candlesticks visible?
- The `getClosingByDay()` function return three arrays as there are max three charts: the standard stock chart which is always visible, the MACS chart and the RSI chart
- All of the five technical analysis need seperate function where their values are calcualted. These functions are also in `./src/components/graphs/Functions.jsx`. The initial graph is drawn in `./src/components/graphs/Graph.jsx`
  
  
  
---
  
  
## Update code
git add .<br>
git commit -m "Commit message"<br>
git push origin your-branch // dont push to master without pull req<br>
