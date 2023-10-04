// User Reducer--------------------------------------------------
import { AnyAction } from 'redux';

import { signInFailure, signOutFailed, signUpFailed, signOutSuccess, signInSuccess } from './user.action';
import { UserData } from '../../utils/firebase/firebase.utils';
// initial value
export type UserState = {
	readonly currentUser: UserData | null;
	readonly isLoading: boolean;
	readonly error: null | Error;
};
const USER_INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null
};

// reducer function
export const userReducer = (state = USER_INITIAL_STATE, action = {} as AnyAction): UserState => {
	if (signInSuccess.match(action)) {
		return { ...state, currentUser: action.payload };
	}
	if (signOutFailed.match(action)) {
		return { ...state, error: action.payload };
	}
	if (signUpFailed.match(action)) {
		return { ...state, error: action.payload };
	}
	if (signInFailure.match(action)) {
		return { ...state, error: action.payload };
	}
	if (signOutSuccess.match(action)) {
		return { ...state, currentUser: null };
	}
	return state;
};
