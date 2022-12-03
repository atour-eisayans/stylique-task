const { Router } = require('express');
const {
    createCategory,
    listCategories,
    removeCategory,
} = require('../controllers/category.controller');

const router = Router();
router.route('/')
    .post(createCategory)
    .get(listCategories)
    .delete(removeCategory);

module.exports = router;
