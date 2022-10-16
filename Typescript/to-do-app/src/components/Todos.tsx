import { ReactNode } from "react";
import classes from "./Todos.module.css";

// Data models
import Todo from "../models/todo";

// Components
import TodoItem from "./TodoItem";

type todosProps = {
  items: Todo[];
  children?: ReactNode;
  removeTodo: (id: string) => void;
};

const Todos = (props: todosProps) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={props.removeTodo} />
      ))}
    </ul>
  );
};

export default Todos;
