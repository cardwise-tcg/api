import {Card} from './Card';

export type CharacterCard = {
    classifications: string[];
    lore: number,
    strength: number;
    type: 'Character';
    version: string;
    willpower: number;
} & Card;
