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
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
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

const createSequenceData = (label, value) => {
	return { label, value };
};

const Sootblow = () => {
	const classes = useStyles();

	const { sootblowData } = useSelector(
		({ sootblowReducer: { sootblowData } }) => ({
			sootblowData
		}),
		shallowEqual
	);

	const [masterControlStatus, setMasterControlStatus] = React.useState(false);

	const [sequenceData, setSequenceData] = React.useState([]);

	const [parameterData, setParameterData] = React.useState([]);

	const colorId101 = React.useState('#ff0000');

	useEffect(() => {
		const allTableValueHandler = setInterval(() => {
			setSequenceData([
				createSequenceData('Sequence-1', Math.floor(Math.random() * 10)),
				createSequenceData('Sequence-2', Math.floor(Math.random() * 10)),
				createSequenceData('Sequence-3', Math.floor(Math.random() * 10)),
				createSequenceData('Sequence-4', Math.floor(Math.random() * 10)),
				createSequenceData('Sequence-5', Math.floor(Math.random() * 10)),
				createSequenceData('Sequence-6', Math.floor(Math.random() * 10)),
				createSequenceData('Sequence-7', Math.floor(Math.random() * 10)),
				createSequenceData('Sequence-8', Math.floor(Math.random() * 10)),
				createSequenceData('Sequence-9', Math.floor(Math.random() * 10))
			]);
			setParameterData([
				createParameterData('Parameter Description 1', Number(Math.random()).toFixed(2)),
				createParameterData('Parameter Description 2', Number(Math.random()).toFixed(2)),
				createParameterData('Parameter Description 3', Number(Math.random()).toFixed(2)),
				createParameterData('Parameter Description 4', Number(Math.random()).toFixed(2)),
				createParameterData('Parameter Description 5', Number(Math.random()).toFixed(2)),
				createParameterData('Parameter Description 6', Number(Math.random()).toFixed(2)),
				createParameterData('Parameter Description 7', Number(Math.random()).toFixed(2)),
				createParameterData('Parameter Description 8', Number(Math.random()).toFixed(2)),
				createParameterData('Parameter Description 9', Number(Math.random()).toFixed(2))
			]);
		}, 15000);

		return () => clearInterval(allTableValueHandler); //This is important
	}, []);

	const handleMasterControlOn = () => {
		setMasterControlStatus(true);
	};

	const handleMasterControlOff = () => {
		setMasterControlStatus(false);
	};

	return (
		<Container className="py-16 h-full">
			<Grid container spacing={1}>
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

				{/* Main Content */}
				<Grid item container xs={12} justify="space-between" className="w-full" alignItems="center" spacing={1}>
					<Grid item xs={12} md={9} className="md:h-full p-0">
						<Paper className="md:h-full py-5 px-10 my-0" square>
							<center>
								<SvgSootblowTjAwarAwar colorid101={colorId101} width="92%" height="100%" />
							</center>
						</Paper>
					</Grid>
					<Grid item xs={12} md={3} container className="md:h-full w-full p-0">
						<Grid item className="w-full mb-8">
							<TableContainer component={Paper} className="md:h-full" square>
								<Table className={classes.table} size="small" aria-label="a dense table">
									<TableHead>
										<TableRow>
											<TableCell className="text-10 py-0">Parameter</TableCell>
											<TableCell align="right" className="text-10 py-0">
												Value
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{parameterData.map((row, index) => (
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
						</Grid>
						<Grid item className="w-full">
							<TableContainer component={Paper} className="md:h-full" square>
								<Table className={classes.table} size="small" aria-label="a dense table">
									<TableHead>
										<TableRow>
											<TableCell className="text-10 py-0">Sequences</TableCell>
											<TableCell align="right" className="text-10 py-0">
												Zone
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{sequenceData.map((row, index) => (
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
						</Grid>
					</Grid>
				</Grid>
				{/* Main Content */}
			</Grid>
		</Container>
	);
};

export default Sootblow;
