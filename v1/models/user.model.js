const { getConnection: getPGConnection } = require('../../db/psqlConnection');
const { pgTables } = require('../../configs/config');
const pgConnection = getPGConnection();

class UserModel {
    async insertUser(userInfo) {
        const [user = null] = await pgConnection
            .insert({
                name: userInfo.name,
                login: userInfo.login,
                password: userInfo.password,
                role: userInfo.role,
            },
            ['id', 'role'])
            .into(pgTables.users);
        return user;
    }

    async fetchUserByLogin(userLogin) {
        const [user = null] = await pgConnection
            .select('*')
            .from(pgTables.users)
            .where({ login: userLogin });
        return user;
    }
}

module.exports = new UserModel();
