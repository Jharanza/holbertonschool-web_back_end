/**
 * Implement a class with getters and setters
 * @name attribute of type string
 * @length attribute of type int
 * @students an array of strings
 */

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;

    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;

    if (!Array.isArray(students) || students.every((student) => typeof student !== 'string')) {
      throw TypeError('Students must be an Array with string elements');
    }
    this._students = students;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
