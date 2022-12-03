const userService = require('../services/user.service');
const { CustomError } = require('../../errors');

class UserController {
    signupUser(req, res, next) {
        try {
            console.log('create user in controller');
            userService.createUser();
            throw new CustomError('something bad happened!');
            res.status(201).send();
        } catch (error) {
            next(error);
        }
    }

    signinUser(req, res, next) {
        try {
            console.log('login user in controller');
            userService.loginUser();
            res.status(200).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
