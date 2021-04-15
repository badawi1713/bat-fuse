import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    IconButton,

    InputAdornment, Switch,
    TextField, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { updateUserPassword } from 'app/store/actions';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({

    saveButton: {
        backgroundColor: '#1976d2',
        color: '#FFF',
        '&:hover': {
            backgroundColor: '#21619e'
        }
    },

}));

const Profile = ({ closeProfileHandler, showProfile }) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const [errorNewPassword, setErrorNewPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)

    const user = useSelector(({ auth }) => auth.user);

    const changePasswordHandler = () => {
        setShowChangePassword(!showChangePassword)
    }

    const showNewPasswordHandler = () => {
        setShowNewPassword(!showNewPassword)
    }

    const showConfirmPasswordHandler = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const updatePasswordHandler = async () => {
        await setLoading(true);
        await dispatch(updateUserPassword({
            id: user && user.data && user.data.id,
            password: newPassword
        }))
        await setLoading(false);
        await closeProfileHandler();
    }

    return (
        <Dialog open={showProfile} fullWidth aria-labelledby="responsive-dialog-title">
            <Typography className="text-16 m-24" id="responsive-dialog-title">
                {"Profile"}
            </Typography>
            <DialogContent>

                <Grid container className='space-y-4' spacing={1}>
                    <Grid container alignItems="center" item xs={12}>
                        <Grid item xs={3} className="text-14 text-light-blue-300">
                            Name
                        </Grid>
                        <Grid item xs={9} className="text-14">
                            {user && user.data && user.data.displayName}
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" item xs={12}>
                        <Grid item xs={3} className="text-14 text-light-blue-300">
                            Email
                        </Grid>
                        <Grid item xs={9} className="text-14">
                            {user && user.data && user.data.email}
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" item xs={12}>
                        <Grid item xs={3} className="text-14 text-light-blue-300">
                            Role
                        </Grid>
                        <Grid item xs={9} className="text-14">
                            {user && user.role[0]}
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" item xs={12}>
                        <Grid item xs={3} className="text-14 text-light-blue-300">
                            Change Password
                        </Grid>
                        <Grid item xs={9} className="text-14">
                            <Switch size='small' onClick={changePasswordHandler} />
                        </Grid>
                    </Grid>
                    {showChangePassword && <>
                        <Grid container alignItems="center" item xs={12}>
                            <Grid item xs={3} className="text-14 text-light-blue-300">
                                New Password
								</Grid>
                            <Grid item xs={9}>
                                <TextField
                                    variant='standard'
                                    fullWidth
                                    required
                                    error={errorNewPassword}
                                    placeholder='Type your new password here'
                                    size="small"
                                    helperText={errorNewPassword && 'Password requires 6 characters minimum'}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setTimeout(() => {
                                            setNewPassword(value)
                                        }, 1000);

                                        if (value.length < 6) {
                                            setErrorNewPassword(true)
                                        } else if (confirmPassword !== value && confirmPassword !== "") {
                                            setErrorConfirmPassword(true)
                                            setErrorNewPassword(false)
                                        } else {
                                            setErrorConfirmPassword(false)
                                            setErrorNewPassword(false)
                                        }
                                    }}
                                    type={showNewPassword ? "text" : "password"}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={showNewPasswordHandler}
                                                    edge="end"
                                                >
                                                    {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>)
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" item xs={12}>
                            <Grid item xs={3} className="text-14 text-light-blue-300">
                                Confirm Password
								</Grid>
                            <Grid item xs={9}>
                                <TextField
                                    variant='standard'
                                    fullWidth
                                    required
                                    error={errorConfirmPassword}
                                    helperText={errorConfirmPassword && 'Confirm password does not match'}
                                    onChange={async (e) => {
                                        const value = e.target.value;

                                        setTimeout(async (e) => {
                                            await setConfirmPassword(value)
                                        }, 1000);

                                        if (newPassword === value) {
                                            setErrorConfirmPassword(false)
                                        } else {
                                            await setErrorConfirmPassword(true)
                                        }
                                    }}
                                    placeholder='Type your old password here'
                                    size="small"
                                    type={showConfirmPassword ? "text" : "password"}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={showConfirmPasswordHandler}
                                                    edge="end"
                                                >
                                                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                    }}

                                />
                            </Grid>
                        </Grid>
                    </>}
                </Grid>
            </DialogContent>
            {showChangePassword ?
                (<DialogActions className="p-24">
                    <Button
                        autoFocus
                        variant="outlined"
                        className="text-12 px-6"
                        onClick={closeProfileHandler}
                    >
                        Cancel
                </Button>

                    <Button
                        disabled={loading}
                        variant="contained"
                        autoFocus
                        onClick={updatePasswordHandler}
                        className={clsx(classes.saveButton, 'text-12 px-6')}
                    >
                        {loading ? "Saving" : "Save"}
                    </Button>
                </DialogActions>) :

                (<DialogActions className="p-24">

                    <Button
                        onClick={closeProfileHandler}
                        variant="contained"
                        autoFocus
                        className={clsx(classes.saveButton, 'text-12 px-6')}
                    >
                        Close
</Button>
                </DialogActions>)

            }
        </Dialog>
    )
}

export default Profile
