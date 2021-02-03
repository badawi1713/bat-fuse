import { Button, ButtonGroup, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import {
	getCombustionConstraints,
	getCombustionConstraintsLimit,
	getCombustionDisturbances,
	getCombustionMVBias,
	getCombustionMVCurrent,
	getCombustionO2Chart,
	getCombustionRecommendationTime,
	getCombustionSensorsTime
} from 'app/store/actions';
import clsx from 'clsx';
import { ResizeWindows } from 'helpers';
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

	const [heightChart, setHeightChart] = useState(140);

	const { width, height } = ResizeWindows();

	const combustionRecommendationTime = useSelector(state => state.combustionReducer.combustionRecommendationTime);
	const combustionSensorTime = useSelector(state => state.combustionReducer.combustionSensorsTime);
	const combustionConstraints = useSelector(state => state.combustionReducer.constrainst);
	const combustionConstraintsLimit = useSelector(state => state.combustionReducer.constraintLimit);
	const combustionDisturbances = useSelector(state => state.combustionReducer.disturbances);
	const combustionMVCurrent = useSelector(state => state.combustionReducer.mvCurrent);
	const combustionMVBias = useSelector(state => state.combustionReducer.mvBias);
	const combustionO2Chart = useSelector(state => state.combustionReducer.o2Chart);

	const recommendationTime = combustionRecommendationTime;
	const sensorTime = combustionSensorTime;
	const constraints = combustionConstraints && combustionConstraints[0];
	const constraintLimit = combustionConstraintsLimit && combustionConstraintsLimit;
	const disturbances = combustionDisturbances && combustionDisturbances[0];
	const mvCurrent = combustionMVCurrent && combustionMVCurrent[0];
	const mvBias = combustionMVBias && combustionMVBias[0];
	const o2Chart = combustionO2Chart && combustionO2Chart;

	useEffect(() => {
		const heightChartHandler = (width, height) => {
			if (width >= 1920) {
				setHeightChart('340');
			} else if (width >= 1300) {
				setHeightChart('180');
			} else {
				setHeightChart('140');
			}
		};

		heightChartHandler(width, height);
	}, [width, height]);

	useEffect(() => {
		dispatch(getCombustionRecommendationTime());
		dispatch(getCombustionSensorsTime());
		dispatch(getCombustionO2Chart());
		dispatch(getCombustionConstraints(sensorTime));
		dispatch(getCombustionConstraintsLimit());
		dispatch(getCombustionDisturbances(sensorTime));
		dispatch(getCombustionMVCurrent(sensorTime));
	}, [dispatch, sensorTime]);

	useEffect(() => {
		dispatch(getCombustionMVBias(recommendationTime));
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
							<Link to="/home" className="text-20 xl:text-24 mr-8">
								<ArrowBack color="action" fontSize="inherit" />
							</Link>
							<Typography className="text-center text-11 xl:text-16">COMBUSTION OPTIMIZATION</Typography>
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
									<Typography className="text-center text-11 xl:text-16">
										Operation Control
									</Typography>
								</Grid>
								<Grid item className="w-full">
									<Button
										disableFocusRipple
										disableRipple
										disableTouchRipple
										fullWidth
										variant="contained"
										className={clsx('text-10 xl:text-16 cursor-default', classes.statusButtonOff)}
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
									<Typography className="text-center text-11 xl:text-16">Master Control</Typography>
								</Grid>
								<Grid item className="w-full">
									<ButtonGroup fullWidth variant="contained" aria-label="contained button group">
										<Button
											onClick={handleMasterControlOn}
											className={clsx(
												'text-10 xl:text-16',
												masterControlStatus ? classes.statusButtonOn : 'primary'
											)}
										>
											ON
										</Button>
										<Button
											onClick={handleMasterControlOff}
											className={clsx(
												'text-10 xl:text-16',
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
									<Typography className="text-center text-11 xl:text-16">Safe Guard</Typography>
								</Grid>
								<Grid item className="w-full">
									<Button
										disableFocusRipple
										disableRipple
										disableTouchRipple
										fullWidth
										variant="contained"
										className={
											constraints && constraints.constraints_messages === ''
												? clsx('text-10 xl:text-16 cursor-default', classes.statusButtonOn)
												: clsx('text-10 xl:text-16 cursor-default', classes.statusButtonOff)
										}
									>
										{constraints && constraints.constraints_messages === '' ? 'Ready' : 'Not Ready'}
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* Top Section */}

				{/* Main Content */}
				<Grid item className="flex-1 md:overflow-auto h-full flex flex-col w-full md:h-1/2 py-8 md:pb-0">
					<div className="flex md:flex-row flex-col flex-1">
						<div className="flex flex-col md:w-full h-full">
							<div className="flex md:flex-row flex-col w-full flex-1 md:flex-initial md:h-3/5 mb-4">
								<div className="flex flex-col flex-1 mb-8 md:mb-0 md:mr-8 ">
									<Typography className="text-11 xl:text-14 mb-4 flex-initial">
										Last Recommendation Time
									</Typography>
									<Paper square className="flex justify-around flex-col flex-initial text-center p-8">
										<div>
											<p className="text-9 xl:text-16 font-semibold text-light-blue-300">
												{recommendationTime.length === 0 ? '-' : recommendationTime}
											</p>
										</div>
									</Paper>
									<Typography className="text-11 xl:text-14 my-4 flex-initial">
										Last Sensors Time
									</Typography>
									<Paper square className="flex justify-around flex-col flex-initial text-center p-8">
										<div>
											<p className="text-9 xl:text-16 font-semibold text-light-blue-300">
												{sensorTime.length === 0 ? '-' : sensorTime}
											</p>
										</div>
									</Paper>
									<Typography className="text-11 xl:text-14 my-4 flex-initial">Message</Typography>
									<Paper square className="flex justify-around flex-col flex-1 p-8">
										<div>
											{constraints ? (
												constraints && constraints.constraints_messages === '' ? (
													<p className="text-11 xl:text-16 font-semibold text-grey-100 text-center">
														No messages to display.
													</p>
												) : (
													<p className="text-12 xl:text-16 font-semibold text-red-600 text-center">
														{constraints &&
															constraints.constraints_messages.split(',').join(', ')}
													</p>
												)
											) : (
												<p className="text-11 xl:text-16 font-semibold text-grey-100 text-center">
													Loading
												</p>
											)}
										</div>
									</Paper>
								</div>
								<div className="flex-1 flex flex-col justify-between">
									<Typography className="text-11 xl:text-14 mb-4 flex-initial">
										Manipulated Variables
									</Typography>
									<Paper className="flex flex-col flex-1 justify-around p-8" square>
										<div className="mb-4">
											<p className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												O<sub>2</sub> Control
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Current
													</Typography>
													<Typography className="text-8 xl:text-12 font-semibold">
														Recommended Bias
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{mvCurrent
															? !mvCurrent && mvCurrent.oxygen_control
																? '-'
																: Number(mvCurrent && mvCurrent.oxygen_control).toFixed(
																		2
																  )
															: '-'}
													</Typography>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{mvBias
															? !mvBias && mvBias.oxygen_control
																? '-'
																: Number(mvBias && mvBias.oxygen_control).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div className="mb-4">
											<p className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												Secondary Air Flow (Tonnes/Hour)
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Current
													</Typography>
													<Typography className="text-8 xl:text-12 font-semibold">
														Recommended Bias
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{mvCurrent
															? !mvCurrent && mvCurrent.secondary_air_flow
																? '-'
																: Number(
																		mvCurrent && mvCurrent.secondary_air_flow
																  ).toFixed(2)
															: '-'}
													</Typography>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{mvBias
															? !mvBias && mvBias.secondary_air_flow
																? '-'
																: Number(mvBias && mvBias.secondary_air_flow).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div className="mb-4">
											<Typography className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												Burner Tilt Position
											</Typography>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Current
													</Typography>
													<Typography className="text-8 xl:text-12 font-semibold">
														Recommended Bias
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{mvCurrent
															? !mvCurrent && mvCurrent.burner_tilt_pos
																? '-'
																: Number(
																		mvCurrent && mvCurrent.burner_tilt_pos
																  ).toFixed(2)
															: '-'}
													</Typography>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{mvBias
															? !mvBias && mvBias.burner_tilt_pos
																? '-'
																: Number(mvBias && mvBias.burner_tilt_pos).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div className="mb-4">
											<Typography className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												Fuel-to-Air Ratio
											</Typography>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Current
													</Typography>
													<Typography className="text-8 xl:text-12 font-semibold">
														Resulting Change
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{mvCurrent
															? !mvCurrent && mvCurrent.fuel_to_air_ratio
																? '-'
																: Number(
																		mvCurrent && mvCurrent.fuel_to_air_ratio
																  ).toFixed(2)
															: '-'}
													</Typography>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{mvBias
															? !mvBias && mvBias.fuel_to_air_ratio
																? '-'
																: Number(mvBias && mvBias.fuel_to_air_ratio).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div>
											<Typography className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												Secondary-to-Primary Air Ratio
											</Typography>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Current
													</Typography>
													<Typography className="text-8 xl:text-12 font-semibold">
														Resulting Change
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{mvCurrent
															? !mvCurrent && mvCurrent.sa_to_pa_ratio
																? '-'
																: Number(mvCurrent && mvCurrent.sa_to_pa_ratio).toFixed(
																		2
																  )
															: '-'}
													</Typography>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{mvBias
															? !mvBias && mvBias.sa_to_pa_ratio
																? '-'
																: Number(mvBias && mvBias.sa_to_pa_ratio).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
											</Grid>
										</div>
									</Paper>
								</div>
								<div className="flex flex-col flex-1 my-4 md:my-0 md:mx-8">
									<Typography className="text-11 xl:text-14 mb-4 flex-initial mt-8 md:mt-0">
										Monitored Disturbances
									</Typography>
									<Paper square className="flex justify-around flex-col flex-1 p-8">
										<div className="mb-4">
											<p className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												Primary Air Flow (Tonnes/Hour)
											</p>
											<Grid container spacing={2}>
												<Grid container item xs={6} justify="space-between">
													<Grid item>
														<Typography className="text-8 xl:text-12 font-semibold">
															P.A Flow A
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold">
															P.A Flow B
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold">
															P.A Flow C
														</Typography>
													</Grid>
													<Grid item>
														<Typography className="text-8 xl:text-12 font-semibold">
															{disturbances
																? !disturbances && disturbances.primary_air_flow_a
																	? '-'
																	: Number(
																			disturbances &&
																				disturbances.primary_air_flow_a
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold">
															{disturbances
																? !disturbances && disturbances.primary_air_flow_b
																	? '-'
																	: Number(
																			disturbances &&
																				disturbances.primary_air_flow_b
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold">
															{disturbances
																? !disturbances && disturbances.primary_air_flow_c
																	? '-'
																	: Number(
																			disturbances &&
																				disturbances.primary_air_flow_c
																	  ).toFixed(2)
																: '-'}
														</Typography>
													</Grid>
												</Grid>
												<Grid container item xs={6} justify="space-between">
													<Grid item>
														<Typography className="text-8 xl:text-12 font-semibold">
															P.A Flow D
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold">
															P.A Flow E
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold">
															P.A Flow F
														</Typography>
													</Grid>
													<Grid item>
														<Typography className="text-8 xl:text-12 font-semibold">
															{disturbances
																? !disturbances && disturbances.primary_air_flow_d
																	? '-'
																	: Number(
																			disturbances &&
																				disturbances.primary_air_flow_d
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold">
															{disturbances
																? !disturbances && disturbances.primary_air_flow_e
																	? '-'
																	: Number(
																			disturbances &&
																				disturbances.primary_air_flow_e
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold">
															{disturbances
																? !disturbances && disturbances.primary_air_flow_f
																	? '-'
																	: Number(
																			disturbances &&
																				disturbances.primary_air_flow_f
																	  ).toFixed(2)
																: '-'}
														</Typography>
													</Grid>
												</Grid>
											</Grid>
										</div>
										<div className="mb-4">
											<p className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												Gross Production Rating (MW)
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Value
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{disturbances
															? !disturbances && disturbances.gross_production_rating
																? '-'
																: Number(
																		disturbances &&
																			disturbances.gross_production_rating
																  ).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div>
											<p className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												Coal HHV (Joule)
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Value
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{disturbances
															? !disturbances && disturbances.gross_production_rating
																? '-'
																: disturbances && disturbances.coal_hhv
															: '-'}
													</Typography>
												</Grid>
											</Grid>
										</div>
									</Paper>
									<Typography className="text-11 xl:text-14 my-4 flex-initial ">
										Optimality Parameters
									</Typography>
									<Paper square className="flex justify-around flex-col flex-1 p-8">
										<div className="mb-4">
											<p className="text-10 xl:text-14 font-semibold text-light-blue-300">
												Excess Air Oxygen (%)
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Outlet A
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{Number(0).toFixed(2)}
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Outlet B
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{Number(0).toFixed(2)}
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div>
											<p className="text-10 xl:text-14 font-semibold mt-8 md:mt-0 text-light-blue-300">
												Efficiency Change
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Target Realized
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{Number(0).toFixed(2)}
													</Typography>
												</Grid>
											</Grid>
										</div>
									</Paper>
								</div>
								<div className="flex-1 md:w-1/4 md:h-full flex flex-col justify-between mt-8 md:mt-0">
									<Typography className="text-11 xl:text-14 mb-4 flex-initial">
										Constraints
									</Typography>
									<Paper
										className="flex flex-col flex-1 justify-around md:justify-between p-8"
										square
									>
										<div>
											<p className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												Excess Air Oxygen (Ref: Min.{' '}
												{constraintLimit
													? !constraintLimit && constraintLimit[0] && constraintLimit[0].value
														? '-'
														: constraintLimit &&
														  constraintLimit[0] &&
														  constraintLimit[0].value
													: '-'}
												%)
											</p>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Outlet A
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{constraints
															? !constraints && constraints.excess_outlet_a
																? '-'
																: Number(
																		constraints && constraints.excess_outlet_a
																  ).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Outlet B
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{constraints
															? !constraints && constraints.excess_outlet_b
																? '-'
																: Number(
																		constraints && constraints.excess_outlet_b
																  ).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div className="my-4 ">
											<Typography className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												Windbox-to-Furnace Diff. Press. (Ref: Min.{' '}
												{constraintLimit
													? !constraintLimit && constraintLimit[4] && constraintLimit[4].value
														? '-'
														: constraintLimit &&
														  constraintLimit[4] &&
														  constraintLimit[4].value
													: '-'}{' '}
												mmwc)
											</Typography>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Pressure Difference (HP)
													</Typography>
													<Typography className="text-8 xl:text-12 font-semibold">
														Pressure Difference (LP)
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{constraints
															? !constraints && constraints.windbox_pressure_hp
																? '-'
																: Number(
																		constraints && constraints.windbox_pressure_hp
																  ).toFixed(2)
															: '-'}
													</Typography>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{constraints
															? !constraints && constraints.windbox_pressure_lp
																? '-'
																: Number(
																		constraints && constraints.windbox_pressure_lp
																  ).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div className="mb-4">
											<Typography className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												Furnace Pressure (Ref: Max.{' '}
												{constraintLimit
													? !constraintLimit && constraintLimit[1] && constraintLimit[1].value
														? '-'
														: constraintLimit &&
														  constraintLimit[1] &&
														  constraintLimit[1].value
													: '-'}{' '}
												mmwc)
											</Typography>
											<Grid container>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Furnace A
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{constraints
															? !constraints && constraints.furnace_pressure_a
																? '-'
																: Number(
																		constraints && constraints.furnace_pressure_a
																  ).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Furnace B
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{constraints
															? !constraints && constraints.furnace_pressure_b
																? '-'
																: Number(
																		constraints && constraints.furnace_pressure_b
																  ).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Furnace C
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{constraints
															? !constraints && constraints.furnace_pressure_c
																? '-'
																: Number(
																		constraints && constraints.furnace_pressure_c
																  ).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
											</Grid>
										</div>
										<div>
											<Typography className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												Mill Outlet Temperature (Ref:{' '}
												{constraintLimit
													? !constraintLimit && constraintLimit[2] && constraintLimit[2].value
														? '0'
														: constraintLimit &&
														  constraintLimit[2] &&
														  constraintLimit[2].value
													: ''}
												-
												{constraintLimit
													? !constraintLimit && constraintLimit[3] && constraintLimit[3].value
														? '0'
														: constraintLimit &&
														  constraintLimit[3] &&
														  constraintLimit[3].value
													: ''}{' '}
												°C)
											</Typography>
											<Grid container spacing={2}>
												<Grid container item xs={6} justify="space-between">
													<Grid item>
														<Typography className="text-8 xl:text-12 font-semibold">
															Mill A
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold">
															Mill B
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold">
															Mill C
														</Typography>
													</Grid>
													<Grid item>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{constraints
																? !constraints && constraints.mill_outlet_a
																	? '-'
																	: Number(
																			constraints && constraints.mill_outlet_a
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{constraints
																? !constraints && constraints.mill_outlet_b
																	? '-'
																	: Number(
																			constraints && constraints.mill_outlet_b
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{constraints
																? !constraints && constraints.mill_outlet_c
																	? '-'
																	: Number(
																			constraints && constraints.mill_outlet_c
																	  ).toFixed(2)
																: '-'}
														</Typography>
													</Grid>
												</Grid>
												<Grid container item xs={6} justify="space-between">
													<Grid item>
														<Typography className="text-8 xl:text-12 font-semibold">
															Mill D
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold">
															Mill E
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold">
															Mill F
														</Typography>
													</Grid>
													<Grid item>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{constraints
																? !constraints && constraints.mill_outlet_d
																	? '-'
																	: Number(
																			constraints && constraints.mill_outlet_d
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{constraints
																? !constraints && constraints.mill_outlet_e
																	? '-'
																	: Number(
																			constraints && constraints.mill_outlet_e
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{constraints
																? !constraints && constraints.mill_outlet_f
																	? '-'
																	: Number(
																			constraints && constraints.mill_outlet_f
																	  ).toFixed(2)
																: '-'}
														</Typography>
													</Grid>
												</Grid>
											</Grid>
										</div>
									</Paper>
								</div>
							</div>
							<div className="flex md:flex-row flex-col flex-1 mt-8 md:mt-4">
								<div className="md:flex-inital w-full flex flex-col">
									<Typography className="text-11 xl:text-14 mb-4 flex-initial">
										Oxygen Trend Chart
									</Typography>
									<Grid
										container
										component={Paper}
										direction="column"
										justify="center"
										square
										className="w-full h-full"
									>
										<Grid item className="w-full h-full flex flex-col flex-1 justify-center">
											<O2TrendChart data={o2Chart} height={heightChart} />
										</Grid>
									</Grid>
								</div>
							</div>
						</div>
					</div>
				</Grid>
				{/* Main Content */}
			</Grid>
		</div>
	);
};

export default Combustion;
