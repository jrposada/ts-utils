import { Expect } from './expect';
import { IsFalse } from './is-false';
import { IsTrue } from './is-true';

type A = Expect<IsTrue<IsEqual<true, true>>>;
type B = Expect<IsTrue<IsEqual<false, false>>>;
type C = Expect<IsFalse<IsEqual<true, false>>>;
type D = Expect<IsFalse<IsEqual<false, true>>>;
type E = Expect<IsFalse<IsEqual<1, true>>>;
type F = Expect<IsFalse<IsEqual<1, 2>>>;
type G = Expect<IsTrue<IsEqual<'a', 'a'>>>;
type H = Expect<IsFalse<IsEqual<'a', 'b'>>>;
type I = Expect<IsFalse<IsEqual<'a', 'a' | 'b'>>>;
type J = Expect<IsFalse<IsEqual<'a' | 'b', 'a'>>>;
type K = Expect<IsTrue<IsEqual<{ a: string }, { a: string }>>>;
type L = Expect<IsTrue<IsEqual<{ a?: string }, { a?: string }>>>;

export type IsEqual<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
        ? true
        : false;
