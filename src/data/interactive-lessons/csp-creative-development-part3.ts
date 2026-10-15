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
              "selection code that picks a branch once at launch"
            ],
            correctAnswer: 1,
            explanation: "Event-driven code responds to events."
          },
          {
            question: "Which pattern most directly reduces code duplication?",
            options: [
              "Writing the same block of statements at each call site.",
              "Defining a procedure once and calling it.",
              "Replacing functions with a long chain of IF statements.",
              "Using hardcoded literal values inline at every single call site."
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

An **event** is associated with an action, such as a key press, a mouse click, or the program starting, and it supplies input to the program. In **event-driven programming**, statements run when they are **triggered** rather than through the sequential flow of control. For example, a procedure that displays "You clicked!" runs each time button1 is clicked, and not at any other time.
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
            options: ["a reusable abstraction called from many places", "code copied wherever a list is printed", "an event handler tied to one button", "a loop written inline each time"]
          },
          {
            label: "Code that runs only when a user clicks a button is ___",
            options: ["event-driven", "iterative", "sequential", "conditional selection"]
          },
          {
            label: "Decomposition primarily makes a program easier to ___",
            options: ["understand, test, and maintain", "run faster, since procedures skip unneeded steps", "fit in memory, because each procedure is smaller", "secure, because split-up code is harder to read"]
          }
        ],
        correctAnswers: ["a reusable abstraction called from many places", "event-driven", "understand, test, and maintain"],
        hint1: "Bundling logic for reuse.",
        hint2: "It is triggered by an action.",
        hint3: "Cognitive load drops.",
        explanation: "Reusable procedures are abstractions. Code triggered by a click is event-driven. Decomposition makes programs easier to understand, test, and maintain."
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
              "Event handlers for mouse presses and moves.",
              "A single loop that repeats until the mouse stops, then exits.",
              "A list of every screen pixel, filled in once when the app starts."
            ],
            correctAnswer: 1,
            explanation: "UI interactions are naturally modeled as event handlers."
          }
        ]
      }
    }
  ]
};
