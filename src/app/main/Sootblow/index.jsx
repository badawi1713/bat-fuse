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
import clsx from 'clsx';
import React from 'react';
import { ArrowBack } from '@material-ui/icons';
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

const createParameterData = (parameter, value) => {
	return { parameter, value };
};

const parameterData = [
	createParameterData('Parameter Description 1', 100),
	createParameterData('Parameter Description 2', 200),
	createParameterData('Parameter Description 3', 300),
	createParameterData('Parameter Description 4', 400),
	createParameterData('Parameter Description 5', 500),
	createParameterData('Parameter Description 6', 600),
	createParameterData('Parameter Description 7', 700),
	createParameterData('Parameter Description 8', 800),
	createParameterData('Parameter Description 9', 900)
];

const createSequenceData = (sequence, value) => {
	return { sequence, value };
};

const sequenceData = [
	createSequenceData('Sequence-1', 2),
	createSequenceData('Sequence-2', 3),
	createSequenceData('Sequence-3', 0),
	createSequenceData('Sequence-4', 6),
	createSequenceData('Sequence-5', 7),
	createSequenceData('Sequence-6', 8),
	createSequenceData('Sequence-7', 9),
	createSequenceData('Sequence-8', 0),
	createSequenceData('Sequence-9', 0)
];

const Sootblow = () => {
	const classes = useStyles();

	const [masterControlStatus, setMasterControlStatus] = React.useState(false);

	const handleMasterControlOn = () => {
		setMasterControlStatus(true);
	};

	const handleMasterControlOff = () => {
		setMasterControlStatus(false);
	};

	return (
		<Container className="py-16 h-full">
			<Grid container spacing={1} className="h-full">
				{/* Top Section */}
				<Grid item container xs={12} alignItems="center" justify="space-between" spacing={1}>
					<Grid item container xs={3} spacing={2} alignItems="center">
						<Grid item>
							<Link to="/home">
								<ArrowBack color="action" fontSize="small" />
							</Link>
						</Grid>
						<Grid item>
							<Typography className="text-11">SOOTBLOW OPTIMIZATION</Typography>
						</Grid>
					</Grid>
					<Grid item container xs={9} justify="flex-end" spacing={2}>
						<Grid item container direction="column" alignItems="center" xs={3}>
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
						<Grid item container direction="column" alignItems="center" xs={3}>
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
						<Grid item container direction="column" alignItems="center" xs={3}>
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
					<Grid item xs={9} className="h-full p-0">
						<Paper className="h-full py-5 px-10" square>
							<SvgSootblowTjAwarAwar width="100%" height="100%" />
						</Paper>
					</Grid>
					<Grid item xs={3} container className="h-full w-full p-0">
						<Grid item className="w-full mb-8">
							<TableContainer component={Paper} className="h-full" square>
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
										{parameterData.map(row => (
											<TableRow key={row.name}>
												<TableCell component="th" scope="row" className="text-8 py-4">
													{row.parameter}
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
							<TableContainer component={Paper} className="h-full" square>
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
										{sequenceData.map(row => (
											<TableRow key={row.name}>
												<TableCell component="th" scope="row" className="text-8 py-4">
													{row.sequence}
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
