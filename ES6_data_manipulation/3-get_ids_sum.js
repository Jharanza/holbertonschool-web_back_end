/**
 * Receive an array and return the sum of the id's of each object
 * @sum is the sum of the id's
 * @student each object of the array
 * @export getStudentIdsSum
 * @param {Array} studentArray
 * @returns the sum of the id's of the objects
 */

export default function getStudentIdsSum(studentArray) {
  if (!Array.isArray(studentArray)) return [];
  return studentArray.reduce((sum, student) => sum + student.id, 0);
}
