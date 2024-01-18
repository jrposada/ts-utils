import { Expect } from "../utils/expect";
import { IsEqual } from "../utils/is-equal";

type A = Expect<IsEqual<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>;
type B = Expect<IsEqual<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>;
type C = Expect<IsEqual<MyExclude<"a" | "b" | "c", "a" | "d">, "b" | "c">>;

export type MyExclude<T, E> = T extends E ? never : T;
