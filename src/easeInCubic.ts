
/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInCubic = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  return _c * (_t /= d) * _t * _t + b;
};
