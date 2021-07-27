/**
 * App logger
 */
import process from 'process';
import log4js from 'koa-log4';
import path from 'path';

// * see .env file
const { NODE_ENV } = process.env;

// config
// https://log4js-node.github.io/log4js-node/api.html
log4js.configure({
  appenders: {
    // * server request logs
    access: {
      type: 'dateFile',
      filename: path.join(process.cwd(), 'logs/', 'access.log'),
      // eslint-disable-next-line sonarjs/no-duplicate-string
      // pattern: '-yyyy-MM-dd',
      alwaysIncludePattern: false,
      daysToKeep: 180,
      keepFileExt: true,
    },
    // * server request error logs
    error: {
      type: 'dateFile',
      filename: path.join(process.cwd(), 'logs/', 'errors.log'),
      // pattern: '-yyyy-MM-dd',
      alwaysIncludePattern: false,
      daysToKeep: 90,
      keepFileExt: true,
    },
    // * app logs
    app: {
      type: 'dateFile',
      filename: path.join(process.cwd(), 'logs/', 'app.log'),
      // pattern: '-yyyy-MM-dd',
      alwaysIncludePattern: false,
      daysToKeep: 90,
      keepFileExt: true,
    },
    console: {
      type: 'console',
    },
  },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
    access: { appenders: ['access'], level: 'info' },
    error: { appenders: ['error'], level: 'error' },
    app: { appenders: ['app'], level: 'info' },
  },
});

/**
 * Get logger
 *
 * @param {'app' | 'error'} [type]
 * @returns
 */
export function getLogger(type = 'app') {
  return log4js.getLogger(NODE_ENV === 'production' ? type : 'console');
}

/**
 * Get logger Middleware
 *
 * @returns
 */
export default function getLoggerMiddleware() {
  return log4js.koaLogger(log4js.getLogger(NODE_ENV === 'production' ? 'access' : 'console'), { level: 'auto' });
}
