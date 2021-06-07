import { createSlice } from '@reduxjs/toolkit';
import { showMessage } from 'app/store/fuse/messageSlice';
import firebaseService from 'app/services/firebaseService';
import jwtService from 'app/services/jwtService';
import { setUserData } from './userSlice';

export const submitLogin = ({ username, password }) => async dispatch => {
	await dispatch(loginRequest());
	return jwtService
		.signInWithEmailAndPassword(username, password)
		.then(user => {
			dispatch(
				setUserData({
					role: [user.role.roleName],
					data: {
						id: user.id,
						displayName: user.fullname,
						email: user.email,
						photoURL: "assets/images/avatars/profile.jpg",
						settings: {
							layout: {
								style: 'layout2'
							},
							customScrollbars: true,
							theme: {
								main: 'defaultDark',
								navbar: 'defaultDark',
								toolbar: 'defaultDark',
								footer: 'defaultDark'
							}
						},
						shortcuts: []
					}
				})
			);

			return dispatch(loginSuccess());
		})
		.catch(error => {
			if (error.errorlogin) {
				dispatch(
					showMessage({
						message: error.errorlogin
					})
				);
			}
			dispatch(loginError());

			return false;
		});
};

export const submitLoginWithFireBase = ({ username, password }) => async dispatch => {
	if (!firebaseService.auth) {
		console.warn("Firebase Service didn't initialize, check your configuration");

		return () => false;
	}
	return firebaseService.auth
		.signInWithEmailAndPassword(username, password)
		.then(() => {
			return dispatch(loginSuccess());
		})
		.catch(error => {
			const usernameErrorCodes = [
				'auth/email-already-in-use',
				'auth/invalid-email',
				'auth/operation-not-allowed',
				'auth/user-not-found',
				'auth/user-disabled'
			];
			const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password'];

			const response = {
				username: usernameErrorCodes.includes(error.code) ? error.message : null,
				password: passwordErrorCodes.includes(error.code) ? error.message : null
			};

			if (error.code === 'auth/invalid-api-key') {
				dispatch(showMessage({ message: error.message }));
			}

			return dispatch(loginError(response));
		});
};

const initialState = {
	loading: false,
	success: false,
	error: null
};

const loginSlice = createSlice({
	name: 'auth/login',
	initialState,
	reducers: {
		loginRequest: (state, action) => {
			state.loading = true;
		},
		loginSuccess: (state, action) => {
			state.success = true;
			state.loading = false;
		},
		loginError: (state, action) => {
			state.loading = false;
			state.success = false;
			state.error = action.payload;
		}
	},
	extraReducers: {}
});

export const { loginSuccess, loginError, loginRequest } = loginSlice.actions;

export default loginSlice.reducer;
