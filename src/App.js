import React, { Component } from 'react';

import './Componant/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import { BrowserRouter as Router, Routes, Route, Link, Switch,browserHistory  } from 'react-router-dom';
import { Home } from './Componant/Home';
import {Navbar} from '../src/Componant/Navbar/Navbar'
import { Result } from './Componant/Result';
import About from './Componant/About';
import Footer from './Componant/Footer/Footer';
import Faq from './Componant/Faq';
import NotFound from './Componant/NotFound';




function App() {
  return (
    <>   
             <Router>
             
    <Navbar />
             <Switch>

                <Route exact path="/" component={Home}/>
                <Route exact path="/result" component={Result}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/faq" component={Faq}/>
                {<Route  component={NotFound}/>}
                </Switch>
                <Footer />
             </Router>  
   </>

  );
};

export default App;
