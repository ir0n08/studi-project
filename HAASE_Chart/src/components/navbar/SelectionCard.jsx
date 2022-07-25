import React from 'react';
import {FormControl, MenuItem, Select, Card, Box, Grid, Stack, Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';


export default function SelectionCard() {

    let name = "";
    let colour = "";
    let graph = "";

    let handleSelectColour = () => {};
    let handleSelectName = () => {};
    let handleSelectGraph = () => {};


    return (
        <Stack
            direction="column"
            justifyContent="left"
            alignItems="left"
            spacing={1}

        >
            <Button variant="outlined" color="error" sx={{width:100, }}>
                delete
            </Button>

            <Box
                sx={{
                    boxShadow: 3,
                    width: 130,
                    height: 155,
                    border: '2px grey',
                    // margin: theme.spacing(1)
                    p: {
                        xs: 1, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                    },
                    zIndex: 'tooltip', // theme.zIndex.tooltip
                }}
            >
                <Stack
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={2}
                >
                    <FormControl sx={{  minWidth: 120 }} size="small">
                        <InputLabel id={"select-company"}>Company</InputLabel>
                        <Select
                            lableId="select-company"
                            id="select-company"
                            value={name}
                            lable="company"
                            onChange={handleSelectName} // @TODO write handler
                        ></Select>
                    </FormControl>
                    <FormControl sx={{  minWidth: 120 }} size="small">
                        <InputLabel id="select-graphtype">Graph</InputLabel>
                        <Select
                            lableId = "select-graphtype"
                            id = "select-graphtype"
                            value={graph}
                            lable="graphtype"
                            onChange={handleSelectGraph} // @TODO write handler
                        ></Select>
                    </FormControl>
                    <FormControl sx={{  minWidth: 120 }} size="small">
                        <InputLabel id="select-colour">colour</InputLabel>
                        <Select
                            lableId="select-colour"
                            id="select-colour"
                            value={colour}
                            lable="colour"
                            onChange={handleSelectColour} // @TODO write handler
                        ></Select>
                    </FormControl>
                </Stack>
            </Box>
        </Stack>
    )
        
        
        

}