/**
 * Check if all elements in an aaray exist within a set
 * @value an elemet within the array
 * @export hasValuesFromArray
 * @param {set} set
 * @param {array} array
 * @returns true if all the elements of the array exists within the set or false
 */

export default function hasValuesFromArray(set, array) {
  for (const value of array) {
    if (!set.has(value)) return false;
  }

  return true;
}
