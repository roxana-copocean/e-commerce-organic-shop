import { createGlobalStyle } from 'styled-components';
import BgImg from './assets/hero_pics/5332433.jpg';

export const GlobalStyle = createGlobalStyle`
body {
	padding: 0;
	margin: 0;
     background-color: #EBE4D1;
	 background-image: url(${BgImg});
	 background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;

	font-family: 'Borel', cursive;
	color: #191717;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
    @media screen and (max-width: 800px) {
        padding: 10px;
    }

	
}

* {
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: #191717;
}

`;
