---
title: Getting Started
slug: /
---

Flow is a static type checker for your JavaScript code. It does a lot of work
to make you more productive. Making you code faster, smarter, more confidently,
and to a bigger scale.

Flow checks your code for errors through **static type annotations**. These
_types_ allow you to tell Flow how you want your code to work, and Flow will
make sure it does work that way.

```js flow-check
// @flow
function square(n: number): number {
  return n * n;
}

square("2"); // Error!
```
