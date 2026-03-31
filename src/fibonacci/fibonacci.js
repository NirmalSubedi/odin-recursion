export const fibs = (n) => {
  if (!Number.isInteger(n)) throw new TypeError("Expected an integer.");

  const sequence = [0];
  for (let i = 1; i < n; ++i) {
    sequence[i] = (sequence[i - 2] || 0) + (sequence[i - 1] || 1);
  }
  return sequence;
};

export const fibsRec = (n) => {
  if (!Number.isInteger(n)) throw new TypeError("Expected an integer.");

  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  // Get previous sequence
  const sequence = fibsRec(n - 1);
  // Append sum of previous sequence's last two values
  sequence.push(sequence.at(-1) + sequence.at(-2));
  return sequence;
};

fibsRec(8);
