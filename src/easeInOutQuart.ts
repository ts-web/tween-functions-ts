
/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInOutQuart = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  if ((_t /= d / 2) < 1) {
    return _c / 2 * _t * _t * _t * _t + b;
  } else {
    return -_c / 2 * ((_t -= 2) * _t * _t * _t - 2) + b;
  }
};
