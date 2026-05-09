// ============================================================
// FILE: Counter.tsx
// DESCRIPTION: Class component converted from JS to TSX
// CHANGES FROM ORIGINAL:
//   1. Added `State` interface to type the component's state
//   2. Typed Component generics as Component<Props, State>
//   3. Explicitly typed the `increment` method return as void
//   4. File renamed from .jsx → .tsx
// ============================================================

import React, { Component } from 'react';

// STEP 1: Define a State interface
// In JavaScript, state was written as a plain object with no type:
//   state = { count: 0 }
// TypeScript requires us to define the shape of state explicitly
// so that `this.state.count` is always known to be a number.
interface State {
  count: number; // `count` is always a number (never undefined or string)
}

// STEP 2: Type the Props interface
// This component receives NO props from outside.
// In TypeScript, we still need to declare this explicitly.
// We use an empty object type `{}` to mean "no props expected".
// It's best practice to name it even when empty, for clarity.
interface Props {} // No external props needed for Counter

// STEP 3: Extend Component with two generics: <Props, State>
// In JavaScript it was: class Counter extends Component { ... }
// In TypeScript it is:  class Counter extends Component<Props, State> { ... }
//
// The two type parameters tell TypeScript:
//   - Props → what props the component receives (empty here)
//   - State → what this.state looks like (our State interface above)
class Counter extends Component<Props, State> {

  // STEP 4: Initialize state with the typed State shape
  // TypeScript now ENFORCES that `count` is a number here.
  // Writing `count: "zero"` would cause a compile-time error.
  state: State = {
    count: 0
  };

  // STEP 5: Type the `increment` method
  // In JavaScript: increment = () => { ... }
  // In TypeScript:  increment = (): void => { ... }
  //
  // `: void` means this function returns nothing.
  // This prevents accidentally returning a value from a state setter.
  increment = (): void => {
    // setState is already typed by React — it knows `count` must be a number
    this.setState({ count: this.state.count + 1 });
  };

  // STEP 6: Type the render method
  // render() always returns JSX (React elements), so we type it as JSX.Element.
  // This is optional since TypeScript can infer it, but it is explicit & clear.
  render(): JSX.Element {
    return (
      <div>
        {/* this.state.count is now guaranteed to be a number by TypeScript */}
        <p>Count: {this.state.count}</p>

        {/* onClick receives the typed `increment` method */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

// ============================================================
// SUMMARY OF ALL CHANGES vs ORIGINAL JAVASCRIPT:
//
//  JS  →  TS
//  ─────────────────────────────────────────────────────────
//  class Counter extends Component
//    → class Counter extends Component<Props, State>
//
//  state = { count: 0 }
//    → state: State = { count: 0 }
//
//  increment = () => { ... }
//    → increment = (): void => { ... }
//
//  render() { ... }
//    → render(): JSX.Element { ... }
//
//  File extension: .jsx → .tsx
// ============================================================
