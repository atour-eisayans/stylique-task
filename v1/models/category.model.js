const { getConnection: getPGConnection } = require('../../db/psqlConnection');
const { pgTables } = require('../../configs/config');
const pgConnection = getPGConnection();

class CategoryModel {
    async insertCategory(categoryDetails) {
        const [category = null] = await pgConnection
            .insert({
                name: categoryDetails.name,
                description: categoryDetails.description,
            },
            ['id', 'name'])
            .into(pgTables.categories);
        return category;
    }

    async fetchCategories({ skip, limit }) {
        const categories = await pgConnection
            .select('*')
            .from(pgTables.categories)
            .limit(limit)
            .offset(skip);
        return categories;
    }

    async removeCategory(categoryId) {
        const [category = null] = await pgConnection
            .delete()
            .from(pgTables.categories)
            .where({
                id: categoryId,
            })
            .returning(['id']);
        return category;
    }
}

module.exports = new CategoryModel();
