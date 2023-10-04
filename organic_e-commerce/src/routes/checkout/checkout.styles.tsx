import styled from 'styled-components';

export const CheckoutContainer = styled.div`
	width: 75%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 5rem auto 0;
	@media screen and (max-width: 800px) {
		width: 80%;
		margin: 1rem 0 0 2rem;
	}
`;

export const CheckoutHeader = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	margin-top: 4rem;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
	@media screen and (max-width: 800px) {
		margin-bottom: 1rem;
		padding-bottom: 1rem;
	}
`;
export const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;
	white-space: nowrap;
	@media screen and (max-width: 800px) {
		width: 15%;
		white-space: nowrap;
		font-size: .8rem;
	}

	&:last-child {
		width: 8%;
	}
	@media screen and (max-width: 500px) {
		font-size: .6rem;
	}
`;

export const TotalSum = styled.span`
	margin-top: 30px;
	margin-left: auto;
	font-size: 1.3rem;
`;
