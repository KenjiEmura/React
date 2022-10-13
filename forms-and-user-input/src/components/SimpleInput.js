import { useState } from "react";

const SimpleInput = (props) => {
  // Name field
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameWasTouched, setEnteredNameWasTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const shouldShowErrorInNameField =
    !enteredNameIsValid && enteredNameWasTouched;
  const nameInputClasses = `form-control ${
    shouldShowErrorInNameField ? "invalid" : ""
  }`;

  const nameInputChangeHandler = (event) => {
    setEnteredNameWasTouched(true);
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameWasTouched(true);
  };

  // Email field
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredMailWasTouched, setEnteredMailWasTouched] = useState(false);

  const errorToShowInMailField = enteredMailWasTouched
    ? enteredMail.length < 5
      ? "Please enter a mail with at least 5 characters"
      : !enteredMail.includes("@")
      ? "The email must contain '@'"
      : null
    : null;

  console.log(errorToShowInMailField);
  const shouldShowErrorInMailField =
    errorToShowInMailField && enteredMailWasTouched;
  const mailInputClasses = `form-control ${
    shouldShowErrorInMailField ? "invalid" : ""
  }`;

  const mailInputChangeHandler = (event) => {
    setEnteredMailWasTouched(true);
    setEnteredMail(event.target.value);
  };

  const mailInputBlurHandler = () => {
    setEnteredMailWasTouched(true);
  };

  // Form validation and submission
  let formIsValid = false;
  if (enteredNameIsValid && !errorToShowInMailField) {
    formIsValid = true;
  }

  const formSumbissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameWasTouched(true);
    if (!formIsValid) {
      return;
    }
    console.log("Name: ", enteredName.trim());
    console.log("Email: ", enteredMail.trim());
    setEnteredName("");
    setEnteredNameWasTouched(false);
    setEnteredMail("");
    setEnteredMailWasTouched(false);
  };

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
        {shouldShowErrorInNameField && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={mailInputClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          onChange={mailInputChangeHandler}
          onBlur={mailInputBlurHandler}
          value={enteredMail}
        />
        {shouldShowErrorInMailField && (
          <p className="error-text">{errorToShowInMailField}</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
