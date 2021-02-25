import { SET_EFFICIENCY } from 'app/store/constants';

const initialState = {
	improvementEfficiency: '',
	baselineEfficiency: '',
	currentEfficiency: '',
	referenceValue: '',
	chart: [],
	loading: false,
	error: false
};

const efficiencyReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_EFFICIENCY:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};

export default efficiencyReducer;
