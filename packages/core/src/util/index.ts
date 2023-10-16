import * as crypto from 'crypto'
/**
 * generate a lightweight 32 bit random id, enough for ioc container
 */
export function generateRandomId(): string {
  // => f9b327e70bbcf42494ccb28b2d98e00e
  return crypto.randomBytes(16).toString('hex');
}
export const isDevelopmentEnvironment = env => {
  return ['local', 'test', 'unittest'].includes(env);
};
export function getUserHome() {
  return process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
}
export function merge(target: any, src: any) {
  if (!target) {
    target = src;
    src = null;
  }
  if (!target) {
    return null;
  }
  if (Array.isArray(target)) {
    return target.concat(src || []);
  }
  if (typeof target === 'object') {
    return Object.assign({}, target, src);
  }
  throw new Error('can not merge meta that type of ' + typeof target);
}
export const getCurrentEnvironment = () => {
  return process.env['MIDWAY_SERVER_ENV'] || process.env['NODE_ENV'] || 'prod';
};
/**
 *  @example
 *  safelyGet(['a','b'],{a: {b: 2}})  // => 2
 *  safelyGet(['a','b'],{c: {b: 2}})  // => undefined
 *  safelyGet(['a','1'],{a: {"1": 2}})  // => 2
 *  safelyGet(['a','1'],{a: {b: 2}})  // => undefined
 *  safelyGet('a.b',{a: {b: 2}})  // => 2
 *  safelyGet('a.b',{c: {b: 2}})  // => undefined
 *  @since 2.0.0
 */
export function safelyGet(
  list: string | string[],
  obj?: Record<string, unknown>
): any {
  if (arguments.length === 1) {
    return (_obj: Record<string, unknown>) => safelyGet(list, _obj);
  }

  if (typeof obj === 'undefined' || typeof obj !== 'object' || obj === null) {
    return void 0;
  }
  const pathArrValue = typeof list === 'string' ? list.split('.') : list;
  let willReturn: any = obj;

  for (const key of pathArrValue) {
    if (typeof willReturn === 'undefined' || willReturn === null) {
      return void 0;
    } else if (typeof willReturn !== 'object') {
      return void 0;
    }
    willReturn = willReturn[key];
  }

  return willReturn;
}

export const Utils = {
  generateRandomId,
};