import FuseAnimate from '@fuse/core/FuseAnimate';
import {
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Paper,
	Accordion,
	AccordionDetails,
	AccordionSummary
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.css';
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
		backgroundColor: '#FA0000'
	},
	statusButtonOff: {
		color: '#FFF',
		backgroundColor: '#3D9140'
	},
	container: {
		maxHeight: 200
	},
	defaultButton: {
		padding: '0px 8px'
	}
}));

const combustionDataColumns = [
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

const sootblowDataColumns = [
	{ id: 'parameter', label: 'Parameter', flex: 1, align: 'center' },
	{
		id: 'suggestionTime',
		label: 'Suggestion\u00a0Time',
		flex: 1,
		align: 'center'
	}
];

const createCombustionData = (parameter, bais, current, setPoint) => {
	return { parameter, bais, current, setPoint };
};

const createSootblowData = (parameter, suggestionTime) => {
	return { parameter, suggestionTime };
};

const combustionDataRows = [
	createCombustionData('O2 Control Bias', 202, 250, 200),
	createCombustionData('Burner Tilt', 197, 150, 250)
];

const sootblowDataRows = [
	createSootblowData('Address 01', '11/11/2020 11:15:00'),
	createSootblowData('Address 02', '11/11/2020 11:20:00')
];

const Home = () => {
	const classes = useStyles();
	// const [plant, setPlant] = useState('PLTU Tanjung Awar-Awar');
	// const handleChange = event => {
	// 	setPlant(event.target.value);
	// };
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	return (
		<Container className="py-16">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Card>
							<CardContent>
								<Grid container spacing={1}>
									<Grid container item alignItems="center" xs={12} justify="flex-end">
										<Grid item>
											<Typography className="text-12">Last Update 20/10/2020 13:44:20</Typography>
										</Grid>
									</Grid>

									<Grid item container spacing={1}>
										<Grid item container>
											<Grid item container justify="space-between">
												<Grid item>
													<Typography>Boiler Optimization Parameter Status</Typography>
												</Grid>
												<Grid item>
													<Typography>Permissive Status</Typography>
												</Grid>
											</Grid>
										</Grid>

										<Grid item container>
											<Grid item container justify="space-between" alignItems="center">
												<Grid item container alignItems="center" xs={8} md={10}>
													<Grid item md={3}>
														<Typography className="text-12">
															Combustion Optimization Unit 1 Status
														</Typography>
													</Grid>
													<Grid item container md={7} alignItems="center" spacing={2}>
														<Grid item>
															<Button
																className={clsx(
																	classes.statusButtonOn,
																	'text-12',
																	'p-0'
																)}
																variant="contained"
															>
																ON
															</Button>
														</Grid>
														<Grid item>
															<Typography className="text-12">
																12/10/2020 12:22:22
															</Typography>
														</Grid>
													</Grid>
												</Grid>

												<Grid item>
													<Button
														className={clsx(
															classes.statusButton,
															classes.statusButtonOn,
															'text-12',
															'p-0'
														)}
														variant="contained"
													>
														OK
													</Button>
												</Grid>
											</Grid>
										</Grid>

										<Grid item container>
											<Grid item container justify="space-between" alignItems="center">
												<Grid item container alignItems="center" xs={8} md={10}>
													<Grid item md={3}>
														<Typography className="text-12">
															Sootblow Optimization Unit 1 Status
														</Typography>
													</Grid>
													<Grid item container md={7} alignItems="center" spacing={2}>
														<Grid item>
															<Button
																className={clsx(
																	classes.statusButtonOff,
																	'text-12',
																	'p-0'
																)}
																variant="contained"
															>
																OFF
															</Button>
														</Grid>
														<Grid item>
															<Typography className="text-12">
																12/10/2020 12:22:22
															</Typography>
														</Grid>
													</Grid>
												</Grid>

												<Grid item>
													<Button
														className={clsx(
															classes.statusButton,
															classes.statusButtonOff,
															'text-12',
															'p-0'
														)}
														variant="contained"
													>
														NOT OK
													</Button>
												</Grid>
											</Grid>
										</Grid>

										<Grid item container>
											<Grid item container justify="space-between" alignItems="center">
												<Grid item container alignItems="center" xs={8} md={10}>
													<Grid item md={3}>
														<Typography className="text-12">
															Combustion Optimization Unit 2 Status
														</Typography>
													</Grid>
													<Grid item container md={7} alignItems="center" spacing={2}>
														<Grid item>
															<Button
																className={clsx(
																	classes.statusButtonOn,
																	'text-12',
																	'p-0'
																)}
																variant="contained"
															>
																ON
															</Button>
														</Grid>
														<Grid item>
															<Typography className="text-12">
																12/10/2020 12:22:22
															</Typography>
														</Grid>
													</Grid>
												</Grid>

												<Grid item>
													<Button
														className={clsx(
															classes.statusButton,
															classes.statusButtonOn,
															'text-12',
															'p-0'
														)}
														variant="contained"
													>
														OK
													</Button>
												</Grid>
											</Grid>
										</Grid>

										<Grid item container>
											<Grid item container justify="space-between" alignItems="center">
												<Grid item container alignItems="center" xs={8} md={10}>
													<Grid item md={3}>
														<Typography className="text-12">
															Sootblow Optimization Unit 2 Status
														</Typography>
													</Grid>
													<Grid item container md={7} alignItems="center" spacing={2}>
														<Grid item>
															<Button
																className={clsx(
																	classes.statusButtonOff,
																	'text-12',
																	'p-0'
																)}
																variant="contained"
															>
																OFF
															</Button>
														</Grid>
														<Grid item>
															<Typography className="text-12">
																12/10/2020 12:22:22
															</Typography>
														</Grid>
													</Grid>
												</Grid>

												<Grid item>
													<Button
														className={clsx(
															classes.statusButton,
															classes.statusButtonOff,
															'text-12',
															'p-0'
														)}
														variant="contained"
													>
														NOT OK
													</Button>
												</Grid>
											</Grid>
										</Grid>
									</Grid>

									<Grid item container justify="space-between" xs={12}>
										<Grid item container spacing={1} direction="column">
											<Grid item container alignItems="center" spacing={1}>
												<Grid item>
													<EmojiObjectsOutlinedIcon fontSize="small" />
												</Grid>
												<Grid item>
													<Typography>Optimization Advisory</Typography>
												</Grid>
											</Grid>
											<Grid item container xs={12}>
												<div className={classes.root}>
													<Accordion>
														<AccordionSummary
															expandIcon={<ExpandMoreIcon />}
															aria-controls="panel1a-content"
															id="panel1a-header"
														>
															<Typography className={clsx(classes.heading, 'text-12')}>
																(12/12/2020 14:30:00) NEW ADVISORY FOR COMBUSTION
															</Typography>
														</AccordionSummary>
														<AccordionDetails>
															<Grid container direction="column" spacing={1}>
																<Grid item>
																	<Paper className={classes.root}>
																		<TableContainer className={classes.container}>
																			<Table
																				size="small"
																				stickyHeader
																				aria-label="sticky table"
																			>
																				<TableHead>
																					<TableRow>
																						{combustionDataColumns.map(
																							column => (
																								<TableCell
																									key={column.id}
																									align={column.align}
																								>
																									{column.label}
																								</TableCell>
																							)
																						)}
																					</TableRow>
																				</TableHead>
																				<TableBody>
																					{combustionDataRows
																						.slice(
																							page * rowsPerPage,
																							page * rowsPerPage +
																								rowsPerPage
																						)
																						.map(row => {
																							return (
																								<TableRow
																									hover
																									role="checkbox"
																									tabIndex={-1}
																									key={row.code}
																								>
																									{combustionDataColumns.map(
																										column => {
																											const value =
																												row[
																													column
																														.id
																												];
																											return (
																												<TableCell
																													key={
																														column.id
																													}
																													align={
																														column.align
																													}
																												>
																													{column.format &&
																													typeof value ===
																														'number'
																														? column.format(
																																value
																														  )
																														: value}
																												</TableCell>
																											);
																										}
																									)}
																								</TableRow>
																							);
																						})}
																				</TableBody>
																			</Table>
																		</TableContainer>
																		<TablePagination
																			rowsPerPageOptions={[10, 25, 100]}
																			component="div"
																			count={combustionDataRows.length}
																			rowsPerPage={rowsPerPage}
																			page={page}
																			onChangePage={handleChangePage}
																			onChangeRowsPerPage={
																				handleChangeRowsPerPage
																			}
																		/>
																	</Paper>
																</Grid>
																<Grid item>
																	<Link to="/combustion">
																		<Button
																			fullWidth
																			variant="contained"
																			className="text-12"
																		>
																			SHOW DETAIL
																		</Button>
																	</Link>
																</Grid>
															</Grid>
														</AccordionDetails>
													</Accordion>
													<Accordion>
														<AccordionSummary
															expandIcon={<ExpandMoreIcon />}
															aria-controls="panel2a-content"
															id="panel2a-header"
														>
															<Typography className={clsx(classes.heading, 'text-12')}>
																(12/12/2020 14:30:00) NEW ADVISORY FOR SOOTBLOW
															</Typography>
														</AccordionSummary>
														<AccordionDetails>
															<Grid container direction="column" spacing={1}>
																<Grid item>
																	<Paper className={classes.root}>
																		<TableContainer className={classes.container}>
																			<Table
																				size="small"
																				stickyHeader
																				aria-label="sticky table"
																			>
																				<TableHead>
																					<TableRow>
																						{sootblowDataColumns.map(
																							column => (
																								<TableCell
																									key={column.id}
																									align={column.align}
																								>
																									{column.label}
																								</TableCell>
																							)
																						)}
																					</TableRow>
																				</TableHead>
																				<TableBody>
																					{sootblowDataRows
																						.slice(
																							page * rowsPerPage,
																							page * rowsPerPage +
																								rowsPerPage
																						)
																						.map(row => {
																							return (
																								<TableRow
																									hover
																									role="checkbox"
																									tabIndex={-1}
																									key={row.code}
																								>
																									{sootblowDataColumns.map(
																										column => {
																											const value =
																												row[
																													column
																														.id
																												];
																											return (
																												<TableCell
																													key={
																														column.id
																													}
																													align={
																														column.align
																													}
																												>
																													{column.format &&
																													typeof value ===
																														'number'
																														? column.format(
																																value
																														  )
																														: value}
																												</TableCell>
																											);
																										}
																									)}
																								</TableRow>
																							);
																						})}
																				</TableBody>
																			</Table>
																		</TableContainer>
																		<TablePagination
																			rowsPerPageOptions={[10, 25, 100]}
																			component="div"
																			count={sootblowDataRows.length}
																			rowsPerPage={rowsPerPage}
																			page={page}
																			onChangePage={handleChangePage}
																			onChangeRowsPerPage={
																				handleChangeRowsPerPage
																			}
																		/>
																	</Paper>
																</Grid>
																<Grid item>
																	<Link to="/sootblow">
																		<Button
																			fullWidth
																			variant="contained"
																			className="text-12"
																		>
																			SHOW DETAIL
																		</Button>
																	</Link>
																</Grid>
															</Grid>
														</AccordionDetails>
													</Accordion>
												</div>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>

					<Grid item xs={12}>
						<Card>
							<CardContent>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<Typography>Manipulated Variable</Typography>
									</Grid>
									<Grid item container spacing={2}>
										<Grid item xs={12} md={6}>
											<Card>
												<CardContent>
													<Grid container spacing={1}>
														<Grid item xs={12}>
															<Typography>
																O<sub>2</sub> Control Bias
															</Typography>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">Bias</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">Curr</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">Set Point</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">
																	O<sub>2</sub> R
																</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">
																	O<sub>2</sub> L
																</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
													</Grid>
												</CardContent>
											</Card>
										</Grid>
										<Grid item xs={12} md={6}>
											<Card>
												<CardContent>
													<Grid container spacing={1}>
														<Grid item xs={12}>
															<Typography>Burner Tilt</Typography>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">Bias</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">Curr</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">Demand</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">
																	Final SH Temperature
																</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">
																	RH2 Temperature
																</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
													</Grid>
												</CardContent>
											</Card>
										</Grid>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>

					<Grid item xs={12}>
						<Card>
							<CardContent>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<Typography>Control Variable</Typography>
									</Grid>
									<Grid item container spacing={2}>
										<Grid item xs={12} md={6}>
											<Card>
												<CardContent>
													<Grid container spacing={1}>
														<Grid item xs={12}>
															<Typography>Secondary Air Control</Typography>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">Bias</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">Curr</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">Set Point</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">
																	Furnace L Wind Box DP
																</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
													</Grid>
												</CardContent>
											</Card>
										</Grid>
										<Grid item xs={12} md={6}>
											<Card>
												<CardContent>
													<Grid container spacing={1}>
														<Grid item xs={12}>
															<Typography>Secondary Air Control</Typography>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">Bias</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">App</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">Set Point</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">
																	Furnace R Wind Box DP
																</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
													</Grid>
												</CardContent>
											</Card>
										</Grid>
										<Grid item xs={12}>
											<Card>
												<CardContent>
													<Grid container spacing={1}>
														<Grid item xs={12}>
															<Typography>Load (MW)</Typography>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">
																	Main Steam Flow (tph)
																</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">
																	Coal Flow (tph)
																</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">
																	Primary Air Flow (kg/h)
																</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">
																	SA Flow (kg/h)
																</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={4}>
																<Typography className="text-12">
																	Main Steam Pressure (Mpag)
																</Typography>
															</Grid>
															<Grid item container xs={8} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		fontSize="small"
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography className="text-12">
																		123 kCal/kWh
																	</Typography>
																</Grid>
															</Grid>
														</Grid>
													</Grid>
												</CardContent>
											</Card>
										</Grid>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</FuseAnimate>
		</Container>
	);
};

export default Home;
