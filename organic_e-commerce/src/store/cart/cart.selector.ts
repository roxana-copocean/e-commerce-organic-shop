import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';
import { RootState } from '../store';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector([ selectCartReducer ], (cart) => cart.cartItems);

export const selectIsCartOpen = createSelector([ selectCartReducer ], (cart) => cart.isCartOpen);

export const selectCartCount = createSelector([ selectCartItems ], (cartItems) =>
	cartItems.reduce((acc, cartItem) => {
		return acc + cartItem.quantity;
	}, 0)
);

export const selectCartTotalPrice = createSelector([ selectCartItems ], (cartItems) =>
	cartItems.reduce((acc, cartItem) => {
		return acc + cartItem.quantity * cartItem.price;
	}, 0)
);
