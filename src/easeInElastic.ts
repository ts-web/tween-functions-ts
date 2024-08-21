
/**
 * @param t the current elapsed time, between 0 and `d` (duration)
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInElastic = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let s = 1.70158;
  let p = 0;
  let a = _c;
  if (t === 0) {
    return b;
  }
  let _t = t / d;
  if (_t === 1) {
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
  _t -= 1;
  return -(a * Math.pow(2, 10 * _t) * Math.sin((_t * d - s) * (2 * Math.PI) / p)) + b;
};
