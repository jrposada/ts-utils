import { Expect } from "../utils/expect";
import { IsEqual } from "../utils/is-equal";

type ExampleType = Promise<string>;

type A = Expect<IsEqual<MyAwaited<ExampleType>, string>>;

export type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
  ? R
  : never;
