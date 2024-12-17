import type { IsFunction } from './types';

const isFunction: IsFunction = fn => typeof fn === 'function';

export default isFunction;
