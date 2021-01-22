import React, { Component } from 'react';

//container component
//https://www.newline.co/fullstack-react/p/using-presentational-and-container-components-with-redux/


class Series extends Component {
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
            <div>
                The lenght of series array - {this.state.series.length}
            </div>
        )
    }
}

export default Series;