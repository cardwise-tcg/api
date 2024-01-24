import {Card} from './Card';
import {CharacterCard} from './CharacterCard';
import {CardSet} from './CardSet';

export type Collection = {
    cards: Card[] & CharacterCard[];
    sets: CardSet[]
};
