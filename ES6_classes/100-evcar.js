/**
 * class that can clone an instance of the class. the cloned instance will be
 * an instance of the parent class instead of this class
 */

import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
