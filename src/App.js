import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Title from "./components/Title.js";
import LightSwitch from "./components/Lightswitch.js";
import UserBoard from "./components/UserBoard.js"
import Clock from "./components/Clock.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <main>
          <Title content="Some Simple Title" />
          <LightSwitch />
          <UserBoard />
          <Clock />
        </main>
      </div>
    );
  }
}
/* 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Welcome to Codaisseur
          </a>
        </header>
      </div>
    );
  }
}
 */
export default App;
