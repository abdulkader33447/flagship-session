import React, { useEffect, useState } from "react";
import { CartContext } from "./Context";
import { getCart } from "../utils";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // local storage to cart
    setCart(getCart())
  },[])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
