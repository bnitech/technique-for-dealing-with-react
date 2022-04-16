import { MdAdd } from 'react-icons/md';
import { useCallback, useState } from 'react';
import './TodoInsert.scss';

const TodoInsert: any = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
