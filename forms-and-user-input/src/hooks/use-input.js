import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "UPDATE_INPUT_VALUE") {
    return { value: action.val, isTouched: state.isTouched };
  } else if (action.type === "CHANGE_TOUCH_STATE") {
    return { value: state.value, isTouched: action.val };
  } else {
    return { value: "", isTouched: false };
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const showError = !valueIsValid && inputState.isTouched;
  const inputFieldClasses = `form-control ${showError ? "invalid" : ""}`;

  const valueChangeHandler = (event) => {
    dispatch({ type: "UPDATE_INPUT_VALUE", val: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "CHANGE_TOUCH_STATE", val: true });
  };

  const resetInput = () => {
    dispatch({ type: "RESET_FIELD" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    showError,
    inputFieldClasses,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;
