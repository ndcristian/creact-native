import React from 'react';

import Header from './components/layout/Header';
import BodyZone from './components/layout/BodyZone';
import './App.css';

class App extends React.Component {
state =  {user: {name:"anonim", role:"anonim"}};

  render() {
    console.log (this.state);
     var apiUrl = window.location.protocol + "//" + window.location.host + "/api";
    return (
         <div className="App">
          <Header>
     
          </Header>
     {apiUrl} {this.user}
          <BodyZone>
             
          </BodyZone>
      


            </div>
    );
  }
}
export default App;
