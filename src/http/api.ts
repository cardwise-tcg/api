import Koa from 'koa';
import Router from 'koa-router';
import Lorcana from './lorcana/Lorcana';
import {default as LorcanaCards} from './lorcana/endpoints/Cards';
import {ValidationError} from "./errors/ValidationError";

const port = 3000;
const app = new Koa;
const router = new Router;

router.use(['/lorcana'], async (ctx, next) => {
    ctx.state.lorcana = new Lorcana;
    await next();
});

router.get('/lorcana/cards', async ctx => {
    try {

        ctx.body = (new LorcanaCards(ctx.state.lorcana.getData().cards, ctx.query))
            .filter()
            .toJSON();

    } catch (e) {
        if (e instanceof ValidationError) {
            ctx.status = 400;
            ctx.body = e.toJSON();
        }
        throw e;
    }
});

router.get('/lorcana/sets', async ctx => {
    ctx.body = "Sets";
});

app.use(router.routes());

app.listen(port, () => console.log(`Server listening on port ${port}`));

