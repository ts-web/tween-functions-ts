
/**
 * @param t the current elapsed time, between 0 and `d` (duration)
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInOutQuad = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  if ((_t /= d / 2) < 1) {
    return _c / 2 * _t * _t + b;
  } else {
    return -_c / 2 * ((--_t) * (_t - 2) - 1) + b;
  }
};
