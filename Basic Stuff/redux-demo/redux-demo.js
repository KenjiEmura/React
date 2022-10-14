const redux = require("redux");

const defaultValue = { counter: 0 };

const counterReducer = (state = defaultValue, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

console.log("Initial state: ", store.getState());

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
