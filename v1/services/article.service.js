const articleModel = require('../models/article.model');

class ArticleService {
    createArticle() {
        console.log('create article in service');
        articleModel.insertArticle();
    }

    listAllArticles() {
        console.log('list all articles in service');
        articleModel.readArticles();
    }
}

module.exports = new ArticleService();
