import Counter from '../components/Counters';
import { connect } from 'react-redux';

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

const mapStateToProps = (state: any) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch: any) => ({
  increase: () => {
    console.log('increase');
  },
  decrease: () => {
    console.log('decrease');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
