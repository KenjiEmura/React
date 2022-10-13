import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    showError: firstNameShowsError,
    inputFieldClasses: firstNameFieldClasses,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetInput: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    showError: lastNameShowsError,
    inputFieldClasses: lastNameFieldClasses,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetInput: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    showError: emailShowsError,
    inputFieldClasses: emailFieldClasses,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail,
  } = useInput((value) => value.includes("@"));

  // Form validation and submission
  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSumbissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log("First Name: ", firstName.trim());
    console.log("Last Name: ", lastName.trim());
    console.log("Email: ", email.trim());
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={formSumbissionHandler}>
      <div className="control-group">
        <div className={firstNameFieldClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameShowsError && (
            <p className="error-text">First name must not be empty</p>
          )}
        </div>
        <div className={lastNameFieldClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameShowsError && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailFieldClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailShowsError && (
          <p className="error-text">Email should contain "@"</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
