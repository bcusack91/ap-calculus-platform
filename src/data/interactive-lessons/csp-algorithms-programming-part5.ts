export const cspAlgorithmsProgrammingPart5Data = {
  topicSlug: "csp-algorithms-programming",
  sections: [
    {
      id: "cspap5-intro",
      type: 'text' as const,
      content: `
# 💻 Algorithms & Programming

**Part 5 of 7 — Change Over Time**

---

## How Programming Has Changed Over Time

Programming evolved from machine code → assembly → high-level languages → today's mix of cloud, AI-assisted, and visual block-based environments. Each shift trades a different concern.

| Era | Trade |
|-----|-------|
| Machine code (1950s) | Total control, zero portability. |
| High-level languages (1960s+) | Portability, readability — at the cost of some control. |
| Object-oriented (1980s+) | Manageable scale via abstraction. |
| Open source / libraries (2000s+) | Don't reinvent — reuse. |
| AI-assisted (2020s+) | Faster generation, new questions about authorship and safety. |
      `
    },
    {
      id: "cspap5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A modern programmer who needs a date-formatting function will most often ___",
            options: [
              "write the date-formatting function from scratch in machine code on every new project they start.",
              "use a well-tested standard-library or built-in date-formatting function instead of writing one.",
              "avoid date formatting entirely in their programs by always asking the user to format dates first.",
              "design and ship a brand new programming language whose built-in primitives include date formatting."
            ],
            correctAnswer: 1,
            explanation: "Reuse over reinvention is the modern norm; libraries are tested and documented."
          },
          {
            question: "When AI-assisted code completion is used, who is ultimately responsible for verifying the code is correct?",
            options: [
              "The AI tool itself is solely responsible for the correctness of every suggestion the tool generates.",
              "The programmer (and the team) who accepts the suggestion and deploys it remain responsible for it.",
              "The end user of the running program is solely responsible for verifying the code that produced it.",
              "Nobody actually needs to verify AI-suggested code, since the AI has already statistically validated it."
            ],
            correctAnswer: 1,
            explanation: "Accepted code becomes the developer's code; correctness, security, and ethical review remain a human responsibility."
          }
        ]
      }
    },
    {
      id: "cspap5-content",
      type: 'text' as const,
      content: `
## Reuse Over Reinvention

Modern languages ship with **libraries**: large collections of well-tested procedures.

| Need | Modern approach |
|------|-----------------|
| Sort a list | Call the language's built-in sort. |
| Make a network request | Call a library function with the URL. |
| Display a chart | Use a charting library. |

Re-implementing these by hand introduces bugs and wastes time. The CSP CED explicitly values **using existing code** as a development practice.

## Programs Have Become More Collaborative

Most non-trivial software today is built by **teams**:

- Version control (e.g., Git) tracks every change.
- Code review catches bugs before deployment.
- Continuous integration runs tests automatically.

This connects directly to Big Idea 1 (Creative & Collaborative Development).

## AI in the Loop

AI-assisted programming (autocomplete, chat-based coding) accelerates writing code but requires the same verification habits: read every suggested line, test on edge cases, and check for security/privacy implications. Tools speed you up; they do not absolve you of correctness.
      `
    },
    {
      id: "cspap5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A pre-built collection of reusable procedures is called a _______.

2) A system that records every change to a codebase is called _______ control.

3) When AI autocompletes code, the human who accepts the suggestion remains responsible for its _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["library", "version", "correctness"],
        hint1: "Programmers IMPORT or include them.",
        hint2: "Tools include Git.",
        hint3: "Human review is non-negotiable.",
        explanation: "Libraries reuse code. Version control preserves history. Humans verify AI output."
      }
    },
    {
      id: "cspap5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Using a well-tested library instead of writing the same code yourself usually ___",
            options: ["reduces bugs and saves time", "always slows the program", "avoids any need for testing", "is discouraged in modern teams"]
          },
          {
            label: "Code review primarily improves ___",
            options: ["quality and shared understanding", "compile time", "screen brightness", "memory size"]
          },
          {
            label: "AI-generated code that introduces a security flaw is the responsibility of ___",
            options: ["the developer who accepts and deploys it", "no one", "only the AI vendor", "only the end user"]
          }
        ],
        correctAnswers: ["reduces bugs and saves time", "quality and shared understanding", "the developer who accepts and deploys it"],
        hint1: "Libraries are battle-tested.",
        hint2: "Reviewers spread knowledge.",
        hint3: "Acceptance = ownership.",
        explanation: "Libraries beat reinvention. Code review spreads knowledge. Whoever ships the code owns the consequences."
      }
    },
    {
      id: "cspap5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: "Change Over Time" Questions

- "Modern programmers often…" → reach for reuse, abstraction, libraries, version control, collaboration.
- "Trade-off" questions almost always have a "more X but less Y" structure (faster but less control, easier but less customizable, etc.).
- AI-related questions: the human team retains responsibility.
- Look for the word "appropriate" — the right answer balances efficiency, correctness, ethics, AND maintainability.
      `
    },
    {
      id: "cspap5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A startup must ship a calendar app in 4 weeks. Which approach is most appropriate?",
            options: [
              "Write a new programming language for the calendar.",
              "Use existing libraries for date math, UI, and storage; write only the app-specific glue code.",
              "Implement everything in machine code for speed.",
              "Skip testing to ship faster."
            ],
            correctAnswer: 1,
            explanation: "Composing libraries is the standard modern path; bespoke implementations of well-solved problems waste time."
          },
          {
            question: "A developer accepts AI-suggested code that constructs a database query by string concatenation with user input. The code passes a quick visual review and ships. A month later, a security incident traces to SQL injection in this code. What is the best characterization?",
            options: [
              "The AI is solely responsible.",
              "The developer/team is responsible — accepted code is the team's code, and security review is part of acceptance.",
              "The user who exploited the flaw is solely responsible.",
              "Such incidents cannot be prevented."
            ],
            correctAnswer: 1,
            explanation: "Accepting AI output without security review does not transfer responsibility; the team owns deployed code."
          }
        ]
      }
    }
  ]
};
