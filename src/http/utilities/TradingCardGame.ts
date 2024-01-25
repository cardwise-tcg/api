export default abstract class TradingCardGame {
    constructor() {
        this.load();
    }

    /**
     * Loads the data for the game.
     *
     * @return {void}
     */
    abstract load(): void;
}
