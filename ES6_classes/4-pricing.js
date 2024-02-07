/**
 * Implement a class that use the class created before
 * @Currency the class that was created before
 * @amount attribute type number
 * @currency attribute instance of Currency
 * @convertRate argument that show the convert rate
 * @displayFullPrice method that show the attributes in a given format
 * @convertPrice static method that returns the product of convertRate and amount
 */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be number');
    }
    this._amount = amount;
    if (!(currency instanceof Currency)) {
      throw TypeError('Currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError('Currency must be a number');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw TypeError('Amount o conversionRate must be a number');
    }
    return this._amount * this.conversionRate;
  }
}
