
/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 * @param s ???
 */
export const easeInOutBack = function (t: number, b: number, c: number, d: number, s?: number): number {
  const _c = c - b;
  let _t = t;
  let _s = s;
  if (_s === void 0) {
    _s = 1.70158;
  }
  if ((_t /= d / 2) < 1) {
    return _c / 2 * (_t * _t * (((_s *= 1.525) + 1) * _t - _s)) + b;
  } else {
    return _c / 2 * ((_t -= 2) * _t * (((_s *= 1.525) + 1) * _t + _s) + 2) + b;
  }
};
