const { BadRequestError } = require('../../errors');
const { generatePaginationParams } = require('../../helpers/pagination');

module.exports = {
    publishArticle: (body) => {
        const {
            name = '',
            content = '',
            categoryId = null,
            userId = 2,
            images = []
        } = body;

        const badFields = [];

        if (!name || name.length === 0) {
            badFields.push({
                field: 'name',
                message: 'must be at least 1 character',
                value: name,
            });
        }

        if (!content || content.length === 0) {
            badFields.push({
                field: 'content',
                message: 'must be at least 1 character',
                value: content,
            });
        }

        if (!categoryId) {
            badFields.push({
                field: 'categoryId',
                message: 'must enter categoryId',
                value: categoryId,
            });
        }

        if (!userId) {
            badFields.push({
                field: 'userId',
                message: 'must enter userId',
                value: userId,
            });
        }

        if (badFields.length > 0) {
            throw new BadRequestError({
                errors: badFields,
            });
        }

        return {
            name,
            content,
            categoryId,
            userId,
            images,
        };
    },
    listArticles: (params) => {
        const {
            page = 1,
            limit = 10,
        } = params;

        return generatePaginationParams(page, limit);
    },
};
