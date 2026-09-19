import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface CartContextData {
  cart: CartItem[];
  addToCart: (name: string, price: number) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(name: string, price: number) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.name === name
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentCart,
        {
          name,
          price,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(name: string) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart precisa estar dentro de CartProvider");
  }

  return context;
}