/* eslint-disable no-unused-vars */
/**
 * type definition
 */
import Koa from 'koa';
import log4js from 'koa-log4';

/**
 * type definition
 * @typedef {Object} EnhanceContext
 * @property {log4js.Logger} logger
 */

/**
 * @typedef {Koa.BaseContext & Koa.DefaultContext & EnhanceContext} KoaContext
 */
export const KoaContext = null;

export default {
  KoaContext,
};
