/**
 * app
 */
import process from 'process';
import Koa from 'koa';
import helmet from 'koa-helmet';
import { getLogger } from './utils/log4j';
import getLoggerMiddleware from './middlewares/logger';
import rootRouter from './router';

// see .env file
const { BASE_URL = '/api' } = process.env;
const app = new Koa();

export default app;

// * logs
app.use(getLoggerMiddleware());
// see @types/index.d.ts file
app.context.logger = getLogger();

// * security
app.use(helmet());

// * routers
rootRouter.prefix(BASE_URL);
app.use(rootRouter.routes()).use(rootRouter.allowedMethods());

// * handle app error
app.on('error', (error: Error, ctx: Koa.Context) => {
  getLogger('error').error(error.message, ctx.request);

  // TODO
});
