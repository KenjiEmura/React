import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Notification from "./components/UI/Notification";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { fetchCartData, sendCardData } from "./store/cart-actions";

let isLoadedForTheFirstTime = true;

const App = () => {
  const dispatch = useDispatch();
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const cartData = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isLoadedForTheFirstTime) {
      isLoadedForTheFirstTime = false;
      return;
    }
    if (cartData.changed) {
      dispatch(sendCardData(cartData));
    }
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
