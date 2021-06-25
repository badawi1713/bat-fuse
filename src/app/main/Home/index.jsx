import FuseAnimate from '@fuse/core/FuseAnimate';
import { Button, CircularProgress, makeStyles, Paper, Typography } from '@material-ui/core';
import { getEfficiencyData } from 'app/store/actions';
import clsx from 'clsx';
import { ResizeWindows } from 'helpers';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Chart } from './Components';
import './styles/index.css';

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

	const efficiencyData = useSelector(state => state.efficiencyReducer);

	const [heightChart, setHeightChart] = useState('370');

	const { width, height } = ResizeWindows();

	useEffect(() => {
		const getHomeEfficiencyData = () => {
			setTimeout(() => {
				dispatch(getEfficiencyData());
			}, 3000)

		}

		return getHomeEfficiencyData()
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
		1
	const operationControlStatus =
		1
	const safeGuardStatus =
		1

	const {
		improvementEfficiency,
		baselineEfficiency,
		currentEfficiency,
		chart,
		referenceValue,
		loading
	} = efficiencyData;

	return (
		<main className="py-16 h-screen container px-0 mx-24 ">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className='h-full flex flex-col space-y-8'>
					<section className='flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 '>
						<Link to='/combustion' className='w-full'>
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
								<Typography className="text-12 md:text-20 lg:text-28">
									Combustion Optimization
								</Typography>
							</Button>
						</Link>
						<Link to='/sootblow' className='w-full'>
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
								<Typography className="text-12 md:text-20 lg:text-28">
									Sootblow Optimization
								</Typography>
							</Button>
						</Link>
					</section>

					<section className='flex flex-col-reverse space-y-8 md:space-y-0 md:flex-row flex-1 w-full'>
						<div className='w-full md:w-3/4 flex justify-center items-center flex-col p-10 flex-1 md:flex-initial'>
							<Typography className="text-center text-16 uppercase xl:text-28">
								Boiler Efficiency Improvement
							</Typography>
							<div className='w-full flex justify-center items-center'>
								{loading ?
									<CircularProgress color={'inherit'} className='mt-10' />
									:
									<Chart
										height={heightChart}
										loading={loading}
										data={chart}
										referenceValue={referenceValue}
									/>
								}

							</div>
						</div>
						<div className='w-full md:w-1/4 flex md:flex-col flex-row md:space-x-0 space-x-4 md:space-y-8'>
							<div className="flex-1 flex">
								<Paper
									square
									className="flex-1 flex flex-col justify-between py-10 xl:py-24"
								>
									<Typography className="text-center text-10 md:text-14 xl:text-20">
										Current Efficiency
									</Typography>
									<Typography className={currentEfficiency < 0 ? "text-red text-center text-10 md:text-36 font-semibold" : "text-light-green-A700 text-center text-10 md:text-36 font-semibold"}>
										{currentEfficiency ? Number(currentEfficiency).toFixed(2) : Number(0).toFixed(2)}%
									</Typography>
									<div />
								</Paper>
							</div>
							<div className="flex-1 flex">
								<Paper
									square
									className="flex-1 flex flex-col justify-between py-10 xl:py-24"
								>
									<Typography className="text-center text-10 md:text-14 xl:text-20">
										Efficiency Improvement
									</Typography>
									<Typography className={improvementEfficiency < 0 ? "text-red text-center text-10 md:text-36 font-semibold" : "text-light-green-A700 text-center text-10 md:text-36 font-semibold"}>
										{improvementEfficiency ? Number(improvementEfficiency).toFixed(2) : Number(0).toFixed(2)}%
									</Typography>
									<div />
								</Paper>
							</div>
							<div className="flex-1 flex">
								<Paper
									square
									className="flex-1 flex flex-col justify-between py-10 xl:py-24"
								>
									<Typography className="text-center text-10 md:text-14 xl:text-20">
										Efficiency Baseline
									</Typography>
									<Typography className={"text-orange-600 text-center text-10 md:text-36 font-semibold"}>
										{baselineEfficiency ? Number(baselineEfficiency).toFixed(2) : Number(0).toFixed(2)}%
									</Typography>
									<div />
								</Paper>
							</div>
						</div>
					</section>

				</div>
			</FuseAnimate>
		</main >
	);
};

export default Home;
