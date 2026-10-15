export const cspCollaborationDevelopmentPart4Data = {
  topicSlug: "csp-collaboration-development",
  sections: [
    {
      id: "cspcoll4-intro",
      type: 'text' as const,
      content: `
# 🤝 Collaboration in Development

**Part 4 of 7 — Gathering Input From Users**

---

## Users Are Collaborators Too

Consultation and communication with users are an important part of developing computing innovations. **Investigation** identifies a program's constraints and the concerns and interests of the people who will use it.

| Investigation method | Example |
|----------------------|---------|
| **Surveys** | A form asks 200 students which features they want. |
| **User testing** | Students try a prototype while the team notes problems. |
| **Interviews** | The team talks one-on-one with the school librarian. |
| **Direct observation** | The team watches how students check out books today. |
      `
    },
    {
      id: "cspcoll4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team watches students use the school's current library checkout system, without asking them any questions. Which investigation method is this?",
            options: [
              "A survey",
              "An interview",
              "Direct observation",
              "Pair programming"
            ],
            correctAnswer: 2,
            explanation: "Watching how people actually behave, without questioning them, is direct observation. Surveys and interviews ask questions."
          },
          {
            question: "Why should a team gather information from potential users before designing a program?",
            options: [
              "It guarantees that the finished program will contain no errors.",
              "It shows the team the program's purpose from many points of view.",
              "It removes the need to test the program once it has been built.",
              "It lets the team skip writing a specification for the program."
            ],
            correctAnswer: 1,
            explanation: "Information from potential users helps a team understand the program's purpose from diverse perspectives and build a program that meets their needs."
          }
        ]
      }
    },
    {
      id: "cspcoll4-content",
      type: 'text' as const,
      content: `
## From User Input to Requirements

What a team learns from users becomes the program's **requirements**: how the program must function, including the user interactions it must provide. The requirements are collected in a **specification**. Requirements also tell testers which inputs to try.

## Choosing a Method

| If you need… | Try… |
|--------------|------|
| Answers from many people quickly | a survey |
| Detailed reasons from a few people | interviews |
| To see what people really do, not what they say | direct observation |
| To find problems in a design | user testing with a prototype |

## Watch Who You Ask

If only one group of users is consulted, the program may not meet other users' needs, and it can carry that group's bias. Seek out a diverse set of users, especially the ones least like the development team.
      `
    },
    {
      id: "cspcoll4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Watching people use a system without interrupting them is called direct _______.

2) The document that defines a program's requirements is its _______.

3) Having people try a prototype while the team notes problems is called user _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["observation", "specification", "testing"],
        hint1: "You observe.",
        hint2: "It specifies the requirements.",
        hint3: "Users test it.",
        explanation: "Direct observation, specifications, and user testing are all part of investigating and designing a program."
      }
    },
    {
      id: "cspcoll4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "To learn which of 10 features 500 students want most, the best method is ___",
            options: ["a survey", "one interview", "watching one student", "pair programming"]
          },
          {
            label: "Users cannot find the Save button in a prototype. This problem was most likely found by ___",
            options: ["user testing", "a syntax check", "a survey of programmers", "adding comments"]
          },
          {
            label: "Asking only seniors about an app meant for the whole school risks ___",
            options: ["missing other students' needs", "a syntax error", "an overflow error", "faster development"]
          }
        ],
        correctAnswers: ["a survey", "user testing", "missing other students' needs"],
        hint1: "Many people, quick answers.",
        hint2: "Real users trying a prototype.",
        hint3: "Who was left out?",
        explanation: "Surveys reach many people quickly. User testing reveals usability problems. Consulting one group can miss everyone else's needs."
      }
    },
    {
      id: "cspcoll4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Investigating Users

- Know the four investigation methods: surveys, user testing, interviews, and direct observation.
- Match the method to the need: many people → survey; deep reasons → interviews; real behavior → observation; design problems → user testing.
- User input becomes requirements; requirements form the specification and guide testing.
- Consulting a narrow group can build bias into a program.
      `
    },
    {
      id: "cspcoll4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team building a homework-tracker app for a whole school interviews only students in one advanced class. Which concern is most directly raised?",
            options: [
              "The interviews will cause syntax errors in the app's code.",
              "Interviews are not a valid way to investigate requirements.",
              "Fewer test cases will be needed than for other apps.",
              "The app may not fit the needs of others it is meant for."
            ],
            correctAnswer: 3,
            explanation: "Consulting a narrow group can leave out other users' needs and build that group's bias into the program."
          },
          {
            question: "During user testing, several people type their birth date in a format the program rejects. What is the most appropriate next step?",
            options: [
              "Tell the users to read the documentation more carefully",
              "Remove the birth-date field without asking anyone",
              "Revise the program to accept those entries, then test it again",
              "Release the program now and plan to fix it next year"
            ],
            correctAnswer: 2,
            explanation: "User testing feeds the iterative process: revise the program based on what users actually do, then test it again."
          }
        ]
      }
    }
  ]
};
