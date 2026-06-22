class NotFoundError extends Error {
    statusCode : 404;
    constructor(message : string) {
        super(message);
        this.statusCode = 404;
        this.name = "NotFoundError";
    }
}

class ForbiddenError extends Error {
    statusCode : 403;
    constructor(message : string) {
        super(message);
        this.statusCode = 403;
        this.name = "ForbiddenError";
    }
}

class UnauthorizedError extends Error {
    statusCode : 401;
    constructor(message : string) {
        super(message);
        this.statusCode = 401;
        this.name = "UnauthorizedError";
    }
}


class BadRequestError extends Error {
    statusCode : 400;
    constructor(message : string) {
        super(message);
        this.statusCode = 400;
        this.name = "BadRequestError";
    }
}


export { NotFoundError, ForbiddenError, UnauthorizedError, BadRequestError };