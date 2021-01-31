// import { ApiGetRequest } from '../../api-configs';
// import { errorcallback } from '../../global';
import jwtService from 'app/services/jwtService';
import { SET_SOOTBLOW } from 'app/store/constants';
import { showMessage } from 'app/store/fuse/messageSlice';

import Axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export const getSootblowData = loading => {
	return async dispatch => {
		await dispatch({
			type: SET_SOOTBLOW,
			payload: {
				loadingSootblowData: loading
			}
		});
		await Axios.get(`${baseURL}/service/bat/sootblow/indicator`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				dispatch({
					type: SET_SOOTBLOW,
					payload: {
						sootblowData: response.data.object,
						loadingSootblowData: false
					}
				});
			})
			.catch(error => {
				dispatch(
					showMessage({
						message: error.message,
						variant: 'error'
					})
				);
				dispatch({
					type: SET_SOOTBLOW,
					payload: {
						error: error.message,
						errorSootblow: true,
						loadingSootblowData: false
					}
				});
			});
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

		try {
			await dispatch({
				type: SET_SOOTBLOW,
				payload: {
					parameterDetailData: response.data.object,
					loading: false
				}
			});
		} catch (error) {
			await dispatch(
				showMessage({
					message: response.error.message,
					variant: 'error'
				})
			);
			await dispatch({
				type: SET_SOOTBLOW,
				payload: {
					error: response.error.message,
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
			await dispatch(
				showMessage({
					message: response.error.message,
					variant: 'error'
				})
			);
			await dispatch({
				type: SET_SOOTBLOW,
				payload: {
					error: response.error.message,
					loadingSootblowData: false
				}
			});
		} else {
			await dispatch(
				showMessage({
					message: "Parameter's value has been updated",
					variant: 'success'
				})
			);
		}
	};
};

export const updateMasterControl = data => {
	return async (dispatch, getState) => {
		const {
			sootblowReducer: { sootblowData }
		} = getState();
		if (sootblowData.control[2].value === data.value) {
			return false;
		} else {
			await Axios.post(`${baseURL}/service/bat/sootblow/control`, data, {
				headers: {
					Authorization: `Bearer ${jwtService.getAccessToken()}`,
					'Content-Type': 'application/json'
				}
			})
				.then(() => {
					dispatch(
						showMessage({
							message: 'Master Control button has been switched',
							variant: 'success'
						})
					);
				})
				.catch(error => {
					dispatch(
						showMessage({
							message: error.message,
							variant: 'error'
						})
					);
					dispatch({
						type: SET_SOOTBLOW,
						payload: {
							error: error.message,
							loadingSootblowData: false
						}
					});
				});
		}
	};
};
