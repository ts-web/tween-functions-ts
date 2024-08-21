
/**
 * @param t the current elapsed time, between 0 and `d` (duration)
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeOutElastic = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  let s = 1.70158;
  let p = 0;
  let a = _c;
  if (_t === 0) {
    return b;
  } else if ((_t /= d) === 1) {
    return b + _c;
  }
  if (!p) {
    p = d * 0.3;
  }
  if (a < Math.abs(_c)) {
    a = _c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(_c / a);
  }
  return a * Math.pow(2, -10 * _t) * Math.sin((_t * d - s) * (2 * Math.PI) / p) + _c + b;
};
