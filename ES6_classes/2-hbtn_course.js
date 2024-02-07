/**
 * Implement a class with getters and setters
 * @name attribute of type string
 * @length attribute of type int
 * @students an array of strings
 */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if ((Array.isArray(students)) && (students.every((element) => typeof element === 'string'))) {
      this._students = students;
    } else {
      throw TypeError('Students must be an Array with strings elements');
    }
  }

  get students() {
    return this._students;
  }
}
