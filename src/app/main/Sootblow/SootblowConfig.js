import { authRoles } from 'app/auth';
import Sootblow from './index';

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
			component: Sootblow
		}
	]
};

export default SootblowConfig;
