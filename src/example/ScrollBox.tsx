import { Component } from 'react';
import CSS from 'csstype';

class ScrollBox extends Component<any, any> {
  box: HTMLDivElement | null | undefined;

  scrollToBottom = () => {
    if (this.box) {
      const { scrollHeight, clientHeight } = this.box;
      this.box.scrollTop = scrollHeight - clientHeight;
    }
  };

  render() {
    const style: CSS.Properties = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle: CSS.Properties = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };

    return (
      <div
        style={style}
        ref={ref => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
