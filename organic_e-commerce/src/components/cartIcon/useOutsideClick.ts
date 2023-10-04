import { RefObject, useEffect } from 'react';

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, callback: () => void): void => {
	useEffect(
		() => {
			const handleClickOutside = (event: MouseEvent): void => {
				if (ref.current && !ref.current.contains(event.target as Node)) {
					callback();
				}
			};

			// Listen for mousedown events in the whole document
			document.addEventListener('mousedown', handleClickOutside);

			// Cleanup listener on unmount
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		},
		[ ref, callback ]
	);
};
