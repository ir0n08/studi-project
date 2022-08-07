import { useState } from 'react';
import './App.css';
import layout from './components/layout/Layout';
import Graph from './components/graphs/Graph';
import SelectionCard from './components/navbar/SelectionCard';
import Navbar from './components/navbar/Navbar';
import {Box, Button, Card, FormControl, Grid, MenuItem, Select, Stack} from "@mui/material";
import GraphMenu from './components/graphs/GraphMenu';

export default function App() {

  const [selection, setSelection] = useState([])



  return (
    <div className="App">
   
      <Navbar />

      <GraphMenu/>

      <Graph />

    </div>
  )
}


