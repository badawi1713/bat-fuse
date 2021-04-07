// import { ApiGetRequest } from '../../api-configs';
// import { errorcallback } from '../../global';
import jwtService from 'app/services/jwtService';
import { SET_SOOTBLOW } from 'app/store/constants';
import { showMessage } from 'app/store/fuse/messageSlice';
// import history from '@history';

import Axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export const getSootblowData = loading => {
	return async dispatch => {
		await dispatch({
			type: SET_SOOTBLOW,
			payload: {
				loadingSootblowData: loading
			}
		});
		await Axios.get(`${baseURL}/service/bat/sootblow/indicator`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		})
			.then(response => {
				dispatch({
					type: SET_SOOTBLOW,
					payload: {
						sootblowData: {
							indicator: response.data.object.indicator,
							sequence: response.data.object.sequence,
							parameter: response.data.object.parameter,
							waitingTime: response.data.object.waitingTime,
							control: response.data.object.control,
							rules: response.data.object.rules
						},
						loadingSootblowData: false
					}
				});
			})
			.catch(error => {
				// if (error.response.status === 500) {
				// 	dispatch(
				// 		showMessage({
				// 			message: "Sorry, something went wrong with Sootblow's service",
				// 			variant: 'error'
				// 		})
				// 	);
				// 	// history.push({ pathname: '/errors/error-500' });
				// }
				dispatch(
					showMessage({
						message: error.message,
						variant: 'error'
					})
				);
				dispatch({
					type: SET_SOOTBLOW,
					payload: {
						error: error.message,
						errorSootblow: true,
						loadingSootblowData: false
					}
				});
			});
	};
};

export const getParameterByID = id => {
	return async dispatch => {
		await dispatch({
			type: SET_SOOTBLOW,
			payload: {
				loading: true
			}
		});
		const response = await Axios.get(`${baseURL}/service/bat/sootblow/parameter/${id}`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		});

		try {
			await dispatch({
				type: SET_SOOTBLOW,
				payload: {
					parameterDetailData: response.data.object,
					loading: false
				}
			});
		} catch (error) {
			await dispatch(
				showMessage({
					message: response.error.message,
					variant: 'error'
				})
			);
			await dispatch({
				type: SET_SOOTBLOW,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		}
	};
};

export const getRuleByID = id => {
	return async dispatch => {
		await dispatch({
			type: SET_SOOTBLOW,
			payload: {
				loading: true
			}
		});
		const response = await Axios.get(`${baseURL}/service/bat/sootblow/rule/${id}`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		});
		try {
			await dispatch({
				type: SET_SOOTBLOW,
				payload: {
					ruleDetailData: {
						detailRule: response.data.object.detailRule,
						label: response.data.object.label,
						id: response.data.object.id
					},
					loading: false
				}
			});
		} catch (error) {
			await dispatch(
				showMessage({
					message: response.error.message,
					variant: 'error'
				})
			);
			await dispatch({
				type: SET_SOOTBLOW,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		}
	};
};

export const getSootblowSettingByID = id => {
	return async dispatch => {
		await dispatch({
			type: SET_SOOTBLOW,
			payload: {
				loading: true
			}
		});
		const response = await Axios.get(`${baseURL}/service/bat/sootblow/waitingtime/${id}`, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`
			}
		});

		try {
			await dispatch({
				type: SET_SOOTBLOW,
				payload: {
					sootblowSettingDetailData: response.data.object,
					loading: false
				}
			});
		} catch (error) {
			await dispatch(
				showMessage({
					message: response.error.message,
					variant: 'error'
				})
			);
			await dispatch({
				type: SET_SOOTBLOW,
				payload: {
					error: response.error.message,
					loading: false
				}
			});
		}
	};
};

export const updateParameterData = data => {
	return async dispatch => {
		await Axios.post(`${baseURL}/service/bat/sootblow/parameter`, data, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`,
				'Content-Type': 'application/json'
			}
		})
			.then(() => {
				dispatch(
					showMessage({
						message: "Parameter's value has been updated",
						variant: 'success'
					})
				);
				dispatch({
					type: SET_SOOTBLOW,
					payload: {
						loadingParameterUpdate: false
					}
				});
			})
			.catch(error => {
				if (error.response.status === 500) {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong with the server',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_SOOTBLOW,
						payload: {
							error: error.message,
							loadingSootblowData: false,
							loadingParameterUpdate: false
						}
					});
				} else {
					dispatch(
						showMessage({
							message: error.message,
							variant: 'error'
						})
					);
					dispatch({
						type: SET_SOOTBLOW,
						payload: {
							error: error.message,
							loadingSootblowData: false,
							loadingParameterUpdate: false
						}
					});
				}
			});
	};
};

export const updateRuleData = data => {
	console.log('data send', data);
	return async dispatch => {
		await Axios.post(`${baseURL}/service/bat/sootblow/rule`, data, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`,
				'Content-Type': 'application/json'
			}
		})
			.then(() => {
				dispatch(
					showMessage({
						message: "Rule's data has been updated",
						variant: 'success'
					})
				);
				dispatch({
					type: SET_SOOTBLOW,
					payload: {
						loadingRuleUpdate: false
					}
				});
			})
			.catch(error => {
				if (error.response.status === 500) {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong with the server',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_SOOTBLOW,
						payload: {
							error: error.message,
							loadingSootblowData: false,
							loadingRuleUpdate: false
						}
					});
				} else {
					dispatch(
						showMessage({
							message: error.message,
							variant: 'error'
						})
					);
					dispatch({
						type: SET_SOOTBLOW,
						payload: {
							error: error.message,
							loadingSootblowData: false,
							loadingRuleUpdate: false
						}
					});
				}
			});
	};
};

export const updateSootblowSettingData = data => {
	return async dispatch => {
		await Axios.post(`${baseURL}/service/bat/sootblow/waitingtime`, data, {
			headers: {
				Authorization: `Bearer ${jwtService.getAccessToken()}`,
				'Content-Type': 'application/json'
			}
		})
			.then(() => {
				dispatch(
					showMessage({
						message: "Sootblow's setting has been updated",
						variant: 'success'
					})
				);
				dispatch({
					type: SET_SOOTBLOW,
					payload: {
						loadingSootblowUpdate: false
					}
				});
			})
			.catch(error => {
				if (error.response.status === 500) {
					dispatch(
						showMessage({
							message: 'Sorry, something went wrong with the server',
							variant: 'error'
						})
					);
					dispatch({
						type: SET_SOOTBLOW,
						payload: {
							error: error.message,
							loadingSootblowData: false,
							loadingSootblowUpdate: false
						}
					});
				} else {
					dispatch(
						showMessage({
							message: error.message,
							variant: 'error'
						})
					);
					dispatch({
						type: SET_SOOTBLOW,
						payload: {
							error: error.message,
							loadingSootblowData: false,
							loadingSootblowUpdate: false
						}
					});
				}
			});
	};
};

export const updateMasterControl = data => {
	return async (dispatch, getState) => {
		const {
			sootblowReducer: { sootblowData }
		} = getState();
		dispatch({
			type: SET_SOOTBLOW,
			payload: {
				loadingMasterControl: true
			}
		});
		if (sootblowData.control[2].value === data.value) {
			return false;
		} else {
			await Axios.post(`${baseURL}/service/bat/sootblow/control`, data, {
				headers: {
					Authorization: `Bearer ${jwtService.getAccessToken()}`,
					'Content-Type': 'application/json'
				}
			})
				.then(() => {
					dispatch(
						showMessage({
							message: 'Master Control button has been switched',
							variant: 'success'
						})
					);
					dispatch({
						type: SET_SOOTBLOW,
						payload: {
							loadingMasterControl: false
						}
					});
				})
				.catch(error => {
					if (error.response.status === 500) {
						dispatch(
							showMessage({
								message: 'Sorry, something went wrong with the server',
								variant: 'error'
							})
						);
					} else {
						dispatch(
							showMessage({
								message: error.message,
								variant: 'error'
							})
						);
					}
					dispatch({
						type: SET_SOOTBLOW,
						payload: {
							error: error.message,
							loadingSootblowData: false,
							loadingMasterControl: false
						}
					});
				});
		}
	};
};

export const changeSootblow = data => {
	return async dispatch => {
		dispatch({
			type: SET_SOOTBLOW,
			payload: data
		});
	};
};
