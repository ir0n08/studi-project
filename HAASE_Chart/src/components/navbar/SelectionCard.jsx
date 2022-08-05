import * as React from 'react';
import {FormControl, MenuItem, Select, Card, Box, Grid, Stack, Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import {getStockNames } from '../graphs/Test';
import { stockData } from '../../../stockData';




export default function SelectionCard() {
    
    let companyNames = [];
    for (let item of getStockNames(stockData)){
        companyNames.push(<MenuItem value={item.isin}>{item.name}</MenuItem>)
    }

    const [stockName, setStockName] = React.useState('');
    const handleSelectName = (event) => {
        setStockName(event.target.value);
      };

      const [stockColour, setStockColour] = React.useState('');
      const handleSelectColour = (event) => {
          setStockColour(event.target.value);
        };

        const [stockGraph, setStockGraph] = React.useState('');
    const handleSelectGraph = (event) => {
        setStockGraph(event.target.value);
      };



    return (
        <Stack
            direction="column"
            justifyContent="left"
            alignItems="left"
            spacing={1}

        >
            <Button variant="outlined" color="error" sx={{width:100, }}>
                delete
            </Button>

            <Box
                sx={{
                    boxShadow: 3,
                    width: 130,
                    height: 155,
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
                    <FormControl sx={{  minWidth: 120 }} size="small">
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
                    <FormControl sx={{  minWidth: 120 }} size="small">
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
                    <FormControl sx={{  minWidth: 120 }} size="small">
                        <InputLabel id="select-colour">colour</InputLabel>
                        <Select
                            lableid="select-colour"
                            id="select-colour"
                            value={stockColour}
                            lable="colour"
                            onChange={handleSelectColour}
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
                </Stack>
            </Box>
        </Stack>
    )
        
        
        

}