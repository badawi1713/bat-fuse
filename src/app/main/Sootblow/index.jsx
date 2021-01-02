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
import { SvgSootblowTjAwarAwar } from './Components';

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

const createParameterData = (label, value) => {
	return { label, value };
};

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

	const [masterControlStatus, setMasterControlStatus] = React.useState(false);

	useEffect(() => {
		dispatch(getSootblowData());
	}, [dispatch]);

	useEffect(() => {
		const allTableValueHandler = setInterval(() => {
			dispatch(getSootblowData());
		}, 10000);

		return () => clearInterval(allTableValueHandler); //This is important
		// eslint-disable-next-line
	}, [dispatch]);

	const sequenceData =
		sootblowData && sootblowData.sequence.map(item => createSequenceData(item.label, item.value, item.description));
	const parameterData =
		sootblowData && sootblowData.parameter.map(item => createParameterData(item.label, item.value));
	// [
	// 	createParameterData('label', 100),
	// 	createParameterData('label', 100),
	// 	createParameterData('label', 100),
	// 	createParameterData('label', 100),
	// 	createParameterData('label', 100),
	// 	createParameterData('label', 100),
	// 	createParameterData('label', 100),
	// 	createParameterData('label', 100),
	// 	createParameterData('label', 100),
	// 	createParameterData('label', 100),
	// 	createParameterData('label', 100),
	// 	createParameterData('label', 100)
	// ];

	const recommendationTime = sootblowData && sootblowData.sequence[0] && sootblowData.sequence[0].recommendationTime;

	const handleMasterControlOn = () => {
		setMasterControlStatus(true);
	};

	const handleMasterControlOff = () => {
		setMasterControlStatus(false);
	};

	return (
		<div className="py-16 h-full container px-0 lg:px-24">
			<Grid container className="h-full">
				{/* Top Section */}
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
									Ready
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* Top Section */}

				{/* Last Recommendation Section*/}

				<Grid item xs={12}>
					<Typography className="text-8 my-8 md:my-4">
						Last Recommendation Time: {recommendationTime}
					</Typography>
				</Grid>

				{/* Last Recommendation Section*/}

				{/* Main Content */}
				<div className="w-full grid md:grid-cols-4 gap-8">
					<Paper
						className="md:h-full w-full m-auto py-8 flex justify-center aligns-center md:col-span-3"
						square
					>
						<SvgSootblowTjAwarAwar width="84%" height="100%" />
					</Paper>
					<div className="grid gap-8 w-full">
						{!parameterData ? (
							<Paper className="md:h-full flex justify-center items-center py-4 md:p-0" square>
								<Typography className="text-8">Loading ... </Typography>
							</Paper>
						) : parameterData && parameterData.length !== 0 ? (
							<TableContainer className={clsx(classes.container, ' row-span-1')} component={Paper} square>
								<Table size="small" aria-label="a dense table">
									<TableHead>
										<TableRow>
											<TableCell className="text-10 py-auto">Parameter</TableCell>
											<TableCell align="right" className="text-10 py-auto">
												Value
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{parameterData &&
											parameterData.map((row, index) => (
												<TableRow key={index}>
													<TableCell component="th" scope="row" className="text-8 py-4">
														{row.label}
													</TableCell>
													<TableCell align="right" className="text-8 py-4">
														{row.value}
													</TableCell>
												</TableRow>
											))}
									</TableBody>
								</Table>
							</TableContainer>
						) : (
							<Paper className="md:h-full flex justify-center items-center py-4 md:p-0" square>
								<Typography className="text-8">Table is empty</Typography>
							</Paper>
						)}
						{!sequenceData ? (
							<Paper className="md:h-full flex justify-center items-center py-4 md:p-0" square>
								<Typography className="text-8">Loading ... </Typography>
							</Paper>
						) : sequenceData && sequenceData.length !== 0 ? (
							<TableContainer component={Paper} className="md:h-full" square>
								<Table className={classes.table} size="small" aria-label="a dense table">
									<TableHead>
										<TableRow>
											<TableCell className="text-10 py-auto">Sequences</TableCell>
											<TableCell align="center" className="text-10 py-auto">
												Zone
											</TableCell>
											<TableCell align="right" className="text-10 py-auto">
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
							<Paper className="md:h-full flex justify-center items-center py-4 md:p-0" square>
								<Typography className="text-8">Table is empty</Typography>
							</Paper>
						)}
					</div>
				</div>
				{/* Main Content */}
			</Grid>
		</div>
	);
};

export default Sootblow;
