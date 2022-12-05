const userModel = require('../models/user.model');
const {
    BadRequestError,
} = require('../../errors');

class UserService {
    async createUser(userInfo) {
        const user = await userModel.insertUser(userInfo);
        return user;
    }

    async checkUser(userInfo) {
        console.log('userInfo: ', userInfo);
        const { login: userLogin, password } = userInfo;
        const user = await userModel.fetchUserByLogin(userLogin);
        if (!user) {
            throw new BadRequestError({error: 'user not found'});
        }

        if (user.password !== password) {
            throw new BadRequestError({error: 'wrong password'});
        }
        return {
            id: user.id,
            login: userLogin,
            role: user.role,
        };
    }
}

module.exports = new UserService();
