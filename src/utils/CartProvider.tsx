import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartCountAtom } from "../recoil/atom"; 
import { fetchCartItems } from "../services/cart.service"; 

const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [cartCount, setCartCount] = useRecoilState(cartCountAtom);

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const cartItems = await fetchCartItems();
        setCartCount(cartItems.length); 
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };

    loadCartItems();
  }, []);

  return <>{children}</>;
};

export default CartProvider;
