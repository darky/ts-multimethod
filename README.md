# ts-multimethod

TypeScript multimethods inspired by Clojure multimethods

## Example

```typescript
const fn = multimethod(
  (n: number) => n, // <- here predicate function
  () => "default", // <- here default function
  [0, () => "zero"], // <- further tuples like [predicate, function]
  [1, () => "one"]
);

fn(0) // zero
```
