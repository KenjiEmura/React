import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

type newTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo = (props: newTodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current?.value;

    if (!enteredText || enteredText?.trim().length === 0) {
      // Validation failed, throw error or handle here
      return;
    }

    // Add the new todo
    props.onAddTodo(enteredText!);
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
