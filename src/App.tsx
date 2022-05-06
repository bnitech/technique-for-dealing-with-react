import './App.css';
import React from 'react';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
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
