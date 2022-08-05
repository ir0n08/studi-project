import SelectionCard from './SelectionCard';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

// In Navbar Array an Selectioncards, diese quasi als Objekt mit (name,colour,graph), dies ist ja dann in app.jsx und von da an Graph übergeben,    am Ende aber whr nur eine Firma auswählbar!!

function SelectionData (name, colour, graph){
  this.name = name;
  this.colour = colour;
  this.graph = graph;
}

let SelectionArray = [];


const [selection, setSelection] = React.useState(SelectionArray);
    const handleSelection = (event) => {
      SelectionArray.push(<SelectionCard class = 'navItem'></SelectionCard>)
      console.log(SelectionArray)
      };

  return (
    <div id='navBar'>
    <div id='navContainer'>
    {SelectionArray}
    <SelectionCard class = 'navItem'></SelectionCard>
</div>
<div id='addButton'>
<Button variant="contained" size='large' color='success' onClick={handleSelection}>Add</Button>
</div>
</div>
  );
}
