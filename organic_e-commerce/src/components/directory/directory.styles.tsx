import styled from 'styled-components';

export const DirectoryContainer = styled.div`
	margin-top: 2rem;
	margin-right: auto;
	margin-left: auto;
	width: 100%;
	max-width: 85vw;
	display: flex;
	flex-wrap: wrap;
	gap: .5rem;
	justify-content: center;
	padding: 3rem 2rem 0 2rem;

	@media (max-width: 600px) {
	}
	@media (max-width: 480px) {
		flex-direction: column;
	}
`;
