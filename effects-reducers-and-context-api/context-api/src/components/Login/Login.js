import React, { useState, useEffect, useReducer, useContext } from "react";

import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";

const reducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.verifier(action.val),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: action.verifier(state.value),
    };
  }
  return { value: "", isValid: false };
};

const emailVerifier = (input) => {
  if (input.includes("@")) {
    return true;
  } else {
    return false;
  }
};

const passwordVerifier = (input) => {
  if (input.trim().length > 6) {
    return true;
  } else {
    return false;
  }
};

const Login = (props) => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(reducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(reducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Checking for validity inside timer");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 1000);

    return () => {
      console.log("Clear timer");
      clearTimeout(timer);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: "USER_INPUT",
      val: event.target.value,
      verifier: emailVerifier,
    });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: "USER_INPUT",
      val: event.target.value,
      verifier: passwordVerifier,
    });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR", verifier: emailVerifier });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR", verifier: passwordVerifier });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="Email"
          type="email"
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
