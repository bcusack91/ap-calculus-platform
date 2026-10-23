export const precalcExpLogModelingPart6Data = {
  topicSlug: 'exponential-logarithmic-modeling-precalc',
  sections: [
    {
      id: 'elm6-intro',
      type: 'text' as const,
      figure: [
        {
          svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="40" y1="140" x2="300" y2="140"/><line x1="40" y1="80" x2="300" y2="80"/><line x1="40" y1="20" x2="300" y2="20"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="200" x2="305" y2="200"/><line x1="40" y1="210" x2="40" y2="12"/></g><text x="300" y="214" font-size="12" fill="currentColor">x</text><text x="46" y="18" font-size="12" fill="currentColor">y</text><g font-size="11" fill="currentColor" text-anchor="middle"><text x="40" y="214">0</text><text x="110" y="214">1</text><text x="180" y="214">2</text><text x="250" y="214">3</text></g><g font-size="11" fill="currentColor" text-anchor="end"><text x="34" y="144">20</text><text x="34" y="84">40</text><text x="34" y="24">60</text></g><g class="fig-accent"><polyline points="40,194 75,189.6 110,182 145,168.8 180,146 215,106.5 250,38" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="40" cy="194" r="4.5" fill="currentColor"/><circle cx="110" cy="182" r="4.5" fill="currentColor"/><circle cx="180" cy="146" r="4.5" fill="currentColor"/><circle cx="250" cy="38" r="4.5" fill="currentColor"/></g></svg>',
          alt: 'Linear axes: the points (0, 2), (1, 6), (2, 18) and (3, 54) with the curve y = 2 times 3 to the x through them. The curve is nearly flat at first and then shoots upward.',
          caption: 'Linear axes: $y = 2 \\cdot 3^x$ curves sharply upward.',
          size: 'sm',
        },
        {
          svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="40" y1="120" x2="300" y2="120"/><line x1="40" y1="40" x2="300" y2="40"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="200" x2="305" y2="200"/><line x1="40" y1="210" x2="40" y2="12"/></g><text x="300" y="214" font-size="12" fill="currentColor">x</text><text x="46" y="18" font-size="11" fill="currentColor">y (log scale)</text><g font-size="11" fill="currentColor" text-anchor="middle"><text x="40" y="214">0</text><text x="110" y="214">1</text><text x="180" y="214">2</text><text x="250" y="214">3</text></g><g font-size="11" fill="currentColor" text-anchor="end"><text x="34" y="204">1</text><text x="34" y="124">10</text><text x="34" y="44">100</text></g><g class="fig-accent"><line x1="40" y1="175.9" x2="250" y2="61.4" stroke="currentColor" stroke-width="2.5"/><circle cx="40" cy="175.9" r="4.5" fill="currentColor"/><circle cx="110" cy="137.7" r="4.5" fill="currentColor"/><circle cx="180" cy="99.6" r="4.5" fill="currentColor"/><circle cx="250" cy="61.4" r="4.5" fill="currentColor"/></g></svg>',
          alt: 'Semi-log axes with the vertical axis marked 1, 10 and 100 at equal spacing: the same four points (0, 2), (1, 6), (2, 18) and (3, 54) now lie exactly on a straight line.',
          caption: 'Semi-log axes: the same data lie on a straight line.',
          size: 'sm',
        },
      ],
      content: `
# 📐 Semi-log Plots

**Part 6 of 7 — Semi-log Plots**

A **semi-log plot** uses a **logarithmic scale on the vertical axis** and an ordinary (linear) scale on the horizontal axis. On the vertical axis the labels $1, 10, 100, 1000$ are **equally spaced**: each step up multiplies the value by $10$. Equivalently, you can plot $\\log y$ (or $\\ln y$) against $x$ on ordinary axes.

Look at the figure. On linear axes the exponential data $y = 2 \\cdot 3^x$ bend sharply upward; on the semi-log axes the **same points lie on a straight line**.

### Why Exponential Data Become Linear

Take the logarithm of both sides of $y = a \\cdot b^x$:

$$\\log y = \\log(a \\cdot b^x) = \\log a + x\\log b$$

With $Y = \\log y$ this is $Y = (\\log b)\\,x + \\log a$: a **line** in $x$ and $Y$ with

| On the semi-log line | Recovers |
|:---------------------|:---------|
| **slope** $= \\log b$ | the base $b = 10^{\\text{slope}}$ |
| **vertical intercept** $= \\log a$ | the initial value $a = 10^{\\text{intercept}}$ |

> 🔑 **Key fact (CED 2.15):** data that are **linear on a semi-log plot** are **exponential** on ordinary axes, and conversely. A straight semi-log plot is the fingerprint of exponential change; a positive slope means growth ($b > 1$) and a negative slope means decay ($0 < b < 1$).
      `
    },
    {
      id: 'elm6-read',
      type: 'text' as const,
      content: `
## 🔍 Reading the Model from the Line

### Worked Example 1

> **On a plot of $\\log y$ against $x$, the data lie on the line through $(0, 1.5)$ and $(4, 2.3)$. Find the exponential model.**

- Slope: $\\dfrac{2.3 - 1.5}{4 - 0} = 0.2$, so $b = 10^{0.2} \\approx 1.585$.
- Intercept: $1.5$, so $a = 10^{1.5} \\approx 31.6$.
- **Model:** $y \\approx 31.6(1.585)^x$ — growth of about $58.5\\%$ per unit.

### Worked Example 2 — neither point on the vertical axis

> **The semi-log line passes through $(1, 2.0)$ and $(3, 1.0)$.**

- Slope: $\\dfrac{1.0 - 2.0}{3 - 1} = -0.5$, so $b = 10^{-0.5} \\approx 0.316$ (decay).
- Intercept: stepping back one unit from $(1, 2.0)$ adds $0.5$, so $\\log a = 2.5$ and $a = 10^{2.5} \\approx 316$.
- **Model:** $y \\approx 316(0.316)^x$.

### With natural logs

If the vertical axis shows $\\ln y$ and the line is $\\ln y = 0.3x + 1$, then $a = e^{1} \\approx 2.72$ and $b = e^{0.3} \\approx 1.35$. The base of the logarithm used on the axis is the base you exponentiate.

### Checking the data in Figure form

For $y = 2 \\cdot 3^x$: $\\log y = 0.301, 0.778, 1.255, 1.732$ at $x = 0, 1, 2, 3$. The $\\log y$ values rise by a constant $0.477 = \\log 3$ each step (the slope), and the intercept $0.301 = \\log 2$ ✔.
      `
    },
    {
      id: 'elm6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Semi-log Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A data set is graphed on a semi-log plot ($\\log y$ against $x$) and the points form a straight line. The original data are best modeled by which type of function?',
            options: ['Exponential', 'Linear', 'Logarithmic', 'Quadratic'],
            correctAnswer: 0,
            explanation: 'Applying $\\log$ to $y = ab^x$ gives $\\log y = (\\log b)x + \\log a$, a line. So a straight semi-log plot means the underlying data are exponential; linear data would curve on a semi-log plot.'
          },
          {
            question: 'On a plot of $\\log y$ against $x$, the data fit the line $\\log y = 0.3x + 1$. Which model fits the original data?',
            options: [
              '$y = 10\\left(10^{0.3}\\right)^x \\approx 10(2.0)^x$',
              '$y = 1 \\cdot (0.3)^x$',
              '$y = 0.3x + 1$',
              '$y = 10^{0.3} \\cdot 10^{x}$'
            ],
            correctAnswer: 0,
            explanation: 'Intercept $1 = \\log a$ gives $a = 10$; slope $0.3 = \\log b$ gives $b = 10^{0.3} \\approx 2.0$. Treating the intercept and slope as $a$ and $b$ directly, or keeping the line itself, ignores the logarithm on the axis.'
          },
          {
            question: 'A semi-log line passes through $(0, 2)$ and $(5, 3)$. Which exponential model does it represent?',
            options: [
              '$y = 100\\left(10^{0.2}\\right)^x \\approx 100(1.58)^x$',
              '$y = 2\\left(10^{0.2}\\right)^x$',
              '$y = 100(1.5)^x$',
              '$y = 100 + 0.2x$'
            ],
            correctAnswer: 0,
            explanation: 'Slope $\\frac{3 - 2}{5 - 0} = 0.2 = \\log b$, so $b = 10^{0.2} \\approx 1.58$; intercept $2 = \\log a$, so $a = 100$. The intercept is $\\log a$, not $a$ (so $a = 100$, not $2$), and the base is $10^{\\text{slope}}$, not $1 + \\text{slope}$ or $1.5$.'
          }
        ]
      }
    },
    {
      id: 'elm6-input',
      type: 'input-boxes' as const,
      content: `
**Read a Semi-log Line** 🧮

**1)** A semi-log fit gives $\\log y = 0.5x + 2$. What is $a = 10^{\\text{intercept}}$? (e.g., intercept $1$: $a = 10$)

**2)** Same fit: what is the base $b = 10^{\\text{slope}}$? Use $10^{0.5} \\approx 3.16$ and round to two decimals.

**3)** A natural-log fit gives $\\ln y = 2x + 1$. What is the base $b = e^{\\text{slope}}$, rounded to two decimals? (e.g., slope $1$: $b = e \\approx 2.72$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['100', '3.16', '7.39'],
        hint1: 'The vertical intercept is $\\log a = 2$, so $a = 10^2$.',
        hint2: 'The slope is $\\log b = 0.5$, so $b = 10^{0.5} = \\sqrt{10}$.',
        hint3: 'With natural logs, $b = e^{2}$.',
        explanation: '1) $a = 10^2 = 100$. 2) $b = 10^{0.5} \\approx 3.16$. 3) $b = e^2 \\approx 7.39$. The slope recovers the base; the intercept recovers the initial value.'
      }
    },
    {
      id: 'elm6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Interpret the Semi-log Line** 🔽

A data set is plotted as $\\log y$ versus $x$ and fits the line $\\log y = -0.25x + 3$.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A semi-log plot has a logarithmic scale on',
            options: ['the vertical axis only', 'the horizontal axis only', 'both axes', 'neither axis']
          },
          {
            label: 'The slope of the line equals',
            options: ['$\\log b$', '$b$', '$\\log a$', '$a$']
          },
          {
            label: 'Because the slope is negative, the original data show',
            options: ['exponential decay ($0 < b < 1$)', 'exponential growth ($b > 1$)', 'linear decrease', 'logarithmic growth']
          },
          {
            label: 'The initial value of the model is $a =$',
            options: ['$1000$', '$3$', '$10^{-0.25}$', '$-0.25$']
          }
        ],
        correctAnswers: ['the vertical axis only', '$\\log b$', 'exponential decay ($0 < b < 1$)', '$1000$'],
        hint1: '"Semi" means one of the two axes.',
        hint2: '$\\log y = (\\log b)x + \\log a$.',
        hint3: '$b = 10^{-0.25} < 1$. The intercept $3 = \\log a$ gives $a = 10^3$.',
        explanation: 'Semi-log: logarithmic vertical axis, linear horizontal axis. Slope $= \\log b$; negative slope means $b = 10^{-0.25} \\approx 0.56 < 1$, decay. Intercept $3 = \\log a$, so $a = 1000$.'
      }
    },
    {
      id: 'elm6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'On a plot of $\\log y$ against $x$, a data set lies on the line through $(0, 1)$ and $(2, 3)$. Which model fits the original data?',
            options: [
              '$y = 10 \\cdot 10^x$',
              '$y = 10 + 10x$',
              '$y = 10 \\cdot 3^x$',
              '$y = 1 \\cdot 10^{x}$'
            ],
            correctAnswer: 0,
            explanation: 'Slope $\\frac{3 - 1}{2 - 0} = 1 = \\log b$, so $b = 10$; intercept $1 = \\log a$, so $a = 10$. The model is $y = 10 \\cdot 10^x = 10^{x+1}$. Reading $3$ as the base or $1$ as $a$ ignores the logarithmic axis.'
          },
          {
            question: 'The points $(1, 50)$, $(2, 500)$ and $(3, 5000)$ are plotted on a semi-log plot. Which statement is true?',
            options: [
              'They lie on a line of slope $1$, so the data are exponential with $b = 10$',
              'They lie on a line of slope $450$, so the data are linear',
              'They curve upward, so the data are exponential',
              'They lie on a line of slope $10$, so the data are exponential with $b = 1$'
            ],
            correctAnswer: 0,
            explanation: 'Each step in $x$ multiplies $y$ by $10$, so $\\log y$ rises by $1$ each step: the semi-log points are collinear with slope $1 = \\log 10$, giving $b = 10$ (and $a = 5$, since $y = 5 \\cdot 10^x$). Exponential data are straight, not curved, on a semi-log plot.'
          }
        ]
      }
    }
  ]
};
