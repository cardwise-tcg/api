import * as fs from 'fs';
import TradingCardGame from '../utilities/TradingCardGame';
import {Data} from './types/Data';
import {DataError} from '../errors/DataError';

const JSON_PATH = 'src/http/lorcana/all.json';

export default class Lorcana extends TradingCardGame {

    /**
     * The data for all cards and sets.
     *
     * @private
     */
    private data: Data;

    /**
     * @inheritDoc
     */
    load(): void {
        if (!fs.existsSync(JSON_PATH)) {
            throw new DataError('Lorcana data not found.');
        }

        this.data = JSON.parse(
            fs.readFileSync(JSON_PATH, 'utf8')
        ) as Data;
    }


    /**
     * Returns an object of all cards and sets.
     *
     * @returns {Data}
     */
    getData(): Data {
        return this.data;
    }
}
