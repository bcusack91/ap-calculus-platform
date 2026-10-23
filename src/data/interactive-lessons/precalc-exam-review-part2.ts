export const precalcExamReviewPart2Data = {
  topicSlug: 'precalc-exam-review',
  sections: [
    {
      id: 'per2-intro',
      type: 'text' as const,
      content: `# 🎓 AP Precalculus Exam Review

**Part 2 of 7 — Unit 1: Rates of Change and Polynomial Functions**

> **Exam Weight:** Unit 1 is about **35%** of the exam. This part covers CED 1.1–1.6 and 1.10; Part 3 covers 1.7–1.9 and 1.11–1.14.

### Rates of Change (1.1–1.4)

| Idea | What to compute or say |
|:---|:---|
| Average rate of change on $[a, b]$ | $\\dfrac{f(b) - f(a)}{b - a}$: slope of the secant line, **with units** |
| Linear function | rate of change is **constant** (first differences equal) |
| Quadratic function | rate of change changes at a constant rate (**second differences** equal) |
| Increasing / decreasing | sign of the rate of change on the interval |
| Concave up / down | the rate of change is **increasing** / **decreasing** |
| Point of inflection | where concavity **changes** |
| From a table | compare successive average rates of change on equal-width intervals |

### Polynomial Functions (1.5–1.6, 1.10)

| Fact | Detail |
|:---|:---|
| Degree $n$ | at most $n$ real zeros; at most $n - 1$ local extrema; $n$th differences constant for equally spaced inputs |
| End behavior | decided by the **leading term** $a_nx^n$: even degree, same direction both ways ($+$ if $a_n > 0$); odd degree, opposite directions |
| Zero of multiplicity $m$ | odd $m$: graph **crosses**; even $m$: graph **touches** and turns; $m \\ge 2$: the graph flattens there |
| Between consecutive zeros | exactly one local extremum when the zeros are simple; a local maximum or minimum occurs where the function changes from increasing to decreasing or back |
| Non-real zeros | come in **conjugate pairs** when the coefficients are real; a degree-$n$ polynomial has $n$ complex zeros counted with multiplicity |
| Even / odd function | $f(-x) = f(x)$: symmetric about the $y$-axis; $f(-x) = -f(x)$: symmetric about the origin |
| Global vs local | a polynomial of even degree has a global maximum or minimum; odd degree has neither |

> **Key Fact:** "The rate of change is decreasing" does **not** mean the function is decreasing. $f(x) = \\sqrt{x}$ increases while its rate of change decreases.`
    },
    {
      id: 'per2-mc',
      type: 'multiple-choice' as const,
      content: '**Unit 1 practice (no calculator).** 🎯',
      exercise: {
        questions: [
          {
            question: 'Selected values of a function $f$ are shown.\n\n| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| $f(x)$ | $2$ | $5$ | $10$ | $17$ | $26$ |\n\nWhich statement about $f$ on $0 \\le x \\le 4$ is consistent with the table?',
            options: ['$f$ is increasing, and its rate of change is increasing', '$f$ is increasing, and its rate of change is decreasing', '$f$ is increasing, and its rate of change is constant', '$f$ is decreasing, and its rate of change is increasing'],
            correctAnswer: 0,
            explanation: 'The values rise, so $f$ is increasing. The first differences are $3, 5, 7, 9$, which grow, so the average rate of change is increasing: the graph is concave up. Constant first differences would mean a constant rate.'
          },
          {
            question: 'What is the end behavior of $p(x) = -2x^5 + 3x^2 + 1$?',
            options: ['$\\lim_{x \\to \\infty} p(x) = -\\infty$ and $\\lim_{x \\to -\\infty} p(x) = \\infty$', '$\\lim_{x \\to \\infty} p(x) = -\\infty$ and $\\lim_{x \\to -\\infty} p(x) = -\\infty$', '$\\lim_{x \\to \\infty} p(x) = \\infty$ and $\\lim_{x \\to -\\infty} p(x) = \\infty$', '$\\lim_{x \\to \\infty} p(x) = \\infty$ and $\\lim_{x \\to -\\infty} p(x) = -\\infty$'],
            correctAnswer: 0,
            explanation: 'The leading term $-2x^5$ decides the end behavior: odd degree gives opposite directions, and the negative coefficient sends the right end down and the left end up.'
          },
          {
            question: 'The polynomial $p(x) = (x + 1)^2(x - 3)^3$ has real zeros at $x = -1$ and $x = 3$. How does the graph behave at these zeros?',
            options: ['It touches the $x$-axis at $x = -1$ and crosses at $x = 3$', 'It crosses the $x$-axis at $x = -1$ and touches at $x = 3$', 'It crosses the $x$-axis at both $x = -1$ and $x = 3$', 'It touches the $x$-axis at both $x = -1$ and $x = 3$'],
            correctAnswer: 0,
            explanation: 'Even multiplicity ($2$ at $x = -1$) means the graph touches and turns back; odd multiplicity ($3$ at $x = 3$) means it crosses, flattening as it does.'
          },
          {
            question: 'A polynomial of degree $3$ with real coefficients and leading coefficient $1$ has zeros $3$ and $2i$. Which is the polynomial?',
            options: ['$x^3 - 3x^2 + 4x - 12$', '$x^3 - 3x^2 - 4x + 12$', '$x^3 + 3x^2 + 4x + 12$', '$x^3 - 3x^2 + 2x - 6$'],
            correctAnswer: 0,
            explanation: 'Real coefficients force the conjugate $-2i$ to be a zero too, so $p(x) = (x - 3)(x - 2i)(x + 2i) = (x - 3)(x^2 + 4) = x^3 - 3x^2 + 4x - 12$. The second option uses $x^2 - 4$, the third uses $x + 3$, and the fourth uses $x^2 + 2$.'
          }
        ]
      }
    },
    {
      id: 'per2-input',
      type: 'input-boxes' as const,
      content: `**Quick computations.** ✍️

**1)** The average rate of change of $f(x) = x^3$ on the interval $[1, 2]$:

**2)** For equally spaced inputs, a table of values has constant **third** differences (and non-constant second differences). The degree of the polynomial:

**3)** The number of distinct real zeros of $p(x) = (x^2 + 1)(x - 2)(x + 5)$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '3', '2'],
        hint1: '$\\frac{f(2) - f(1)}{2 - 1} = \\frac{8 - 1}{1}$.',
        hint2: 'A degree-$n$ polynomial has constant $n$th differences.',
        hint3: '$x^2 + 1 = 0$ has no real solutions.',
        explanation: '(1) $\\frac{8 - 1}{1} = 7$. (2) Constant third differences mean degree $3$. (3) The real zeros are $2$ and $-5$; $x^2 + 1$ contributes the non-real pair $\\pm i$.'
      }
    },
    {
      id: 'per2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Average rate of change $= \\frac{\\Delta y}{\\Delta x}$ with units; **constant first differences** mean linear, **constant second differences** mean quadratic
- **Increasing/decreasing** is about the function; **concave up/down** is about its rate of change
- End behavior comes from the **leading term**; multiplicity decides **cross** (odd) or **touch** (even)
- Non-real zeros come in **conjugate pairs**; a degree-$n$ polynomial has at most $n$ real zeros and $n - 1$ local extrema`
    }
  ]
};
