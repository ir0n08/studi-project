import SelectionCard from './SelectionCard';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function Navbar() {


// In Navbar Array an Selectioncards, diese quasi als Objekt mit (name,colour,graph), dies ist ja dann in app.jsx und von da an Graph übergeben,    am Ende aber whr nur eine Firma auswählbar!!

const [cards, setCards] = React.useState([]);   

const addCardHandler = () =>{
  let arr = cards.concat(<SelectionCard class = 'navItem'></SelectionCard>);
  for (let i = 0; i < cards.length; i++){
    cards[i].key = i;
  }
  setCards(arr)
  console.log(cards)
}

function SelectionData (name, colour, graph){
  this.name = name;
  this.colour = colour;
  this.graph = graph;
}

let SelectionArray = [];
/*
const [selection, setSelection] = React.useState(SelectionArray);
    const handleSelection = (event) => {
      SelectionArray.push(<SelectionCard class = 'navItem'></SelectionCard>)
      console.log(SelectionArray)
      };
*/
  return (
    <div id='navBar'>
    <div id='navContainer'>
    <SelectionCard class = 'navItem'></SelectionCard>
    <SelectionCard class = 'navItem'></SelectionCard>
    <SelectionCard class = 'navItem'></SelectionCard>
</div>
<div id='addButton'>
<Button variant="contained" size='large' color='success' onClick={addCardHandler}>Add</Button>
</div>
</div>
  );
}

/*
{cards.map( cards =>(
  <li key={this.cards.key}>{cards}</li>
))}
*/