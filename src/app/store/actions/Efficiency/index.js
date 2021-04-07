// import { ApiGetRequest } from '../../api-configs';
// import { errorcallback } from '../../global';
import jwtService from 'app/services/jwtService';
import { SET_EFFICIENCY } from 'app/store/constants';
import { showMessage } from 'app/store/fuse/messageSlice';
import Axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export const getEfficiencyData = () => {
	return async dispatch => {
		await dispatch({
			type: SET_EFFICIENCY,
			payload: {
				loading: true
			}
		});
		await Axios.get(`${baseURL}/service/bat/sootblow/efficiency`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				dispatch({
					type: SET_EFFICIENCY,
					payload: {
						improvementEfficiency: response.data.object.improvementEfficiency,
						baselineEfficiency: response.data.object.baselineEfficiency,
						currentEfficiency: response.data.object.currentEfficiency,
						chart: response.data.object.chart,
						referenceValue: response.data.object.referenceValue,
						loading: false
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
					type: SET_EFFICIENCY,
					payload: {
						error: error.message,
						loading: false
					}
				});
			});
	};
};

export const changeEfficiency = data => {
	return async dispatch => {
		dispatch({
			type: SET_EFFICIENCY,
			payload: data
		});
	};
};
