import React from 'react'; //libreria de react
import ReactDOM from 'react-dom'; //glue between react & DOM
import './index.css'; //styles
import App from './components/App'; //componente App that we are rendering
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />,document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
