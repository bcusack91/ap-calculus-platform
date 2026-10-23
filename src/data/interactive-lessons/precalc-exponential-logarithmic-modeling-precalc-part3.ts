export const precalcExpLogModelingPart3Data = {
  topicSlug: 'exponential-logarithmic-modeling-precalc',
  sections: [
    {
      id: 'elm3-intro',
      type: 'text' as const,
      content: `
# 📉 Residuals and Residual Plots

**Part 3 of 7 — Residuals and Residual Plots**

A model is only useful if it is **appropriate** for the data. The tool for checking is the **residual**.

$$\\boxed{\\text{residual} = \\text{actual value} - \\text{predicted value}}$$

| Residual | Meaning |
|:---------|:--------|
| positive | the data point lies **above** the model: the model **underestimates** |
| negative | the data point lies **below** the model: the model **overestimates** |
| zero | the model passes exactly through the point |

### Worked Example — the population model from Part 1

Model: $P(t) = 2(1.5)^t$.

| $t$ | Actual $P$ | Predicted $2(1.5)^t$ | Residual |
|:--|:--|:--|:--|
| $0$ | $2.0$ | $2.000$ | $0.000$ |
| $1$ | $3.1$ | $3.000$ | $+0.100$ |
| $2$ | $4.4$ | $4.500$ | $-0.100$ |
| $3$ | $6.8$ | $6.750$ | $+0.050$ |
| $4$ | $10.1$ | $10.125$ | $-0.025$ |
| $5$ | $15.2$ | $15.188$ | $+0.012$ |

At $t = 2$ the residual is $4.4 - 4.5 = -0.1$: the model overestimates the population by $0.1$ thousand. The residuals are small and alternate in sign with no trend.
      `
    },
    {
      id: 'elm3-plots',
      type: 'text' as const,
      figure: [
        {
          svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="110" x2="305" y2="110"/><line x1="40" y1="205" x2="40" y2="15"/></g><text x="300" y="124" font-size="12" fill="currentColor">x</text><text x="46" y="22" font-size="11" fill="currentColor">residual</text><g font-size="11" fill="currentColor" text-anchor="middle"><text x="83" y="124">1</text><text x="126" y="124">2</text><text x="169" y="124">3</text><text x="212" y="124">4</text><text x="255" y="124">5</text></g><g font-size="11" fill="currentColor" text-anchor="end"><text x="34" y="44">1</text><text x="34" y="114">0</text><text x="34" y="184">−1</text></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="36" y1="40" x2="44" y2="40"/><line x1="36" y1="180" x2="44" y2="180"/></g><g class="fig-accent"><circle cx="40" cy="89" r="4.5" fill="currentColor"/><circle cx="83" cy="138" r="4.5" fill="currentColor"/><circle cx="126" cy="96" r="4.5" fill="currentColor"/><circle cx="169" cy="145" r="4.5" fill="currentColor"/><circle cx="212" cy="82" r="4.5" fill="currentColor"/><circle cx="255" cy="117" r="4.5" fill="currentColor"/></g></svg>',
          alt: 'Residual plot A: six residuals at x = 0 to 5 scattered above and below the zero line with no pattern: about +0.3, -0.4, +0.2, -0.5, +0.4 and -0.1.',
          caption: 'Plot A — no pattern: the model is appropriate.',
          size: 'sm',
        },
        {
          svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="110" x2="305" y2="110"/><line x1="40" y1="205" x2="40" y2="15"/></g><text x="300" y="124" font-size="12" fill="currentColor">x</text><text x="46" y="22" font-size="11" fill="currentColor">residual</text><g font-size="11" fill="currentColor" text-anchor="middle"><text x="60" y="124">0</text><text x="130" y="124">1</text><text x="200" y="124">2</text><text x="270" y="124">3</text></g><g font-size="11" fill="currentColor" text-anchor="end"><text x="34" y="44">10</text><text x="34" y="114">0</text><text x="34" y="184">−10</text></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="36" y1="40" x2="44" y2="40"/><line x1="36" y1="180" x2="44" y2="180"/></g><g class="fig-accent-2"><circle cx="60" cy="59.6" r="4.5" fill="currentColor"/><circle cx="130" cy="149.2" r="4.5" fill="currentColor"/><circle cx="200" cy="182.8" r="4.5" fill="currentColor"/><circle cx="270" cy="48.4" r="4.5" fill="currentColor"/></g></svg>',
          alt: 'Residual plot B: four residuals at x = 0, 1, 2 and 3 forming a U shape: +7.2, -5.6, -10.4 and +8.8, positive at both ends and negative in the middle.',
          caption: 'Plot B — a U-shaped pattern: the model type is wrong.',
          size: 'sm',
        },
      ],
      content: `
## 📊 Reading a Residual Plot

A **residual plot** graphs each residual against its input. Read it with one question in mind: **is there a pattern?**

| Residual plot | Verdict |
|:--------------|:--------|
| Points scattered randomly above and below $0$ (Plot A) | the model is **appropriate** |
| A curve, U-shape, or arch (Plot B) | the model has the **wrong type** (e.g. a line fit to exponential data) |
| Residuals that steadily grow or steadily shrink | the model misses a trend |
| Residuals all positive (or all negative) on one side | the model systematically under- or over-estimates there |

### Where Plot B Comes From

Fit a **line** to the exponential data $(0, 2), (1, 6), (2, 18), (3, 54)$. Linear regression gives $y = 16.8x - 5.2$. Its residuals:

| $x$ | Actual | Predicted $16.8x - 5.2$ | Residual |
|:--|:--|:--|:--|
| $0$ | $2$ | $-5.2$ | $+7.2$ |
| $1$ | $6$ | $11.6$ | $-5.6$ |
| $2$ | $18$ | $28.4$ | $-10.4$ |
| $3$ | $54$ | $45.2$ | $+8.8$ |

Positive, negative, negative, positive — a **U-shape**. The line is too low at the ends and too high in the middle because the data curve upward. The exponential model $y = 2 \\cdot 3^x$ fits these points exactly, with every residual $0$.

> **Key fact:** the residuals of any regression fit add to about $0$ no matter how bad the model is, so "the residuals are small on average" proves nothing. Only the **pattern** (or its absence) tells you whether the model is appropriate.
      `
    },
    {
      id: 'elm3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Residual Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At $x = 4$ a data set has the value $48$ and a model predicts $45$. What is the residual, and what does it mean?',
            options: [
              '$+3$; the model underestimates the actual value',
              '$-3$; the model overestimates the actual value',
              '$+3$; the model overestimates the actual value',
              '$1.067$; the model is $6.7\\%$ too low'
            ],
            correctAnswer: 0,
            explanation: 'Residual $=$ actual $-$ predicted $= 48 - 45 = +3$. A positive residual means the data point sits above the model, so the model underestimates. The ratio $48/45$ is not a residual.'
          },
          {
            question: 'Which residual plot indicates that a model is appropriate for the data?',
            options: [
              'Points scattered randomly about the horizontal axis',
              'Points forming a clear U-shape',
              'Points that rise steadily from left to right',
              'Points all lying above the horizontal axis'
            ],
            correctAnswer: 0,
            explanation: 'No pattern means the model captures the trend and only random variation remains. A U-shape, a steady rise, or residuals all on one side each reveal structure the model missed.'
          },
          {
            question: 'A line is fit to a data set and the residual plot shows a clear curved pattern. What should you conclude?',
            options: [
              'A different type of model (not linear) would be more appropriate',
              'The linear model is appropriate but the data contain measurement error',
              'The linear model is appropriate because the residuals sum to zero',
              'More data points are needed before any model can be judged'
            ],
            correctAnswer: 0,
            explanation: 'A curved residual pattern means the data bend in a way a line cannot follow, so the model **type** is wrong. Measurement error produces random scatter, not a curve, and the residuals of a regression line always sum to about $0$.'
          }
        ]
      }
    },
    {
      id: 'elm3-input',
      type: 'input-boxes' as const,
      content: `
**Compute the Residual** 🧮

**1)** Actual value $7.5$, predicted value $8.1$. Residual $=$ ? (e.g., actual $10$, predicted $9$: residual $= 10 - 9 = 1$)

**2)** The model is $y = 4(1.2)^x$ and the actual value at $x = 2$ is $6.0$. Residual $=$ ? (e.g., model $2(1.5)^x$, actual $4.4$ at $x = 2$: $4.4 - 4.5 = -0.1$)

**3)** The model is $y = 16.8x - 5.2$ and the actual value at $x = 2$ is $18$. Residual $=$ ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-0.6', '0.24', '-10.4'],
        hint1: 'Actual minus predicted: $7.5 - 8.1$.',
        hint2: 'Predicted: $4(1.2)^2 = 4(1.44) = 5.76$. Then $6.0 - 5.76$.',
        hint3: 'Predicted: $16.8(2) - 5.2 = 28.4$. Then $18 - 28.4$.',
        explanation: '1) $7.5 - 8.1 = -0.6$ (the model overestimates). 2) $6.0 - 5.76 = 0.24$ (underestimates). 3) $18 - 28.4 = -10.4$ (the line is far too high here).'
      }
    },
    {
      id: 'elm3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Residual Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A positive residual means the model',
            options: ['underestimates the actual value', 'overestimates the actual value', 'is exactly right', 'has the wrong type']
          },
          {
            label: 'A residual plot with no visible pattern means the model is',
            options: ['appropriate for the data', 'overestimating everywhere', 'the wrong type', 'linear']
          },
          {
            label: 'The residuals of a line fit to exponential data typically form',
            options: ['a curved (U-shaped) pattern', 'a horizontal band at zero', 'a vertical line', 'all positive values']
          },
          {
            label: 'For a regression model, the residuals always add to about',
            options: ['$0$, so their sum cannot judge the model', '$1$', 'the number of data points', 'the value of $a$']
          }
        ],
        correctAnswers: ['underestimates the actual value', 'appropriate for the data', 'a curved (U-shaped) pattern', '$0$, so their sum cannot judge the model'],
        hint1: 'Positive residual: actual $>$ predicted.',
        hint2: 'Random scatter means nothing systematic was missed.',
        hint3: 'A line cannot bend with the data; the leftover bend shows up in the residuals.',
        explanation: 'Positive residual: the point is above the model, which underestimates. No pattern: appropriate. A line through curved data leaves a U-shaped residual pattern. Regression residuals sum to about $0$, so only the pattern matters.'
      }
    },
    {
      id: 'elm3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The residuals of a model at $x = 1, 2, 3, 4, 5, 6$ are $-2.1, -0.8, 0.5, 1.4, 2.0, 2.3$. What should you conclude?',
            options: [
              'The residuals increase steadily, so the model is not appropriate',
              'The residuals are all small, so the model is appropriate',
              'The residuals sum to a positive number, so the model underestimates everywhere',
              'The model is appropriate because the residuals change sign'
            ],
            correctAnswer: 0,
            explanation: 'A steady increase from negative to positive is a pattern: the model is too high for small $x$ and too low for large $x$, so it misses the trend. Small size and a single sign change do not remove the pattern.'
          },
          {
            question: 'A model has residual $-3$ at $x = 6$. Which statement is true?',
            options: [
              'The actual value at $x = 6$ is $3$ less than the model predicts',
              'The actual value at $x = 6$ is $3$ more than the model predicts',
              'The model\'s value at $x = 6$ is $-3$',
              'The actual value at $x = 6$ is $-3$'
            ],
            correctAnswer: 0,
            explanation: 'Residual $=$ actual $-$ predicted $= -3$ means actual $=$ predicted $- 3$: the data point lies $3$ units below the model, which overestimates there.'
          }
        ]
      }
    }
  ]
};
