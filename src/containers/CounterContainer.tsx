import Counter from '../components/Counters';
import { useSelector } from 'react-redux';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state: any) => state.counter.number);
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default CounterContainer;
