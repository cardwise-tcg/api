import Koa from 'koa';
import Router from 'koa-router';
import Lorcana from './lorcana/Lorcana';
import {ValidationError} from './utilities/ValidationError';

const port = 3000;
const app = new Koa;
const router = new Router;

router.get('/lorcana', async (ctx) => {
    try {
        ctx.body = (new Lorcana(ctx.request.query))
            .applyFilters()
            .toJSON();
    } catch (error) {
        if (error instanceof ValidationError) {
            ctx.body = error.toJSON();
        }
    }
});

app.use(router.routes());

app.listen(port, () => console.log(`Server listening on port ${port}`));

