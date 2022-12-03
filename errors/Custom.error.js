class CustomError extends Error {
    constructor(msg, statusCode = 500, data = {}) {
        super(msg);
        this.statusCode = statusCode;
        this.data = data;
    }

    toJSON() {
        return {
            message: this.message,
            code: this.statusCode,
            data: this.data,
        }
    }
}

module.exports = CustomError;
