class CategoryModel {
    insertCategory() {
        console.log('create cat in model');
    }

    readCategories() {
        console.log('get all cats in model');
    }

    removeCategory() {
        console.log('remove cat in model')
    }
}

module.exports = new CategoryModel();
