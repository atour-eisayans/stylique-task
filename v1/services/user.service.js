const userModel = require('../models/user.model');

class UserService {
    createUser() {
        console.log('create user in service');
        userModel.createUser();
    }

    loginUser() {
        console.log('login user in service');
        userModel.loginUser();
    }
}

module.exports = new UserService();
