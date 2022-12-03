class ArticleModel {
    insertArticle() {
        console.log('create article in model');
    }

    readArticles() {
        console.log('get all articles in model');
    }
}

module.exports = new ArticleModel();