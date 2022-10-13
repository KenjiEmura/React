import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueWasTouched, setEnteredValueWasTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const showError = !valueIsValid && enteredValueWasTouched;
  const inputFieldClasses = `form-control ${showError ? "invalid" : ""}`;

  const valueChangeHandler = (event) => {
    setEnteredValueWasTouched(true);
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setEnteredValueWasTouched(true);
  };

  const resetInput = () => {
    setEnteredValue("");
    setEnteredValueWasTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    showError,
    inputFieldClasses,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;
