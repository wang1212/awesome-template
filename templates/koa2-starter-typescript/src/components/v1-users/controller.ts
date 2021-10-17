/**
 * users controller
 * @version 1.0
 */
import Koa from 'koa';
import * as service from './service';

/**
 * Users get
 */
export async function get(ctx: Koa.DefaultContext) {
  ctx.body = await service.find();

  // log
  ctx.logger.debug('access v1/users api.');
}

export default {
  get,
};
