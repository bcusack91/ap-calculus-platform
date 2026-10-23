export const precalcExamReviewPart7Data = {
  topicSlug: 'precalc-exam-review',
  sections: [
    {
      id: 'per7-intro',
      type: 'text' as const,
      content: `# 🎓 AP Precalculus Exam Review

**Part 7 of 7 — Final Mixed Set: Part A and Part B Practice**

### How to Use This Set

The questions below mix all three units the way the exam does. The first four are **Part A style**: no calculator, about **2 minutes 15 seconds** each. The last two are **Part B style**: use a graphing calculator, about **3 minutes** each. Time yourself, then review every explanation, including the ones you got right.

### The Final Checklist

| Before the exam | During Part A (no calculator) | During Part B (calculator) |
|:---|:---|:---|
| unit-circle values cold: $\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}$ and their reflections | two passes: bank the sure questions, mark the rest | enter data once, store the regression, reuse it |
| log properties and the three forms of $\\cos(2\\theta)$ | eliminate choices with end behavior, domain, sign | solve numerically by intersection; read to **three decimals** |
| asymptote rules by degree comparison | every answer exact: $\\pi$, radicals, fractions | check that an intersection is inside the asked interval |
| midline, amplitude, period formulas | for "all solutions", count how many the interval should hold | a model prediction is **approximately** |

> **Key Fact:** The exam rewards **recognition**: naming the model type from differences or ratios, the asymptote from the degrees, the quadrant from the signs. Each recognition saves a minute.`
    },
    {
      id: 'per7-mcA',
      type: 'multiple-choice' as const,
      content: '**Part A style: no calculator.** 🎯 Four questions, about 9 minutes.',
      exercise: {
        questions: [
          {
            question: 'Selected values of a function $g$ are shown.\n\n| $x$ | $1$ | $2$ | $4$ | $8$ |\n|:---:|:---:|:---:|:---:|:---:|\n| $g(x)$ | $3$ | $5$ | $7$ | $9$ |\n\nWhich type of function model is most appropriate for $g$?',
            options: ['Logarithmic, since the output rises by $2$ each time the input doubles', 'Linear, since the output rises by $2$ from one row to the next', 'Exponential, since the input doubles from one row to the next', 'Quadratic, since the inputs are not equally spaced'],
            correctAnswer: 0,
            explanation: 'Equal output changes for proportional (multiplicative) input changes is the signature of a logarithmic function: $g(x) = 3 + 2\\log_2 x$ fits exactly. A linear model needs equal output changes over equal input differences, and the inputs here are not equally spaced; an exponential model would have proportional output changes.'
          },
          {
            question: 'Let $p(x) = x^3 - 4x$. On which intervals is $p(x) > 0$?',
            options: ['$(-2, 0) \\cup (2, \\infty)$', '$(-\\infty, -2) \\cup (0, 2)$', '$(0, \\infty)$', '$(-2, 2)$'],
            correctAnswer: 0,
            explanation: '$p(x) = x(x - 2)(x + 2)$ has simple zeros at $-2, 0, 2$, so the sign alternates: negative on $(-\\infty, -2)$, positive on $(-2, 0)$, negative on $(0, 2)$, positive on $(2, \\infty)$ (the leading term $x^3$ is positive for large $x$).'
          },
          {
            question: 'If $\\sin\\theta = -\\dfrac{3}{5}$ and $\\cos\\theta > 0$, what is $\\tan\\theta$?',
            options: ['$-\\dfrac{3}{4}$', '$\\dfrac{3}{4}$', '$-\\dfrac{4}{3}$', '$-\\dfrac{4}{5}$'],
            correctAnswer: 0,
            explanation: 'Negative sine with positive cosine puts $\\theta$ in Quadrant IV, where $\\cos\\theta = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$, so $\\tan\\theta = \\frac{-3/5}{4/5} = -\\frac{3}{4}$. The value $-\\frac{4}{3}$ inverts the ratio and $-\\frac{4}{5}$ is the negative of the cosine.'
          },
          {
            question: 'For $x > 0$, which expression is equivalent to $\\ln\\left(e^3 x\\right)$?',
            options: ['$3 + \\ln x$', '$3\\ln x$', '$e^3 + \\ln x$', '$3x$'],
            correctAnswer: 0,
            explanation: 'The product rule gives $\\ln e^3 + \\ln x$, and $\\ln e^3 = 3$. The power rule $3\\ln x$ would apply to $\\ln(x^3)$, not to a factor of $e^3$.'
          }
        ]
      }
    },
    {
      id: 'per7-mcB',
      type: 'multiple-choice' as const,
      content: '**Part B style: graphing calculator.** 🎯 Two questions, about 6 minutes. Report decimals to three places.',
      exercise: {
        questions: [
          {
            question: 'A population grows exponentially from $1{,}200$ to $1{,}500$ in $4$ years. According to this model, how many years after the population was $1{,}200$ does it reach $3{,}000$?',
            options: ['$16.425$ years', '$24.000$ years', '$20.000$ years', '$12.000$ years'],
            correctAnswer: 0,
            explanation: 'The yearly growth factor is $b = \\left(\\frac{1500}{1200}\\right)^{1/4} \\approx 1.057$, so solve $1200\\,b^t = 3000$: $t = \\frac{\\ln 2.5}{\\ln 1.25 / 4} \\approx 16.425$. The value $24.000$ comes from a linear model growing $75$ per year; the others are not supported by either model.'
          },
          {
            question: 'What is the solution of $2\\cos x = x$ on the interval $0 \\le x \\le \\pi$?',
            options: ['$x \\approx 1.030$', '$x \\approx 0.515$', '$x \\approx 2.060$', '$x \\approx 0.785$'],
            correctAnswer: 0,
            explanation: 'Graph $y = 2\\cos x$ and $y = x$ and find the intersection: $x \\approx 1.030$ (check: $2\\cos 1.030 \\approx 1.030$). The value $0.515$ is $\\cos$ of the solution, $2.060$ is double it, and at $0.785 = \\frac{\\pi}{4}$ the left side is $\\sqrt{2} \\approx 1.414 \\ne 0.785$.'
          }
        ]
      }
    },
    {
      id: 'per7-input',
      type: 'input-boxes' as const,
      content: `**Last exact checks.** ✍️

**1)** The average rate of change of $f(x) = 2^x$ on the interval $[1, 3]$:

**2)** The value of $\\cos\\pi$:

**3)** The value of $\\log_2 8 + \\log_2 4$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '-1', '5'],
        hint1: '$\\frac{f(3) - f(1)}{3 - 1} = \\frac{8 - 2}{2}$.',
        hint2: 'The point on the unit circle at angle $\\pi$ is $(-1, 0)$.',
        hint3: '$\\log_2 8 = 3$ and $\\log_2 4 = 2$, or combine: $\\log_2 32$.',
        explanation: '(1) $\\frac{8 - 2}{2} = 3$. (2) $\\cos\\pi = -1$. (3) $3 + 2 = 5$, which is also $\\log_2 32$.'
      }
    },
    {
      id: 'per7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — AP Precalculus Exam Review

| Unit | Recognize | Compute | Say |
|:---:|:---|:---|:---|
| 1 | model type from differences; asymptotes from degrees; multiplicity from the graph | average rates of change; zeros; transformed points | increasing/decreasing **and** concave up/down, with limit notation for asymptotes |
| 2 | exponential from ratios; log from doubling inputs; linear semi-log plot | $b$ from two points; inverses by swapping; log equations with a domain check | percent change per unit; "approximately" for model outputs |
| 3 | quadrant from signs; period from $b$; petals from $k$ | exact unit-circle values; all solutions in an interval; polar conversions | midline/amplitude/period; "moves toward or away from the pole" |

- **42 multiple-choice in 105 minutes**, then **4 free-response in 70**; Units 1–3 about **35 / 32 / 33%**
- Part A and Q3–Q4: **exact by hand**; Part B and Q1–Q2: **calculator, three decimals**
- Answer every multiple-choice question; attempt every free-response part`
    }
  ]
};
