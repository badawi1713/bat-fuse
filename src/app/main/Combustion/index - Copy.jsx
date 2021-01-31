import {
	Button,
	ButtonGroup,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
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

const createO2ControlBiasData = (parameter, value) => {
	return { parameter, value };
};

const createSecondaryAirData = (parameter, value) => {
	return { parameter, value };
};

// const createPrimaryAirControl = (parameter, value) => {
// 	return { parameter, value };
// };

// const createLoad = (parameter, value) => {
// 	return { parameter, value };
// };

const o2ControlBiasData = [
	createO2ControlBiasData('Bias', 100),
	createO2ControlBiasData('Current', 200),
	createO2ControlBiasData('Set Point', 300),
	createO2ControlBiasData('O2 R', 400),
	createO2ControlBiasData('O2 L', 500)
];

const secondaryAirData = [
	createSecondaryAirData('Bias', 0),
	createSecondaryAirData('Current', 0),
	createSecondaryAirData('Set Point', 0),
	createSecondaryAirData('Windbox Delta Pressure R', 0),
	createSecondaryAirData('Windbox Delta Pressure L', 0)
];

// const firstConstraints = [
// 	createTableData('Constraints 1', 0),
// 	createTableData('Constraints 2', 0),
// 	createTableData('Constraints 3', 0),
// 	createTableData('Constraints 4', 0),
// 	createTableData('Constraints 5', 0),
// 	createTableData('Constraints 6', 0),
// 	createTableData('Constraints 7', 0),
// 	createTableData('Constraints 8', 0),
// 	createTableData('Constraints 9', 0),
// 	createTableData('Constraints 10', 0)
// ];

// const primaryAirControlData = [createPrimaryAirControl('', 0)];

const createBurnerTiltData = (parameter, value) => {
	return { parameter, value };
};

const Combustion = () => {
	const classes = useStyles();

	const [masterControlStatus, setMasterControlStatus] = useState(false);
	const [burnerTiltData, setBurnerTiltData] = useState([
		createBurnerTiltData('Bias', Number(Math.random()).toFixed(2)),
		createBurnerTiltData('Current', Number(Math.random()).toFixed(2)),
		createBurnerTiltData('Set Point', Number(Math.random()).toFixed(2)),
		createBurnerTiltData('Final SH Temperature', Number(Math.random()).toFixed(2)),
		createBurnerTiltData('RH2 Temperature', Number(Math.random()).toFixed(2))
	]);

	// useEffect(() => {
	// 	const changeValue = () => {
	// 		setInterval(() => {
	// 			setBurnerTiltData([
	// 				createBurnerTiltData('Bias', Number(Math.random()).toFixed(2)),
	// 				createBurnerTiltData('Current', Number(Math.random()).toFixed(2)),
	// 				createBurnerTiltData('Demand', Number(Math.random()).toFixed(2)),
	// 				createBurnerTiltData('Final SH Temperature', Number(Math.random()).toFixed(2)),
	// 				createBurnerTiltData('RH2 Temperature', Number(Math.random()).toFixed(2))
	// 			]);
	// 		}, 5000);
	// 	};
	// 	return () => clearInterval(changeValue);
	// }, []);

	const handleMasterControlOn = () => {
		setMasterControlStatus(true);
	};

	const handleMasterControlOff = () => {
		setMasterControlStatus(false);
	};

	return (
		<div className="py-16 h-full container px-0 mx-24">
			<Grid container spacing={1} className="h-full">
				{/* Top Section */}
				<Grid item container xs={12} alignItems="center" justify="space-between" spacing={1}>
					<Grid item container xs={12} md={3} spacing={2} alignItems="center">
						<Grid item>
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
							className="mb-8 md:mb-0"
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
									className={clsx('text-8 cursor-default', classes.statusButtonOn)}
								>
									MANUAL
								</Button>
							</Grid>
						</Grid>
						<Grid
							className="mb-8 md:ml-8 md:mb-0"
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
											masterControlStatus ? classes.statusButtonOff : 'primary'
										)}
									>
										ON
									</Button>
									<Button
										onClick={handleMasterControlOff}
										className={clsx(
											'text-8',
											masterControlStatus ? 'primary' : classes.statusButtonOn
										)}
									>
										OFF
									</Button>
								</ButtonGroup>
							</Grid>
						</Grid>
						<Grid className="md:ml-8" item container direction="column" alignItems="center" xs={12} md={3}>
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
									className={clsx('text-8 cursor-default', classes.statusButtonOff)}
								>
									Ready {/* NOT READY - MERAH*/}
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* Top Section */}

				{/* Main Content */}
				<Grid item container xs={12} justify="space-between" className="w-full" alignItems="center" spacing={1}>
					<Grid item xs={12} className="p- mb-8">
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Typography className="text-11">Manipulated Variable</Typography>
							</Grid>
							<Grid item container spacing={1}>
								<Grid item xs={12} md={4}>
									<TableContainer component={Paper} square>
										<Table className={classes.table} size="small" aria-label="a dense table">
											<TableHead>
												<TableRow>
													<TableCell className="text-10 py-6">O2 Control</TableCell>
													<TableCell align="right" className="text-10 py-6">
														Value
													</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{o2ControlBiasData.map(row => (
													<TableRow key={row.parameter}>
														<TableCell component="th" scope="row" className="text-8 py-8">
															{row.parameter}
														</TableCell>
														<TableCell align="right" className="text-8 py-8">
															{row.value}
														</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
								<Grid item xs={12} md={4}>
									<TableContainer component={Paper} square>
										<Table className={classes.table} size="small" aria-label="a dense table">
											<TableHead>
												<TableRow>
													<TableCell className="text-10 py-6">Burner Tilt</TableCell>
													<TableCell align="right" className="text-10 py-6">
														Value
													</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{burnerTiltData.map(row => (
													<TableRow key={row.parameter}>
														<TableCell component="th" scope="row" className="text-8 py-8">
															{row.parameter}
														</TableCell>
														<TableCell align="right" className="text-8 py-8">
															{row.value}
														</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
								<Grid item xs={12} md={4}>
									<TableContainer component={Paper} square>
										<Table className={classes.table} size="small" aria-label="a dense table">
											<TableHead>
												<TableRow>
													<TableCell className="text-10 py-6">
														Secondary Air Control
													</TableCell>
													<TableCell align="right" className="text-10 py-6">
														Value
													</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{secondaryAirData.map(row => (
													<TableRow key={row.parameter}>
														<TableCell component="th" scope="row" className="text-8 py-8">
															{row.parameter}
														</TableCell>
														<TableCell align="right" className="text-8 py-8">
															{row.value}
														</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} className="p-0">
						<Grid container spacing={1} className="h-full">
							<Grid item xs={12} md={8} className="h-full">
								<Grid item xs={12}>
									<Typography className="text-11 mb-8">O2 Trend Chart</Typography>
								</Grid>
								<Grid item xs={12} container className="h-full">
									<Grid item xs={12} className="h-full">
										<Paper className="p-8 h-full" square>
											<O2TrendChart />
										</Paper>
									</Grid>
								</Grid>
							</Grid>
							<Grid item md={4} container className="h-full">
								<Grid item xs={12} className="mb-8 h-full">
									<Typography className="text-11">Constraints Variable</Typography>
								</Grid>
								<Grid item container xs={12} className="h-full">
									<Grid item xs={12} md={6}>
										<TableContainer component={Paper} square>
											<Table className={classes.table} size="small" aria-label="a dense table">
												<TableHead>
													<TableRow>
														<TableCell className="text-10 py-6">Parameter</TableCell>
														<TableCell align="right" className="text-10 py-6">
															Status
														</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{secondaryAirData.map(row => (
														<TableRow key={row.parameter}>
															<TableCell
																component="th"
																scope="row"
																className="text-8 py-8"
															>
																{row.parameter}
															</TableCell>
															<TableCell align="right" className="text-8 py-8">
																<Button
																	className={clsx(
																		'text-6 p-0',
																		classes.statusButtonOn
																	)}
																>
																	Not Ready
																</Button>
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									</Grid>
									<Grid item xs={12} md={6} className="h-full">
										<TableContainer component={Paper} square className="h-full">
											<Table className={classes.table} size="small" aria-label="a dense table">
												<TableHead>
													<TableRow>
														<TableCell className="text-10 py-6">Parameter</TableCell>
														<TableCell align="right" className="text-10 py-6">
															Status
														</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{secondaryAirData.map(row => (
														<TableRow key={row.parameter}>
															<TableCell
																component="th"
																scope="row"
																className="text-8 py-8"
															>
																{row.parameter}
															</TableCell>
															<TableCell align="right" className="text-8 py-8">
																<Button
																	className={clsx(
																		'text-6 p-0',
																		classes.statusButtonOff
																	)}
																>
																	Ready
																</Button>
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* Main Content */}
			</Grid>
		</div>
	);
};

export default Combustion;
