/**
 * users controller
 * @version 1.0
 */
import * as service from './service';
/**
 * Users get
 */
export async function get(ctx) {
    ctx.body = await service.find();
    // log
    ctx.logger.debug('access v1/users api.');
}
export default {
    get,
};
//# sourceMappingURL=controller.js.map