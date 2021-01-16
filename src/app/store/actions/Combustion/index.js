import {
	GET_COMBUSTION_TIMESTAMP_REQUEST,
	GET_COMBUSTION_TIMESTAMP_SUCCESS,
	GET_COMBUSTION_TIMESTAMP_FAILED,
	GET_COMBUSTION_CONSTRAINTS_REQUEST,
	GET_COMBUSTION_CONSTRAINTS_SUCCESS,
	GET_COMBUSTION_CONSTRAINTS_FAILED
} from 'app/store/constants';
// import { ApiGetRequest } from '../../api-configs';
// import { errorcallback } from '../../global';
import jwtService from 'app/services/jwtService';
import { showMessage } from 'app/store/fuse/messageSlice';

import Axios from 'axios';

const baseURL = 'http://10.7.1.117:8080';

const getCombustionTimestampRequest = () => ({
	type: GET_COMBUSTION_TIMESTAMP_REQUEST
});

const getCombustionTimestampSuccess = data => ({
	type: GET_COMBUSTION_TIMESTAMP_SUCCESS,
	payload: { data }
});

const getCombustionTimestampFailed = error => ({
	type: GET_COMBUSTION_TIMESTAMP_FAILED,
	payload: { error }
});

const getCombustionConstraintsRequest = () => ({
	type: GET_COMBUSTION_CONSTRAINTS_REQUEST
});

const getCombustionConstraintsSuccess = data => ({
	type: GET_COMBUSTION_CONSTRAINTS_SUCCESS,
	payload: { data }
});

const getCombustionConstraintsFailed = error => ({
	type: GET_COMBUSTION_CONSTRAINTS_FAILED,
	payload: { error }
});

export const getCombustionTimestamp = () => {
	return async dispatch => {
		await dispatch(getCombustionTimestampRequest);
		await Axios.get(`${baseURL}/getMaxTS`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				dispatch(getCombustionTimestampSuccess(response.data.last_update));
			})
			.catch(error => {
				dispatch(getCombustionTimestampFailed(error.message));
				dispatch(
					showMessage({
						message: error.message,
						variant: 'error'
					})
				);
			});
	};
};

export const getCombustionConstraints = timestamp => {
	return async dispatch => {
		await dispatch(getCombustionConstraintsRequest);
		await Axios.get(`${baseURL}/getConstraints?last_update=${timestamp}`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				console.log('response', response.data);
				dispatch(getCombustionConstraintsSuccess(response.data));
			})
			.catch(error => {
				dispatch(getCombustionConstraintsFailed(error.message));
				dispatch(
					showMessage({
						message: error.message,
						variant: 'error'
					})
				);
			});
	};
};
