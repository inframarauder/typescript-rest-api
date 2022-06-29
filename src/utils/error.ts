class GeneralError extends Error {
	constructor(message: string) {
		super();
		this.message = message;
	}

	getCode(): number {
		if (this instanceof BadRequest) {
			return 400;
		} else if (this instanceof Unauthorized) {
			return 401;
		} else if (this instanceof Forbidden) {
			return 403;
		} else if (this instanceof NotFound) {
			return 404;
		} else {
			return 500;
		}
	}
}

class BadRequest extends GeneralError {}
class Unauthorized extends GeneralError {}
class Forbidden extends GeneralError {}
class NotFound extends GeneralError {}

export { GeneralError, BadRequest, Unauthorized, Forbidden, NotFound };
