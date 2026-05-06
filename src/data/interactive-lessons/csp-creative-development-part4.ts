export const cspCreativeDevelopmentPart4Data = {
  topicSlug: "csp-creative-development",
  sections: [
    {
      id: "cspcd4-intro",
      type: 'text' as const,
      content: `
# 🎨 Creative Development

**Part 4 of 7 — Connections & Interactions**

---

## How Creative Development Connects Across CSP

| Connection | Why |
|-----------|-----|
| Development ↔ Algorithms | Programs implement algorithms. |
| Development ↔ Data | Programs operate on data. |
| Development ↔ Internet | Many programs are networked apps. |
| Development ↔ Impact | Programs affect users — design choices have consequences. |
      `
    },
    {
      id: "cspcd4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A development team realizes their algorithm is too slow for the dataset size. The most appropriate response is ___",
            options: [
              "ship the slow version since the algorithm is technically correct.",
              "investigate a more efficient algorithm or restructure the data behind it.",
              "switch to a different operating system to gain implicit speedups.",
              "rewrite the same algorithm in a faster language without changing it."
            ],
            correctAnswer: 1,
            explanation: "Algorithm + data structure choices are core development decisions."
          },
          {
            question: "When a developer chooses what data to collect, this decision ___",
            options: [
              "affects only storage costs and has no real impact on users.",
              "has direct privacy implications that must be considered carefully.",
              "is a purely technical decision unrelated to ethical questions.",
              "is fully dictated by what the database happens to support."
            ],
            correctAnswer: 1,
            explanation: "Data collection is also a privacy decision."
          }
        ]
      }
    },
    {
      id: "cspcd4-content",
      type: 'text' as const,
      content: `
## Programs Are Built On Algorithms And Data

Every program embodies algorithm + data choices. Choosing well saves rework.

| Choice | Question |
|--------|----------|
| Data structure | Will I append, search, sort, or update most? |
| Algorithm | Is the input small or huge? |
| Storage | Memory only? Disk? Cloud? |
| Network | Online-only? Offline-capable? Real-time? |

## Errors And Debugging

| Error | Example | Detection |
|-------|---------|-----------|
| **Syntax** | Missing parenthesis. | At parse / compile time. |
| **Runtime** | Divide by zero. | At execution. |
| **Logic** | Returns wrong answer. | Only via testing. |
| **Overflow** | Number too large for storage. | Sometimes silent. |

Logic errors are most insidious — the program runs but produces wrong output.
      `
    },
    {
      id: "cspcd4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A program crash from dividing by zero is a _______ error.

2) A program that runs but produces the wrong answer has a _______ error.

3) Catching errors before users do requires _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["runtime", "logic", "testing"],
        hint1: "Caught at execution.",
        hint2: "Bad answer, no crash.",
        hint3: "Run with sample inputs.",
        explanation: "Runtime = caught when running. Logic = wrong output. Testing surfaces them."
      }
    },
    {
      id: "cspcd4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A logic error is best detected by ___",
            options: ["running tests with known correct outputs", "reading the code aloud", "changing the file extension", "compressing the file"]
          },
          {
            label: "A syntax error is caught ___",
            options: ["at parse / compile time, before the program runs", "only after release", "never", "only by users"]
          },
          {
            label: "A program's data-collection choice is ___",
            options: ["both a technical and a privacy/ethics decision", "purely technical", "purely legal", "irrelevant"]
          }
        ],
        correctAnswers: ["running tests with known correct outputs", "at parse / compile time, before the program runs", "both a technical and a privacy/ethics decision"],
        hint1: "Compare actual to expected.",
        hint2: "Compiler/parser flags.",
        hint3: "Privacy is design.",
        explanation: "Logic errors need test cases. Syntax errors caught early. Data collection is technical AND ethical."
      }
    },
    {
      id: "cspcd4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Development

- "Wrong answer, no crash" = logic error → fix via testing.
- "Crash" = runtime error → check inputs, add validation.
- "Won't even run" = syntax error.
- Development decisions have technical AND user impact.
      `
    },
    {
      id: "cspcd4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A function returns the average of a list. It returns the right value for non-empty lists but throws an error for empty lists. The most direct fix is ___",
            options: [
              "ignore the bug since real users rarely send an empty list.",
              "add a check for empty input that returns 0 or signals an error explicitly.",
              "remove every call site of the function and inline the math at each one.",
              "switch the implementation to a different language and recompile."
            ],
            correctAnswer: 1,
            explanation: "Boundary input handling."
          },
          {
            question: "A team logs every keystroke users type \"for analytics\". The CSP-aligned concern is ___",
            options: [
              "logging is purely a performance issue and not a privacy issue.",
              "capturing every keystroke includes passwords and private content — a privacy and security risk.",
              "as long as the logs stay on the company's own servers there is no real risk.",
              "analytics keystroke logs are protected by HTTPS and so cannot be misused."
            ],
            correctAnswer: 1,
            explanation: "Over-collection is a privacy and security risk."
          }
        ]
      }
    }
  ]
};
