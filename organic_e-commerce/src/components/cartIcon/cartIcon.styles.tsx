import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingIconSVG)`
		width: 1.7rem;
		height: 1.7rem;
		color: white;
		display: block;
		
	
	
`;
export const CartIconContainer = styled.div`
	width: 3rem;
	height: 3rem;

	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin-top: -.9rem;
`;

export const ItemCount = styled.span`
	position: absolute;
	top: 40%;
	font-size: .8rem;
	color: white;
`;
