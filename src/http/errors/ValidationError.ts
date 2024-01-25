export type ValidationErrorType = {
    field: string,
    message: string,
}

export class ValidationError extends Error {
    private readonly errors: ValidationErrorType[];

    constructor(message: string, errors: ValidationErrorType[]) {
        super(message);
        this.name = 'ValidationError';
        Object.setPrototypeOf(this, ValidationError.prototype);
        this.errors = errors;
    }

    toJSON() {
        return JSON.stringify({
            name: this.name,
            message: this.message,
            errors: this.errors,
        })
    }
}
