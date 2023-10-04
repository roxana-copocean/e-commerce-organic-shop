import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesStart } from '../../store/categories/category.action';

import { Routes, Route } from 'react-router-dom';
import CategoriesPreviewPage from '../categoriesPreviewPage/categoriesPreviewPage.component';
import Category from '../category/category.component';

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(fetchCategoriesStart());
		},
		[ dispatch ]
	);
	return (
		<Routes>
			<Route index element={<CategoriesPreviewPage />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop;
