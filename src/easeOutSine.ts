
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