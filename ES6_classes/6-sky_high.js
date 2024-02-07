/**
 * class that implement an abstract method that inherite from the class Building
 * @floors arg that returns the numbers of floors
 */

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  set floors(floors) {
    if (typeof floors !== 'number') {
      throw TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
