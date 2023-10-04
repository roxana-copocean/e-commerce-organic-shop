import { CheckoutContainer, HeaderBlock, CheckoutHeader, TotalSum } from './checkout.styles';
import { useSelector } from 'react-redux';
import { selectCartTotalPrice, selectCartItems } from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkoutItem/checkoutItem.component';

import PaymentForm from '../../components/paymentForm/paymentForm.component';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const totalCartPrice = useSelector(selectCartTotalPrice);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>

			{cartItems.map((cartItem) => {
				return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
			})}
			<TotalSum>Total: ${totalCartPrice}</TotalSum>
			<PaymentForm />
		</CheckoutContainer>
	);
};

export default Checkout;
