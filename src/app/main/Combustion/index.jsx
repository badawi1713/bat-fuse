import { Button, ButtonGroup, Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	},
	formControl: {
		minWidth: '100%'
	},
	statusOn: {
		color: '#FA0000'
	},
	statusOff: {
		color: '#3D9140'
	},
	statusButton: {
		minWidth: 100
	},
	statusButtonOn: {
		color: '#FFF',
		backgroundColor: '#FA0000',
		'&:hover': {
			backgroundColor: '#bd291e'
		}
	},
	statusButtonOff: {
		color: '#FFF',
		backgroundColor: '#3D9140',
		'&:hover': {
			backgroundColor: '#327835'
		}
	},
	container: {
		maxHeight: 200
	},
	defaultButton: {
		padding: '0px 8px'
	}
}));

const CombustionConfig = () => {
	const classes = useStyles();

	// const [masterControlStatus, setMasterControlStatus] = useState(false);
	// const [operationControlStatus, setOperationControlStatus] = useState(false);
	const masterControlStatus = false;
	const operationControlStatus = false;
	// const masterControlToggleOn = () => {
	// 	setMasterControlStatus(true);
	// };

	// const masterControlToggleOff = () => {
	// 	setMasterControlStatus(false);
	// };

	// const operationControlToggleOn = () => {
	// 	setOperationControlStatus(true);
	// };

	// const operationControlToggleOff = () => {
	// 	setOperationControlStatus(false);
	// };

	return (
		<Container className="py-16">
			<Grid container spacing={2}>
				<Grid item xs={12} container spacing={1}>
					<Grid item>
						<Typography>Combustion</Typography>
					</Grid>
					<Grid item xs={12}>
						<hr />
					</Grid>
				</Grid>
				<Grid item container justify="space-between" alignItems="center" xs={12}>
					<Grid item xs={8} md={10}>
						<Typography className="text-12">Operation Control</Typography>
					</Grid>
					<Grid item xs={4} md={2}>
						<ButtonGroup fullWidth variant="contained" aria-label="contained button group">
							<Button
								className={clsx(
									'text-12',
									operationControlStatus ? classes.statusButtonOff : 'primary'
								)}
							>
								Manual
							</Button>
							<Button
								className={clsx('text-12', operationControlStatus ? 'primary' : classes.statusButtonOn)}
							>
								Auto
							</Button>
						</ButtonGroup>
					</Grid>
				</Grid>

				<Grid item container justify="space-between" alignItems="center" xs={12}>
					<Grid item xs={8} md={10}>
						<Typography className="text-12">Master Control</Typography>
					</Grid>
					<Grid item xs={4} md={2}>
						<ButtonGroup fullWidth variant="contained" aria-label="contained button group">
							<Button
								className={clsx('text-12', masterControlStatus ? classes.statusButtonOff : 'primary')}
							>
								ON
							</Button>
							<Button
								className={clsx('text-12', masterControlStatus ? 'primary' : classes.statusButtonOn)}
							>
								OFF
							</Button>
						</ButtonGroup>
					</Grid>
				</Grid>

				<Grid item container justify="space-between" alignItems="center" xs={12}>
					<Grid item xs={8} md={10}>
						<Typography className="text-12">Safe Guard</Typography>
					</Grid>
					<Grid item xs={4} md={2}>
						<Button fullWidth variant="contained" className={clsx('text-12', classes.statusButtonOff)}>
							Ready
						</Button>
					</Grid>
				</Grid>

				<Grid item xs={12}>
					<hr />
				</Grid>
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Typography>Manipulated Variable</Typography>
								</Grid>
								<Grid item container spacing={2}>
									<Grid item xs={12} md={6}>
										<Card>
											<CardContent>
												<Grid container spacing={1}>
													<Grid item xs={12}>
														<Typography>
															O<sub>2</sub> Control Bias
														</Typography>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">Bias</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">Curr</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">Set Point</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">
																O<sub>2</sub> R
															</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">
																O<sub>2</sub> L
															</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</CardContent>
										</Card>
									</Grid>
									<Grid item xs={12} md={6}>
										<Card>
											<CardContent>
												<Grid container spacing={1}>
													<Grid item xs={12}>
														<Typography>Burner Tilt</Typography>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">Bias</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">Curr</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">Demand</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">
																Final SH Temperature
															</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">RH2 Temperature</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</CardContent>
										</Card>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Typography>Control Variable</Typography>
								</Grid>
								<Grid item container spacing={2}>
									<Grid item xs={12} md={6}>
										<Card>
											<CardContent>
												<Grid container spacing={1}>
													<Grid item xs={12}>
														<Typography>Secondary Air Control</Typography>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">Bias</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">Curr</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">Set Point</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">
																Furnace L Wind Box DP
															</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</CardContent>
										</Card>
									</Grid>
									<Grid item xs={12} md={6}>
										<Card>
											<CardContent>
												<Grid container spacing={1}>
													<Grid item xs={12}>
														<Typography>Secondary Air Control</Typography>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">Bias</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">App</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">Set Point</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">
																Furnace R Wind Box DP
															</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</CardContent>
										</Card>
									</Grid>
									<Grid item xs={12}>
										<Card>
											<CardContent>
												<Grid container spacing={1}>
													<Grid item xs={12}>
														<Typography>Load (MW)</Typography>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">
																Main Steam Flow (tph)
															</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">Coal Flow (tph)</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">
																Primary Air Flow (kg/h)
															</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">SA Flow (kg/h)</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item container xs={12} alignItems="center">
														<Grid item xs={4}>
															<Typography className="text-12">
																Main Steam Pressure (Mpag)
															</Typography>
														</Grid>
														<Grid item container xs={8} justify="flex-end" spacing={2}>
															<Grid item>
																<Typography className="text-12">
																	123 kCal/kWh
																</Typography>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</CardContent>
										</Card>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default CombustionConfig;
