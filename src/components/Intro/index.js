import React from 'react';

const Intro = props => (  //if you pass only one argument into arrow function you can avoid parentheses
    <p className="App-Intro">
        {props.message}
    </p>
  )

export default Intro;
