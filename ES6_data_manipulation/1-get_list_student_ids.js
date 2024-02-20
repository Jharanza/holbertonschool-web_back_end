/**
 * Function that returns an array with the id's of a list of objects
 * @value value of each object
 * @index index of each object
 * @arr each object
 * @export getListStudentIds
 * @param {Array} idArray
 * @returns an array with ids of the objects
 */

export default function getListStudentIds(idArray) {
  if (!Array.isArray(idArray)) return [];

  return idArray.map((value, index, arr) => arr[index].id);
}
