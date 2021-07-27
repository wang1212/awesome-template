/**
 * users controller
 * @version 1.0
 */
import { KoaContext } from '../../@jsdoc/koa.type.js'; // eslint-disable-line no-unused-vars
import * as service from './service.js';

/**
 * Users get
 * @param {KoaContext} ctx
 */
export async function get(ctx) {
  ctx.body = await service.find();

  // log
  ctx.logger.debug('access v1/users api.');
}

export default {
  get,
};
