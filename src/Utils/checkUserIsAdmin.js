export const checkUserIsAdmin = currentUser => {
    // check if user is logged in and whether it contains an array of userroles else return false
    if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
    // if user contain an array of userroles, then extract it from currentUser
    const { userRoles } = currentUser;
    // if userroles include admin, the return true, the user is an admin
    if (userRoles.includes('admin')) return true;

    // Any other case return false
    return false;
}
