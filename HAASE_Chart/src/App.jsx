import { useState } from 'react';
import './App.css';
import layout from './components/layout/Layout';
import Graph from './components/graphs/Graph';
import SelectionCard from './components/navbar/SelectionCard';
import Navbar from './components/navbar/Navbar';
import { Box, Button, Card, FormControl, Grid, MenuItem, Select, Stack } from "@mui/material";
import GraphMenu from './components/graphs/GraphMenu';
import AutoLayoutSizingExample from './components/navbar/testRowCol';

export default function App() {

  return (
    <div className="App">

      <h1>HAASE Chartanalyse</h1>

      <SelectionCard/>
      <h4>Beachten Sie, dass die Börsen Samstag und Sonntag geschlossen sind und somit für diese Tage keine Werte existieren. </h4>
      <h4>Beginn der Werte-Erhebung: 2000-01-03.</h4>
      <h4>Derzeitiges Ende der Werte-Erhebung: 2022-06-17.</h4>
      <GraphMenu />



      <Graph />

    </div>
  )
}


