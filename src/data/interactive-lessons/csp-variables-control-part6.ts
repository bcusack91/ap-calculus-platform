export const cspVariablesControlPart6Data = {
  topicSlug: "csp-variables-control",
  sections: [
    {
      id: "cspvc6-intro",
      type: 'text' as const,
      content: `
# 🔀 Variables & Control Flow

**Part 6 of 7 — Problem-Solving Workshop**

---

## Variables & Control Workshop

Trace and design with vocabulary in hand.
      `
    },
    {
      id: "cspvc6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "After **a ← 1; b ← 2; a ← b; b ← a**, the values of (a, b) are ___",
            options: [
              "(1, 2)",
              "(2, 2)",
              "(2, 1)",
              "(1, 1)"
            ],
            correctAnswer: 1,
            explanation: "a becomes 2, then b reads the now-2 a → both are 2 (classic swap pitfall — needs a temp variable)."
          },
          {
            question: "The correct way to swap a and b in pseudocode is ___",
            options: [
              "a ← b; b ← a",
              "temp ← a; a ← b; b ← temp",
              "a ← b ← a",
              "no swap needed"
            ],
            correctAnswer: 1,
            explanation: "Use a temporary variable to preserve a."
          }
        ]
      }
    },
    {
      id: "cspvc6-content",
      type: 'text' as const,
      content: `
## Worked: Trace A Loop

    sum ← 0
    FOR i FROM 1 TO 4:
      sum ← sum + i

| Iter | i | sum (after) |
|------|---|-------------|
| 1 | 1 | 1 |
| 2 | 2 | 3 |
| 3 | 3 | 6 |
| 4 | 4 | 10 |

Final sum = 10.

## Worked: Conditions

    IF score ≥ 90 THEN grade ← "A"
    ELSE IF score ≥ 80 THEN grade ← "B"
    ELSE IF score ≥ 70 THEN grade ← "C"
    ELSE grade ← "F"

For score = 85 → grade = "B".

## Worked: Off-By-One Caution

    FOR i FROM 1 TO LENGTH(list):
      PROCESS(list[i])

In a 1-indexed list this is fine; in a 0-indexed language, you'd need 0 to LENGTH(list) - 1. AP pseudocode is **1-indexed**.
      `
    },
    {
      id: "cspvc6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In AP CSP pseudocode, the first element of a list is at index _______.

2) To swap two variables you need a _______ variable.

3) Tracing a loop step by step is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1", "temporary", "tracing"],
        hint1: "1-indexed.",
        hint2: "Holds intermediate value.",
        hint3: "Walk through.",
        explanation: "AP CSP is 1-indexed. Swap needs temp. \"Tracing\" = step-through."
      }
    },
    {
      id: "cspvc6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A loop FOR i FROM 1 TO 5 runs ___ times",
            options: ["5", "4", "6", "0"]
          },
          {
            label: "A loop REPEAT UNTIL false would ___",
            options: ["run forever (infinite loop)", "run zero times", "run once", "compress data"]
          },
          {
            label: "An IF without an ELSE ___",
            options: ["skips the body when the condition is false", "always runs the body", "always errors", "always loops"]
          }
        ],
        correctAnswers: ["5", "run forever (infinite loop)", "skips the body when the condition is false"],
        hint1: "Inclusive range.",
        hint2: "Never-true exit.",
        hint3: "No alternate branch.",
        explanation: "1..5 = 5 iters. UNTIL false = infinite. IF without ELSE just skips."
      }
    },
    {
      id: "cspvc6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop Style

- Trace by drawing a small table of variables across iterations.
- Watch for off-by-one and infinite-loop traps.
- AP pseudocode is 1-indexed.
      `
    },
    {
      id: "cspvc6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A loop intended to sum 10 numbers actually sums 11 because the index runs 0..10. This is a classic ___",
            options: [
              "no error — looping over 11 indices to sum 10 values is the standard pattern.",
              "off-by-one error — common when boundary conditions aren't carefully chosen.",
              "compression error in which the index variable was inadvertently shrunk by one.",
              "transport-layer error that caused one extra index to arrive over the network."
            ],
            correctAnswer: 1,
            explanation: "Off-by-one is one of the most common bug categories."
          },
          {
            question: "A program asks for a number and divides 100 by it. For input 0 it crashes. The most appropriate fix is ___",
            options: [
              "ignore the crash since users rarely intentionally type zero into the prompt.",
              "guard with IF input ≠ 0 THEN do the division ELSE inform the user instead.",
              "switch the program from one programming language to another without other changes.",
              "compress the program's source so the divide-by-zero check takes fewer characters."
            ],
            correctAnswer: 1,
            explanation: "Boundary check = guard clause."
          }
        ]
      }
    }
  ]
};
