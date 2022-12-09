import {createContext} from "react";
import { useState } from "react";
export const cartContext = createContext();

export function CartContextProvider({children}){
    const saludoContext = "HOLIS";
    const [cart, setCart] = useState([]);

function addToCart(product, count) {
    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === product.id
);

let newCart = [...cart];
    
    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {

      product.count = count;
      newCart.push(product);

        setCart(newCart);
    }
}

function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
}

function priceInCart() {
    let total = 0;
    cart.forEach(
      (products) =>
        (total = total + products.price * products.cantidad)
    );
    return total;
}

function clear() {
  setCart([])
}

function removeItem(idRemove) {
    console.log("Eliminando el item:", idRemove);
    const newCart = [...cart];
    newCart.pop();
    setCart(newCart);
}

function alreadyInCart(id) {
}
    return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        saludoContext,
        itemsInCart,
        removeItem,
        priceInCart,
        alreadyInCart,
        clear
}}
    >
    {children}
    </cartContext.Provider>
  );
}


