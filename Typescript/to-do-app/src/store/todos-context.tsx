import React from "react";
import Todo from "../models/todo";

export type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const initialState: TodosContextObj = {
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
};

const TodosContext = React.createContext<TodosContextObj>(initialState);

export default TodosContext;
