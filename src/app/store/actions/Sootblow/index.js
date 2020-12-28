import { GET_SOOTBLOW_DATA_SUCCESS } from 'app/store/constants';
import { ApiGetRequest } from '../../api-configs';
import { errorcallback } from '../../global';

export const getSootblowData = () => {
	return async dispatch => {
		const response = await ApiGetRequest('/service/bat/sootblow/indicator', dispatch);
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
