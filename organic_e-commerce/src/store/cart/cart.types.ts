// Cart Reducer Actions-----------------------------------------

import { CategoryItem } from '../categories/category.types';

export enum CART_ACTION_TYPES {
	SET_CART_ITEMS = 'SET_CART_ITEMS',
	SET_IS_CART_OPEN = 'SET_IS_CART_OPEN',
	TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
	CLEAR_CART = 'CLEAR_CART'
}

export type CartItem = CategoryItem & {
	quantity: number;
};
