export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }

    toJSON() {
        return JSON.stringify({
            name: this.name,
            message: this.message
        })
    }
}
