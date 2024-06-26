export default function guardrail(mathFunction) {
  const array = [];
  try {
    const result = mathFunction();
    array.push(result);
  } catch (error) {
    const firstLine = error.toString().split('\n')[0];
    array.push(firstLine);
  } finally {
    array.push('Guardrail was processed');
  }

  return array;
}
