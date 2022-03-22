import { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component<any, any> {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  input: HTMLInputElement | null | undefined;

  handleChange = (e: any) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = (e: any) => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });

    if (this.input) {
      this.input.focus();
    }
  };

  render() {
    return (
      <div>
        <input
          ref={ref => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
