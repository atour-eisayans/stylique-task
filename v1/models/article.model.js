const { getConnection: getPGConnection } = require('../../db/psqlConnection');
const { pgTables } = require('../../configs/config');
const pgConnection = getPGConnection();

class ArticleModel {
    async insertArticle(articleDetails) {
        const [article = null] = await pgConnection
            .insert({
                name: articleDetails.name,
                content: articleDetails.content,
                category_id: articleDetails.categoryId,
                user_id: articleDetails.userId,
                images: JSON.stringify(articleDetails.images),
            },
            ['id', 'name', 'content', 'images'])
            .into(pgTables.articles);
        return article;
    }

    async readArticles({ skip, limit }) {
        const articles = await pgConnection
            .select(
                `${pgTables.articles}.id as articleId`,
                `${pgTables.articles}.name as articleName`,
                `${pgTables.articles}.content as articleContent`,
                `${pgTables.articles}.updated_at as articleLastUpdate`,
                `${pgTables.articles}.images as images`,
                `${pgTables.categories}.name as categoryName`,
                `${pgTables.users}.name as publisher`,
            )
            .from(pgTables.articles)
            .innerJoin(
                pgTables.categories,
                `${pgTables.categories}.id`,
                `${pgTables.articles}.category_id`,
            )
            .innerJoin(
                pgTables.users,
                `${pgTables.users}.id`,
                `${pgTables.articles}.user_id`,
            )
            .offset(skip)
            .limit(limit);
        return articles;
    }
}

module.exports = new ArticleModel();