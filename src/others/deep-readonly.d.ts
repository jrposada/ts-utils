interface Test {
  title: string;
  description: string;
  a: {
    1: number;
  };
}

const test: DeepReadonly<Test> = {
  title: "Hey",
  description: "foobar",
  a: {
    1: 1,
  },
};

// test.title = "Hello"; // Error: cannot reassign a readonly property
// test.description = "barFoo"; // Error: cannot reassign a readonly property
// test.a[1] = 1; // Error: cannot reassign a readonly property

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Object ? DeepReadonly<T[P]> : T[P];
};
