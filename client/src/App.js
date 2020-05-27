import React from 'react';
import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (

  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
   
          {/* *!* for documentation */}
          {/* <Route exact path='/' component = {HomePage}></Route> */}
          {/* <Route exact={false} path='/' component = {HomePage}></Route> */}
          {/* exact = will match exact pash. Otherwise if / is present in the route , wiil match the route */}
          {/* exact = {true or false} , if not specified , default means true */}
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/hats' component={HatsPage}></Route>
  

      </Switch>

    </div>
  );
}

export default App;
