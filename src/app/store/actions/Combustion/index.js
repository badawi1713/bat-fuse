// import { ApiGetRequest } from '../../api-configs';
// import { errorcallback } from '../../global';
import { Api } from 'app/store/api-configs';
import { SET_COMBUSTION } from 'app/store/constants';
import { showMessage } from 'app/store/fuse/messageSlice';

const baseURL = process.env.REACT_APP_API_URL_COMBUSTION;

export const getCombustionRecommendationTime = () => {
	return async dispatch => {
		Api.get(`${baseURL}/getMaxTR`)
			.then(response => {
				dispatch({
					type: SET_COMBUSTION,
					payload: {
						combustionRecommendationTime: response.data.last_update,
						loading: false
					}
				});
			})
			.catch(error => {
				if (error.message === "Cannot read property 'status' of undefined") {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong with the server',
							variant: 'error'
						})
					);
					// history.push({ pathname: '/errors/error-500' });
				} else {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							loading: false
						}
					});
				}
			});
	};
};

export const getCombustionSensorsTime = () => {
	return async dispatch => {
		Api.get(`${baseURL}/getMaxTS`)
			.then(response => {
				dispatch({
					type: SET_COMBUSTION,
					payload: {
						combustionSensorsTime: response.data.last_update,
						loading: false
					}
				});
			})
			.catch(error => {
				if (error.message !== "Cannot read property 'status' of undefined") {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							loading: false
						}
					});
				}
			});
	};
};

export const getCombustionConstraints = () => {
	return async (dispatch, getState) => {
		const { combustionReducer } = getState()

		dispatch({
			type: SET_COMBUSTION,
			payload: {
				constraintsLoading: true
			}
		});
		Api.get(`${baseURL}/getConstraints?last_update=${combustionReducer.combustionRecommendationTime}`)
			.then(response => {
				dispatch({
					type: SET_COMBUSTION,
					payload: {
						constraints: response.data,
						constraintsLoading: false
					}
				});
			})
			.catch(error => {
				if (error.message !== "Cannot read property 'status' of undefined") {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							constraintsLoading: false,
							constraintsError: true
						}
					});
				} else {
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							constraintsLoading: false,
							constraintsError: true
						}
					});
				}
			});
	};
};

export const getCombustionConstraintsLimit = () => {
	return async (dispatch) => {
		Api.get(`${baseURL}/getConstraintsLimit`)
			.then(response => {
				dispatch({
					type: SET_COMBUSTION,
					payload: {
						constraintsLimit: response.data,
						loading: false
					}
				});
			})
			.catch(error => {
				if (error.message !== "Cannot read property 'status' of undefined") {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							loading: false
						}
					});
				}
			});
	};
};

export const getCombustionDisturbances = () => {
	return async (dispatch, getState) => {
		const { combustionReducer } = getState()

		Api.get(`${baseURL}/getDisturbances?last_update=${combustionReducer.combustionRecommendationTime}`)
			.then(response => {
				dispatch({
					type: SET_COMBUSTION,
					payload: {
						disturbances: response.data,
						loading: false
					}
				});
			})
			.catch(error => {
				if (error.message !== "Cannot read property 'status' of undefined") {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							loading: false
						}
					});
				}
			});
	};
};

export const getCombustionMVCurrent = () => {
	return async (dispatch, getState) => {
		const { combustionReducer } = getState()
		Api.get(`${baseURL}/getMVCurrent?last_update=${combustionReducer.combustionRecommendationTime}`)
			.then(response => {
				dispatch({
					type: SET_COMBUSTION,
					payload: {
						mvCurrent: response.data,
						loading: false
					}
				});
			})
			.catch(error => {
				if (error.message !== "Cannot read property 'status' of undefined") {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							loading: false
						}
					});
				}
			});
	};
};

export const getCombustionMVBias = () => {
	return async (dispatch, getState) => {
		const { combustionReducer } = getState()
		Api.get(`${baseURL}/getMVBias?last_update=${combustionReducer.combustionRecommendationTime}`)
			.then(response => {
				dispatch({
					type: SET_COMBUSTION,
					payload: {
						mvBias: response.data,
						loading: false
					}
				});
			})
			.catch(error => {
				if (error.message !== "Cannot read property 'status' of undefined") {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							loading: false
						}
					});
				}
			});
	};
};

export const getCombustionOptimalityParameters = () => {
	return async (dispatch, getState) => {
		const { combustionReducer } = getState()
		Api.get(`${baseURL}/getOptimalityParams?last_update=${combustionReducer.combustionRecommendationTime}`)
			.then(response => {
				dispatch({
					type: SET_COMBUSTION,
					payload: {
						optimalityParameters: response.data,
						loading: false
					}
				});
			})
			.catch(error => {
				if (error.message !== "Cannot read property 'status' of undefined") {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							loading: false
						}
					});
				}
			});
	};
};

export const getCombustionO2Chart = () => {
	return async dispatch => {
		await dispatch({
			type: SET_COMBUSTION,
			payload: {
				o2ChartLoading: true
			}
		});
		await Api.get(`${baseURL}/getAvgExcessO2Day`)
			.then(response => {
				dispatch({
					type: SET_COMBUSTION,
					payload: {
						o2Chart: JSON.parse(response.data),
						o2ChartLoading: false
					}
				});
			})
			.catch(error => {
				if (error.message !== "Cannot read property 'status' of undefined") {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							o2ChartError: true,
							o2ChartLoading: false
						}
					});
				} else {
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							o2ChartError: true,
							o2ChartLoading: false
						}
					});
				}
			});
	};
};

export const getCombustionFuelToAirChart = () => {
	return async dispatch => {
		await dispatch({
			type: SET_COMBUSTION,
			payload: {
				fuelToAirChartLoading: true
			}
		});
		await Api.get(`${baseURL}/getFTARatioDay`)
			.then(response => {

				dispatch({
					type: SET_COMBUSTION,
					payload: {
						fuelToAirChart: JSON.parse(response.data),
						fuelToAirChartLoading: false
					}
				});
			})
			.catch(error => {
				if (error.message !== "Cannot read property 'status' of undefined") {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							fuelToAirChartError: true,
							fuelToAirChartLoading: false
						}
					});
				} else {
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							fuelToAirChartError: true,
							fuelToAirChartLoading: false
						}
					});
				}
			});
	};
};

export const getCombustionWindboxChart = () => {
	return async dispatch => {
		await dispatch({
			type: SET_COMBUSTION,
			payload: {
				windboxChartLoading: true
			}
		});
		await Api.get(`${baseURL}/getWTFRatioDay`)
			.then(response => {

				dispatch({
					type: SET_COMBUSTION,
					payload: {
						windboxChart: JSON.parse(response.data),
						windboxChartLoading: false
					}
				});
			})
			.catch(error => {
				if (error.message !== "Cannot read property 'status' of undefined") {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							windboxChartError: true,
							windboxChartLoading: false
						}
					});
				} else {
					dispatch({
						type: SET_COMBUSTION,
						payload: {
							windboxChartError: true,
							windboxChartLoading: false
						}
					});
				}
			});
	};
};