type IsExhaustive<P, Covered> = [Exclude<P, Covered>] extends [never]
  ? true
  : false;

type ExtractCovered<T> = T extends readonly (infer Item)[]
  ? Item extends readonly [infer P, any]
    ? P
    : never
  : never;

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

type ExhaustiveConstraint<P, Cases> =
  IsLiteralType<P> extends true
    ? IsExhaustive<P, ExtractCovered<Cases>> extends true
      ? { length: number }
      : { length: never }
    : { length: number };

export function multimethod<
  A,
  P,
  R,
  const Cases extends readonly (readonly [P, (arg: P) => R])[],
>(
  predicateFn: (arg: A) => P,
  defaultFn: (arg: P) => R,
  ...fns: Cases & {
    [K in keyof Cases]: Cases[K] extends readonly [infer C, any]
      ? readonly [C, (arg: C) => R]
      : never;
  } & ExhaustiveConstraint<P, Cases>
): (arg: A) => R {
  const dict = Object.fromEntries(fns);

  return (arg: A) => {
    const predicate = predicateFn(arg);
    return (dict[predicate] ?? defaultFn)(predicate);
  };
}
