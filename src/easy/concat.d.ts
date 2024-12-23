// TODO: add to Array.push

import { Expect } from '../utils/expect';
import { IsEqual } from '../utils/is-equal';

type A = Expect<IsEqual<Concat<[1], [2]>, [1, 2]>>;

export type Concat<T extends any[], U extends any[]> = [...T, ...U];
