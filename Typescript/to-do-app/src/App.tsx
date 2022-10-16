import "./App.css";

// Components
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

const App = () => {
  return (
    <>
      <NewTodo />
      <Todos />
    </>
  );
};

export default App;
