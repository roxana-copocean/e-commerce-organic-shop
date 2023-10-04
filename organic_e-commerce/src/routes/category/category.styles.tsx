import styled from 'styled-components';

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;
	padding: 3rem 3rem 0 3rem;

	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
		column-gap: 10px;
		row-gap: 50px;
		padding: 1rem;
	}
`;
export const CategoryPageTitle = styled.h2`
	font-size: 1.8rem;
	margin: 0em 0 -1rem 3rem;
	margin-top: 4em;
	color: #ff6f91;

	text-transform: capitalize;

	@media screen and (max-width: 800px) {
		font-size: 1.5rem;
		margin: 4em 0 0 1rem;
	}
`;
