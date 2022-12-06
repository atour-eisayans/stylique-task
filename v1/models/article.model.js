const { getConnection: getPGConnection } = require('../../db/psqlConnection');
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
            .into('articles');
        return article;
    }

    async readArticles({ skip, limit }) {
        const articles = await pgConnection
            .select(
                'articles.id as articleId',
                'articles.name as articleName',
                'articles.content as articleContent',
                'articles.updated_at as articleLastUpdate',
                'articles.images as images',
                'categories.name as categoryName',
                'users.name as publisher',
            )
            .from('articles')
            .innerJoin(
                'categories',
                'categories.id',
                'articles.category_id',
            )
            .innerJoin(
                'users',
                'users.id',
                'articles.user_id',
            )
            .offset(skip)
            .limit(limit);
        return articles;
    }
}

module.exports = new ArticleModel();