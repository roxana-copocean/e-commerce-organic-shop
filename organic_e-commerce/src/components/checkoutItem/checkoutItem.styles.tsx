import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 1.5rem;
	align-items: center;

	@media screen and (max-width: 800px) {
		font-size: 1rem;
		justify-content: center;
	}
	@media screen and (max-width: 600px) {
		font-size: .7rem;
		line-height: 1;
	}
`;
export const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;

	img {
		width: 80%;
		height: 80%;
		border-top-right-radius: 2rem;
		border-bottom-left-radius: 2rem;
		@media screen and (max-width: 600px) {
			width: 70%;
			height: 70%;
			border-radius: 0;
		}
	}
`;

export const BaseSpan = styled.span`
	width: 25%;

	@media screen and (max-width: 600px) {
		width: 35%;
	}
`;
export const BaseSpanName = styled.span`
	width: 23%;
	font-size: 1.4rem;
	line-height: 1.1;

	@media screen and (max-width: 800px) {
		font-size: 1rem;
	}
	@media screen and (max-width: 600px) {
		width: 35%;
	}
`;
export const Quantity = styled.span`
	display: flex;
	width: 25%;
`;

export const Arrow = styled.div`
	cursor: pointer;
	color: #e37e8f;
	&:hover {
		transform: scale(1.1);
	}
`;
export const Value = styled.span`
	margin: 0 10px;
	@media screen and (max-width: 800px) {
		margin: 0 5px;
	}
`;
export const RemoveBtn = styled.div`
	padding-left: 12px;
	cursor: pointer;
	color: #e37e8f;
	font-weight: 900;

	&:hover {
		transform: scale(1.1);
	}
	@media screen and (max-width: 800px) {
		margin: 0 5px;
		padding-left: 0;
	}
`;
