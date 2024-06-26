const prom = new Promise((resolve) => resolve('success'), (reject) => reject('Fail'));

export default function getResponseFromAPI() {
  return prom;
}
