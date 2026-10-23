export const precalcFrqStrategiesPart2Data = {
  topicSlug: 'precalc-frq-strategies',
  sections: [
    {
      id: 'pfs2-intro',
      type: 'text' as const,
      content: `# 📝 Free-Response Strategies: the Four Question Types

**Part 2 of 7 — Question 1: Function Concepts**

### The Shape of Question 1

Question 1 (Part A, graphing calculator) presents **two functions in different forms**: usually a **table** of selected values of one function and an **algebraic rule** for the other. It then asks you to combine, compare and describe them. Nothing in it needs regression; the calculator is for arithmetic and for checking.

| Part | Typical task | Skill (CED) |
|:---:|:---|:---|
| (A)(i) | Evaluate a composition such as $h(g(0))$ from the table and the rule | 2.7 composition |
| (A)(ii) | Find an inverse value such as $h^{-1}(4)$ by solving $h(x) = 4$ | 2.8 inverses |
| (B)(i) | Compute an **average rate of change** from the table | 1.3 rates of change |
| (B)(ii) | Explain why a function **does or does not** have an inverse, or whether its rate of change is increasing or decreasing | 1.3, 2.8 |
| (C)(i) | Find an asymptote or end behavior, with **limit notation** | 1.7–1.9 |
| (C)(ii) | Justify the asymptote from the rule | 1.9 |

> **Key Fact:** Question 1 is where the reader checks whether you can **read a table**, **use a rule**, and **say why**. Every justification point is earned with the specific numbers that prove the claim.`
    },
    {
      id: 'pfs2-worked',
      type: 'text' as const,
      content: `## Worked Question 1

The function $g$ is a polynomial function. Selected values of $g$ are given in the table. The function $h$ is given by $h(x) = \\dfrac{2x + 6}{x - 4}$.

| $x$ | $-2$ | $0$ | $2$ | $4$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $g(x)$ | $11$ | $5$ | $3$ | $5$ | $11$ |

### (A)(i) Find the value of $h(g(0))$.

Inside first, from the table: $g(0) = 5$. Then from the rule: $h(5) = \\dfrac{2(5) + 6}{5 - 4} = \\dfrac{16}{1} = 16$.

**Answer:** $h(g(0)) = 16$.

### (A)(ii) Find the value of $h^{-1}(4)$.

$h^{-1}(4)$ is the input $x$ with $h(x) = 4$:

$$\\frac{2x + 6}{x - 4} = 4 \\;\\Rightarrow\\; 2x + 6 = 4x - 16 \\;\\Rightarrow\\; 22 = 2x \\;\\Rightarrow\\; x = 11$$

**Answer:** $h^{-1}(4) = 11$. (Check: $h(11) = \\frac{28}{7} = 4$.)

### (B)(i) Find the average rate of change of $g$ over the interval $0 \\le x \\le 6$.

$$\\frac{g(6) - g(0)}{6 - 0} = \\frac{11 - 5}{6} = 1$$

**Answer:** The average rate of change is $1$. (Show the quotient: the point is "answer with the difference quotient", not a bare number.)

### (B)(ii) Explain why $g$ does not have an inverse function on its domain.

**Answer:** "From the table, $g(0) = 5$ and $g(4) = 5$. Two different inputs produce the same output, so $g$ is not one-to-one and has no inverse function."

Naming **the two inputs and the shared output** is what earns the point. "It fails the horizontal line test" without the numbers does not.

### (C)(i) Determine the end behavior of $h$ with limit notation.

The degrees of numerator and denominator are equal, so the quotient of leading coefficients gives the horizontal asymptote:

$$\\lim_{x \\to \\infty} h(x) = 2 \\quad \\text{and} \\quad \\lim_{x \\to -\\infty} h(x) = 2$$

**Answer:** $y = 2$ is a horizontal asymptote.

### (C)(ii) Determine the vertical asymptote of $h$ and justify.

At $x = 4$ the denominator is $0$ and the numerator is $2(4) + 6 = 14 \\ne 0$, so $x = 4$ is a vertical asymptote: $\\lim_{x \\to 4^+} h(x) = \\infty$ (for $x$ slightly more than $4$, $\\frac{14}{\\text{small positive}}$) and $\\lim_{x \\to 4^-} h(x) = -\\infty$.

### Scoring guide

| Part | Point | Earned by |
|:---:|:---:|:---|
| (A)(i) | 1 | $h(g(0)) = 16$ |
| (A)(ii) | 1 | $x = 11$ |
| (B)(i) | 1 | $\\frac{11 - 5}{6 - 0} = 1$, quotient shown |
| (B)(ii) | 1 | two inputs with the same output, from the table |
| (C)(i) | 1 | $y = 2$ with a limit statement |
| (C)(ii) | 1 | $x = 4$, denominator $0$ and numerator nonzero (or a one-sided limit) |

> **Key Fact:** A vertical asymptote is justified by **"denominator zero, numerator nonzero"** or by a one-sided limit; a horizontal asymptote by the **limit as $x \\to \\pm\\infty$**.`
    },
    {
      id: 'pfs2-mc',
      type: 'multiple-choice' as const,
      content: `**Question 1 practice.** 🎯 Use the table of $g$ and $h(x) = \\dfrac{2x + 6}{x - 4}$ from the worked question.

| $x$ | $-2$ | $0$ | $2$ | $4$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $g(x)$ | $11$ | $5$ | $3$ | $5$ | $11$ |`,
      exercise: {
        questions: [
          {
            question: 'What is the value of $h(g(6))$?',
            options: ['$4$', '$16$', '$11$', '$\\dfrac{28}{15}$'],
            correctAnswer: 0,
            explanation: '$g(6) = 11$, so $h(11) = \\frac{2(11) + 6}{11 - 4} = \\frac{28}{7} = 4$. The value $16$ is $h(g(0))$, $11$ is the inner value itself, and $\\frac{28}{15}$ uses $11 + 4$ in the denominator.'
          },
          {
            question: 'What is the average rate of change of $g$ over the interval $-2 \\le x \\le 2$?',
            options: ['$-2$', '$2$', '$-8$', '$-\\dfrac{1}{2}$'],
            correctAnswer: 0,
            explanation: '$\\frac{g(2) - g(-2)}{2 - (-2)} = \\frac{3 - 11}{4} = -2$. Subtracting in the wrong order gives $2$, forgetting to divide gives $-8$, and $-\\frac{1}{2}$ inverts the quotient.'
          },
          {
            question: 'Which response earns the point for "explain why $g$ does not have an inverse function"?',
            options: ['$g(0) = g(4) = 5$, so two different inputs share one output', '$g$ is a polynomial, and polynomial functions never have inverses', '$g(2) = 3$ is the smallest output listed in the table', 'The average rate of change of $g$ on $[0, 6]$ is positive'],
            correctAnswer: 0,
            explanation: 'A function has an inverse exactly when it is one-to-one, and the table shows the specific failure: inputs $0$ and $4$ both map to $5$. Many polynomials do have inverses (such as $x^3$), a minimum value does not decide invertibility, and a positive average rate does not make a function one-to-one.'
          }
        ]
      }
    },
    {
      id: 'pfs2-input',
      type: 'input-boxes' as const,
      content: `**Features of $h(x) = \\dfrac{2x + 6}{x - 4}$.** ✍️

**1)** The vertical asymptote is $x = $ ?

**2)** The horizontal asymptote is $y = $ ?

**3)** The value of $h^{-1}(6)$ (the input $x$ with $h(x) = 6$):`,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '2', '7.5'],
        hint1: 'The denominator is $0$ at $x = 4$ and the numerator is not.',
        hint2: 'Equal degrees: the ratio of leading coefficients $\\frac{2}{1}$.',
        hint3: '$\\frac{2x + 6}{x - 4} = 6 \\Rightarrow 2x + 6 = 6x - 24$.',
        explanation: '(1) $x = 4$. (2) $y = 2$. (3) $2x + 6 = 6(x - 4) = 6x - 24$ gives $30 = 4x$, so $x = \\frac{15}{2} = 7.5$; check $h(7.5) = \\frac{21}{3.5} = 6$.'
      }
    },
    {
      id: 'pfs2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Question 1 pairs a **table** with a **rule**: evaluate compositions inside-out, find inverse values by **solving** $h(x) = c$
- An average rate of change is a **quotient with the interval shown**, not a bare number
- "No inverse" is justified by **two named inputs with the same output**
- Asymptotes and end behavior are stated with **limit notation** and justified from the rule`
    }
  ]
};
