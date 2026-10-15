export const cspAlgorithmsProgrammingPart4Data = {
  topicSlug: "csp-algorithms-programming",
  sections: [
    {
      id: "cspap4-intro",
      type: 'text' as const,
      content: `
# 💻 Algorithms & Programming

**Part 4 of 7 — Connections & Interactions**

---

## How Code Connects Across the Course

Programming sits at the center of CSP. Procedures and lists are **abstractions** (Big Idea 3: Algorithms and Programming), the values they process are **data** (Big Idea 2), programs that send and receive data use the **Internet** (Big Idea 4), and design choices have an **impact** on people (Big Idea 5).

| Connection | Example |
|-----------|---------|
| Procedures ↔ Abstraction | A name hides an implementation. |
| Lists ↔ Data | Programs read, transform, and write data structures. |
| Conditionals ↔ Logic | Boolean expressions encode rules. |
| Programs ↔ Impact | Whose voice is in the data the program acts on? |
      `
    },
    {
      id: "cspap4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Wrapping a 30-line algorithm inside a named PROCEDURE primarily helps because it ___",
            options: [
              "makes the steps run faster, since procedure calls are optimized.",
              "lets callers use it without knowing its steps.",
              "reduces the memory the 30 lines take up while running.",
              "guarantees the steps are correct, since procedures are tested."
            ],
            correctAnswer: 1,
            explanation: "Procedures are the canonical abstraction tool — separating \"what\" from \"how\"."
          },
          {
            question: "A program reads users' birthdates and computes their ages. Which CSP cross-topic concern is most directly raised when the program rejects 4-digit birth years before 1925?",
            options: [
              "Such a hard cutoff can introduce age-based bias against older people.",
              "The program is too short to validate dates reliably.",
              "The program uses too many procedures to compute an age.",
              "The program must sort the birthdates before computing ages."
            ],
            correctAnswer: 0,
            explanation: "Boundary choices in code become real-world inclusions/exclusions — an impact-of-computing concern."
          }
        ]
      }
    },
    {
      id: "cspap4-content",
      type: 'text' as const,
      content: `
## Procedures as Abstraction

A procedure header **isWeekend(day)** is a contract:

- Inputs: a day (string).
- Output: a Boolean.

Callers can rely on this contract without reading the body. If you later switch the implementation (e.g., add Friday), you change one place and all callers update.

## Lists as the Data Bridge

Programs almost always operate on **lists**. A list is a **data abstraction**: many related values are managed under one name, so the code does not change when the number of values changes. The connection:

- INPUT brings raw values in.
- A loop transforms or filters the list.
- DISPLAY or a RETURN sends results back out.

This pipeline is the shape of nearly every real program.

## Programs and Impact

A scheduling program that uses ZIP code as a tiebreaker for hospital appointment priority will systematically affect outcomes by neighborhood. The choice happens at one IF statement, but its effect is at the **scale** of the user base. Programmers carry responsibility for these design choices.
      `
    },
    {
      id: "cspap4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Hiding implementation details behind a procedure name is called procedural _______.

2) Using one list name to manage many related values is called _______ abstraction.

3) When a program's design decision affects a group of users systematically, this raises a question of algorithmic _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["abstraction", "data", "bias"],
        hint1: "Big Idea 3 vocabulary: hiding the how.",
        hint2: "The kind of abstraction a list provides.",
        hint3: "Systematic skew in outcomes.",
        explanation: "A procedure is procedural abstraction; a list is data abstraction. Bias arises when design choices affect groups unevenly."
      }
    },
    {
      id: "cspap4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A procedure's internal steps are rewritten, but its name, parameters, and returned result stay the same. The code that calls it must ___",
            options: ["change nothing", "rename its variables", "rewrite every call", "pass new arguments"]
          },
          {
            label: "One procedure handles many similar cases by receiving different arguments. This generalization comes from its ___",
            options: ["parameters", "comments", "RETURN statement", "name"]
          },
          {
            label: "A program whose decisions affect millions of users should be evaluated for ___",
            options: ["unintended impact on subgroups", "speed on the developer's own machine", "number of features shipped", "consistency of its code style"]
          }
        ],
        correctAnswers: ["change nothing", "parameters", "unintended impact on subgroups"],
        hint1: "Callers rely only on what the procedure does, not how.",
        hint2: "The inputs named in the procedure header.",
        hint3: "Scale amplifies design choices.",
        explanation: "Procedural abstraction lets the inside of a procedure change without affecting callers, and parameters let one procedure generalize to many cases. At scale, programmers must consider subgroup impact."
      }
    },
    {
      id: "cspap4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Code Questions

- If the prompt frames a code change as "easier maintenance" or "single source of truth", the answer is usually about extracting a procedure (abstraction).
- If a question describes outcomes that "differ by group", suspect Big Idea 5 (impact / bias).
- Look for the word "scale": at scale, small biases become large harms.
- Don't confuse efficiency (time/space) with maintainability (procedures, naming) — distractors mix these.
      `
    },
    {
      id: "cspap4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team rewrites three nested IF statements as one procedure call categoryFor(score). Which improvement does this primarily realize?",
            options: [
              "Improved running-time efficiency for every score that is checked.",
              "Improved readability and one place to update the categories.",
              "Reduced storage needed for the scores and their categories.",
              "Faster response when the program is used over the Internet."
            ],
            correctAnswer: 1,
            explanation: "Extracting a procedure does not change how many steps the program runs; it improves readability and keeps the rule in one place."
          },
          {
            question: "A loan-decision program denies applicants whose monthly income is below a threshold. After deployment, the team discovers the threshold disproportionately denies applicants from a specific region with lower median wages but equal repayment history. The most defensible response is to ___",
            options: [
              "leave the threshold as is, since the program ran exactly as designed.",
              "review the criterion for disparate impact and consult stakeholders first.",
              "lower the threshold for that region only, without any further review.",
              "remove the income field entirely and approve every applicant automatically."
            ],
            correctAnswer: 1,
            explanation: "Disparate impact requires review and stakeholder input — neither blind acceptance nor an ad hoc patch."
          }
        ]
      }
    }
  ]
};
