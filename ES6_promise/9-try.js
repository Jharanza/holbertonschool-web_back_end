export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const exeMathfunction = mathFunction();
    queue.push(exeMathfunction);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
