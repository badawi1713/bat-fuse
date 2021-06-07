import { Api } from 'app/store/api-configs';
import { showMessage } from 'app/store/fuse/messageSlice';

const baseURL = process.env.REACT_APP_API_URL;

export const updateUserPassword = data => {
    return async dispatch => {
        await Api.put(`${baseURL}/service/bat/user/save`, data)
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