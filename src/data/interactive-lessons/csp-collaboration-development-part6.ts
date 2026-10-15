export const cspCollaborationDevelopmentPart6Data = {
  topicSlug: "csp-collaboration-development",
  sections: [
    {
      id: "cspcoll6-intro",
      type: 'text' as const,
      content: `
# 🤝 Collaboration in Development

**Part 6 of 7 — Problem-Solving Workshop**

---

## Collaboration Workshop

Apply interpersonal skills, collaboration models, and testing practices to AP-style team scenarios.
      `
    },
    {
      id: "cspcoll6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team has weekly meetings where one person dominates. The most appropriate adjustment is ___",
            options: [
              "cancel all team meetings and rely entirely on private messaging instead.",
              "use turn-taking so quieter voices are heard.",
              "remove the dominant person from the team to restore balance.",
              "shorten meetings so the dominant person has less time to speak."
            ],
            correctAnswer: 1,
            explanation: "Effective collaboration includes every member's voice. Turn-taking and shared agendas support communication without pushing anyone out."
          },
          {
            question: "Two teammates disagree about whether their game should have a timer. Which response best shows conflict resolution?",
            options: [
              "Let whoever has more experience decide without discussion",
              "Build the game twice and never combine the two versions",
              "Hear both sides and try each version with users before deciding",
              "Drop the feature so that no one has to compromise at all"
            ],
            correctAnswer: 2,
            explanation: "Conflict resolution settles a disagreement by focusing on the work: each side is heard, evidence from users is gathered, and the team decides together."
          }
        ]
      }
    },
    {
      id: "cspcoll6-content",
      type: 'text' as const,
      content: `
## Worked: Resolving a Team Disagreement

1. **Communicate:** each teammate explains their idea and the reason behind it.
2. **Negotiate:** look for a compromise, such as an optional timer.
3. **Build consensus:** agree on a decision the whole team can support.
4. **Document** the decision so everyone, including future teammates, knows what was chosen and why.

## Worked: Splitting Work Into Procedures

A team divides a quiz app into procedures: **loadQuestions**, **showQuestion**, **checkAnswer**, and **showScore**. Before coding, they agree on each procedure's name, parameters, and return value. Each member tests their own procedure, and the team adds the pieces to the program one at a time, an **incremental** process.

## Worked: Testing a Teammate's Procedure

checkAnswer(given, correct) should return true when the two answers match.

| Test call | Expected result | Why test it |
|-----------|-----------------|-------------|
| checkAnswer("B", "B") | true | a typical correct answer |
| checkAnswer("C", "B") | false | a typical wrong answer |
| checkAnswer("", "B") | false | an empty answer |

Give specific feedback: the failing input, the expected result, and the actual result.
      `
    },
    {
      id: "cspcoll6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Agreeing on a compromise between two different feature requests is called _______.

2) Testing each teammate's piece and adding pieces to the program one at a time is _______ development.

3) Good test cases pair each input with its expected _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["negotiation", "incremental", "output"],
        hint1: "One of the four interpersonal skills.",
        hint2: "Small increments, each one working.",
        hint3: "What the program should produce.",
        explanation: "Negotiation finds a compromise. Incremental development adds working pieces one at a time. Test cases compare actual results with expected outputs."
      }
    },
    {
      id: "cspcoll6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A teammate keeps interrupting others in planning meetings. The team should first ___",
            options: ["talk about it and agree on meeting norms", "remove the teammate from the project", "stop holding meetings at all", "ignore the problem and move on"]
          },
          {
            label: "Before combining their procedures, teammates should agree on each procedure's ___",
            options: ["name, parameters, and return value", "font and color scheme", "number of comments", "length in lines"]
          },
          {
            label: "A teammate's procedure returns the wrong value for an empty list. The most helpful feedback is ___",
            options: ["the failing input and the expected result", "a note saying the code is bad", "nothing, so no one feels criticized", "a silent rewrite of their code"]
          }
        ],
        correctAnswers: ["talk about it and agree on meeting norms", "name, parameters, and return value", "the failing input and the expected result"],
        hint1: "Communication comes first.",
        hint2: "What callers need to know to use a procedure.",
        hint3: "Specific and about the work.",
        explanation: "Communicating and agreeing on norms addresses the problem respectfully. Agreed names, parameters, and return values let separately written procedures fit together. Specific, work-focused feedback helps a teammate fix the bug."
      }
    },
    {
      id: "cspcoll6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop Style

- "What should the team do?" → communicate, include every voice, negotiate, and build consensus.
- Split work into procedures with agreed names, parameters, and return values; test each before combining.
- Feedback should be specific and about the work, not the person.
      `
    },
    {
      id: "cspcoll6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A four-person team writes four procedures separately and combines them only on the last day. The program fails, and no one can tell which part is wrong. Which practice would have helped most?",
            options: [
              "Writing all four procedures as one long procedure",
              "Testing each procedure, then adding them one at a time",
              "Giving every procedure to the strongest programmer",
              "Waiting for users to report which part is wrong"
            ],
            correctAnswer: 1,
            explanation: "An incremental process makes sure each piece works before it is added to the whole, so a failure points to the newest piece."
          },
          {
            question: "A class project group has skills imbalances: one student knows the language, three are beginners. The most CSP-aligned approach is ___",
            options: [
              "have the experienced student write all the code while the others observe.",
              "use pair programming so beginners learn while writing real code.",
              "restrict the beginners to writing only documentation and never any code.",
              "have the beginners hand-copy code that the experienced student wrote first."
            ],
            correctAnswer: 1,
            explanation: "Pair programming spreads skill while everyone contributes; the driver and navigator switch roles."
          }
        ]
      }
    }
  ]
};
