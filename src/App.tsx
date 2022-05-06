import './App.css';
import React from 'react';
import Counter from './components/Counters';
import Todos from './components/Todos';

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
      <hr />
      <Todos
        input={''}
        todos={null}
        onChangeInput={() => {
          return;
        }}
        onInsert={() => {
          return;
        }}
        onToggle={() => {
          return;
        }}
        onRemove={() => {
          return;
        }}
      />
    </div>
  );
};

export default App;
