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

      <Typography sx={{fontSize:"60px", fontWeight:"500"}}>HAASE Chartanalyse</Typography>

      <SelectionCard/>
      <GraphMenu />
      <Graph />

    </div>
  )
}


