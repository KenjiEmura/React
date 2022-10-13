import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameWasTouched, setEnteredNameWasTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const shouldShowError = !enteredNameIsValid && enteredNameWasTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredNameWasTouched(true);
    setEnteredName(event.target.value);
  };

  const formSumbissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameWasTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log("State: ", enteredName);
    setEnteredName("");
    setEnteredNameWasTouched(false);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameWasTouched(true);
  };

  const nameInputClasses = `form-control ${shouldShowError ? "invalid" : ""}`;

  return (
    <form onSubmit={formSumbissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {shouldShowError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
