import { connect } from 'react-redux';
import {decreaseAsync, increaseAsync} from "../modules/counter";
import Counter from '../components/Counters';

interface MyProps {
  number: number;

  increaseAsync(): void;

  decreaseAsync(): void;
}

const CounterContainer = ({
  number,
  increaseAsync,
  decreaseAsync,
}: MyProps) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state: any) => ({
    number: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  },
)(CounterContainer);
