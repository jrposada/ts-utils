// TODO: add to Array.includes

import { ExpectFalse, ExpectTrue } from "../utils/expect";

type A = ExpectFalse<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">>;
type B = ExpectFalse<
  Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars" | "Dio">
>;
type C = ExpectFalse<Includes<[null], undefined>>;
type D = ExpectTrue<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">>;
type E = ExpectTrue<
  Includes<[1, "Kars", "Esidisi", "Wamuu", "Santana"], "Kars" | 1>
>;
type F = ExpectTrue<Includes<[boolean, 2, 3, 5, 6, 7, false], false>>;
type G = ExpectTrue<Includes<[true], true>>;
type H = ExpectTrue<Includes<[boolean, 2, 3, 5, 6, 7, false], false>>;

type Includes<T extends any[], I> = {
  [P in T[number]]: true;
}[I] extends true
  ? true
  : false;

export type { Includes };
