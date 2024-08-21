
/**
 * @param t the current elapsed time, between 0 and `d` (duration)
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeOutQuad = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  return -_c * (_t /= d) * (_t - 2) + b;
};
