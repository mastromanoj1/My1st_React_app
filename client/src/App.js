import React, { Fragment } from 'react';

import './App.css';


import Navbar from '../src/components/layout/navbar';
import Landing from './components/layout/landing';
import Routes from './components/routing/Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from "./store";
import ThemeContextProvider from '../src/components/contexts/authuser';
import BookContextProvider from '../src/components/contexts/authcontext';






function App() {
  return (
    <ThemeContextProvider>
    <BookContextProvider>
    <Provider store = {store}>
        <Router>
        <Navbar/>
      
        <div className="fixspace"></div>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
      </Provider>
      </BookContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
