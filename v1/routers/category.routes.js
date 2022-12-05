const { Router } = require('express');
const {
    createCategory,
    listAllCategories,
    removeCategory,
} = require('../controllers/category.controller');
const { mustLoggedin } = require('../middlewares/authenticateToken');
const mustBeAuthAs = require('../middlewares/mustBeAuthAs');
const { userRoles } = require('../../configs/enums');

const router = Router();
router.route('/')
    .post(
        mustLoggedin,
        mustBeAuthAs([userRoles.admin, userRoles.moderator]),
        createCategory
    )
    .get(
        mustLoggedin,
        listAllCategories
    )
    .delete(
        mustLoggedin,
        mustBeAuthAs(userRoles.admin),
        removeCategory
    );

module.exports = router;
