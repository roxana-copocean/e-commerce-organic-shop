import { FC, ButtonHTMLAttributes } from 'react';
import { BaseButton, GoogleSignInButton, InvertedColorButton, ButtonSpinner } from './button.style';

export enum BUTTON_TYPES_CLASSES {
	base = 'base',
	google = 'google-sign-in',
	inverted = 'inverted'
}

// Get Button---------------------------------------------------
type GeneralButtonType = typeof BaseButton;

const getButton = (buttonTypeStyle = BUTTON_TYPES_CLASSES.base): GeneralButtonType =>
	({
		[BUTTON_TYPES_CLASSES.base]: BaseButton,
		[BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPES_CLASSES.inverted]: InvertedColorButton
	}[buttonTypeStyle] as GeneralButtonType);

// Button-----------------------------------------------------

export type ButtonProps = {
	buttonTypeStyle?: BUTTON_TYPES_CLASSES;
	isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button: FC<ButtonProps> = ({
	children,
	buttonTypeStyle = BUTTON_TYPES_CLASSES.base,
	isLoading,
	...otherProps
}) => {
	const CustomButton = getButton(buttonTypeStyle);
	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	);
};

export default Button;
