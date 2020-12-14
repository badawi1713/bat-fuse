import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	statusOn: {
		color: '#FFF000'
	},
	statusOff: {
		color: '#EEEEEE'
	}
}));
const MainRightSchema = ({ title = 'LEFT INPUT', data = [] }) => {
	const classes = useStyles();

	return (
		<Grid style={{ height: '100%' }} item container spacing={1}>
			<Grid item xs={12}>
				<Paper square className="p-16">
					<Grid container spacing={2}>
						<Grid item container xs={12} direction="row-reverse" spacing={2} justify="flex-start">
							{data[0].data.reverse().map((item, index) => (
								<Grid key={index} item xs={3} className="text-center">
									<FiberManualRecordIcon
										className={item.status ? classes.statusOn : classes.statusOff}
										fontSize="small"
									/>
									<Typography className="text-12">{item.tagNumber}</Typography>
								</Grid>
							))}
						</Grid>
						<Grid item container xs={12} direction="row-reverse" spacing={2} justify="flex-start">
							{data[1].data.reverse().map((item, index) => (
								<Grid key={index} item xs={3} className="text-center">
									<FiberManualRecordIcon
										className={item.status ? classes.statusOn : classes.statusOff}
										fontSize="small"
									/>
									<Typography className="text-12">{item.tagNumber}</Typography>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Typography className="text-center">{title}</Typography>
			</Grid>
		</Grid>
	);
};

export default MainRightSchema;
