import styled from 'styled-components';

export const CartItemContainer = styled.div`
	width: 100%;
	display: flex;
	height: 80px;
	margin-bottom: 15px;

	img {
		width: 40%;
		border-top-right-radius: 2rem;
		border-bottom-left-radius: 2rem;
	}
`;
export const ItemDetails = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 0 0 0 1rem;
`;
export const ItemName = styled.span`
	font-size: 1rem;
	margin-top: 2rem;
	line-height: 1;
`;
export const ItemPrice = styled.span`
	color: pink;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
