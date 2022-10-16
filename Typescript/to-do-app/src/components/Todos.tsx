import { ReactNode } from "react";

// Data models
import Todo from "../models/todo";

// Components
import TodoItem from "./TodoItem";

type TodosProps = {
  items: Todo[];
  children?: ReactNode;
};

const Todos = (props: TodosProps) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};

export default Todos;
