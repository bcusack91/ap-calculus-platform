export const cspProceduresListsPart7Data = {
  topicSlug: "csp-procedures-lists",
  sections: [
    {
      id: "csppl7-intro",
      type: 'text' as const,
      content: `
# 📋 Procedures & Lists

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Procedures & Lists
      `
    },
    {
      id: "csppl7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A procedure's definition uses ___; the call site uses ___",
            options: [
              "arguments / parameters",
              "parameters / arguments",
              "returns / inputs",
              "inputs / returns"
            ],
            correctAnswer: 1,
            explanation: "Definition has parameters; call has arguments."
          },
          {
            question: "AP CSP pseudocode lists are indexed starting at ___",
            options: [
              "0",
              "1",
              "-1",
              "10"
            ],
            correctAnswer: 1,
            explanation: "1-indexed."
          }
        ]
      }
    },
    {
      id: "csppl7-content",
      type: 'text' as const,
      content: `
## Final Vocab

| Term | Definition |
|------|-----------|
| Procedure | Named, reusable block of code. |
| Parameter | Variable in the definition. |
| Argument | Value at the call site. |
| Return | Value the procedure produces. |
| List | Ordered indexed collection. |
| LENGTH | Number of elements. |
| APPEND | Add to end. |
| Traversal | Accessing list elements with a loop (complete or partial). |
| Data abstraction | One name for a collection of data. |
| Procedural abstraction | Using a procedure knowing what it does, not how. |
| Modularity | Dividing a program into separate subprograms. |

## Common Pitfalls

- Confusing parameter and argument.
- Off-by-one with 1-indexed lists.
- Forgetting to RETURN a value.
- Reading an index below 1 or above LENGTH(list), which is an error.
- Writing one big function instead of decomposing.
      `
    },
    {
      id: "csppl7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Dividing a program into separate subprograms is called _______.

2) The number of elements in a list is given by the _______ operation.

3) A loop that RETURNs as soon as it finds a match performs a _______ traversal.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["modularity", "LENGTH", "partial"],
        hint1: "Built from modules.",
        hint2: "List size.",
        hint3: "Not every element is accessed.",
        explanation: "Modularity divides a program into subprograms. LENGTH counts elements. Stopping early makes a traversal partial."
      }
    },
    {
      id: "csppl7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Decomposing a 500-line function into smaller procedures primarily improves ___",
            options: ["readability, testability, and reuse", "execution speed and memory efficiency", "the program's compiled file size", "the number of features the program has"]
          },
          {
            label: "After list ← [2, 4, 6] and REMOVE(list, 1), list[1] is ___",
            options: ["4", "2", "6", "an error"]
          },
          {
            label: "A good set of test inputs for a list procedure includes ___",
            options: ["typical values, boundary values, and an empty list", "only the values the programmer expects users to enter", "one very large list and no other test cases", "random values chosen after the procedure has shipped"]
          }
        ],
        correctAnswers: ["readability, testability, and reuse", "4", "typical values, boundary values, and an empty list"],
        hint1: "Decomposition wins.",
        hint2: "REMOVE shifts the later elements left.",
        hint3: "Test the extremes, not just the usual case.",
        explanation: "Decomposing into procedures improves readability and reuse. After 2 is removed, 4 moves to index 1. Testing should cover typical, boundary, and empty inputs."
      }
    },
    {
      id: "csppl7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Parameter vs. argument: definition vs. call.
- LENGTH, APPEND, INSERT, REMOVE, list[i] are AP's core list ops.
- Name the traversal pattern when you see it: sum/average, min/max, keep some (APPEND inside IF), or linear search.
- Decomposing into named procedures is almost always the right move.
      `
    },
    {
      id: "csppl7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team has one giant function with 12 distinct responsibilities. The CSP-aligned refactor is ___",
            options: [
              "leave it, since one function is easier to find than twelve.",
              "extract each responsibility into a named procedure, then compose them.",
              "split the function every 50 lines, whatever each part does.",
              "add comments marking where each responsibility begins."
            ],
            correctAnswer: 1,
            explanation: "Decompose into named, single-responsibility procedures."
          },
          {
            question: "aList ← [1, 2, 3]\nbList ← aList\nbList[1] ← 9\nDISPLAY(aList[1])\n\nWhat is displayed?",
            options: [
              "9",
              "1",
              "2",
              "an error"
            ],
            correctAnswer: 1,
            explanation: "On the exam reference sheet, bList ← aList assigns a copy of aList. Changing bList[1] does not change aList, so aList[1] is still 1."
          }
        ]
      }
    }
  ]
};
