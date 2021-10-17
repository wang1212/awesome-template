/**
 * users router
 * @version 1.0
 */
import Router from '@koa/router';
import * as controller from './controller';
export const PREFIX = '/v1/users';
const router = new Router({ prefix: PREFIX });
router.get('/', controller.get);
export default router;
//# sourceMappingURL=api.js.map