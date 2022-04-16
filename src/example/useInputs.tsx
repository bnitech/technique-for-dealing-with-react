import { useReducer } from 'react';

function reducer(state: any, action: HTMLInputElement) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm: {
  name: string;
  nickname: string;
}) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e: any) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
