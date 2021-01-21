const {
	GET_COMBUSTION_LAST_RECOMMENDATION_TIME_FAILED,
	GET_COMBUSTION_LAST_RECOMMENDATION_TIME_REQUEST,
	GET_COMBUSTION_LAST_RECOMMENDATION_TIME_SUCCESS,
	GET_COMBUSTION_LAST_SENSORS_TIME_REQUEST,
	GET_COMBUSTION_LAST_SENSORS_TIME_SUCCESS,
	GET_COMBUSTION_LAST_SENSORS_TIME_FAILED,
	GET_COMBUSTION_CONSTRAINTS_FAILED,
	GET_COMBUSTION_CONSTRAINTS_REQUEST,
	GET_COMBUSTION_CONSTRAINTS_SUCCESS,
	GET_COMBUSTION_CONSTRAINTS_LIMIT_REQUEST,
	GET_COMBUSTION_CONSTRAINTS_LIMIT_SUCCESS,
	GET_COMBUSTION_CONSTRAINTS_LIMIT_FAILED,
	GET_COMBUSTION_DISTURBANCES_REQUEST,
	GET_COMBUSTION_DISTURBANCES_SUCCESS,
	GET_COMBUSTION_DISTURBANCES_FAILED,
	GET_COMBUSTION_MV_CURRENT_REQUEST,
	GET_COMBUSTION_MV_CURRENT_SUCCESS,
	GET_COMBUSTION_MV_CURRENT_FAILED,
	GET_COMBUSTION_MV_BIAS_REQUEST,
	GET_COMBUSTION_MV_BIAS_SUCCESS,
	GET_COMBUSTION_MV_BIAS_FAILED,
	GET_COMBUSTION_O2_CHART_REQUEST,
	GET_COMBUSTION_O2_CHART_SUCCESS,
	GET_COMBUSTION_O2_CHART_FAILED
} = require('app/store/constants');

const initialState = {
	combustionRecommendationTime: {},
	combustionSensorsTime: {},
	constrainst: [],
	constraintLimit: [],
	disturbances: [],
	mvCurrent: [],
	mvBias: [],
	o2Chart: [],
	loading: false,
	error: false
};

const combustionReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COMBUSTION_LAST_RECOMMENDATION_TIME_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_COMBUSTION_LAST_RECOMMENDATION_TIME_SUCCESS:
			return {
				...state,
				combustionRecommendationTime: action.payload.data,
				loading: false
			};
		case GET_COMBUSTION_LAST_RECOMMENDATION_TIME_FAILED:
			return {
				...state,
				error: action.payload.error,
				loading: false
			};
		case GET_COMBUSTION_LAST_SENSORS_TIME_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_COMBUSTION_LAST_SENSORS_TIME_SUCCESS:
			return {
				...state,
				combustionSensorsTime: action.payload.data,
				loading: false
			};
		case GET_COMBUSTION_LAST_SENSORS_TIME_FAILED:
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
		case GET_COMBUSTION_CONSTRAINTS_LIMIT_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_COMBUSTION_CONSTRAINTS_LIMIT_SUCCESS:
			return {
				...state,
				loading: false,
				constraintLimit: action.payload.data
			};
		case GET_COMBUSTION_CONSTRAINTS_LIMIT_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload.error
			};
		case GET_COMBUSTION_DISTURBANCES_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_COMBUSTION_DISTURBANCES_SUCCESS:
			return {
				...state,
				disturbances: action.payload.data,
				loading: false
			};
		case GET_COMBUSTION_DISTURBANCES_FAILED:
			return {
				...state,
				error: action.payload.error,
				loading: false
			};
		case GET_COMBUSTION_MV_CURRENT_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_COMBUSTION_MV_CURRENT_SUCCESS:
			return {
				...state,
				mvCurrent: action.payload.data,
				loading: false
			};
		case GET_COMBUSTION_MV_CURRENT_FAILED:
			return {
				...state,
				error: action.payload.error,
				loading: false
			};
		case GET_COMBUSTION_MV_BIAS_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_COMBUSTION_MV_BIAS_SUCCESS:
			return {
				...state,
				mvBias: action.payload.data,
				loading: false
			};
		case GET_COMBUSTION_MV_BIAS_FAILED:
			return {
				...state,
				error: action.payload.error,
				loading: false
			};
		case GET_COMBUSTION_O2_CHART_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_COMBUSTION_O2_CHART_SUCCESS:
			return {
				...state,
				o2Chart: action.payload.data,
				loading: false
			};
		case GET_COMBUSTION_O2_CHART_FAILED:
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
