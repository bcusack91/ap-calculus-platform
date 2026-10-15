export const cspCollaborationDevelopmentPart5Data = {
  topicSlug: "csp-collaboration-development",
  sections: [
    {
      id: "cspcoll5-intro",
      type: 'text' as const,
      content: `
# 🤝 Collaboration in Development

**Part 5 of 7 — Computing Innovations and Their Purpose**

---

## What Is a Computing Innovation?

A **computing innovation** includes a program as an integral part of its function. It can take three forms:

| Kind | Examples |
|------|----------|
| **Physical** | A self-driving car, a fitness tracker |
| **Nonphysical computing software** | Picture-editing software, a messaging app |
| **Nonphysical computing concept** | E-commerce, social networking |

The **purpose** of a computing innovation is to solve a problem or to pursue an interest through creative expression. Understanding that purpose helps developers build the innovation well.
      `
    },
    {
      id: "cspcoll5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Which is an example of a nonphysical computing concept?",
            options: [
              "A self-driving delivery truck",
              "E-commerce",
              "A photo-editing app",
              "A smart home thermostat"
            ],
            correctAnswer: 1,
            explanation: "E-commerce is an idea about buying and selling through computing, not a device or a single piece of software. The truck and thermostat are physical; the app is nonphysical software."
          },
          {
            question: "A student writes a program that composes music from the colors in a photo, just for fun. What is the program's purpose?",
            options: [
              "To solve a problem that many users have reported",
              "To collect data that can be sold to advertisers",
              "To pursue an interest through creative expression",
              "To test how fast a computer can process images"
            ],
            correctAnswer: 2,
            explanation: "Computing innovations either solve problems or pursue interests through creative expression. A just-for-fun music generator is creative expression."
          }
        ]
      }
    },
    {
      id: "cspcoll5-content",
      type: 'text' as const,
      content: `
## How Collaboration Shapes an Innovation

- Effective collaboration produces an innovation that reflects the diverse talents and perspectives of its designers.
- Diverse perspectives help the team **avoid bias** in what it builds.
- Consulting users keeps the innovation focused on real needs.
- Computing also enhances what people can do together: online tools and crowdsourcing let many people contribute to one project.

## Describing What a Program Does

A program can be described broadly by **what it does**, or in more detail by what it does **and how its statements accomplish it**. A program's **behavior** is how it functions while running, often described by how a user interacts with it.

| Part | Step-counter app example |
|------|--------------------------|
| **Input** (data sent to the program) | Motion-sensor readings as the user walks |
| **Output** (data sent from the program to a device) | The step count on screen, and a vibration at 10,000 steps |
| **Purpose** | Help the user stay active |

Inputs can be tactile, audio, visual, or text, and can come from a user or from another program. Outputs are usually based on the program's inputs or its prior state.
      `
    },
    {
      id: "cspcoll5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A computing innovation includes a _______ as an integral part of its function.

2) Data sent to a program for processing is called _______.

3) E-commerce is an example of a nonphysical computing _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["program", "input", "concept"],
        hint1: "The code that makes it work.",
        hint2: "The opposite of output.",
        hint3: "An idea rather than a device or app.",
        explanation: "Every computing innovation includes a program. Data sent to a program is input. E-commerce is a nonphysical computing concept."
      }
    },
    {
      id: "cspcoll5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A self-driving car is a ___ computing innovation",
            options: ["physical", "nonphysical software", "nonphysical concept", "non-computing"]
          },
          {
            label: "A phone vibrating when the step goal is reached is an example of program ___",
            options: ["output", "input", "purpose", "documentation"]
          },
          {
            label: "Including teammates with different backgrounds mainly helps the team ___",
            options: ["avoid bias in the innovation", "make the program run faster", "need fewer inputs", "skip user testing"]
          }
        ],
        correctAnswers: ["physical", "output", "avoid bias in the innovation"],
        hint1: "You can touch it.",
        hint2: "Data sent from the program to a device.",
        hint3: "Different perspectives catch blind spots.",
        explanation: "A car is a physical innovation. A vibration is output sent to a device. Diverse teams help avoid bias."
      }
    },
    {
      id: "cspcoll5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Computing Innovations

- Classify innovations as physical, nonphysical software, or nonphysical concept.
- Purpose = why the program exists (solve a problem or pursue an interest); behavior = what it does while running.
- Inputs go into the program; outputs go from the program to a device.
- Diverse, collaborative teams build innovations that avoid bias and meet more users' needs.
      `
    },
    {
      id: "cspcoll5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team builds a navigation app. Which statement describes the app's behavior rather than its purpose?",
            options: [
              "The app exists to help people reach places they have never visited.",
              "When a destination is entered, the app displays turn-by-turn directions.",
              "The app was made because drivers often get lost in unfamiliar cities.",
              "The goal is to reduce the stress of traveling somewhere new."
            ],
            correctAnswer: 1,
            explanation: "Behavior is what the program does while running, often in response to user input. The other statements explain why the app exists, which is its purpose."
          },
          {
            question: "A fitness app's step counter was tried out only by its developers, who all walk with a similar stride. Users with mobility aids report that their steps are not counted. Which practice would most directly have helped?",
            options: [
              "Adding more comments to the step-counting procedure",
              "Rewriting the app in a different programming language",
              "Getting feedback from a more diverse group before release",
              "Raising the number of steps needed to reach the goal"
            ],
            correctAnswer: 2,
            explanation: "Consulting a diverse set of users exposes needs the developers would not notice on their own and helps avoid bias."
          }
        ]
      }
    }
  ]
};
