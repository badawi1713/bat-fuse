import { SET_SOOTBLOW } from 'app/store/constants';
// import { ApiGetRequest } from '../../api-configs';
// import { errorcallback } from '../../global';
import jwtService from 'app/services/jwtService';
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
			console.log(response.data.object);
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
			console.log(response.data.object);
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
