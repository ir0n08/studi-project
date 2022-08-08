import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Chart } from "react-google-charts";
import { FormControl, MenuItem, Select, Card, Box, Grid, Stack, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import { getStockNames, getSingleStock, getClosingByDay } from '../graphs/Functions';
import { chartInput } from '../graphs/Graph';
import { updateChart } from '../graphs/UpdateGraph';
import { stockData } from '../../../stockData';
import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';




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
    const [kursColour, setKursColour] = React.useState('');
    const handleKursColour = (event) => {
        setKursColour(event.target.value);
        Object.assign(chartInput, { color: event.target.value });
        updateChart(chartInput);
    };
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

    //UseStates für Anzahl Tage Gl.D. und Standardabweichung Bollinger
    const [gleitenderDurchschnittTage, setGleitenderDurchschnittTage] = React.useState(200);   //ToDo Anpassen durch Paul
    const handleGleitenderDurchschnittTage = (event) => {
        setGleitenderDurchschnittTage(event.target.value);
        Object.assign(chartInput, { color: event.target.value });
        updateChart(chartInput);
    };
    const [bollingerAbweichung, setBollingerAbweichung] = React.useState('95%');       //ToDo Anpassen durch Paul
    const handleBollingerAbweichung = (event) => {
        setBollingerAbweichung(event.target.value);
        Object.assign(chartInput, { color: event.target.value });
        updateChart(chartInput);
    };








    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ margin: "10px", display: "flex", flexDirection: "row", gap: "40px" }}>
                <Box>
                    <Box
                        sx={{
                            
                            width: 285,
                            
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
                            <Box>
                                <FormControl sx={{ minWidth: 285 }} size="small">
                                    <InputLabel id={"select-company"}>Aktie</InputLabel>
                                    <Select
                                        labelid="select-company"
                                        id="select-company"
                                        value={stockName}
                                        label="Aktie"
                                        onChange={handleSelectName}
                                    >
                                        {companyNames}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl sx={{ minWidth: 285}} size="small">
                                    <InputLabel id={"select-company"} >Einfärbung Aktienkurs</InputLabel>
                                    <Select
                                        labelid="select-kurs-colour"
                                        id="select-kurs-colour"
                                        value={kursColour}
                                        label="Einfärbung Aktienkurs"
                                        onChange={handleKursColour}
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
                        </Stack>
                    </Box>

                </Box>
                <Box sx={{ margin: "10px", display: "flex", flexDirection: "column", gap: "10px", border: "1px solid #BBBBBB", padding:"10px", borderRadius: "7px"}}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "500px", justifyContent: "space-between" }}>
                        <FormControlLabel sx={{ width: 25 }} control={<Checkbox sx={{ marginRight: "0" }} checked={kerzenchartCheck} onChange={toggleKerzenchartCheck} />} />
                        <Typography sx={{ width: 300 }} variant='h6'>
                            Kerzenchart
                        </Typography>
                        <Tooltip sx={{ width: 25 }} title="Was ist das für ein Graph">
                        <InfoIcon></InfoIcon>
                        </Tooltip>
                        <FormControl sx={{ width: 150 }} size="small">
                            <InputLabel id="select-kerzenchart-colour">Einfärbung</InputLabel>
                            <Select
                                labelid="select-kerzenchart-colour"
                                id="select-kerzenchart-colour"
                                value={kerzenchartColour}
                                label="Einfärbung"
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

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "650px", justifyContent: "space-between" }}>
                        <FormControlLabel sx={{ width: 25 }} control={<Checkbox checked={gleitenderDurchschnittCheck} onChange={toggleGleitenderDurchschnitt} />} />
                        <Typography sx={{ width: 300 }} variant='h6'>
                            Gleitender Durchschnitt
                        </Typography>
                        <Tooltip sx={{ width: 25 }} title="Durchschnitt des Aktienkurses der letzten 30, 60, 90, 120 oder 200 Tage">
                        <InfoIcon></InfoIcon>
                        </Tooltip>
                        <FormControl sx={{ width: 150 }} size="small">
                            <InputLabel id="select-gleitenderDurchschnitt-colour">Einfärbung</InputLabel>
                            <Select
                                labelid="select-gleitenderDurchschnitt-colour"
                                id="select-gleitenderDurchschnitt-colour"
                                value={gleitenderDurchschnittColour}
                                label="Einfärbung"
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
                        <FormControl sx={{ width: 150 }} size="small">
                            <InputLabel id="select-gleitenderDurchschnitt-tage">Anzahl Tage</InputLabel>
                            <Select
                                labelid="select-gleitenderDurchschnitt-tage"
                                id="select-gleitenderDurchschnitt-tage"
                                value={gleitenderDurchschnittTage}
                                label="Anzahl Tage"
                                onChange={handleGleitenderDurchschnittTage}
                            >
                                <MenuItem value={30}>30</MenuItem>
                                <MenuItem value={60}>60</MenuItem>
                                <MenuItem value={90}>90</MenuItem>
                                <MenuItem value={120}>120</MenuItem>
                                <MenuItem value={200}>200</MenuItem>
                            </Select>
                        </FormControl>
                        
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "650px", justifyContent: "space-between" }}>
                        <FormControlLabel sx={{ width: 25 }} control={<Checkbox checked={bollingerCheck} onChange={toggleBollingerCheck} />} />
                        <Typography sx={{ width: 300 }} variant='h6'>
                            Bollinger-Bänder
                        </Typography>
                        <Tooltip sx={{ width: 25 }} title={<div>Entwickelt um Kurstrends zu erkennen. Von ihnen ausgehend kann man 4 Rückschlüsse ziehen: <br/><br/>
                        1. Sobald sich die Bänder dem zugrunde liegenden 20-Tage-Durchschnitt annähern, steht eine massive Kursbewegung bevor. <br/>
                        2. Kurse tendieren dazu, von einem Band zum anderen zu laufen. Notiert ein Kurs in der Nähe des einen Bandes, 
                        so ist kurzfristig eine gegensätzliche Tendenz in Richtung auf das andere Band zu erwarten. <br/>
                        3. Bildet sich innerhalb eines Bollinger-Bandes ein Boden oder ein Topp heraus, und wird dieses auch innerhalb des Bandes wiederholt, 
                        so ist eine Trendwende zu erwarten. <br/>
                        4. Bricht ein Kurs aus dem Bollinger-Band aus, so ist eine weitere Bewegung in Ausbruchsrichtung zu erwarten.</div>}>
                        <InfoIcon></InfoIcon>
                        </Tooltip>
                        <FormControl sx={{ width: 150 }} size="small">
                            <InputLabel id="select-bollinger-colour">Einfärbung</InputLabel>
                            <Select
                                labelid="select-bollinger-colour"
                                id="select-bollinger-colour"
                                value={bollingerColour}
                                label="Einfärbung"
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
                        <FormControl sx={{ width: 150 }} size="small">
                            <InputLabel id="select-bollinger-abweichung">Abweichung</InputLabel>
                            <Select
                                labelid="select-bollinger-abweichung"
                                id="select-bollinger-abweichung"
                                value={bollingerAbweichung}
                                label="Abweichung"
                                onChange={handleBollingerAbweichung}
                            >
                                <MenuItem value={'67%'}>67%</MenuItem>
                                <MenuItem value={'80%'}>80%</MenuItem>
                                <MenuItem value={'90%'}>90%</MenuItem>
                                <MenuItem value={'95%'}>95%</MenuItem>
                                <MenuItem value={'99%'}>99%</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "500px", justifyContent: "space-between" }}>
                        <FormControlLabel sx={{ width: 25 }} control={<Checkbox checked={macdCheck} onChange={toggleMacdCheck} />} />
                        <Typography sx={{ width: 300 }} variant='h6'>
                            MACD-Indikator
                        </Typography>
                        <Tooltip sx={{ width: 25 }} title="Ein steigender MACD zeigt einen Aufwärtstrend, ein fallender MACD einen Abwärtstrend an.">
                        <InfoIcon></InfoIcon>
                        </Tooltip>
                        <FormControl sx={{ width: 150 }} size="small">
                            <InputLabel id="select-MACD-colour">Einfärbung</InputLabel>
                            <Select
                                labelid="select-MACD-colour"
                                id="select-MACD-colour"
                                value={macdColour}
                                label="Einfärbung"
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

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "500px", justifyContent: "space-between" }}>
                        <FormControlLabel sx={{ width: 25 }} control={<Checkbox checked={rsCheck} onChange={toggleRsCheck} />} />
                        <Typography sx={{ width: 300 }} variant='h6'>
                            RS-Indikator
                        </Typography>
                        <Tooltip sx={{ width: 25 }} 
                        title={<div>RSI steht für relative Stärke Index. Er ist ein wichtiges Instrument in der technischen Analyse, da er die Dynamik eines Assets 
                            bestimmt und beurteilt, ob sich dieses in einem überkauften oder überverkauften Bereich befindet. <br/><br/>
                            Das Ergebnis ist ein Wert zwischen 0-100. Die meisten Analysten glauben, dass ein Asset bei einem Level von 70 überkauft ist 
                            und damit zu einer Korrektur neigen könnte, während ein Asset mit einem Niveau von 30 überverkauft 
                            ist und womöglich bereit für eine Rally ist.</div>}>
                        <InfoIcon></InfoIcon>
                        </Tooltip>
                        <FormControl sx={{ width: 150 }} size="small">
                            <InputLabel id="select-rs-colour">Einfärbung</InputLabel>
                            <Select
                                labelid="select-rs-colour"
                                id="select-rs-colour"
                                value={rsColour}
                                label="Einfärbung"
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
