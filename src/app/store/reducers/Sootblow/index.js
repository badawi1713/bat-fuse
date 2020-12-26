const createParameterData = (parameter, value) => {
	return { parameter, value };
};

const initialState = {
	parameterTable: [
		createParameterData('Parameter Description 1', 100),
		createParameterData('Parameter Description 2', 200),
		createParameterData('Parameter Description 3', 300),
		createParameterData('Parameter Description 4', 400),
		createParameterData('Parameter Description 5', 500),
		createParameterData('Parameter Description 6', 600),
		createParameterData('Parameter Description 7', 700),
		createParameterData('Parameter Description 8', 800),
		createParameterData('Parameter Description 9', 900)
	],
	id201: {
		value: 1,
		color: '#ff0000'
	}
};

const sootblowReducer = (state = initialState) => {
	return {
		...state,
		parameterTable: state.parameterTable,
		id201: state.id201
	};
};

export default sootblowReducer;
