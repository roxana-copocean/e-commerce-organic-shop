import React, { useState, FormEvent } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { BUTTON_TYPES_CLASSES } from '../button/button.component';
import { FormContainer, PaymentFormContainer, PaymentFormButton } from './paymentForm.styles';

import { selectCartTotalPrice } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const currentUser = useSelector(selectCurrentUser);
	const amount = useSelector(selectCartTotalPrice);
	const [ isProcessingPayment, setIsProcessingPatment ] = useState(false);

	const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		setIsProcessingPatment(true);
		const response = await fetch('/.netlify/functions/createPaymentIntent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ amount: amount * 100 })
		}).then((res) => res.json());
		const clientSecret = response.paymentIntent.client_secret;

		const cardDetails = elements.getElement(CardElement);
		if (cardDetails === null) return;
		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: cardDetails,
				billing_details: {
					name: currentUser ? currentUser.displayName : 'Guest'
				}
			}
		});
		setIsProcessingPatment(false);
		if (paymentResult.error) {
			alert(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment successful');
			}
		}
	};

	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2>Credit Card Payment:</h2>
				<CardElement />
				<PaymentFormButton buttonTypeStyle={BUTTON_TYPES_CLASSES.inverted} isLoading={isProcessingPayment}>
					Pay now
				</PaymentFormButton>
			</FormContainer>
		</PaymentFormContainer>
	);
};

export default PaymentForm;
