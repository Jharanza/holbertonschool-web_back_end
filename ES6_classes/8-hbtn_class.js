/**
 * class that implement a method to accept cast values
 * @size arg type number
 * @location arg type string
 * @Symbol.toPrimitive method to customize objects
 * @hint parameter that can have three values 'string', 'number' or 'default'
 */

export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw TypeError();
    if (typeof location !== 'string') throw TypeError();
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    }
    if (hint === 'number') {
      return this._size;
    }
    return undefined;
  }
}
