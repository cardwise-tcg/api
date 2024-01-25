export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DataError';
    }

    toJSON() {
        return JSON.stringify({
            name: this.name,
            message: this.message
        })
    }
}
