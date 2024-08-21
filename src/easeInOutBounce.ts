import { easeInBounce } from './easeInBounce';
import { easeOutBounce } from './easeOutBounce';

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInOutBounce = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  if (t < d / 2) {
    const v = easeInBounce(t * 2, 0, _c, d);
    return v * 0.5 + b;
  } else {
    const v = easeOutBounce(t * 2 - d, 0, _c, d);
    return v * 0.5 + _c * 0.5 + b;
  }
};
