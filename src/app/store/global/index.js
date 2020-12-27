import * as userActions from 'app/auth/store/actions';
import * as Actions from 'app/store/actions';

export const errorcallback = (dispatch, error) => {
	if (error === 'Expired Token') {
		return dispatch(userActions.logoutUser());
	}

	return dispatch(
		Actions.showMessage({
			message: 'Error : ' + error
		})
	);
};

export const setMessage = (dispatch, message) => {
	return dispatch(
		Actions.showMessage({
			message: message
		})
	);
};
