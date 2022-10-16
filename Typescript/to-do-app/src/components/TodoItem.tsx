import { useContext } from "react";
import TodosContext from "../store/todos-context";

import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = (props: TodoItemProps) => {
  const todoCtx = useContext(TodosContext);
  const removeTodoHandler = () => {
    todoCtx.removeTodo(props.todo.id);
  };
  return (
    <li onClick={removeTodoHandler} className={classes.item}>
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
