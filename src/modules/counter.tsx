const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = (): Action => ({ type: INCREASE });
export const decrease = (): Action => ({ type: DECREASE });

interface State {
  number: number;
}

interface Action {
  type: string;
}

const initialSate: State = {
  number: 0,
};

function counter(state = initialSate, action: Action): State {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
