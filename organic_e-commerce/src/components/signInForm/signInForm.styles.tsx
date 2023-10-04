import styled from 'styled-components';

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 450px;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		max-width: 25rem;
		padding: 1rem;
		margin-top: 4rem;
	}

	h2 {
		margin: 3px 0;
		color: #004225;
		@media screen and (max-width: 800px) {
			margin-bottom: -.5rem;
		}
	}

	span {
		font-family: 'Inclusive Sans', sans-serif;
		font-size: .8rem;
		margin-bottom: 1rem;
		@media screen and (max-width: 800px) {
			margin-bottom: 0;
		}
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 800px) {
		gap: 1.5rem;
	}
`;
