import { Expect } from "../utils/expect";
import { IsEqual } from "../utils/is-equal";

type A = Expect<IsEqual<If<true, "a", "b">, "a">>;
type B = Expect<IsEqual<If<false, "a", "b">, "b">>;

export type If<C extends boolean, T, F> = C extends true ? T : F;
