
/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 * @param s ???
 */
export const easeOutBack = function (t: number, b: number, c: number, d: number, s?: number): number {
  const _c = c - b;
  let _t = t;
  let _s = s;
  if (_s === void 0) {
    _s = 1.70158;
  }
  return _c * ((_t = _t / d - 1) * _t * ((_s + 1) * _t + _s) + 1) + b;
};
