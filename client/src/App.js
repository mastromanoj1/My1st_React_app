import React, { Fragment } from 'react';

import './App.css';



import Navbar from '../src/components/layout/navbar';
import Footer from '../src/components/layout/footer'
import Landing from './components/layout/landing';
import Routes from './components/routing/Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from "./store";
import ThemeContextProvider from '../src/components/contexts/authuser';
import BookContextProvider from '../src/components/contexts/authcontext';
import GcontextProvider from '../src/components/contexts/gauthcontext';
import GisauthProvider from '../src/components/contexts/gisauth'
import Signup from "../src/components/gauth/signup"






function App() {
  return (
    <ThemeContextProvider>
    <BookContextProvider>
    <GcontextProvider>
    <GisauthProvider>
    <Provider store = {store}>
        <Router>
        <Navbar/>
        

      
        <div className="fixspace"></div>
       <Signup/>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
        <Footer/>
      </Router>
      </Provider>
      </GisauthProvider>
      </GcontextProvider>
      </BookContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
