
/**
 * @param t the current elapsed time, between 0 and `d` (duration)
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeOutQuart = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  return -_c * ((_t = _t / d - 1) * _t * _t * _t - 1) + b;
};
