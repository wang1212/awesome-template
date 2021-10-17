/**
 * users service
 * @version 1.0
 */

type User = {
  name: string;
};

/**
 * Users find
 */
export async function find(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: 'user1' }, { name: 'user2' }]);
    }, 1e3 * 1);
  });
}

export default {
  find,
};
