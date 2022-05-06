import Todos from '../components/Todos';
import { useSelector } from 'react-redux';
import { changeInput, insert, remove, toggle } from '../modules/todos';
import useActions from '../lib/useAction';

const TodosContainer = (): JSX.Element => {
  const { input, todos } = useSelector(({ todos }: any) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodosContainer;
