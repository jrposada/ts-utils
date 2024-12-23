import { Expect } from '../utils/expect';
import { IsAlike } from '../utils/is-alike';
import { IsEqual } from '../utils/is-equal';
import { MergeInsertions } from '../utils/merge-instersections';

type A = Expect<
    IsAlike<
        WithRequired<{ a?: string; b?: string; c: string }, 'a'>,
        { a: string; b?: string; c: string }
    >
>;
type B = Expect<
    IsEqual<
        WithRequired<
            { a?: string; b: string | undefined; c: string },
            'a' | 'b'
        >,
        { a: string; b: string; c: string }
    >
>;

export type WithRequired<T, K extends keyof T> = MergeInsertions<
    T & { [P in K]-?: NonNullable<T[P]> }
>;
