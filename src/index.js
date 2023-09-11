import React from 'react';
import ReactDOMClient from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const helpText = "Help text"

const elements = (<div className="name">
  <h1>{helpText}</h1>
  <input placeholder={helpText} />
</div>)

//const app = document.getElementById("app")

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(elements)