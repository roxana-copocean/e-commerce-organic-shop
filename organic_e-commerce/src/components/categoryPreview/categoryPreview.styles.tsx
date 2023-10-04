import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
	margin-top: 5.5em;
	padding: 0 3rem 0 3rem;
`;
export const Title = styled(Link)`
	font-size: 1.7rem;
	cursor: pointer;
	text-transform: capitalize;
	color: #ff6f91 ;
	transition: all .2s ease-in;
	&:hover{
		color:#ff3f6c;
	}


	@media screen and (max-width: 800px) {
		font-size: 1.5rem;
		margin-left: 1rem;
		margin-bottom: 0;
	}
	`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;

	margin-top: -1rem;

	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
		column-gap: 1rem;
		row-gap: 2rem;
		padding: 1rem;
	}
`;
