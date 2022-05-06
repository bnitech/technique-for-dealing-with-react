import Counter from '../components/Counters';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state: any) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  );
};

export default CounterContainer;
