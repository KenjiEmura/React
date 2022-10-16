import React, { useRef, useContext } from "react";
import TodosContext from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo = () => {
  const todoCtx = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current?.value;

    if (!enteredText || enteredText?.trim().length === 0) {
      // Validation failed, throw error or handle here
      return;
    }

    // Add the new todo
    todoCtx.addTodo(enteredText!);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todoInput">Todo text</label>
      <input id="todoInput" type="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
