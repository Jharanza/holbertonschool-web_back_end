/**
 * Function that returns a new ArrayBuffer with an Int8 value at a specific position
 * @arraybuffer an instance of the ArrayBuffer()
 * @view an instance of DataView()
 * @export createInt8TypedArray
 * @param {number} length
 * @param {number} position
 * @param {number} value
 * @returns the Dataview with the specific data
 */

export default function createInt8TypedArray(length, position, value) {
  const arraybuffer = new ArrayBuffer(length);
  const view = new DataView(arraybuffer);

  if (position < 0 || position >= length) throw new Error('Position outside range');

  view.setInt8(position, value);

  return view;
}
