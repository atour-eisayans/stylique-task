const { getConnection: getPGConnection } = require('../../db/psqlConnection');
const pgConnection = getPGConnection();

class CategoryModel {
    async insertCategory(categoryDetails) {
        const [category = null] = await pgConnection
            .insert({
                name: categoryDetails.name,
                description: categoryDetails.description,
            },
            ['id', 'name'])
            .into('categories');
        return category;
    }

    async fetchCategories({ skip, limit }) {
        const categories = await pgConnection
            .select('*')
            .from('categories')
            .limit(limit)
            .offset(skip);
        return categories;
    }

    async removeCategory(categoryId) {
        const [category = null] = await pgConnection
            .delete()
            .from('categories')
            .where({
                id: categoryId,
            })
            .returning(['id']);
        return category;
    }
}

module.exports = new CategoryModel();
