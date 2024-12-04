import { atom } from 'recoil';
import { CartItem } from './cartItem'; 

export const cartState = atom<CartItem[]>({
  key: "cartState",
  default: [],
});

export const addCart = (cart: CartItem[], product: CartItem): CartItem[] => {
  const newCart = [...cart];
  const foundIndex = cart.findIndex((item) => item.id === product.id);

  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + product.quantity,
    };
  } else {
    // If product not in cart, add new product
    newCart.push(product);
  }

  return newCart;
};
