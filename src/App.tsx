import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component<any, any> {
  render() {
    return (
      <div className="App">
        \
        <header className="App">
          <img src={logo} className="logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="nooperner noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
