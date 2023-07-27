const tuple = [
  "tesla",
  "model 3",
  "model X",
  "model Y",
  1,
  [1, 2],
  () => {},
] as const;

// expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
const result: TupleToObject<typeof tuple> = {
  tesla: "tesla",
  "model 3": "model 3",
  "1": 1,
  "model X": "model X",
  "model Y": "model Y",
};

export type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};
