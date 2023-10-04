import React, { FC, memo } from 'react';
import { CartItem as CartItemComponentTypes } from '../../store/cart/cart.types';

import { CartItemContainer, ItemDetails, ItemName, ItemPrice } from './cartItem.styles';

type CartItemProps = {
	cartItem: CartItemComponentTypes;
};
const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<ItemName>{name}</ItemName>
				<ItemPrice>
					{quantity} x ${price}
				</ItemPrice>
			</ItemDetails>
		</CartItemContainer>
	);
});

export default CartItem;
