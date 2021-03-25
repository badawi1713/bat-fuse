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
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ArrowBack, Build, Cancel, CheckCircle, ExpandMore, FlashOn, HourglassEmpty, Redo } from '@material-ui/icons';
import {
	changeSootblow,
	getParameterByID,
	getRuleByID,
	getSootblowData,
	getSootblowSettingByID,
	updateParameterData,
	updateRuleData,
	updateSootblowSettingData
} from 'app/store/actions';
import { showMessage } from 'app/store/fuse/messageSlice';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SvgSootblowTenayan } from './Components';
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
			margin: '0'
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

const createRuleSettingData = (label, id) => {
	return { label, id };
};

const createSootblowSettingData = (label, maxTime, minTime, id) => {
	return { label, maxTime, minTime, id };
};

const Sootblow = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const sootblowReducer = useSelector(state => state.sootblowReducer);

	const {
		loading,
		loadingSootblowData,
		sootblowData,
		parameterDetailData,
		loadingParameterUpdate,
		sootblowSettingDetailData,
		loadingSootblowUpdate,
		loadingRuleUpdate,
		ruleDetailData
	} = sootblowReducer;

	const { indicator, sequence, parameter, waitingTime, control, rules } = sootblowData;
	const { detailRule } = ruleDetailData;

	// const masterControl = control[2] && control[2].value;

	// const [masterControlStatus, setMasterControlStatus] = useState(masterControl && masterControl);
	const [openParameterUpdate, setOpenParameterUpdate] = useState(false);
	const [openRuleSettingUpdate, setOpenRuleSettingUpdate] = useState(false);
	const [openSootblowSettingUpdate, setOpenSootblowSettingUpdate] = useState(false);

	const [parameterValue, setParameterValue] = useState('');
	const [sootblowSettingMaxValue, setSootblowSettingMaxValue] = useState('');
	const [sootblowSettingMinValue, setSootblowSettingMinValue] = useState('');

	const [ruleDetail, setRuleDetail] = useState(detailRule);

	const [expanded, setExpanded] = useState('panel1');

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	useEffect(() => {
		const getSootblowScheduler = setInterval(() => {
			dispatch(getSootblowData());

		}, 5000)


		return () => clearInterval(getSootblowScheduler)
	}, [dispatch]);

	useEffect(() => {
		setRuleDetail(detailRule);
	}, [detailRule]);

	const sequenceData = sequence && sequence.map(item =>
		createSequenceData(item.zone, item.area, item.zoneCode, item.executionStatus)
	);
	const parameterData = parameter && parameter.map(item => createParameterData(item.label, item.value, item.id));

	const ruleSettingData = rules && rules.map(item => createRuleSettingData(item.label, item.id));

	const sootblowSettingData = waitingTime && waitingTime.map(item =>
		createSootblowSettingData(item.label, item.maxTime, item.minTime, item.id)
	);

	const watchdogValue = control && control.find(item => item.label === "watchdog")
	const safeGuardValue = control && control.find(item => item.label === "safeguard")
	const operationControlValue = control && control.find(item => item.label === "operation_control")
	const recommendationTimeValue = control && control.find(item => item.label === "date_recommendation")

	const watchdogStatus = watchdogValue && watchdogValue.value;
	const safeGuardStatus = safeGuardValue && safeGuardValue.value;
	const operationControlStatus = operationControlValue && operationControlValue.value;
	const recommendationTime = recommendationTimeValue && recommendationTimeValue.value;

	const handleClickOpenParameterUpdate = () => {
		setOpenParameterUpdate(true);
	};

	const handleClickOpenRuleUpdate = () => {
		setOpenRuleSettingUpdate(true);
	};

	const handleClickOpenSootblowSettingUpdate = () => {
		setOpenSootblowSettingUpdate(true);
	};

	const handleCloseParameterUpdate = () => {
		setOpenParameterUpdate(false);
	};

	const handleCloseRuleUpdate = () => {
		setOpenRuleSettingUpdate(false);
	};

	const handleCloseSootblowSettingUpdate = () => {
		setOpenSootblowSettingUpdate(false);
	};

	const parameterDetailFetch = async id => {
		await dispatch(getParameterByID(id));
	};

	const ruleDetailFetch = async id => {
		await dispatch(getRuleByID(id));
	};

	const sootblowSettingDetailFetch = async id => {
		await dispatch(getSootblowSettingByID(id));
	};

	const updateParameterHandler = async (id, label) => {
		if (parameterValue === '' || parameterDetailData.value === parameterValue) {
			await dispatch(
				showMessage({
					message: 'Sorry, value must be changed and cannot be empty',
					variant: 'error'
				})
			);
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
			await handleCloseParameterUpdate();
			await dispatch(getSootblowData());
		}
	};

	const updateRuleValueHandler = (id, newValue) => {
		let updatedData = detailRule && detailRule.map(item => {
			if (item.detailId === id) {
				return { ...item, value: newValue };
			}
			return item;
		});

		setRuleDetail(updatedData);
	};

	const updateRuleSettingHandler = async (id, label) => {
		// for (let i = 0; i < ruleDetail.length; i++) {
		// 	if (ruleDetail[i].value === '' || toString(ruleDetail[i].value).trim() === '' || !ruleDetail[i].value) {
		// 		await dispatch(
		// 			showMessage({
		// 				message: 'Sorry, value must be filled',
		// 				variant: 'error'
		// 			})
		// 		);
		// 		return false;
		// 	} else {
		await dispatch(
			changeSootblow({
				loadingRuleUpdate: true
			})
		);
		await dispatch(
			updateRuleData({
				id,
				label,
				detailRule: ruleDetail
			})
		);
		await handleCloseRuleUpdate();
		await dispatch(getSootblowData());
	};
	// }
	// };

	const updateSootblowSettingHandler = async (id, label) => {
		if (sootblowSettingMaxValue === '' || sootblowSettingDetailData.maxTime === sootblowSettingMaxValue) {
			await dispatch(
				showMessage({
					message: 'Sorry, max value must be changed and cannot be empty',
					variant: 'error'
				})
			);
		} else if (sootblowSettingMinValue === '' || sootblowSettingDetailData.minTime === sootblowSettingMinValue) {
			await dispatch(
				showMessage({
					message: 'Sorry, min value must be changed and cannot be empty',
					variant: 'error'
				})
			);
		} else {
			await dispatch(
				changeSootblow({
					loadingSootblowUpdate: true
				})
			);
			await dispatch(
				updateSootblowSettingData({
					id,
					label,
					maxTime: sootblowSettingMaxValue,
					minTime: sootblowSettingMinValue
				})
			);
			await handleCloseSootblowSettingUpdate();
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
											operationControlStatus === '0'
												? classes.statusButtonOff
												: classes.statusButtonOn
										)}
									>
										{operationControlStatus === '0'
											? "MANUAL"
											: "AUTO"}
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
											watchdogStatus === '1' ? classes.statusButtonOn : classes.statusButtonOff
										)}
									>
										{watchdogStatus === '1' ? 'CONNECTED' : 'DISCONNECTED'}
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
											safeGuardStatus === '1' ? classes.statusButtonOn : classes.statusButtonOff
										)}
									>
										{safeGuardStatus === '1' ? 'READY' : 'NOT READY'}
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
						<SvgSootblowTenayan indicator={indicator} width="100%" height="100%" />
					</Paper>
					<div className="flex flex-col flex-1 space-y-8">
						<div className="flex flex-1 flex-col pb-8 md:pb-0 overflow-hidden">
							<Accordion
								expanded={expanded === 'panel1'}
								onChange={handleChange('panel1')}
								className={
									expanded === 'panel1'
										? 'flex-1 w-full overflow-hidden'
										: 'flex-initial w-full overflow-hidden'
								}
								square
							>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="w-full"
								>
									<Typography className="text-12 xl:text-16 text-light-blue-300 font-600">
										Recommendation
									</Typography>
								</AccordionSummary>
								<AccordionDetails className="p-0">
									{loadingSootblowData ? (
										<div className="flex-1 flex h-full flex-col justify-center items-center py-4 md:p-0 mb-8 md:mb-0">
											<Typography className="text-12 xl:text-16">Loading ... </Typography>
										</div>
									) : sequenceData && sequenceData.length !== 0 ? (
										<TableContainer className="  max-h-160 lg:max-h-224 xl:max-h-288 2xl:max-h-512 overflow-auto">
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
													{sequenceData && sequenceData.map((row, index) => (
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
																{row.zoneCode === '' ? 'Unknown Area' : row.zoneCode}
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
										<div className="flex-1 flex min-h-96 justify-center items-center py-4 md:p-0 mb-8 md:mb-0">
											<Typography className="text-12 xl:text-16">No Recommendation</Typography>
										</div>
									)}
								</AccordionDetails>
							</Accordion>
							<Accordion
								className={expanded === 'panel2' ? 'flex-1 w-full' : 'flex-initial w-full'}
								expanded={expanded === 'panel2'}
								onChange={handleChange('panel2')}
								square
							>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel2a-content"
									id="panel2a-header"
									className="w-full"
								>
									<Typography className="text-12 xl:text-16 text-light-blue-300 font-600">
										Operation Parameter Settings
									</Typography>
								</AccordionSummary>
								<AccordionDetails className="p-0 ">
									{loadingSootblowData ? (
										<div className="flex-1 flex min-h-96 justify-center items-center py-4 md:p-0">
											<Typography className="text-12 xl:text-16">Loading ... </Typography>
										</div>
									) : parameterData && parameterData.length !== 0 ? (
										<TableContainer className="  max-h-160 lg:max-h-224 xl:max-h-288 2xl:max-h-512 overflow-auto">
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
													{parameterData && parameterData.map((row, index) => (
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
																			await handleClickOpenParameterUpdate();
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
										<div className="flex-1 flex min-h-96 justify-center items-center py-4 md:p-0 ">
											<Typography className="text-12 xl:text-16">No Parameter to Show</Typography>
										</div>
									)}
								</AccordionDetails>
							</Accordion>
							<Accordion
								className={expanded === 'panel3' ? 'flex-1 w-full' : 'flex-initial w-full'}
								expanded={expanded === 'panel3'}
								onChange={handleChange('panel3')}
								square
							>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel3a-content"
									id="panel3a-header"
									className="w-full"
								>
									<Typography className="text-12 xl:text-16 text-light-blue-300 font-600">
										Rules Settings
									</Typography>
								</AccordionSummary>
								<AccordionDetails className="p-0">
									{loadingSootblowData ? (
										<div className="flex-1 flex min-h-96 justify-center items-center py-4 md:p-0">
											<Typography className="text-12 xl:text-16">Loading ... </Typography>
										</div>
									) : ruleSettingData && ruleSettingData.length !== 0 ? (
										<TableContainer className="  max-h-160 lg:max-h-224 xl:max-h-288 2xl:max-h-512 overflow-auto">
											<Table stickyHeader size="small" aria-label="a dense table">
												<TableHead>
													<TableRow>
														<TableCell
															align="center"
															className="text-11 xl:text-16 py-auto text-light-blue-300"
														>
															Rule
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
													{ruleSettingData && ruleSettingData.map((row, index) => (
														<TableRow key={index}>
															<TableCell
																align="center"
																className="text-10 xl:text-14 py-4"
															>
																{row.label}
															</TableCell>
															<TableCell
																align="center"
																className="py-4 text-14 xl:text-16"
															>
																<IconButton
																	onClick={async () => {
																		await handleClickOpenRuleUpdate();
																		await ruleDetailFetch(row.id);
																	}}
																	size="small"
																>
																	<Build className="text-14 xl:text-16" />
																</IconButton>
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									) : (
										<div className="flex-1 flex min-h-96 justify-center items-center py-4 md:p-0 ">
											<Typography className="text-12 xl:text-16">
												No Rules Settings to Show
											</Typography>
										</div>
									)}
								</AccordionDetails>
							</Accordion>
							<Accordion
								className={expanded === 'panel4' ? 'flex-1 w-full' : 'flex-initial w-full'}
								expanded={expanded === 'panel4'}
								onChange={handleChange('panel4')}
								square
							>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
									className="w-full"
								>
									<Typography className="text-12 xl:text-16 text-light-blue-300 font-600">
										Sootblower Settings
									</Typography>
								</AccordionSummary>
								<AccordionDetails className="p-0">
									{loadingSootblowData ? (
										<div className="flex-1 flex min-h-96 justify-center items-center py-4 md:p-0">
											<Typography className="text-12 xl:text-16">Loading ... </Typography>
										</div>
									) : sootblowSettingData && sootblowSettingData.length !== 0 ? (
										<TableContainer className="  max-h-160 lg:max-h-224 xl:max-h-288 2xl:max-h-512 overflow-auto">
											<Table stickyHeader size="small" aria-label="a dense table">
												<TableHead>
													<TableRow>
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
															Max Time
														</TableCell>
														<TableCell
															align="center"
															className="text-11 xl:text-16 py-auto text-light-blue-300"
														>
															Min Time
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
													{sootblowSettingData && sootblowSettingData.map((row, index) => (
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
																{row.maxTime}
															</TableCell>
															<TableCell
																align="center"
																className="text-10 xl:text-14 py-4"
															>
																{row.minTime}
															</TableCell>
															<TableCell
																align="center"
																className="py-4 text-14 xl:text-16"
															>
																<IconButton
																	onClick={async () => {
																		await handleClickOpenSootblowSettingUpdate();
																		await sootblowSettingDetailFetch(row.id);
																	}}
																	size="small"
																>
																	<Build className="text-14 xl:text-16" />
																</IconButton>
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									) : (
										<div className="flex-1 flex-col flex min-h-96 justify-center items-center py-4 md:p-0 ">
											<Typography className="text-12 xl:text-16">
												No Sootblow Settings to Show
											</Typography>
										</div>
									)}
								</AccordionDetails>
							</Accordion>
						</div>
					</div>
				</Grid>
				{/* Main Content */}
			</Grid>
			<Dialog fullWidth open={openParameterUpdate} aria-labelledby="responsive-dialog-title">
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
						<Button
							autoFocus
							onClick={handleCloseParameterUpdate}
							variant="outlined"
							className="text-12 px-6"
						>
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

			<Dialog fullWidth open={openRuleSettingUpdate} aria-labelledby="responsive-dialog-title">
				<Typography className="text-16 m-24" id="responsive-dialog-title">
					{"Modify this rule's setting value?"}
				</Typography>
				<DialogContent>
					{loading ? (
						<LinearProgress color="secondary" />
					) : (
						<div className="space-y-10">
							<Grid container alignItems="center" item xs={12}>
								<Grid item xs={12} className="text-14 text-light-blue-300">
									{ruleDetailData.label}
								</Grid>
							</Grid>
							{ruleDetailData.detailRule && ruleDetailData.detailRule.length === 0 ? (
								<Grid container alignItems="center" item xs={12}>
									<Grid item xs={12} className="text-14">
										Sorry, there is no value to be changed
									</Grid>
								</Grid>
							) : (
								ruleDetailData.detailRule &&
								ruleDetailData.detailRule.map((item, index) => (
									<div className="flex flex-col space-y-10" key={index}>
										{/* <Grid item xs={4} className="text-14 text-light-blue-300">
											Tag Sensor
										</Grid> */}
										<div className="text-14 ">{item.tagSensor}</div>
										{/* <Grid item xs={4} className="text-14 text-light-blue-300">
											Operator
										</Grid> */}
										{item.value === '' ? null : (
											<div item xs={12}>
												<TextField
													variant="outlined"
													defaultValue={item.value}
													fullWidth
													size="small"
													onChange={e =>
														updateRuleValueHandler(item.detailId, e.target.value)
													}
												// onChange={e => setParameterValue(e.target.value)}
												/>
											</div>
										)}
										{item.operator === ' ' || item.operator === '/' ? null : (
											<div item xs={12} className="text-14">
												{item.operator}
											</div>
										)}
										{/* <Grid item xs={4} className="text-14 text-light-blue-300">
											Value
										</Grid> */}
									</div>
								))
							)}
						</div>
					)}
				</DialogContent>
				<DialogActions className="p-24">
					{!loadingRuleUpdate && (
						<Button autoFocus onClick={handleCloseRuleUpdate} variant="outlined" className="text-12 px-6">
							Cancel
						</Button>
					)}
					{loadingRuleUpdate ? (
						<Button disabled variant="contained" autoFocus className={clsx('text-12 px-6')}>
							Saving
						</Button>
					) : (
						<Button
							disabled={ruleDetailData.detailRule && ruleDetailData.detailRule.length === 0}
							onClick={() => updateRuleSettingHandler(ruleDetailData.id, ruleDetailData.label)}
							variant="contained"
							autoFocus
							className={clsx(classes.saveButton, 'text-12 px-6')}
						>
							Save
						</Button>
					)}
				</DialogActions>
			</Dialog>

			<Dialog fullWidth open={openSootblowSettingUpdate} aria-labelledby="responsive-dialog-title">
				<Typography className="text-16 m-24" id="responsive-dialog-title">
					{"Modify this sootblow's setting value?"}
				</Typography>
				<DialogContent>
					{loading ? (
						<LinearProgress color="secondary" />
					) : (
						<Grid container spacing={1}>
							<Grid container alignItems="center" item xs={12}>
								<Grid item xs={3} className="text-14 text-light-blue-300">
									Area
								</Grid>
								<Grid item xs={9} className="text-14">
									{sootblowSettingDetailData.label}
								</Grid>
							</Grid>
							<Grid container alignItems="center" item xs={12}>
								<Grid item xs={3} className="text-14 text-light-blue-300">
									Max Time
								</Grid>
								<Grid item xs={9}>
									<TextField
										variant="outlined"
										defaultValue={sootblowSettingDetailData.maxTime}
										fullWidth
										size="small"
										onChange={e => setSootblowSettingMaxValue(e.target.value)}
									/>
								</Grid>
							</Grid>
							<Grid container alignItems="center" item xs={12}>
								<Grid item xs={3} className="text-14 text-light-blue-300">
									Min Time
								</Grid>
								<Grid item xs={9}>
									<TextField
										variant="outlined"
										defaultValue={sootblowSettingDetailData.minTime}
										fullWidth
										size="small"
										onChange={e => setSootblowSettingMinValue(e.target.value)}
									/>
								</Grid>
							</Grid>
						</Grid>
					)}
				</DialogContent>
				<DialogActions className="p-24">
					{!loadingSootblowUpdate && (
						<Button
							autoFocus
							onClick={handleCloseSootblowSettingUpdate}
							variant="outlined"
							className="text-12 px-6"
						>
							Cancel
						</Button>
					)}
					{loadingSootblowUpdate ? (
						<Button disabled variant="contained" autoFocus className={clsx('text-12 px-6')}>
							Saving
						</Button>
					) : (
						<Button
							onClick={() =>
								updateSootblowSettingHandler(
									sootblowSettingDetailData.id,
									sootblowSettingDetailData.label
								)
							}
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
