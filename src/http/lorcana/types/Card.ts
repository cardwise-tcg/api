import {CardSet} from './CardSet';

export type Card = {
    flavorText: string | null;
    ink: "Amber" | "Amethyst" | "Emerald" | "Ruby" | "Sapphire" | "Steel";
    inkCost: number;
    inkable: boolean;
    keywords: string[];
    name: string;
    number: number,
    rarity: "Common" | "Uncommon" | "Rare" | "Super Rare" | "Legendary" | "Enchanted" | "Promo";
    set: CardSet;
    text: string | null;
    type: "Character" | "Item" | "Action";
    types: ["Action", "Song", "Item", "Character"];
}
