import * as React from "react";
import * as ReactDOM from 'react-dom';
import {FormControl, MenuItem, Select, Card, Box, Grid, Stack, Button} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import enLocale from 'date-fns/locale/en-GB';



export default function GraphMenu(){

    
    const [startdatum, setStartdatum] = React.useState(new Date('2022-05-30'));
    const handleStartdatum = (newStartdatum) => {
        setStartdatum(newStartdatum);
      };

      const [enddatum, setEnddatum] = React.useState(new Date('2022-06-13'));
      const handleEnddatum = (newEnddatum) => {
          setEnddatum(newEnddatum);
        };

    

    return(
      <div>
      <h4>Beachten Sie, dass die Börsen Samstag und Sonntag geschlossen sind und somit an diesen Tagen keine Werte existieren. </h4>
      <h4>Beginn der Werte-Erhebung: 2000-01-03.</h4>
      <h4>Derzeitiges Ende der Werte-Erhebung: 2022-06-17.</h4>    
             <LocalizationProvider dateAdapter={AdapterDateFns} locale={enLocale}>
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
     </div>   
    );

}