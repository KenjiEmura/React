import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter;
  });
  const showCounter = useSelector((state) => {
    return state.showCounter;
  });

  const toggleCounterHandler = () => {
    dispatch({ type: "toggleVisibility" });
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const increaseHandler = (amount) => {
    dispatch({ type: "increase", amount });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, 5)}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
