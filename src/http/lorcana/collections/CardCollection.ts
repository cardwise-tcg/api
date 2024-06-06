import {Card, CardTypes, Ink} from '../types/Card';
import {CharacterCard} from '../types/CharacterCard';
import {filterByString, filterByStringArray} from '../../utilities/filters';
import {LocationCard} from "../types/LocationCard";

export default class CardCollection {
    private cards: Card[] | CharacterCard[] | LocationCard[];

    /**
     * CardCollection provides an easy way to filter cards by name, ink, and set key.
     *
     * @param cards
     */
    constructor(cards: Card[] | CharacterCard[] | LocationCard[]) {
        this.cards = cards;
    }

    /**
     * Filters the cards by name, includes the version for character cards.
     *
     * @param name
     *
     * @returns {CardCollection}
     */
    filterByName(name: string | string[]): CardCollection {
        this.cards = this.cards.filter((card: Card & (CharacterCard | LocationCard)) => {
            let compositeName = card.name;
            if (card.types.includes(CardTypes.character) || card.types.includes(CardTypes.location)) {
                compositeName += ` - ${card.version}`
            }
            compositeName = compositeName.toLowerCase();
            if (!Array.isArray(name))
                return filterByString(compositeName, name as string);
            return filterByStringArray(compositeName, name as string[]);
        });

        return this;
    }

    /**
     * Filters the cards by ink.
     *
     * @param ink
     *
     * @returns {CardCollection}
     */
    filterByInk(ink: Ink | Ink[]): CardCollection {
        this.cards = this.cards.filter((card: Card & (CharacterCard | LocationCard)) => {
            if (!Array.isArray(ink))
                return filterByString(card.ink, ink as string);
            return filterByStringArray(card.ink, ink as string[]);
        });

        return this;
    }


    /**
     * Filters the cards by set key.
     *
     * @param setKey
     *
     * @returns {CardCollection}
     */
    filterBySetKey(setKey: string | string[]): CardCollection {
        this.cards = this.cards.filter((card: Card & (CharacterCard | LocationCard)) => {
            if (!Array.isArray(setKey))
                return filterByString(card.set.key, setKey as string);
            return filterByStringArray(card.set.key, setKey as string[]);
        });

        return this;
    }

    /**
     * Returns the cards.
     *
     * @returns {Card[] | CharacterCard[] | LocationCard[]}
     */
    getCards(): Card[] | CharacterCard[] | LocationCard[] {
        return this.cards;
    }
}
