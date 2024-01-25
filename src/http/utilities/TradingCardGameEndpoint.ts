import {ParsedUrlQuery} from 'querystring';

export default abstract class TradingCardGameEndpoint {
    /**
     * The query string.
     *
     * @protected
     */
    protected query: ParsedUrlQuery;

    /**
     * TradingCardGameEndpoint constructor.
     *
     * @param query
     * @protected
     */
    protected constructor(query: ParsedUrlQuery) {
        this.query = query;

        this.validate();
    }

    /**
     * Filters the data.
     *
     * @abstract
     */
    abstract toJSON(): string;

    /**
     * Validates the query string.
     *
     * @abstract
     */
    protected abstract validate(): void;
}
