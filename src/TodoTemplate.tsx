import './TodoTemplate.scss';

interface Props {
  children: any;
}

const TodoTemplate = ({ children }: Props) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
