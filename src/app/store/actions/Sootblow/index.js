// import { ApiGetRequest } from '../../api-configs';
// import { errorcallback } from '../../global';
import jwtService from 'app/services/jwtService';
import { SET_SOOTBLOW } from 'app/store/constants';
import { showMessage } from 'app/store/fuse/messageSlice';
import Axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export const getSootblowData = () => {
	return async dispatch => {
		const response = await Axios.get(`${baseURL}/service/bat/sootblow/indicator`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		});
		if (response.error) {
			dispatch(
				showMessage({
					message: response.error.message,
					variant: 'error'
				})
			);
			dispatch({
				type: SET_SOOTBLOW,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		} else {
			dispatch({
				type: SET_SOOTBLOW,
				payload: {
					sootblowData: response.data.object,
					loading: false
				}
			});
		}
	};
};

export const getParameterByID = id => {
	return async dispatch => {
		await dispatch({
			type: SET_SOOTBLOW,
			payload: {
				loading: true
			}
		});
		const response = await Axios.get(`${baseURL}/service/bat/sootblow/parameter/${id}`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		});
		if (response.error) {
			dispatch(
				showMessage({
					message: response.error.message,
					variant: 'error'
				})
			);
			dispatch({
				type: SET_SOOTBLOW,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		} else {
			dispatch({
				type: SET_SOOTBLOW,
				payload: {
					parameterDetailData: response.data.object,
					loading: false
				}
			});
		}
	};
};

export const updateParameterData = data => {
	return async dispatch => {
		const response = await Axios.post(`${baseURL}/service/bat/sootblow/parameter`, data, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`,
				'Content-Type': 'application/json'
			}
		});
		if (response.error) {
			dispatch(
				showMessage({
					message: response.error.message,
					variant: 'error'
				})
			);
			dispatch({
				type: SET_SOOTBLOW,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		} else {
			dispatch(
				showMessage({
					message: "Parameter's value has been updated",
					variant: 'success'
				})
			);
		}
	};
};

export const updateMasterControl = data => {
	return async dispatch => {
		const response = await Axios.post(`${baseURL}/service/bat/sootblow/control`, data, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`,
				'Content-Type': 'application/json'
			}
		});
		if (response.error) {
			dispatch(
				showMessage({
					message: response.error.message,
					variant: 'error'
				})
			);
			dispatch({
				type: SET_SOOTBLOW,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		} else {
			dispatch(
				showMessage({
					message: 'Master Control value has been switched',
					variant: 'success'
				})
			);
		}
	};
};
