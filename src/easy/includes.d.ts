// TODO: add to Array.includes

import { Expect } from "../utils/expect";
import { IsFalse } from "../utils/is-false";
import { IsTrue } from "../utils/is-true";

type A = Expect<
  IsFalse<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">>
>;

type B = Expect<
  IsFalse<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars" | "Dio">>
>;
type C = Expect<IsFalse<Includes<[null], undefined>>>;
type D = Expect<
  IsTrue<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">>
>;
type E = Expect<
  IsTrue<Includes<[1, "Kars", "Esidisi", "Wamuu", "Santana"], "Kars" | 1>>
>;

// type F = Expect<IsTrue<Includes<[boolean, 2, 3, 5, 6, 7, false], false>>>;
// type G = Expect<IsTrue<Includes<[true], true>>>;
// type H = Expect<IsTrue<Includes<[boolean, 2, 3, 5, 6, 7, false], false>>>;

export type Includes<T extends any[], I> = {
  [P in T[number]]: true;
}[I] extends true
  ? true
  : false;
