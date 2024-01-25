import {Card, CardTypes, Ink} from '../types/Card';
import {CharacterCard} from '../types/CharacterCard';
import {filterByString, filterByStringArray} from '../../utilities/filters';

export default class CardCollection {
    private cards: Card[] | CharacterCard[];

    /**
     * CardCollection provides an easy way to filter cards by name, ink, and set key.
     *
     * @param cards
     */
    constructor(cards: Card[] | CharacterCard[]) {
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
        this.cards = this.cards.filter((card: Card & CharacterCard) => {
            let compositeName = card.name;
            if (card.types.includes(CardTypes.character)) {
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
        this.cards = this.cards.filter((card: Card & CharacterCard) => {
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
        this.cards = this.cards.filter((card: Card & CharacterCard) => {
            if (!Array.isArray(setKey))
                return filterByString(card.set.key, setKey as string);
            return filterByStringArray(card.set.key, setKey as string[]);
        });

        return this;
    }

    /**
     * Returns the cards.
     *
     * @returns {Card[] | CharacterCard[]}
     */
    getCards(): Card[] | CharacterCard[] {
        return this.cards;
    }
}
