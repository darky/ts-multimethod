type IsExhaustive<P, Covered> = [Exclude<P, Covered>] extends [never]
  ? true
  : false;

type ExtractCovered<T> = T extends readonly (infer Item)[]
  ? Item extends readonly [infer P, any]
    ? P
    : never
  : never;

// Check if P is a literal type (not a wide type like number, string, boolean)
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

// Only enforce exhaustive check for literal types
type ExhaustiveConstraint<P, Cases> =
  IsLiteralType<P> extends true
    ? IsExhaustive<P, ExtractCovered<Cases>> extends true
      ? { length: number }
      : { length: never }
    : { length: number };

export function multimethod<
  P,
  R,
  Args extends unknown[],
  const Cases extends readonly (readonly [P, (...args: Args) => R])[],
>(
  predicateFn: (...args: Args) => P,
  defaultFn: (...args: Args) => R,
  ...fns: Cases & {
    [K in keyof Cases]: Cases[K] extends readonly [infer C, any]
      ? readonly [C, (...args: Args) => R]
      : never;
  } & ExhaustiveConstraint<P, Cases>
): (...args: Args) => R {
  const dict = Object.fromEntries(fns as unknown as [any, any][]);

  return (...args: Args) => {
    const predicate = predicateFn(...args);
    return (dict[predicate] ?? defaultFn)(...args);
  };
}
