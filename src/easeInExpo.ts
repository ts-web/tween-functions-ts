
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
