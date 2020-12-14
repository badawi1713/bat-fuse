import React from 'react';
import { Card, CardContent, Container, Grid, Typography } from '@material-ui/core';

const BoilerOptimation = () => {
	return (
		<Container className="py-16">
			<Grid container spacing={1}>
				<Grid container item justify="flex-end">
					<Grid item className="flex">
						<Typography className="mr-10">WATCHDOG STATUS</Typography>
						<Typography>OK</Typography>
					</Grid>
				</Grid>
				<Grid container item justify="flex-end">
					<Grid item>
						<Typography>BOILER OPTIMATION</Typography>
					</Grid>
				</Grid>
				<Grid item container spacing={1}>
					<Grid item xs={12} md={3}>
						<Card style={{ height: '100%' }}>
							<CardContent>
								<Typography>Test 1</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item container xs={12} md={9} spacing={1}>
						<Grid item xs={12}>
							<Card>
								<CardContent>
									<Typography>Test 2</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12}>
							<Card>
								<CardContent>
									<Typography>Test 3</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default BoilerOptimation;
