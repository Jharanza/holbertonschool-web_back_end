export default function cleanSet(set, startString) {
  const array = Array.from(set);
  const len = startString.length;

  const newArray = [];
  for (const element of array) {
    if (element.startsWith(startString)) newArray.push(element.slice(len));
  }

  let result = '';
  const arrayLen = array.length;
  for (const element of newArray) {
    result += element;
    if (element !== newArray[arrayLen - 2]) result += '-';
  }

  return result;
}
