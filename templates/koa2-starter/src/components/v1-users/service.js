/**
 * users service
 * @version 1.0
 */
import { User } from '../../@jsdoc/User.type.js'; // eslint-disable-line

/**
 * Users find
 * @returns {Promise<User[]>}
 */
export async function find() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: 'user1' }, { name: 'user2' }]);
    }, 1e3 * 1);
  });
}

export default {
  find,
};
