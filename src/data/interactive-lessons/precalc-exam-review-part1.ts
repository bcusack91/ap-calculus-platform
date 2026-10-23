export const precalcExamReviewPart1Data = {
  topicSlug: 'precalc-exam-review',
  sections: [
    {
      id: 'per1-intro',
      type: 'text' as const,
      content: `# 🎓 AP Precalculus Exam Review

**Part 1 of 7 — Exam Format, Pacing and the Calculator Split**

### Topic Overview

| Part | Review Topic |
|:---:|:---|
| **1** | **Exam Format, Pacing and the Calculator Split** |
| 2 | Unit 1: Rates of Change and Polynomial Functions |
| 3 | Unit 1: Rational Functions, Transformations and Models |
| 4 | Unit 2: Sequences, Exponential and Logarithmic Functions |
| 5 | Unit 3: Trigonometric Functions and Sinusoidal Models |
| 6 | Unit 3: Inverse Trigonometry, Equations, Identities and Polar Functions |
| 7 | Final Mixed Set: Part A and Part B Practice |

---

### The 2027 AP Precalculus Exam

| Section | Part | Questions | Time | Calculator | Pace |
|:---:|:---:|:---:|:---:|:---:|:---|
| I: Multiple Choice (62.5%) | A | 29 | 65 min | **none** | about 2 min 15 s per question |
| I: Multiple Choice | B | 13 | 40 min | **graphing calculator** | about 3 min per question |
| II: Free Response (37.5%) | A | Q1, Q2 | 35 min | **graphing calculator** | Function Concepts; Non-Periodic Modeling |
| II: Free Response | B | Q3, Q4 | 35 min | **none** | Periodic Modeling; Symbolic Manipulations |

Every multiple-choice question has **four** choices and there is **no penalty** for a wrong answer: answer every question.

### What Is Tested

| Unit | Content | Approximate weight |
|:---:|:---|:---:|
| 1 | Polynomial and Rational Functions (rates of change, polynomials, rational functions, transformations, modeling) | about **35%** |
| 2 | Exponential and Logarithmic Functions (sequences, exponential and log functions, composition and inverses, data modeling, semi-log plots) | about **32%** |
| 3 | Trigonometric and Polar Functions (trig functions and graphs, sinusoidal models, inverses, equations, identities, polar coordinates) | about **33%** |
| 4 | Parameters, vectors, matrices | **not assessed** |

The three assessed units carry roughly equal weight. There is no safe unit to skip.

### The Calculator Split

| Without a calculator (Part A, Q3, Q4) | With a graphing calculator (Part B, Q1, Q2) |
|:---|:---|
| unit-circle values: $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$ | regression: linear, quadratic, cubic, exponential, logarithmic, sinusoidal |
| log properties and exact solving: $\\log_2 x + \\log_2(x - 2) = 3$ | numeric solving: where does the model equal $50$? |
| factoring, identities, equivalent forms | evaluating $\\ln 7$, $\\sin 2.3$, $1.299^{9}$ |
| end behavior and asymptotes with limit notation | graphing to count solutions or find extrema |
| reading tables and graphs for rates of change | finding residuals and comparing models |

> **Key Fact:** Part A is the long part: **29 questions in 65 minutes**. Two passes beat one slow pass: answer what you know, mark what you don't, come back.`
    },
    {
      id: 'per1-mc',
      type: 'multiple-choice' as const,
      content: '**Format check.** 🎯',
      exercise: {
        questions: [
          {
            question: 'In Section I Part A, about how much time is available per question?',
            options: ['About 2 minutes 15 seconds', 'About 3 minutes 30 seconds', 'About 1 minute 30 seconds', 'About 4 minutes 30 seconds'],
            correctAnswer: 0,
            explanation: '$65$ minutes for $29$ questions is $\\frac{65}{29} \\approx 2.24$ minutes, about $2$ minutes $15$ seconds. Part B allows about $3$ minutes per question ($40$ minutes for $13$).'
          },
          {
            question: 'Which task belongs to a calculator part of the exam rather than a no-calculator part?',
            options: ['Finding an exponential regression model for a table of data', 'Evaluating $\\cos\\left(\\dfrac{5\\pi}{6}\\right)$ exactly', 'Rewriting $\\log_2 x + \\log_2(x - 2)$ as a single logarithm', 'Stating the end behavior of a rational function with limit notation'],
            correctAnswer: 0,
            explanation: 'Regression requires the calculator and appears in Section I Part B and free-response Question 2. Unit-circle values, logarithm properties and limit-notation reasoning are no-calculator skills.'
          },
          {
            question: 'Which statement about the exam content is correct?',
            options: ['Units 1, 2 and 3 each carry roughly a third of the exam', 'Unit 1 carries about half of the exam, and Units 2 and 3 share the rest', 'Unit 3 carries about $60\\%$ of the exam because it has the most topics', 'Unit 4 carries about $10\\%$ of the exam, all in Section I Part B'],
            correctAnswer: 0,
            explanation: 'The three assessed units are weighted nearly equally; Unit 4 (parameters, vectors, matrices) is not assessed at all. No unit can be skipped.'
          }
        ]
      }
    },
    {
      id: 'per1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Test-day rules.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Multiple-choice questions have:',
            options: ['four choices, no penalty for wrong answers: answer every question', 'five choices and a quarter-point penalty for every wrong answer', 'four choices and a penalty, so unsure questions should be left blank', 'five choices and no penalty, but a blank question earns half credit'],
            correctAnswer: 0
          },
          {
            label: 'A Part A question has taken $2$ minutes and is not close to solved. The best move is to:',
            options: ['mark it, move on, and return after the first pass', 'keep working on it until it is completely solved', 'guess at it and never return to it afterward', 'skip the rest of the section and come back later'],
            correctAnswer: 0
          },
          {
            label: 'Unit 4 content (parametric functions, vectors, matrices):',
            options: ['is not assessed on the exam', 'appears only in Section I Part B', 'is about $10\\%$ of the exam', 'appears only in free-response Question 4'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['four choices, no penalty for wrong answers: answer every question', 'mark it, move on, and return after the first pass', 'is not assessed on the exam'],
        hint1: 'Four choices, no deduction for a wrong answer.',
        hint2: 'Two passes: first the questions you can do, then the marked ones.',
        hint3: 'The exam assesses Units 1 through 3 only.',
        explanation: 'With four choices and no penalty, a blank is the only answer that cannot score. Pacing Part A means banking the questions you can do before spending time on the ones you cannot. Unit 4 is in the course framework but not on the exam.'
      }
    },
    {
      id: 'per1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Section I: **29 questions in 65 min without a calculator**, then **13 in 40 min with one**; Section II: Q1–Q2 with a calculator, Q3–Q4 without, 35 min each
- Units 1, 2, 3 are about **35 / 32 / 33%**; Unit 4 is not assessed
- Four choices, no penalty: **answer everything**, two passes through Part A
- Know which skills are **exact, by hand** and which are **calculator** skills`
    }
  ]
};
