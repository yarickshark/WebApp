import React from 'react';
//import * as ReactDOMClient from 'react-dom/client';
import Header from './components/Header';

class App extends React.Component {
  helpText = ${WebApp.WebAppUser.username}
  //helpText = "Help text"
  render() {
    return (<div className="name">
    <Header title="Шапка сайта" />
  <h1>{this.helpText}</h1>
  <input placeholder={this.helpText} />
</div>)
  }
}

export default App