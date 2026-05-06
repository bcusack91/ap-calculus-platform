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
              "linear and one-shot.",
              "iterative — investigate, design, prototype, test, refine, repeat.",
              "random.",
              "optional."
            ],
            correctAnswer: 1,
            explanation: "The exam emphasizes iterative dev."
          },
          {
            question: "A logic error means the program ___",
            options: [
              "fails to parse.",
              "crashes immediately.",
              "runs but produces an incorrect result.",
              "is encrypted."
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
| Version control | Tracks every change. |
| CI / CD | Automatic integration / deployment. |
| Code review | Other devs inspect changes. |

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

3) A process where teammates inspect proposed changes before merging is called code _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["iterative", "logic", "review"],
        hint1: "Repeated cycles.",
        hint2: "Wrong answer, no crash.",
        hint3: "Sanity check.",
        explanation: "Iterative dev, logic errors, and code review are core CSP concepts."
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
            label: "A team that releases small changes daily with automated tests is using ___",
            options: ["CI / CD", "waterfall", "no version control", "manual deployment only"]
          },
          {
            label: "A feature documented for users in a \"how to\" guide is part of ___",
            options: ["user-facing documentation", "malware", "compression", "encryption"]
          },
          {
            label: "When designing for a target audience, the best validation is ___",
            options: ["testing with real users from that audience", "testing only with developers", "reading the spec aloud", "checking the file size"]
          }
        ],
        correctAnswers: ["CI / CD", "user-facing documentation", "testing with real users from that audience"],
        hint1: "Continuous integration / deployment.",
        hint2: "Help users.",
        hint3: "Real users surface real issues.",
        explanation: "Daily releases + tests = CI/CD. User guides = documentation. Real users validate design."
      }
    },
    {
      id: "cspcd7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- The AP exam loves "what would the team do NEXT?" — answer with iterate, test, gather feedback, document.
- Distinguish syntax / runtime / logic errors with a one-sentence example each.
- Code review and version control are foundational.
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
            question: "A startup releases an MVP, gets feedback, and rebuilds key features based on user behavior. Which model best describes this?",
            options: [
              "Iterative / agile development.",
              "Pure waterfall.",
              "No development model at all.",
              "Encrypted development."
            ],
            correctAnswer: 0,
            explanation: "Releasing, gathering feedback, rebuilding = iterative."
          },
          {
            question: "You inherit code with no comments, no tests, no commit history. The most appropriate FIRST step is ___",
            options: [
              "rewrite the entire codebase from scratch in a modern style.",
              "add tests around current behavior and identify the most critical functions before changing anything.",
              "start refactoring immediately so the code matches your preferred style.",
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
