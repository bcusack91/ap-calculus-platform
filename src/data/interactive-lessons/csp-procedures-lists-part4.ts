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
              "a single procedure with known inputs and the corresponding expected outputs.",
              "the network layer's ability to deliver packets reliably under load.",
              "the encryption module's ability to round-trip arbitrary plaintext blobs."
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
              "transport-layer encryption is required between every two teammate's commits."
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
            options: ["test and reason about because outputs depend only on inputs", "compress", "encrypt", "route"]
          },
          {
            label: "A procedure that returns a NEW list (without modifying the input) is ___",
            options: ["safer to compose with other procedures", "always slower", "always larger", "always encrypted"]
          },
          {
            label: "Splitting a feature into 4 named procedures helps ___",
            options: ["teammates work in parallel and test each piece in isolation", "compression", "TLS", "IPv6"]
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
              "the compression ratio of the source-code file when it is later archived.",
              "readability, testability, and the ability for teammates to work in parallel.",
              "the speed of the TLS handshake the program performs at startup time.",
              "the routing efficiency of IPv6 packets the program sends across the network."
            ],
            correctAnswer: 1,
            explanation: "Decomposition into procedures is one of the most universally beneficial refactors."
          },
          {
            question: "A procedure **shuffleInPlace(list)** reorders the caller's list. The most CSP-aligned best practice is ___",
            options: [
              "leave it; the caller will eventually figure out that the list has been modified.",
              "document clearly that the input is mutated, OR return a NEW shuffled list instead.",
              "compress the list before shuffling so the in-place modification fits in less memory.",
              "encrypt the list before shuffling so the in-place modification cannot be observed."
            ],
            correctAnswer: 1,
            explanation: "Make mutation explicit; or return a fresh value."
          }
        ]
      }
    }
  ]
};
