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

Programming sits at the center of CSP. Procedures connect to **abstraction** (Big Idea 1), accumulators to **data** (BI 2), client/server programs to **internet** (BI 4), and design choices to **impact** (BI 5).

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
              "runs faster.",
              "lets the caller use the algorithm without understanding its internal steps.",
              "compresses memory.",
              "guarantees correctness."
            ],
            correctAnswer: 1,
            explanation: "Procedures are the canonical abstraction tool — separating \"what\" from \"how\"."
          },
          {
            question: "A program reads users' birthdates and computes their ages. Which CSP cross-topic concern is most directly raised when the program rejects 4-digit birth years before 1925?",
            options: [
              "Big Idea 5: such hard cuts can introduce age-based bias against older users.",
              "The program is too short.",
              "The program uses too many procedures.",
              "The program needs to be sorted."
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
- Side effects: none.

Callers can rely on this contract without reading the body. If you later switch the implementation (e.g., add Friday), you change one place and all callers update.

## Lists as the Data Bridge

Programs almost always operate on **lists** (BI 2 calls them collections). The connection:

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

1) Hiding implementation details behind a procedure name is called _______.

2) A series of input → transform → output stages on data is called a _______.

3) When a program's design decision affects a group of users systematically, this raises a question of algorithmic _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["abstraction", "pipeline", "bias"],
        hint1: "CED Big Idea 1 vocabulary.",
        hint2: "Like an assembly line.",
        hint3: "Systematic skew in outcomes.",
        explanation: "Abstraction names ideas. Pipelines move data. Bias arises when design choices affect groups unevenly."
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
            label: "A procedure that does one well-defined thing is best described as having ___",
            options: ["high cohesion", "low cohesion", "no parameters", "global scope"]
          },
          {
            label: "Two procedures that share no state and could be developed independently are ___",
            options: ["loosely coupled", "tightly coupled", "recursive", "concurrent"]
          },
          {
            label: "A program whose decisions affect millions of users should be evaluated for ___",
            options: ["unintended impact on subgroups", "shorter line count", "fewer comments", "more loops"]
          }
        ],
        correctAnswers: ["high cohesion", "loosely coupled", "unintended impact on subgroups"],
        hint1: "Single, focused purpose.",
        hint2: "Few shared dependencies.",
        hint3: "Scale amplifies design choices.",
        explanation: "Good design favors high-cohesion, loose-coupling procedures. At scale, programmers must consider subgroup impact."
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
              "Improved running-time efficiency.",
              "Improved readability and a single point of update if the categories ever change.",
              "Reduced data-storage requirements.",
              "Faster Internet response times."
            ],
            correctAnswer: 1,
            explanation: "Extracting a procedure does not change time complexity; it improves readability and centralizes the rule."
          },
          {
            question: "A loan-decision program denies applicants whose monthly income is below a threshold. After deployment, the team discovers the threshold disproportionately denies applicants from a specific region with lower median wages but equal repayment history. The most defensible response is to ___",
            options: [
              "leave the threshold; the program ran exactly as designed.",
              "review the criterion in light of the disparate impact and consult stakeholders before redeploying.",
              "lower the threshold for that region only without other review.",
              "remove the income field entirely."
            ],
            correctAnswer: 1,
            explanation: "Disparate impact requires review and stakeholder input — neither blind acceptance nor an ad hoc patch."
          }
        ]
      }
    }
  ]
};
