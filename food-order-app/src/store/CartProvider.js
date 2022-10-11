import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemTocartHandler = (item) => {};

  const removeItemFromCartHandler = (item) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemTocartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;
