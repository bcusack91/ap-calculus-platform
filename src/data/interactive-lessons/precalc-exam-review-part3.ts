const rationalFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"><line x1="140" y1="10" x2="140" y2="210"/><line x1="20" y1="70" x2="300" y2="70"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="20" y1="110" x2="305" y2="110"/><line x1="160" y1="212" x2="160" y2="8"/></g><g stroke="currentColor" stroke-width="1"><line x1="20" y1="107" x2="20" y2="113"/><line x1="40" y1="107" x2="40" y2="113"/><line x1="60" y1="107" x2="60" y2="113"/><line x1="80" y1="107" x2="80" y2="113"/><line x1="100" y1="107" x2="100" y2="113"/><line x1="120" y1="107" x2="120" y2="113"/><line x1="140" y1="107" x2="140" y2="113"/><line x1="180" y1="107" x2="180" y2="113"/><line x1="200" y1="107" x2="200" y2="113"/><line x1="220" y1="107" x2="220" y2="113"/><line x1="240" y1="107" x2="240" y2="113"/><line x1="260" y1="107" x2="260" y2="113"/><line x1="280" y1="107" x2="280" y2="113"/><line x1="300" y1="107" x2="300" y2="113"/><line x1="157" y1="210" x2="163" y2="210"/><line x1="157" y1="190" x2="163" y2="190"/><line x1="157" y1="170" x2="163" y2="170"/><line x1="157" y1="150" x2="163" y2="150"/><line x1="157" y1="130" x2="163" y2="130"/><line x1="157" y1="90" x2="163" y2="90"/><line x1="157" y1="70" x2="163" y2="70"/><line x1="157" y1="50" x2="163" y2="50"/><line x1="157" y1="30" x2="163" y2="30"/><line x1="157" y1="10" x2="163" y2="10"/></g><g class="fig-accent"><polyline fill="none" stroke="currentColor" stroke-width="2.5" points="16,57.1 16.8,57 17.5,56.9 18.3,56.9 19.1,56.8 19.9,56.7 20.6,56.6 21.4,56.5 22.2,56.4 23,56.3 23.7,56.2 24.5,56.1 25.3,56.1 26.1,56 26.8,55.9 27.6,55.8 28.4,55.7 29.2,55.6 29.9,55.5 30.7,55.4 31.5,55.3 32.3,55.1 33,55 33.8,54.9 34.6,54.8 35.4,54.7 36.1,54.6 36.9,54.5 37.7,54.4 38.5,54.2 39.2,54.1 40,54 40.8,53.9 41.6,53.7 42.3,53.6 43.1,53.5 43.9,53.4 44.7,53.2 45.4,53.1 46.2,52.9 47,52.8 47.8,52.7 48.5,52.5 49.3,52.4 50.1,52.2 50.9,52 51.6,51.9 52.4,51.7 53.2,51.6 54,51.4 54.7,51.2 55.5,51.1 56.3,50.9 57.1,50.7 57.8,50.5 58.6,50.3 59.4,50.1 60.2,50 60.9,49.8 61.7,49.6 62.5,49.4 63.3,49.1 64,48.9 64.8,48.7 65.6,48.5 66.4,48.3 67.1,48 67.9,47.8 68.7,47.6 69.5,47.3 70.2,47.1 71,46.8 71.8,46.5 72.6,46.3 73.3,46 74.1,45.7 74.9,45.4 75.7,45.1 76.4,44.8 77.2,44.5 78,44.2 78.8,43.9 79.5,43.5 80.3,43.2 81.1,42.8 81.9,42.5 82.6,42.1 83.4,41.7 84.2,41.3 85,40.9 85.7,40.5 86.5,40.1 87.3,39.6 88.1,39.2 88.8,38.7 89.6,38.2 90.4,37.7 91.2,37.2 91.9,36.7 92.7,36.2 93.5,35.6 94.3,35 95,34.4 95.8,33.8 96.6,33.1 97.4,32.5 98.1,31.8 98.9,31 99.7,30.3 100.5,29.5 101.2,28.7 102,27.9 102.8,27 103.6,26.1 104.3,25.1 105.1,24.1 105.9,23.1 106.7,22 107.4,20.8 108.2,19.6 109,18.4 109.8,17.1 110.5,15.7 111.3,14.2 112.1,12.7 112.9,11 113.6,9.3 114.4,7.4 115.2,5.5 116,3.4"/><polyline fill="none" stroke="currentColor" stroke-width="2.5" points="151.3,211.9 152.3,200.1 153.3,190.1 154.4,181.5 155.4,174.1 156.4,167.6 157.4,161.8 158.5,156.7 159.5,152.1 160.5,148 161.5,144.3 162.6,140.9 163.6,137.9 164.6,135 165.6,132.4 166.7,130 167.7,127.8 168.7,125.7 169.7,123.8 170.8,122 171.8,120.4 172.8,118.8 173.8,117.3 174.9,115.9 175.9,114.6 176.9,113.4 177.9,112.2 179,111.1 180,110 181,109 182,108.1 183.1,107.2 184.1,106.3 185.1,105.5 186.1,104.7 187.2,103.9 188.2,103.2 189.2,102.5 190.2,101.9 191.3,101.2 192.3,100.6 193.3,100 194.3,99.5 195.4,98.9 196.4,98.4 197.4,97.9 198.4,97.4 199.5,96.9 200.5,96.5 201.5,96 202.5,95.6 203.6,95.2 204.6,94.8 205.6,94.4 206.6,94 207.7,93.7 208.7,93.3 209.7,93 210.7,92.6 211.8,92.3 212.8,92 213.8,91.7 214.8,91.4 215.9,91.1 216.9,90.8 217.9,90.5 218.9,90.3 220,90 221,89.8 222,89.5 223,89.3 224.1,89 225.1,88.8 226.1,88.6 227.1,88.4 228.2,88.2 229.2,87.9 230.2,87.7 231.2,87.5 232.3,87.3 233.3,87.2 234.3,87 235.3,86.8 236.4,86.6 237.4,86.4 238.4,86.3 239.4,86.1 240.5,85.9 241.5,85.8 242.5,85.6 243.5,85.5 244.6,85.3 245.6,85.2 246.6,85 247.6,84.9 248.7,84.7 249.7,84.6 250.7,84.5 251.7,84.3 252.8,84.2 253.8,84.1 254.8,83.9 255.8,83.8 256.9,83.7 257.9,83.6 258.9,83.5 259.9,83.3 261,83.2 262,83.1 263,83 264,82.9 265.1,82.8 266.1,82.7 267.1,82.6 268.1,82.5 269.2,82.4 270.2,82.3 271.2,82.2 272.2,82.1 273.3,82 274.3,81.9 275.3,81.8 276.3,81.7 277.4,81.6 278.4,81.6 279.4,81.5 280.4,81.4 281.5,81.3 282.5,81.2 283.5,81.1 284.5,81.1 285.6,81 286.6,80.9 287.6,80.8 288.6,80.8 289.7,80.7 290.7,80.6 291.7,80.5 292.7,80.5 293.8,80.4 294.8,80.3 295.8,80.3 296.8,80.2 297.9,80.1 298.9,80.1 299.9,80 300.9,79.9 302,79.9 303,79.8 304,79.8"/><circle cx="180" cy="110" r="4" fill="currentColor"/><circle cx="160" cy="150" r="4" fill="currentColor"/></g><g fill="currentColor"><text x="300" y="124" text-anchor="end" font-style="italic">x</text><text x="166" y="18" font-style="italic">y</text><text x="200" y="124">2</text><text x="240" y="124">4</text><text x="120" y="124" text-anchor="middle">-2</text><text x="80" y="124" text-anchor="middle">-4</text><text x="150" y="74" text-anchor="end">2</text><text x="150" y="34" text-anchor="end">4</text><text x="150" y="154" text-anchor="end">-2</text><text x="150" y="194" text-anchor="end">-4</text><text x="128" y="206" text-anchor="end" font-style="italic">x = -1</text><text x="300" y="66" text-anchor="end" font-style="italic">y = 2</text></g></svg>',
  alt: 'Graph of a rational function y = r(x) with a dashed vertical asymptote at x = -1 and a dashed horizontal asymptote at y = 2. The left branch, for x < -1, lies above y = 2, approaching the asymptote y = 2 from above as x decreases and rising toward positive infinity as x approaches -1 from the left. The right branch, for x > -1, comes up from negative infinity near x = -1, passes through the filled dots at (0, -2) and (1, 0), and rises toward y = 2 from below as x increases. Tick marks are one unit apart on both axes.',
  caption: 'Figure 1. The graph of $y = r(x)$, with its asymptotes dashed and its intercepts marked.',
  size: 'md' as const,
}

export const precalcExamReviewPart3Data = {
  topicSlug: 'precalc-exam-review',
  sections: [
    {
      id: 'per3-intro',
      type: 'text' as const,
      content: `# 🎓 AP Precalculus Exam Review

**Part 3 of 7 — Unit 1: Rational Functions, Transformations and Models**

### Rational Functions (1.7–1.9, 1.11)

| Feature | How to find it | How to state it |
|:---|:---|:---|
| Vertical asymptote $x = a$ | denominator zero and numerator **nonzero** at $a$ (after cancelling common factors) | $\\lim_{x \\to a^+} r(x) = \\pm\\infty$ |
| Hole at $x = a$ | a factor $(x - a)$ common to numerator and denominator | $\\lim_{x \\to a} r(x) = $ the cancelled function's value at $a$ |
| Horizontal asymptote | degree top $<$ bottom: $y = 0$; equal: ratio of leading coefficients; top $>$ bottom: none | $\\lim_{x \\to \\pm\\infty} r(x) = c$ |
| Slant asymptote | degree top $=$ degree bottom $+ 1$: the quotient from polynomial long division | $r(x) \\approx mx + b$ for large $\\lvert x \\rvert$ |
| Zeros | zeros of the numerator that are not holes | $x$-intercepts |
| Rational inequality | sign chart over the zeros **and** the undefined points; never multiply by a denominator of unknown sign | interval notation, excluding undefined points |

### Transformations (1.12)

| Form | Effect on the graph of $f$ |
|:---|:---|
| $f(x) + k$ | shift up $k$ |
| $f(x - h)$ | shift **right** $h$ |
| $a\\,f(x)$ | vertical stretch by $\\lvert a \\rvert$; reflect over the $x$-axis if $a < 0$ |
| $f(bx)$ | horizontal **compression** by $\\dfrac{1}{\\lvert b \\rvert}$; reflect over the $y$-axis if $b < 0$ |
| Order | inside changes act on inputs (horizontal), outside changes act on outputs (vertical); apply stretches and reflections before shifts |

### Choosing a Model (1.13–1.14)

| Signal in the data or context | Model |
|:---|:---|
| constant first differences, constant rate | linear |
| constant second differences, one turning point | quadratic |
| two turning points, a point of inflection | cubic |
| a limiting value as the input grows | rational (horizontal asymptote), or exponential approaching a horizontal asymptote |
| the rule changes at certain inputs (fees, tax brackets, speed limits) | piecewise-defined |
| domain restricted by the context | state the domain with the model: lengths positive, counts whole numbers |

> **Key Fact:** For a hole, cancel first, then evaluate: $r(x) = \\dfrac{(x - 2)(x + 2)}{(x - 2)(x + 1)}$ has a hole at $\\left(2, \\dfrac{4}{3}\\right)$ and a vertical asymptote only at $x = -1$.`
    },
    {
      id: 'per3-mc',
      type: 'multiple-choice' as const,
      figure: rationalFigure,
      content: '**Unit 1 practice (no calculator).** 🎯 Questions 1 and 2 use the graph above.',
      exercise: {
        questions: [
          {
            question: 'The graph of $y = r(x)$ is shown, with asymptotes $x = -1$ and $y = 2$ and intercepts $(0, -2)$ and $(1, 0)$. Which function could be $r$?',
            options: ['$r(x) = \\dfrac{2x - 2}{x + 1}$', '$r(x) = \\dfrac{x - 1}{x + 2}$', '$r(x) = \\dfrac{2x + 2}{x - 1}$', '$r(x) = \\dfrac{x + 1}{2x - 2}$'],
            correctAnswer: 0,
            explanation: 'The vertical asymptote $x = -1$ needs the factor $x + 1$ in the denominator, the horizontal asymptote $y = 2$ needs leading coefficients in the ratio $2 : 1$, and the zero at $x = 1$ needs the factor $x - 1$ on top; $\\frac{2x - 2}{x + 1}$ has all three and $r(0) = -2$. The others put the vertical asymptote at $x = -2$ or $x = 1$.'
          },
          {
            question: 'Which pair of limit statements describes the graph near $x = -1$?',
            options: ['$\\lim_{x \\to -1^-} r(x) = \\infty$ and $\\lim_{x \\to -1^+} r(x) = -\\infty$', '$\\lim_{x \\to -1^-} r(x) = \\infty$ and $\\lim_{x \\to -1^+} r(x) = \\infty$', '$\\lim_{x \\to -1^-} r(x) = -\\infty$ and $\\lim_{x \\to -1^+} r(x) = -\\infty$', '$\\lim_{x \\to -1^-} r(x) = -\\infty$ and $\\lim_{x \\to -1^+} r(x) = \\infty$'],
            correctAnswer: 0,
            explanation: 'The left branch rises without bound as $x$ approaches $-1$ from the left, and the right branch comes up from negative infinity just to the right of $x = -1$. Algebraically, near $x = -1$ the numerator is about $-4$ while the denominator is a small negative (left) or small positive (right) number.'
          },
          {
            question: 'Let $g(x) = \\dfrac{x^2 - 4}{x^2 - x - 2}$. Which statement about the graph of $g$ is correct?',
            options: ['It has a hole at $\\left(2, \\dfrac{4}{3}\\right)$ and a vertical asymptote at $x = -1$', 'It has vertical asymptotes at both $x = 2$ and $x = -1$', 'It has a hole at $(-1, 0)$ and a vertical asymptote at $x = 2$', 'It has a hole at $(2, 0)$ and a vertical asymptote at $x = -1$'],
            correctAnswer: 0,
            explanation: '$g(x) = \\frac{(x - 2)(x + 2)}{(x - 2)(x + 1)}$. The common factor $x - 2$ makes a hole at $x = 2$ with height $\\frac{2 + 2}{2 + 1} = \\frac{4}{3}$; the remaining denominator zero $x = -1$ is a vertical asymptote because the numerator there is $-1 + 2 = 1 \\ne 0$.'
          },
          {
            question: 'The graph of $h(x) = -f(2x) + 3$ is obtained from the graph of $f$ by which sequence of transformations?',
            options: ['Horizontal compression by a factor of $\\frac{1}{2}$, reflection over the $x$-axis, shift up $3$', 'Horizontal stretch by a factor of $2$, reflection over the $y$-axis, shift up $3$', 'Vertical stretch by a factor of $2$, reflection over the $x$-axis, shift up $3$', 'Horizontal compression by a factor of $\\frac{1}{2}$, reflection over the $x$-axis, shift right $3$'],
            correctAnswer: 0,
            explanation: 'The $2$ multiplies the input, compressing horizontally by $\\frac{1}{2}$; the negative sign multiplies the output, reflecting over the $x$-axis; the $+3$ is added to the output, shifting up $3$.'
          }
        ]
      }
    },
    {
      id: 'per3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choosing a model.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A data set with equally spaced inputs has second differences that are roughly constant. The appropriate model is:',
            options: ['quadratic', 'linear', 'exponential', 'piecewise-defined'],
            correctAnswer: 0
          },
          {
            label: 'A parking garage charges a flat fee for the first $3$ hours and an hourly rate after that. The cost as a function of time is best modeled by:',
            options: ['a piecewise-defined function', 'a quadratic function', 'a rational function', 'an exponential function'],
            correctAnswer: 0
          },
          {
            label: 'A rational model for the concentration of a drug has a horizontal asymptote $y = 0$. In context this means:',
            options: ['the concentration approaches $0$ as time grows large', 'the concentration is $0$ at time $0$', 'the concentration is undefined for large times', 'the concentration reaches exactly $0$ at the asymptote'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['quadratic', 'a piecewise-defined function', 'the concentration approaches $0$ as time grows large'],
        hint1: 'Constant second differences are the signature of a degree-2 polynomial.',
        hint2: 'The rule changes at $3$ hours.',
        hint3: 'A horizontal asymptote describes end behavior: $\\lim_{t \\to \\infty}$.',
        explanation: 'Constant second differences mean a quadratic model. A rule that changes at a specific input is a piecewise-defined function. A horizontal asymptote $y = 0$ means the output approaches $0$ as the input grows without bound; the function is defined there and need never equal $0$.'
      }
    },
    {
      id: 'per3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Cancel common factors first**: a cancelled factor is a hole, a remaining denominator zero is a vertical asymptote
- Horizontal asymptotes come from **comparing degrees**; state every asymptote with **limit notation**
- Inside changes are **horizontal** ($f(bx)$ compresses by $\\frac{1}{\\lvert b \\rvert}$, $f(x - h)$ shifts right); outside changes are **vertical**
- Model choice follows **differences, turning points, limiting values and rule changes**; state the **domain in context**`
    }
  ]
};
