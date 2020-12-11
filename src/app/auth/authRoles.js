/**
 * Authorization Roles
 */
const authRoles = {
	admin: ['ADMIN'],
	staff: ['ADMIN', 'staff'],
	user: ['ADMIN', 'staff', 'user'],
	onlyGuest: []
};

export default authRoles;
