/**
 * class that implement a default description
 * @name argument type string
 * @code argument type string
 * @toString method with a default string
 */

export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw TypeError();
    }
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
