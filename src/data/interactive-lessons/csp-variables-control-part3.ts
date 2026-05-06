export const cspVariablesControlPart3Data = {
  topicSlug: "csp-variables-control",
  sections: [
    {
      id: "cspvc3-intro",
      type: 'text' as const,
      content: `
# 🔀 Variables & Control Flow

**Part 3 of 7 — Patterns & Examples**

---

## Common Control-Flow Patterns

| Pattern | Skeleton |
|---------|---------|
| **Counter** | i ← 0; REPEAT n TIMES: i ← i + 1 |
| **Accumulator** | total ← 0; FOR EACH x: total ← total + x |
| **Search** | found ← false; FOR EACH x: IF x = target THEN found ← true |
| **Filter** | result ← []; FOR EACH x: IF condition(x) THEN APPEND(result, x) |
| **Max / min** | best ← list[0]; FOR EACH x: IF x > best THEN best ← x |
      `
    },
    {
      id: "cspvc3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Which pattern is **total ← total + grade** part of?",
            options: [
              "Counter — incrementing a tally by exactly one each iteration.",
              "Accumulator — building up a running total from each value.",
              "Search — walking the list looking for a target value.",
              "Filter — selecting matching values into a new list."
            ],
            correctAnswer: 1,
            explanation: "Building up a sum is the accumulator pattern."
          },
          {
            question: "Which pattern produces a NEW list of items meeting a condition?",
            options: [
              "Search — walking the list to find any single matching item.",
              "Counter — tallying how many items meet a condition.",
              "Filter — producing a new list of items meeting a condition.",
              "Accumulator — collapsing a list into a single summary value."
            ],
            correctAnswer: 2,
            explanation: "Filter selects items into a new list."
          }
        ]
      }
    },
    {
      id: "cspvc3-content",
      type: 'text' as const,
      content: `
## Selection Patterns

| Pattern | When |
|---------|------|
| **IF / ELSE** | Two branches. |
| **IF / ELSE IF / ELSE** | Multiple ranked conditions. |
| **Guard** | Early return on edge case. |
| **Lookup** | Map a value to an action via a table. |

## Iteration Patterns

| Pattern | Use |
|---------|-----|
| **Counted loop** | Known number of iterations. |
| **Conditional loop** | Stop when a condition becomes true / false. |
| **List traversal** | Process each item. |
| **Nested loop** | Process pairs (or grid). |

## Mini-walkthrough: Find Maximum

    best ← scoreList[0]
    FOR EACH score IN scoreList:
      IF score > best THEN
        best ← score

Initialize, then update on each item — the canonical pattern for "best so far".
      `
    },
    {
      id: "cspvc3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The pattern **total ← total + x** inside a loop is called the _______ pattern.

2) A pattern that produces a NEW list of items meeting a condition is called _______.

3) A pattern that finds the largest value in a list is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["accumulator", "filter", "maximum"],
        hint1: "Build up a sum.",
        hint2: "Subset.",
        hint3: "\"Best so far\".",
        explanation: "Accumulator, filter, max — three of the most common loop patterns."
      }
    },
    {
      id: "cspvc3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A loop that visits every (i, j) pair in a grid uses ___",
            options: ["nested loops", "a single loop", "no loop", "recursion only"]
          },
          {
            label: "IF / ELSE IF / ELSE is most appropriate when ___",
            options: ["multiple ranked conditions partition the cases", "there are exactly two branches", "no condition is needed", "a loop is needed"]
          },
          {
            label: "A \"guard clause\" pattern handles ___",
            options: ["edge cases early so the main logic stays clean", "arithmetic only", "list traversal", "compression"]
          }
        ],
        correctAnswers: ["nested loops", "multiple ranked conditions partition the cases", "edge cases early so the main logic stays clean"],
        hint1: "Pairs / grid.",
        hint2: "Multi-way branching.",
        hint3: "Early exit.",
        explanation: "Nested loops = pairs. Else-if chain = multi-way. Guards handle edges first."
      }
    },
    {
      id: "cspvc3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Patterns

- Recognize the loop pattern from the body: total += → accumulator; result.APPEND → filter; if x > best → max.
- Match selection style to # of branches.
- Nested loops handle 2D / pairs.
      `
    },
    {
      id: "cspvc3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program counts how many items in a list are negative. The right pattern is ___",
            options: [
              "accumulator with a condition (count ← 0; FOR EACH x: IF x < 0 THEN count ← count + 1).",
              "no loop — the count of negatives can be read directly off any list value.",
              "sort the list first, then read the count of negatives from the sorted output.",
              "compress the list first, then count negative tokens in the compressed bytes."
            ],
            correctAnswer: 0,
            explanation: "Conditional accumulator (counter)."
          },
          {
            question: "A program finds the longest string in a list. The right pattern is ___",
            options: [
              "\"best so far\" with comparison on LENGTH(string) on each list element.",
              "no loop — the longest string can be inferred from the first element directly.",
              "random selection of one element and returning it as the longest candidate.",
              "encryption of every string and returning the one with the longest ciphertext."
            ],
            correctAnswer: 0,
            explanation: "\"Best so far\" pattern, comparing by length."
          }
        ]
      }
    }
  ]
};
