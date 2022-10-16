type TodoItemProps = {
  text: string;
};

const TodoItem = (props: TodoItemProps) => {
  return <li>{props.text}</li>;
};

export default TodoItem;
