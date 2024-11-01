import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue } from 'recoil';
import { cartCountAtom } from '../../recoil/atom';

const Header: React.FC = () => {
  const cartCount = useRecoilValue(cartCountAtom);
   
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-fluid mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">E-Commerce</h1>
        <nav className="space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
            }
          >
            Products
          </NavLink>
  
          <NavLink 
            to="/cart" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
            }
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
            <span className="relative">
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            </span>
         
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
