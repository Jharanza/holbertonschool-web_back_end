/**
 * Function that returns a new ArrayBuffer with an Int8 value at a specific position
 * @arraybuffer an instance of the ArrayBuffer()
 * @view an instance of DataView()
 * @export
 * @param {number} length
 * @param {number} position
 * @param {number} value
 * @returns the Dataview with the specific data
 */

export default function createInt8TypedArray(length, position, value) {
  if (value < -128 && value > 127) throw Error('Position outside range');
  const arraybuffer = new ArrayBuffer(length);
  const view = new DataView(arraybuffer);
  view.setInt8(position, value);

  return view;
}
