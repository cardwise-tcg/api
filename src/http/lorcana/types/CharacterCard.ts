import {Card} from './Card';

export type CharacterCard = {
    type: 'Character';
    classifications: string[];
    lore: number,
    strength: number;
    version: string;
    willpower: number;
} & Card;
