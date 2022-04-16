import React, { Component } from 'react';

interface MyState {
  error: boolean;
}

class ErrorBoundary extends Component<any, MyState> {
  state: MyState = {
    error: false,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error: true,
    });
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.error) return <div>에러가 발생했습니다.</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
