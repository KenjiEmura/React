import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

let isLoadedForTheFirstTime = true;

const App = () => {
  const dispatch = useDispatch();
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const cartState = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    console.log("Cart state changed");
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "sending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
      const response = await fetch(
        "https://react-dummy-project.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartState),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data to server failed");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data was sent successfully!",
        })
      );
    };

    if (isLoadedForTheFirstTime) {
      isLoadedForTheFirstTime = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
      console.log(error.message);
    });
  }, [cartState, dispatch]);
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
