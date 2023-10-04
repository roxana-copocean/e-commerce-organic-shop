import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
import { setIsCartOpen } from '../../store/cart/cart.action';

import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/logo.svg';
import {
	NavigationContainer,
	LogoContainer,
	NavLinksContainer,
	NavLink,
	SignOutText,
	SaleBanner
} from './navigation.styles';
import CartIcon from '../../components/cartIcon/cartIcon.component';
import CardDropdown from '../../components/cardDropdown/cardDropdown.component';

import { useOutsideClick } from '../../components/cartIcon/useOutsideClick';

// Navigation component
const Navigation = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);
	const navContainerRef = useRef(null);

	useOutsideClick(navContainerRef, () => {
		if (isCartOpen) {
			dispatch(setIsCartOpen(false));
		}
	});
	const signOutUser = () => dispatch(signOutStart());
	return (
		<React.Fragment>
			<NavigationContainer ref={navContainerRef}>
				<LogoContainer to="/">
					<CrownLogo className="logo" />
				</LogoContainer>
				<SaleBanner>AUTUMN SALE: 20% OFF everything!* Updates to cart.</SaleBanner>
				<NavLinksContainer>
					<NavLink to="./shop">Shop</NavLink>
					{currentUser ? (
						<SignOutText onClick={signOutUser}>Sign Out</SignOutText>
					) : (
						<NavLink to="./auth">Sign in</NavLink>
					)}
					<CartIcon />
				</NavLinksContainer>
				{isCartOpen && <CardDropdown />}
			</NavigationContainer>
			<Outlet />
		</React.Fragment>
	);
};

export default Navigation;
