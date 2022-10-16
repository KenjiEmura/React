import { useState } from "react";
import "./App.css";

// Data models
import Todo from "./models/todo";

// Components
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(DUMMY_TODOS);

  const onAddTodoHandler = (todoText: string) => {
    setTodos((prevState) => [new Todo(todoText), ...prevState]);
  };

  return (
    <>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} />
    </>
  );
};

export default App;

const DUMMY_TODOS = [
  new Todo("Practice React"),
  new Todo("Learn Typescript"),
  new Todo("Learn Next.js"),
];
