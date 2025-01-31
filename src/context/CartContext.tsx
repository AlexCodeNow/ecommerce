import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { db } from "../data/db";
import type { Guitar, CartItem } from "../types";

type CartContextType = {
  data: Guitar[];
  cart: CartItem[];
  addToCart: (item: Guitar) => void;
  removeFromCart: (id: Guitar['id']) => void;
  decreaseQuantity: (id: Guitar['id']) => void;
  increaseQuantity: (id: Guitar['id']) => void;
  clearCart: () => void;
  isEmpty: boolean;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Guitar) => {
    setCart((prevCart) => {
      const itemExists = prevCart.findIndex(guitar => guitar.id === item.id);
      if (itemExists >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[itemExists].quantity++;
        return updatedCart;
      } else {
        const newItem: CartItem = { ...item, quantity: 1 };
        return [...prevCart, newItem];
      }
    });
  };

  const removeFromCart = (id: Guitar['id']) => {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
  };

  const decreaseQuantity = (id: Guitar['id']) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const increaseQuantity = (id: Guitar['id']) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);

  const value = {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un CartProvider");
  }
  return context;
};