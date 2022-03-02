import React from "react";
import { useRouter } from "next/router";

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Container from '@mui/material/Container';

const Page = () => {

  const handleClose = () => {
    router.push("/");
  };

  const router = useRouter();
  return (
    <div>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          DPG Bug Reporting Tool
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            exit
          </Button>
        </Toolbar>
      </AppBar>

      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: '5vh'}}>
        <Typography variant="h4" component="div" gutterBottom>
          Oops!
        </Typography>

        <Typography variant="h6" component="div" gutterBottom>
          Something went wrong while submitting your issue. <a href="/">Please try again</a>
        </Typography>
      </Container>
    </React.Fragment>


       
      
    </div>
  );
};

export default Page;
