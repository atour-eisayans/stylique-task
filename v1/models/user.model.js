const { getConnection: getPGConnection } = require('../../db/psqlConnection');
const pgConnection = getPGConnection();

class UserModel {
    async insertUser(userInfo) {
        const user = await pgConnection
            .insert({
                name: userInfo.name,
                login: userInfo.login,
                password: userInfo.password,
                role: userInfo.role,
            },
            ['id', 'role'])
            .into('users');
        return user;
    }

    async fetchUserByLogin(userLogin) {
        const [user = null] = await pgConnection
            .where({ login: userLogin })
            .select('*')
            .from('users');
        return user;
    }
}

module.exports = new UserModel();
