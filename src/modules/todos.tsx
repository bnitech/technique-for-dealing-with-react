import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input: string) => input);

let id = 3;
export const insert = createAction(INSERT, (text: string) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id: number) => id);
export const remove = createAction(REMOVE, (id: number) => id);

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialState: any = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리엑트와 리덕스 사용하기',
      done: false,
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    [INSERT]: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
    [TOGGLE]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo: any) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      todos: state.todos.filter((todo: any) => todo.id !== action.payload),
    }),
  },
  initialState,
);

export default todos;
