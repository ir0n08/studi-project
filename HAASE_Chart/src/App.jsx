import { useState } from 'react';
import './App.css';
import layout from './components/layout/Layout';
import SelectionCard from './components/navbar/SelectionCard';
import Navbar from './components/navbar/Navbar';
import {Box, Button, Card, FormControl, Grid, MenuItem, Select, Stack} from "@mui/material";

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />

      < Stack
        direction="row"
        justifyContent="space-around"
        spacing={
          2
        } >
        <SelectionCard />
        <SelectionCard />
        <SelectionCard />
        <SelectionCard />
        <SelectionCard />

      </Stack>
    </div>
  )
}


