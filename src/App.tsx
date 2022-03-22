import React, { Component } from 'react';
import './App.css';
import ScrollBox from './ScrollBox';

class App extends Component<any, any> {
  scrollBox: ScrollBox | null | undefined;

  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button
          onClick={() => {
            if (this.scrollBox) {
              this.scrollBox.scrollToBottom();
            }
          }}
        >
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
