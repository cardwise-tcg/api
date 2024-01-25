import TradingCardGameEndpoint from '../../utilities/TradingCardGameEndpoint';
import {ParsedUrlQuery} from 'querystring';
import {Card, Ink} from '../types/Card';
import {CharacterCard} from '../types/CharacterCard';
import CardCollection from '../collections/CardCollection';
import {ValidationError, ValidationErrorType} from '../../errors/ValidationError';


export default class Cards extends TradingCardGameEndpoint {

    /**
     * All cards data.
     *
     * @private
     */
    private readonly all: Card[] | CharacterCard[];

    /**
     * Filtered cards data.
     *
     * @private
     */
    private filtered: Card[] | CharacterCard[];

    /**
     * @inheritDoc
     *
     * @param data
     * @param query
     */
    constructor(data: Card[] | CharacterCard[], query: ParsedUrlQuery) {
        super(query);
        this.all = data;
    }

    /**
     * @inheritDoc
     */
    toJSON = (): string => JSON.stringify({
        cards: this.filtered,
    });

    /**
     * Filter cards data by query.
     *
     * @protected
     */
    filter(): Cards {
        const cardCollection = new CardCollection(this.all);

        const {name, ink, set_key} = this.query;

        if (name) {
            cardCollection.filterByName(name);
        }

        if (ink) {
            cardCollection.filterByInk(ink as Ink | Ink[]);
        }

        if (set_key) {
            cardCollection.filterBySetKey(set_key);
        }

        this.filtered = cardCollection.getCards();

        return this;
    }

    /**
     * @inheritDoc
     */
    protected validate(): void {
        const {name, ink, set_key} = this.query;

        const errors: ValidationErrorType[] = [];

        if (name && !Array.isArray(name) && typeof name !== 'string') {
            errors.push({
                field: 'name',
                message: 'name must be a string or array of strings'
            });
        }

        if (ink && !Array.isArray(ink) && typeof ink !== 'string') {
            errors.push({
                field: 'ink',
                message: 'ink must be a string or array of strings'
            });
        }

        if (ink && typeof ink === 'string' && !Object.values(Ink).includes(ink as Ink)) {
            errors.push({
                field: 'ink',
                message: `ink must be a one of: ${Object.values(Ink).join(', ')}`
            });
        }

        if (ink && Array.isArray(ink)) {
            ink.some((ink: string) => {
                if (!Object.values(Ink).includes(ink as Ink)) {
                    errors.push({
                        field: 'ink',
                        message: `${ink} is not one of: ${Object.values(Ink).join(', ')}`
                    });
                }
            });
        }

        if(set_key && !Array.isArray(set_key) && typeof set_key !== 'string') {
            errors.push({
                field: 'set_key',
                message: 'set_key must be a string or array of strings'
            });
        }

        if (errors.length) {
            throw new ValidationError(
                'One or more errors found in your request',
                errors
            );
        }
    }
}
