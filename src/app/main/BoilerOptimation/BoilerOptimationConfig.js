import { authRoles } from 'app/auth';
import BoilerOptimation from './index';

const BoilerOptimationConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/boiler-optimation',
			component: BoilerOptimation
		}
	]
};

export default BoilerOptimationConfig;
