
// From https://github.com/chenglou/tween-functions/blob/e3d5f1edf2cdb9b7b623be4d1064f886136a70b3/index.js

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const linear = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  return _c * t / d + b;
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInQuad = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  return _c * (_t /= d) * _t + b;
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeOutQuad = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  return -_c * (_t /= d) * (_t - 2) + b;
};

/**
 * @param t current time
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

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInCubic = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  return _c * (_t /= d) * _t * _t + b;
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeOutCubic = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  return _c * ((_t = _t / d - 1) * _t * _t + 1) + b;
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInOutCubic = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  if ((_t /= d / 2) < 1) {
    return _c / 2 * _t * _t * _t + b;
  } else {
    return _c / 2 * ((_t -= 2) * _t * _t + 2) + b;
  }
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInQuart = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  return _c * (_t /= d) * _t * _t * _t + b;
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeOutQuart = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  return -_c * ((_t = _t / d - 1) * _t * _t * _t - 1) + b;
};

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

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInQuint = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  return _c * (_t /= d) * _t * _t * _t * _t + b;
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeOutQuint = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  return _c * ((_t = _t / d - 1) * _t * _t * _t * _t + 1) + b;
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInOutQuint = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  let _t = t;
  if ((_t /= d / 2) < 1) {
    return _c / 2 * _t * _t * _t * _t * _t + b;
  } else {
    return _c / 2 * ((_t -= 2) * _t * _t * _t * _t + 2) + b;
  }
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInSine = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  return -_c * Math.cos(t / d * (Math.PI / 2)) + _c + b;
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeOutSine = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  return _c * Math.sin(t / d * (Math.PI / 2)) + b;
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInOutSine = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  return -_c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInExpo = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  return (t==0) ? b : _c * Math.pow(2, 10 * (t/d - 1)) + b;
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeOutExpo = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  return (t==d) ? b+_c : _c * (-Math.pow(2, -10 * t/d) + 1) + b;
};

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

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInCirc = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  const _t = t / d;
  return -_c * (Math.sqrt(1 - _t * _t) - 1) + b;
};

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeOutCirc = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  const _t = t / d - 1;
  return _c * Math.sqrt(1 - _t * _t) + b;
};

/**
 * @param t current time
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

/**
 * @param t current time
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

/**
 * @param t current time
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

/**
 * @param t current time
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

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 * @param s ???
 */
export const easeInBack = function (t: number, b: number, c: number, d: number, s?: number): number {
  const _c = c - b;
  let _t = t;
  let _s = s;
  if (_s === void 0) {
    _s = 1.70158;
  }
  return _c * (_t /= d) * _t * ((_s + 1) * _t - _s) + b;
};

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

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInBounce = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  const v = easeOutBounce(d - t, 0, _c, d);
  return _c - v + b;
};

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

/**
 * @param t current time
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInOutBounce = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  if (t < d / 2) {
    const v = easeInBounce(t * 2, 0, _c, d);
    return v * 0.5 + b;
  } else {
    const v = easeOutBounce(t * 2 - d, 0, _c, d);
    return v * 0.5 + _c * 0.5 + b;
  }
};
