import {Card} from './Card';
import {CharacterCard} from './CharacterCard';
import {CardSet} from './CardSet';
import {LocationCard} from "./LocationCard";

export type Data = {
    cards: Card[] & (CharacterCard[] | LocationCard[]);
    sets: CardSet[]
};
