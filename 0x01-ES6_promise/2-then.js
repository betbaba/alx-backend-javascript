export default function handleResponseFromAPI(promise) {
  const body = { status: 200, body: 'success' };
  promise.then(() => {
    console.log('Got a response from the API'); return body;
  });
  promise.catch((error) => error);
}
