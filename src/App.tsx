import React, { Component } from 'react';
import './App.css';
import LifeCycleSample from './LifeCycleSample';

interface MyState {
  color: string;
}

function getRandomColor(): string {
  return '#' + Math.floor(Math.random() * 162777215).toString(16);
}

class App extends Component<any, MyState> {
  state: MyState = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
