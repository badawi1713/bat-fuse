import FuseAnimate from '@fuse/core/FuseAnimate';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import './index.css';
import JWTLoginTab from './Components/JWTLoginTab';
// import SockJS from 'sockjs-client'
// import Stomp from 'stompjs';

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	},
	leftSection: {},
	rightSection: {
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	}
}));

function Login() {
	const classes = useStyles();

	// function onMessageReceived(payload) {
	// 	let message = JSON.parse(payload.body);
	// 	console.log(message)
	// }

	// useEffect(() => {
	// 	const socket = new SockJS('http://192.168.43.93:8080/ws');
	// 	// const socket = new SockJS('http://192.168.43.214:8081/service/bat/log-soopt');
	// 	const stompClient = Stomp.over(socket);
	// 	const headers = {
	// 		"Access-Control-Allow-Credentials": true
	// 	}
	// 	stompClient.connect(headers, () => {
	// 		stompClient.subscribe(
	// 			`/topic/public`, console.log, onMessageReceived
	// 		);

	// 	});


	// 	return () => stompClient && stompClient.disconnect();
	// });

	return (
		<div
			className={clsx(
				classes.root,
				'flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24'
			)}
		>
			<FuseAnimate animation="transition.expandIn">
				<div className="flex w-full max-w-400 md:max-w-3xl rounded-12 shadow-2xl xl:h-5/6 xl:w-full overflow-hidden">
					<Card
						className={clsx(
							classes.leftSection,
							'flex flex-col w-full max-w-sm items-center justify-center'
						)}
						square
						elevation={0}
					>
						<CardContent className="flex flex-col items-center justify-center w-full pt-96 max-w-320">
							<FuseAnimate delay={300}>
								<div className="flex items-center mb-32">
									<img
										className="logo-icon w-72 lg:w-92"
										src="assets/images/logos/logo-pjb.svg"
										alt="logo"
									/>
									<div className="border-l-1 mx-12 w-1 h-40" />
									<div>
										<Typography className="text-24 lg:text-32 font-800 logo-text" color="inherit">
											SOKKET
										</Typography>
									</div>
								</div>
							</FuseAnimate>

							<JWTLoginTab />
						</CardContent>
					</Card>

					<div
						className={clsx(
							classes.rightSection,
							'hidden md:flex flex-1 items-center justify-center p-64 login-background'
						)}
					>
						<div className="max-w-320">
							<FuseAnimate animation="transition.slideUpIn" delay={400}>
								<Typography color="inherit" className="font-800 leading-tight text-44 lg:text-56 text-center">
									Welcome to <br />
									SOKKET <br />
								</Typography>
							</FuseAnimate>

							<FuseAnimate delay={500}>
								<Typography
									variant="subtitle1"
									color="inherit"
									className="mt-32 text-center text-16 lg:text-28"
								>
									Boiler Auto Tuning
								</Typography>
							</FuseAnimate>
						</div>
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default Login;
