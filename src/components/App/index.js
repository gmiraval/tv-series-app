import React, { Component } from 'react'; //libreria de react
import Intro from '../Intro'
import './App.css';

class App extends Component {
  state = {
    series: []
  }

  componentDidMount() { //https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    const series = ["Vikings", "Game of Thrones"];
    setTimeout(() => {
      //this.setState({series: series})
      this.setState({series}) //if const name here is the same that the state prop name you can write it this way
    }, 2000);   //state changes after 2 secs, length goes from 0 to 2
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
