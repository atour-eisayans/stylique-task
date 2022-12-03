const categoryModel = require('../models/category.model');

class CategoryService {
    createCategory() {
        console.log('create cat in service');
        categoryModel.insertCategory();
    }

    listAllCategories() {
        console.log('list all cats in service');
        categoryModel.readCategories();
    }

    removeCategory() {
        console.log('remove cat in service');
        categoryModel.removeCategory();
    }
}

module.exports = new CategoryService();
