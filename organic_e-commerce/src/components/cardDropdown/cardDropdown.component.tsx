import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';
import './cardDropdown.styles';
import Button from '../button/button.component';
import CartItem from '../cartItem/cartItem.component';

import { CartDropdownConatiner, CartItems, EmptyMessage } from './cardDropdown.styles';

const CardDropdown = () => {
	const cartItems = useSelector(selectCartItems);

	const navigate = useNavigate();
	const goToChekcoutPage = useCallback(() => {
		navigate('/checkout');
	}, []);
	return (
		<CartDropdownConatiner>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>

			<Button onClick={goToChekcoutPage}>Checkout</Button>
		</CartDropdownConatiner>
	);
};

export default CardDropdown;
