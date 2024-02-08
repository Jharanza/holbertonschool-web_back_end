/**
 * class with a method that clone an instance
 * @cloneCar method constructor that returns a clone of the class
 */

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const NewCar = this.constructor[Symbol.species];
    return new NewCar();
  }
}
