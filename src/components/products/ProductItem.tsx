import React from "react";
import { useRecoilState } from "recoil";
import { cartAtom, cartCountAtom } from "../../recoil/atom";
import { motion } from "framer-motion";
import { addToCart } from "../../services/cart.service";
import { ICart } from "../../utils/ICart";
import { toast } from "react-toastify";

const ProductItem: React.FC<{ product: any }> = ({ product }) => {
  const [cartItems, setCartItems] = useRecoilState<ICart[]>(cartAtom);
  const [, setCartCount] = useRecoilState(cartCountAtom);
  const handleAddToCart = (id: number, quantity: number) => {
    addToCart([{ id, quantity }]).then((res) => {
      toast.success("Product added to cart!");
      setCartItems((prevItems) => [...prevItems, ...res.products]); // Flatten the products array into the cart items
      setCartCount((prevCount) => prevCount + quantity); 
    });
  };
  console.log(cartItems)
  return (
    <motion.div
      className="p-4 bg-white rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover mb-2"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-500 mb-2">${product.price}</p>
      <button
        onClick={() => handleAddToCart(product.id, 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductItem;
