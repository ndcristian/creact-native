import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (

  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component = {HomePage}></Route>
      {/* exact = will match exact pash. Otherwise if / is present in the route , wiil match the route */}
      <Route path='/hats' component = {HatsPage}></Route>
      
    </div>
  );
}

export default App;
