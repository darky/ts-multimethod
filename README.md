# ts-multimethod

A powerful TypeScript library for creating multimethods with **compile-time exhaustive pattern matching** and **type narrowing**. Inspired by Clojure's multimethods, this library brings runtime polymorphism with full TypeScript type safety to your projects.

## Features

- 🔒 **Type-Safe Pattern Matching**: Compile-time verification that all cases are handled
- 🎯 **Exhaustive Checking**: TypeScript ensures you handle all possible cases in a union type
- 📝 **Type Narrowing**: Automatic type inference in case handlers
- 🚀 **Zero Dependencies**: Pure TypeScript, no external dependencies
- ⚡ **Runtime Efficiency**: Simple dictionary lookup for case dispatch
- 📦 **Up to 10 Cases**: Supports up to 10 pattern matches with full type safety

## Installation

```bash
npm install ts-multimethod
```

Or with yarn:

```bash
yarn add ts-multimethod
```

## Quick Start

```typescript
import { multimethod } from "ts-multimethod";

const fn = multimethod(
  (n: number) => n, // Predicate function
  () => "notZeroOrOne", // Default handler
  [0, () => "zero"], // Case: 0
  [1, () => "one"], // Case: 1
);

fn(0); // 'zero'
fn(1); // 'one'
fn(2); // 'notZeroOrOne'
```

## API

### `multimethod(predicateFn, defaultFn, ...cases)`

Creates a multimethod function with the following parameters:

| Parameter     | Type                            | Description                                    |
| ------------- | ------------------------------- | ---------------------------------------------- |
| `predicateFn` | `(arg: A) => P`                 | Extracts the discriminant value from the input |
| `defaultFn`   | `(arg: P) => R`                 | Fallback handler when no case matches          |
| `cases`       | `readonly [K, (arg: K) => R][]` | Up to 10 tuples of `[caseValue, handler]`      |

**Returns:** `(arg: A) => R` - A function that dispatches based on the predicate result.

## Usage Examples

### Basic Number Matching

```typescript
const httpStatus = multimethod(
  (code: number) => code,
  () => "Unknown Status",
  [200, () => "OK"],
  [404, () => "Not Found"],
  [500, () => "Internal Server Error"],
);

httpStatus(200); // 'OK'
httpStatus(404); // 'Not Found'
httpStatus(418); // 'Unknown Status'
```

### String Matching

```typescript
const actionHandler = multimethod(
  (action: string) => action,
  () => "Unknown action",
  ["create", () => "Creating..."],
  ["read", () => "Reading..."],
  ["update", () => "Updating..."],
  ["delete", () => "Deleting..."],
);

actionHandler("create"); // 'Creating...'
actionHandler("delete"); // 'Deleting...'
actionHandler("other"); // 'Unknown action'
```

### Boolean Matching

```typescript
const boolHandler = multimethod(
  (value: boolean) => value,
  () => "default",
  [true, () => "is true"],
  [false, () => "is false"],
);

boolHandler(true); // 'is true'
boolHandler(false); // 'is false'
```

### Symbol Matching

```typescript
const symA = Symbol("a");
const symB = Symbol("b");

const symbolHandler = multimethod(
  (s: symbol) => s,
  () => "other",
  [symA, () => "Symbol A"],
  [symB, () => "Symbol B"],
);

symbolHandler(symA); // 'Symbol A'
symbolHandler(symB); // 'Symbol B'
```

### Async Handlers

```typescript
const asyncHandler = multimethod(
  (n: number) => n,
  async () => "default",
  [0, async () => "zero"],
  [1, async () => "one"],
);

await asyncHandler(0); // 'zero'
await asyncHandler(1); // 'one'
```

### Class Usage with `this` Context

```typescript
class Calculator {
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

const calc = new Calculator();
calc.m(0); // 'zero'
calc.m(1); // 'one'
```

## Advanced Features

### Exhaustive Pattern Matching

When your predicate returns a **union type**, ts-multimethod ensures at compile-time that you handle all cases:

```typescript
// ✅ Complete coverage - TypeScript knows all cases are handled
const exhaustive = multimethod(
  (n: number) => n as 0 | 1 | 2, // Union type
  () => "default",
  [0, () => "zero"],
  [1, () => "one"],
  [2, () => "two"],
);
// TypeScript knows predicate result is fully covered

// ❌ Incomplete coverage - TypeScript shows an error
const incomplete = multimethod(
  (n: number) => n as 0 | 1 | 2,
  () => "default",
  [0, () => "zero"],
  [1, () => "one"],
  // Error: Missing case for '2'
);
```

### Type Narrowing in Handlers

Each handler receives a properly typed argument, enabling full type safety:

```typescript
const narrowed = multimethod(
  (s: string) => s as "a" | "b" | "c",
  () => "other",
  [
    "a",
    (value) => {
      // `value` is typed as 'a'
      const _check: "a" = value; // ✅ OK
      return "A";
    },
  ],
  [
    "b",
    (value) => {
      // `value` is typed as 'b'
      const _check: "b" = value; // ✅ OK
      return "B";
    },
  ],
  [
    "c",
    (value) => {
      // `value` is typed as 'c'
      const _check: "c" = value; // ✅ OK
      return "C";
    },
  ],
);
```

### Complex Predicate Functions

The predicate function can transform input into any discriminant value:

```typescript
// Extract and match specific properties
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "triangle"; base: number; height: number };

const areaCalculator = multimethod(
  (shape: Shape) => shape.kind,
  () => 0,
  ["circle", (shape) => Math.PI * shape.radius * shape.radius],
  ["square", (shape) => shape.side * shape.side],
  ["triangle", (shape) => 0.5 * shape.base * shape.height],
);

areaCalculator({ kind: "circle", radius: 5 }); // 78.54...
areaCalculator({ kind: "square", side: 4 }); // 16
areaCalculator({ kind: "triangle", base: 3, height: 4 }); // 6
```

### Numeric Range Matching

```typescript
const gradeCalculator = multimethod(
  (score: number) => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  },
  () => "Invalid",
  ["A", () => "Excellent"],
  ["B", () => "Good"],
  ["C", () => "Fair"],
  ["D", () => "Poor"],
  ["F", () => "Fail"],
);

gradeCalculator(95); // 'Excellent'
gradeCalculator(75); // 'Fair'
```

## Type Safety Details

### Supported Union Sizes

ts-multimethod supports exhaustive checking for unions with up to 10 members:

| Overload | Max Cases | Type Safety   |
| -------- | --------- | ------------- |
| 1 case   | 1         | ✅ Exhaustive |
| 2 cases  | 2         | ✅ Exhaustive |
| ...      | ...       | ...           |
| 10 cases | 10        | ✅ Exhaustive |

### How Exhaustive Checking Works

The library uses TypeScript's conditional types to detect when all members of a union type are covered:

```typescript
type IsLiteralType<P> = [P] extends [number]
  ? [number] extends [P]
    ? false   // P is just 'number', not a literal
    : true    // P is a literal like 0 | 1 | 2
  : /* similar checks for string, boolean, symbol */;
```

When you provide cases that cover all union members, TypeScript validates completeness at compile-time.

## Comparison with Alternatives

| Feature             | ts-multimethod | switch/case  | if/else chains |
| ------------------- | -------------- | ------------ | -------------- |
| Type narrowing      | ✅             | ⚠️ Limited   | ⚠️ Manual      |
| Exhaustive checking | ✅             | ❌           | ❌             |
| Runtime dispatch    | ✅             | ✅           | ✅             |
| Composable          | ✅             | ❌           | ❌             |
| Default handler     | ✅             | ⚠️ `default` | ⚠️ `else`      |
| `this` context      | ✅             | ❌           | ⚠️ Manual      |

## Limitations

- Maximum of 10 case tuples per multimethod
- Exhaustive checking only works with literal types (number, string, boolean, symbol literals)
- First case tuple must include exhaustive check marker (handled automatically by types)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- Inspired by [Clojure's multimethods](https://clojure.org/reference/multimethods)
- Built with TypeScript's advanced type system features
- Version 0.3.0 was vibe coded by [Qwen Code](https://qwen.ai)
