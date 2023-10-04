import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

import FormInput from '../formInput/formInput.component';

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import { SignInContainer, ButtonsContainer } from './signInForm.styles';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

const defaultFormFields = {
	email: '',
	password: ''
};

const SignInForm = () => {
	const [ formFields, setFormFields ] = useState(defaultFormFields);
	const { email, password } = formFields;
	const dispatch = useDispatch();
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({
			...formFields,
			[name]: value
		});
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
	};

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			dispatch(emailSignInStart(email, password));

			resetFormFields();
		} catch (error) {
			switch ((error as AuthError).code) {
				case AuthErrorCodes.INVALID_PASSWORD:
					alert('Incorrect password');
					break;
				case AuthErrorCodes.INVALID_EMAIL:
					alert('no user found with this email');
					break;
				default:
					console.log(error);
			}
		}
	};

	return (
		<SignInContainer>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleFormSubmit}>
				<FormInput label="	Email" type="email" value={email} name="email" onChange={handleChange} required />

				<FormInput
					label="	Password"
					type="password"
					value={password}
					name="password"
					onChange={handleChange}
					required
				/>
				<ButtonsContainer>
					<Button buttonTypeStyle={BUTTON_TYPES_CLASSES.base} type="submit">
						Sign In
					</Button>
					<Button buttonTypeStyle={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle} type="button">
						Sign In With Google
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
