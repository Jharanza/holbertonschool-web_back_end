export default function concatArrays(array1, array2, ...string) {
  const result = [...array1, ...array2];

  for (const x of string) {
    for (const y of x) {
      result.push(y);
    }
  }

  return result;
}
