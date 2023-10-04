import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 800px) {
		height: 200px;
	}
`;

export const FormContainer = styled.form`
	min-width: 400px;
	margin-top: 3rem;
	margin-bottom: 3rem;
	@media screen and (max-width: 800px) {
		min-width: 300px;
		h2 {
			font-size: 1rem;
		}
	}
`;

export const PaymentFormButton = styled(Button)`
	margin-left: auto;
	margin-top: 3rem;
	@media screen and (max-width: 800px) {
	
	}

`;
