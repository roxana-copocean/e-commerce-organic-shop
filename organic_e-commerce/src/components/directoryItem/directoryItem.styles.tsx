import styled from 'styled-components';

type BackgroundImageProps = {
	imageUrl: string;
};

export const BackgroundImage =
	styled.div <
	BackgroundImageProps >
	`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    &:hover {
        transform: scale(1.05);
    }
`;

export const Body = styled.div`
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgba(236, 245, 233, 0.8);
	position: absolute;
	bottom: 0;
	width: 100%;
	text-align: center;
	border-top-right-radius: 5em;
	border-bottom-left-radius: 5em;

	h2 {
		font-weight: 700;
		margin: 1em 0 -.5em 0;
		font-size: 20px;
		color: #004225;
	}

	p {
		font-weight: 600;
		font-size: .9rem;
		margin: 0 0 1em 0;
		color: #87b881;
		box-shadow: inset;
		text-shadow: 1px 1px 2px white, 0 0 25px white, 0 0 5px white;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
`;

export const DirectoryItemContainer = styled.div`
	min-width: 30%;
	height: 240px;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	border: none;
	border-radius: 10px;
	margin: 0 7.5px 15px;
	overflow: hidden;
	position: relative;
	border-bottom-left-radius: 5em;
	border-top-right-radius: 5em;
	cursor: pointer;

	&:hover {
		${BackgroundImage} {
			transform: scale(1.05);
		}

		${Body} {
			background-color: rgba(236, 245, 233, 0.9);
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	@media (min-width: 481px) and (max-width: 768px) {
		min-width: 100%;
	}

	@media (max-width: 480px) {
		width: 100%;
	}
`;
