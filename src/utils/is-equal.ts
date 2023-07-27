import { ExpectFalse, ExpectTrue } from "./expect";

type A = ExpectTrue<IsEqual<true, true>>;
type B = ExpectTrue<IsEqual<false, false>>;
type C = ExpectFalse<IsEqual<true, false>>;
type D = ExpectFalse<IsEqual<false, true>>;
type E = ExpectFalse<IsEqual<1, true>>;
type F = ExpectFalse<IsEqual<1, 2>>;
type G = ExpectTrue<IsEqual<"a", "a">>;
type H = ExpectFalse<IsEqual<"a", "b">>;
type I = ExpectFalse<IsEqual<"a", "a" | "b">>;
type J = ExpectFalse<IsEqual<"a" | "b", "a">>;

export type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;
