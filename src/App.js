import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
// import PageDashboard from './components/Pages/PageDashboard';
// import PageSnapshots from './components/Pages/PageSnapshots';
// import PageISA from './components/Pages/PageISA';
// import PageCash from './components/Pages/PageCash';
import PageAllCats from './components/Pages/PageAllCats';
import PageUploadCat from './components/Pages/PageUploadCat';
import Navigation from './components/UI/Navigation';

// import { AssetProvider } from './context/assetContext';

import useStyles from './hooks/useStyles';
import './main.css';

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
        {/* <AssetProvider> */}
        <Router>
          <Navigation classes={classes} />
          <Route exact path="/" render={() => <PageAllCats classes={classes} />} />
          <Route exact path="/upload" render={() => <PageUploadCat classes={classes} />} />
        </Router>
        {/* </AssetProvider> */}
    </>
  )
};

export default App;