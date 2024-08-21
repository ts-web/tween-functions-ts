
/**
 * @param t the current elapsed time, between 0 and `d` (duration)
 * @param b beginning value
 * @param c final value
 * @param d total duration
 */
export const easeInSine = function (t: number, b: number, c: number, d: number): number {
  const _c = c - b;
  return -_c * Math.cos(t / d * (Math.PI / 2)) + _c + b;
};
