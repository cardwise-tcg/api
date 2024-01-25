import {Card} from './Card';
import {CharacterCard} from './CharacterCard';
import {CardSet} from './CardSet';

export type Data = {
    cards: Card[] & CharacterCard[];
    sets: CardSet[]
};
