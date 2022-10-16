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

  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} removeTodo={removeTodoHandler} />
    </>
  );
};

export default App;

const DUMMY_TODOS = [
  new Todo("Practice React"),
  new Todo("Learn Typescript"),
  new Todo("Learn Next.js"),
];
