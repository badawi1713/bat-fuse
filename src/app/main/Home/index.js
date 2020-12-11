import FuseAnimate from '@fuse/core/FuseAnimate';
import {
	Button,
	Card,
	CardContent,
	Container,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React, { useState } from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(theme => ({
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
	}
}));
const Home = () => {
	const classes = useStyles();
	const [plant, setPlant] = useState('PLTU Tanjung Awar-Awar');
	const handleChange = event => {
		setPlant(event.target.value);
	};
	return (
		<Container className="py-16">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Card>
							<CardContent>
								<Grid container spacing={3}>
									<Grid container item alignItems="center" xs={12} justify="space-between">
										<Grid item xs={12} md={4}>
											<FormControl variant="outlined" className={classes.formControl}>
												<InputLabel id="demo-simple-select-outlined-label">
													Select Plant
												</InputLabel>
												<Select
													labelId="demo-simple-select-outlined-label"
													id="demo-simple-select-outlined"
													value={plant}
													onChange={handleChange}
													label="Select Plant"
												>
													<MenuItem value="PLTU Tanjung Awar-Awar">
														PLTU Tanjung Awar-Awar
													</MenuItem>
													<MenuItem value="PLTU Tenayan">PLTU Tenayan</MenuItem>
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={12} md="auto">
											<Typography>Last Update 20/10/2020 13:44:20</Typography>
										</Grid>
									</Grid>

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
											<Grid
												item
												container
												alignItems="center"
												xs={12}
												md={10}
												justify="space-between"
											>
												<Grid item md={3}>
													<Typography>Combustion Optimization Status</Typography>
												</Grid>
												<Grid item container md={7} alignItems="center" spacing={4}>
													<Grid item>
														<Button className={classes.statusButtonOn} variant="contained">
															ON
														</Button>
													</Grid>
													<Grid item>
														<Typography>12/10/2020 12:22:22</Typography>
													</Grid>
												</Grid>
											</Grid>

											<Grid item>
												<Button
													className={clsx(classes.statusButton, classes.statusButtonOn)}
													variant="contained"
												>
													OK
												</Button>
											</Grid>
										</Grid>
									</Grid>

									<Grid item container>
										<Grid item container justify="space-between" alignItems="center">
											<Grid
												item
												container
												alignItems="center"
												xs={12}
												md={10}
												justify="space-between"
											>
												<Grid item md={3}>
													<Typography>Sootblow Optimization Status</Typography>
												</Grid>
												<Grid item container md={7} alignItems="center" spacing={4}>
													<Grid item>
														<Button className={classes.statusButtonOff} variant="contained">
															OFF
														</Button>
													</Grid>
													<Grid item>
														<Typography>12/10/2020 12:22:22</Typography>
													</Grid>
												</Grid>
											</Grid>

											<Grid item>
												<Button
													className={clsx(classes.statusButton, classes.statusButtonOff)}
													variant="contained"
												>
													NOT OK
												</Button>
											</Grid>
										</Grid>
									</Grid>

									<Grid item container justify="space-between" xs={12}>
										<Grid item container spacing={3} direction="column">
											<Grid item>
												<Typography>Last Optimization</Typography>
											</Grid>
											<Grid item container xs={12} alignItems="center" justify="space-between">
												<Grid item container xs={12} md={11} alignItems="center" spacing={3}>
													<Grid item>
														<FiberManualRecordIcon className={classes.statusOff} />
													</Grid>
													<Grid item>
														<Typography>
															Combustion MV Parameter from 123 kCal to 234 kCal
														</Typography>
													</Grid>
												</Grid>
												<Grid item xs={12} md={1}>
													<Button fullWidth variant="contained" color="secondary">
														Apply
													</Button>
												</Grid>
											</Grid>

											<Grid item container xs={12} alignItems="center" justify="space-between">
												<Grid item container xs={12} md={10} alignItems="center" spacing={3}>
													<Grid item>
														<FiberManualRecordIcon className={classes.statusOn} />
													</Grid>
													<Grid item>
														<Typography>
															Sootblow MV Parameter from 123 kCal to 234 kCal
														</Typography>
													</Grid>
												</Grid>
												<Grid item xs={12} md={1}>
													<Button fullWidth variant="contained" color="secondary">
														Apply
													</Button>
												</Grid>
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
													<Grid container spacing={2}>
														<Grid item xs={12}>
															<Typography>Combustion</Typography>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 001</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 002</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 003</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 004</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
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
													<Grid container spacing={2}>
														<Grid item xs={12}>
															<Typography>Sootblow</Typography>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 001</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 002</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 003</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 004</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
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
													<Grid container spacing={2}>
														<Grid item xs={12}>
															<Typography>Combustion</Typography>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 001</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 002</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 003</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 004</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
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
													<Grid container spacing={2}>
														<Grid item xs={12}>
															<Typography>Sootblow</Typography>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 001</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 002</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOff}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 003</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
																</Grid>
															</Grid>
														</Grid>
														<Grid item container xs={12} alignItems="center">
															<Grid item xs={3}>
																<Typography>Parameter 004</Typography>
															</Grid>
															<Grid item container xs={9} justify="flex-end" spacing={2}>
																<Grid item>
																	<FiberManualRecordIcon
																		className={classes.statusOn}
																	/>
																</Grid>
																<Grid item>
																	<Typography>123 kCal/kWh</Typography>
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
