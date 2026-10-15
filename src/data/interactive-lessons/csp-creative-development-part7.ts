export const cspCreativeDevelopmentPart7Data = {
  topicSlug: "csp-creative-development",
  sections: [
    {
      id: "cspcd7-intro",
      type: 'text' as const,
      content: `
# 🎨 Creative Development

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Creative Development

Final review of dev-process vocabulary.
      `
    },
    {
      id: "cspcd7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "AP CSP frames the development process as ___",
            options: [
              "linear, with planning, coding, and testing each done once, in strict order.",
              "iterative, cycling through investigation, design, prototyping, and testing.",
              "test-driven only, with all tests written before any design work starts.",
              "open-ended, with no defined phases so developers code as ideas arise."
            ],
            correctAnswer: 1,
            explanation: "The exam emphasizes iterative dev."
          },
          {
            question: "A logic error means the program ___",
            options: [
              "fails to compile because a keyword is misspelled.",
              "stops immediately with a runtime crash message.",
              "runs but gives a wrong result.",
              "runs correctly but uses more memory."
            ],
            correctAnswer: 2,
            explanation: "Logic errors run but give wrong output."
          }
        ]
      }
    },
    {
      id: "cspcd7-content",
      type: 'text' as const,
      content: `
## Final Vocab

| Term | Definition |
|------|-----------|
| Iterative development | Build-test-refine cycles. |
| Prototype | Small testable slice. |
| Decomposition | Splitting a problem. |
| Abstraction | Hiding details behind an interface. |
| Procedure | Reusable, named block of code. |
| Event-driven | Code runs in response to events. |
| Syntax error | Caught at parse time. |
| Runtime error | Caught while running. |
| Logic error | Wrong output, no crash. |
| Incremental development | Build and test small pieces before adding them to the whole. |
| Program documentation | Written description of what code does and how it was developed. |
| Overflow error | A number outside the range that can be represented. |

## Common Pitfalls

- Treating dev as one-shot rather than iterative.
- Skipping testing after manual checks.
- Over-collecting user data without thinking about privacy.
- Trusting AI-generated code without review.
- Ignoring user feedback because "the code is fine".
      `
    },
    {
      id: "cspcd7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The development cycle the AP exam emphasizes is _______.

2) A program that produces the wrong output without crashing has a _______ error.

3) A process that builds and tests small pieces before adding each one to the whole is called _______ development.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["iterative", "logic", "incremental"],
        hint1: "Repeated cycles.",
        hint2: "Wrong answer, no crash.",
        hint3: "Piece by piece, in increments.",
        explanation: "Iterative and incremental development and the error types are core CSP Big Idea 1 concepts."
      }
    },
    {
      id: "cspcd7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A team that builds one small feature, tests it, and only then adds the next is using ___",
            options: ["incremental development", "a single big-bang release", "pair programming", "no development process"]
          },
          {
            label: "A comment stating \"This code was generated using [AI tool name]\" is ___",
            options: ["an acknowledgment of the code's source", "a syntax error in the program", "a test case for the procedure", "an event that triggers the code"]
          },
          {
            label: "When designing for a target audience, the best validation is ___",
            options: ["testing with real users from that audience", "a review by the development team", "positive results on the automated test suite", "a quick look by senior engineers"]
          }
        ],
        correctAnswers: ["incremental development", "an acknowledgment of the code's source", "testing with real users from that audience"],
        hint1: "Small increments, each tested.",
        hint2: "It credits where the code came from.",
        hint3: "Real users surface real issues.",
        explanation: "Building and testing piece by piece is incremental development. Naming the AI tool acknowledges the code's source. Real users validate a design."
      }
    },
    {
      id: "cspcd7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- The AP exam loves "what would the team do NEXT?" — answer with iterate, test, gather feedback, document.
- Distinguish syntax / runtime / logic errors with a one-sentence example each.
- Acknowledge code from other sources, including AI tools, in the program documentation.
- Frame development decisions as having technical AND user/ethical impact.
      `
    },
    {
      id: "cspcd7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A startup releases a basic first version, gets feedback, and rebuilds key features based on user behavior. Which model best describes this?",
            options: [
              "Iterative development.",
              "Waterfall development.",
              "Big-bang development.",
              "Linear, phase-gated development."
            ],
            correctAnswer: 0,
            explanation: "Releasing, gathering feedback, rebuilding = iterative."
          },
          {
            question: "You inherit a program with no comments, no documentation, and no tests. The most appropriate FIRST step is ___",
            options: [
              "rewrite the entire codebase from scratch in a cleaner, modern style.",
              "add tests that capture current behavior before changing anything.",
              "start refactoring at once and add tests only after the style is fixed.",
              "delete any code whose purpose you cannot quickly understand at a glance."
            ],
            correctAnswer: 1,
            explanation: "Stabilize understanding before changing — characterize current behavior with tests first."
          }
        ]
      }
    }
  ]
};
