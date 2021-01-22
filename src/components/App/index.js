import React, { Component } from 'react'; //libreria de react
import Intro from '../Intro'
import './App.css';
import 'whatwg-fetch'; ///requires -> tv-series-app$ sudo npm install whatwg-fetch --save

class App extends Component {
  state = {
    series: []
  }

  componentDidMount() { //https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
      
    //1st test
    //.then((response)=>{console.log(response)}) //first test to see query @ browser console

      .then(response=>response.json())

    //2nd test  
    /*   .then(json => console.log(json)) //watch result @ console */

    //3rd test -update state array with response
      .then(json => this.setState({series: json})) //we can see 10 elements -> series state updated OK
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can finde all of your most loved series" />
        The lenght of series array - {this.state.series.length}    
      </div>
    );
  }
}


export default App;
