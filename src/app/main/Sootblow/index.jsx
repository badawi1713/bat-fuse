import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Grid,
	IconButton,
	LinearProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Tooltip,
	Typography
} from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack, Build, Cancel, CheckCircle, FlashOn, HourglassEmpty, Redo, ExpandMore } from '@material-ui/icons';
import { changeSootblow, getParameterByID, getSootblowData, updateParameterData } from 'app/store/actions';
import { showMessage } from 'app/store/fuse/messageSlice';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { SvgSootblowTjAwarAwar } from './Components';
import './styles/index.css';

const Accordion = withStyles({
	root: {
		border: '1px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0
		},
		'&:before': {
			display: 'none'
		},
		'&$expanded': {
			margin: 'auto'
		}
	},
	expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0, 0, 0, .03)',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56
		}
	},
	content: {
		'&$expanded': {
			margin: '12px 0'
		}
	},
	expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
	root: {
		padding: theme.spacing(2)
	}
}))(MuiAccordionDetails);

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%'
	},
	heading: {
		// fontSize: theme.typography.pxToRem(15),
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
	saveButton: {
		backgroundColor: '#1976d2',
		color: '#FFF',
		'&:hover': {
			backgroundColor: '#21619e'
		}
	},
	container: {
		maxHeight: 200
	},
	defaultButton: {
		padding: '0px 8px'
	},
	errorAlert: {
		backgroundColor: theme.palette.error.dark,
		color: theme.palette.getContrastText(theme.palette.error.dark)
	}
}));

const createSequenceData = (zone, area, zoneCode, executionStatus) => {
	return { zone, area, zoneCode, executionStatus };
};

const createParameterData = (label, value, id) => {
	return { label, value, id };
};

const Sootblow = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const sootblowReducer = useSelector(state => state.sootblowReducer);

	const { loading, loadingSootblowData, sootblowData, parameterDetailData, loadingParameterUpdate } = sootblowReducer;

	const masterControl = sootblowData.control[2] && sootblowData.control[2].value;

	// const [masterControlStatus, setMasterControlStatus] = useState(masterControl && masterControl);
	const [open, setOpen] = useState(false);
	const [parameterValue, setParameterValue] = useState('');

	useEffect(() => {
		dispatch(getSootblowData(true));
		// setMasterControlStatus(masterControl && masterControl);
	}, [dispatch, masterControl]);

	useEffect(() => {
		dispatch(getSootblowData(true));
	}, [dispatch]);

	const sequenceData = sootblowData.sequence.map(item =>
		createSequenceData(item.zone, item.area, item.zoneCode, item.executionStatus)
	);
	const parameterData = sootblowData.parameter.map(item => createParameterData(item.label, item.value, item.id));

	const recommendationTime = sootblowData.control[3] && sootblowData.control[3].value;
	const operationControlStatus = sootblowData.control[1] && sootblowData.control[1].value;
	const safeGuardStatus = sootblowData.control[0] && sootblowData.control[0].value;
	const sootblowStatus = sootblowData.control[4] && sootblowData.control[4].value;

	// const masterControlData = sootblowData.control[2];

	// const handleMasterControlOn = async () => {
	// 	if (errorSootblow) {
	// 		await dispatch(
	// 			showMessage({
	// 				message: 'Sorry, something went wrong right now',
	// 				variant: 'error'
	// 			})
	// 		);
	// 	} else {
	// 		await dispatch(
	// 			updateMasterControl({
	// 				id: masterControlData.id,
	// 				label: masterControlData.label,
	// 				value: '1'
	// 			})
	// 		);
	// 		await dispatch(getSootblowData());
	// 	}
	// };

	// const handleMasterControlOff = async () => {
	// 	if (errorSootblow) {
	// 		await dispatch(
	// 			showMessage({
	// 				message: 'Sorry, something went wrong right now',
	// 				variant: 'error'
	// 			})
	// 		);
	// 	} else {
	// 		await dispatch(
	// 			updateMasterControl({
	// 				id: masterControlData.id,
	// 				label: masterControlData.label,
	// 				value: '0'
	// 			})
	// 		);
	// 		await dispatch(getSootblowData());
	// 	}
	// };

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const parameterDetailFetch = async id => {
		await dispatch(getParameterByID(id));
	};

	const updateParameterHandler = async (id, label) => {
		if (parameterValue === '' || parameterDetailData.value === parameterValue) {
			await dispatch(
				showMessage({
					message: 'Sorry, value must be changed and cannot be empty',
					variant: 'error'
				})
			);
			// await alert('Sorry, value must be changed and cannot be empty.');
		} else {
			await dispatch(
				changeSootblow({
					loadingParameterUpdate: true
				})
			);
			await dispatch(
				updateParameterData({
					id,
					label,
					value: parameterValue
				})
			);
			await handleClose();
			await dispatch(getSootblowData());
		}
	};

	const renderExecutionStatusIcon = value => {
		if (value === 0) {
			return (
				<Tooltip title="Waiting" arrow className="text-12 xl:text-16">
					<HourglassEmpty fontSize="inherit" className="text-grey-600" />
				</Tooltip>
			);
		} else if (value === 1) {
			return (
				<Tooltip title="Executing" arrow className="text-12 xl:text-16">
					<FlashOn fontSize="inherit" className="text-orange-600" />
				</Tooltip>
			);
		} else if (value === 2) {
			return (
				<Tooltip title="Success" arrow className="text-12 xl:text-16">
					<CheckCircle fontSize="inherit" className="text-green-600" />;
				</Tooltip>
			);
		} else if (value === 3) {
			return (
				<Tooltip title="Fail" arrow className="text-12 xl:text-16">
					<Cancel fontSize="inherit" className="text-red-600" />
				</Tooltip>
			);
		} else if (value === 4) {
			return (
				<Tooltip title="Skip" arrow>
					<Redo fontSize="small" className="text-blue-600" />
				</Tooltip>
			);
		} else {
			return '-';
		}
	};

	return (
		<div className="h-full px-24 py-16 ">
			<Grid container className="md:flex-col flex-row h-full">
				{/* Top Section */}
				<Grid item className="md:flex-initial w-full">
					<Grid container alignItems="center" justify="space-between">
						<Grid
							item
							container
							xs={12}
							md={3}
							className="justify-between md:justify-start mb-8 md:mb-0"
							alignItems="center"
						>
							<Link to="/home" className="text-20 xl:text-24 mr-8">
								<ArrowBack color="action" fontSize="inherit" />
							</Link>
							<Typography className="text-11 xl:text-16">SOOTBLOW OPTIMIZATION</Typography>
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
										className={clsx(
											'text-10 cursor-default xl:text-16',
											operationControlStatus && operationControlStatus === '1'
												? classes.statusButtonOn
												: classes.statusButtonOff
										)}
									>
										{operationControlStatus && operationControlStatus === '1' ? 'AUTO' : 'MANUAL'}
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
									<Typography className="text-center text-11 xl:text-16">Watchdog Status</Typography>
								</Grid>
								<Grid item className="w-full">
									<Button
										disableFocusRipple
										disableRipple
										disableTouchRipple
										fullWidth
										variant="contained"
										className={clsx(
											'text-10 cursor-default xl:text-16',
											operationControlStatus && operationControlStatus === '1'
												? classes.statusButtonOn
												: classes.statusButtonOff
										)}
									>
										{operationControlStatus && operationControlStatus === '1'
											? 'CONNECTED'
											: 'DISCONNECTED'}
									</Button>
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
										className={clsx(
											'text-10 cursor-default xl:text-16',
											safeGuardStatus && safeGuardStatus === '1'
												? classes.statusButtonOn
												: classes.statusButtonOff
										)}
									>
										{safeGuardStatus && safeGuardStatus === '1' ? 'READY' : 'NOT READY'}
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* Top Section */}

				{/* Last Recommendation Section*/}

				<Grid item className="flex-initial w-full md:overflow-hidden">
					<Typography className="text-11 my-8 xl:text-16">
						<span className="text-light-blue-300">Last Recommendation Time</span> :{' '}
						{!recommendationTime ? '-' : recommendationTime}
					</Typography>
				</Grid>

				{/* Last Recommendation Section*/}

				{/* Main Content */}
				<Grid
					item
					className="flex-1 md:overflow-hidden flex md:flex-row flex-col w-full md:h-1/2 space-y-8 md:space-y-0"
				>
					<Paper className="md:w-8/12 w-full h-full flex justify-center md:mr-8 p-20" square>
						<SvgSootblowTjAwarAwar width="100%" height="100%" />
					</Paper>
					<div className="flex flex-col flex-1 space-y-8">
						{loadingSootblowData ? (
							<Paper
								className="flex-1 md:flex-initial md:h-1/4 flex justify-center items-center py-4 md:p-0 "
								square
							>
								<Typography className="text-12 xl:text-16">Loading ... </Typography>
							</Paper>
						) : parameterData && parameterData.length !== 0 ? (
							<Paper
								className="flex-1 md:flex-initial md:h-96 flex flex-col justify-between items-center py-8 xl:py-16 overflow-auto"
								square
							>
								<Typography className="text-16 md:text-12 xl:text-16 text-light-blue-300 font-600">
									Sootblow Running
								</Typography>
								<Typography
									className={
										sootblowStatus === '1'
											? `text-14 md:text-18 xl:text-28 text-orange-600`
											: `text-14 md:text-18 xl:text-28 text-green-300`
									}
								>
									{sootblowStatus === '1' ? 'Running' : 'Standby'}
								</Typography>
								<div />
							</Paper>
						) : (
							<Paper
								className="flex-1 md:flex-initial md:h-1/4 flex justify-center items-center py-4 md:p-0 "
								square
							>
								<Typography className="text-12 xl:text-16">Something went wrong</Typography>
							</Paper>
						)}

						<div className="overflow-auto w-full">
							<Accordion className="py-0" defaultExpanded={true} square>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<Typography className="text-16 md:text-12 xl:text-16 text-light-blue-300 font-600">
										Recommendation
									</Typography>
								</AccordionSummary>
								<AccordionDetails className="p-0 max-h-136">
									{loadingSootblowData ? (
										<Paper
											className="flex-1 flex justify-center items-center py-4 md:p-0 mb-8 md:mb-0"
											square
										>
											<Typography className="text-12 xl:text-16">Loading ... </Typography>
										</Paper>
									) : sequenceData.length !== 0 ? (
										<TableContainer component={Paper} className="flex-1 mb-8 md:mb-0" square>
											<Table stickyHeader size="small" aria-label="a dense table">
												<TableHead>
													<TableRow>
														<TableCell
															align="center"
															className="text-11 xl:text-16 py-auto text-light-blue-300"
														>
															Zone
														</TableCell>
														<TableCell
															align="center"
															className="text-11 xl:text-16 py-auto text-light-blue-300"
														>
															Area
														</TableCell>
														<TableCell
															align="center"
															className="text-11 xl:text-16 py-auto text-light-blue-300"
														>
															Zone Code
														</TableCell>
														<TableCell
															align="center"
															className="text-11 xl:text-16 py-auto text-light-blue-300"
														>
															Execution Status
														</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{sequenceData.map((row, index) => (
														<TableRow key={index}>
															<TableCell
																component="th"
																scope="row"
																align="center"
																className="text-10 xl:text-14 py-4"
															>
																{row.zone}
															</TableCell>
															<TableCell
																align="center"
																className="text-10 xl:text-14 py-4"
															>
																{row.area}
															</TableCell>
															<TableCell
																align="center"
																className="text-10 xl:text-14 py-4"
															>
																{row.zoneCode}
															</TableCell>
															<TableCell
																align="center"
																className="text-10 xl:text-14 py-4"
															>
																{renderExecutionStatusIcon(row.executionStatus)}
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									) : (
										<Paper
											className="flex-1 flex justify-center items-center py-4 md:p-0 mb-8 md:mb-0"
											square
										>
											<Typography className="text-12 xl:text-16">No Recommendation</Typography>
										</Paper>
									)}
								</AccordionDetails>
							</Accordion>
							<Accordion square>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<Typography className="text-16 md:text-12 xl:text-16 text-light-blue-300 font-600">
										Operation Parameter Settings
									</Typography>
								</AccordionSummary>
								<AccordionDetails className="p-0 max-h-136">
									{loadingSootblowData ? (
										<Paper className="flex-1 flex justify-center items-center py-4 md:p-0" square>
											<Typography className="text-12 xl:text-16">Loading ... </Typography>
										</Paper>
									) : parameterData.length !== 0 ? (
										<TableContainer className="flex-1 " component={Paper} square>
											<Table stickyHeader size="small" aria-label="a dense table">
												<TableHead>
													<TableRow>
														<TableCell
															align="center"
															className="text-11 xl:text-16 py-auto text-light-blue-300"
														>
															Parameter
														</TableCell>
														<TableCell
															align="center"
															className="text-11 xl:text-16 py-auto text-light-blue-300"
														>
															Value
														</TableCell>
														<TableCell
															align="center"
															className="text-11 xl:text-16 py-auto text-light-blue-300"
														>
															Modify
														</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{parameterData.map((row, index) => (
														<TableRow key={index}>
															<TableCell
																align="center"
																className="text-10 xl:text-14 py-4"
															>
																{row.label}
															</TableCell>
															<TableCell
																align="center"
																className="text-10 xl:text-14 py-4"
															>
																{row.value}
															</TableCell>
															<TableCell
																align="center"
																className="py-4 text-14 xl:text-16"
															>
																{typeof row.value !== 'number' ? (
																	'-'
																) : (
																	<IconButton
																		onClick={async () => {
																			await handleClickOpen();
																			await parameterDetailFetch(row.id);
																		}}
																		size="small"
																	>
																		<Build className="text-14 xl:text-16" />
																	</IconButton>
																)}
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									) : (
										<Paper className="flex-1 flex justify-center items-center py-4 md:p-0 " square>
											<Typography className="text-12 xl:text-16">No Parameter to Show</Typography>
										</Paper>
									)}
								</AccordionDetails>
							</Accordion>
							<Accordion square>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<Typography className="text-16 md:text-12 xl:text-16 text-light-blue-300 font-600">
										Rules Settings
									</Typography>
								</AccordionSummary>
								<AccordionDetails className="p-0 max-h-136">
									{loadingSootblowData ? (
										<Paper className="flex-1 flex justify-center items-center py-4 md:p-0" square>
											<Typography className="text-12 xl:text-16">Loading ... </Typography>
										</Paper>
									) : parameterData.length !== 0 ? (
										<TableContainer className="flex-1 " component={Paper} square>
											<Table stickyHeader size="small" aria-label="a dense table">
												<TableHead>
													<TableRow>
														<TableCell
															align="center"
															className="text-11 xl:text-16 py-auto text-light-blue-300"
														>
															Parameter
														</TableCell>
														<TableCell
															align="center"
															className="text-11 xl:text-16 py-auto text-light-blue-300"
														>
															Value
														</TableCell>
														<TableCell
															align="center"
															className="text-11 xl:text-16 py-auto text-light-blue-300"
														>
															Modify
														</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{parameterData.map((row, index) => (
														<TableRow key={index}>
															<TableCell
																align="center"
																className="text-10 xl:text-14 py-4"
															>
																{row.label}
															</TableCell>
															<TableCell
																align="center"
																className="text-10 xl:text-14 py-4"
															>
																{row.value}
															</TableCell>
															<TableCell
																align="center"
																className="py-4 text-14 xl:text-16"
															>
																{typeof row.value !== 'number' ? (
																	'-'
																) : (
																	<IconButton
																		onClick={async () => {
																			await handleClickOpen();
																			await parameterDetailFetch(row.id);
																		}}
																		size="small"
																	>
																		<Build className="text-14 xl:text-16" />
																	</IconButton>
																)}
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									) : (
										<Paper className="flex-1 flex justify-center items-center py-4 md:p-0 " square>
											<Typography className="text-12 xl:text-16">No Parameter to Show</Typography>
										</Paper>
									)}
								</AccordionDetails>
							</Accordion>
						</div>
					</div>
				</Grid>
				{/* Main Content */}
			</Grid>
			<Dialog fullWidth open={open} aria-labelledby="responsive-dialog-title">
				<Typography className="text-16 m-24" id="responsive-dialog-title">
					{"Modify this parameter's value?"}
				</Typography>
				<DialogContent>
					{loading ? (
						<LinearProgress color="secondary" />
					) : (
						<Grid container spacing={1}>
							<Grid container alignItems="center" item xs={12}>
								<Grid item xs={3} className="text-14 text-light-blue-300">
									Parameter
								</Grid>
								<Grid item xs={9} className="text-14">
									{parameterDetailData.label}
								</Grid>
							</Grid>
							<Grid container alignItems="center" item xs={12}>
								<Grid item xs={3} className="text-14 text-light-blue-300">
									Value
								</Grid>
								<Grid item xs={9}>
									<TextField
										variant="outlined"
										defaultValue={parameterDetailData.value}
										fullWidth
										size="small"
										onChange={e => setParameterValue(e.target.value)}
									/>
								</Grid>
							</Grid>
						</Grid>
					)}
				</DialogContent>
				<DialogActions className="p-24">
					{!loadingParameterUpdate && (
						<Button autoFocus onClick={handleClose} variant="outlined" className="text-12 px-6">
							Cancel
						</Button>
					)}
					{loadingParameterUpdate ? (
						<Button disabled variant="contained" autoFocus className={clsx('text-12 px-6')}>
							Saving
						</Button>
					) : (
						<Button
							onClick={() => updateParameterHandler(parameterDetailData.id, parameterDetailData.label)}
							variant="contained"
							autoFocus
							className={clsx(classes.saveButton, 'text-12 px-6')}
						>
							Save
						</Button>
					)}
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Sootblow;
