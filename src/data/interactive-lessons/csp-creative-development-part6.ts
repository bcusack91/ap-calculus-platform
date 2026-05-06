export const cspCreativeDevelopmentPart6Data = {
  topicSlug: "csp-creative-development",
  sections: [
    {
      id: "cspcd6-intro",
      type: 'text' as const,
      content: `
# 🎨 Creative Development

**Part 6 of 7 — Problem-Solving Workshop**

---

## Creative Development Workshop

Apply dev-process vocabulary to AP-style scenarios.
      `
    },
    {
      id: "cspcd6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "After two weeks of coding, a team realizes their understanding of the user's problem was wrong. What should they do?",
            options: [
              "Ship the current code anyway and let users adapt to it.",
              "Re-investigate the problem with users, then redesign or refactor.",
              "Continue building the original plan since the team has already started.",
              "Replace the whole project with a different but vaguely similar one."
            ],
            correctAnswer: 1,
            explanation: "Iterative dev welcomes returning to investigate."
          },
          {
            question: "A program with a missing semicolon ___",
            options: [
              "runs but consistently produces a slightly wrong result.",
              "fails to parse or compile — a syntax error caught before runtime.",
              "crashes intermittently depending on the input it receives.",
              "runs faster because the parser has fewer characters to process."
            ],
            correctAnswer: 1,
            explanation: "Syntax errors are caught at parse time."
          }
        ]
      }
    },
    {
      id: "cspcd6-content",
      type: 'text' as const,
      content: `
## Worked Scenario: Bug Triage

1. **Reproduce** consistently.
2. **Isolate** the cause.
3. **Write a failing test**.
4. **Fix** the code.
5. **Re-run tests**.
6. **Document** the change.

This pattern (reproduce → isolate → test → fix → verify → document) applies to almost every defect.

## Worked Scenario: Feature Decomposition

"Share a study set with a friend" decomposes into:

- **generate a shareable link**.
- **resolve a token** back to the set.
- **share button + dialog**.
- **permission check** (viewer vs co-editor).

Each piece can be built and tested independently.
      `
    },
    {
      id: "cspcd6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The first step in fixing a bug is to _______ it (consistently make it happen).

2) After fixing a bug, you should re-run the _______ to ensure no regression.

3) Splitting "share a study set" into smaller functions is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["reproduce", "tests", "decomposition"],
        hint1: "Make it happen reliably.",
        hint2: "Automated checks.",
        hint3: "Divide-and-conquer.",
        explanation: "Reproduce, then isolate. Tests catch regressions. Decomposition splits big features."
      }
    },
    {
      id: "cspcd6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A test that fails because of the bug, then passes after the fix, is called a ___",
            options: ["regression test", "syntax test", "compression test", "speed test"]
          },
          {
            label: "When estimating iteration length, the trade-off is between feedback frequency and ___",
            options: ["ceremony / overhead", "file size", "compression ratio", "TCP throughput"]
          },
          {
            label: "Documenting the fix in a commit message benefits ___",
            options: ["anyone debugging similar issues in the future", "only the original author", "only the customer", "only the compiler"]
          }
        ],
        correctAnswers: ["regression test", "ceremony / overhead", "anyone debugging similar issues in the future"],
        hint1: "Prevents recurrence.",
        hint2: "Cycle cost.",
        hint3: "Future debuggers.",
        explanation: "Regression tests guard against recurrence. Iteration length balances feedback vs overhead. Commit messages aid debuggers."
      }
    },
    {
      id: "cspcd6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop Style

- "What should the team do next?" answers usually involve **investigate, test, refine, document** — never "ship blindly" or "quit".
- "Decompose this feature" → list 3-5 named procedures.
- "How can we tell if our fix worked?" → automated tests + reproduce the original case.
      `
    },
    {
      id: "cspcd6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team plans a single 6-month \"big bang\" release with no intermediate testing. The most CSP-aligned critique is ___",
            options: [
              "a six-month release window is too short to fit useful work.",
              "long cycles with no intermediate feedback hide problems until they are expensive to fix.",
              "the team just needs to write more in-line code comments to stay on track.",
              "big single-shot releases are the safest way to ship complex software."
            ],
            correctAnswer: 1,
            explanation: "Long feedback loops hide problems."
          },
          {
            question: "A function consistently fails on input value 0 only. The next best step is ___",
            options: [
              "ignore the failing case since users rarely pass exactly 0.",
              "add a focused test for 0 and adjacent edge cases like -1 and 1, then fix the function.",
              "rewrite the entire program in a different language to bypass the bug.",
              "wrap every call to the function in a try/except that silently swallows errors."
            ],
            correctAnswer: 1,
            explanation: "Pin the failure with a test, then fix."
          }
        ]
      }
    }
  ]
};
