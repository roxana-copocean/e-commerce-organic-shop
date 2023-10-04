import { createAction, withMatcher, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES, CartItem } from './cart.types';
import { CategoryItem } from '../categories/category.types';

//💚 Helper functions ----------------------------------------------------
// Add item to card
const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
	if (existingCartItem) {
		return cartItems.map(
			(cartItem) =>
				cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
		);
	}

	return [ ...cartItems, { ...productToAdd, quantity: 1 } ];
};

// Remove cart item from cart
const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

	if (existingCartItem && existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map(
		(cartItem) =>
			cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
	);
};

// Clear cart item from cart
const clearCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

// End of Helper functions----------------------------------------

// 💚 Types-------------------------------------------------------
export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

// 💚Actions-----------------------------------------------------
// set the boolean value of the cart open state
export const setIsCartOpen = withMatcher((boolen: boolean): SetIsCartOpen =>
	createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolen)
);

// setCartItems action creator
export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems =>
	createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

// add item to cart
export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem): SetCartItems => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return setCartItems(newCartItems);
};

// remove item from cart
export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem): SetCartItems => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	return setCartItems(newCartItems);
};

// clear item Cart
export const clearItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem): SetCartItems => {
	const newCartItems = clearCartItem(cartItems, cartItemToRemove);
	return setCartItems(newCartItems);
};
