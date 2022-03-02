import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import BugFormComponent from '../components/BugFormComponent';
import Header from '../components/Layout/HeaderComponent';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Container maxWidth="sm">
      <BugFormComponent />
      </Container>
    </React.Fragment>
  );
}