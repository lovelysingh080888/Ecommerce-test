import React, { useEffect } from "react";
import { fetchCartItems, updateCartItemQuantity, deleteCartItem } from "../services/cart.service";
import { useRecoilValue } from "recoil";
import CartItem from "../components/carts/CartItem"; 
import { cartAtom } from "../recoil/atom";
import Layout from "../components/generics/Layout";
import { toast } from "react-toastify";

const CartPage: React.FC = () => {
  const cartItems = useRecoilValue(cartAtom);

  useEffect(() => {
    const loadCartItems = async () => {
      await fetchCartItems(); 
    };

    loadCartItems();
  }, []);

  const handleUpdateQuantity = async (cartItemId: number, quantity: number) => {
    if (quantity < 1) {
      toast.warn("Quantity cannot be less than 1");
      return;
    }
    const updatedItem = await updateCartItemQuantity(cartItemId, quantity);
    toast.success("Updated quantity successfully!");
  };

  const handleDeleteItem = async (cartItemId: number) => {
    await deleteCartItem(cartItemId);
    toast.success("Item deleted from cart!");
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center mt-10">
            <h2 className="text-lg font-semibold">Your cart is empty</h2>
            <p className="text-gray-500">Start shopping now!</p>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cartItems.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onUpdateQuantity={handleUpdateQuantity} 
                  onDeleteItem={handleDeleteItem}
                />
              ))}
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold">Total Price: ${calculateTotalPrice()}</h2>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
