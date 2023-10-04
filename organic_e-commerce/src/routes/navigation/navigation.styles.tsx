import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ff6f91;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	padding-left: 3rem;
	padding-right: 3rem;
	@media screen and (max-width: 800px) {
	}
`;

export const SaleBanner = styled.h1`
	color: white;
	font-size: 1rem;
	letter-spacing: 1px;
	margin: 0;
	padding: 0;
	margin-right: auto;
	margin-left: 2rem;
	@media screen and (max-width: 800px) {
		visibility: hidden;
	}
	@media screen and (max-width: 1000px) {
		font-size: .7rem;
	}
`;
export const LogoContainer = styled(Link)`
    height: 100%;  
 

    .logo {
        height: 100%;  
        width: 90%;  
		
    }

    @media screen and (max-width: 800px) {
       min-width : 40px;  
    }
`;

export const NavLinksContainer = styled.div`
	font-size: 1.1rem;

	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 800px) {
		margin-right: 1rem;
		font-size: .8rem;
	}
`;

export const NavLink = styled(Link)`
            color:white;
			padding: 0px .7em ;
			cursor: pointer;
			white-space: nowrap;
           &:hover{
			font-weight: bold;
		   }

		
`;

export const SignOutText = styled.span`
	padding: 10px 15px;
	cursor: pointer;
	white-space: nowrap;
`;
