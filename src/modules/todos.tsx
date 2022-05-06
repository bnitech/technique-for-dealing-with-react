import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

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
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft: any) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft: any) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft: any) => {
        const todo = draft.todos.find((todo: any) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft: any) => {
        const index = draft.todos.findIndex((todo: any) => todo.id !== id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

export default todos;
