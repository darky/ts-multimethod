type IsLiteralType<P> = [P] extends [number]
  ? [number] extends [P]
    ? false
    : true
  : [P] extends [string]
    ? [string] extends [P]
      ? false
      : true
    : [P] extends [boolean]
      ? [boolean] extends [P]
        ? false
        : true
      : [P] extends [symbol]
        ? [symbol] extends [P]
          ? false
          : true
        : true;

type ExhaustiveCheck<P, K> =
  IsLiteralType<P> extends true
    ? [Exclude<P, K>] extends [never]
      ? K
      : never
    : K;

export function multimethod<
  A,
  P,
  R,
  const K1,
  const K2,
  const K3,
  const K4,
  const K5,
  const RestKs extends readonly any[],
>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [
    ExhaustiveCheck<P, K1 | K2 | K3 | K4 | K5 | RestKs[number]>,
    (arg: K1) => R,
  ],
  c2: readonly [K2, (arg: K2) => R],
  c3: readonly [K3, (arg: K3) => R],
  c4: readonly [K4, (arg: K4) => R],
  c5: readonly [K5, (arg: K5) => R],
  ...rest: {
    [I in keyof RestKs]: RestKs[I] extends readonly [infer K, any]
      ? readonly [K, (arg: K) => R]
      : never;
  }
): (arg: A) => R;

export function multimethod<
  A,
  P,
  R,
  const K1,
  const K2,
  const K3,
  const K4,
  const RestKs extends readonly any[],
>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [
    ExhaustiveCheck<P, K1 | K2 | K3 | K4 | RestKs[number]>,
    (arg: K1) => R,
  ],
  c2: readonly [K2, (arg: K2) => R],
  c3: readonly [K3, (arg: K3) => R],
  c4: readonly [K4, (arg: K4) => R],
  ...rest: {
    [I in keyof RestKs]: RestKs[I] extends readonly [infer K, any]
      ? readonly [K, (arg: K) => R]
      : never;
  }
): (arg: A) => R;

export function multimethod<
  A,
  P,
  R,
  const K1,
  const K2,
  const K3,
  const RestKs extends readonly any[],
>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [
    ExhaustiveCheck<P, K1 | K2 | K3 | RestKs[number]>,
    (arg: K1) => R,
  ],
  c2: readonly [K2, (arg: K2) => R],
  c3: readonly [K3, (arg: K3) => R],
  ...rest: {
    [I in keyof RestKs]: RestKs[I] extends readonly [infer K, any]
      ? readonly [K, (arg: K) => R]
      : never;
  }
): (arg: A) => R;

export function multimethod<
  A,
  P,
  R,
  const K1,
  const K2,
  const RestKs extends readonly any[],
>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [ExhaustiveCheck<P, K1 | K2 | RestKs[number]>, (arg: K1) => R],
  c2: readonly [K2, (arg: K2) => R],
  ...rest: {
    [I in keyof RestKs]: RestKs[I] extends readonly [infer K, any]
      ? readonly [K, (arg: K) => R]
      : never;
  }
): (arg: A) => R;

export function multimethod<
  A,
  P,
  R,
  const K1,
  const RestKs extends readonly any[],
>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [ExhaustiveCheck<P, K1 | RestKs[number]>, (arg: K1) => R],
  ...rest: {
    [I in keyof RestKs]: RestKs[I] extends readonly [infer K, any]
      ? readonly [K, (arg: K) => R]
      : never;
  }
): (arg: A) => R;

export function multimethod<A, P, R>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
): (arg: A) => R;

// Implementation
export function multimethod<A, P, R>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  ...fns: readonly any[]
): (arg: A) => R {
  const dict = Object.fromEntries(fns) as any;

  return (arg: A) => {
    const predicate = predicateFn(arg) as any;
    return (dict[predicate] ?? defaultFn)(predicate);
  };
}
