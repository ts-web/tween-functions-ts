import { easeOutBounce } from './easeOutBounce';

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInBounce = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  const v = easeOutBounce(d - t, 0, _c, d);
  return _c - v + b;
};
