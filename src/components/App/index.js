import React, { Component } from 'react'; //libreria de react
import Intro from '../Intro'
import './App.css';

class App extends Component {
  state = {
    series: []
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can finde all ofo your most loved series" />
        The lenght of series array - {this.state.series.length}    
      </div>
    );
  }
}


export default App;
