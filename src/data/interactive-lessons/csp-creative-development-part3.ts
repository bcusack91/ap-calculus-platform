export const cspCreativeDevelopmentPart3Data = {
  topicSlug: "csp-creative-development",
  sections: [
    {
      id: "cspcd3-intro",
      type: 'text' as const,
      content: `
# 🎨 Creative Development

**Part 3 of 7 — Patterns & Examples**

---

## Common Patterns In Program Design

| Pattern | Use case |
|---------|---------|
| **Sequential** | Steps run in order. |
| **Selection** | An IF chooses among paths. |
| **Iteration** | A loop repeats steps. |
| **Procedure** | Bundle reusable steps. |
| **Event-driven** | Code runs in response to a user action. |
      `
    },
    {
      id: "cspcd3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A button-click handler that runs only when a user clicks is an example of ___",
            options: [
              "sequential code that runs top-to-bottom on launch",
              "event-driven code triggered by a user action",
              "iterative code that loops a fixed number of times",
              "recursive code that calls itself for each event"
            ],
            correctAnswer: 1,
            explanation: "Event-driven code responds to events."
          },
          {
            question: "Which pattern most directly reduces code duplication?",
            options: [
              "Writing the same block of statements at each call site.",
              "Defining a procedure once and calling it from many places.",
              "Replacing functions with a long chain of IF statements.",
              "Using hardcoded literal values inline at each call site."
            ],
            correctAnswer: 1,
            explanation: "Procedures let you write logic once and reuse it."
          }
        ]
      }
    },
    {
      id: "cspcd3-content",
      type: 'text' as const,
      content: `
## Decomposition

Break a big problem into smaller subproblems. A quiz app might decompose into: **loadQuestions**, **showQuestion**, **gradeAnswer**, **showResults**. Each piece can be built and tested separately.

## Abstraction

Hide details behind a simple interface. Once **gradeAnswer(userAnswer, key)** works, callers don't need to know HOW.

| Layer | Hides… |
|-------|--------|
| Procedure | Implementation steps. |
| Library | Internal data structures. |
| OS | Hardware details. |
| Browser | Network and rendering details. |

## Event-Driven Programming

Modern UIs wait for events:

    ON CLICK button1:
      DISPLAY("You clicked!")

The program responds to events instead of running top-to-bottom and exiting.
      `
    },
    {
      id: "cspcd3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Breaking a big problem into smaller subproblems is called _______.

2) Hiding implementation details behind a simple interface is called _______.

3) Code that runs in response to user actions like clicks is called _______-driven.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["decomposition", "abstraction", "event"],
        hint1: "Divide the problem.",
        hint2: "Hide complexity.",
        hint3: "Triggered, not sequenced.",
        explanation: "Decomposition splits problems; abstraction hides details; event-driven code responds to triggers."
      }
    },
    {
      id: "cspcd3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A procedure that turns a list of strings into a comma-separated string is most useful as ___",
            options: ["a reusable abstraction called from many places", "a one-line script never reused", "malware", "a hardware driver"]
          },
          {
            label: "Pseudocode like ON CLICK followed by a block is ___",
            options: ["event-driven", "recursive", "sequential-only", "binary"]
          },
          {
            label: "Decomposition primarily makes a program easier to ___",
            options: ["understand, test, and maintain", "compress", "encrypt", "route"]
          }
        ],
        correctAnswers: ["a reusable abstraction called from many places", "event-driven", "understand, test, and maintain"],
        hint1: "Bundling logic for reuse.",
        hint2: "Triggered by an event.",
        hint3: "Cognitive load drops.",
        explanation: "Reusable procedures = abstraction. ON CLICK = event-driven. Decomposition aids comprehension."
      }
    },
    {
      id: "cspcd3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Design Patterns

- "Reduce duplication" → procedures.
- "Run when user does X" → event-driven.
- "Make this easier to test in isolation" → decompose into procedures.
- "Hide complexity from the caller" → abstraction.
      `
    },
    {
      id: "cspcd3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program has the same 8-line block of code copied in 5 places. What is the best refactor?",
            options: [
              "Add a comment above each copy explaining what the block does.",
              "Extract the block into a procedure called from each location.",
              "Reformat the 5 copies onto single lines to make them shorter.",
              "Delete 4 of the copies and let the remaining one run 5 times."
            ],
            correctAnswer: 1,
            explanation: "Extracting into a procedure removes duplication."
          },
          {
            question: "You're building a drawing app. Which pattern best fits responding to mouse drags?",
            options: [
              "One sequential script that runs top-to-bottom and then exits.",
              "Event-driven handlers for mousedown, mousemove, and mouseup events.",
              "A single while-true loop that polls the mouse on every iteration.",
              "A recursive function that calls itself for every pixel of movement."
            ],
            correctAnswer: 1,
            explanation: "UI interactions are naturally modeled as event handlers."
          }
        ]
      }
    }
  ]
};
