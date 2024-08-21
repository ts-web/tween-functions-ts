
/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInOutExpo = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  if (_t === 0) {
    return b;
  }
  if (_t === d) {
    return b + _c;
  }
  if ((_t /= d / 2) < 1) {
    return _c / 2 * Math.pow(2, 10 * (_t - 1)) + b;
  } else {
    return _c / 2 * (-Math.pow(2, -10 * --_t) + 2) + b;
  }
};
