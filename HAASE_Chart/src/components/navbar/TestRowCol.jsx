import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Chart } from "react-google-charts";
import { FormControl, MenuItem, Select, Card, Box, Grid, Stack, Button, Table, TableBody,  TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import { getStockNames, getSingleStock, getClosingByDay } from '../graphs/Test';
import { stockData } from '../../../stockData';
import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutSizingExample() {
    return (
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }
  
  export default AutoLayoutSizingExample;