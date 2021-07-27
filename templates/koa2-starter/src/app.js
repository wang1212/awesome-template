/**
 * app
 */
import process from 'process';
import http from 'http'; // eslint-disable-line no-unused-vars
import Koa from 'koa';
import helmet from 'koa-helmet';
import log4js, { getLogger } from './utils/log4j.js';
import getLoggerMiddleware from './middlewares/logger.js';
import rootRouter from './router.js';

// see .env file
const { PORT = 3000, HOST = '0.0.0.0', BASE_URL = '/api' } = process.env;
const app = new Koa();

export default app;

// * logs
app.use(getLoggerMiddleware());
// @type see @jsdoc/koa.type.js file
app.context.logger = getLogger();

// * security
app.use(helmet());

// * routers
rootRouter.prefix(BASE_URL);
app.use(rootRouter.routes()).use(rootRouter.allowedMethods());

// * handle app error
app.on('error', (error, ctx) => {
  getLogger('error').error(error.message, ctx.request);

  // TODO
});

// * handle process error
// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
// https://learnk8s.io/graceful-shutdown
// https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/
// https://medium.com/@becintec/building-graceful-node-applications-in-docker-4d2cd4d5d392
function gracefulShutdown() {
  getLogger().info('Closing http server.');

  // https://nodejs.org/dist/latest/docs/api/net.html#net_server_close_callback
  // eslint-disable-next-line no-use-before-define
  server.close(() => {
    getLogger().info('Http server closed.');

    // https://log4js-node.github.io/log4js-node/dateFile.html
    log4js.shutdown();

    // TODO

    // eslint-disable-next-line no-process-exit
    process.exit(0);
  });

  // ! if after
  setTimeout(() => {
    getLogger().error('Could not close connections in time, forcefully shutting down.');
    // eslint-disable-next-line no-process-exit
    process.exit(0);
  }, 1e3 * 30);
}

// https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/errorhandling/catchunhandledpromiserejection.md
process.on('unhandledRejection', (reason /* , p */) => {
  // I just caught an unhandled promise rejection,
  // since we already have fallback handler for unhandled errors (see below),
  // let throw and let him handle that
  throw reason;
});

// https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/errorhandling/shuttingtheprocess.md
// https://nodejs.org/dist/latest/docs/api/process.html#process_event_uncaughtexception
process.on('uncaughtException', (/* error, origin */) => {
  // https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/errorhandling/operationalvsprogrammererror.md
  // TODO
});

// https://nodejs.org/dist/latest/docs/api/process.html#process_signal_events
// listen for TERM signal .e.g. kill
process.on('SIGTERM', () => {
  getLogger().info('SIGTERM signal received.');
  gracefulShutdown();
});

// listen for INT signal e.g. Ctrl-C
process.on('SIGINT', () => {
  getLogger().info('SIGINT signal received.');
  gracefulShutdown();
});

/** @type {http.Server} */
let server;

async function start() {
  try {
    server = await app.listen(PORT, HOST);

    getLogger().info(`Server running on http://${HOST}:${PORT}${BASE_URL} ...`);
  } catch (e) {
    getLogger().error(e);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
}

start();
