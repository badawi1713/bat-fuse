import React from 'react';
import { authRoles } from 'app/auth';

const SootblowConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/sootblow',
			component: React.lazy(() => import('.'))
		}
	]
};

export default SootblowConfig;
