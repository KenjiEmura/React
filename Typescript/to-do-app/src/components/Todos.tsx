import { ReactNode } from "react";

type TodosProps = {
  message: string;
  children?: ReactNode;
};

const Todos = (props: TodosProps) => {
  return (
    <>
      <h1>{props.message}</h1>
      <ul>{props.children}</ul>
    </>
  );
};

export default Todos;
