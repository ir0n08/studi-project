import * as React from "react";
import * as ReactDOM from 'react-dom';
import {FormControl, MenuItem, Select, Card, Box, Grid, Stack, Button} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';



export default function GraphMenu(){

    
    const [startdatum, setStartdatum] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleStartdatum = (newStartdatum) => {
        setStartdatum(newStartdatum);
      };

      const [enddatum, setEnddatum] = React.useState(new Date('2014-08-18T21:11:54'));
      const handleEnddatum = (newEnddatum) => {
          setEnddatum(newEnddatum);
        };

    

    return(
        
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Startdatum"
          inputFormat="yyyy-MM-dd"
          value={startdatum}
          onChange={handleStartdatum}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label="Enddatum"
          inputFormat="yyyy-MM-dd"
          value={enddatum}
          onChange={handleEnddatum}
          renderInput={(params) => <TextField {...params} />}
        />
        </Stack>
        </LocalizationProvider>
        
    );

}