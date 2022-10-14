import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Notification from "./components/UI/Notification";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { sendCardData } from "./store/cart-slice";

let isLoadedForTheFirstTime = true;

const App = () => {
  const dispatch = useDispatch();
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const cartData = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isLoadedForTheFirstTime) {
      isLoadedForTheFirstTime = false;
      return;
    }
    dispatch(sendCardData(cartData));
  }, [cartData, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartShown && <Cart />}
        <Products />
      </Layout>
    </>
  );
};

export default App;
