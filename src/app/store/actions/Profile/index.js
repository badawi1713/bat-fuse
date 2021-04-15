import jwtService from 'app/services/jwtService';
import { showMessage } from 'app/store/fuse/messageSlice';
import Axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export const updateUserPassword = data => {
    return async dispatch => {
        await Axios.put(`${baseURL}/service/bat/user/save`, data, {
            headers: {
                Authorization: `Bearer ${jwtService.getAccessToken()}`,
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                dispatch(
                    showMessage({
                        message: "User password has been updated",
                        variant: 'success'
                    })
                );

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
            });
    };
};