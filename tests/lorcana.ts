import {assert} from 'chai';
import Lorcana from "../src/http/lorcana/Lorcana";
import Cards from "../src/http/lorcana/endpoints/Cards";
import {CharacterCard} from "../src/http/lorcana/types/CharacterCard";
import {CardTypes} from "../src/http/lorcana/types/Card";

const lorcana = new Lorcana();
describe('Lorcana', function () {
    it('should return all sets in proper format', function () {
        lorcana.getData().sets.forEach((set) => {
            assert.containsAllKeys(set, ['key', 'name', 'number']);

            assert.isString(set.key);
            assert.isString(set.name);
            assert.isNumber(set.number);

        });
    });

    it('should filter cards by name', function () {
        const cards = (new Cards(lorcana.getData().cards, {name: 'Ariel'})).filter();
        cards.getFiltered().forEach((card) => {
            assert.include(card.name, 'Ariel');
        });
    });

    it('should filter cards by name and version', function () {
        const cards = (new Cards(lorcana.getData().cards, {name: 'Ariel On Human Legs'})).filter();
        cards.getFiltered().forEach((card: CharacterCard) => {
            assert.include(card.name, 'Ariel');
            assert.include(card.version, 'On Human Legs');
        });
    });

    it('should filter cards by set', function () {
        const cards = (new Cards(lorcana.getData().cards, {set_key: 'ink'})).filter();
        cards.getFiltered().forEach((card: CharacterCard) => {
            assert.equal(card.set.key, 'ink');
        });
    });

    it('should filter cards by ink', function () {
        const cards = (new Cards(lorcana.getData().cards, {ink: 'Emerald'})).filter();
        cards.getFiltered().forEach((card: CharacterCard) => {
            assert.equal(card.ink, 'Emerald');
        });
    });

    it('should filter cards by type', function () {
        const cards = (new Cards(lorcana.getData().cards, {type: 'Item'})).filter();
        cards.getFiltered().forEach((card: CharacterCard) => {
            assert.include(card.types, CardTypes.item);
        });
    });
});
