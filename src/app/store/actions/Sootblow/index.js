import { GET_SOOTBLOW_DATA_REQUEST, GET_SOOTBLOW_DATA_SUCCESS, GET_SOOTBLOW_DATA_FAILED } from 'app/store/constants';
// import { ApiGetRequest } from '../../api-configs';
// import { errorcallback } from '../../global';
import jwtService from 'app/services/jwtService';
import { showMessage } from 'app/store/fuse/messageSlice';

import Axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const getSootblowDataRequest = () => ({
	type: GET_SOOTBLOW_DATA_REQUEST
});

const getSootblowDataSuccess = data => ({
	type: GET_SOOTBLOW_DATA_SUCCESS,
	payload: { data }
});

const getSootblowDataError = error => ({
	type: GET_SOOTBLOW_DATA_FAILED,
	payload: { error }
});

export const getSootblowData = () => {
	return async dispatch => {
		await dispatch(getSootblowDataRequest());
		await Axios.get(`${baseURL}/service/bat/sootblow/indicator`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				dispatch(getSootblowDataSuccess(response.data.object));
			})
			.catch(error => {
				dispatch(getSootblowDataError(error.message));
				dispatch(
					showMessage({
						message: error.message
					})
				);
			});
	};
};
