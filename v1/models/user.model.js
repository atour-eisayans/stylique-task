class UserModel {
    createUser() {
        console.log('create user in model');
    }

    loginUser() {
        console.log('login user in model');
    }
}

module.exports = new UserModel();
