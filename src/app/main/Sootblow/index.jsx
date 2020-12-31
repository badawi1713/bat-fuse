import {
	Button,
	ButtonGroup,
	Container,
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
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		const allTableValueHandler = setInterval(() => {
			dispatch(getSootblowData());
		}, 10000);

		return () => clearInterval(allTableValueHandler); //This is important
		// eslint-disable-next-line
	}, [dispatch]);

	const sequenceData =
		sootblowData && sootblowData.sequence.map(item => createSequenceData(item.label, item.value, item.description));

	const recommendationTime = sootblowData && sootblowData.sequence[0] && sootblowData.sequence[0].recommendationTime;

	const handleMasterControlOn = () => {
		setMasterControlStatus(true);
	};

	const handleMasterControlOff = () => {
		setMasterControlStatus(false);
	};

	return (
		<Container className="py-16 h-full">
			<Grid container className="h-full">
				{/* Top Section */}
				<Grid item container xs={12} alignItems="center" justify="space-between" spacing={1}>
					<Grid item container xs={12} md={3} spacing={2} alignItems="center">
						<Grid item>
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

				{/* Last Recommendation Section */}
				<Grid item xs={12}>
					<Typography className="text-8 my-8">
						Last Recommendation Time: {!recommendationTime ? '-' : recommendationTime}
					</Typography>
				</Grid>
				{/* Last Recommendation Section */}

				{/* Main Content */}
				<Grid item container xs={12} justify="space-between" className="w-full" spacing={1}>
					<Grid item xs={12} md={9} className="md:h-full p-0">
						<Paper className="md:h-full py-5 px-10 my-0 flex justify-center aligns-center" square>
							<SvgSootblowTenayan width="92%" height="100%" />
						</Paper>
					</Grid>
					<Grid item xs={12} md={3} container className="md:h-full p-0">
						<Grid item className="w-full mb-8">
							{!sootblowData ? (
								<Paper
									className="w-full h-full p-16 md:p-12 flex md:flex-col items-center flex-row justify-center "
									square
								>
									<Typography className="text-8 text-center ">Loading ... </Typography>
								</Paper>
							) : (
								<Paper
									className="w-full h-full p-16 md:p-12 flex md:flex-col md:justify-between items-center flex-row justify-between "
									square
								>
									<Typography className="text-12 text-center ">Timer</Typography>
									<Typography className="text-12 text-center md:text-24 text-blue-300">
										{sootblowData && sootblowData.parameter && sootblowData.parameter[0].value}
									</Typography>
									<Typography className="hidden md:block" />
								</Paper>
							)}
						</Grid>
						<Grid item className="w-full">
							{!sequenceData ? (
								<Paper className="md:h-full flex justify-center items-center py-4 md:p-0" square>
									<Typography className="text-8">Loading ... </Typography>
								</Paper>
							) : sequenceData && sequenceData.length !== 0 ? (
								<TableContainer component={Paper} className="md:h-full" square>
									<Table className={classes.table} size="small" aria-label="a dense table">
										<TableHead>
											<TableRow>
												<TableCell align="center" className="text-12 py-auto">
													Zone
												</TableCell>
												<TableCell align="center" className="text-12 py-auto">
													Code Area
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{sequenceData &&
												sequenceData.map((row, index) => (
													<TableRow key={index}>
														<TableCell align="center" scope="row" className="text-10 py-6">
															{row.description}
														</TableCell>
														<TableCell align="center" className="text-10 py-6">
															{row.label}
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
						</Grid>
					</Grid>
				</Grid>
				{/* Main Content */}
			</Grid>
		</Container>
	);
};

export default Sootblow;
