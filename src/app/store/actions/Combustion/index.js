// import { ApiGetRequest } from '../../api-configs';
// import { errorcallback } from '../../global';
import jwtService from 'app/services/jwtService';
import {
	GET_COMBUSTION_CONSTRAINTS_FAILED,
	GET_COMBUSTION_CONSTRAINTS_REQUEST,
	GET_COMBUSTION_CONSTRAINTS_SUCCESS,
	GET_COMBUSTION_DISTURBANCES_FAILED,
	GET_COMBUSTION_DISTURBANCES_REQUEST,
	GET_COMBUSTION_DISTURBANCES_SUCCESS,
	GET_COMBUSTION_LAST_RECOMMENDATION_TIME_FAILED,
	GET_COMBUSTION_LAST_RECOMMENDATION_TIME_REQUEST,
	GET_COMBUSTION_LAST_RECOMMENDATION_TIME_SUCCESS,
	GET_COMBUSTION_LAST_SENSORS_TIME_FAILED,
	GET_COMBUSTION_LAST_SENSORS_TIME_REQUEST,
	GET_COMBUSTION_LAST_SENSORS_TIME_SUCCESS,
	GET_COMBUSTION_MV_CURRENT_REQUEST,
	GET_COMBUSTION_MV_CURRENT_SUCCESS,
	GET_COMBUSTION_MV_CURRENT_FAILED,
	GET_COMBUSTION_MV_BIAS_REQUEST,
	GET_COMBUSTION_MV_BIAS_SUCCESS,
	GET_COMBUSTION_MV_BIAS_FAILED,
	GET_COMBUSTION_O2_CHART_REQUEST,
	GET_COMBUSTION_O2_CHART_SUCCESS,
	GET_COMBUSTION_O2_CHART_FAILED,
	GET_COMBUSTION_CONSTRAINTS_LIMIT_REQUEST,
	GET_COMBUSTION_CONSTRAINTS_LIMIT_SUCCESS,
	GET_COMBUSTION_CONSTRAINTS_LIMIT_FAILED
} from 'app/store/constants';
import { showMessage } from 'app/store/fuse/messageSlice';
import Axios from 'axios';

const baseURL = 'http://10.7.1.117:8080';

const getCombustionRecommendationTimeRequest = () => ({
	type: GET_COMBUSTION_LAST_RECOMMENDATION_TIME_REQUEST
});

const getCombustionRecommendationTimeSuccess = data => ({
	type: GET_COMBUSTION_LAST_RECOMMENDATION_TIME_SUCCESS,
	payload: { data }
});

const getCombustionRecommendationTimeFailed = error => ({
	type: GET_COMBUSTION_LAST_RECOMMENDATION_TIME_FAILED,
	payload: { error }
});

const getCombustionSensorsTimeRequest = () => ({
	type: GET_COMBUSTION_LAST_SENSORS_TIME_REQUEST
});

const getCombustionSensorsTimeSuccess = data => ({
	type: GET_COMBUSTION_LAST_SENSORS_TIME_SUCCESS,
	payload: { data }
});

const getCombustionSensorsTimeFailed = error => ({
	type: GET_COMBUSTION_LAST_SENSORS_TIME_FAILED,
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

const getCombustionConstraintsLimitRequest = () => ({
	type: GET_COMBUSTION_CONSTRAINTS_LIMIT_REQUEST
});

const getCombustionConstraintsLimitSuccess = data => ({
	type: GET_COMBUSTION_CONSTRAINTS_LIMIT_SUCCESS,
	payload: { data }
});

const getCombustionConstraintsLimitFailed = error => ({
	type: GET_COMBUSTION_CONSTRAINTS_LIMIT_FAILED,
	payload: { error }
});

const getCombustionDisturbancesRequest = () => ({
	type: GET_COMBUSTION_DISTURBANCES_REQUEST
});

const getCombustionDisturbancesSuccess = data => ({
	type: GET_COMBUSTION_DISTURBANCES_SUCCESS,
	payload: { data }
});

const getCombustionDisturbancesFailed = error => ({
	type: GET_COMBUSTION_DISTURBANCES_FAILED,
	payload: { error }
});

const getCombustionMVCurrentRequest = () => ({
	type: GET_COMBUSTION_MV_CURRENT_REQUEST
});

const getCombustionMVCurrentSuccess = data => ({
	type: GET_COMBUSTION_MV_CURRENT_SUCCESS,
	payload: { data }
});

const getCombustionMVCurrentFailed = error => ({
	type: GET_COMBUSTION_MV_CURRENT_FAILED,
	payload: { error }
});

const getCombustionMVBiasRequest = () => ({
	type: GET_COMBUSTION_MV_BIAS_REQUEST
});

const getCombustionMVBiasSuccess = data => ({
	type: GET_COMBUSTION_MV_BIAS_SUCCESS,
	payload: { data }
});

const getCombustionMVBiasFailed = error => ({
	type: GET_COMBUSTION_MV_BIAS_FAILED,
	payload: { error }
});

const getCombustionO2ChartRequest = () => ({
	type: GET_COMBUSTION_O2_CHART_REQUEST
});

const getCombustionO2ChartSuccess = data => ({
	type: GET_COMBUSTION_O2_CHART_SUCCESS,
	payload: { data }
});

const getCombustionO2ChartFailed = error => ({
	type: GET_COMBUSTION_O2_CHART_FAILED,
	payload: { error }
});

export const getCombustionRecommendationTime = () => {
	return async dispatch => {
		await dispatch(getCombustionRecommendationTimeRequest);
		await Axios.get(`${baseURL}/getMaxTR`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				dispatch(getCombustionRecommendationTimeSuccess(response.data.last_update));
			})
			.catch(error => {
				dispatch(getCombustionRecommendationTimeFailed(error.message));
				dispatch(
					showMessage({
						message: error.message,
						variant: 'error'
					})
				);
			});
	};
};

export const getCombustionSensorsTime = () => {
	return async dispatch => {
		await dispatch(getCombustionSensorsTimeRequest);
		await Axios.get(`${baseURL}/getMaxTS`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				dispatch(getCombustionSensorsTimeSuccess(response.data.last_update));
			})
			.catch(error => {
				dispatch(getCombustionSensorsTimeFailed(error.message));
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

export const getCombustionConstraintsLimit = () => {
	return async dispatch => {
		await dispatch(getCombustionConstraintsLimitRequest);
		await Axios.get(`${baseURL}/getConstraintsLimit`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				dispatch(getCombustionConstraintsLimitSuccess(response.data));
			})
			.catch(error => {
				dispatch(getCombustionConstraintsLimitFailed(error.message));
				dispatch(
					showMessage({
						message: error.message,
						variant: 'error'
					})
				);
			});
	};
};

export const getCombustionDisturbances = timestamp => {
	return async dispatch => {
		await dispatch(getCombustionDisturbancesRequest);
		await Axios.get(`${baseURL}/getDisturbances?last_update=${timestamp}`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				dispatch(getCombustionDisturbancesSuccess(response.data));
			})
			.catch(error => {
				dispatch(getCombustionDisturbancesFailed(error.message));
				dispatch(
					showMessage({
						message: error.message,
						variant: 'error'
					})
				);
			});
	};
};

export const getCombustionO2Chart = () => {
	return async dispatch => {
		await dispatch(getCombustionO2ChartRequest);
		await Axios.get(`${baseURL}/getO2Day`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				dispatch(getCombustionO2ChartSuccess(JSON.parse(response.data)));
			})
			.catch(error => {
				dispatch(getCombustionO2ChartFailed(error.message));
				dispatch(
					showMessage({
						message: error.message,
						variant: 'error'
					})
				);
			});
	};
};

export const getCombustionMVCurrent = timestamp => {
	return async dispatch => {
		await dispatch(getCombustionMVCurrentRequest);
		await Axios.get(`${baseURL}/getMVCurrent?last_update=${timestamp}`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				dispatch(getCombustionMVCurrentSuccess(response.data));
			})
			.catch(error => {
				dispatch(getCombustionMVCurrentFailed(error.message));
				dispatch(
					showMessage({
						message: error.message,
						variant: 'error'
					})
				);
			});
	};
};

export const getCombustionMVBias = () => {
	return async dispatch => {
		await dispatch(getCombustionMVBiasRequest);
		await Axios.get(`${baseURL}/getMVBias`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				dispatch(getCombustionMVBiasSuccess(response.data));
			})
			.catch(error => {
				dispatch(getCombustionMVBiasFailed(error.message));
				dispatch(
					showMessage({
						message: error.message,
						variant: 'error'
					})
				);
			});
	};
};
