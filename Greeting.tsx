// ============================================================
// FILE: Greeting.tsx
// DESCRIPTION: Functional component converted from JS to TSX
// CHANGES FROM ORIGINAL:
//   1. Added `Props` interface to type the `name` prop
//   2. Typed the component with React.FC<Props>
//   3. File renamed from .jsx → .tsx
// ============================================================

import React from 'react';

// STEP 1: Define a Props interface
// In JavaScript, props were untyped: ({ name }) => ...
// In TypeScript, we declare EXACTLY what props are expected
// and their types. This catches mistakes at compile time.
interface Props {
  name: string; // `name` must be a string (not number, boolean, etc.)
}

// STEP 2: Type the component as React.FC<Props>
// React.FC = "React Functional Component"
// The generic <Props> tells TypeScript which props this component accepts.
// In JS it was: const Greeting = ({ name }) => { ... }
// In TS it is:  const Greeting: React.FC<Props> = ({ name }) => { ... }
const Greeting: React.FC<Props> = ({ name }) => {
  // No changes needed inside the JSX — TypeScript only affects
  // how we describe the shape of data going INTO the component.
  return <div>Hello, {name}!</div>;
};

export default Greeting;

// ============================================================
// HOW TO USE THIS COMPONENT:
//   <Greeting name="Alice" />         ✅ Valid — name is a string
//   <Greeting name={42} />            ❌ Error — name must be string
//   <Greeting />                      ❌ Error — name is required
// ============================================================
