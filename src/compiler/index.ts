import LorcanaConfig from '../data/lorcana';
import * as fs from "fs";

const LORCANA_DATA_INPUT_DIR = `${process.cwd()}/src/data/lorcana`;
const LORCANA_DATA_OUTPUT_DIR = `${process.cwd()}/src/http/lorcana`;

(async () => {
    let data = {sets: [], cards: []};

    for await(const set of LorcanaConfig.sets) {
        console.info(`Processing set: ${set}...`);

        const json = (await import(`${LORCANA_DATA_INPUT_DIR}/${set}.json`)) as string;
        data.sets.push(json);

        const cards = (fs.readdirSync(`${LORCANA_DATA_INPUT_DIR}/${set}`));
        console.log(cards);

        for await (const card of cards) {
            console.info(`Processing card: ${card}...`);

            const json = (await import(`${LORCANA_DATA_INPUT_DIR}/${set}/${card}`)) as string;
            data.cards.push(json);
        }
    }

    console.info('Finished building Lorcana data.');
    console.info('Saving to disk...');

    fs.writeFileSync(
        `${LORCANA_DATA_OUTPUT_DIR}/all.json`,
        JSON.stringify(data),
        {encoding: 'utf8', flag: 'w'}
    );
})();
