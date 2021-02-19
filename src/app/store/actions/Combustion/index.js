// import { ApiGetRequest } from '../../api-configs';
// import { errorcallback } from '../../global';
import history from '@history';
import jwtService from 'app/services/jwtService';
import { SET_COMBUSTION } from 'app/store/constants';
import { showMessage } from 'app/store/fuse/messageSlice';
import Axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL_COMBUSTION;

export const getCombustionRecommendationTime = () => {
	return async dispatch => {
		Axios.get(`${baseURL}/getMaxTR`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
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
		Axios.get(`${baseURL}/getMaxTS`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
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

export const getCombustionConstraints = timestamp => {
	return async dispatch => {
		dispatch({
			type: SET_COMBUSTION,
			payload: {
				constraintsLoading: true
			}
		});
		Axios.get(`${baseURL}/getConstraints?last_update=${timestamp}`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
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
	return async dispatch => {
		Axios.get(`${baseURL}/getConstraintsLimit`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
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

export const getCombustionDisturbances = timestamp => {
	return async dispatch => {
		Axios.get(`${baseURL}/getDisturbances?last_update=${timestamp}`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
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

export const getCombustionO2Chart = () => {
	return async dispatch => {
		await dispatch({
			type: SET_COMBUSTION,
			payload: {
				o2ChartLoading: true
			}
		});
		await Axios.get(`${baseURL}/getO2Day`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
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

export const getCombustionMVCurrent = timestamp => {
	return async dispatch => {
		Axios.get(`${baseURL}/getMVCurrent?last_update=${timestamp}`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
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

export const getCombustionMVBias = timestamp => {
	return async dispatch => {
		Axios.get(`${baseURL}/getMVBias?last_update=${timestamp}`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
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
