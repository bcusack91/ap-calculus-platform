export const precalcFrqStrategiesPart1Data = {
  topicSlug: 'precalc-frq-strategies',
  sections: [
    {
      id: 'pfs1-intro',
      type: 'text' as const,
      content: `# 📝 Free-Response Strategies: the Four Question Types

**Part 1 of 7 — The Free-Response Section and How Points Are Earned**

### Topic Overview

| Part | Focus |
|:---:|:---|
| **1** | **The Free-Response Section and How Points Are Earned** |
| 2 | Question 1: Function Concepts |
| 3 | Question 2: Modeling a Non-Periodic Context |
| 4 | Question 3: Modeling a Periodic Context |
| 5 | Question 4: Symbolic Manipulations |
| 6 | Common Point Losses and the 35 + 35 Minute Budget |
| 7 | Mixed Mini-FRQ Set and Mastery Check |

---

### The 2027 Free-Response Section

Section II is **4 questions in 70 minutes** and counts for **37.5%** of the exam score. The four questions always play the same four roles, in the same order:

| Section | Question | Role | Calculator | Time |
|:---:|:---:|:---|:---:|:---:|
| Part A | 1 | Function Concepts | **graphing calculator required** | 35 min for both |
| Part A | 2 | Modeling a Non-Periodic Context | **graphing calculator required** | |
| Part B | 3 | Modeling a Periodic Context | **not allowed** | 35 min for both |
| Part B | 4 | Symbolic Manipulations | **not allowed** | |

Each question is scored out of **6 points**, in three lettered parts (A), (B), (C), most of which split into (i) and (ii). A point is tied to one specific thing: a value, a justification, an interpretation. You never lose a point for an error in a different part, and you can earn a later part with a wrong earlier value if your method is right.

> **Key Fact:** Four questions, four roles, 6 points each. Knowing the role of a question tells you what it will ask before you read it.

### What Earns the Point

| Convention | What the reader looks for |
|:---|:---|
| **Decimals: three places** | In Part A, a decimal answer must be correct to **three decimal places** (rounded or truncated). $2.5$ for a true value of $2.4987$ loses the point; $2.499$ or $2.498$ earns it. |
| **Exact in Part B** | With no calculator, answers are exact: $\\dfrac{\\pi}{3}$, $\\ln 5$, $2\\sqrt{3}$, $\\dfrac{5}{2}$. Equivalent exact forms all earn credit. |
| **"Approximately"** | A value produced by a *model* is an estimate. Write "approximately $32.493$ thousand downloads" or use $\\approx$. |
| **Units** | Interpretations and rates of change carry units: "thousand downloads **per week**". |
| **Justify with the model or the data** | "Because the ratios of consecutive outputs are roughly constant" earns the point. "Because it looks exponential" does not. |
| **Rate-of-change language** | Say whether the function is **increasing or decreasing** and whether its **rate of change is increasing or decreasing** (concave up or down), on a named **interval**. |
| **Equivalent forms** | $\\ln 8$ and $3\\ln 2$ earn the same credit; $\\dfrac{6}{4}$ need not become $\\dfrac{3}{2}$. |
| **Full precision inside the problem** | State a regression model to three decimals, but compute later answers with the **stored** model, never with the rounded coefficients. |

### What a Point Is Not

- A point is not awarded for a correct number written next to an unrelated or wrong reason when the part says **justify** or **explain**.
- A point is not awarded for a correct unlabeled answer buried in scratch work: **label the part** and **box or underline** the answer.
- Crossed-out work is not read. If you change your mind, cross out and rewrite.`
    },
    {
      id: 'pfs1-mc',
      type: 'multiple-choice' as const,
      content: '**Format and conventions check.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which statement about the calculator policy of the 2027 free-response section is correct?',
            options: ['Questions 1 and 2 require a graphing calculator; Questions 3 and 4 do not allow one', 'Questions 1 and 3 require a graphing calculator; Questions 2 and 4 do not allow one', 'All four questions require a graphing calculator for at least one part', 'All four questions are answered without a calculator of any kind'],
            correctAnswer: 0,
            explanation: 'Part A (Questions 1 and 2, Function Concepts and Modeling a Non-Periodic Context) requires a graphing calculator; Part B (Questions 3 and 4, Modeling a Periodic Context and Symbolic Manipulations) is taken without one. Each part has its own 35 minutes.'
          },
          {
            question: 'In Part A, a regression model gives a predicted value of $35.9094\\ldots$ thousand visitors in month $8$. Which statement earns the prediction point?',
            options: ['Approximately $35.909$ thousand visitors in month $8$', 'Approximately $36$ thousand visitors in month $8$', 'About $35.9$ thousand visitors in month $8$', '$35.90$ thousand visitors in month $8$'],
            correctAnswer: 0,
            explanation: 'A calculator-section decimal must be correct to three decimal places, and a value that comes from a model is reported as approximate. $36$, $35.9$ and $35.90$ all stop short of three decimal places.'
          },
          {
            question: 'In Part B, with no calculator, the solutions of $2\\cos\\theta = 1$ on $[0, 2\\pi)$ should be reported as:',
            options: ['$\\theta = \\dfrac{\\pi}{3}$ and $\\theta = \\dfrac{5\\pi}{3}$', '$\\theta = \\dfrac{\\pi}{3}$ and $\\theta = \\dfrac{2\\pi}{3}$', '$\\theta \\approx 1.047$ and $\\theta \\approx 5.236$', '$\\theta = \\dfrac{\\pi}{6}$ and $\\theta = \\dfrac{11\\pi}{6}$'],
            correctAnswer: 0,
            explanation: '$\\cos\\theta = \\frac{1}{2}$ at the Quadrant I and Quadrant IV angles $\\frac{\\pi}{3}$ and $\\frac{5\\pi}{3}$, written exactly. $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$, decimal approximations are not what a no-calculator part asks for, and $\\frac{\\pi}{6}$ and $\\frac{11\\pi}{6}$ have cosine $\\frac{\\sqrt{3}}{2}$.'
          }
        ]
      }
    },
    {
      id: 'pfs1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Scoring conventions.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A calculator-section answer of $2.5$ when the value is $2.4987$:',
            options: ['loses the point, since three decimal places are required', 'earns the point, since it is correct to the nearest tenth', 'earns the point, since $2.5$ equals $2.500$', 'earns half of the point for the setup'],
            correctAnswer: 0
          },
          {
            label: 'A free-response interpretation of an average rate of change must state:',
            options: ['its units and the interval it applies to', 'the second differences of the data', 'the correlation coefficient of the regression', 'the domain and range of the model'],
            correctAnswer: 0
          },
          {
            label: 'Two students answer a Part B question with $\\ln 8$ and with $3\\ln 2$. They earn:',
            options: ['the same credit, since equivalent forms are accepted', 'credit only for $3\\ln 2$, the simplified form', 'credit only for $\\ln 8$, the single-term form', 'no credit without a decimal approximation'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['loses the point, since three decimal places are required', 'its units and the interval it applies to', 'the same credit, since equivalent forms are accepted'],
        hint1: '$2.4987$ to three decimal places is $2.499$ (or $2.498$ truncated).',
        hint2: 'A rate of change is a number with units, on an interval.',
        hint3: '$3\\ln 2 = \\ln 2^3 = \\ln 8$.',
        explanation: 'Three decimal places are the standard for every decimal answer in Part A, so $2.5$ falls short. A rate of change always carries its units and its interval. Equivalent exact forms earn the same credit; nothing in Part B needs a decimal.'
      }
    },
    {
      id: 'pfs1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Four questions, four fixed roles: **Function Concepts**, **Non-Periodic Modeling** (calculator, Part A, 35 min); **Periodic Modeling**, **Symbolic Manipulations** (no calculator, Part B, 35 min)
- Each question is **6 points**; points are earned part by part, so attempt every part
- Part A decimals: **three decimal places**, model outputs are **approximately**; Part B answers are **exact**
- Rates of change carry **units** and an **interval**; justifications come from **the data or the model**, not from how a graph looks`
    }
  ]
};
