import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

const BACKEND_ENDPOINT =
  "https://react-dummy-project.firebasedatabase.app/cart.json";

const NOTIFICATION_CLEAR_TIME = 2500;

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "fetching",
        title: "Fetching...",
        message: "Fetching data from the server",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(BACKEND_ENDPOINT);
      if (!response.ok) {
        throw new Error("Couldn't fetch data from the server");
      }
      return await response.json();
    };

    try {
      const cartData = await sendRequest();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "The cart data was fetched from the server",
        })
      );
      setTimeout(() => {
        dispatch(uiActions.hideNotifications());
      }, NOTIFICATION_CLEAR_TIME);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};

export const sendCardData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "sending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(BACKEND_ENDPOINT, {
        method: "PUT",
        body: JSON.stringify({
          items: cartData.items,
          totalQuantity: cartData.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data to server failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data was sent successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
    setTimeout(() => {
      dispatch(uiActions.hideNotifications());
    }, NOTIFICATION_CLEAR_TIME);
  };
};
