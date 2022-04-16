import React, { Component } from 'react';

class RefSample extends Component<any, any> {
  input = React.createRef<HTMLInputElement>();

  handleFocus = () => {
    if (this.input.current) {
      this.input.current.focus();
    }
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default RefSample;