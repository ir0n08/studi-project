import { useState } from 'react';
import './App.css';
import layout from './components/layout/Layout';
import Graph from './components/graphs/Graph';
import SelectionCard from './components/navbar/SelectionCard';
import Navbar from './components/navbar/Navbar';
import { Box, Button, Card, FormControl, Grid, MenuItem, Select, Stack } from "@mui/material";
import GraphMenu from './components/graphs/GraphMenu';
import {Typography} from '@mui/material';


export default function App() {

  return (
    <div className="App">
      <Box sx={{ margin: "30px", display: "flex", flexDirection: "row", gap: "30px", alignItems:"center", display: "flex", justifyContent: "center"}}>
    <img src="/images/HAASE_Logo3slim.jpg"></img>
      <Typography sx={{fontSize:"50px", fontWeight:"400"}}>Chartanalyse</Typography>
      </Box>
      <SelectionCard/>
      <GraphMenu />
      <Graph />

      <Typography id="aboutUs">by Hans, Able, Aigner, Sandner & Eisenmann &bull; HAW Landshut</Typography>
    </div>
  )
}


