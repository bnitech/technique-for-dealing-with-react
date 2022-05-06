import React from "react";

interface ItemProps {
  todo: any;

  onToggle(): void;

  onRemove(): void;
}

const TodoItem = ({ todo, onToggle, onRemove }: ItemProps): JSX.Element => {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
};

interface MyProps {
  input: string;
  todos: any;

  onChangeInput(): void;

  onInsert(): void;

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
  const onSubmit = (e:any) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem todo={null} onToggle={()=>{return}} onRemove={()=>{return}} />
        <TodoItem todo={null} onToggle={()=>{return}} onRemove={()=>{return}} />
        <TodoItem todo={null} onToggle={()=>{return}} onRemove={()=>{return}} />
        <TodoItem todo={null} onToggle={()=>{return}} onRemove={()=>{return}} />
        <TodoItem todo={null} onToggle={()=>{return}} onRemove={()=>{return}} />
      </div>
    </div>
  );
};

export default Todos;
