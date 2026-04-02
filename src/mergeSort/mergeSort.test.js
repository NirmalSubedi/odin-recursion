import { mergeSort } from "./mergeSort.js";

describe("recursive merge sort", () => {
  it("Merge sort function exists", () => {
    expect(mergeSort).toBeDefined();
    expect(typeof mergeSort).toBe("function");
  });

  it("Throws TypeError for non-array data type", () => {
    expect(() => mergeSort()).toThrow(TypeError);
    expect(() => mergeSort("")).toThrow(TypeError);
    expect(() => mergeSort(1)).toThrow(TypeError);
    expect(() => mergeSort(1n)).toThrow(TypeError);
    expect(() => mergeSort(false)).toThrow(TypeError);
    expect(() => mergeSort(null)).toThrow(TypeError);
    expect(() => mergeSort(undefined)).toThrow(TypeError);
    expect(() => mergeSort({})).toThrow(TypeError);
    expect(() => mergeSort(() => {})).toThrow(TypeError);
  });

  it("Returns empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });
  it("Returns array of length 1", () => {
    expect(mergeSort([73])).toEqual([73]);
  });
  it("Returns sorted array if given sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  it("Returns sorted array if given unsorted array", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });
  it("Returns sorted array for multi digit elements", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
