import FuseAnimate from '@fuse/core/FuseAnimate';
import { Button, Grid, Hidden, makeStyles, Paper, Typography } from '@material-ui/core';
import { getEfficiencyData, getSootblowData } from 'app/store/actions';
import clsx from 'clsx';
import { ResizeWindows } from 'helpers';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Chart } from './Components';

const useStyles = makeStyles(() => ({
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
	}
}));

const Home = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const sootblowData = useSelector(state => state.sootblowReducer.sootblowData);

	const efficiencyData = useSelector(state => state.efficiencyReducer);

	const [heightChart, setHeightChart] = useState('370');

	const { width, height } = ResizeWindows();

	useEffect(() => {
		dispatch(getSootblowData());
		dispatch(getEfficiencyData());
	}, [dispatch]);

	useEffect(() => {
		const heightChartHandler = (width, height) => {
			if (width >= 1920) {
				setHeightChart('470');
			} else if (width >= 1300) {
				setHeightChart('350');
			} else {
				setHeightChart('370');
			}
		};

		heightChartHandler(width, height);
	}, [width, height]);

	const masterControl =
		sootblowData && sootblowData.control && sootblowData.control[2] && sootblowData.control[2].value;
	const operationControlStatus =
		sootblowData && sootblowData.control && sootblowData.control[1] && sootblowData.control[1].value;
	const safeGuardStatus =
		sootblowData && sootblowData.control && sootblowData.control[0] && sootblowData.control[0].value;

	const {
		improvementEfficiency,
		baselineEfficiency,
		currentEfficiency,
		chart,
		referenceValue,
		loading
	} = efficiencyData;

	return (
		<div className="py-16 h-full container px-0 mx-24">
			<Hidden smDown>
				<FuseAnimate animation="transition.slideUpIn" delay={200}>
					<Grid container direction="column" spacing={1} className="pt-10 h-full">
						<Grid item container className="flex-initial" spacing={1}>
							<Grid item xs={12} md={6}>
								<Link to="/combustion">
									<Button
										fullWidth
										variant="outlined"
										className={clsx('h-full', classes.statusButtonOff)}
									>
										<Grid container justify="center" alignItems="center">
											<Grid item>
												<Typography className="text-20 lg:text-28">
													Combustion Optimization
												</Typography>
											</Grid>
										</Grid>
									</Button>
								</Link>
							</Grid>
							<Grid item xs={12} md={6}>
								<Link to="/sootblow">
									<Button
										fullWidth
										variant="outlined"
										className={
											operationControlStatus === '1' &&
												safeGuardStatus === '1' &&
												masterControl === '1'
												? clsx('h-full', classes.statusButtonOn)
												: clsx('h-full', classes.statusButtonOff)
										}
									>
										<Grid container justify="center" alignItems="center">
											<Grid item>
												<Typography className="text-20 lg:text-28">
													Sootblow Optimization
												</Typography>
											</Grid>
										</Grid>
									</Button>
								</Link>
							</Grid>
						</Grid>
						<Grid item className="flex-1 overflow-auto">
							<Paper square className="border-grey-800 bg-transparent border w-full h-full rounded p-8">
								<div className="flex md:flex-row space-x-8 flex-col-reverse h-full justify-around md:justify-start">
									<div className="w-full md:w-4/5 h-full flex flex-col justify-center">
										<Typography className="text-center text-16 uppercase xl:text-28">
											Boiler Efficiency Improvement
										</Typography>
										<div className='flex justify-center items-center'>
											<Chart
												id="home-chart"
												height={heightChart}
												loading={loading}
												data={chart}
												referenceValue={referenceValue}
											/>
										</div>
									</div>
									<div className="flex flex-row md:flex-col flex-1 space-x-8 md:space-x-0 md:space-y-8">
										<div className="flex-1 flex">
											<Paper
												square
												className="flex-1 flex flex-col justify-between py-10 xl:py-24"
											>
												<Typography className="text-center text-14 xl:text-20">
													Current Efficiency
												</Typography>
												<Typography className=" text-center text-36 text-light-green-A700 font-semibold">
													{currentEfficiency ? Number(currentEfficiency).toFixed(2) : 0}%
												</Typography>
												<div />
											</Paper>
										</div>
										<div className="flex-1 flex">
											<Paper
												square
												className="flex-1 flex flex-col justify-between py-10 xl:py-24"
											>
												<Typography className="text-center text-14 xl:text-20">
													Efficiency Improvement
												</Typography>
												<Typography className="flex items-center justify-center text-center text-36 text-light-green-A700 font-semibold">
													{improvementEfficiency
														? Number(improvementEfficiency).toFixed(2)
														: 0}
													%
												</Typography>
												<div />
											</Paper>
										</div>
										<div className="flex-1 flex">
											<Paper
												square
												className="flex-1 flex flex-col justify-between py-10 xl:py-24"
											>
												<Typography className="text-center text-14 xl:text-20">
													Efficiency Baseline
												</Typography>
												<Typography className=" text-center text-36 text-orange-600 font-semibold">
													{baselineEfficiency ? Number(baselineEfficiency).toFixed(2) : 0}%
												</Typography>
												<div />
											</Paper>
										</div>
									</div>
								</div>
							</Paper>
						</Grid>
					</Grid>
				</FuseAnimate>
			</Hidden>

			<Hidden mdUp>
				<FuseAnimate animation="transition.slideUpIn" delay={200}>
					<Grid container spacing={2} alignItems="center">
						<Grid item xs={12}>
							<Link to="/combustion">
								<Button
									fullWidth
									variant="outlined"
									className={clsx('h-full', classes.statusButtonOff)}
								>
									<Grid container justify="center" alignItems="center">
										<Grid item>
											<Typography className="text-18">Combustion Optimization</Typography>
										</Grid>
									</Grid>
								</Button>
							</Link>
						</Grid>
						<Grid item xs={12}>
							<Link to="/sootblow">
								<Button
									fullWidth
									variant="outlined"
									className={
										operationControlStatus === '1' &&
											safeGuardStatus === '1' &&
											masterControl === '1'
											? clsx('h-full', classes.statusButtonOn)
											: clsx('h-full', classes.statusButtonOff)
									}
								>
									<Grid container justify="center" alignItems="center">
										<Grid item>
											<Typography className="text-18">Sootblow Optimization</Typography>
										</Grid>
									</Grid>
								</Button>
							</Link>
						</Grid>
						<Grid item xs={12}>
							<Paper square className="border-grey-800 bg-transparent border w-full h-full rounded p-8">
								<Grid container className="w-full h-full space-y-8">
									<Grid item className="flex flex-1 space-x-8">
										<div className="flex-1 flex">
											<Paper square className="flex-1 flex flex-col justify-between py-10 px-4">
												<Typography className="text-center text-10">
													Current Efficiency
									</Typography>
												<Typography className=" text-center text-24 text-light-green-A700 font-semibold">
													{currentEfficiency ? Number(currentEfficiency).toFixed(2) : 0}%
									</Typography>
												<div />
											</Paper>
										</div>
										<div className="flex-1 flex">
											<Paper square className="flex-1 flex flex-col justify-between py-10 px-4">
												<Typography className="text-center text-10">
													Efficiency Improvement
									</Typography>
												<Typography className="flex items-center justify-center text-center text-24 text-light-green-A700 font-semibold">
													{improvementEfficiency
														? Number(improvementEfficiency).toFixed(2)
														: 0}
										%
									</Typography>
												<div />
											</Paper>
										</div>
										<div className="flex-1 flex">
											<Paper square className="flex-1 flex flex-col justify-between py-10 px-4">
												<Typography className="text-center text-10">
													Efficiency Baseline
									</Typography>
												<Typography className=" text-center text-24 text-orange-600 font-semibold">
													{baselineEfficiency ? Number(baselineEfficiency).toFixed(2) : 0}%
									</Typography>
												<div />
											</Paper>
										</div>
									</Grid>
									<Grid item className="w-full h-full flex flex-col justify-center">
										<Typography className="text-center text-12 uppercase">
											BAT Efficiency Improvement Dashboard
							</Typography>
										<Chart
											id="home-chart"
											height={"100%"}
											loading={loading}
											data={chart}
											referenceValue={referenceValue}
										/>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
					</Grid>
				</FuseAnimate>
			</Hidden>
		</div>
	);
};

export default Home;
