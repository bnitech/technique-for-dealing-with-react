import { Color } from '../model/Color';
import React, { Component } from 'react';
import ColorContext from '../contexts/color';

const colors: Array<Color> = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = (color: Color) => {
    this.context.actions.setColor(color);
  };

  handleSetSubColor = (subColor: Color) => {
    this.context.actions.setSubColor(subColor);
  };

  render(): React.ReactNode {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: 'flex' }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer',
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubColor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
