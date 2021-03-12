import { Button, Grid, Paper, Typography } from '@material-ui/core';
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
	getCombustionSensorsTime,
	getCombustionOptimalityParameters,
	getCombustionFuelToAirChart,
	getCombustionWindboxChart
} from 'app/store/actions';
import clsx from 'clsx';
import { ResizeWindows } from 'helpers';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TrendChart } from './Components';

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

	const [heightChart, setHeightChart] = useState(140);
	const [windboxLimit, setWindboxLimit] = useState('');

	const { width, height } = ResizeWindows();

	const combustionReducer = useSelector(state => state.combustionReducer);

	const {
		combustionRecommendationTime,
		constraints: combustionConstraints,
		constraintsError,
		constraintsLimit: combustionConstraintsLimit,
		disturbances: combustionDisturbances,
		mvCurrent: combustionMVCurrent,
		mvBias: combustionMVBias,
		optimalityParameters: optimalityParameter,
		// combustionSensorsTime,
		o2Chart,
		o2ChartError,
		o2ChartLoading,
		fuelToAirChart,
		fuelToAirChartError,
		fuelToAirChartLoading,
		windboxChart,
		windboxChartError,
		windboxChartLoading
	} = combustionReducer;

	const recommendationTime = combustionRecommendationTime;
	const constraints = combustionConstraints && combustionConstraints[0];
	const constraintLimit = combustionConstraintsLimit;
	const disturbances = combustionDisturbances && combustionDisturbances[0];
	const mvCurrent = combustionMVCurrent && combustionMVCurrent[0];
	const mvBias = combustionMVBias && combustionMVBias[0];
	const optimalityParameters = optimalityParameter && optimalityParameter[0];

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
		dispatch(getCombustionFuelToAirChart());
		dispatch(getCombustionRecommendationTime());
		dispatch(getCombustionSensorsTime());
		const onFetchCombustion = async () => {
			await dispatch(getCombustionO2Chart());
			await dispatch(getCombustionConstraintsLimit());
			await dispatch(getCombustionConstraints());
			await dispatch(getCombustionMVBias());
			await dispatch(getCombustionMVCurrent());
			await dispatch(getCombustionDisturbances());
			await dispatch(getCombustionOptimalityParameters());
		};

		return onFetchCombustion();
	}, [dispatch]);

	useEffect(() => {
		const onFetchWindboxChart = async () => {
			await setWindboxLimit(constraintLimit && constraintLimit[4] && constraintLimit[4].value);
			await dispatch(getCombustionWindboxChart());
		};

		return onFetchWindboxChart();
		// eslint-disable-next-line
	}, [dispatch, constraintLimit]);

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
									<Typography className="text-center text-11 xl:text-16">Watchdog Status</Typography>
								</Grid>
								<Grid item className="w-full">
									<Grid item className="w-full">
										<Button
											disableFocusRipple
											disableRipple
											disableTouchRipple
											fullWidth
											variant="contained"
											className={clsx(
												'text-10 xl:text-16 cursor-default',
												classes.statusButtonOff
											)}
										>
											DISCONNECTED
										</Button>
									</Grid>
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
								<div className="flex flex-col flex-1 md:flex-initial md:w-1/6 mb-8 md:mb-0 md:mr-8 ">
									<Typography className="text-11 xl:text-14 mb-4 flex-initial">
										Last Recommendation Time
									</Typography>
									<Paper square className="flex justify-around flex-col flex-initial text-center p-8">
										<div>
											{recommendationTime.length === 0 ? (
												<p className="text-9 xl:text-16 font-semibold ">-</p>
											) : (
												<p className="text-9 xl:text-16 font-semibold text-light-blue-300">
													{recommendationTime}
												</p>
											)}
										</div>
									</Paper>
									{/* <Typography className="text-11 xl:text-14 my-4 flex-initial">
										Last Sensors Time
									</Typography>
									<Paper square className="flex justify-around flex-col flex-initial text-center p-8">
										<div>
											<p className="text-9 xl:text-16 font-semibold text-light-blue-300">
												{sensorTime.length === 0 ? '-' : sensorTime}
											</p>
										</div>
									</Paper> */}
									<Typography className="text-11 xl:text-14 my-4 flex-initial">Message</Typography>
									<Paper square className="flex justify-around flex-col flex-1 p-8 overflow-auto">
										<div>
											{constraints ? (
												constraints && constraints.constraints_messages === '' ? (
													<p className="text-11 xl:text-16 font-semibold text-grey-100 text-center">
														No messages to display.
													</p>
												) : (
													<p className="text-12 xl:text-16 font-semibold text-red-600 text-left">
														{constraints &&
															constraints.constraints_messages.split(',').join(', ')}
													</p>
												)
											) : constraintsError ? (
												<p className="text-11 xl:text-16 font-semibold text-red-600 text-center">
													Sorry, something went wrong with the server
												</p>
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
									<Paper className="flex flex-1 p-8 justify-between space-x-14" square>
										<div className="flex flex-1 justify-between flex-col space-y-4">
											<div>
												<p className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
													Secondary Air Flow (Tn/Hr)
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
																? (mvCurrent &&
																		mvCurrent.secondary_air_flow === null) ||
																  (mvCurrent &&
																		mvCurrent.secondary_air_flow === undefined)
																	? '-'
																	: Number(
																			mvCurrent && mvCurrent.secondary_air_flow
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{mvBias
																? (mvBias && mvBias.bias_secondary_air_flow === null) ||
																  (mvBias &&
																		mvBias.bias_secondary_air_flow === undefined)
																	? '-'
																	: Number(
																			mvBias && mvBias.bias_secondary_air_flow
																	  ).toFixed(2)
																: '-'}
														</Typography>
													</Grid>
												</Grid>
											</div>
											<div>
												<Typography className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
													Coal Flow (Tn/Hr)
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
																? (mvCurrent && mvCurrent.coal_flow === null) ||
																  (mvCurrent && mvCurrent.coal_flow === undefined)
																	? '-'
																	: Number(mvCurrent && mvCurrent.coal_flow).toFixed(
																			2
																	  )
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{mvBias
																? (mvBias && mvBias.bias_coal_flow === null) ||
																  (mvBias && mvBias.bias_coal_flow === undefined)
																	? '-'
																	: Number(mvBias && mvBias.bias_coal_flow).toFixed(2)
																: '-'}
														</Typography>
													</Grid>
												</Grid>
											</div>
											<div>
												<Typography className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
													Burner Tilt #2 Position
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
																? (mvCurrent && mvCurrent.fd_fan_1 === null) ||
																  (mvCurrent && mvCurrent.fd_fan_1 === undefined)
																	? '-'
																	: Number(mvCurrent && mvCurrent.fd_fan_1).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{mvBias
																? (mvBias && mvBias.bias_fd_fan_1 === null) ||
																  (mvBias && mvBias.bias_fd_fan_1 === undefined)
																	? '-'
																	: Number(mvBias && mvBias.bias_fd_fan_1).toFixed(2)
																: '-'}
														</Typography>
													</Grid>
												</Grid>
											</div>
										</div>
									</Paper>
								</div>
								<div className="flex flex-col flex-1 md:flex-initial md:w-1/5 my-4 md:my-0 md:mx-8">
									<Typography className="text-11 xl:text-14 mb-4 flex-initial mt-8 md:mt-0">
										Monitored Disturbances
									</Typography>
									<Paper square className="flex justify-around flex-col flex-1 p-8">
										<div className="mb-4">
											<p className="text-10 xl:text-14 font-semibold text-light-blue-300 mb-1">
												Primary Air Flow (Tonnes/Hour)
											</p>
											<Grid container>
												<Grid container item xs={12} justify="space-between">
													<Grid item>
														<Typography className="text-8 xl:text-12 font-semibold">
															Value
														</Typography>
													</Grid>
													<Grid item>
														<Typography className="text-8 xl:text-12 font-semibold">
															{disturbances
																? (disturbances &&
																		disturbances.primary_air_flow === null) ||
																  (disturbances &&
																		disturbances.primary_air_flow === undefined)
																	? '-'
																	: Number(
																			disturbances &&
																				disturbances.primary_air_flow
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
															? (disturbances &&
																	disturbances.gross_production_rating === null) ||
															  (disturbances &&
																	disturbances.gross_production_rating === undefined)
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
															? (disturbances &&
																	disturbances.gross_production_rating === null) ||
															  (disturbances &&
																	disturbances.gross_production_rating === undefined)
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
														Outlet A (Actual/Target)
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{optimalityParameters
															? (optimalityParameters &&
																	optimalityParameters.actual_excess_outlet_a ===
																		null) ||
															  (optimalityParameters &&
																	optimalityParameters.actual_excess_outlet_a ===
																		undefined)
																? '-'
																: Number(
																		optimalityParameters &&
																			optimalityParameters.actual_excess_outlet_a
																  ).toFixed(2)
															: '-'}{' '}
														/{' '}
														{optimalityParameters
															? (optimalityParameters &&
																	optimalityParameters.target_excess_outlet_a ===
																		null) ||
															  (optimalityParameters &&
																	optimalityParameters.target_excess_outlet_a ===
																		undefined)
																? '-'
																: Number(
																		optimalityParameters &&
																			optimalityParameters.target_excess_outlet_a
																  ).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold">
														Outlet B (Actual/Target)
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{optimalityParameters
															? (optimalityParameters &&
																	optimalityParameters.actual_excess_outlet_b ===
																		null) ||
															  (optimalityParameters &&
																	optimalityParameters.actual_excess_outlet_b ===
																		undefined)
																? '-'
																: Number(
																		optimalityParameters &&
																			optimalityParameters.actual_excess_outlet_b
																  ).toFixed(2)
															: '-'}{' '}
														/{' '}
														{optimalityParameters
															? (optimalityParameters &&
																	optimalityParameters.target_excess_outlet_b ===
																		null) ||
															  (optimalityParameters &&
																	optimalityParameters.target_excess_outlet_b ===
																		undefined)
																? '-'
																: Number(
																		optimalityParameters &&
																			optimalityParameters.target_excess_outlet_b
																  ).toFixed(2)
															: '-'}
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
														{optimalityParameters
															? (optimalityParameters &&
																	optimalityParameters.target_efficiency === null) ||
															  (optimalityParameters &&
																	optimalityParameters.target_efficiency ===
																		undefined)
																? '-'
																: Number(
																		optimalityParameters &&
																			optimalityParameters.target_efficiency
																  ).toFixed(2)
															: '-'}
													</Typography>
												</Grid>
											</Grid>
										</div>
									</Paper>
								</div>
								<div className="flex-1 md:flex-initial md:w-2/5 md:h-full flex flex-col justify-between mt-8 md:mt-0">
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
													? (constraintLimit &&
															constraintLimit[0] &&
															constraintLimit[0].value === null) ||
													  (constraintLimit &&
															constraintLimit[0] &&
															constraintLimit[0].value === undefined)
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
															? (constraints && constraints.excess_outlet_a === null) ||
															  (constraints && constraints.excess_outlet_a === undefined)
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
															? (constraints && constraints.excess_outlet_b === null) ||
															  (constraints && constraints.excess_outlet_b === undefined)
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
												Windbox-to-Furnace Diff. Press. (Ref: Max.{' '}
												{constraintLimit
													? (constraintLimit &&
															constraintLimit[4] &&
															constraintLimit[4].value === null) ||
													  (constraintLimit &&
															constraintLimit[4] &&
															constraintLimit[4].value === undefined)
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
														Pressure Difference
													</Typography>
												</Grid>
												<Grid item xs={6}>
													<Typography className="text-8 xl:text-12 font-semibold text-right">
														{constraints
															? (constraints && constraints.windbox_pressure === null) ||
															  (constraints &&
																	constraints.windbox_pressure === undefined)
																? '-'
																: Number(
																		constraints && constraints.windbox_pressure
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
													? (constraintLimit &&
															constraintLimit[1] &&
															constraintLimit[1].value === null) ||
													  (constraintLimit &&
															constraintLimit[1] &&
															constraintLimit[1].value === undefined)
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
															? (constraints &&
																	constraints.furnace_pressure_a === null) ||
															  (constraints &&
																	constraints.furnace_pressure_a === undefined)
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
															? (constraints &&
																	constraints.furnace_pressure_b === null) ||
															  (constraints &&
																	constraints.furnace_pressure_b === undefined)
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
															? (constraints &&
																	constraints.furnace_pressure_c === null) ||
															  (constraints &&
																	constraints.furnace_pressure_c === undefined)
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
													? (constraintLimit &&
															constraintLimit[3] &&
															constraintLimit[3].value === null) ||
													  (constraintLimit &&
															constraintLimit[3] &&
															constraintLimit[3].value === undefined)
														? '0'
														: constraintLimit &&
														  constraintLimit[3] &&
														  constraintLimit[3].value
													: ''}
												-
												{constraintLimit
													? (constraintLimit &&
															constraintLimit[2] &&
															constraintLimit[2].value === null) ||
													  (constraintLimit &&
															constraintLimit[2] &&
															constraintLimit[2].value === undefined)
														? '0'
														: constraintLimit &&
														  constraintLimit[2] &&
														  constraintLimit[2].value
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
																? (constraints && constraints.mill_outlet_a === null) ||
																  (constraints &&
																		constraints.mill_outlet_a === undefined)
																	? '-'
																	: Number(
																			constraints && constraints.mill_outlet_a
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{constraints
																? (constraints && constraints.mill_outlet_b === null) ||
																  (constraints &&
																		constraints.mill_outlet_b === undefined)
																	? '-'
																	: Number(
																			constraints && constraints.mill_outlet_b
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{constraints
																? (constraints && constraints.mill_outlet_c === null) ||
																  (constraints &&
																		constraints.mill_outlet_c === undefined)
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
																? (constraints && constraints.mill_outlet_d === null) ||
																  (constraints &&
																		constraints.mill_outlet_d === undefined)
																	? '-'
																	: Number(
																			constraints && constraints.mill_outlet_d
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{constraints
																? (constraints && constraints.mill_outlet_e === null) ||
																  (constraints &&
																		constraints.mill_outlet_e === undefined)
																	? '-'
																	: Number(
																			constraints && constraints.mill_outlet_e
																	  ).toFixed(2)
																: '-'}
														</Typography>
														<Typography className="text-8 xl:text-12 font-semibold text-right">
															{constraints
																? (constraints && constraints.mill_outlet_f === null) ||
																  (constraints &&
																		constraints.mill_outlet_f === undefined)
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
							<div className="flex md:flex-row flex-col flex-1 mt-8 md:mt-4 pb-8 md:pb-0 md:space-x-8 space-y-4 md:space-y-0">
								<div className="md:flex-inital w-full flex flex-col">
									<Typography className="text-11 xl:text-14 mb-4 flex-initial">
										Avg. Excess Oxygen Trend Chart
									</Typography>
									<Grid
										container
										component={Paper}
										direction="column"
										justify="center"
										square
										className="w-full h-full"
									>
										<Grid
											item
											className="w-full md:min-h-full flex flex-col flex-1 justify-center min-h-68"
										>
											{o2ChartError ? (
												<div className="w-full text-11 xl:text-16 text-red-600 text-center">
													Sorry, something went wrong with the server
												</div>
											) : (
												<TrendChart
													data={o2Chart}
													loading={o2ChartLoading}
													height={heightChart}
												/>
											)}
										</Grid>
									</Grid>
								</div>
								<div className="md:flex-inital w-full flex flex-col">
									<Typography className="text-11 xl:text-14 mb-4 flex-initial">
										Fuel-to-Air Ratio Trend Chart
									</Typography>
									<Grid
										container
										component={Paper}
										direction="column"
										justify="center"
										square
										className="w-full h-full"
									>
										<Grid
											item
											className="w-full md:min-h-full flex flex-col flex-1 justify-center min-h-68"
										>
											{fuelToAirChartError ? (
												<div className="w-full text-11 xl:text-16 text-red-600 text-center">
													Sorry, something went wrong with the server
												</div>
											) : (
												<TrendChart
													data={fuelToAirChart}
													loading={fuelToAirChartLoading}
													height={heightChart}
												/>
											)}
										</Grid>
									</Grid>
								</div>
								<div className="md:flex-inital w-full flex flex-col">
									<Typography className="text-11 xl:text-14 mb-4 flex-initial">
										Windbox To Furnace Difference Trend Chart
									</Typography>
									<Grid
										container
										component={Paper}
										direction="column"
										justify="center"
										square
										className="w-full h-full"
									>
										<Grid
											item
											className="w-full md:min-h-full flex flex-col flex-1 justify-center min-h-68"
										>
											{windboxChartError ? (
												<div className="w-full text-11 xl:text-16 text-red-600 text-center">
													Sorry, something went wrong with the server
												</div>
											) : (
												<TrendChart
													data={windboxChart}
													loading={o2ChartLoading || windboxChartLoading || !constraints}
													height={heightChart}
													referenceValue={windboxLimit}
													yAxisTitle="mmwc"
												/>
											)}
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
