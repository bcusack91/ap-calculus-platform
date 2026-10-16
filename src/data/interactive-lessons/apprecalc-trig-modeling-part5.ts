export const apPrecalcTrigModelPart5Data = {
  topicSlug: "trigonometric-modeling-apprecalc",
  sections: [
    {
      id: 'apprecalc-trig-modeling-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Inverse Trig Functions

**Part 5 of 7 — Inverse Trig Functions**

Sine, cosine and tangent are periodic, so each output comes from infinitely many angles. To build an inverse, the domain of each function is **restricted** to one interval where it takes every output exactly once. That interval becomes the **range** of the inverse function, and AP Precalculus measures it in **radians**.

| Inverse function | Input | Output (range) | Quadrants of the output |
|---|---|---|---|
| $\\sin^{-1}(x)$ or $\\arcsin(x)$ | $-1 \\le x \\le 1$ | $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ | I and IV |
| $\\cos^{-1}(x)$ or $\\arccos(x)$ | $-1 \\le x \\le 1$ | $[0, \\pi]$ | I and II |
| $\\tan^{-1}(x)$ or $\\arctan(x)$ | all real $x$ | $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ | I and IV |

> 🔑 **Key Concept:** $\\arcsin(x)$ is the angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ whose sine is $x$. A negative input gives a negative angle for arcsine and arctangent, but an angle between $\\frac{\\pi}{2}$ and $\\pi$ for arccosine.
    `
    },
    {
      id: 'apprecalc-trig-modeling-p5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**1) $\\arcsin\\left(-\\frac{\\sqrt{2}}{2}\\right)$.** The reference angle with sine $\\frac{\\sqrt{2}}{2}$ is $\\frac{\\pi}{4}$. The input is negative and the range is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, so the answer is in Quadrant IV: $-\\frac{\\pi}{4}$.

**2) $\\arccos\\left(-\\frac{1}{2}\\right)$.** The reference angle with cosine $\\frac{1}{2}$ is $\\frac{\\pi}{3}$. The range $[0, \\pi]$ puts a negative cosine in Quadrant II: $\\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$. The angle $\\frac{4\\pi}{3}$ also has cosine $-\\frac{1}{2}$, but it is outside the range.

**3) $\\arctan(-\\sqrt{3})$.** The reference angle with tangent $\\sqrt{3}$ is $\\frac{\\pi}{3}$. A negative input gives a Quadrant IV angle: $-\\frac{\\pi}{3}$.

| Expression | Reference angle | Answer |
|---|---|---|
| $\\arcsin(1)$ | $\\frac{\\pi}{2}$ | $\\frac{\\pi}{2}$ |
| $\\arccos(0)$ | $\\frac{\\pi}{2}$ | $\\frac{\\pi}{2}$ |
| $\\arctan(1)$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{4}$ |
| $\\arccos(-1)$ | $0$ | $\\pi$ |
    `
    },
    {
      id: 'apprecalc-trig-modeling-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
            question: "What is the exact value of $\\arcsin\\left(-\\frac{1}{2}\\right)$?",
            options: [
              "$-\\frac{\\pi}{6}$",
              "$\\frac{7\\pi}{6}$",
              "$\\frac{11\\pi}{6}$",
              "$-\\frac{\\pi}{3}$"
            ],
            correctAnswer: 0,
            explanation: "The reference angle with sine $\\frac{1}{2}$ is $\\frac{\\pi}{6}$, and arcsine returns an angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, so the answer is $-\\frac{\\pi}{6}$. The angles $\\frac{7\\pi}{6}$ and $\\frac{11\\pi}{6}$ have the same sine but lie outside the range, and $-\\frac{\\pi}{3}$ has sine $-\\frac{\\sqrt{3}}{2}$."
          },
          {
            question: "Which value is in the range of $\\arccos(x)$?",
            options: [
              "$-\\frac{\\pi}{4}$",
              "$\\frac{3\\pi}{4}$",
              "$\\frac{5\\pi}{4}$",
              "$\\frac{3\\pi}{2}$"
            ],
            correctAnswer: 1,
            explanation: "Arccosine outputs angles in $[0, \\pi]$, and only $\\frac{3\\pi}{4}$ lies in that interval. A negative angle such as $-\\frac{\\pi}{4}$ belongs to the range of arcsine or arctangent, and $\\frac{5\\pi}{4}$ and $\\frac{3\\pi}{2}$ are greater than $\\pi$."
          }
        ]
      }
    },
    {
      id: 'apprecalc-trig-modeling-p5-input',
      type: 'input-boxes' as const,
      content: `
**Inverse Trig in Radians** 🧮

Give each answer in radians as a fraction of pi, such as "pi/3", "-pi/4" or "0".

1) $\\arccos(1) = $ ?

2) $\\arctan(-1) = $ ?

3) $\\arccos\\left(-\\frac{\\sqrt{3}}{2}\\right) = $ ?
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0", "-pi/4", "5pi/6"],
        hint1: "Which angle in $[0, \\pi]$ has cosine $1$?",
        hint2: "The reference angle is $\\frac{\\pi}{4}$, and arctangent returns a Quadrant IV angle for a negative input.",
        hint3: "The reference angle is $\\frac{\\pi}{6}$, and arccosine puts a negative input in Quadrant II: $\\pi - \\frac{\\pi}{6}$.",
        explanation: "1) $\\cos 0 = 1$, so $\\arccos(1) = 0$. 2) $\\tan\\left(-\\frac{\\pi}{4}\\right) = -1$, so $\\arctan(-1) = -\\frac{\\pi}{4}$. 3) $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$ and $\\frac{5\\pi}{6}$ is in $[0, \\pi]$, so the answer is $\\frac{5\\pi}{6}$."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Ranges in Radians** 🔍
    `,
      exercise: {
        dropdowns: [
          { label: "The range of arcsin is", options: ["$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$", "$[0, \\pi]$", "$[0, 2\\pi)$", "All reals"] },
          { label: "The range of arccos is", options: ["$[0, \\pi]$", "$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$", "$[0, 2\\pi)$", "All reals"] },
          { label: "The domain of arctan is", options: ["All reals", "$[-1, 1]$", "$\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$", "$[0, \\pi]$"] }
        ],
        correctAnswers: ["$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$", "$[0, \\pi]$", "All reals"],
        hint1: "Sine takes every value from $-1$ to $1$ exactly once between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$.",
        hint2: "Cosine takes every value from $-1$ to $1$ exactly once between $0$ and $\\pi$.",
        hint3: "Tangent takes every real value, so arctangent accepts every real input.",
        explanation: "arcsin: $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. arccos: $[0, \\pi]$. Arctangent accepts all real inputs and returns angles in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$."
      }
    },
    {
      id: 'apprecalc-trig-modeling-p5-solve',
      type: 'text' as const,
      content: `
## Using an Inverse to Solve an Equation

An inverse function gives **one** solution. The other solutions come from the unit circle and the period.

**Solve $\\sin x = 0.4$ for $0 \\le x < 2\\pi$.**

| Step | Work |
|---|---|
| One solution from the inverse | $x = \\arcsin(0.4) \\approx 0.412$, in Quadrant I |
| Second solution with the same sine | $x = \\pi - \\arcsin(0.4) \\approx 2.730$, in Quadrant II |
| Check the interval | Both are between $0$ and $2\\pi$; adding $2\\pi$ would leave the interval |

In a model such as $h(t) = 10 + 4\\sin\\left(\\frac{\\pi}{6}t\\right)$, the same idea finds every time $t$ when $h(t)$ reaches a given value: solve for the sine, apply the inverse, then use symmetry and the period to list the other times.
    `
    },
    {
      id: 'apprecalc-trig-modeling-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
            question: "Which list gives every solution of $\\cos x = -\\frac{1}{2}$ with $0 \\le x < 2\\pi$?",
            options: [
              "$\\frac{2\\pi}{3}$ only",
              "$\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$",
              "$\\frac{\\pi}{3}$ and $\\frac{5\\pi}{3}$",
              "$\\frac{2\\pi}{3}$ and $\\frac{5\\pi}{3}$"
            ],
            correctAnswer: 1,
            explanation: "$\\arccos\\left(-\\frac{1}{2}\\right) = \\frac{2\\pi}{3}$ gives one solution. Cosine is also negative in Quadrant III, so $2\\pi - \\frac{2\\pi}{3} = \\frac{4\\pi}{3}$ is the second. Stopping at $\\frac{2\\pi}{3}$ misses it, and $\\frac{\\pi}{3}$ and $\\frac{5\\pi}{3}$ solve $\\cos x = \\frac{1}{2}$."
          }
        ]
      }
    }
  ]
};
