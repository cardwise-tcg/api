import {CardSet} from './CardSet';

export enum Ink {
    amber = 'Amber',
    amethyst = 'Amethyst',
    emerald = 'Emerald',
    ruby = 'Ruby',
    sapphire = 'Sapphire',
    steel = 'Steel'
}

export enum Rarity {
    common = 'Common',
    uncommon = 'Uncommon',
    rare = 'Rare',
    superRare = 'Super Rare',
    legendary = 'Legendary',
    enchanted = 'Enchanted',
    promo = 'Promo'
}

export enum CardTypes {
    character = 'Character',
    item = 'Item',
    action = 'Action',
    song = 'Song'
}


export type Card = {
    flavorText: string | null;
    ink: Ink;
    inkCost: number;
    inkable: boolean;
    keywords: string[];
    name: string;
    number: number,
    rarity: Rarity;
    set: CardSet;
    text: string | null;
    types: CardTypes[];
}
