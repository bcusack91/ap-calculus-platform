export const apPrecalcRationalPart3Data = {
  topicSlug: "rational-functions-apprecalc",
  sections: [
    {
      id: 'apprecalc-rational-functions-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Horizontal Asymptotes

**Part 3 of 7 — Horizontal Asymptotes**

Compare degrees of numerator ($n$) and denominator ($d$):

| Condition | HA |
|-----------|----|
| $n < d$ | $y = 0$ |
| $n = d$ | $y = \\dfrac{a}{b}$, the ratio of the leading coefficients ($a$ on top, $b$ on the bottom) |
| $n > d$ | No HA (a slant asymptote when $n = d + 1$) |
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**$f(x) = \\frac{3x^2}{x^2 + 1}$. HA?**

Degrees equal (both 2). HA: $y = \\frac{3}{1} = 3$ ✅
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "What is the horizontal asymptote of $y = \\dfrac{1}{x+1}$?",
                    "options": [
                              "$y = 0$",
                              "$y = 1$",
                              "$y = -1$",
                              "No horizontal asymptote"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The numerator has degree $0$ and the denominator has degree $1$. A smaller degree on top means $y \\to 0$ as $x \\to \\pm\\infty$, so the asymptote is $y = 0$."
          }
]
      }
    },
    {
      id: 'apprecalc-rational-functions-p3-input',
      type: 'input-boxes' as const,
      content: `
**Horizontal Asymptotes** 🧮

1) $\\frac{1}{x+1}$. HA: $y = $ ?

2) $\\frac{2x}{x-3}$. HA: $y = $ ?

3) $\\frac{4x^2}{2x^2+1}$. HA: $y = $ ?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0","2","2"],
        hint1: "Num degree < den degree.",
        hint2: "Equal degrees: LC ratio.",
        hint3: "4/2.",
        explanation: "1) 0. 2) 2/1=2. 3) 4/2=2."
      }
    },
    {
      id: 'apprecalc-rational-functions-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"When numerator degree < denominator degree, HA is","options":["y = 0","y = 1","No HA","y = leading coeff"]},{"label":"When degrees are equal, HA equals","options":["Ratio of leading coefficients","0","1","No HA"]}],
        correctAnswers: ["y = 0","Ratio of leading coefficients"],
        hint1: "Smaller on top → approaches 0.",
        hint2: "Compare the leading terms.",
        explanation: "n<d → y=0. n=d → ratio of LCs."
      }
    },
    {
      id: 'apprecalc-rational-functions-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Function | HA |
|---|---------|----|
| 1 | $\\frac{1}{x+1}$ | $y = 0$ |
| 2 | $\\frac{2x}{x-3}$ | $y = 2$ |
| 3 | $\\frac{4x^2}{2x^2+1}$ | $y = 2$ |
    
    `
    },
    {
      id: 'apprecalc-rational-functions-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "What is the horizontal asymptote of $y = \\dfrac{2x}{x-3}$?",
                    "options": [
                              "$y = 2$",
                              "$y = 0$",
                              "$y = -3$",
                              "$y = 3$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The degrees are equal (both $1$), so the asymptote is the ratio of leading coefficients: $y = \\dfrac{2}{1} = 2$. The value $3$ comes from the denominator's zero, which gives the vertical asymptote $x = 3$, not a horizontal one."
          }
]
      }
    }
  ]
};
