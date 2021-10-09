import { test } from "uvu";
import { equal } from "uvu/assert";

import { multimethod } from "./index";

test("peek first method", () => {
  const m = multimethod(
    (n: number) => n,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"]
  );

  equal(m(0), "zero");
});

test("peek second method", () => {
  const m = multimethod(
    (n: number) => n,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"]
  );

  equal(m(1), "one");
});

test("default method", () => {
  const m = multimethod(
    (n: number) => n,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"]
  );

  equal(m(2), "default");
});

test("check 2 arity", () => {
  const m = multimethod(
    (n: number, s: string) => `${s}${n}`,
    () => "default",
    ['s1', () => "s1"],
    ['s2', (n, s) => n + s]
  );

  equal(m(2, 's'), "2s");
});

test("check 3 arity", () => {
  const m = multimethod(
    (_0: number, _1: string, b: boolean) => b,
    () => "default",
    [true, (n, s) => n + 1 + s],
    [false, () => "wrong"]
  );

  equal(m(2, 's', true), "3s");
});

test("class usage", () => {
  class Test {
    zero = 'zero';
    one = 'one';
    default = 'default';

    m = multimethod(
      (n: number) => n,
      () => this.default,
      [0, () => this.zero],
      [1, () => this.one]
    );
  }

  equal(new Test().m(1), 'one');
});

test("promise", async () => {
  const m = multimethod(
    (n: number) => n,
    async () => "default",
    [0, async () => "zero"],
    [1, async () => "one"]
  );

  equal(await m(0), "zero");
});

test.run();
