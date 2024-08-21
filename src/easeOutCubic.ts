
/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeOutCubic = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  return _c * ((_t = _t / d - 1) * _t * _t + 1) + b;
};
