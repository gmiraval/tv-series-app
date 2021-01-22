import React, { Component } from 'react'; //libreria de react
import './App.css';

const Intro = (props) => (  //important JSX neeed them capitalized for custom components
  <p className="App-Intro">
    Our first functional component
  </p>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro />    
      </div>
    );
  }
}


export default App;
