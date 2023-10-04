import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { ProductCardContainer, Name, Price, Footer } from './productCard.styles';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart.action';
import { CategoryItem } from '../../store/categories/category.types';

type ProductCardProps = {
	product: CategoryItem;
};
const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const { name, price, imageUrl } = product;

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>${price}</Price>
			</Footer>
			<Button buttonTypeStyle={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>
				Add to card
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
