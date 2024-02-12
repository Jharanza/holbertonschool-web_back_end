export default function returnHowManyArguments(...args) {
  let count = 0;
  for (let arg of args) {
    arg = String(arg);
    count += 1;
  }
  return count;
}
