import React, {createContext, useState, useEffect} from 'react'


export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product, id) => {
      const newItem = {...product, amount: 1};
      //check if item is already in cart
      const cartItem = cart.find((item) => item.id === id);
      if(cartItem){
        const newCart = cart.map((item) => {
          if(item.id === id){
            return {...item, amount: item.amount + 1}
          }
          return item;
        });
        setCart(newCart);
      }
      else{
        setCart([...cart, newItem]);
      }
      console.log(cart);
    };

    const removeFromCart = (id) => {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
    };
    const clearCart = () => {
      setCart([]);
    };
    
    const increaseAmount = (id) => {
      const newCart = cart.map((item) => {
        if(item.id === id){
          return {...item, amount: item.amount + 1}
        }
        return item;
      });
      setCart(newCart);
    };

    const decreaseAmount = (id) => {
      const newCart = cart.map((item) => {
        if(item.id === id){
          return {...item, amount: item.amount - 1}
        }
        return item;
      }).filter((item) => item.amount !== 0);
      setCart(newCart);
    };


  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount,
    decreaseAmount}}>
      {children}
     </CartContext.Provider>
  )
}

export default CartProvider