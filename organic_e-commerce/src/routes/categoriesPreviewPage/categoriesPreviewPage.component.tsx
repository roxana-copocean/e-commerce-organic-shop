import React from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';
import { selectCategoryObject, selectIsCategoriesIsLoading } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/categoryPreview/categoryPreview.component';

const CategoriesPreviewPage = () => {
	const categoriesObject = useSelector(selectCategoryObject);
	const isLoading = useSelector(selectIsCategoriesIsLoading);

	return (
		<React.Fragment>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesObject).map((title) => {
					const products = categoriesObject[title];
					return <CategoryPreview key={title} title={title} products={products} />;
				})
			)}
		</React.Fragment>
	);
};

export default CategoriesPreviewPage;
