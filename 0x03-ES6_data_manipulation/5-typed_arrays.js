export default function createInt8TypedArray(length, position, value) {
  const allLength = length * Int8Array.BYTES_PER_ELEMENT;

  if (position < 0 || position > allLength) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(allLength);
  const int8 = new Int8Array(buffer);
  int8[position] = value;
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);
  return dataView;
}
