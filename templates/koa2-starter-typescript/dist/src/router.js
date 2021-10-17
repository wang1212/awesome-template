/**
 * root router
 */
import Router from '@koa/router';
import { router as userRouter } from './components/v1-users/index';
const rootRouter = new Router();
rootRouter.get('/', async (ctx, next) => {
    ctx.body = { hello: 'world!' };
    await next();
});
// * routers
rootRouter.use(userRouter.routes()).use(userRouter.allowedMethods());
export default rootRouter;
//# sourceMappingURL=router.js.map