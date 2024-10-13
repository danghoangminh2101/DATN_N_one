import { atom } from 'recoil';
import { CartItem } from '../../type/cartItem'; 
export const cartState = atom({
    key: 'cart', 
    default: [],  
});

export const addCart = (cart, product) => {
    const newCart = [...cart];
    const foundIndex = cart.findIndex(x => x.id === product.id);
    // Increase quantity if existing
    if (foundIndex >= 0) {
    newCart[foundIndex] = {
    ...cart[foundIndex],
    quantity: cart[foundIndex].quantity + 1,
    };
    return newCart;
    }
    // Add new product
  
        newCart.push({
            id: product.id,
            name: product.name, 
            price: product.price, 
            quantity: 1,
          });
    return newCart;
    };