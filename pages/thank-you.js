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

const Post = () => {

  const handleClose = () => {
    router.push("/");
  };

  const router = useRouter();
  const { issueUrl } = router.query;
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
            DPG Bug Reporter
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            exit
          </Button>
        </Toolbar>
      </AppBar>

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" style={{ marginTop: '5vh' }}>
          <Typography variant="h4" component="div" gutterBottom>
            Thank you! Your bug report has been submitted.
          </Typography>

          <Typography variant="h6" component="div" gutterBottom>
            Follow progress on your issue <a href={issueUrl}>here</a>.
          </Typography>

          <Typography variant="h6" component="div" gutterBottom>
            <a>{issueUrl}</a>
          </Typography>
        </Container>
      </React.Fragment>

    </div>
  );
};

export default Post;
