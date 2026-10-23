export const precalcFrqStrategiesPart5Data = {
  topicSlug: 'precalc-frq-strategies',
  sections: [
    {
      id: 'pfs5-intro',
      type: 'text' as const,
      content: `# 📝 Free-Response Strategies: the Four Question Types

**Part 5 of 7 — Question 4: Symbolic Manipulations**

### The Shape of Question 4

Question 4 closes Part B, **no calculator**. There is no context and no data: three short algebraic tasks, each worth 2 points, drawn from the whole course. Every answer is **exact**, and every solution of an equation must be **checked against the domain** of the original equation.

| Part | Typical task | What earns the points |
|:---:|:---|:---|
| (A) | Solve an **exponential** or **logarithmic** equation | exact solution(s); extraneous solutions **rejected** with a reason |
| (B) | **Rewrite** an expression in an equivalent form: a single logarithm, a different base, $a \\cdot b^x$ form, or a trigonometric identity | the form the question asks for |
| (C) | Solve a **trigonometric** equation on a given interval, or evaluate using an identity | all solutions in the interval, exact |

> **Key Fact:** In a logarithmic equation, a solution that makes any original log argument $\\le 0$ is **extraneous**. Reporting it loses the point even when the correct solution is also listed.`
    },
    {
      id: 'pfs5-worked',
      type: 'text' as const,
      content: `## Worked Question 4

### (A)(i) Solve $5 \\cdot 3^{2x} = 45$.

$$3^{2x} = 9 = 3^2 \\;\\Rightarrow\\; 2x = 2 \\;\\Rightarrow\\; x = 1$$

(Equivalent: $2x = \\log_3 9$, so $x = \\frac{1}{2}\\log_3 9 = 1$.)

### (A)(ii) Solve $\\log_2 x + \\log_2(x - 2) = 3$.

$$\\log_2\\big(x(x - 2)\\big) = 3 \\;\\Rightarrow\\; x^2 - 2x = 8 \\;\\Rightarrow\\; (x - 4)(x + 2) = 0$$

$x = 4$ or $x = -2$. The original equation needs $x > 0$ **and** $x - 2 > 0$, so $x = -2$ is extraneous.

**Answer:** $x = 4$ only. (Write the rejection: "$x = -2$ is rejected because $\\log_2(-2)$ is undefined.")

### (B)(i) Rewrite $2\\ln x - \\ln(x + 1)$ as a single logarithm.

$$2\\ln x - \\ln(x + 1) = \\ln x^2 - \\ln(x + 1) = \\ln\\left(\\frac{x^2}{x + 1}\\right), \\quad x > 0$$

### (B)(ii) Rewrite $k(x) = 4 \\cdot 8^{x/3}$ in the form $a \\cdot b^x$.

$$8^{x/3} = \\left(8^{1/3}\\right)^x = 2^x, \\qquad \\text{so } k(x) = 4 \\cdot 2^x$$

### (C)(i) Solve $\\cos(2\\theta) - \\cos\\theta = 0$ on $0 \\le \\theta < 2\\pi$.

Replace $\\cos(2\\theta)$ with $2\\cos^2\\theta - 1$ so the equation has one function:

$$2\\cos^2\\theta - \\cos\\theta - 1 = 0 \\;\\Rightarrow\\; (2\\cos\\theta + 1)(\\cos\\theta - 1) = 0$$

$\\cos\\theta = -\\dfrac{1}{2}$ gives $\\theta = \\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}$; $\\cos\\theta = 1$ gives $\\theta = 0$.

**Answer:** $\\theta = 0, \\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}$.

### (C)(ii) Given $\\sin\\theta = \\dfrac{3}{5}$ and $\\dfrac{\\pi}{2} < \\theta < \\pi$, find $\\sin(2\\theta)$.

In Quadrant II, $\\cos\\theta < 0$: $\\cos\\theta = -\\sqrt{1 - \\frac{9}{25}} = -\\dfrac{4}{5}$.

$$\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta = 2 \\cdot \\frac{3}{5} \\cdot \\left(-\\frac{4}{5}\\right) = -\\frac{24}{25}$$

### Scoring guide

| Part | Points | Earned by |
|:---:|:---:|:---|
| (A) | 2 | $x = 1$; $x = 4$ with $x = -2$ rejected |
| (B) | 2 | $\\ln\\frac{x^2}{x + 1}$; $4 \\cdot 2^x$ |
| (C) | 2 | $\\theta = 0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$; $\\sin(2\\theta) = -\\frac{24}{25}$ |

> **Key Fact:** Choose the identity that leaves **one trigonometric function**: $\\cos(2\\theta) = 2\\cos^2\\theta - 1$ next to $\\cos\\theta$, $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$ next to $\\sin\\theta$.`
    },
    {
      id: 'pfs5-mc',
      type: 'multiple-choice' as const,
      content: '**Question 4 practice.** 🎯 No calculator.',
      exercise: {
        questions: [
          {
            question: 'Solve $4^{x - 1} = 8$.',
            options: ['$x = \\dfrac{5}{2}$', '$x = \\dfrac{3}{2}$', '$x = 2$', '$x = \\dfrac{1}{2}$'],
            correctAnswer: 0,
            explanation: 'Write both sides with base $2$: $2^{2(x - 1)} = 2^3$, so $2x - 2 = 3$ and $x = \\frac{5}{2}$. The value $\\frac{3}{2}$ is $\\log_4 8$ itself, forgetting the $-1$; $2$ gives $4^1 = 4$; $\\frac{1}{2}$ comes from $\\log_4 8 - 1$.'
          },
          {
            question: 'Which expression is equivalent to $\\ln\\left(\\dfrac{x^2}{x + 1}\\right)$ for $x > 0$?',
            options: ['$2\\ln x - \\ln(x + 1)$', '$\\ln(2x) - \\ln(x + 1)$', '$2\\ln x + \\ln(x + 1)$', '$2\\big(\\ln x - \\ln(x + 1)\\big)$'],
            correctAnswer: 0,
            explanation: 'The quotient rule gives $\\ln x^2 - \\ln(x + 1)$ and the power rule turns $\\ln x^2$ into $2\\ln x$. $\\ln(2x)$ is not $\\ln x^2$, a quotient subtracts rather than adds, and the factor $2$ applies only to $\\ln x$.'
          },
          {
            question: 'Given $\\cos\\theta = -\\dfrac{1}{3}$ and $\\pi < \\theta < \\dfrac{3\\pi}{2}$, what is $\\cos(2\\theta)$?',
            options: ['$-\\dfrac{7}{9}$', '$\\dfrac{7}{9}$', '$-\\dfrac{2}{3}$', '$-\\dfrac{8}{9}$'],
            correctAnswer: 0,
            explanation: '$\\cos(2\\theta) = 2\\cos^2\\theta - 1 = 2 \\cdot \\frac{1}{9} - 1 = -\\frac{7}{9}$; the quadrant does not matter because cosine is squared. $\\frac{7}{9}$ drops the sign, $-\\frac{2}{3}$ doubles $\\cos\\theta$ instead of squaring, and $-\\frac{8}{9}$ is $-(1 - \\frac{1}{9})$.'
          }
        ]
      }
    },
    {
      id: 'pfs5-input',
      type: 'input-boxes' as const,
      content: `**Exact solving.** ✍️

**1)** The solution of $2^{x + 3} = 32$:

**2)** The solution of $\\log_3(x + 1) = 2$:

**3)** The number of solutions of $2\\sin^2\\theta - \\sin\\theta = 0$ on $0 \\le \\theta < 2\\pi$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '8', '4'],
        hint1: '$32 = 2^5$.',
        hint2: 'Rewrite in exponential form: $x + 1 = 3^2$.',
        hint3: 'Factor: $\\sin\\theta\\,(2\\sin\\theta - 1) = 0$.',
        explanation: '(1) $x + 3 = 5$, so $x = 2$. (2) $x + 1 = 9$, so $x = 8$ (and $x + 1 = 9 > 0$, so it is valid). (3) $\\sin\\theta = 0$ at $\\theta = 0, \\pi$ and $\\sin\\theta = \\frac{1}{2}$ at $\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$: four solutions.'
      }
    },
    {
      id: 'pfs5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Question 4 is **three 2-point algebra tasks**, no calculator, exact answers
- Exponential equations: **match bases** or take a logarithm; logarithmic equations: **combine, convert, then check the domain** and reject extraneous solutions in writing
- Rewriting means reaching the **form asked for**: single log, $a \\cdot b^x$, one trigonometric function
- Trigonometric equations: use the identity that leaves **one function**, factor, and list **every** solution in the interval`
    }
  ]
};
