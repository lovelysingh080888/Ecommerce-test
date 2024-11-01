// components/carts/CartItem.tsx

import React, { useState } from "react";
import { ICart } from "../../utils/ICart";

const CartItem: React.FC<{ 
  item: ICart; 
  onUpdateQuantity: (id: number, quantity: number) => void; 
  onDeleteItem: (id: number) => void; 
}> = ({ item, onUpdateQuantity, onDeleteItem }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
      <img 
        src={item.thumbnail} 
        alt={item.title} 
        className="h-24 w-24 object-cover rounded-md md:mr-4" 
      />
      
      <div className="flex-grow mt-2 md:mt-0">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-500">Price: ${item.price}</p>
        <p className="text-sm text-gray-500">Subtotal: ${(item.price * quantity).toFixed(2)}</p>
      </div>
      
      <div className="flex items-center space-x-2 mt-2 md:mt-0">
        <input 
          type="number" 
          value={quantity} 
          min="1"
          onChange={handleChange}
          className="border border-gray-300 rounded px-2 py-1 w-16 text-center"
        />
        <button 
          onClick={() => onDeleteItem(item.id)} 
          className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
