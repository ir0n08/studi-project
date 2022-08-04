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



  return (
    <div id='navBar'>
<div id='navContainer'>
    <SelectionCard class = 'navItem'></SelectionCard>
    <SelectionCard class = 'navItem'></SelectionCard>
    <SelectionCard class = 'navItem'></SelectionCard>
    <SelectionCard class = 'navItem'></SelectionCard>
    <SelectionCard class = 'navItem'></SelectionCard>
    <SelectionCard class = 'navItem'></SelectionCard>
    <SelectionCard class = 'navItem'></SelectionCard>
    <SelectionCard class = 'navItem'></SelectionCard>
</div>
<div id='addButton'>
<Button variant="contained" size='large' color='success'>Add</Button>
</div>
</div>
  );
}
