const userService = require('../services/user.service');
const {
    createUser: createUserValidation,
    loginUser: loginUserValidation,
} = require('../validators/user.validator');
const { generate: tokenGenerator } = require('../../helpers/loginTokenHandler');

class UserController {
    async signupUser(req, res, next) {
        try {
            const validatedBody = createUserValidation(req.body);
            const user = await userService.createUser(validatedBody);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    async signinUser(req, res, next) {
        try {
            const validatedBody = loginUserValidation(req.body);
            const authenticatedUser = await userService.checkUser(validatedBody);
            const token = await tokenGenerator(authenticatedUser);
            res.status(200).json({
                ...authenticatedUser,
                token,
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
