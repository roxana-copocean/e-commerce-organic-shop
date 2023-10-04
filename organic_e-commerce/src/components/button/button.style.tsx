import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;

	padding: .5em 2em 0 2em;
	font-size: 1.2rem;
	background-color: #96c291;

	color: white;
	border-top-right-radius: 1rem;
	border-bottom-left-radius: 1rem;
	font-family: inherit;

	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: #87b881;
	}
	@media screen and (max-width: 800px) {
		letter-spacing: 0;
		white-space: nowrap;
		font-size: 1rem;
	}
`;

export const GoogleSignInButton = styled(BaseButton)`
			background-color: #A2C579;
		color: white;

		&:hover {
			background-color: #87b881;
			border: none;
		}
`;

export const InvertedColorButton = styled(BaseButton)`
		background-color: white;
		color: #ff6f91;
		border: 1px solid #ff6f91;

		&:hover {
			background-color: #ff6f91;
			color: white;
			border: none;
		}
`;

export const ButtonSpinner = styled(SpinnerContainer)`
	 width: 30px;
	 height: 30px;
`;
