import * as React from "react";
import * as ReactDOM from 'react-dom';
import { FormControl, MenuItem, Select, Card, Box, Grid, Stack, Button, Paper} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import enLocale from 'date-fns/locale/en-GB';



export default function GraphMenu() {

  const [startdatum, setStartdatum] = React.useState(new Date('2022-05-30'));
  const handleStartdatum = (newStartdatum) => {
    setStartdatum(newStartdatum);
  };

  const [enddatum, setEnddatum] = React.useState(new Date('2022-06-13'));
  const handleEnddatum = (newEnddatum) => {
    setEnddatum(newEnddatum);
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