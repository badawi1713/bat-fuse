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
	TablePagination,
	TableRow,
	Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { useState } from 'react';
import { MainBottomSchema, MainLeftSchema, MainRightSchema } from './Components';
import { backData, frontData, leftData, leftInputData, rightData, rightInputData } from './utils/data/dummyData';

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

const columns = [
	{ id: 'parameter', label: 'Parameter', flex: 1, align: 'center' },
	{ id: 'bais', label: 'Bias', flex: 1, align: 'center' },
	{
		id: 'current',
		label: 'Current',
		flex: 1,
		align: 'center'
	},
	{
		id: 'setPoint',
		label: 'Set\u00a0Point',
		flex: 1,
		align: 'center'
	}
];

const createSootblowData = (parameter, bais, current, setPoint) => {
	return { parameter, bais, current, setPoint };
};

const rows = [createSootblowData('O2 Control Bias', 202, 250, 200), createSootblowData('Burner Tilt', 197, 150, 250)];

const Sootblow = () => {
	const classes = useStyles();

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const [masterControlStatus, setMasterControlStatus] = useState(false);
	const [operationControlStatus, setOperationControlStatus] = useState(false);

	const masterControlToggleOn = () => {
		setMasterControlStatus(true);
	};

	const masterControlToggleOff = () => {
		setMasterControlStatus(false);
	};

	const operationControlToggleOn = () => {
		setOperationControlStatus(true);
	};

	const operationControlToggleOff = () => {
		setOperationControlStatus(false);
	};

	return (
		<Container className="py-16">
			<Grid container spacing={2}>
				<Grid item xs={12} container spacing={1}>
					<Grid item>
						<Typography>Sootblow</Typography>
					</Grid>
					<Grid item xs={12}>
						<hr />
					</Grid>
				</Grid>

				<Grid item container justify="space-between" alignItems="center" xs={12}>
					<Grid item xs={8} md={10}>
						<Typography className="text-12">Operation Control</Typography>
					</Grid>
					<Grid item xs={4} md={2}>
						<ButtonGroup fullWidth variant="contained" aria-label="contained button group">
							<Button
								onClick={operationControlToggleOn}
								className={clsx(
									'text-12',
									operationControlStatus ? classes.statusButtonOff : 'primary'
								)}
							>
								Manual
							</Button>
							<Button
								onClick={operationControlToggleOff}
								className={clsx('text-12', operationControlStatus ? 'primary' : classes.statusButtonOn)}
							>
								Auto
							</Button>
						</ButtonGroup>
					</Grid>
				</Grid>

				<Grid item container justify="space-between" alignItems="center" xs={12}>
					<Grid item xs={8} md={10}>
						<Typography className="text-12">Master Control</Typography>
					</Grid>
					<Grid item xs={4} md={2}>
						<ButtonGroup fullWidth variant="contained" aria-label="contained button group">
							<Button
								onClick={masterControlToggleOn}
								className={clsx('text-12', masterControlStatus ? classes.statusButtonOff : 'primary')}
							>
								ON
							</Button>
							<Button
								onClick={masterControlToggleOff}
								className={clsx('text-12', masterControlStatus ? 'primary' : classes.statusButtonOn)}
							>
								OFF
							</Button>
						</ButtonGroup>
					</Grid>
				</Grid>

				<Grid item container justify="space-between" alignItems="center" xs={12}>
					<Grid item xs={8} md={10}>
						<Typography className="text-12">Safe Guard</Typography>
					</Grid>
					<Grid item xs={4} md={2}>
						<Button fullWidth variant="contained" className={clsx('text-12', classes.statusButtonOff)}>
							Ready
						</Button>
					</Grid>
				</Grid>

				<Grid item xs={12}>
					<hr />
				</Grid>

				<Grid item container spacing={1} direction="column">
					<Grid item>
						<Typography>Optimization Advisory</Typography>
					</Grid>
					<Grid item>
						<Paper className={classes.root}>
							<TableContainer className={classes.container}>
								<Table size="small" stickyHeader aria-label="sticky table">
									<TableHead>
										<TableRow>
											{columns.map((column, index) => (
												<TableCell key={index} align={column.align}>
													{column.label}
												</TableCell>
											))}
										</TableRow>
									</TableHead>
									<TableBody>
										{rows
											.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
											.map((row, index) => {
												return (
													<TableRow hover role="checkbox" tabIndex={-1} key={index}>
														{columns.map((column, index) => {
															const value = row[column.id];
															return (
																<TableCell key={index} align={column.align}>
																	{column.format && typeof value === 'number'
																		? column.format(value)
																		: value}
																</TableCell>
															);
														})}
													</TableRow>
												);
											})}
									</TableBody>
								</Table>
							</TableContainer>
							<TablePagination
								rowsPerPageOptions={[10, 25, 100]}
								component="div"
								count={rows.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onChangePage={handleChangePage}
								onChangeRowsPerPage={handleChangeRowsPerPage}
							/>
						</Paper>
					</Grid>
					{/* <Grid item xs={2}>
						<Button variant="contained" color="secondary" className="text-12">
							Apply
						</Button>
					</Grid> */}
				</Grid>

				<Grid item container spacing={1}>
					<Grid item xs={12}>
						<Typography>Sootblow Schema</Typography>
					</Grid>
					<Grid item xs={12}>
						<hr />
					</Grid>
				</Grid>

				<Grid item container spacing={1}>
					<Grid item container xs={6}>
						<MainLeftSchema data={leftInputData} />
					</Grid>
					<Grid item container xs={6}>
						<MainRightSchema data={rightInputData} />
					</Grid>
				</Grid>

				<Grid item container spacing={1}>
					<Grid item container xs={6} md={3}>
						<MainBottomSchema title="FRONT" data={frontData} />
					</Grid>
					<Grid item container xs={6} md={3}>
						<MainBottomSchema title="LEFT" data={leftData} />
					</Grid>
					<Grid item container xs={6} md={3}>
						<MainBottomSchema title="RIGHT" data={rightData} />
					</Grid>
					<Grid item container xs={6} md={3}>
						<MainBottomSchema title="BACK" data={backData} />
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Sootblow;
