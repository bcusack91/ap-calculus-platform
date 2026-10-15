export const cspCollaborationDevelopmentPart7Data = {
  topicSlug: "csp-collaboration-development",
  sections: [
    {
      id: "cspcoll7-intro",
      type: 'text' as const,
      content: `
# 🤝 Collaboration in Development

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Collaboration in Development

The collaboration and program-correctness concepts the AP exam tests most.
      `
    },
    {
      id: "cspcoll7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "AP CSP's description of effective collaboration includes ___",
            options: [
              "silent solo work, where each person codes, tests, and documents alone.",
              "drawing on many voices, sharing knowledge, and giving constructive feedback.",
              "always working in person, since face-to-face meetings are required for trust.",
              "always working remotely, since in-person work is treated as a failure mode."
            ],
            correctAnswer: 1,
            explanation: "Effective collaboration includes diverse perspectives, shared knowledge, and feedback, supported by interpersonal skills."
          },
          {
            question: "Which list names the interpersonal skills the CED says effective collaborative teams practice?",
            options: [
              "Speed, memorization, and working alone",
              "Communication, consensus building, conflict resolution, and negotiation",
              "Debugging, compiling, and documenting",
              "Hand tracing, visualizations, and debuggers"
            ],
            correctAnswer: 1,
            explanation: "The CED lists communication, consensus building, conflict resolution, and negotiation. Hand tracing and debuggers are ways to find errors, not interpersonal skills."
          }
        ]
      }
    },
    {
      id: "cspcoll7-content",
      type: 'text' as const,
      content: `
## Final Vocab

| Term | Definition |
|------|-----------|
| Collaboration | People working together, drawing on diverse talents and perspectives. |
| Pair programming | A driver writes code while a navigator reviews; they switch roles. |
| Online collaboration tools | Let programmers share ideas, documents, and code and give feedback. |
| Crowdsourcing | Obtaining input or information from many people via the Internet. |
| Investigation | Surveys, user testing, interviews, and direct observation. |
| Syntax / run-time / logic / overflow error | The four error types the exam names. |
| Test case | A defined input with its expected output. |

## Common Pitfalls

- Mistaking "many people in a room" for collaboration.
- Letting one voice make every decision.
- Consulting only one kind of user, which can build bias into a program.
- Testing only typical inputs and skipping boundary values.
- Using code from someone else (or an AI tool) without acknowledging it.
      `
    },
    {
      id: "cspcoll7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In pair programming, the partner who types is the driver, and the partner who reviews is the _______.

2) An error that stops a program while it is running, such as dividing by zero, is a _______ error.

3) Getting input from a large number of people via the Internet is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["navigator", "run-time", "crowdsourcing"],
        hint1: "They guide the way.",
        hint2: "It happens during execution.",
        hint3: "Sourcing from the crowd.",
        explanation: "Driver and navigator are the pair programming roles. Errors during execution are run-time errors. Crowdsourcing gathers input from many people online."
      }
    },
    {
      id: "cspcoll7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A team's knowledge stays shared when it ___",
            options: ["documents decisions and works in pairs", "keeps everything in one person's head", "assigns each module to one person alone", "keeps decisions in private messages"]
          },
          {
            label: "An input must be from 1 to 10. The best boundary tests include ___",
            options: ["0, 1, 10, and 11", "5 only", "1 only", "2, 4, and 6"]
          },
          {
            label: "When AI suggests code for a team's program, the team should ___",
            options: ["acknowledge, test, and understand it", "use it without any review", "trust it, since AI code is always correct", "ban all code that came from outside"]
          }
        ],
        correctAnswers: ["documents decisions and works in pairs", "0, 1, 10, and 11", "acknowledge, test, and understand it"],
        hint1: "Spread knowledge.",
        hint2: "At and just beyond each extreme.",
        hint3: "You are responsible for code you use.",
        explanation: "Documentation and pairing spread knowledge. Boundary tests sit at and just beyond the minimum and maximum. AI-generated code must be acknowledged, tested, and understood."
      }
    },
    {
      id: "cspcoll7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- AP collaboration questions reward diverse perspectives, inclusive participation, and constructive feedback.
- Know pair programming (driver and navigator) and that online tools support sharing and feedback.
- Know the interpersonal skills: communication, consensus building, conflict resolution, negotiation.
- Investigate users with surveys, user testing, interviews, and direct observation.
- Classify errors (syntax, run-time, logic, overflow) and test at the boundaries.
      `
    },
    {
      id: "cspcoll7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school project team is told to \"use online collaboration tools\". Which is the most appropriate interpretation?",
            options: [
              "email each member's changes around at the end of every working day.",
              "keep the code and documents in a shared space where teammates edit them and leave feedback.",
              "have one student do all the coding while the others handle non-technical tasks.",
              "share a single account whose password is posted in the team chat channel."
            ],
            correctAnswer: 1,
            explanation: "Online tools support collaboration by letting programmers share ideas, documents, and code and give each other feedback."
          },
          {
            question: "A team's only experienced programmer is away for a week. Work stalls because no one else understands how the program's scoring procedure works. Which long-term fix is most appropriate?",
            options: [
              "Discourage the programmer from ever being away from the project.",
              "Document it and have teammates pair on it.",
              "Replace the experienced programmer with someone less involved in scoring.",
              "Delete the scoring procedure so no special knowledge is needed."
            ],
            correctAnswer: 1,
            explanation: "Documentation and pair programming spread knowledge across the team, so work does not depend on one person."
          }
        ]
      }
    }
  ]
};
