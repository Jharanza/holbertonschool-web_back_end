/**
 * function that rejects a Promise
 * @Promise constructor
 * @reject method that create a new rejected promise
 * @export
 * @param {any} filename
 * @returns an Error object
 */

export default function uploadPhoto(filename) {
  return Promise.reject(Error(`${filename} cannot be processed`));
}
