/**
 * Function that returns the objects that are located in a specific ity
 * @value each object
 * @export getStudentsByLocation
 * @param {array} getListStudents
 * @param {string} city
 * @returns an array with the objects that are located in a specific city
 */

export default function getStudentsByLocation(getListStudents, city) {
  if (!Array.isArray(getListStudents)) return [];
  if (typeof city !== 'string') return 'City must be a string';

  return getListStudents.filter((value) => value.location === city);
}
