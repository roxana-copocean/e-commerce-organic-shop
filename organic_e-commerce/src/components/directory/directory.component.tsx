import { Key } from 'react';
import DirectoryItem from '../directoryItem/directoryItem.component';
import { DirectoryContainer } from './directory.styles';
import HeroImg1 from '../../assets/hero_pics/flat-lay-zero-waste-concept.jpg';
import HeroImg2 from '../../assets/hero_pics/high-angle-natural-soap-plant-arrangement.jpg';
import HeroImg3 from '../../assets/hero_pics/natural-products-arrangement-top-view.jpg';
import HeroImg4 from '../../assets/hero_pics/oil-dropper-lavender-rocks-with-copy-space.jpg';
import HeroImg5 from '../../assets/hero_pics/top-view-natural-self-care-products-composition.jpg';

export type DirectoryCategory = {
	id: Key;
	title: string;
	imageUrl: string;
	route: string;
};
// Categories
const categories: DirectoryCategory[] = [
	{
		id: 1,
		title: 'Body',
		imageUrl: HeroImg1,
		route: 'shop/body'
	},
	{
		id: 2,
		title: 'Scrubs',
		imageUrl: HeroImg2,
		route: 'shop/scrubs'
	},
	{
		id: 3,
		title: 'Lotions',
		imageUrl: HeroImg3,
		route: 'shop/lotions'
	},
	{
		id: 4,
		title: 'Eyes',
		imageUrl: HeroImg4,
		route: 'shop/eyes'
	},
	{
		id: 5,
		title: 'Naturals',
		imageUrl: HeroImg5,
		route: 'shop/naturals'
	}
];

// Directory Compoenent
const Directory = () => {
	return (
		<DirectoryContainer>
			{categories.map((category) => <DirectoryItem key={category.id} category={category} />)}
		</DirectoryContainer>
	);
};

export default Directory;
