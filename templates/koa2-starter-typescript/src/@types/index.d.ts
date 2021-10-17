/* eslint-disable no-unused-vars */
/**
 * type definition merge
 * @see https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html#testing-your-types
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html
 */
import log4js from 'koa-log4';

declare module 'koa' {
  interface DefaultContext {
    logger: log4js.Logger;
  }
}
