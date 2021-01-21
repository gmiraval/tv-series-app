import React from 'react'; //libreria de react
import ReactDOM from 'react-dom'; //glue between react & DOM
import './index.css'; //styles
import App from './App'; //componente App that we are rendering
import reportWebVitals from './reportWebVitals';

//function to get current date
const getCurrentDate = () => { //arrow function format
//const getCurrentDate = function() { //normal function format
  const date = new Date();
  return date.toDateString();
} 

//jsx format. Then (under de hood) react app transforms it to React using Babel:
const greeting = <h1>Hello World! Current date: {getCurrentDate()}</h1> 
//curly braces in jsx let me interpret js expresion instead of string 

ReactDOM.render(
  greeting,
  document.getElementById('root')
);

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
