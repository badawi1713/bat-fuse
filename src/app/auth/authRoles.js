/**
 * Authorization Roles
 */
const authRoles = {
	admin: ['ADMIN'],
	manager: ['ADMIN', 'MANAGER'],
	operator: ['ADMIN', 'OPERATOR'],
	onlyGuest: []
};

export default authRoles;
