import * as Koa from "koa";

const app = new Koa();

app.use(ctx => ctx.body = 'hello world');

app.listen(3000);