import './App.css';
import React from 'react';
import Counter from './components/Counters';

const App = () => {
  return (
    <div>
      <Counter
        number={0}
        onIncrease={() => {
          return;
        }}
        onDecrease={() => {
          return;
        }}
      />
    </div>
  );
};

export default App;
