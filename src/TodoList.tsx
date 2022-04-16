import TodoListItem from './TodoListItem';
import './TodoList.scss';
import Todo from './model/Todo';

interface MyProps {
  todos: Array<Todo>;
  onRemove(id: number):void;
  onToggle(id: number):void;
}

const TodoList = ({ todos, onRemove, onToggle }: MyProps) => {
  return (
    <div className="TodoList">
      {todos.map((todo: Todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
};

export default TodoList;
