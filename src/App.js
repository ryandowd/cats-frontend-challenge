import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import PageAllCats from './components/Pages/PageAllCats';
import PageUploadCat from './components/Pages/PageUploadCat';
import Navigation from './components/UI/Navigation';

import useStyles from './hooks/useStyles';

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Router>
        <Navigation />
        <Route exact path="/" render={() => <PageAllCats classes={classes} />} />
        <Route exact path="/upload" render={() => <PageUploadCat classes={classes} />} />
      </Router>
    </>
  )
};

export default App;