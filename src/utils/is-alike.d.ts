import { Expect } from "./expect";
import { IsEqual } from "./is-equal";
import { IsTrue } from "./is-true";
import { MergeInsertions } from "./merge-instersections";

type A = Expect<
  IsTrue<IsAlike<{ a: string } & { b: string }, { a: string; b: string }>>
>;

export type IsAlike<X, Y> = IsEqual<MergeInsertions<X>, MergeInsertions<Y>>;
