import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  value: 0,
  isCounterShown: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    decrement(state) {
      state.value--;
    },
    toggleVisibility(state) {
      state.isCounterShown = !state.isCounterShown;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
