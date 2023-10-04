import styled, { css } from 'styled-components';

const subColor = '#c6c6c6';
const mainColor = 'black';

const shrinkLabelStyles = css`
	top: -16px;
	font-size: 12px;
	color: ${mainColor};
`;

type FormInputLabelProps = {
	shrink?: boolean;
};

export const FormInputLabel =
	styled.label <
	FormInputLabelProps >
	`
	color: ${subColor};
	font-size: .7rem;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 12px;
	top: 12px;
	font-family: 'Inclusive Sans', sans-serif;
	transition: 300ms ease all;
	${({ shrink }) => shrink && shrinkLabelStyles};
`;
export const Input = styled.input`
	background: none;
	font-family: 'Inclusive Sans', sans-serif;
	background-color: white;
	color: ${subColor};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${subColor};
	margin: 1rem 0;

	&:focus {
		outline: none;
	}

	&:focus ~ ${FormInputLabel} {
		${shrinkLabelStyles};
	}
`;

export const Group = styled.div`
	position: relative;
	margin: 1.5rem 0;
	input[type='password'] {
		letter-spacing: 0.3em;
	}
`;
