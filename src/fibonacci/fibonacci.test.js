import { fibs, fibsRec } from "./fibonacci.js";

describe("iterative fibonacci sequence", () => {
  it("should exist", () => expect(fibs).toBeDefined());
  it("should be a function", () => expect(typeof fibs).toBe("function"));

  it("Throws TypeError for non-number data type", () => {
    expect(() => fibs("")).toThrow(TypeError);
    expect(() => fibs(1n)).toThrow(TypeError);
    expect(() => fibs({})).toThrow(TypeError);
    expect(() => fibs(true)).toThrow(TypeError);
    expect(() => fibs(null)).toThrow(TypeError);
    expect(() => fibs(undefined)).toThrow(TypeError);
  });

  it("Throws for non-integers", () => {
    expect(() => fibs(NaN)).toThrow(Error);
    expect(() => fibs(Infinity)).toThrow(Error);
    expect(() => fibs(-Infinity)).toThrow(Error);
    expect(() => fibs(0.1)).toThrow(Error);
  });

  it("Returns of sequence 1 number", () => {
    expect(fibs(1)).toEqual([0]);
  });
  it("Returns sequence of 2 number", () => {
    expect(fibs(2)).toEqual([0, 1]);
  });
  it("Returns sequence of 3 number", () => {
    expect(fibs(3)).toEqual([0, 1, 1]);
  });
  it("Returns sequence of 4 number", () => {
    expect(fibs(4)).toEqual([0, 1, 1, 2]);
  });
  it("Returns sequence of 5 number", () => {
    expect(fibs(5)).toEqual([0, 1, 1, 2, 3]);
  });
  it("Returns sequence of 6 number", () => {
    expect(fibs(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });
  it("Returns sequence of 7 number", () => {
    expect(fibs(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
  it("Returns sequence of 8 number", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

describe("recursive fibonacci sequence", () => {
  it("should exist", () => expect(fibsRec).toBeDefined());
  it("should be a function", () => expect(typeof fibsRec).toBe("function"));

  it("Throws TypeError for non-number data type", () => {
    expect(() => fibsRec("")).toThrow(TypeError);
    expect(() => fibsRec(1n)).toThrow(TypeError);
    expect(() => fibsRec({})).toThrow(TypeError);
    expect(() => fibsRec(true)).toThrow(TypeError);
    expect(() => fibsRec(null)).toThrow(TypeError);
    expect(() => fibsRec(undefined)).toThrow(TypeError);
  });

  it("Throws for non-integers", () => {
    expect(() => fibsRec(NaN)).toThrow(Error);
    expect(() => fibsRec(Infinity)).toThrow(Error);
    expect(() => fibsRec(-Infinity)).toThrow(Error);
    expect(() => fibsRec(0.1)).toThrow(Error);
  });

  it("Returns of sequence 1 number", () => {
    expect(fibsRec(1)).toEqual([0]);
  });
  it("Returns sequence of 2 number", () => {
    expect(fibsRec(2)).toEqual([0, 1]);
  });
  it("Returns sequence of 3 number", () => {
    expect(fibsRec(3)).toEqual([0, 1, 1]);
  });
  it("Returns sequence of 4 number", () => {
    expect(fibsRec(4)).toEqual([0, 1, 1, 2]);
  });
  it("Returns sequence of 5 number", () => {
    expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3]);
  });
  it("Returns sequence of 6 number", () => {
    expect(fibsRec(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });
  it("Returns sequence of 7 number", () => {
    expect(fibsRec(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
  it("Returns sequence of 8 number", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
