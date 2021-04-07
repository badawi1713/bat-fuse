import { authRoles } from 'app/auth';
import React from 'react';

const HomeConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/home',
			component: React.lazy(() => import('.'))
		}
	]
};

export default HomeConfig;
