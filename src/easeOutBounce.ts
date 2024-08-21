
/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeOutBounce = function (_t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let t = _t;
  if ((t /= d) < 1 / 2.75) {
    return _c * (7.5625 * t * t) + b;
  } else if (t < 2 / 2.75) {
    return _c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
  } else if (t < 2.5 / 2.75) {
    return _c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
  } else {
    return _c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
  }
};
