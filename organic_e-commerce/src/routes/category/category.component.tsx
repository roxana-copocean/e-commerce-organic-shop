import React, { useState, useEffect } from 'react';

import Spinner from '../../components/spinner/spinner.component';
import { useSelector } from 'react-redux';
import { selectCategoryObject, selectIsCategoriesIsLoading } from '../../store/categories/category.selector';
import { useParams } from 'react-router-dom';
import { CategoryContainer, CategoryPageTitle } from './category.styles';
import ProductCard from '../../components/productCard/productCard.component';

type CategoryRouteParams = {
	category: string;
};
const Category = () => {
	const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
	const categoriesObject = useSelector(selectCategoryObject);
	const isLoading = useSelector(selectIsCategoriesIsLoading);
	const [ products, setProducts ] = useState(categoriesObject[category]);
	useEffect(
		() => {
			setProducts(categoriesObject[category]);
		},
		[ categoriesObject, category ]
	);

	return (
		<React.Fragment>
			<CategoryPageTitle>{category}</CategoryPageTitle>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products && products.map((product) => <ProductCard key={product.id} product={product} />)}
				</CategoryContainer>
			)}
		</React.Fragment>
	);
};

export default Category;
