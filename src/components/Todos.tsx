import React from 'react';

interface ItemProps {
  todo: any;

  onToggle(id: number): void;

  onRemove(id: number): void;
}

const TodoItem = ({ todo, onToggle, onRemove }: ItemProps): JSX.Element => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

interface MyProps {
  input: string;
  todos: any;

  onChangeInput(input: string): void;

  onInsert(text: string): void;

  onToggle(): void;

  onRemove(): void;
}

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}: MyProps) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (e: any) => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo: any) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
