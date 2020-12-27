import { errorcallback } from '../../global';
import Axios from 'axios';
import { GET_SOOTBLOW_DATA_SUCCESS } from 'app/store/constants';

export const getSootblowData = () => {
	return async dispatch => {
		const response = await Axios.get('http://192.168.1.143:8081/service/bat/sootblow/indicator', {
			headers: {
				Accept: 'application/json',
				'Access-Control-Allow-Origin': 'Authorization',
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			},
			mode: 'no-cors',
			credentials: true,
			crossdomain: true
		});
		if (response.error) {
			errorcallback(dispatch, response.error);
		} else {
			dispatch({
				type: GET_SOOTBLOW_DATA_SUCCESS,
				payload: {
					data: response.data.object,
					loading: false
				}
			});
		}
	};
};
