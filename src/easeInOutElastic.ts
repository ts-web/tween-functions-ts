
/**
 * @param t the current elapsed time, between 0 and `d` (duration)
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInOutElastic = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let s = 1.70158;
  let p = 0;
  let a = _c;
  let _t = t;
  if (_t === 0) {
    return b;
  } else if ((_t /= d / 2) === 2) {
    return b + _c;
  }
  if (!p) {
    p = d * (0.3 * 1.5);
  }
  if (a < Math.abs(_c)) {
    a = _c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(_c / a);
  }
  if (_t < 1) {
    return -0.5 * (a * Math.pow(2, 10 * (_t -= 1)) * Math.sin((_t * d - s) * (2 * Math.PI) / p)) + b;
  } else {
    return a * Math.pow(2, -10 * (_t -= 1)) * Math.sin((_t * d - s) * (2 * Math.PI) / p) * 0.5 + _c + b;
  }
};
