export const mergeSort = (array) => {
  if (!Array.isArray(array)) throw new TypeError("Expected an array.");

  if (array.length === 1) return array;
  if (array.length <= 0) return [];
  const left = mergeSort(array.slice(0, array.length / 2));
  const right = mergeSort(array.slice(array.length / 2));

  const sorted = [];
  let i = 0;
  let j = 0;

  for (; i < left.length && j < right.length; ) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i += 1;
    } else {
      sorted.push(right[j]);
      j += 1;
    }
  }
  for (; i < left.length; ++i) sorted.push(left[i]);
  for (; j < right.length; ++j) sorted.push(right[j]);

  return sorted;
};
