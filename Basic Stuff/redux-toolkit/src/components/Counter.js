import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  // ↓ This state is just to test that React is included with the redux toolkit package
  const [isShown, setIsShown] = useState(true);
  const visibilityHandler = () => {
    setIsShown(!isShown);
  };

  // ↓ Redux state management ↓
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.value;
  });
  const isCounterShown = useSelector((state) => {
    return state.counter.isCounterShown;
  });

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = (amount) => {
    dispatch(counterActions.increase(amount));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterVisibilityHandler = () => {
    dispatch(counterActions.toggleVisibility());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterShown && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, 5)}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterVisibilityHandler}>
        Toggle Counter Visibility
      </button>
    </main>
  );
};

export default Counter;
