module.exports = {
    userRoles: {
        admin: 1,
        moderator: 2,
        member: 3,
    },
    // opposite of above key-values
    // this is written to avoid using Object.values() or Object.keys()
    // this could be calculated by code and it's easy to do! but it's late))
    // this approach is not much interesting in small scales
    userRolesIds: {
        1: 'admin',
        2: 'moderator',
        3: 'member',
    },
};
