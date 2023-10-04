import { FC } from 'react';
import { DirectoryItemContainer, Body, BackgroundImage } from './directoryItem.styles';
import { useNavigate } from 'react-router-dom';

import { DirectoryCategory } from '../directory/directory.component';
type DirectoryItemProps = {
	category: DirectoryCategory;
};
const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
	const navigate = useNavigate();
	const { imageUrl, title, route } = category;

	const onNavigateHandler = () => {
		navigate(route);
	};
	return (
		<DirectoryItemContainer onClick={onNavigateHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>shop now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
