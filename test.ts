import { test } from "node:test";
import { strictEqual } from "node:assert";

import { multimethod } from "./index.js";

test("peek first method", () => {
  const m = multimethod(
    (n: number) => n,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"],
  );

  strictEqual(m(0), "zero");
});

test("peek second method", () => {
  const m = multimethod(
    (n: number) => n,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"],
  );

  strictEqual(m(1), "one");
});

test("default method", () => {
  const m = multimethod(
    (n: number) => n,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"],
  );

  strictEqual(m(2), "default");
});

test("check 2 arity", () => {
  const m = multimethod(
    (n: number, s: string) => `${s}${n}`,
    () => "default",
    ["s1", () => "s1"],
    ["s2", (n, s) => n + s],
  );

  strictEqual(m(2, "s"), "2s");
});

test("check 3 arity", () => {
  const m = multimethod(
    (_0: number, _1: string, b: boolean) => b,
    () => "default",
    [true, (n, s) => n + 1 + s],
    [false, () => "wrong"],
  );

  strictEqual(m(2, "s", true), "3s");
});

test("class usage", () => {
  class Test {
    zero = "zero";
    one = "one";
    default = "default";

    m = multimethod(
      (n: number) => n,
      () => this.default,
      [0, () => this.zero],
      [1, () => this.one],
    );
  }

  strictEqual(new Test().m(1), "one");
});

test("promise", async () => {
  const m = multimethod(
    (n: number) => n,
    async () => "default",
    [0, async () => "zero"],
    [1, async () => "one"],
  );

  strictEqual(await m(0), "zero");
});

test("exhaustive pattern matching - complete coverage", () => {
  const m = multimethod(
    (n: number) => n as 0 | 1,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"],
  );

  strictEqual(m(0), "zero");
  strictEqual(m(1), "one");
  strictEqual(m(2), "default");
});

test("exhaustive pattern matching - string union complete", () => {
  const m = multimethod(
    (s: string) => s as "a" | "b" | "c",
    () => "other",
    ["a", () => "A"],
    ["b", () => "B"],
    ["c", () => "C"],
  );

  strictEqual(m("a"), "A");
  strictEqual(m("b"), "B");
  strictEqual(m("c"), "C");
  strictEqual(m("d"), "other");
});

test("exhaustive pattern matching - boolean complete", () => {
  const m = multimethod(
    (b: boolean) => b,
    () => "default",
    [true, () => "true"],
    [false, () => "false"],
  );

  strictEqual(m(true), "true");
  strictEqual(m(false), "false");
});

test("exhaustive pattern matching - incomplete coverage error", () => {
  const _m = multimethod(
    (n: number) => n as 0 | 1,
    () => "default",
    // @ts-expect-error
    [0, () => "zero"],
  );
});

test("exhaustive pattern matching - three cases incomplete error", () => {
  const _m = multimethod(
    (n: number) => n as 1 | 2 | 3,
    () => "default",
    // @ts-expect-error
    [1, () => "one"],
    [2, () => "two"],
  );
});

test.run();
