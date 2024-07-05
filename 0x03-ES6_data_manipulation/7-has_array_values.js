export default function hasValuesFromArray(set, array) {
  const ret = new Set();
  array.forEach((value) => {
    ret.add(set.has(value));
  });

  const myArray = Array.from(ret);
  for (const i of myArray) {
    if (i === false) {
      return false;
    }
  }
  return true;
}
