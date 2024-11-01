import axios from "axios";

const USER_ID = 5; 

const BASE_URL = process.env.REACT_APP_API_BASE_URL

export const fetchCartItems = async () => {
  const { data } = await axios.get(BASE_URL+`/carts/user/${USER_ID}`);
  return data.carts; // Returns the cart items
};

export const addToCart = async (products: { id: number; quantity: number; }[]) => {
    try {
      const response = await axios.post(`${BASE_URL}/carts/add`, {
        userId: USER_ID,
        products: products,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      return response.data; // Returns the updated cart data
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error; 
    }
  };

export const updateCartItemQuantity = async (cartItemId: number, quantity: number) => {
  const response = await axios.put(`${BASE_URL}/items/${cartItemId}`, {
    quantity,
  });
  return response.data; // Returns the updated cart item data
};

export const deleteCartItem = async (cartItemId: number) => {
  await axios.delete(`${BASE_URL}/items/${cartItemId}`);
  return { success: true }; // Indicate successful deletion
};
