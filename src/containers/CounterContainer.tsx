import Counter from '../components/Counters';
import { connect } from 'react-redux';
import { decrease, increase } from '../modules/counter';

interface MyProps {
  number: number;

  increase(): void;

  decrease(): void;
}

const CounterContainer = ({ number, increase, decrease }: MyProps) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state: any) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
