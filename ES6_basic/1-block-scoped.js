export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    if (task === false) {
      console.log(task);
    }
    const task2 = false;
    if (task2 === true) {
      console.log(task2);
    }
  }

  return [task, task2];
}
