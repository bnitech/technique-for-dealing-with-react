import './App.css';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';

const App = (): any => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;
