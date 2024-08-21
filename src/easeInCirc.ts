
/**
 * @param t the current elapsed time, between 0 and `d` (duration)
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInCirc = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  const _t = t / d;
  return -_c * (Math.sqrt(1 - _t * _t) - 1) + b;
};
