export const cspCollaborationDevelopmentPart3Data = {
  topicSlug: "csp-collaboration-development",
  sections: [
    {
      id: "cspcoll3-intro",
      type: 'text' as const,
      content: `
# 🤝 Collaboration in Development

**Part 3 of 7 — Pair Programming, Online Tools, and Crowdsourcing**

---

## Common Collaboration Patterns

| Pattern | Description |
|---------|-------------|
| **Pair programming** | Two programmers at one workstation: a driver and a navigator. |
| **Shared online tools** | Teammates edit the same documents and code and leave feedback. |
| **Crowdsourcing** | Getting input or information from a large number of people via the Internet. |
| **Open source** | Code that is shared publicly so others can use and build on it, with credit. |
      `
    },
    {
      id: "cspcoll3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "In pair programming, the \"navigator\" usually ___",
            options: [
              "types code in a second editor at the same time as the driver.",
              "plans the design and reviews each line as the driver types.",
              "works on a separate unrelated program to maximize parallelism.",
              "monitors network traffic to make sure the driver stays online."
            ],
            correctAnswer: 1,
            explanation: "The driver types; the navigator reviews each line and thinks ahead. Partners switch roles regularly."
          },
          {
            question: "Wikipedia is most accurately described as ___",
            options: [
              "a centralized corporate product written by a small paid editorial staff.",
              "a crowdsourced encyclopedia built by millions of volunteer contributors.",
              "a peer-to-peer file-sharing system for distributing reference works.",
              "a closed-source proprietary program licensed to participating schools."
            ],
            correctAnswer: 1,
            explanation: "Wikipedia gathers its content from a very large number of people over the Internet, which is crowdsourcing."
          }
        ]
      }
    },
    {
      id: "cspcoll3-content",
      type: 'text' as const,
      content: `
## Pair Programming

Two programmers share one workstation. The **driver** writes code while the **navigator** reviews each line and thinks ahead, and they **swap roles** regularly. Errors are caught as they are typed, skills spread between partners, and both people understand the code.

## Online Collaboration Tools

Online tools support collaboration by letting programmers share ideas, documents, and code and give feedback, even when teammates are in different places. Shared documents, shared code editors, and comment threads are common examples.

## Crowdsourcing and Open Source

- **Crowdsourcing** is obtaining input or information from a large number of people via the Internet: an online encyclopedia, drivers reporting road closures to a map app, or volunteers contributing data to citizen science. It also offers new models for collaboration, such as connecting a cause with funding from many people.
- **Open source** code is publicly available for others to use and build on. Code you use from an open-source project still has to be acknowledged in your program.
      `
    },
    {
      id: "cspcoll3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In pair programming, the person typing is called the _______.

2) Obtaining input or information from a large number of people via the Internet is called _______.

3) Code that is shared publicly so others can use and build on it is called _______ source code.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["driver", "crowdsourcing", "open"],
        hint1: "They drive the keyboard.",
        hint2: "Sourcing from the crowd.",
        hint3: "The opposite of closed.",
        explanation: "The driver types while the navigator reviews. Crowdsourcing gathers input from many people online. Open-source code is publicly available."
      }
    },
    {
      id: "cspcoll3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Shared online documents and code editors most directly help a team ___",
            options: ["share work and give feedback from anywhere", "make the finished program run faster", "skip testing the program", "keep code hidden from teammates"]
          },
          {
            label: "A map app that lets drivers report road closures is using ___",
            options: ["crowdsourcing", "pair programming", "encryption", "a heuristic"]
          },
          {
            label: "A pair programming pair should ___",
            options: ["swap driver / navigator roles regularly", "keep the stronger coder as driver throughout", "split the code and write separate halves", "let the navigator type while the driver reviews"]
          }
        ],
        correctAnswers: ["share work and give feedback from anywhere", "crowdsourcing", "swap driver / navigator roles regularly"],
        hint1: "Online tools support sharing and feedback.",
        hint2: "Input from many people via the Internet.",
        hint3: "Both partners should do both jobs.",
        explanation: "Online tools let teammates share and give feedback. Collecting reports from many drivers is crowdsourcing. Pair programmers switch roles."
      }
    },
    {
      id: "cspcoll3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Collaboration Patterns

- Pair programming = driver + navigator, switching roles.
- Online tools = sharing and feedback on ideas, documents, and code.
- Crowdsourcing = input from many people via the Internet; it can enhance what people accomplish together.
- Open-source code is free to use but still must be acknowledged.
      `
    },
    {
      id: "cspcoll3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team adds 5 new programmers in one month, and the newcomers struggle to understand the existing code. Which practice would help most?",
            options: [
              "silent solo work, so each newcomer learns by doing everything alone.",
              "pair programming, so expertise spreads as the work happens.",
              "one long lecture from a senior programmer at the end of the month.",
              "a separate module for each newcomer, with no contact with the team."
            ],
            correctAnswer: 1,
            explanation: "Pairing a newcomer with an experienced programmer spreads knowledge while real work gets done."
          },
          {
            question: "A student's program uses a procedure copied from an open-source project. Which statement is accurate?",
            options: [
              "Open-source code may be used without any acknowledgment.",
              "Open-source code cannot be used in a student's program at all.",
              "Pasting the procedure in makes it the student's own work.",
              "The procedure must be acknowledged, naming its source."
            ],
            correctAnswer: 3,
            explanation: "Open-source code may be used, but code from another source must be acknowledged, naming its origin or author."
          }
        ]
      }
    }
  ]
};
