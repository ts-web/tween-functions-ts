
/**
 * @param t the current elapsed time, between 0 and `d` (duration)
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInOutCirc = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  if (t < 1) {
    const _t = t / (d / 2);
    return -_c / 2 * (Math.sqrt(1 - _t * _t) - 1) + b;
  } else {
    const _t = t - 2;
    return _c / 2 * (Math.sqrt(1 - _t * _t) + 1) + b;
  }
};
