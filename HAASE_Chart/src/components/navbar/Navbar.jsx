import SelectionCard from './SelectionCard';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function Navbar() {

  return (
    <div id='navBar'>
      <div id='navContainer'>
        <SelectionCard class='navItem' />
      </div>
    </div>
  );
}
