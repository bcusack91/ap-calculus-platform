export const cspProceduresListsPart4Data = {
  topicSlug: "csp-procedures-lists",
  sections: [
    {
      id: "csppl4-intro",
      type: 'text' as const,
      content: `
# 📋 Procedures & Lists

**Part 4 of 7 — Connections & Interactions**

---

## Procedures & Lists Connect Across CSP

| Connection | Why |
|-----------|-----|
| Procedures ↔ Algorithms | Algorithms are usually packaged as procedures. |
| Lists ↔ Data | Lists are the simplest structured data. |
| Procedures ↔ Collaboration | Reusable named procedures help teams divide work. |
| Procedures ↔ Testing | Procedures are testable units. |
      `
    },
    {
      id: "csppl4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A unit test typically tests ___",
            options: [
              "the entire program end-to-end with a single integration scenario.",
              "a single procedure, using known inputs and their expected outputs.",
              "the program's speed on the largest input it will ever receive.",
              "every procedure at once, with random inputs and no expected outputs."
            ],
            correctAnswer: 1,
            explanation: "Unit tests target single procedures."
          },
          {
            question: "Two teammates can build different features in parallel most easily when ___",
            options: [
              "everyone shares one giant function and edits the same lines simultaneously.",
              "features are split into well-defined procedures with clear inputs and outputs.",
              "no procedures exist and every feature is one continuous top-to-bottom script.",
              "one teammate writes all procedures and the other only reviews the code."
            ],
            correctAnswer: 1,
            explanation: "Procedures are the unit of parallel work."
          }
        ]
      }
    },
    {
      id: "csppl4-content",
      type: 'text' as const,
      content: `
## Lists Are Often Procedure Inputs / Outputs

Most non-trivial procedures take or return lists:

    PROCEDURE topThree(scores)
      sorted ← SORT(scores, descending)
      RETURN [sorted[1], sorted[2], sorted[3]]

## Mutability Caution

When a procedure receives a list, modifying it may modify the caller's list (depending on language). To stay safe, document whether your procedure mutates inputs or returns a fresh list.

## Pure Functions Are Easier To Test

A pure function (no side effects, output depends only on inputs) can be tested with simple input → expected-output pairs:

| Input | Expected output |
|-------|----------------|
| [3, 1, 2] | 2.0 |
| [10, 10, 10] | 10.0 |
| [] | 0.0 (or special handling) |

This is why pure functions are encouraged in modern code.
      `
    },
    {
      id: "csppl4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A function whose output depends only on its inputs (and has no side effects) is called _______.

2) A test that verifies a single procedure's behavior is called a _______ test.

3) When a procedure changes the caller's list, we say it _______ the input.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["pure", "unit", "mutates"],
        hint1: "No side effects.",
        hint2: "Smallest test.",
        hint3: "Modifies in place.",
        explanation: "Pure / unit test / mutates are core vocabulary."
      }
    },
    {
      id: "csppl4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A pure function is easier to ___",
            options: ["test and reason about because outputs depend only on inputs", "change at runtime because it can modify global variables", "speed up because it skips checking its parameter values", "reuse because it displays results instead of returning them"]
          },
          {
            label: "A procedure that returns a NEW list (without modifying the input) is ___",
            options: ["safer to compose with other procedures", "unable to be called more than one time", "riskier because it changes the caller's list", "required to store results in a global variable"]
          },
          {
            label: "Splitting a feature into 4 named procedures helps ___",
            options: ["teammates work in parallel and test each piece in isolation", "the program run faster because there are fewer total steps", "the program avoid needing any parameters or return values", "teammates skip testing since each part is small and simple"]
          }
        ],
        correctAnswers: ["test and reason about because outputs depend only on inputs", "safer to compose with other procedures", "teammates work in parallel and test each piece in isolation"],
        hint1: "Predictable.",
        hint2: "No surprises.",
        hint3: "Parallel work.",
        explanation: "Pure → testable; non-mutating → composable; small procedures → parallel teamwork."
      }
    },
    {
      id: "csppl4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Procedures/Lists

- Procedures = the unit of reuse, abstraction, testing, and team-coordination.
- Lists = the most common structured data passed between procedures.
- Pure functions are easier to test, parallelize, and reason about.
      `
    },
    {
      id: "csppl4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team has one 500-line function. Refactoring it into 6 named procedures most directly improves ___",
            options: [
              "the speed of the program, since procedure calls run faster than inline code.",
              "readability, testability, and how easily teammates can work in parallel.",
              "the memory the program needs, since procedures share one set of variables.",
              "correctness, security, and speed, since procedures can never contain errors."
            ],
            correctAnswer: 1,
            explanation: "Decomposition into procedures is one of the most universally beneficial refactors."
          },
          {
            question: "A procedure **shuffleInPlace(list)** reorders the caller's list. The most CSP-aligned best practice is ___",
            options: [
              "leave it; the caller will eventually figure out that the list has been modified.",
              "document that the input is mutated, or return a new shuffled list.",
              "rename it to shuffle so that callers assume it returns a brand-new list.",
              "make the list a global variable so every procedure can see the change."
            ],
            correctAnswer: 1,
            explanation: "Make mutation explicit; or return a fresh value."
          }
        ]
      }
    }
  ]
};
