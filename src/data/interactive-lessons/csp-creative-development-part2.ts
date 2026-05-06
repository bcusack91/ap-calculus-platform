export const cspCreativeDevelopmentPart2Data = {
  topicSlug: "csp-creative-development",
  sections: [
    {
      id: "cspcd2-intro",
      type: 'text' as const,
      content: `
# 🎨 Creative Development

**Part 2 of 7 — Key Processes**

---

## The Development Process

AP CSP frames program creation as an iterative cycle, not a straight line.

| Phase | What you do |
|-------|-------------|
| **Investigate** | Understand the user need; gather requirements. |
| **Design** | Plan algorithms, data, UI; sketch / pseudocode. |
| **Prototype** | Build a small testable slice. |
| **Test** | Run with real data; gather feedback. |
| **Refine** | Iterate based on test results and user feedback. |

You revisit any phase at any time — that's what makes it iterative.
      `
    },
    {
      id: "cspcd2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team finishes a \"final\" version of a program, then a user reports it crashes on empty input. What development phase should follow?",
            options: [
              "Ship as-is — the user input was invalid anyway.",
              "Refine: fix the bug, then re-test the program.",
              "Skip ahead to the next planned feature first.",
              "Discard the program and rebuild it from scratch."
            ],
            correctAnswer: 1,
            explanation: "Iterative development means refining based on real-world feedback, then re-testing."
          },
          {
            question: "Why do programmers prototype before writing a polished version?",
            options: [
              "Prototypes always perform faster than the final code.",
              "A small testable slice exposes design problems early, when changes are cheap.",
              "Prototypes guarantee the program will be free of bugs.",
              "Prototypes can be shipped directly without further work."
            ],
            correctAnswer: 1,
            explanation: "Early prototypes surface design issues before significant work is invested."
          }
        ]
      }
    },
    {
      id: "cspcd2-content",
      type: 'text' as const,
      content: `
## Why Iteration Beats "Big Design Up Front"

A waterfall approach (design everything, then build, then test) fails when:

- Requirements are unclear or change.
- Users discover what they want only after seeing something.
- Technical risks aren't obvious until prototypes hit reality.

Iterative development reduces risk by **shortening feedback loops**.

## Documentation Is Part Of Development

| Documentation | Purpose |
|---------------|---------|
| **Comments** in code | Explain WHY (not just what). |
| **README** | Describe purpose, setup, usage. |
| **Change log** | Record what changed, when, why. |
| **User guide** | Help end users accomplish tasks. |

## User-Centered Design

Programs are for **users**, not coders. Identify the user, their goal, and test with the real target population — not just yourself.
      `
    },
    {
      id: "cspcd2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A development approach where you build, test, and refine in repeated cycles is called _______ development.

2) A small, working version used to test a design idea is called a _______.

3) Code _______ explain WHY a section exists, not just what it does.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["iterative", "prototype", "comments"],
        hint1: "Repeated cycles.",
        hint2: "Test slice.",
        hint3: "Lines starting with // or #.",
        explanation: "Iterative dev = repeated build-test-refine. Prototype = testable slice. Comments document intent."
      }
    },
    {
      id: "cspcd2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A README primarily exists to ___",
            options: ["help others (or future you) understand and use the program", "pass the AP exam", "increase file size", "replace all comments"]
          },
          {
            label: "Testing with real users primarily helps ___",
            options: ["reveal usability issues the developer never noticed", "guarantee zero bugs", "reduce file size", "eliminate iteration"]
          },
          {
            label: "Iterative development reduces risk by ___",
            options: ["shortening feedback loops between assumption and reality", "avoiding all testing", "writing all code first", "never refactoring"]
          }
        ],
        correctAnswers: ["help others (or future you) understand and use the program", "reveal usability issues the developer never noticed", "shortening feedback loops between assumption and reality"],
        hint1: "Onboarding doc.",
        hint2: "Users surface what creators miss.",
        hint3: "Frequent feedback = lower risk.",
        explanation: "READMEs help collaborators. User testing exposes blind spots. Short feedback loops lower risk."
      }
    },
    {
      id: "cspcd2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Development Process

- "What should the team do next?" usually = test, gather feedback, refine, document — not "ship blindly".
- "Iterative" is often the right adjective for a sound process.
- "User-centered" beats "based on what we wanted to build".
      `
    },
    {
      id: "cspcd2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team builds an app for elderly users but never tests with elderly users. After release, complaints flood in about tiny text. What lesson best captures this?",
            options: [
              "Picking a bigger default font would have solved every UI complaint.",
              "User-centered testing with the actual target population would have surfaced this earlier.",
              "In-house testing by the developers should have been enough to catch the issue.",
              "Adding more code comments would have prevented the usability complaint."
            ],
            correctAnswer: 1,
            explanation: "Testing with the real target population catches issues developers miss."
          },
          {
            question: "A startup spends 18 months perfecting an unreleased product, then learns users wanted something different. The most CSP-aligned diagnosis is ___",
            options: [
              "the product was technically fine and just needed a stronger marketing campaign.",
              "iterative releases would have surfaced the user-need mismatch sooner and at lower cost.",
              "long single-shot waterfall releases are still the most reliable way to ship software.",
              "collecting user feedback this late is normal and was unlikely to change the outcome."
            ],
            correctAnswer: 1,
            explanation: "Iterative releases shorten the loop between assumption and reality."
          }
        ]
      }
    }
  ]
};
