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

const MainBottomSchema = ({ title = 'Front', data = [] }) => {
	const classes = useStyles();

	return (
		<Grid item container spacing={1}>
			<Grid item xs={12}>
				<Paper style={{ height: '100%' }} square className="p-16">
					<Grid
						item
						container
						xs={12}
						spacing={1}
						alignItems="center"
						direction="row-reverse"
						justify="space-between"
					>
						{data.reverse().map((item, index) => (
							<Grid key={index} item xs={3} className="text-center">
								<FiberManualRecordIcon
									fontSize="small"
									className={item.status ? classes.statusOn : classes.statusOff}
								/>
								<Typography className="text-12">{item.tagNumber}</Typography>
							</Grid>
						))}
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Typography className="text-center">{title}</Typography>
			</Grid>
		</Grid>
	);
};

export default MainBottomSchema;
