const articleService = require('../services/article.service');
const {
    publishArticle: publishArticleValidation,
    listArticles: listArticlesValidation,
} = require('../validators/article.validator');
const removeUploadedFiles = require('../../helpers/removeUploadedFiles');

class ArticleController {
    async publishArticle(req, res, next) {
        try {
            const validatedBody = publishArticleValidation({
                ...req.body,
                userId: -1 //req.decodedUser.id,
            });
            const article = await articleService.createArticle(validatedBody);
            res.status(201).json(article);
        } catch (error) {
            next(error);
        }
    }

    async listArticles(req, res, next) {
        try {
            const validatedParams = listArticlesValidation(req.query);
            const articles = await articleService.listAllArticles(validatedParams);
            res.status(200).json(articles);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ArticleController();
