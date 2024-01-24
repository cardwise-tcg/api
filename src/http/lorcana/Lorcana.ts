import * as fs from 'fs';
import {ParsedUrlQuery} from 'querystring';
import TradingCardGame from '../utilities/TradingCardGame';
import {ValidationError} from '../utilities/ValidationError';
import {Card} from "./types/Card";
import {CharacterCard} from "./types/CharacterCard";
import {filterByString, filterByStringArray} from '../utilities/filters';

export default class Lorcana extends TradingCardGame {

    private all: Card[] | CharacterCard[];
    private filtered: Card[] | CharacterCard[];

    constructor(query: ParsedUrlQuery) {
        super(query);
    }

    validate(): void {
        //@TODO: Some basic validation
    }

    load(): void {
        if (!fs.existsSync(`src/http/lorcana/all.json`)) {
            throw new ValidationError('Lorcana data not found.');
        }

        let data = JSON.parse(fs.readFileSync(`src/http/lorcana/all.json`, 'utf8')) as {};

        this.all = data['cards'];

        this.filtered = this.all;
    }

    applyFilters(): Lorcana {
        if (this.query.name) {
            this.filtered = this.filtered.filter((card: Card & CharacterCard) => {
                let compositeName = card.name;
                if (card.types.includes("Character")) {
                    compositeName += ` - ${card.version}`
                }
                compositeName = compositeName.toLowerCase();
                if (!Array.isArray(this.query.name))
                    return filterByString(compositeName, this.query.name as string);
                return filterByStringArray(compositeName, this.query.name as string[]);
            });
        }

        if (this.query.set_id) {
            this.filtered = this.filtered.filter((card: Card | CharacterCard) => {
                return filterByString(card.set.key, this.query.set_id as string);
            });
        }

        if (this.query.ink) {
            this.filtered = this.filtered.filter((card: Card | CharacterCard) => {
                return filterByString(card.ink, this.query.ink as string);
            });
        }

        return this;
    }

    toJSON() {
        return JSON.stringify(this.filtered);
    }
}
