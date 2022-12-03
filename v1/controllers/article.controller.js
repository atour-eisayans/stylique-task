const articleService = require('../services/article.service');

class ArticleController {
    createArticle(req, res, next) {
        try {
            console.log('create article in controller');
            articleService.createArticle();
            res.status(201).send();
        } catch (error) {
            next(error);
        }
    }

    listArticles(req, res, next) {
        try {
            console.log('list articles in controller');
            articleService.listAllArticles();
            res.status(200).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ArticleController();
