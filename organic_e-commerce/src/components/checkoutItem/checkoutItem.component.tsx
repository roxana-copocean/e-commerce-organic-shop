import { useDispatch, useSelector } from 'react-redux';
import { FC } from 'react';
import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
	ImageContainer,
	CheckoutItemContainer,
	BaseSpan,
	BaseSpanName,
	Quantity,
	Arrow,
	Value,
	RemoveBtn
} from './checkoutItem.styles';
import { CartItem } from '../../store/cart/cart.types';

type CheckoutItemProps = {
	cartItem: CartItem;
};
const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const { name, imageUrl, price, quantity } = cartItem;
	const cleartItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
	const removeCartItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
	const addCartItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<BaseSpanName>{name}</BaseSpanName>
			<Quantity>
				<Arrow onClick={removeCartItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addCartItemHandler}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>${price}</BaseSpan>
			<RemoveBtn onClick={cleartItemHandler}>&#10005;</RemoveBtn>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
