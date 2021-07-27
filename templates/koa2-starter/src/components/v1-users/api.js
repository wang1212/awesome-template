/**
 * users router
 * @version 1.0
 */
import Router from '@koa/router';
import * as controller from './controller.js';

const router = new Router({ prefix: '/v1/users' });

router.get('/', controller.get);

export default router;
