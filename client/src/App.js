import React from 'react';
import './App.css';


import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import {setCurrentLocation} from './redux/location/location-action';
import {connect} from 'react-redux'

const HatsPage = () => (

  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
  
      <Switch>
   
          {/* *!* for documentation */}
          {/* <Route exact path='/' component = {HomePage}></Route> */}
          {/* <Route exact={false} path='/' component = {HomePage}></Route> */}
          {/* exact = will match exact pash. Otherwise if / is present in the route , wiil match the route */}
          {/* exact = {true or false} , if not specified , default means true */}
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/hats' component={HatsPage}></Route>

      </Switch>

  
  );
}


const mapDispatchToProps = (dispatch)=>{
  console.log ('App::mapDispatchToProps:', dispatch);
  return {
    setCurrentLocation: location =>dispatch(setCurrentLocation(location))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
