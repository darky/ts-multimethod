export function multimethod<P, R>(
  predicateFn: () => P,
  defaultFn: () => R,
  ...fns: [predicate: P, fn: () => R][]
): () => R;

export function multimethod<P, R, T1>(
  predicateFn: (arg1: T1) => P,
  defaultFn: (arg1: T1) => R,
  ...fns: [predicate: P, fn: (arg1: T1) => R][]
): (arg1: T1) => R;

export function multimethod<P, R, T1, T2>(
  predicateFn: (arg1: T1, arg2: T2) => P,
  defaultFn: (arg1: T1, arg2: T2) => R,
  ...fns: [predicate: P, fn: (arg1: T1, arg2: T2) => R][]
): (arg1: T1, arg2: T2) => R;

export function multimethod<P, R, T1, T2, T3>(
  predicateFn: (arg1: T1, arg2: T2, arg3: T3) => P,
  defaultFn: (arg1: T1, arg2: T2, arg3: T3) => R,
  ...fns: [predicate: P, fn: (arg1: T1, arg2: T2, arg3: T3) => R][]
): (arg1: T1, arg2: T2, arg3: T3) => R;

export function multimethod<P, R, T1, T2, T3, T4>(
  predicateFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => P,
  defaultFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R,
  ...fns: [predicate: P, fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R][]
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R;

export function multimethod<P, R, T1, T2, T3, T4, T5>(
  predicateFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => P,
  defaultFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R,
  ...fns: [predicate: P, fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R][]
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R;

export function multimethod<P, R, T1, T2, T3, T4, T5, T6>(
  predicateFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => P,
  defaultFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => R,
  ...fns: [predicate: P, fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => R][]
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => R;

export function multimethod<P, R, T1, T2, T3, T4, T5, T6, T7>(
  predicateFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => P,
  defaultFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => R,
  ...fns: [predicate: P, fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => R][]
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => R;

export function multimethod<P, R, T1, T2, T3, T4, T5, T6, T7, T8>(
  predicateFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => P,
  defaultFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => R,
  ...fns: [predicate: P, fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => R][]
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => R;

export function multimethod<P, R, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  predicateFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => P,
  defaultFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => R,
  ...fns: [predicate: P, fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => R][]
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => R;

export function multimethod<P, R, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  predicateFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => P,
  defaultFn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => R,
  ...fns: [predicate: P, fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => R][]
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => R;

export function multimethod(predicateFn: Function, defaultFn: Function, ...fns: [predicate: unknown, fn: Function][]) {
  const dict = Object.fromEntries(fns);

  return (...args: unknown[]) => {
    const predicate = predicateFn(...args);
    return (dict[predicate] ?? defaultFn)(...args);
  };
};
