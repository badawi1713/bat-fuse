const { SET_COMBUSTION } = require('app/store/constants');

const initialState = {
	combustionRecommendationTime: [],
	combustionSensorsTime: [],
	constraints: [],
	constraintsLoading: false,
	constrainstError: false,
	constraintsLimit: [],
	disturbances: [],
	mvCurrent: [],
	mvBias: [],
	o2Chart: [],
	o2ChartLoading: false,
	o2ChartError: false,
	loading: false,
	error: false
};

const combustionReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_COMBUSTION:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};

export default combustionReducer;
