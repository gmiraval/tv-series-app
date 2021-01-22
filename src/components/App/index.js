import React, { Component } from 'react'; //libreria de react
import Intro from '../Intro'
import Series from '../../containers/Series'
import './App.css';
import 'whatwg-fetch'; ///requires -> tv-series-app$ sudo npm install whatwg-fetch --save

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can finde all of your most loved series" />
        <Series />    
      </div>
    );
  }
}


export default App;
