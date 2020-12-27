import { GET_SOOTBLOW_DATA_SUCCESS } from 'app/store/constants';

const initialState = {
	sootblowData: {}
};

const sootblowReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SOOTBLOW_DATA_SUCCESS:
			return {
				...state,
				sootblowData: action.payload.data
			};
		default:
			return {
				state
			};
	}
};

export default sootblowReducer;
