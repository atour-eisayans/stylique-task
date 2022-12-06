const { Router } = require('express');
const { userRoles } = require('../../configs/enums');
const { mustLoggedin } = require('../middlewares/authenticateToken');
const mustBeAuthAs = require('../middlewares/mustBeAuthAs');
const addFilenamesToReq = require('../middlewares/addFilenamesToReqBody');
const {
    publishArticle,
    listArticles,
} = require('../controllers/article.controller');
const upload = require('../../helpers/multerHelper');
const removeUploadedFiles = require('../../helpers/removeUploadedFiles');

const router = Router();

router.route('/')
    .post(
        upload.array('images', 3),
        addFilenamesToReq('images'),
        mustLoggedin,
        mustBeAuthAs(userRoles.moderator),
        publishArticle,
        (error, req, res, next) => {
            removeUploadedFiles(req.body['images'] || []);
            next(error);
        }
    )
    .get(
        mustLoggedin,
        listArticles,
    );

module.exports = router;
