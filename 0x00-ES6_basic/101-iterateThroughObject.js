export default function iterateThroughObject(reportWithIterator) {
  const emp = [];
  for (const e of reportWithIterator) {
    emp.push(e);
  }

  return emp.join('|');
}
