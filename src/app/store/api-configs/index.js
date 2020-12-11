/* config untuk API yang global / bisa dipake disemua module, api ini dipanggil 
di actions/global/index.js */
import axios from 'axios';
import jwtService from 'app/services/jwtService';
require('dotenv').config();

// main config axios
export const Api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Accept: 'application/json',
		'Access-Control-Allow-Origin': 'Authorization',
		'Content-Type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest',
		Authorization: `Bearer ${jwtService.getAccessToken()}`
	},
	mode: 'no-cors',
	credentials: true,
	crossdomain: true
});

export function ApiGetRequest(url, data = {}) {
	return Api.get(url, {
		params: data
	})
		.then(response => response)
		.then(responseJson => {
			return responseJson;
		})
		.catch(error => {
			return {
				error: (error.response && error.response.data.message) || error
			};
		});
}

export function ApiGetUploadFile(url, data = {}, callbackUpload = () => {}) {
	return Api.post(url, data, {
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		onUploadProgress: event => callbackUpload(event)
	})
		.then(response => response)
		.then(responseJson => {
			return responseJson;
		})
		.catch(error => {
			return {
				error: (error.response && error.response.data.message) || error
			};
		});
}

export function ApiPostMultipart(url, data = {}) {
	console.log(data, 'data multipart sennd');
	return Api.post(url, data, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
		.then(response => response)
		.then(responseJson => {
			return responseJson;
		})
		.catch(error => {
			return {
				error: (error.response && error.response.data.message) || error
			};
		});
}

export const ApiPostRequest = (url, data = {}) => {
	return Api.post(url, data)
		.then(response => response)
		.then(responseJson => {
			return responseJson;
		})
		.catch(error => {
			return {
				error: (error.response && error.response.data.message) || error
			};
		});
};

export const ApiPutRequest = (url, data = {}) => {
	return Api.put(url, data)
		.then(response => response)
		.then(responseJson => {
			return responseJson;
		})
		.catch(error => {
			return {
				error: (error.response && error.response.data.message) || error
			};
		});
};

export const ApiDeleteRequest = (url, data = {}) => {
	return Api.delete(url, data)
		.then(response => response)
		.then(responseJson => {
			return responseJson;
		})
		.catch(error => {
			return {
				error: (error.response && error.response.data.message) || error
			};
		});
};
