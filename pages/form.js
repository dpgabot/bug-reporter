import * as React from 'react';
import Grid from '@mui/material/Grid';
import BugFormComponent from '../components/BugFormComponent'


export default function BasicGrid() {
    return (
        <Grid container spacing={2}>
            <Grid item lg={4} />
            <Grid item lg={8} xs={12}>
                <BugFormComponent />
            </Grid>
            <Grid item lg={4} />
        </Grid>

    );
}