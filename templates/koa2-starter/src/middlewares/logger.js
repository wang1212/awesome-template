/**
 * App logger
 */
import process from 'process';
import log4js from 'koa-log4';

// see .env file
const { NODE_ENV } = process.env;

/**
 * Get logger Middleware
 *
 * @returns
 */
export default function getLoggerMiddleware() {
  return log4js.koaLogger(log4js.getLogger(NODE_ENV === 'production' ? 'access' : 'console'), { level: 'auto' });
}
