import TodoListItem from './TodoListItem';
import './TodoList.scss';
import Todo from './model/Todo';

interface MyProps {
  todos: Array<Todo>;
}

const TodoList = ({ todos }: MyProps) => {
  return (
    <div className="TodoList">
      {todos.map((todo: Todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
