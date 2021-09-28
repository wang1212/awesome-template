/**
 * users service
 * @version 1.0
 */
// import { User } from ; // eslint-disable-line

/**
 * Users find
 * @returns {Promise<import('../../@jsdoc/User.type').User[]>}
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
