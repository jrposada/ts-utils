interface Test {
  title: string;
  description: string;
}

const test: MyReadonly<Test> = {
  title: "Hey",
  description: "foobar",
};

// test.title = "Hello"; // Error: cannot reassign a readonly property
// test.description = "barFoo"; // Error: cannot reassign a readonly property

export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
