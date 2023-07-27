import { Expect } from "../utils/expect";
import { IsEqual } from "../utils/is-equal";

type A = Expect<IsEqual<First<["a", "b", "c"]>, "a">>;
type B = Expect<IsEqual<First<[3, 2, 1]>, 3>>;
type C = Expect<IsEqual<First<[1]>, 1>>;
type D = Expect<IsEqual<First<[]>, never>>;
type E = Expect<IsEqual<First<undefined>, never>>;

export type First<T extends any[] | undefined> = T extends [infer F, ...any[]]
  ? F
  : never;
