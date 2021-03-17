const { SET_COMBUSTION } = require('app/store/constants');

const initialState = {
	combustionRecommendationTime: "2021-02-16 16:24:00",
	combustionSensorsTime: "",
	constraints: [],
	constraintsLoading: false,
	constrainstError: false,
	constraintsLimit: [],
	disturbances: [],
	mvCurrent: [],
	mvBias: [],
	optimalityParameters: [],
	o2Chart: [],
	o2ChartLoading: false,
	o2ChartError: false,
	fuelToAirChart: [],
	fuelToAirChartLoading: false,
	fuelToAirChartError: false,
	windboxChart: [],
	windboxChartLoading: true,
	windboxChartError: false,
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
