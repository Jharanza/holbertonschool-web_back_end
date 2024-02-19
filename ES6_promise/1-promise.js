/**
 * Function that returns a promise with a response
 * @myPromise variable that get the new promise
 * @export the function
 * @param {any} success
 * @returns the result of the promise
 */

export default function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('The fake API is not working currently'));
  });

  return myPromise;
}
