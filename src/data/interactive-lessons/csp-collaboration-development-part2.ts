export const cspCollaborationDevelopmentPart2Data = {
  topicSlug: "csp-collaboration-development",
  sections: [
    {
      id: "cspcoll2-intro",
      type: 'text' as const,
      content: `
# 🤝 Collaboration in Development

**Part 2 of 7 — Diverse Perspectives and Interpersonal Skills**

---

## Why Collaboration?

Software is usually built by **teams**. Effective collaboration produces a computing innovation that reflects the diversity of talents and perspectives of the people who designed it.

| Benefit | Why |
|---------|-----|
| **Diverse perspectives** | Different backgrounds catch different blind spots and help avoid bias. |
| **More ideas** | More people bring more possible solutions. |
| **Better quality** | More people checking the work find more errors. |
| **Shared knowledge** | Team members learn from each other. |
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
            question: "A team includes members from different cultural backgrounds. From a development standpoint this most often ___",
            options: [
              "slows the project down without producing any product benefit.",
              "helps the team anticipate user needs they wouldn't have noticed alone.",
              "forces the team to translate variable names into multiple languages.",
              "has no measurable effect on the quality or reach of the product."
            ],
            correctAnswer: 1,
            explanation: "Collaboration that includes diverse perspectives catches blind spots and helps avoid bias in a computing innovation."
          },
          {
            question: "A photo app's face filter was designed and tested only by people with similar backgrounds. After release, it works poorly for many users. Which practice would most likely have prevented this?",
            options: [
              "Hiring more programmers who share the team's background",
              "Writing the app in a faster programming language",
              "Adding a wider range of perspectives",
              "Releasing the app to all users before any testing began"
            ],
            correctAnswer: 2,
            explanation: "Diverse perspectives during development help a team notice how a program will behave for people unlike themselves, which helps avoid bias."
          }
        ]
      }
    },
    {
      id: "cspcoll2-content",
      type: 'text' as const,
      content: `
## Interpersonal Skills for Collaboration

Effective collaborative teams practice interpersonal skills, including:

| Skill | What it looks like |
|-------|--------------------|
| **Communication** | Listening actively and explaining ideas clearly |
| **Consensus building** | Working toward a decision the whole team can support |
| **Conflict resolution** | Settling disagreements by focusing on the work, not the person |
| **Negotiation** | Finding a compromise when teammates want different things |

## Inclusive Collaboration

- **Equal participation:** all voices contribute, not just the loudest.
- **Constructive feedback:** critique ideas and code, not people.
- **Documentation:** knowledge is written down instead of living in one person's head.

## Collaborating With Users

Consultation and communication with users are an important part of development. Information gathered from potential users helps a team understand the program's purpose from diverse perspectives and build a program that fully reflects them.
      `
    },
    {
      id: "cspcoll2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Working toward a decision that the whole team can support is called consensus _______.

2) Including team members from different backgrounds tends to surface user needs the team would otherwise _______.

3) Settling a disagreement between teammates is called conflict _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["building", "miss", "resolution"],
        hint1: "Building agreement.",
        hint2: "Blind spots.",
        hint3: "Resolving it.",
        explanation: "Consensus building and conflict resolution are interpersonal skills the CED names. Diverse teams catch needs a uniform team would miss."
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
            options: ["not collaborating effectively", "collaborating efficiently", "using a healthy leadership model", "practicing pair programming"]
          },
          {
            label: "Constructive feedback should focus on ___",
            options: ["the work itself, not the person", "the person, not the work", "praise only, so no one feels criticized", "every flaw at once, so nothing is missed"]
          },
          {
            label: "Two teammates want different features and agree to build a smaller version of each. This is an example of ___",
            options: ["negotiation", "pair programming", "debugging", "iteration"]
          }
        ],
        correctAnswers: ["not collaborating effectively", "the work itself, not the person", "negotiation"],
        hint1: "One-sided ≠ collaboration.",
        hint2: "Critique ideas.",
        hint3: "A compromise between different wants.",
        explanation: "Healthy collaboration gives every member a voice. Feedback is about the work. Reaching a compromise is negotiation."
      }
    },
    {
      id: "cspcoll2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Collaboration Questions

- "Diverse perspectives" pairs with "avoid bias" and "anticipate user needs" — a stock AP answer.
- Know the four interpersonal skills: communication, consensus building, conflict resolution, and negotiation.
- Effective collaboration = inclusive, not just "many people in a room".
- Talking with users is part of collaboration too.
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
              "No real collaboration occurs, so no one reviews or understands the code.",
              "Splitting the project into more separate files would have solved the problem.",
              "The other students should each write the same code so they all learn it."
            ],
            correctAnswer: 1,
            explanation: "Without collaboration, the team loses the benefits of other perspectives: no one else checks, understands, or improves the code."
          },
          {
            question: "A diverse team designing a fitness app considers users with disabilities, different body types, and different cultures. The most direct outcome is ___",
            options: [
              "a more inclusive product that reaches more users without expensive retrofits later.",
              "a slower product, since accessibility features always reduce app performance.",
              "no measurable change, since fitness needs are essentially the same for everyone.",
              "a riskier product, since accommodating more kinds of users always introduces more bugs."
            ],
            correctAnswer: 0,
            explanation: "Including diverse perspectives from the start produces a program that serves more users and avoids costly fixes later."
          }
        ]
      }
    }
  ]
};
