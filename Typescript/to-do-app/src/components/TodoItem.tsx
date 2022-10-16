import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

type todoItemProps = {
  todo: Todo;
  removeTodo: (id: string) => void;
};

const TodoItem = (props: todoItemProps) => {
  const removeTodoHandler = () => {
    props.removeTodo(props.todo.id);
  };
  return (
    <li onClick={removeTodoHandler} className={classes.item}>
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
