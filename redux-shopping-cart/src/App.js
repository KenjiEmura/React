import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

const App = () => {
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const state = useSelector((state) => state);
  const printStateHandler = () => {
    console.log(state);
  };
  return (
    <Layout>
      {isCartShown && <Cart />}
      <Products />
      <button onClick={printStateHandler}>Print state</button>
    </Layout>
  );
};

export default App;
