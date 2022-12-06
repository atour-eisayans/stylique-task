module.exports = {
    generatePaginationParams: (page = 1, limit = 10) => {
        return {
            page,
            skip: (page - 1) * limit,
            limit,
        };
    },
};
