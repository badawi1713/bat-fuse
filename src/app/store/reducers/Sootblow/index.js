import { SET_SOOTBLOW } from 'app/store/constants';

const initialState = {
	sootblowData: {
		indicator: {},
		sequence: [],
		parameter: [],
		waitingTime: [],
		control: [],
		rules: []
	},
	parameterDetailData: {},
	ruleDetailData: { detailRule: [], label: '', id: '' },
	sootblowSettingDetailData: {},
	loading: false,
	loadingSootblowData: false,
	loadingMasterControl: false,
	loadingParameterUpdate: false,
	loadingRuleUpdate: false,
	loadingSootblowUpdate: false,
	error: '',
	errorSootblow: false
};

const sootblowReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SOOTBLOW:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};

export default sootblowReducer;
