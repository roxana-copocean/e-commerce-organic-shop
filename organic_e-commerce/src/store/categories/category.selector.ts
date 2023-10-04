import { createSelector } from 'reselect';
import { CategoryState } from './category.reducer';
import { CategoryMap } from './category.types';
import { RootState } from '../store';

const selectCategoryReducer = (state: RootState): CategoryState => state.categories;

export const selectCategories = createSelector(
	[ selectCategoryReducer ],
	(categoriesSlice) => categoriesSlice.categories
);
export const selectCategoryObject = createSelector([ selectCategories ], (categories): CategoryMap =>
	categories.reduce(
		(acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		},
		{} as CategoryMap
	)
);

export const selectIsCategoriesIsLoading = createSelector(
	[ selectCategories ],
	(categoriesSlice) => categoriesSlice.isLoading
);
