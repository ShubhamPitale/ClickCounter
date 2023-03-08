import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';
import classes from './Counter.module.css';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className={classes.container}>
      <div className={classes.block1}>
        <span
          className={classes.incrementBtn}
          onClick={() => dispatch(increment())}
        >
          +
        </span>
        <span className={classes.count}>{count}</span>
        <span
          className={classes.decrementBtn}
          onClick={() => dispatch(decrement())}
        >
          -
        </span>
      </div>

      <div className={classes.block2}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            className={classes.display}
          />
          <button
            className={classes.addAmountBtn}
            onClick={() => dispatch(incrementByAmount(addValue))}
          >
            Add Amount
          </button>
        </form>

        <button className={classes.resetBtn} onClick={resetAll}>
          Reset
        </button>
      </div>
      <div className={classes.footer}>
        Made by <a href="https://github.com/ShubhamPitale">Shubham Pitale</a>
      </div>
    </section>
  );
};
export default Counter;
