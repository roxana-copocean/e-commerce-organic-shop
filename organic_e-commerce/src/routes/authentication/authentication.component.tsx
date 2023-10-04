import { AuthenticationContainer } from './authentication.styles';
import SignUpForm from '../../components/signUpForm/signUpForm.component';
import SignInForm from '../../components/signInForm/signInForm.component';

const Authentication = () => {
	return (
		<AuthenticationContainer>
			<SignInForm />
			<SignUpForm />
		</AuthenticationContainer>
	);
};

export default Authentication;
