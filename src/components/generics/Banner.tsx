import React from "react";
import { Link } from "react-router-dom";

const PromotionalBanner: React.FC = () => (
  <div className="bg-blue-500 text-white p-4 text-center">
    <h2 className="text-xl font-bold">Special Offer!</h2>
    <p>Get 20% off your first purchase. Use code: FIRST20</p>
    <Link to={"/product"} className="bg-white text-blue-500 rounded px-4 py-1 mt-4">
      Shop Now
    </Link>
  </div>
);

export default PromotionalBanner;
