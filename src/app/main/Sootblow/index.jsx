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
import { getSootblowData } from 'app/store/actions';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SvgSootblowTenayan } from './Components';

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

const createSequenceData = (label, value, description) => {
	return { label, value, description };
};

const Sootblow = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { sootblowData } = useSelector(
		({ sootblowReducer: { sootblowData } }) => ({
			sootblowData
		}),
		shallowEqual
	);

	const masterControl = sootblowData && sootblowData.control[2] && sootblowData.control[2].value;

	const [masterControlStatus, setMasterControlStatus] = React.useState(0);

	useEffect(() => {
		dispatch(getSootblowData());
		setMasterControlStatus(masterControl && masterControl);
	}, [dispatch, masterControl]);

	useEffect(() => {
		const allTableValueHandler = setInterval(() => {
			dispatch(getSootblowData());
		}, 10000);

		return () => clearInterval(allTableValueHandler); //This is important
		// eslint-disable-next-line
	}, [dispatch]);

	const sequenceData =
		sootblowData && sootblowData.sequence.map(item => createSequenceData(item.label, item.value, item.description));
	const parameterData = sootblowData && sootblowData.parameter[0] && sootblowData.parameter[0].value;

	const recommendationTime = sootblowData && sootblowData.control[3] && sootblowData.control[3].value;
	const operationControlStatus = sootblowData && sootblowData.control[1] && sootblowData.control[1].value;
	const safeGuardStatus = sootblowData && sootblowData.control[0] && sootblowData.control[0].value;

	const handleMasterControlOn = () => {
		setMasterControlStatus(1);
	};

	const handleMasterControlOff = () => {
		setMasterControlStatus(0);
	};

	return (
		<div className="h-full px-24 py-16 ">
			<Grid container className="md:flex-col flex-row h-full">
				{/* Top Section */}
				<Grid item className="md:flex-initial w-full">
					<Grid container alignItems="center" justify="space-between">
						<Grid item container xs={12} md={3} alignItems="center">
							<Grid item className="mr-8">
								<Link to="/home">
									<ArrowBack color="action" fontSize="small" />
								</Link>
							</Grid>
							<Grid item>
								<Typography className="text-11">SOOTBLOW OPTIMIZATION</Typography>
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
										className={clsx(
											'text-8 cursor-default',
											operationControlStatus && operationControlStatus
												? classes.statusButtonOn
												: classes.statusButtonOff
										)}
									>
										{operationControlStatus && operationControlStatus ? 'AUTO' : 'MANUAL'}
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
												masterControlStatus && masterControlStatus
													? classes.statusButtonOn
													: 'primary'
											)}
										>
											ON
										</Button>
										<Button
											onClick={handleMasterControlOff}
											className={clsx(
												'text-8',
												masterControlStatus && masterControlStatus
													? 'primary'
													: classes.statusButtonOff
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
										className={clsx(
											'text-8 cursor-default',
											safeGuardStatus && safeGuardStatus
												? classes.statusButtonOn
												: classes.statusButtonOff
										)}
									>
										{safeGuardStatus && safeGuardStatus ? 'READY' : 'NOT READY'}
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* Top Section */}

				{/* Last Recommendation Section*/}

				<Grid item className="flex-initial w-full">
					<Typography className="text-10 my-8">
						<span className="text-light-blue-300">Last Recommendation Time</span> :{' '}
						{!recommendationTime ? '-' : recommendationTime}
					</Typography>
				</Grid>

				{/* Last Recommendation Section*/}

				{/* Main Content */}
				<Grid item className="flex-1 flex md:flex-row flex-col w-full md:h-1/2 ">
					<Paper className="md:w-3/4 w-full h-full flex justify-center md:mr-8 p-20" square>
						<SvgSootblowTenayan width="100%" height="100%" />
					</Paper>
					<div className="flex flex-col justify-between flex-1">
						{!parameterData ? (
							<Paper
								className="flex-1 md:flex-initial md:h-1/4 flex justify-center items-center py-4 md:p-0 mt-8 mb-8 md:mt-0"
								square
							>
								<Typography className="text-8">Loading ... </Typography>
							</Paper>
						) : parameterData && parameterData.length !== 0 ? (
							<Paper
								className="flex-1 md:flex-initial md:h-1/4 mt-8 mb-8 md:mt-0 flex flex-col justify-between items-center py-8"
								square
							>
								<Typography className="text-16 md:text-20 text-light-blue-300">Timer</Typography>
								<Typography className="text- 14 md:text-18">{parameterData}</Typography>
								<div />
							</Paper>
						) : (
							<Paper
								className="flex-1 md:flex-initial md:h-1/4 flex justify-center items-center py-4 md:p-0 mt-8 mb-8 md:mt-0"
								square
							>
								<Typography className="text-8">-</Typography>
							</Paper>
						)}
						{!sequenceData ? (
							<Paper className="flex-1 flex justify-center items-center py-4 md:p-0 mb-8 md:mb-0" square>
								<Typography className="text-8">Loading ... </Typography>
							</Paper>
						) : sequenceData && sequenceData.length !== 0 ? (
							<TableContainer component={Paper} className="flex-1 mb-8 md:mb-0" square>
								<Table className={classes.table} size="small" aria-label="a dense table">
									<TableHead>
										<TableRow>
											<TableCell className="text-10 py-auto text-light-blue-300">
												Sequences
											</TableCell>
											<TableCell align="center" className="text-10 py-auto text-light-blue-300">
												Zone
											</TableCell>
											<TableCell align="right" className="text-10 py-auto text-light-blue-300">
												Info
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{sequenceData &&
											sequenceData.map((row, index) => (
												<TableRow key={index}>
													<TableCell component="th" scope="row" className="text-8 py-4">
														{row.label}
													</TableCell>
													<TableCell align="center" className="text-8 py-4">
														{row.value}
													</TableCell>
													<TableCell align="right" className="text-8 py-4">
														{row.value === 0 ? '-' : row.description}
													</TableCell>
												</TableRow>
											))}
									</TableBody>
								</Table>
							</TableContainer>
						) : (
							<Paper className="flex-1 flex justify-center items-center py-4 md:p-0 mb-8 md:mb-0" square>
								<Typography className="text-8">No Recommendation</Typography>
							</Paper>
						)}
					</div>
				</Grid>
				{/* Main Content */}
			</Grid>
		</div>
	);
};

export default Sootblow;
