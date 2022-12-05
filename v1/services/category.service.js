const categoryModel = require('../models/category.model');
const { BadRequestError } = require('../../errors');

class CategoryService {
    async createCategory(categoryDetails) {
        const category = await categoryModel.insertCategory(categoryDetails);
        return category;
    }

    async listAllCategories({ page, skip, limit }) {
        const categories = await categoryModel.fetchCategories({ skip, limit });
        return {
            page,
            limit,
            data: categories,
        };
    }

    async removeCategory({ categoryId }) {
        const removedCategory = await categoryModel.removeCategory(categoryId);
        if (!removedCategory) {
            throw new BadRequestError({
                error: 'invalid category id!'
            })
        }
        return removedCategory;
    }
}

module.exports = new CategoryService();
