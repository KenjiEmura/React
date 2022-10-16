import { useContext } from "react";
import classes from "./Todos.module.css";
import TodosContext from "../store/todos-context";

// Components
import TodoItem from "./TodoItem";

const Todos = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
