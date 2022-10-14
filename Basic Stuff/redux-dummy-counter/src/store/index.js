import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleVisibility(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;

export default store;

// // This is the 'native' way to create the reducer (without using redux toolkit)
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case "increase":
//       return {
//         ...state,
//         counter: state.counter + action.amount,
//       };
//     case "decrement":
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case "toggleVisibility":
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };
