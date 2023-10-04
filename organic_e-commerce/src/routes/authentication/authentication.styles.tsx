import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 1000px;
	margin: 30px auto;
	margin-top: 5.5em;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		margin: 3rem;

		justify-content: center;
		align-items: center;
		gap: 3rem;
	}
`;
