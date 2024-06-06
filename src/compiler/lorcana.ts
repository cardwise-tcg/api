import * as fs from 'fs';
import LorcanaConfig from '../data/lorcana';

const LORCANA_DATA_INPUT_DIR = `${process.cwd()}/src/data/lorcana`;
const LORCANA_DATA_OUTPUT_DIR = `${process.cwd()}/src/http/lorcana`;


export const compile = (async () => {
    const data = {sets: [], cards: []};

    for await(const set of LorcanaConfig.sets) {
        console.info(`Processing set: ${set}...`);

        const json = JSON.parse(fs.readFileSync(`${LORCANA_DATA_INPUT_DIR}/${set}.json`, 'utf8'));
        data.sets.push(json);

        const cards = (fs.readdirSync(`${LORCANA_DATA_INPUT_DIR}/${set}`));

        for await (const card of cards) {
            console.info(`Processing card: ${card}...`);

            const json = JSON.parse(fs.readFileSync(`${LORCANA_DATA_INPUT_DIR}/${set}/${card}`, 'utf8'));
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
});
