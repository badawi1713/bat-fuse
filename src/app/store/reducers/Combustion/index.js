const {
	GET_COMBUSTION_TIMESTAMP_FAILED,
	GET_COMBUSTION_TIMESTAMP_REQUEST,
	GET_COMBUSTION_TIMESTAMP_SUCCESS,
	GET_COMBUSTION_CONSTRAINTS_FAILED,
	GET_COMBUSTION_CONSTRAINTS_REQUEST,
	GET_COMBUSTION_CONSTRAINTS_SUCCESS
} = require('app/store/constants');

const initialState = {
	combustionTimestamp: {},
	constrainst: [],
	loading: false,
	error: false
};

const combustionReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COMBUSTION_TIMESTAMP_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_COMBUSTION_TIMESTAMP_SUCCESS:
			return {
				...state,
				combustionTimestamp: action.payload.data,
				loading: false
			};
		case GET_COMBUSTION_TIMESTAMP_FAILED:
			return {
				...state,
				error: action.payload.error,
				loading: false
			};
		case GET_COMBUSTION_CONSTRAINTS_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_COMBUSTION_CONSTRAINTS_SUCCESS:
			return {
				...state,
				constrainst: action.payload.data,
				loading: false
			};
		case GET_COMBUSTION_CONSTRAINTS_FAILED:
			return {
				...state,
				error: action.payload.error,
				loading: false
			};
		default:
			return {
				state
			};
	}
};

export default combustionReducer;
