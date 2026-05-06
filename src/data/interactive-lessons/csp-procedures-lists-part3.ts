export const cspProceduresListsPart3Data = {
  topicSlug: "csp-procedures-lists",
  sections: [
    {
      id: "csppl3-intro",
      type: 'text' as const,
      content: `
# 📋 Procedures & Lists

**Part 3 of 7 — Patterns & Examples**

---

## Procedure Patterns

| Pattern | Use |
|---------|-----|
| **Pure function** | Inputs → output, no side effects. |
| **Predicate** | Returns true / false. |
| **Constructor** | Builds a structured value. |
| **Action** | Performs a side effect (print, save). |
| **Higher-order** | Takes another procedure as a parameter. |

## List Patterns

| Pattern | Skeleton |
|---------|---------|
| **Map** | new = []; FOR EACH x IN list: APPEND(new, f(x)) |
| **Filter** | new = []; FOR EACH x IN list: IF p(x) THEN APPEND(new, x) |
| **Reduce / fold** | acc = init; FOR EACH x IN list: acc = combine(acc, x) |
      `
    },
    {
      id: "csppl3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A procedure **isEven(n)** that returns true / false is a ___",
            options: [
              "constructor — a procedure that builds and returns a structured value",
              "action — a procedure whose primary purpose is producing a side effect",
              "predicate — a procedure that returns a boolean true / false answer",
              "reducer — a procedure that collapses a list into a single summary"
            ],
            correctAnswer: 2,
            explanation: "A boolean-returning procedure is a predicate."
          },
          {
            question: "Building a new list where each element is **f(originalElement)** is the ___ pattern.",
            options: [
              "filter — keeping only the elements that satisfy a predicate",
              "map — applying a transformation to each element of the list",
              "reduce — collapsing the entire list into a single summary value",
              "sort — rearranging the elements into ascending or descending order"
            ],
            correctAnswer: 1,
            explanation: "Map applies f to each element."
          }
        ]
      }
    },
    {
      id: "csppl3-content",
      type: 'text' as const,
      content: `
## Map / Filter / Reduce In Pseudocode

    doubled ← []                 // map
    FOR EACH n IN nums:
      APPEND(doubled, n * 2)

    evens ← []                   // filter
    FOR EACH n IN nums:
      IF n MOD 2 = 0 THEN APPEND(evens, n)

    total ← 0                    // reduce (sum)
    FOR EACH n IN nums:
      total ← total + n

These three patterns underlie almost all list processing.

## 2D Lists (Lists Of Lists)

    grid ← [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]]
    grid[2][3] = 6   (row 2, column 3 — 1-indexed)

To process every cell:

    FOR EACH row IN grid:
      FOR EACH cell IN row:
        PROCESS(cell)

This is a **nested loop**.
      `
    },
    {
      id: "csppl3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A pattern that produces a NEW list where each element is f(x) is called _______.

2) A pattern that combines all elements into a single value is called _______.

3) A list of lists, like a grid, is a _______-dimensional list.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["map", "reduce", "two"],
        hint1: "Transform each.",
        hint2: "Roll-up.",
        hint3: "2D.",
        explanation: "Map / reduce / filter; 2D lists are lists of lists."
      }
    },
    {
      id: "csppl3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A predicate function returns ___",
            options: ["true or false", "a number", "a list", "a string"]
          },
          {
            label: "A higher-order procedure takes ___",
            options: ["another procedure as a parameter", "no parameters", "only numeric parameters", "only strings"]
          },
          {
            label: "To touch every cell in a 2D list, you typically use ___",
            options: ["a nested loop", "a single loop", "no loop", "recursion only"]
          }
        ],
        correctAnswers: ["true or false", "another procedure as a parameter", "a nested loop"],
        hint1: "Boolean.",
        hint2: "Procedure as data.",
        hint3: "Loops within loops.",
        explanation: "Predicates return booleans. HOFs take procedures. Nested loops traverse 2D."
      }
    },
    {
      id: "csppl3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Procedures & List Patterns

- Map / filter / reduce: recognize the pattern → name it.
- 2D lists need nested loops.
- Predicates return true / false; pair them with filter.
      `
    },
    {
      id: "csppl3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program needs squares of all numbers in a list. The pattern is ___",
            options: [
              "filter — selecting only some of the numbers from the original list",
              "map — transforming each number to its square in a new list",
              "reduce — collapsing the entire list into one summary value",
              "sort — rearranging the original numbers in ascending order"
            ],
            correctAnswer: 1,
            explanation: "Map transforms each element."
          },
          {
            question: "A program needs the sum of squares of even numbers in a list. The most natural composition is ___",
            options: [
              "filter (even) → map (square) → reduce (sum) composed in that order.",
              "compression of the list followed by encryption of the compressed bytes.",
              "no operation — the answer can be read directly off any single element.",
              "sort the list and then reverse it before computing any per-element value."
            ],
            correctAnswer: 0,
            explanation: "Filter → map → reduce is the canonical pipeline."
          }
        ]
      }
    }
  ]
};
