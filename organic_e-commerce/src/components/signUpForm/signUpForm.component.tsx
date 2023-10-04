import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import { signUpStart } from '../../store/user/user.action';
import FormInput from '../formInput/formInput.component';
import Button from '../button/button.component';
import { SignUpContainer } from './signUpForm.style';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
};

const SignUpForm = () => {
	const [ formFields, setFormFields ] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
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
	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		try {
			dispatch(signUpStart(email, password, displayName));
			resetFormFields();
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert('Cannot create user, email already in use');
			} else {
				console.log('user creation resulted in an error', error);
			}
		}
	};

	return (
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with email and password</span>
			<form action="" onSubmit={handleFormSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					value={displayName}
					name="displayName"
					onChange={handleChange}
					required
				/>

				<FormInput label="	Email" type="email" value={email} name="email" onChange={handleChange} required />

				<FormInput
					label="	Password"
					type="password"
					value={password}
					name="password"
					onChange={handleChange}
					required
				/>

				<FormInput
					label="Confirm Password"
					type="password"
					value={confirmPassword}
					name="confirmPassword"
					onChange={handleChange}
					required
				/>

				<Button type="submit">Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
