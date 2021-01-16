import { Button, ButtonGroup, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import { getCombustionConstraints, getCombustionTimestamp } from 'app/store/actions';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { O2TrendChart } from './Components';

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
		backgroundColor: '#3D9140',
		'&:hover': {
			backgroundColor: '#327835'
		}
	},
	statusButtonOff: {
		color: '#FFF',
		backgroundColor: '#FA0000',
		'&:hover': {
			backgroundColor: '#bd291e'
		}
	},
	container: {
		maxHeight: 200
	},
	defaultButton: {
		padding: '0px 8px'
	}
}));

const Combustion = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [masterControlStatus, setMasterControlStatus] = useState(false);

	const combustionTimestamp = useSelector(state => state.combustionReducer.combustionTimestamp);
	const combustionConstraints = useSelector(state => state.combustionReducer.constrainst);
	const recommendationTime = combustionTimestamp && combustionTimestamp;
	const constraints = combustionConstraints && combustionConstraints[0];

	useEffect(() => {
		dispatch(getCombustionTimestamp());
		dispatch(getCombustionConstraints(recommendationTime));
	}, [dispatch, recommendationTime]);

	const handleMasterControlOn = () => {
		setMasterControlStatus(true);
	};

	const handleMasterControlOff = () => {
		setMasterControlStatus(false);
	};

	return (
		<div className="h-full px-24 py-16 ">
			<Grid container className="md:flex-col flex-row h-full">
				{/* Top Section */}
				<Grid item className="flex-initial w-full">
					<Grid container alignItems="center" justify="space-between">
						<Grid
							item
							container
							xs={12}
							md={3}
							className="justify-between md:justify-start mb-4 md:mb-0"
							alignItems="center"
						>
							<Grid item className="md:mr-8">
								<Link to="/home">
									<ArrowBack color="action" fontSize="small" />
								</Link>
							</Grid>
							<Grid item>
								<Typography className="text-11">COMBUSTION OPTIMIZATION</Typography>
							</Grid>
						</Grid>
						<Grid item container xs={12} md={9} justify="flex-end" alignItems="center">
							<Grid
								className="mb-4 md:mb-0"
								item
								container
								direction="column"
								alignItems="center"
								xs={12}
								md={3}
							>
								<Grid item className="w-full">
									<Typography className="text-center text-10">Operation Control</Typography>
								</Grid>
								<Grid item className="w-full">
									<Button
										disableFocusRipple
										disableRipple
										disableTouchRipple
										fullWidth
										variant="contained"
										className={clsx('text-8 cursor-default', classes.statusButtonOff)}
									>
										MANUAL
									</Button>
								</Grid>
							</Grid>
							<Grid
								className="mb-4 md:ml-8 md:mb-0"
								item
								container
								direction="column"
								alignItems="center"
								xs={12}
								md={3}
							>
								<Grid item className="w-full">
									<Typography className="text-center text-10">Master Control</Typography>
								</Grid>
								<Grid item className="w-full">
									<ButtonGroup fullWidth variant="contained" aria-label="contained button group">
										<Button
											onClick={handleMasterControlOn}
											className={clsx(
												'text-8',
												masterControlStatus ? classes.statusButtonOn : 'primary'
											)}
										>
											ON
										</Button>
										<Button
											onClick={handleMasterControlOff}
											className={clsx(
												'text-8',
												masterControlStatus ? 'primary' : classes.statusButtonOff
											)}
										>
											OFF
										</Button>
									</ButtonGroup>
								</Grid>
							</Grid>
							<Grid
								className="md:ml-8"
								item
								container
								direction="column"
								alignItems="center"
								xs={12}
								md={3}
							>
								<Grid item className="w-full">
									<Typography className="text-center text-10">Safe Guard</Typography>
								</Grid>
								<Grid item className="w-full">
									<Button
										disableFocusRipple
										disableRipple
										disableTouchRipple
										fullWidth
										variant="contained"
										className={clsx('text-8 cursor-default', classes.statusButtonOn)}
									>
										Ready
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* Top Section */}

				{/* Main Content */}
				<Grid item className="flex-1 h-full flex flex-col w-full md:h-1/2 py-8 md:pb-0">
					<div className="flex md:flex-row flex-col flex-1">
						<div className="flex flex-col md:w-3/4 h-full">
							<div className="flex md:flex-row flex-col w-full flex-1 md:flex-initial md:h-3/5 mb-4">
								<div className="flex flex-col flex-1 mb-8 md:mb-0 md:mr-8 ">
									<Typography className="text-10 mb-4 flex-initial">
										Last Recommendation Time
									</Typography>
									<Paper square className="flex justify-around flex-col flex-initial text-center p-8">
										<div>
											<p className="text-9 font-semibold text-light-blue-300">
												{!recommendationTime ? '-' : recommendationTime}
											</p>
										</div>
									</Paper>
									<Typography className="text-10 my-4 flex-initial">Message</Typography>
									<Paper square className="flex justify-around flex-col flex-1 p-8">
										<div>
											<p className="text-9 font-semibold text-grey-100 text-center">
												No Messages to Display
											</p>
										</div>
									</Paper>
								</div>
								<div className="flex-1 flex flex-col justify-between">
									<Typography className="text-10 mb-4 flex-initial">Manipulated Variables</Typography>
									<Paper className="flex flex-col flex-1 justify-around p-8" square>
										<div className="mb-4">
											<p className="text-10 font-semibold text-light-blue-300 mb-1">
												O<sub>2</sub> Control
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold">Current</Typography>
													<Typography className="text-8 font-semibold">
														Recommended Bias
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div className="mb-4">
											<p className="text-10 font-semibold text-light-blue-300 mb-1">
												Secondary Air Flow (Tonnes/Hour)
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold">Current</Typography>
													<Typography className="text-8 font-semibold">
														Recommended Bias
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div className="mb-4">
											<Typography className="text-10 font-semibold text-light-blue-300 mb-1">
												Burner Tilt Position
											</Typography>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold">Current</Typography>
													<Typography className="text-8 font-semibold">
														Recommended Bias
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div className="mb-4">
											<Typography className="text-10 font-semibold text-light-blue-300 mb-1">
												Fuel-to-Air Ratio
											</Typography>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold">Current</Typography>
													<Typography className="text-8 font-semibold">
														Resulting Change
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div>
											<Typography className="text-10 font-semibold text-light-blue-300 mb-1">
												Secondary-to-Primary Air Ratio
											</Typography>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold">Current</Typography>
													<Typography className="text-8 font-semibold">
														Resulting Change
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
												</Grid>
											</Grid>
										</div>
									</Paper>
								</div>
								<div className="flex flex-col flex-1 my-4 md:my-0 md:mx-8">
									<Typography className="text-10 mb-4 flex-initial">
										Monitored Disturbances
									</Typography>
									<Paper square className="flex justify-around flex-col flex-1 p-8">
										<div className="mb-4">
											<p className="text-10 font-semibold text-light-blue-300 mb-1">
												Primary Air Flow (Tonnes/Hour)
											</p>
											<Grid container spacing={2}>
												<Grid container item xs={6} justify="space-between">
													<Grid item>
														<Typography className="text-8 font-semibold">
															P.A Flow A
														</Typography>
														<Typography className="text-8 font-semibold">
															P.A Flow B
														</Typography>
														<Typography className="text-8 font-semibold">
															P.A Flow C
														</Typography>
													</Grid>
													<Grid item>
														<Typography className="text-8 font-semibold">55</Typography>
														<Typography className="text-8 font-semibold">50</Typography>
														<Typography className="text-8 font-semibold">60</Typography>
													</Grid>
												</Grid>
												<Grid container item xs={6} justify="space-between">
													<Grid item>
														<Typography className="text-8 font-semibold">
															P.A Flow D
														</Typography>
														<Typography className="text-8 font-semibold">
															P.A Flow E
														</Typography>
														<Typography className="text-8 font-semibold">
															P.A Flow F
														</Typography>
													</Grid>
													<Grid item>
														<Typography className="text-8 font-semibold">55</Typography>
														<Typography className="text-8 font-semibold">66</Typography>
														<Typography className="text-8 font-semibold">60</Typography>
													</Grid>
												</Grid>
											</Grid>
										</div>
										<div className="mb-4">
											<p className="text-10 font-semibold text-light-blue-300 mb-1">
												Gross Production Rating (MW)
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold">Value</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div>
											<p className="text-10 font-semibold text-light-blue-300 mb-1">
												Coal HHV (Joule)
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold">Value</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
												</Grid>
											</Grid>
										</div>
									</Paper>
									<Typography className="text-10 my-4 flex-initial">Optimality Parameters</Typography>
									<Paper square className="flex justify-around flex-col flex-1 p-8">
										<div className="mb-4">
											<p className="text-10 font-semibold text-light-blue-300">
												Excess Air Oxygen (%)
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold">Outlet A</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold">Outlet B</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div>
											<p className="text-10 font-semibold mt-8 md:mt-0 text-light-blue-300">
												Efficiency Change
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold">
														Target Realized
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 font-semibold text-right">
														10
													</Typography>
												</Grid>
											</Grid>
										</div>
									</Paper>
								</div>
							</div>
							<div className="flex md:flex-row flex-col flex-1 mr-8">
								<div className="md:flex-inital w-full flex flex-col">
									<Typography className="text-10 mb-4 flex-initial">Oxygen Trend Chart</Typography>
									<Grid
										container
										component={Paper}
										direction="column"
										justify="center"
										square
										className="w-full h-full"
									>
										<Grid item className="w-full h-full flex flex-col flex-1 justify-center">
											<O2TrendChart />
										</Grid>
									</Grid>
								</div>
							</div>
						</div>
						<div className="flex-1 md:w-1/4 md:h-full flex flex-col justify-between mt-8 md:mt-0">
							<Typography className="text-10 mb-4 flex-initial">Constraints</Typography>
							<Paper className="flex flex-col flex-1 justify-around md:justify-start p-8" square>
								<div>
									<p className="text-10 font-semibold text-light-blue-300 mb-1">
										Excess Air Oxygen (Ref: Min. 2%)
									</p>
									<Grid container>
										<Grid item xs={6}>
											<Typography className="text-8 font-semibold">Outlet A</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography className="text-8 font-semibold text-right">
												{constraints
													? !constraints && constraints.excess_outlet_a
														? '-'
														: constraints && constraints.excess_outlet_a
													: '-'}
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography className="text-8 font-semibold">Outlet B</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography className="text-8 font-semibold text-right">
												{constraints
													? !constraints && constraints.excess_outlet_b
														? '-'
														: constraints && constraints.excess_outlet_b
													: '-'}
											</Typography>
										</Grid>
									</Grid>
								</div>
								<div className="my-4 ">
									<Typography className="text-10 font-semibold text-light-blue-300 mb-1 mb-1">
										Windbox-to-Furnace Diff. Press. (Ref: Min. 70 mmwc)
									</Typography>
									<Grid container>
										<Grid item xs={6}>
											<Typography className="text-8 font-semibold">Pressure Left (HP)</Typography>
											<Typography className="text-8 font-semibold">Pressure Left (LP)</Typography>
											<Typography className="text-8 font-semibold">
												Pressure Right (HP)
											</Typography>
											<Typography className="text-8 font-semibold">
												Pressure Right (LP)
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography className="text-8 font-semibold text-right">
												{constraints
													? !constraints && constraints.windbox_pressure_left_hp
														? '-'
														: constraints && constraints.windbox_pressure_left_hp
													: '-'}
											</Typography>
											<Typography className="text-8 font-semibold text-right">
												{constraints
													? !constraints && constraints.windbox_pressure_left_lp
														? '-'
														: constraints && constraints.windbox_pressure_left_lp
													: '-'}
											</Typography>
											<Typography className="text-8 font-semibold text-right">
												{constraints
													? !constraints && constraints.windbox_pressure_right_hp
														? '-'
														: constraints && constraints.windbox_pressure_right_hp
													: '-'}
											</Typography>
											<Typography className="text-8 font-semibold text-right">
												{constraints
													? !constraints && constraints.windbox_pressure_right_lp
														? '-'
														: constraints && constraints.windbox_pressure_right_lp
													: '-'}
											</Typography>
										</Grid>
									</Grid>
								</div>
								<div className="mb-4">
									<Typography className="text-10 font-semibold text-light-blue-300 mb-1">
										Furnace Pressure (Ref: Max. -3 mmwc)
									</Typography>
									<Grid container>
										<Grid item xs={6}>
											<Typography className="text-8 font-semibold">Furnace A</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography className="text-8 font-semibold text-right">
												{constraints
													? !constraints && constraints.furnace_pressure_a
														? '-'
														: Number(constraints && constraints.furnace_pressure_a).toFixed(
																2
														  )
													: '-'}
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography className="text-8 font-semibold">Furnace B</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography className="text-8 font-semibold text-right">
												{constraints
													? !constraints && constraints.furnace_pressure_b
														? '-'
														: Number(constraints && constraints.furnace_pressure_b).toFixed(
																2
														  )
													: '-'}
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography className="text-8 font-semibold">Furnace C</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography className="text-8 font-semibold text-right">
												{constraints
													? !constraints && constraints.furnace_pressure_c
														? '-'
														: Number(constraints && constraints.furnace_pressure_c).toFixed(
																2
														  )
													: '-'}
											</Typography>
										</Grid>
									</Grid>
								</div>
								<div>
									<Typography className="text-10 font-semibold text-light-blue-300 mb-1">
										Mill Outlet Temperature (Ref: 50-70 °C)
									</Typography>
									<Grid container spacing={2}>
										<Grid container item xs={6} justify="space-between">
											<Grid item>
												<Typography className="text-8 font-semibold">Mill A</Typography>
												<Typography className="text-8 font-semibold">Mill B</Typography>
												<Typography className="text-8 font-semibold">Mill C</Typography>
											</Grid>
											<Grid item>
												<Typography className="text-8 font-semibold text-right">
													{constraints
														? !constraints && constraints.mill_outlet_a
															? '-'
															: Number(constraints && constraints.mill_outlet_a).toFixed(
																	2
															  )
														: '-'}
												</Typography>
												<Typography className="text-8 font-semibold text-right">
													{constraints
														? !constraints && constraints.mill_outlet_b
															? '-'
															: Number(constraints && constraints.mill_outlet_b).toFixed(
																	2
															  )
														: '-'}
												</Typography>
												<Typography className="text-8 font-semibold text-right">
													{constraints
														? !constraints && constraints.mill_outlet_c
															? '-'
															: Number(constraints && constraints.mill_outlet_c).toFixed(
																	2
															  )
														: '-'}
												</Typography>
											</Grid>
										</Grid>
										<Grid container item xs={6} justify="space-between">
											<Grid item>
												<Typography className="text-8 font-semibold">Mill D</Typography>
												<Typography className="text-8 font-semibold">Mill E</Typography>
												<Typography className="text-8 font-semibold">Mill F</Typography>
											</Grid>
											<Grid item>
												<Typography className="text-8 font-semibold text-right">
													{constraints
														? !constraints && constraints.mill_outlet_d
															? '-'
															: Number(constraints && constraints.mill_outlet_d).toFixed(
																	2
															  )
														: '-'}
												</Typography>
												<Typography className="text-8 font-semibold text-right">
													{constraints
														? !constraints && constraints.mill_outlet_e
															? '-'
															: Number(constraints && constraints.mill_outlet_e).toFixed(
																	2
															  )
														: '-'}
												</Typography>
												<Typography className="text-8 font-semibold text-right">
													{constraints
														? !constraints && constraints.mill_outlet_f
															? '-'
															: Number(constraints && constraints.mill_outlet_f).toFixed(
																	2
															  )
														: '-'}
												</Typography>
											</Grid>
										</Grid>
									</Grid>
								</div>
							</Paper>
						</div>
					</div>
				</Grid>
				{/* Main Content */}
			</Grid>
		</div>
	);
};

export default Combustion;
