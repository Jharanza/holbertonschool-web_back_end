/**
 * function that return the division between numerator and denominator
 * Throw error if denominator is equal to 0
 * @export divideFunction
 * @param {number} numerator
 * @param {number} denominator
 * @returns the division between numerator and denominator
 */

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) throw Error('cannot divide by 0');
  return numerator / denominator;
}
