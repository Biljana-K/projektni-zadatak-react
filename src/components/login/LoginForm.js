import { useState, useEffect, useReducer } from "react";
import { Form } from "react-router-dom";

import classes from "./LoginForm.module.css";
import LoginIcon from "./LoginIcon";

const userNameReducer = (state, action) => {
  if (action.type === "USER_NAME") {
    return { value: action.val, isValid: action.val.trim() !== "" };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_PASSWORD") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

function LoginForm(props) {
  const [formIsValid, setFormIsValid] = useState(false);

  const [userNameState, dispatchUserName] = useReducer(userNameReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const { isValid: userNameIsValid } = userNameState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setFormIsValid(userNameIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [userNameIsValid, passwordIsValid]);

  const userNameChangeHandler = (event) => {
    dispatchUserName({ type: "USER_NAME", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_PASSWORD", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(userNameState.value, passwordState.value);
  };

  return (
    <main className={classes.container}>
      <Form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.image}>
          <LoginIcon />
        </div>
        <div className={classes.input}>
          <input
            id="userName"
            type="text"
            name="userName"
            value={userNameState.value}
            onChange={userNameChangeHandler}
            placeholder="USERNAME"
          />

          <input
            id="password"
            type="password"
            name="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            placeholder="PASSWORD"
          />
        </div>
        <div className={classes.action}>
          <button
            className={classes.button}
            type="submit"
            onClick={props.onClick}
            disabled={!formIsValid}
          >
            LOGIN
          </button>
        </div>
      </Form>
    </main>
  );
}

export default LoginForm;
