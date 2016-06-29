/**
 * Created by liujia on 2016/6/29.
 */

import Koa from 'koa'
const app = new Koa()

app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    ctx.body={a:'sadsadas'}
});

app.listen(3000, () => console.log('server started 3000'))

export default app

