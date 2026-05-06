export const cspVariablesControlPart4Data = {
  topicSlug: "csp-variables-control",
  sections: [
    {
      id: "cspvc4-intro",
      type: 'text' as const,
      content: `
# 🔀 Variables & Control Flow

**Part 4 of 7 — Connections & Interactions**

---

## Variables & Control Connect Across CSP

| Connection | Why |
|-----------|-----|
| Variables ↔ Data | Variables hold data values. |
| Control flow ↔ Algorithms | Algorithms ARE control flow over data. |
| Variables ↔ Procedures | Local variables vs. global state. |
| Control ↔ Events | Event-driven code is control flow triggered externally. |
      `
    },
    {
      id: "cspvc4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A variable declared inside a procedure that disappears when the procedure returns is called ___",
            options: [
              "global — visible to every part of the program throughout its run",
              "local — visible only inside the procedure during a single call",
              "public — declared visible to other modules that import the procedure",
              "random — visible at unpredictable points in the program's execution"
            ],
            correctAnswer: 1,
            explanation: "Local variables exist only during the procedure call."
          },
          {
            question: "A button-click handler that updates a counter variable demonstrates ___",
            options: [
              "only sequencing of statements that all run once on program startup.",
              "event-driven control flow modifying program state in response to a click.",
              "unpredictable random behavior unrelated to anything the user does.",
              "compression of the user's click into a smaller representation in memory."
            ],
            correctAnswer: 1,
            explanation: "Events drive control; handlers modify shared state."
          }
        ]
      }
    },
    {
      id: "cspvc4-content",
      type: 'text' as const,
      content: `
## Scope Of A Variable

**Scope** = the part of the program where a variable name is visible.

| Scope | Lifetime |
|-------|---------|
| **Local** | Inside a procedure call only. |
| **Global** | Whole program; persists. |
| **Block** | Inside an IF / loop block (some languages). |

Why scope matters: tightly scoped variables prevent unrelated code from accidentally reading or modifying them.

## Mutability

Some variables can be reassigned (mutable); some cannot (immutable / constant).

| Style | Example |
|-------|---------|
| Mutable | counter ← counter + 1 |
| Constant | PI ← 3.14159 (never reassigned) |

Constants make intent clear and prevent accidental change.

## Side Effects

A side effect = a change to state outside the local scope (writing a file, modifying a global, printing). Functions with no side effects are easier to test and reason about.
      `
    },
    {
      id: "cspvc4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The part of a program where a variable name is visible is called its _______.

2) A variable that exists only inside a procedure is called _______.

3) A change to state outside the local function is called a _______ effect.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["scope", "local", "side"],
        hint1: "Visibility.",
        hint2: "Procedure-bound.",
        hint3: "Spillover.",
        explanation: "Scope, local variables, side effects."
      }
    },
    {
      id: "cspvc4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A constant should be used when ___",
            options: ["a value should never change after initialization", "every value can be reassigned", "the value will be deleted", "the value is random"]
          },
          {
            label: "Tightly scoped local variables ___",
            options: ["reduce risk of accidental modification by unrelated code", "increase memory use forever", "cannot be tested", "replace global variables completely"]
          },
          {
            label: "A pure function (no side effects) is ___",
            options: ["easier to reason about and test in isolation", "always slower", "always faster", "always compressed"]
          }
        ],
        correctAnswers: ["a value should never change after initialization", "reduce risk of accidental modification by unrelated code", "easier to reason about and test in isolation"],
        hint1: "Immutability.",
        hint2: "Encapsulation.",
        hint3: "Predictability.",
        explanation: "Constants for invariants. Local scope reduces accidental coupling. Pure functions are testable."
      }
    },
    {
      id: "cspvc4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Variables/Control

- "Why use a local variable?" → encapsulation; doesn't pollute global state.
- "Why a constant?" → intent + safety.
- Event-driven = control flow triggered externally.
      `
    },
    {
      id: "cspvc4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A function is supposed to compute the average of a list, but it also writes to a global log every time it runs. From a CSP design standpoint, this ___",
            options: [
              "is fine because logging is a useful behavior to keep alongside the computation.",
              "introduces a side effect that makes the function harder to test and reuse.",
              "compresses the data so the average can be computed in less memory than before.",
              "encrypts the data so the global log entries cannot be read by other procedures."
            ],
            correctAnswer: 1,
            explanation: "Side effects complicate testing and reuse."
          },
          {
            question: "Two procedures both modify a global counter without coordination. The most likely problem is ___",
            options: [
              "no problem — simultaneous updates to the same global variable always interleave safely.",
              "unintended interactions: one procedure's changes affect the other unpredictably.",
              "compression artifacts in the global counter making it shrink between updates.",
              "transport-layer issues that prevent the global counter from updating reliably."
            ],
            correctAnswer: 1,
            explanation: "Shared global state = source of bugs."
          }
        ]
      }
    }
  ]
};
