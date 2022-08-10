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
Open your local browser at [localhost:3000](http://localhost:3000/)  
  
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
- The visual graph is displayed with the use of [Google Charts](https://developers.google.com/chart/interactive/docs) 
- Google Charts requires a singel dim array that is provied by the function `getClosingByDay()` that is in `./src/components/graphs/Functions.jsx`
- `getClosingByDay()` requires the following arguments: stock json array (of a singel stock), first day of visible chart, last day of visible chart, Moving Average visible?, Moving Average day range, Bollinger Bands visible?, Bollinger Bands standard devirabes factor (95,4% = 2x), candlesticks visible?
- The `getClosingByDay()` function return three arrays as there are max three charts: the standard stock chart which is always visible, the MACS chart and the RSI chart
- All of the five technical analysis need seperate function where their values are calcualted. These functions are also in `./src/components/graphs/Functions.jsx`. The initial graph is drawn in `./src/components/graphs/Graph.jsx`
  
<br><br><br>
### JSON File
  
The supplied json file has been modified as js an given an var name `stockData`. The file has the following general structure:
  
```js
export const stockData = [{
    "values":
    [
        {
            "isin": "GB007007",
            "name": "A COMAPANY INC",
            "symbol": "ABR",
            "prices":[*]
         },
         ...next itm ...
     ]
}];
```
<br><br>
\*In the `prices` array the stock makets data is stored. For the supplied time period this means approx. 22 years x 255 workdays. Each entry contains five values:

```json
        {
            "date": "2022-06-20",
            "currency": "EUR",
            "opening": 65.8,
            "high": 65.84,
            "low": 64.02,
            "closing": 64.74
        }
```  
_To save processing data and storage it would be advised to move the currency item from every day to the stocks root node_    
  <br><br>
The `getClosingByDay()` function has to loop thourgh the whole json with every site visit because some technical analysis require data for their calculation that is not visible in the chart. This requires more compute power but keeps the code nice and simple: *Simplicity favors regularity*

---
 
## Libarys in use

- REACT
- Google Charts
- MUI 
- react-bootstrap 
- react-dom 


---
  

# Project progress

- [x] **Milestone 1**<br>One Pager for each graph with mathematical operation and explanation (#1) <br> JS Framework decision and test setup (#2) <br> UI/Graphs framework decision and first test cases (#3) <br> Requirements specification, must-have definition and define test cases (#4) <br> Detailed project plan & backlog (#5) <br> Documentation setup (#5) 
- [x] **Milestone 2** <br> Min. 3 graph analyses implemented with data from CSV/XML <br> CSV/XML input on backend side <br> Graph is displayed rudimentary 
- [x] **Milestone 3** <br> All graph analyses implemented <br> Multiple courses selectable <br> UI finished except for finishing touches <br> Documentation 90% complete 
- [x] **Milestone 4** <br> QA proceeded positively <br> Documentation completed 
- [ ] **Milestone 5 _the extra mile_** <br> API connection <br> Moblie Responsive UI <br> More? 
- [ ] **Project handover**

# Lessons Learned
  
**Prositiv(ish):**  
- Splitting into components invisible  
- A project member as a 'think tank' who can be asked about technical questions has proven its worth. This means that not everyone has to read up on the subject matter and this one person can explain the facts in a way that is easy to understand for the members of the implementation -> great time saving.
- Starting the project early was worthwhile, but the initial enthusiasm must be maintained next time.
- Pizza coding sessions are a lot of fun and are especially good for inexperienced coders to learn from the experienced ones -> here onsite is clearly better than remote.
  
  
**Negative(ish):**
- Assigning project tasks during exam time is not useful.
- Holding standup meetings asynchronously does not work in new teams.
- Student motivation should not be controlled by time and completion factors, but by results.
- Roles should always have a backup in case of illness.
- Team calls should be scheduled with video, otherwise there is too much chaos. An agenda should be recognisable
  
  
## Update code
git add .<br>
git commit -m "Commit message"<br>
git push origin your-branch // dont push to master without pull req<br>
  
  
# Contact  
s-peisen@haw-landshut.de
