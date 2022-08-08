import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Chart } from "react-google-charts";
import { FormControl, MenuItem, Select, Card, Box, Grid, Stack, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import { getStockNames, getSingleStock, getClosingByDay } from '../graphs/Test';
import { stockData } from '../../../stockData';
import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export var chartInput = {};
Object.assign(chartInput, { id: 'DE0008404005', start: '2020-03-01', end: '2020-07-01', mcas: false, median: false, medianInt: 200, color: '#ff0007' });


export default function SelectionCard() {

    let companyNames = [];
    for (let item of getStockNames(stockData)) {
        companyNames.push(<MenuItem value={item.isin}>{item.name}</MenuItem>)
    }

    const [stockName, setStockName] = React.useState('');
    const handleSelectName = (event) => {
        //console.log(event.target.value);
        setStockName(event.target.value);
        Object.assign(chartInput, { id: event.target.value });
        updateChart(chartInput);
    };


    //Der kommt noch weg, genauso der Input direkt unter Company, jede Grafi kkriegt eigenen Handler
    const [stockColour, setStockColour] = React.useState('');
    const handleSelectColour = (event) => {
        setStockColour(event.target.value);
        Object.assign(chartInput, { color: event.target.value });
        updateChart(chartInput);
    };
    //Der kommt auch noch weg normal
    const [stockGraph, setStockGraph] = React.useState('');
    const handleSelectGraph = (event) => {
        setStockGraph(event.target.value);
    };



    //UseStates für Checkboxes
    const [kerzenchartCheck, setKerzenchartCheck] = React.useState(false);
    const toggleKerzenchartCheck = (event) => {
        setKerzenchartCheck(event.target.checked)
    }
    const [gleitenderDurchschnittCheck, setGleitenderDurchschnittCheck] = React.useState(false);
    const toggleGleitenderDurchschnitt = (event) => {
        setGleitenderDurchschnittCheck(event.target.checked)
    }
    const [macdCheck, setMacdCheck] = React.useState(false);
    const toggleMacdCheck = (event) => {
        setMacdCheck(event.target.checked)
    }
    const [rsCheck, setRsCheck] = React.useState(false);
    const toggleRsCheck = (event) => {
        setRsCheck(event.target.checked)
    }
    const [bollingerCheck, setBollingerCheck] = React.useState(false);
    const toggleBollingerCheck = (event) => {
        setBollingerCheck(event.target.checked)
    }




    //UseStates für Farbauswahl der verschiedenen Graphen
    const [kerzenchartColour, setKerzenchartColour] = React.useState('');
    const handleKerzenchartColour = (event) => {
        setKerzenchartColour(event.target.value);
        Object.assign(chartInput, { color: event.target.value });
        updateChart(chartInput);
    };
    const [gleitenderDurchschnittColour, setGleitenderDurchschnittColour] = React.useState('');
    const handleGleitenderDurchschnittColour = (event) => {
        setGleitenderDurchschnittColour(event.target.value);
        Object.assign(chartInput, { color: event.target.value });
        updateChart(chartInput);
    };
    const [macdColour, setMacdColour] = React.useState('');
    const handleMacdColour = (event) => {
        setMacdColour(event.target.value);
        Object.assign(chartInput, { color: event.target.value });
        updateChart(chartInput);
    };
    const [rsColour, setRsColour] = React.useState('');
    const handleRsColour = (event) => {
        setRsColour(event.target.value);
        Object.assign(chartInput, { color: event.target.value });
        updateChart(chartInput);
    };
    const [bollingerColour, setBollingerColour] = React.useState('');
    const handleBollingerColour = (event) => {
        setBollingerColour(event.target.value);
        Object.assign(chartInput, { color: event.target.value });
        updateChart(chartInput);
    };









    return (
        <Box sx={{display:"flex", justifyContent:"center"}}>
        <Box sx={{margin:"10px", display:"flex", flexDirection:"row", gap:"40px"}}>
            <Box>
                <Stack
                    direction="column"
                    justifyContent="left"
                    alignItems="left"
                    spacing={1}
                >
                    <Box
                        sx={{
                            boxShadow: 3,
                            width: 285,
                            height: "100%",
                            border: '2px grey',
                            // margin: theme.spacing(1)
                            p: {
                                xs: 1, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                            },
                            zIndex: 'tooltip', // theme.zIndex.tooltip
                        }}
                    >
                        <Stack
                            direction="column"
                            justifyContent="space-around"
                            alignItems="center"
                            spacing={2}
                        >
                            <FormControl sx={{ minWidth: 285 }} size="small">
                                <InputLabel id={"select-company"}>Company</InputLabel>
                                <Select
                                    lableid="select-company"
                                    id="select-company"
                                    value={stockName}
                                    lable="company"
                                    onChange={handleSelectName}
                                >
                                    {companyNames}
                                </Select>

                            </FormControl>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{margin:"10px", display:"flex", flexDirection:"column", gap:"10px"}}>
            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", gap: "20px", width:"500px", justifyContent: "space-between"}}>
                <FormControlLabel control={<Checkbox sx={{marginRight:"0"}} checked={kerzenchartCheck} onChange={toggleKerzenchartCheck} />} />
                <Typography variant='h6'>
                    Kerzenchart
                </Typography>
                <FormControl sx={{ minWidth: 120 }} size="small">
                    <InputLabel id="select-kerzenchart-colour">colour</InputLabel>
                    <Select
                        lableid="select-kerzenchart-colour"
                        id="select-kerzenchart-colour"
                        value={kerzenchartColour}
                        lable="kerzenchartColour"
                        onChange={handleKerzenchartColour}
                    >
                        <MenuItem value={'#55EAB1'}>Türkis</MenuItem>
                        <MenuItem value={'#3028EB'}>Blau</MenuItem>
                        <MenuItem value={'#60EB00'}>Hellgrün</MenuItem>
                        <MenuItem value={'#EB3C17'}>Rot</MenuItem>
                        <MenuItem value={'#FFEB02'}>Gelb</MenuItem>
                        <MenuItem value={'#EBC50C'}>Orange</MenuItem>
                        <MenuItem value={'#4B006B'}>Lila</MenuItem>
                        <MenuItem value={'#051700'}>Schwarz</MenuItem>
                        <MenuItem value={'#858585'}>Grau</MenuItem>
                    </Select>
                </FormControl>
                </Box>

                <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", gap: "20px", width:"500px", justifyContent: "space-between"}}>
                <FormControlLabel control={<Checkbox checked={gleitenderDurchschnittCheck} onChange={toggleGleitenderDurchschnitt} />} />
                <Typography variant='h6'>
                    Gleitender Durchschnitt
                </Typography>
                <FormControl sx={{ minWidth: 120 }} size="small">
                    <InputLabel id="select-gleitenderDurchschnitt-colour">colour</InputLabel>
                    <Select
                        lableid="select-gleitenderDurchschnitt-colour"
                        id="select-gleitenderDurchschnitt-colour"
                        value={gleitenderDurchschnittColour}
                        lable="gleitenderDurchschnittColour"
                        onChange={handleGleitenderDurchschnittColour}
                    >
                        <MenuItem value={'#55EAB1'}>Türkis</MenuItem>
                        <MenuItem value={'#3028EB'}>Blau</MenuItem>
                        <MenuItem value={'#60EB00'}>Hellgrün</MenuItem>
                        <MenuItem value={'#EB3C17'}>Rot</MenuItem>
                        <MenuItem value={'#FFEB02'}>Gelb</MenuItem>
                        <MenuItem value={'#EBC50C'}>Orange</MenuItem>
                        <MenuItem value={'#4B006B'}>Lila</MenuItem>
                        <MenuItem value={'#051700'}>Schwarz</MenuItem>
                        <MenuItem value={'#858585'}>Grau</MenuItem>
                    </Select>
                </FormControl>
                </Box>

                <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", gap: "20px", width:"500px", justifyContent: "space-between"}}>
                <FormControlLabel control={<Checkbox checked={macdCheck} onChange={toggleMacdCheck} />} />
                <Typography variant='h6'>
                    MACD-Indikator
                </Typography>
                <FormControl sx={{ minWidth: 120 }} size="small">
                    <InputLabel id="select-MACD-colour">colour</InputLabel>
                    <Select
                        lableid="select-MACD-colour"
                        id="select-MACD-colour"
                        value={macdColour}
                        lable="macdColour"
                        onChange={handleMacdColour}
                    >
                        <MenuItem value={'#55EAB1'}>Türkis</MenuItem>
                        <MenuItem value={'#3028EB'}>Blau</MenuItem>
                        <MenuItem value={'#60EB00'}>Hellgrün</MenuItem>
                        <MenuItem value={'#EB3C17'}>Rot</MenuItem>
                        <MenuItem value={'#FFEB02'}>Gelb</MenuItem>
                        <MenuItem value={'#EBC50C'}>Orange</MenuItem>
                        <MenuItem value={'#4B006B'}>Lila</MenuItem>
                        <MenuItem value={'#051700'}>Schwarz</MenuItem>
                        <MenuItem value={'#858585'}>Grau</MenuItem>
                    </Select>
                </FormControl>
                </Box>

                <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", gap: "20px", width:"500px", justifyContent: "space-between"}}>
                <FormControlLabel control={<Checkbox checked={rsCheck} onChange={toggleRsCheck} />} />
                <Typography variant='h6'>
                    RS-Indikator
                </Typography>
                <FormControl sx={{ minWidth: 120 }} size="small">
                    <InputLabel id="select-rs-colour">colour</InputLabel>
                    <Select
                        lableid="select-rs-colour"
                        id="select-rs-colour"
                        value={rsColour}
                        lable="rsColour"
                        onChange={handleRsColour}
                    >
                        <MenuItem value={'#55EAB1'}>Türkis</MenuItem>
                        <MenuItem value={'#3028EB'}>Blau</MenuItem>
                        <MenuItem value={'#60EB00'}>Hellgrün</MenuItem>
                        <MenuItem value={'#EB3C17'}>Rot</MenuItem>
                        <MenuItem value={'#FFEB02'}>Gelb</MenuItem>
                        <MenuItem value={'#EBC50C'}>Orange</MenuItem>
                        <MenuItem value={'#4B006B'}>Lila</MenuItem>
                        <MenuItem value={'#051700'}>Schwarz</MenuItem>
                        <MenuItem value={'#858585'}>Grau</MenuItem>
                    </Select>
                </FormControl>
                </Box>

                <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", gap: "20px", width:"500px", justifyContent: "space-between"}}>
                <FormControlLabel control={<Checkbox checked={bollingerCheck} onChange={toggleBollingerCheck} />} />
                <Typography variant='h6'>
                    Bollinger-Bänder
                </Typography>
                <FormControl sx={{ minWidth: 120 }} size="small">
                    <InputLabel id="select-bollinger-colour">colour</InputLabel>
                    <Select
                        lableid="select-bollinger-colour"
                        id="select-bollinger-colour"
                        value={bollingerColour}
                        lable="bollingerColour"
                        onChange={handleBollingerColour}
                    >
                        <MenuItem value={'#55EAB1'}>Türkis</MenuItem>
                        <MenuItem value={'#3028EB'}>Blau</MenuItem>
                        <MenuItem value={'#60EB00'}>Hellgrün</MenuItem>
                        <MenuItem value={'#EB3C17'}>Rot</MenuItem>
                        <MenuItem value={'#FFEB02'}>Gelb</MenuItem>
                        <MenuItem value={'#EBC50C'}>Orange</MenuItem>
                        <MenuItem value={'#4B006B'}>Lila</MenuItem>
                        <MenuItem value={'#051700'}>Schwarz</MenuItem>
                        <MenuItem value={'#858585'}>Grau</MenuItem>
                    </Select>
                </FormControl>
                </Box>
            </Box>
            </Box>

        </Box>
    )




}




/*
function setStockNameGlobal(name) {
    console.log("setSN:"+name);
    //var data = google.visualization.arrayToDataTable(r.d);
    //var chart = new google.visualization.LineChart($("#chartArea")[0]);
    //chart.draw(data, options);
    Object.assign(resObj, { id: name} );

    updateChart(name,'2020-03-01','2020-07-01');
}*/

function updateChart(i) {

    var cStockData = getSingleStock(i.id, stockData);
    let stockClosingData = getClosingByDay(cStockData, i.start, i.end);

    var options = {
        legend: 'bottom',
        hAxis: {
            title: "Datum",
        },
        vAxis: {
            title: "Stock value in EUR",

        },
        intervals: { 'color': 'series-color', },
        interval: {
            'i0': { 'style': 'boxes', 'fillOpacity': 1 },
            'i1': { 'style': 'boxes', 'fillOpacity': 1 },

            'i2': { 'style': 'area', 'curveType': 'function', 'fillOpacity': 0.3 }
            //'b1': { 'style':'area', 'curveType':'function', 'fillOpacity':0.3 }
        },
        series: {
            0: { color: i.color }, // actuale stock value
            1: { curveType: "function", color: '#49baff', opacity: 1 }, // average line
            //2: { curveType: "function", color: '#8677F2', opacity: 0.1}, // lower bollinger
            2: { curveType: "function", color: '#B588D4', opacity: 1 }//, // average bollinger
            // 4: { curveType: "function", color: '#FF00D4', opacity: 0.1} // upper bollinger
        },
    };

    const root = ReactDOM.createRoot(
        document.getElementById('chartArea')
    );
    var ele = (
        <Chart
            chartType="LineChart"
            width="100%"
            height="600px"
            data={stockClosingData}
            options={options}
        />
    );
    root.render(ele);

}



/*
    <FormControl sx={{  minWidth: 285 }} size="small">
                        <InputLabel id="select-graphtype">Graph</InputLabel>
                        <Select
                            lableid = "select-graphtype"
                            id = "select-graphtype"
                            value={stockGraph}
                            lable="graphtype"
                            onChange={handleSelectGraph}
                        >
                            <MenuItem value={0}>Kerzenchart</MenuItem>
                            <MenuItem value={1}>Gleitender Durchschnitt</MenuItem>
                            <MenuItem value={2}>MACD-Indikator</MenuItem>
                            <MenuItem value={3}>RS-Indikator</MenuItem>
                            <MenuItem value={4}>Bollinger-Bänder</MenuItem>   
                        </Select>
                    </FormControl>
*/