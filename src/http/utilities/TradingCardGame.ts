import {ParsedUrlQuery} from "querystring";

export default abstract class TradingCardGame {
    protected query: ParsedUrlQuery;

    protected constructor(query: ParsedUrlQuery) {
        this.query = query;

        this.validate();
        this.load();
    }

    abstract load(): void;

    abstract validate(): void;

    abstract toJSON(): string;
}
