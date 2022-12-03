const categoryService = require('../services/category.service');

class CategoryController {
    createCategory(req, res, next) {
        try {
            console.log('create user in controller');
            categoryService.createCategory();
            res.status(201).send();
        } catch (error) {
            next(error);
        }
    }

    listCategories(req, res, next) {
        try {
            console.log('login user in controller');
            categoryService.listAllCategories();
            res.status(200).send();
        } catch (error) {
            next(error);
        }
    }

    removeCategory(req, res, next) {
        try {
            console.log('remove cat in controller');
            categoryService.removeCategory();
            res.status(200).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CategoryController();
