import * as React from "react";
import * as ReactDOM from 'react-dom';
import { FormControl, MenuItem, Select, Card, Box, Grid, Stack, Button, Paper} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import enLocale from 'date-fns/locale/en-GB';
import {updateChart} from '../graphs/UpdateGraph';
import {chartInput} from '../graphs/Graph';


export default function GraphMenu() {

  const [startdatum, setStartdatum] = React.useState(new Date(chartInput.start));
  const handleStartdatum = (newStartdatum) => {
    let checkDate = new Date(chartInput.end);
    let minOffset = (checkDate.getTime() - (14*24*60*60*1000))
    if(newStartdatum >= minOffset) {
      alert("Mindestabstand für die HASSE Analyse sind 14 Tage");
      newStartdatum = new Date(checkDate.getTime() - (30*24*60*60*1000));
      console.log(newStartdatum);
    } 
    setStartdatum(newStartdatum);
    Object.assign(chartInput, { start: newStartdatum.toISOString().split('T')[0] });
    updateChart(chartInput);
  };

  const [enddatum, setEnddatum] = React.useState(new Date(chartInput.end));
  const handleEnddatum = (newEnddatum) => {

    let checkDate = new Date(chartInput.start);
    let minOffset = (checkDate.getTime() + (14*24*60*60*1000));
    if(newEnddatum <= minOffset) {
      alert("Mindestabstand für die HASSE Analyse sind 14 Tage");
      newEnddatum = new Date(checkDate.getTime() + (30*24*60*60*1000));
      console.log(newEnddatum);
    } 

    setEnddatum(newEnddatum);
    Object.assign(chartInput, { end: newEnddatum.toISOString().split('T')[0] });
    updateChart(chartInput);
  };




  return (
    <div>
      <Box sx={{ display:"flex", justifyContent:"center", gap:"50px", marginTop:"40px"}}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={enLocale}>

            <Box>
              <DesktopDatePicker
                label="Startdatum"
                inputFormat="yyyy-MM-dd"
                value={startdatum}
                onChange={handleStartdatum}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
            <Box>
              <DesktopDatePicker
                label="Enddatum"
                inputFormat="yyyy-MM-dd"
                value={enddatum}
                onChange={handleEnddatum}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>

          </LocalizationProvider>
        </Box>
    </div>
  );
}