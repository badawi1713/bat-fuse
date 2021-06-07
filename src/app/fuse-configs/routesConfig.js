import FuseUtils from '@fuse/utils';
import authRoleExamplesConfigs from 'app/main/auth/authRoleExamplesConfigs';
import CallbackConfig from 'app/main/callback/CallbackConfig';
import CombustionConfig from 'app/main/Combustion/CombustionConfig';
import HomeConfig from 'app/main/Home/HomeConfig';
import ProfileConfig from 'app/main/Profile/ProfileConfig'
import LoginConfig from 'app/main/Login/LoginConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';
import pagesConfigs from 'app/main/pages/pagesConfigs';
import SootblowConfig from 'app/main/Sootblow/SootblowConfig';
import React from 'react';
import { Redirect } from 'react-router-dom';

const routeConfigs = [
	...pagesConfigs,
	...authRoleExamplesConfigs,
	HomeConfig,
	ProfileConfig,
	SootblowConfig,
	CombustionConfig,
	LogoutConfig,
	LoginConfig,
	LogoutConfig,
	CallbackConfig
];

const routes = [
	// if you want to make whole app auth protected by default change defaultAuth for example:
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['ADMIN','staff','user']),
	// The individual route configs which has auth option won't be overridden.
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
	{
		path: '/',
		exact: true,
		component: () => <Redirect to="/home" />
	},
	{
		component: () => <Redirect to="/errors/error-404" />
	}
];

export default routes;
