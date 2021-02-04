// import { ApiGetRequest } from '../../api-configs';
// import { errorcallback } from '../../global';
import jwtService from 'app/services/jwtService';
import { SET_COMBUSTION } from 'app/store/constants';
import { showMessage } from 'app/store/fuse/messageSlice';
import Axios from 'axios';

const baseURL = 'http://10.7.1.117:8081';

export const getCombustionRecommendationTime = () => {
	return async dispatch => {
		const response = await Axios.get(`${baseURL}/getMaxTR`, {
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
				type: SET_COMBUSTION,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		} else {
			dispatch({
				type: SET_COMBUSTION,
				payload: {
					combustionRecommendationTime: response.data.last_update,
					loading: false
				}
			});
		}
	};
};

export const getCombustionSensorsTime = () => {
	return async dispatch => {
		const response = await Axios.get(`${baseURL}/getMaxTS`, {
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
				type: SET_COMBUSTION,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		} else {
			dispatch({
				type: SET_COMBUSTION,
				payload: {
					combustionSensorsTime: response.data.last_update,
					loading: false
				}
			});
		}
	};
};

export const getCombustionConstraints = timestamp => {
	return async dispatch => {
		const response = await Axios.get(`${baseURL}/getConstraints?last_update=${timestamp}`, {
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
				type: SET_COMBUSTION,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		} else {
			dispatch({
				type: SET_COMBUSTION,
				payload: {
					constraints: response.data,
					loading: false
				}
			});
		}
	};
};

export const getCombustionConstraintsLimit = () => {
	return async dispatch => {
		const response = await Axios.get(`${baseURL}/getConstraintsLimit`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		});
		console.log(response.data);
		if (response.error) {
			dispatch(
				showMessage({
					message: response.error.message,
					variant: 'error'
				})
			);
			dispatch({
				type: SET_COMBUSTION,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		} else {
			dispatch({
				type: SET_COMBUSTION,
				payload: {
					constraintsLimit: response.data,
					loading: false
				}
			});
		}
	};
};

export const getCombustionDisturbances = timestamp => {
	return async dispatch => {
		const response = await Axios.get(`${baseURL}/getDisturbances?last_update=${timestamp}`, {
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
				type: SET_COMBUSTION,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		} else {
			dispatch({
				type: SET_COMBUSTION,
				payload: {
					disturbances: response.data,
					loading: false
				}
			});
		}
	};
};

export const getCombustionO2Chart = () => {
	return async dispatch => {
		const response = await Axios.get(`${baseURL}/getO2Day`, {
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
				type: SET_COMBUSTION,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		} else {
			dispatch({
				type: SET_COMBUSTION,
				payload: {
					o2Chart: JSON.parse(response.data),
					loading: false
				}
			});
		}
	};
};

export const getCombustionMVCurrent = timestamp => {
	return async dispatch => {
		const response = await Axios.get(`${baseURL}/getMVCurrent?last_update=${timestamp}`, {
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
				type: SET_COMBUSTION,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		} else {
			dispatch({
				type: SET_COMBUSTION,
				payload: {
					mvCurrent: response.data,
					loading: false
				}
			});
		}
	};
};

export const getCombustionMVBias = timestamp => {
	return async dispatch => {
		const response = await Axios.get(`${baseURL}/getMVBias?last_update=${timestamp}`, {
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
				type: SET_COMBUSTION,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		} else {
			dispatch({
				type: SET_COMBUSTION,
				payload: {
					mvBias: response.data,
					loading: false
				}
			});
		}
	};
};
