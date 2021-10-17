/**
 * users service
 * @version 1.0
 */
/**
 * Users find
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
//# sourceMappingURL=service.js.map