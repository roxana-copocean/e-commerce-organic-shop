import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedColorButton } from '../button/button.style';

export const CartDropdownConatiner = styled.div`
	position: absolute;
	width: 18rem;
	height: 25rem;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	${BaseButton}, ${GoogleSignInButton}, ${InvertedColorButton} {
		margin-top: auto;
	}
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItems = styled.div`
	height: 20rem;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
`;
