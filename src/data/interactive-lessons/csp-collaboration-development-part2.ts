export const cspCollaborationDevelopmentPart2Data = {
  topicSlug: "csp-collaboration-development",
  sections: [
    {
      id: "cspcoll2-intro",
      type: 'text' as const,
      content: `
# 🤝 Collaboration in Development

**Part 2 of 7 — Key Processes**

---

## Why Collaboration?

Software is built by **teams**. AP CSP recognizes collaboration as a core practice with specific benefits.

| Benefit | Why |
|---------|-----|
| **Diverse perspectives** | Different backgrounds catch different blind spots. |
| **Faster development** | Parallel work on independent pieces. |
| **Better quality** | More eyes on each change → fewer bugs. |
| **Knowledge sharing** | Team members learn from each other. |
| **Resilience** | No single point of failure (bus factor). |
      `
    },
    {
      id: "cspcoll2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A solo developer with no reviewers has a \"bus factor\" of 1. The biggest practical risk is ___",
            options: [
              "the developer will be slowed down by waiting on code reviews.",
              "if that one person leaves, no one else understands the code.",
              "the project will accumulate too much documentation over time.",
              "the developer will be forced to write too many automated tests."
            ],
            correctAnswer: 1,
            explanation: "Bus factor 1 = single point of failure for knowledge."
          },
          {
            question: "A team includes members from different cultural backgrounds. From a development standpoint this most often ___",
            options: [
              "slows the project down without producing any product benefit.",
              "helps the team anticipate user needs they wouldn't have noticed alone.",
              "forces the team to translate variable names into multiple languages.",
              "has no measurable effect on the quality or reach of the product."
            ],
            correctAnswer: 1,
            explanation: "Diverse teams catch blind spots."
          }
        ]
      }
    },
    {
      id: "cspcoll2-content",
      type: 'text' as const,
      content: `
## Inclusive Collaboration

Effective collaboration requires:

- **Active listening**: people feel heard.
- **Equal participation**: all voices contribute.
- **Constructive feedback**: critique ideas, not people.
- **Documentation**: knowledge isn't locked in one head.
- **Shared norms**: agreed-on tools, code style, channels.

## Roles On A Team

| Role | Job |
|------|-----|
| **Developer** | Writes and reviews code. |
| **Designer** | UI / UX, mockups, user research. |
| **Tester / QA** | Designs and runs tests. |
| **Project manager** | Tracks progress. |
| **Stakeholder** | Represents users / business. |

## Communication Channels

| Channel | Best for |
|---------|----------|
| Sync (calls, in-person) | Brainstorming, conflict resolution. |
| Async written | Status, design discussions, decisions of record. |
| Code review | Specific feedback on code. |
| Documentation | Long-lived knowledge. |
      `
    },
    {
      id: "cspcoll2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The risk of losing critical knowledge if one team member leaves is captured by the term _______ factor.

2) Including team members from different backgrounds tends to surface user needs the team would otherwise _______.

3) A practice where teammates inspect proposed code changes is called code _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["bus", "miss", "review"],
        hint1: "\"Hit by a ___\" risk.",
        hint2: "Blind spots.",
        hint3: "Sanity-check practice.",
        explanation: "Bus factor = knowledge concentration risk. Diverse teams catch blind spots. Code review = inspection."
      }
    },
    {
      id: "cspcoll2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A team where one person makes all decisions and others stay silent is ___",
            options: ["not collaborating effectively", "collaborating perfectly", "using version control", "using CI / CD"]
          },
          {
            label: "Constructive feedback should focus on ___",
            options: ["the work itself, not the person", "the person, not the work", "unrelated topics", "private matters"]
          },
          {
            label: "Async written communication (issue tracker, chat) is best for ___",
            options: ["decisions of record and status updates", "brainstorming with energy and back-and-forth", "spontaneous laughter", "silent meditation"]
          }
        ],
        correctAnswers: ["not collaborating effectively", "the work itself, not the person", "decisions of record and status updates"],
        hint1: "One-sided ≠ collaboration.",
        hint2: "Critique ideas.",
        hint3: "Written = persistent.",
        explanation: "Healthy collaboration distributes voice. Feedback is about the work. Async = decisions of record."
      }
    },
    {
      id: "cspcoll2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Collaboration Questions

- "Diverse perspectives" + "anticipate user needs" is a stock AP-rubric pairing.
- "Bus factor" / "single point of failure" is solved by documentation + code review + cross-training.
- Effective collaboration = inclusive, not just "many people in a room".
      `
    },
    {
      id: "cspcoll2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A class project group has one student writing all the code at the last minute. What's the most CSP-aligned critique?",
            options: [
              "This is an efficient division of labor — playing to the strongest student.",
              "No real collaboration is happening; the code lacks review and shared understanding.",
              "Splitting the project into more separate files would have solved the problem.",
              "The other students should each write the same code so they all learn it."
            ],
            correctAnswer: 1,
            explanation: "Solo work doesn't exercise AP-targeted collaboration practices."
          },
          {
            question: "A diverse team designing a fitness app considers users with disabilities, different body types, and different cultures. The most direct outcome is ___",
            options: [
              "a more inclusive product that reaches more users without expensive retrofits later.",
              "a slower product, since accessibility features always reduce app performance.",
              "no measurable change, since fitness needs are essentially the same for everyone.",
              "a riskier product, since accommodating more users introduces more bugs."
            ],
            correctAnswer: 0,
            explanation: "Inclusive design from the start avoids costly retrofitting."
          }
        ]
      }
    }
  ]
};
