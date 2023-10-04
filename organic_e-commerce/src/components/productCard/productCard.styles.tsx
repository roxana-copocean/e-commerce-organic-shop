import styled from 'styled-components';

export const ProductCardContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	padding-bottom: 1.2rem;
	border-bottom-right-radius: 1em;
	border-bottom: 1px solid #a2c579;

	img {
		width: 100%;
		height: 90%;
		object-fit: cover;
		margin-bottom: 5px;
		border-radius: .3em;

		@media screen and (max-width: 800px) {
			margin-bottom: .7rem;
		}
	}

	button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 60%;
		display: none;

		@media screen and (max-width: 800px) {
			width: 60%;
			top: 50%;
			line-height: 1;
			font-size: 1rem;
		}
	}

	&:hover {
		img {
			opacity: 0.7;
		}

		button {
			opacity: 0.85;
			display: flex;
		}
	}
`;
export const Name = styled.span`
	width: 100%;
	margin-bottom: 1rem;
	font-size: 1.2rem;
	white-space: nowrap;

	@media screen and (max-width: 800px) {
		width: 70%;
		font-size: 1rem;
	}
`;
export const Price = styled.span`
	width: 10%;
	color: #a2c579;
	@media screen and (max-width: 800px) {
		font-size: 1rem;
	}
`;
export const Footer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 1.2rem;

	@media screen and (max-width: 800px) {
		margin-bottom: 1rem;
		width: 90%;
	}
`;
