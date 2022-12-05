const categoryService = require('../services/category.service');
const {
    createCategory: createCategoryValidation,
    listCategories: listCategoriesValidation,
    removeCategory: removeCategoryValidation,
} = require('../validators/category.validators');

class CategoryController {
    async createCategory(req, res, next) {
        try {
            const validatedBody = createCategoryValidation(req.body);
            const category = await categoryService.createCategory(validatedBody);
            res.status(201).json(category);
        } catch (error) {
            next(error);
        }
    }

    async listAllCategories(req, res, next) {
        try {
            const validatedParams = listCategoriesValidation(req.query);
            const categories = await categoryService.listAllCategories(validatedParams);
            res.status(200).json(categories);
        } catch (error) {
            next(error);
        }
    }

    async removeCategory(req, res, next) {
        try {
            const validatedBody = removeCategoryValidation(req.query);
            const removedCategory = await categoryService.removeCategory(validatedBody);
            res.status(200).json(removedCategory);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CategoryController();
