import { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
 
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

 
  const addToCart = (product) => {
    toast.success('Successfully toasted!')
    setCartItems((prevItems) => [...prevItems, { ...product, count: 1 }]);
  };

 
  const updateCartItem = (id, count) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: Math.max(count, 1) } : item
      )
    );
  };

  
  const removeCartItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
