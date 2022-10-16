import Todos from "./components/Todos";

import "./App.css";

const App = () => {
  const message = "It's working!!";
  return (
    <Todos message={message}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </Todos>
  );
};

export default App;
