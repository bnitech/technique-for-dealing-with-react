import React, { createContext, useState } from 'react';
import { Color } from '../model/Color';

interface State {
  color: Color;
  subColor: Color;
}

interface Value {
  state: State;
  actions: {
    setColor(color: Color): void;
    setSubColor(color: Color): void;
  };
}

const ColorContext = createContext<Value>({
  state: { color: 'black', subColor: 'red' },
  actions: {
    setColor: () => {
      return;
    },
    setSubColor: () => {
      return;
    },
  },
});

const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState<Color>('black');
  const [subColor, setSubColor] = useState<Color>('red');

  const value: Value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
