/**
 * function that returns a resolved promise
 * @Promise a promise consttrucor
 * @resolve method that returns the resolved promise
 * @export signUpUser
 * @param {any} firstName
 * @param {any} lastName
 * @returns an object with given values
 */

export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
