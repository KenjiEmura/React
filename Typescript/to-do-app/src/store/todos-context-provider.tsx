import React, { ReactNode, useState } from "react";
import TodosContext, { TodosContextObj } from "./todos-context";
import Todo from "../models/todo";

type contextProviderProps = {
  children?: ReactNode;
};

const TodosContextProvider = (props: contextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(DUMMY_TODOS);

  const onAddTodoHandler = (todoText: string) => {
    setTodos((prevState) => [new Todo(todoText), ...prevState]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const context: TodosContextObj = {
    items: todos,
    addTodo: onAddTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={context}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

const DUMMY_TODOS = [
  new Todo("Practice React"),
  new Todo("Learn Typescript"),
  new Todo("Learn Next.js"),
];
