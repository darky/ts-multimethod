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

// ===== Exhaustive Pattern Matching Tests =====

test("exhaustive pattern matching - 0 predicates (default only)", () => {
  const m = multimethod(
    (n: number) => n,
    () => "default",
  );

  strictEqual(m(0), "default");
  strictEqual(m(1), "default");
  strictEqual(m(100), "default");
});

test("exhaustive pattern matching - 1 predicate complete coverage", () => {
  const m = multimethod(
    (n: number) => n as 0,
    () => "default",
    [0, () => "zero"],
  );

  strictEqual(m(0), "zero");
  strictEqual(m(1), "default");
});

test("exhaustive pattern matching - 2 predicates complete coverage", () => {
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

test("exhaustive pattern matching - 3 predicates complete coverage", () => {
  const m = multimethod(
    (n: number) => n as 0 | 1 | 2,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"],
    [2, () => "two"],
  );

  strictEqual(m(0), "zero");
  strictEqual(m(1), "one");
  strictEqual(m(2), "two");
  strictEqual(m(3), "default");
});

test("exhaustive pattern matching - 4 predicates complete coverage", () => {
  const m = multimethod(
    (n: number) => n as 0 | 1 | 2 | 3,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
  );

  strictEqual(m(0), "zero");
  strictEqual(m(1), "one");
  strictEqual(m(2), "two");
  strictEqual(m(3), "three");
  strictEqual(m(4), "default");
});

test("exhaustive pattern matching - 5 predicates complete coverage", () => {
  const m = multimethod(
    (n: number) => n as 0 | 1 | 2 | 3 | 4,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
    [4, () => "four"],
  );

  strictEqual(m(0), "zero");
  strictEqual(m(1), "one");
  strictEqual(m(2), "two");
  strictEqual(m(3), "three");
  strictEqual(m(4), "four");
  strictEqual(m(5), "default");
});

test("exhaustive pattern matching - 6 predicates complete coverage", () => {
  const m = multimethod(
    (n: number) => n as 0 | 1 | 2 | 3 | 4 | 5,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
    [4, () => "four"],
    [5, () => "five"],
  );

  strictEqual(m(0), "zero");
  strictEqual(m(1), "one");
  strictEqual(m(2), "two");
  strictEqual(m(3), "three");
  strictEqual(m(4), "four");
  strictEqual(m(5), "five");
  strictEqual(m(6), "default");
});

test("exhaustive pattern matching - 7 predicates complete coverage", () => {
  const m = multimethod(
    (n: number) => n as 0 | 1 | 2 | 3 | 4 | 5 | 6,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
    [4, () => "four"],
    [5, () => "five"],
    [6, () => "six"],
  );

  strictEqual(m(0), "zero");
  strictEqual(m(1), "one");
  strictEqual(m(2), "two");
  strictEqual(m(3), "three");
  strictEqual(m(4), "four");
  strictEqual(m(5), "five");
  strictEqual(m(6), "six");
  strictEqual(m(7), "default");
});

test("exhaustive pattern matching - 8 predicates complete coverage", () => {
  const m = multimethod(
    (n: number) => n as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
    [4, () => "four"],
    [5, () => "five"],
    [6, () => "six"],
    [7, () => "seven"],
  );

  strictEqual(m(0), "zero");
  strictEqual(m(1), "one");
  strictEqual(m(2), "two");
  strictEqual(m(3), "three");
  strictEqual(m(4), "four");
  strictEqual(m(5), "five");
  strictEqual(m(6), "six");
  strictEqual(m(7), "seven");
  strictEqual(m(8), "default");
});

test("exhaustive pattern matching - 9 predicates complete coverage", () => {
  const m = multimethod(
    (n: number) => n as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
    [4, () => "four"],
    [5, () => "five"],
    [6, () => "six"],
    [7, () => "seven"],
    [8, () => "eight"],
  );

  strictEqual(m(0), "zero");
  strictEqual(m(1), "one");
  strictEqual(m(2), "two");
  strictEqual(m(3), "three");
  strictEqual(m(4), "four");
  strictEqual(m(5), "five");
  strictEqual(m(6), "six");
  strictEqual(m(7), "seven");
  strictEqual(m(8), "eight");
  strictEqual(m(9), "default");
});

test("exhaustive pattern matching - 10 predicates complete coverage", () => {
  const m = multimethod(
    (n: number) => n as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
    () => "default",
    [0, () => "zero"],
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
    [4, () => "four"],
    [5, () => "five"],
    [6, () => "six"],
    [7, () => "seven"],
    [8, () => "eight"],
    [9, () => "nine"],
  );

  strictEqual(m(0), "zero");
  strictEqual(m(1), "one");
  strictEqual(m(2), "two");
  strictEqual(m(3), "three");
  strictEqual(m(4), "four");
  strictEqual(m(5), "five");
  strictEqual(m(6), "six");
  strictEqual(m(7), "seven");
  strictEqual(m(8), "eight");
  strictEqual(m(9), "nine");
  strictEqual(m(10), "default");
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

test("exhaustive pattern matching - symbol complete", () => {
  const symA = Symbol("a");
  const symB = Symbol("b");
  const symC = Symbol("c");

  const m = multimethod(
    (s: symbol) => s as typeof symA | typeof symB | typeof symC,
    () => "other",
    [symA, () => "A"],
    [symB, () => "B"],
    [symC, () => "C"],
  );

  strictEqual(m(symA), "A");
  strictEqual(m(symB), "B");
  strictEqual(m(symC), "C");
  strictEqual(m(Symbol("other")), "other");
});

// ===== Incomplete Coverage Error Tests =====

test("exhaustive pattern matching - 1 predicate incomplete coverage error", () => {
  const _m = multimethod(
    (n: number) => n as 0 | 1,
    () => "default",
    // @ts-expect-error
    [0, () => "zero"],
  );
});

test("exhaustive pattern matching - 2 predicates incomplete coverage error", () => {
  const _m = multimethod(
    (n: number) => n as 0 | 1 | 2,
    () => "default",
    // @ts-expect-error
    [0, () => "zero"],
    [1, () => "one"],
  );
});

test("exhaustive pattern matching - 3 predicates incomplete coverage error", () => {
  const _m = multimethod(
    (n: number) => n as 1 | 2 | 3 | 4,
    () => "default",
    // @ts-expect-error
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
  );
});

test("exhaustive pattern matching - 4 predicates incomplete coverage error", () => {
  const _m = multimethod(
    (n: number) => n as 1 | 2 | 3 | 4 | 5,
    () => "default",
    // @ts-expect-error
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
    [4, () => "four"],
  );
});

test("exhaustive pattern matching - 5 predicates incomplete coverage error", () => {
  const _m = multimethod(
    (n: number) => n as 1 | 2 | 3 | 4 | 5 | 6,
    () => "default",
    // @ts-expect-error
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
    [4, () => "four"],
    [5, () => "five"],
  );
});

test("exhaustive pattern matching - 6 predicates incomplete coverage error", () => {
  const _m = multimethod(
    (n: number) => n as 1 | 2 | 3 | 4 | 5 | 6 | 7,
    () => "default",
    // @ts-expect-error
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
    [4, () => "four"],
    [5, () => "five"],
    [6, () => "six"],
  );
});

test("exhaustive pattern matching - 7 predicates incomplete coverage error", () => {
  const _m = multimethod(
    (n: number) => n as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
    () => "default",
    // @ts-expect-error
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
    [4, () => "four"],
    [5, () => "five"],
    [6, () => "six"],
    [7, () => "seven"],
  );
});

test("exhaustive pattern matching - 8 predicates incomplete coverage error", () => {
  const _m = multimethod(
    (n: number) => n as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
    () => "default",
    // @ts-expect-error
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
    [4, () => "four"],
    [5, () => "five"],
    [6, () => "six"],
    [7, () => "seven"],
    [8, () => "eight"],
  );
});

test("exhaustive pattern matching - 9 predicates incomplete coverage error", () => {
  const _m = multimethod(
    (n: number) => n as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    () => "default",
    // @ts-expect-error
    [1, () => "one"],
    [2, () => "two"],
    [3, () => "three"],
    [4, () => "four"],
    [5, () => "five"],
    [6, () => "six"],
    [7, () => "seven"],
    [8, () => "eight"],
    [9, () => "nine"],
  );
});

// ===== Predicate Type Narrowing Tests =====

test("predicates types narrowing works - 1 predicate", () => {
  const m = multimethod(
    (s: string) => s as "a",
    () => "other",
    [
      "a",
      (a) => {
        const _typeCheck: "a" = a;
        return "A";
      },
    ],
  );

  strictEqual(m("a"), "A");
  strictEqual(m("b"), "other");
});

test("predicates types narrowing works - 2 predicates", () => {
  const m = multimethod(
    (s: string) => s as "a" | "b",
    () => "other",
    [
      "a",
      (a) => {
        const _typeCheck: "a" = a;
        return "A";
      },
    ],
    [
      "b",
      (b) => {
        const _typeCheck: "b" = b;
        return "B";
      },
    ],
  );

  strictEqual(m("a"), "A");
  strictEqual(m("b"), "B");
  strictEqual(m("c"), "other");
});

test("predicates types narrowing works - 3 predicates", () => {
  const m = multimethod(
    (s: string) => s as "a" | "b" | "c",
    () => "other",
    [
      "a",
      (a) => {
        const _typeCheck: "a" = a;
        return "A";
      },
    ],
    [
      "b",
      (b) => {
        const _typeCheck: "b" = b;
        return "B";
      },
    ],
    [
      "c",
      (c) => {
        const _typeCheck: "c" = c;
        return "C";
      },
    ],
  );

  strictEqual(m("a"), "A");
  strictEqual(m("b"), "B");
  strictEqual(m("c"), "C");
  strictEqual(m("d"), "other");
});

test("predicates types narrowing works - 4 predicates", () => {
  const m = multimethod(
    (s: string) => s as "a" | "b" | "c" | "d",
    () => "other",
    [
      "a",
      (a) => {
        const _typeCheck: "a" = a;
        return "A";
      },
    ],
    [
      "b",
      (b) => {
        const _typeCheck: "b" = b;
        return "B";
      },
    ],
    [
      "c",
      (c) => {
        const _typeCheck: "c" = c;
        return "C";
      },
    ],
    [
      "d",
      (d) => {
        const _typeCheck: "d" = d;
        return "D";
      },
    ],
  );

  strictEqual(m("a"), "A");
  strictEqual(m("b"), "B");
  strictEqual(m("c"), "C");
  strictEqual(m("d"), "D");
  strictEqual(m("e"), "other");
});

test("predicates types narrowing works - 5 predicates", () => {
  const m = multimethod(
    (s: string) => s as "a" | "b" | "c" | "d" | "e",
    () => "other",
    [
      "a",
      (a) => {
        const _typeCheck: "a" = a;
        return "A";
      },
    ],
    [
      "b",
      (b) => {
        const _typeCheck: "b" = b;
        return "B";
      },
    ],
    [
      "c",
      (c) => {
        const _typeCheck: "c" = c;
        return "C";
      },
    ],
    [
      "d",
      (d) => {
        const _typeCheck: "d" = d;
        return "D";
      },
    ],
    [
      "e",
      (e) => {
        const _typeCheck: "e" = e;
        return "E";
      },
    ],
  );

  strictEqual(m("a"), "A");
  strictEqual(m("b"), "B");
  strictEqual(m("c"), "C");
  strictEqual(m("d"), "D");
  strictEqual(m("e"), "E");
  strictEqual(m("f"), "other");
});

test("predicates types narrowing works - 6 predicates", () => {
  const m = multimethod(
    (s: string) => s as "a" | "b" | "c" | "d" | "e" | "f",
    () => "other",
    [
      "a",
      (a) => {
        const _typeCheck: "a" = a;
        return "A";
      },
    ],
    [
      "b",
      (b) => {
        const _typeCheck: "b" = b;
        return "B";
      },
    ],
    [
      "c",
      (c) => {
        const _typeCheck: "c" = c;
        return "C";
      },
    ],
    [
      "d",
      (d) => {
        const _typeCheck: "d" = d;
        return "D";
      },
    ],
    [
      "e",
      (e) => {
        const _typeCheck: "e" = e;
        return "E";
      },
    ],
    [
      "f",
      (f) => {
        const _typeCheck: "f" = f;
        return "F";
      },
    ],
  );

  strictEqual(m("a"), "A");
  strictEqual(m("b"), "B");
  strictEqual(m("c"), "C");
  strictEqual(m("d"), "D");
  strictEqual(m("e"), "E");
  strictEqual(m("f"), "F");
  strictEqual(m("g"), "other");
});

test("predicates types narrowing works - 7 predicates", () => {
  const m = multimethod(
    (s: string) => s as "a" | "b" | "c" | "d" | "e" | "f" | "g",
    () => "other",
    [
      "a",
      (a) => {
        const _typeCheck: "a" = a;
        return "A";
      },
    ],
    [
      "b",
      (b) => {
        const _typeCheck: "b" = b;
        return "B";
      },
    ],
    [
      "c",
      (c) => {
        const _typeCheck: "c" = c;
        return "C";
      },
    ],
    [
      "d",
      (d) => {
        const _typeCheck: "d" = d;
        return "D";
      },
    ],
    [
      "e",
      (e) => {
        const _typeCheck: "e" = e;
        return "E";
      },
    ],
    [
      "f",
      (f) => {
        const _typeCheck: "f" = f;
        return "F";
      },
    ],
    [
      "g",
      (g) => {
        const _typeCheck: "g" = g;
        return "G";
      },
    ],
  );

  strictEqual(m("a"), "A");
  strictEqual(m("b"), "B");
  strictEqual(m("c"), "C");
  strictEqual(m("d"), "D");
  strictEqual(m("e"), "E");
  strictEqual(m("f"), "F");
  strictEqual(m("g"), "G");
  strictEqual(m("h"), "other");
});

test("predicates types narrowing works - 8 predicates", () => {
  const m = multimethod(
    (s: string) => s as "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h",
    () => "other",
    [
      "a",
      (a) => {
        const _typeCheck: "a" = a;
        return "A";
      },
    ],
    [
      "b",
      (b) => {
        const _typeCheck: "b" = b;
        return "B";
      },
    ],
    [
      "c",
      (c) => {
        const _typeCheck: "c" = c;
        return "C";
      },
    ],
    [
      "d",
      (d) => {
        const _typeCheck: "d" = d;
        return "D";
      },
    ],
    [
      "e",
      (e) => {
        const _typeCheck: "e" = e;
        return "E";
      },
    ],
    [
      "f",
      (f) => {
        const _typeCheck: "f" = f;
        return "F";
      },
    ],
    [
      "g",
      (g) => {
        const _typeCheck: "g" = g;
        return "G";
      },
    ],
    [
      "h",
      (h) => {
        const _typeCheck: "h" = h;
        return "H";
      },
    ],
  );

  strictEqual(m("a"), "A");
  strictEqual(m("b"), "B");
  strictEqual(m("c"), "C");
  strictEqual(m("d"), "D");
  strictEqual(m("e"), "E");
  strictEqual(m("f"), "F");
  strictEqual(m("g"), "G");
  strictEqual(m("h"), "H");
  strictEqual(m("i"), "other");
});

test("predicates types narrowing works - 9 predicates", () => {
  const m = multimethod(
    (s: string) => s as "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i",
    () => "other",
    [
      "a",
      (a) => {
        const _typeCheck: "a" = a;
        return "A";
      },
    ],
    [
      "b",
      (b) => {
        const _typeCheck: "b" = b;
        return "B";
      },
    ],
    [
      "c",
      (c) => {
        const _typeCheck: "c" = c;
        return "C";
      },
    ],
    [
      "d",
      (d) => {
        const _typeCheck: "d" = d;
        return "D";
      },
    ],
    [
      "e",
      (e) => {
        const _typeCheck: "e" = e;
        return "E";
      },
    ],
    [
      "f",
      (f) => {
        const _typeCheck: "f" = f;
        return "F";
      },
    ],
    [
      "g",
      (g) => {
        const _typeCheck: "g" = g;
        return "G";
      },
    ],
    [
      "h",
      (h) => {
        const _typeCheck: "h" = h;
        return "H";
      },
    ],
    [
      "i",
      (i) => {
        const _typeCheck: "i" = i;
        return "I";
      },
    ],
  );

  strictEqual(m("a"), "A");
  strictEqual(m("b"), "B");
  strictEqual(m("c"), "C");
  strictEqual(m("d"), "D");
  strictEqual(m("e"), "E");
  strictEqual(m("f"), "F");
  strictEqual(m("g"), "G");
  strictEqual(m("h"), "H");
  strictEqual(m("i"), "I");
  strictEqual(m("j"), "other");
});

test("predicates types narrowing works - 10 predicates", () => {
  const m = multimethod(
    (s: string) =>
      s as "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j",
    () => "other",
    [
      "a",
      (a) => {
        const _typeCheck: "a" = a;
        return "A";
      },
    ],
    [
      "b",
      (b) => {
        const _typeCheck: "b" = b;
        return "B";
      },
    ],
    [
      "c",
      (c) => {
        const _typeCheck: "c" = c;
        return "C";
      },
    ],
    [
      "d",
      (d) => {
        const _typeCheck: "d" = d;
        return "D";
      },
    ],
    [
      "e",
      (e) => {
        const _typeCheck: "e" = e;
        return "E";
      },
    ],
    [
      "f",
      (f) => {
        const _typeCheck: "f" = f;
        return "F";
      },
    ],
    [
      "g",
      (g) => {
        const _typeCheck: "g" = g;
        return "G";
      },
    ],
    [
      "h",
      (h) => {
        const _typeCheck: "h" = h;
        return "H";
      },
    ],
    [
      "i",
      (i) => {
        const _typeCheck: "i" = i;
        return "I";
      },
    ],
    [
      "j",
      (j) => {
        const _typeCheck: "j" = j;
        return "J";
      },
    ],
  );

  strictEqual(m("a"), "A");
  strictEqual(m("b"), "B");
  strictEqual(m("c"), "C");
  strictEqual(m("d"), "D");
  strictEqual(m("e"), "E");
  strictEqual(m("f"), "F");
  strictEqual(m("g"), "G");
  strictEqual(m("h"), "H");
  strictEqual(m("i"), "I");
  strictEqual(m("j"), "J");
  strictEqual(m("k"), "other");
});

test("predicates types narrowing works - number union types", () => {
  const m = multimethod(
    (n: number) => n as 1 | 2 | 3,
    () => "other",
    [
      1,
      (n) => {
        const _typeCheck: 1 = n;
        return "one";
      },
    ],
    [
      2,
      (n) => {
        const _typeCheck: 2 = n;
        return "two";
      },
    ],
    [
      3,
      (n) => {
        const _typeCheck: 3 = n;
        return "three";
      },
    ],
  );

  strictEqual(m(1), "one");
  strictEqual(m(2), "two");
  strictEqual(m(3), "three");
  strictEqual(m(4), "other");
});

test("predicates types narrowing works - boolean types", () => {
  const m = multimethod(
    (b: boolean) => b,
    () => "other",
    [
      true,
      (b) => {
        const _typeCheck: true = b;
        return "true";
      },
    ],
    [
      false,
      (b) => {
        const _typeCheck: false = b;
        return "false";
      },
    ],
  );

  strictEqual(m(true), "true");
  strictEqual(m(false), "false");
});

test.run();
