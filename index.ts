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
  const K6,
  const K7,
  const K8,
  const K9,
  const K10,
>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [
    ExhaustiveCheck<P, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8 | K9 | K10>,
    (arg: K1) => R,
  ],
  c2: readonly [K2, (arg: K2) => R],
  c3: readonly [K3, (arg: K3) => R],
  c4: readonly [K4, (arg: K4) => R],
  c5: readonly [K5, (arg: K5) => R],
  c6: readonly [K6, (arg: K6) => R],
  c7: readonly [K7, (arg: K7) => R],
  c8: readonly [K8, (arg: K8) => R],
  c9: readonly [K9, (arg: K9) => R],
  c10: readonly [K10, (arg: K10) => R],
): (arg: A) => R;

export function multimethod<
  A,
  P,
  R,
  const K1,
  const K2,
  const K3,
  const K4,
  const K5,
  const K6,
  const K7,
  const K8,
  const K9,
>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [
    ExhaustiveCheck<P, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8 | K9>,
    (arg: K1) => R,
  ],
  c2: readonly [K2, (arg: K2) => R],
  c3: readonly [K3, (arg: K3) => R],
  c4: readonly [K4, (arg: K4) => R],
  c5: readonly [K5, (arg: K5) => R],
  c6: readonly [K6, (arg: K6) => R],
  c7: readonly [K7, (arg: K7) => R],
  c8: readonly [K8, (arg: K8) => R],
  c9: readonly [K9, (arg: K9) => R],
): (arg: A) => R;

export function multimethod<
  A,
  P,
  R,
  const K1,
  const K2,
  const K3,
  const K4,
  const K5,
  const K6,
  const K7,
  const K8,
>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [
    ExhaustiveCheck<P, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8>,
    (arg: K1) => R,
  ],
  c2: readonly [K2, (arg: K2) => R],
  c3: readonly [K3, (arg: K3) => R],
  c4: readonly [K4, (arg: K4) => R],
  c5: readonly [K5, (arg: K5) => R],
  c6: readonly [K6, (arg: K6) => R],
  c7: readonly [K7, (arg: K7) => R],
  c8: readonly [K8, (arg: K8) => R],
): (arg: A) => R;

export function multimethod<
  A,
  P,
  R,
  const K1,
  const K2,
  const K3,
  const K4,
  const K5,
  const K6,
  const K7,
>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [
    ExhaustiveCheck<P, K1 | K2 | K3 | K4 | K5 | K6 | K7>,
    (arg: K1) => R,
  ],
  c2: readonly [K2, (arg: K2) => R],
  c3: readonly [K3, (arg: K3) => R],
  c4: readonly [K4, (arg: K4) => R],
  c5: readonly [K5, (arg: K5) => R],
  c6: readonly [K6, (arg: K6) => R],
  c7: readonly [K7, (arg: K7) => R],
): (arg: A) => R;

export function multimethod<
  A,
  P,
  R,
  const K1,
  const K2,
  const K3,
  const K4,
  const K5,
  const K6,
>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [
    ExhaustiveCheck<P, K1 | K2 | K3 | K4 | K5 | K6>,
    (arg: K1) => R,
  ],
  c2: readonly [K2, (arg: K2) => R],
  c3: readonly [K3, (arg: K3) => R],
  c4: readonly [K4, (arg: K4) => R],
  c5: readonly [K5, (arg: K5) => R],
  c6: readonly [K6, (arg: K6) => R],
): (arg: A) => R;

export function multimethod<
  A,
  P,
  R,
  const K1,
  const K2,
  const K3,
  const K4,
  const K5,
>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [ExhaustiveCheck<P, K1 | K2 | K3 | K4 | K5>, (arg: K1) => R],
  c2: readonly [K2, (arg: K2) => R],
  c3: readonly [K3, (arg: K3) => R],
  c4: readonly [K4, (arg: K4) => R],
  c5: readonly [K5, (arg: K5) => R],
): (arg: A) => R;

export function multimethod<A, P, R, const K1, const K2, const K3, const K4>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [ExhaustiveCheck<P, K1 | K2 | K3 | K4>, (arg: K1) => R],
  c2: readonly [K2, (arg: K2) => R],
  c3: readonly [K3, (arg: K3) => R],
  c4: readonly [K4, (arg: K4) => R],
): (arg: A) => R;

export function multimethod<A, P, R, const K1, const K2, const K3>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [ExhaustiveCheck<P, K1 | K2 | K3>, (arg: K1) => R],
  c2: readonly [K2, (arg: K2) => R],
  c3: readonly [K3, (arg: K3) => R],
): (arg: A) => R;

export function multimethod<A, P, R, const K1, const K2>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [ExhaustiveCheck<P, K1 | K2>, (arg: K1) => R],
  c2: readonly [K2, (arg: K2) => R],
): (arg: A) => R;

export function multimethod<A, P, R, const K1>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  c1: readonly [ExhaustiveCheck<P, K1>, (arg: K1) => R],
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
