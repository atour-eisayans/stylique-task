const { BadRequestError } = require('../../errors');

module.exports = {
    createCategory: (body) => {
        const {
            name = '',
            description = ''
        } = body;

        const badFields = [];
        if (!name || name.length === 0) {
            badFields.push({
                field: 'name',
                message: 'must be a string with at least 1 character length!',
                value: name,
            });
        }

        if (badFields.length > 0) {
            throw new BadRequestError({
                errors: badFields,
            });
        }

        return {
            name,
            description,
        };
    },
    listCategories: (body) => {
        const {
            page = 1,
            limit = 10,
        } = body;

        return {
            page: 1,
            skip: (page - 1) * limit,
            limit,
        };
    },
    removeCategory: (body) => {
        const { id = null } = body;

        const badFields = [];
        if (!id) {
            badFields.push({
                field: 'id',
                message: 'must provide the id',
                value: id,
            });
        }

        if (badFields.length > 0) {
            throw new BadRequestError({
                errors: badFields,
            });
        }

        return {
            categoryId: +id
        };
    }
}