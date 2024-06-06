import {Data} from "../lorcana/types/Data";

export default abstract class TradingCardGame {
    /**
     * The data for all cards and sets.
     *
     * @private
     */
    protected data: Data;

    constructor() {
        this.load();
    }

    /**
     * Loads the data for the game.
     *
     * @return {void}
     */
    abstract load(): void;


    /**
     * Returns an object of all cards and sets.
     *
     * @returns {Data}
     */
    abstract getData(): Data;

    /**
     * Returns the data for the game.
     *
     * @returns {Data}
     */
    public setData(data: Data): void {
        this.data = data;
    }
}
