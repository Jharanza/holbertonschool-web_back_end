export default function cleanSet(set, startString) {
  if (startString === undefined || typeof startString !== 'string') return '';
  const array = [...set];

  // Use filter to keep only elements starting with startString
  const filteredSet = array.filter((value) => value.startsWith(startString));

  // Extract the remaining part after startString from each value
  const filteredValues = filteredSet.map((value) => value.slice(startString.length));

  // Join the filtered values with "-" as separator
  return filteredValues.join('-');
}
