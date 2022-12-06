const articleModel = require('../models/article.model');

class ArticleService {
    async createArticle(articleDetails) {
        const article = await articleModel.insertArticle(articleDetails);
        return article;
    }

    async listAllArticles({ page, skip, limit }) {
        const articles = await articleModel.readArticles({ skip, limit });
        return {
            page,
            limit,
            data: articles,
        };
    }
}

module.exports = new ArticleService();
