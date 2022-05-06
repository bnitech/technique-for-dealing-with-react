import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

interface State {
  number: number;
}

interface Action {
  type: string;
}

const initialSate: State = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [INCREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialSate,
);

export default counter;
