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
| Map / filter / reduce | Three core list patterns. |
| Higher-order procedure | Takes / returns procedures. |
| Pure function | No side effects. |

## Common Pitfalls

- Confusing parameter and argument.
- Off-by-one with 1-indexed lists.
- Forgetting to RETURN a value.
- Mutating a caller's list without documenting it.
- Writing one big function instead of decomposing.
      `
    },
    {
      id: "csppl7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A higher-order procedure takes another _______ as an argument.

2) The number of elements in a list is given by the _______ operation.

3) A function with no side effects whose output depends only on its inputs is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["procedure", "LENGTH", "pure"],
        hint1: "Procedures as values.",
        hint2: "List size.",
        hint3: "Predictable.",
        explanation: "HOF / LENGTH / pure functions."
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
            options: ["readability, testability, and reuse", "compression", "TLS speed", "IPv6 routing"]
          },
          {
            label: "A procedure that returns true / false is called a ___",
            options: ["predicate", "constructor", "reducer", "mapper"]
          },
          {
            label: "A unit test ideally exercises ___",
            options: ["a single procedure with known inputs and expected outputs", "the entire program", "the network", "compression"]
          }
        ],
        correctAnswers: ["readability, testability, and reuse", "predicate", "a single procedure with known inputs and expected outputs"],
        hint1: "Decomposition wins.",
        hint2: "Boolean returner.",
        hint3: "Single procedure.",
        explanation: "Decomposition + predicates + unit tests are core good practice."
      }
    },
    {
      id: "csppl7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Parameter vs. argument: definition vs. call.
- LENGTH, APPEND, INSERT, REMOVE, list[i] are AP's core list ops.
- Map / filter / reduce: name them when you see them.
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
              "leave the function alone; consolidating responsibilities is the goal of good design.",
              "extract each responsibility into a named procedure with a clear input/output, then compose.",
              "compress the source file so the 12 responsibilities take less disk space when archived.",
              "encrypt the function body so future maintainers cannot accidentally split the responsibilities."
            ],
            correctAnswer: 1,
            explanation: "Decompose into named, single-responsibility procedures."
          },
          {
            question: "A procedure **removeFirstNegative(list)** modifies the caller's list. A teammate is surprised when their original list changes. The CSP-aligned fix is ___",
            options: [
              "leave it as-is; teammates should learn to expect mutation in any procedure call.",
              "document the mutation OR return a fresh modified copy and leave the original untouched.",
              "compress the caller's list so the in-place removal takes less memory than before.",
              "encrypt the caller's list so the in-place removal cannot be observed by other code."
            ],
            correctAnswer: 1,
            explanation: "Make mutation explicit, or avoid it."
          }
        ]
      }
    }
  ]
};
