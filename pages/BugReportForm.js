import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useRouter } from "next/router";

const theme = createTheme({
    spacing: 4,
});


const handleChange = (event) => {
    setState({
        ...state,
        [event.target.name]: event.target.checked,
    });
};



const Form = () => {
    const [currentApp, setCurrentApp] = React.useState({})
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });
    const { gilad, jason, antoine } = state;
    const router = useRouter();

    const handleChange = (event, name) => {
        setCurrentApp({ ...currentApp, [name]: event.target.value })
      }

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '10vh', marginTop: '5vh', width: '100%' }}
            >

                <Typography variant="h4" component="div" gutterBottom>
                    Bug Report Form
                </Typography>

                <Box >
                    <Grid item lg={12} sm={12}>
                        <TextField
                            id="standard-basic"
                            label="What were you trying to do?"
                            variant="standard"
                            fullWidth
                        />
                    </Grid>

                    <Grid item lg={12} sm={12}>
                        <br />
                        <TextField
                            id="standard-basic"
                            label="What were the results you were expecting?"
                            variant="standard"
                            fullWidth
                        />
                    </Grid>

                    <Grid item lg={12} sm={12}>
                        <br />
                        <TextField
                            id="standard-basic"
                            label="What was the actual result?"
                            variant="standard"
                            fullWidth
                        />
                    </Grid>

                    <Grid item lg={12} sm={12}>
                        <br />
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                            <FormLabel component="legend">Details of the environment (which browser, OS, etc.)</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                    }
                                    label="Google Chrome"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={jason} onChange={handleChange} name="jason" />
                                    }
                                    label="Microsoft Edge"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                    }
                                    label="Mozilla Firefox"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                    }
                                    label="Safari"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                    }
                                    label="Windows"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                    }
                                    label="Mac"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                    }
                                    label="Linux"
                                />
                            </FormGroup>
                            <FormHelperText>Please select appropriate environment</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item lg={12} sm={12}>

                        <TextField
                            id="standard-basic"
                            label="Could you tell us the steps we can take to reproduce the problem?"
                            variant="standard"
                            fullWidth
                        />
                    </Grid>

                    <Grid item lg={12} sm={12}>
                        <br />
                        <TextField
                            id="standard-basic"
                            label="Contact details (in case you want to be reached after the bug is resolved)"
                            variant="standard"
                            fullWidth
                        />
                    </Grid>

                    <Grid item lg={12} sm={12}>
                        <br />

                        <Tooltip title="Add" arrow open={currentApp?.name?.length < 5 ? true : false} placement="right-end">
                            <TextField
                               
                                value={currentApp.name}
                                onChange={(e) => handleChange(e, "name")}
                                label="Contact details (in case you want to be reached after the bug is resolved)"
                                variant="standard"
                                fullWidth
                            />
                        </Tooltip>
                    </Grid>

                    <Grid item lg={12} sm={12}>
                        <br />
                        <Button variant="contained">Submit</Button>

                    </Grid>


                </Box>


            </Grid>

        </ThemeProvider>
    );
};

export default Form;
