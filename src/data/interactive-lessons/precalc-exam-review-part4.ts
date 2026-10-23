export const precalcExamReviewPart4Data = {
  topicSlug: 'precalc-exam-review',
  sections: [
    {
      id: 'per4-intro',
      type: 'text' as const,
      content: `# 🎓 AP Precalculus Exam Review

**Part 4 of 7 — Unit 2: Sequences, Exponential and Logarithmic Functions**

> **Exam Weight:** Unit 2 is about **32%** of the exam (CED 2.1–2.15).

### Sequences (2.1–2.2)

| Type | Rule | Function it matches |
|:---|:---|:---|
| Arithmetic, common difference $d$ | $a_n = a_k + d(n - k)$ | linear: constant rate of change |
| Geometric, common ratio $r$ | $g_n = g_k \\cdot r^{\\,n - k}$ | exponential: constant ratio |

### Exponential Functions (2.3–2.6)

| Fact | Detail |
|:---|:---|
| $f(x) = a \\cdot b^x$ | $a = f(0)$; $b$ is the ratio of outputs for a unit increase in $x$; growth if $b > 1$, decay if $0 < b < 1$ |
| Percent change | $b = 1 + r$: a base of $1.299$ is a $29.9\\%$ increase per unit; $0.85$ is a $15\\%$ decrease |
| From two points $(x_1, y_1), (x_2, y_2)$ | $b = \\left(\\dfrac{y_2}{y_1}\\right)^{1/(x_2 - x_1)}$, then solve for $a$ |
| Horizontal asymptote | $y = 0$ for $a \\cdot b^x$; $y = k$ for $a \\cdot b^x + k$; stated with $\\lim_{x \\to -\\infty}$ (growth) or $\\lim_{x \\to \\infty}$ (decay) |
| Equivalent forms | $a \\cdot b^{x} = a \\cdot \\left(b^{1/k}\\right)^{kx}$, so $8^{x/3} = 2^x$ and $(1.06)^{x}$ is $(1.06^{12})^{x/12}$ per year of months |
| Always concave up | the rate of change of $a \\cdot b^x$ ($a > 0$) is increasing whether the function grows or decays |

### Composition and Inverses (2.7–2.8)

| Fact | Detail |
|:---|:---|
| $(f \\circ g)(x) = f(g(x))$ | evaluate the inside function first; the domain needs $x$ in the domain of $g$ and $g(x)$ in the domain of $f$ |
| Inverse | swaps inputs and outputs: $f(a) = b \\iff f^{-1}(b) = a$; graph reflects over $y = x$; domain and range swap |
| Exists when | $f$ is one-to-one (strictly increasing or strictly decreasing suffices) |
| Exponential and log | $\\log_b x$ is the inverse of $b^x$: $b^{\\log_b x} = x$ and $\\log_b(b^x) = x$ |

### Logarithmic Functions (2.9–2.13)

| Fact | Detail |
|:---|:---|
| Definition | $\\log_b x = y \\iff b^y = x$ ($b > 0$, $b \\ne 1$, $x > 0$) |
| Properties | $\\log_b(MN) = \\log_b M + \\log_b N$; $\\log_b\\dfrac{M}{N} = \\log_b M - \\log_b N$; $\\log_b M^p = p\\log_b M$ |
| Change of base | $\\log_b x = \\dfrac{\\ln x}{\\ln b}$ |
| Graph | domain $x > 0$, vertical asymptote $x = 0$ ($\\lim_{x \\to 0^+} \\log_b x = -\\infty$ for $b > 1$), increasing and concave down, no horizontal asymptote |
| Solving | isolate the exponential or the log, convert, then **check the domain** |

### Data Modeling and Semi-log Plots (2.14–2.15)

| Fact | Detail |
|:---|:---|
| Residual | actual $-$ predicted; a pattern in the residual plot means the model type is wrong |
| Semi-log plot | $\\log y$ against $x$: exponential data looks **linear**; slope $= \\log b$, intercept $= \\log a$ |
| Log model | $y = a + b\\ln x$: outputs change by equal amounts when the input is multiplied by a constant factor |

> **Key Fact:** "Proportional growth" (equal ratios over equal input steps) is the test for an exponential model, exactly as "equal differences" is the test for a linear one.`
    },
    {
      id: 'per4-mc',
      type: 'multiple-choice' as const,
      content: '**Unit 2 practice (no calculator).** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a geometric sequence, $g_2 = 6$ and $g_5 = 162$. What is $g_7$?',
            options: ['$1458$', '$486$', '$4374$', '$54$'],
            correctAnswer: 0,
            explanation: '$g_5 = g_2 \\cdot r^3$ gives $r^3 = 27$, so $r = 3$. Then $g_7 = g_5 \\cdot r^2 = 162 \\cdot 9 = 1458$. The value $486$ is $g_6$, $4374$ is $g_8$, and $54$ is $g_4$.'
          },
          {
            question: 'An exponential function $f(x) = a \\cdot b^x$ passes through $(1, 12)$ and $(3, 48)$. Which is $f$?',
            options: ['$f(x) = 6 \\cdot 2^x$', '$f(x) = 6 \\cdot 4^x$', '$f(x) = 12 \\cdot 2^x$', '$f(x) = 3 \\cdot 4^x$'],
            correctAnswer: 0,
            explanation: 'Over the two-unit step from $x = 1$ to $x = 3$ the output is multiplied by $4$, so $b^2 = 4$ and $b = 2$. Then $a \\cdot 2 = 12$ gives $a = 6$. Check: $6 \\cdot 2^3 = 48$. The other options give $f(1) = 24$, $24$ and $12$ but $f(3) = 384$, $96$ and $192$.'
          },
          {
            question: 'If $f(x) = 3 \\cdot 2^x$, which is $f^{-1}(x)$?',
            options: ['$f^{-1}(x) = \\log_2\\left(\\dfrac{x}{3}\\right)$', '$f^{-1}(x) = \\dfrac{1}{3}\\log_2 x$', '$f^{-1}(x) = \\log_2(x - 3)$', '$f^{-1}(x) = \\log_3\\left(\\dfrac{x}{2}\\right)$'],
            correctAnswer: 0,
            explanation: 'Swap and solve: $x = 3 \\cdot 2^y \\Rightarrow \\frac{x}{3} = 2^y \\Rightarrow y = \\log_2\\frac{x}{3}$. Dividing the log by $3$ or subtracting $3$ inside undoes the wrong operation, and the base must be $2$.'
          },
          {
            question: 'A table lists $x$ and $\\log_{10} y$ for a data set.\n\n| $x$ | $0$ | $1$ | $2$ | $3$ |\n|:---:|:---:|:---:|:---:|:---:|\n| $\\log_{10} y$ | $0.5$ | $0.8$ | $1.1$ | $1.4$ |\n\nWhich model type fits $y$ as a function of $x$, and why?',
            options: ['Exponential: $\\log_{10} y$ rises by a constant $0.3$ per unit of $x$', 'Linear: $\\log_{10} y$ rises by a constant amount per unit of $x$', 'Logarithmic: the table lists values of $\\log_{10} y$', 'Quadratic: $\\log_{10} y$ rises faster as $x$ increases'],
            correctAnswer: 0,
            explanation: 'A linear pattern in a semi-log plot means $y$ itself is exponential: $\\log_{10} y = 0.5 + 0.3x$ gives $y = 10^{0.5} \\cdot \\left(10^{0.3}\\right)^x$. The constant change is in $\\log y$, not in $y$, so $y$ is not linear; the differences are constant, not growing.'
          }
        ]
      }
    },
    {
      id: 'per4-input',
      type: 'input-boxes' as const,
      content: `**Quick computations.** ✍️

**1)** $\\log_3 81$:

**2)** The solution of $2^x = 20$, to three decimal places (calculator):

**3)** In an arithmetic sequence with $a_1 = 7$ and common difference $4$, the value of $a_{10}$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '4.322', '43'],
        hint1: '$3^4 = 81$.',
        hint2: '$x = \\log_2 20 = \\frac{\\ln 20}{\\ln 2}$.',
        hint3: '$a_{10} = a_1 + 9d$.',
        explanation: '(1) $3^4 = 81$, so $\\log_3 81 = 4$. (2) $x = \\frac{\\ln 20}{\\ln 2} \\approx 4.322$. (3) $a_{10} = 7 + 9 \\cdot 4 = 43$.'
      }
    },
    {
      id: 'per4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Arithmetic $\\leftrightarrow$ linear (constant difference); geometric $\\leftrightarrow$ exponential (constant ratio)
- $f(x) = a \\cdot b^x$: $a = f(0)$, $b = 1 + r$; find $b$ from two points with $\\left(\\frac{y_2}{y_1}\\right)^{1/(x_2 - x_1)}$
- Inverses swap inputs and outputs; $\\log_b x$ undoes $b^x$; **check the domain** after solving a log equation
- A **linear semi-log plot** means exponential data; a patterned residual plot means the wrong model type`
    }
  ]
};
