import {Card} from './Card';

export type LocationCard = {
    type: 'Location';
    lore: number,
    move_cost: number;
    version: string;
} & Card;
