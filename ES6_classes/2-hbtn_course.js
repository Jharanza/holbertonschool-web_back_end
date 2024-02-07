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
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }    
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (!Array.isArray(students) || students.every((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an Array with string elements');
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
