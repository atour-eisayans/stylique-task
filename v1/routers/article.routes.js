const { Router } = require('express');
const {
    createArticle,
    listArticles,
} = require('../controllers/article.controller');

const router = Router();
router.route('/')
    .post(createArticle)
    .get(listArticles);

module.exports = router;
