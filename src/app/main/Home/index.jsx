import FuseAnimate from '@fuse/core/FuseAnimate';
import { Button, Container, Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.css';

const Home = () => {
	return (
		<Container className="py-16 h-full">
			<Hidden smDown>
				<FuseAnimate animation="transition.slideUpIn" delay={200}>
					<Grid container spacing={2} className="pt-16 h-full">
						<Grid item xs={12} md={6}>
							<Link to="/combustion">
								<Button fullWidth variant="outlined" className="h-full">
									<Grid container justify="center" alignItems="center">
										<Grid item>
											<Typography variant="h4">Combustion Optimization</Typography>
										</Grid>
									</Grid>
								</Button>
							</Link>
						</Grid>
						<Grid item xs={12} md={6}>
							<Link to="/sootblow">
								<Button fullWidth variant="outlined" className="h-full">
									<Grid container justify="center" alignItems="center">
										<Grid item>
											<Typography variant="h4">Sootblow Optimization</Typography>
										</Grid>
									</Grid>
								</Button>
							</Link>
						</Grid>
					</Grid>
				</FuseAnimate>
			</Hidden>

			<Hidden mdUp>
				<FuseAnimate animation="transition.slideUpIn" delay={200}>
					<Grid container spacing={2} alignItems="center">
						<Grid item xs={12} md={6}>
							<Link to="/combustion">
								<Button fullWidth variant="outlined" style={{ height: '40vh' }}>
									<Typography variant="h6">Combustion Optimization</Typography>
								</Button>
							</Link>
						</Grid>
						<Grid item xs={12} md={6}>
							<Link to="/sootblow">
								<Button fullWidth variant="outlined" style={{ height: '40vh' }}>
									<Typography variant="h6">Sootblow Optimization</Typography>
								</Button>
							</Link>
						</Grid>
					</Grid>
				</FuseAnimate>
			</Hidden>
		</Container>
	);
};

export default Home;
