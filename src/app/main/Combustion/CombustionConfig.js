import { authRoles } from 'app/auth';
import Combustion from './index';

const CombustionConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/combustion',
			component: Combustion
		}
	]
};

export default CombustionConfig;
