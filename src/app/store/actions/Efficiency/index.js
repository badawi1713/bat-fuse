// import { ApiGetRequest } from '../../api-configs';
// import { errorcallback } from '../../global';
import { Api } from 'app/store/api-configs';
import { SET_EFFICIENCY } from 'app/store/constants';
import { showMessage } from 'app/store/fuse/messageSlice';

const baseURL = process.env.REACT_APP_API_URL;


export const getEfficiencyData = () => {
	return async dispatch => {

		try {
			const response = await Api.get(`${baseURL}/service/bat/sootblow/efficiency`)

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
		} catch (error) {
			console.log('error', error)
			console.log('url', baseURL)
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
		}

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
