export const calcbcRatioRootPart4Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'rr4-intro',
      type: 'text' as const,
      content: `# Ratio Test and Power Series

**Part 4 of 7 — Finding the Radius of Convergence**

### The Connection

For a power series $\\sum c_n(x - a)^n$, the Ratio Test determines the **radius of convergence** $R$:

$$L = \\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right| \\cdot |x - a|$$

The series converges when $L < 1$:

$$\\boxed{|x - a| < \\frac{1}{\\lim |c_{n+1}/c_n|} = R}$$

### Worked Example

$$\\sum_{n=0}^{\\infty} \\frac{(x-3)^n}{n \\cdot 2^n}$$

$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\left|\\frac{(x-3)^{n+1}}{(n+1)2^{n+1}} \\cdot \\frac{n \\cdot 2^n}{(x-3)^n}\\right| = \\frac{|x-3|}{2} \\cdot \\frac{n}{n+1}$$

$$L = \\frac{|x-3|}{2} < 1 \\quad \\Rightarrow \\quad |x - 3| < 2 \\quad \\Rightarrow \\quad R = 2$$

> **Key Fact:** The Ratio Test finds $R$ but does NOT determine convergence at the **endpoints** $x = a \\pm R$. You must check those separately.`
    },
    {
      id: 'rr4-more-examples',
      type: 'text' as const,
      content: `### Example 2: $\\sum_{n=0}^{\\infty} \\frac{n! \\cdot x^n}{10^n}$

$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)|x|}{10}$$

$$L = \\lim \\frac{(n+1)|x|}{10} = \\begin{cases} \\infty & \\text{if } x \\neq 0 \\\\ 0 & \\text{if } x = 0 \\end{cases}$$

$R = 0$: converges only at $x = 0$.

### Example 3: $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$

$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|x|}{n+1}$$

$$L = \\lim \\frac{|x|}{n+1} = 0 < 1 \\text{ for ALL } x$$

$R = \\infty$: converges for all $x$ (this is $e^x$).

### Summary Table

| Series | $\\lim |c_{n+1}/c_n|$ | $R$ |
|--------|---------------------|-----|
| $\\sum x^n/n!$ | $0$ | $\\infty$ |
| $\\sum n! x^n$ | $\\infty$ | $0$ |
| $\\sum x^n/2^n$ | $1/2$ | $2$ |
| $\\sum n x^n/3^n$ | $1/3$ | $3$ |`
    },
    {
      id: 'rr4-mc1',
      type: 'multiple-choice' as const,
      content: '**Radius of Convergence**',
      exercise: {
        questions: [
          {
            question: 'For $\\sum_{n=1}^{\\infty} \\frac{n^2 x^n}{5^n}$, the radius of convergence is:',
            options: ['$R = 5$', '$R = 1/5$', '$R = 25$', '$R = \\infty$'],
            correctAnswer: 0,
            explanation: '$|a_{n+1}/a_n| = (|x|/5)((n+1)/n)^2 \\to |x|/5 < 1 \\Rightarrow |x| < 5$. $R = 5$.'
          },
          {
            question: 'For $\\sum_{n=0}^{\\infty} \\frac{(2x)^n}{n!}$, $R =$',
            options: ['$\\infty$ (converges for all $x$)', '$1/2$', '$2$', '$0$'],
            correctAnswer: 0,
            explanation: 'This is $e^{2x}$. $|a_{n+1}/a_n| = 2|x|/(n+1) \\to 0$ for any $x$. $R = \\infty$.'
          },
          {
            question: 'After finding $R = 3$ for $\\sum c_n(x+1)^n$, the interval of convergence is:',
            options: ['$(-4, 2)$, possibly including one or both endpoints', '$(-3, 3)$', '$(-2, 4)$', '$(-1 - 3, -1 + 3) = (-4, 2)$ with endpoints already included'],
            correctAnswer: 0,
            explanation: 'Center $a = -1$, $R = 3$: $|-1 - x| < 3 \\Rightarrow -4 < x < 2$. Must check $x = -4$ and $x = 2$ separately.'
          }
        ]
      }
    },
    {
      id: 'rr4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Finding R**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\sum_{n=1}^{\\infty} \\frac{(-1)^n (x-2)^n}{n \\cdot 4^n}$: $R =$',
            options: ['$4$', '$1/4$', '$2$', '$\\infty$'],
            correctAnswers: ['$4$'],
            hints: ['$c_n = (-1)^n/(n \\cdot 4^n)$. $|c_{n+1}/c_n| = (n/(n+1))(1/4) \\to 1/4$. $R = 1/(1/4)$.'],
            explanation: '$\\lim |c_{n+1}/c_n| = 1/4$. $R = 4$. IOC is centered at $x = 2$: $(-2, 6)$ plus endpoint checks.'
          },
          {
            label: 'For $\\sum (n!)^2 x^n/(2n)!$: we found $L = |x|/4$ from Ratio Test. $R =$',
            options: ['$4$', '$1/4$', '$2$', '$\\infty$'],
            correctAnswers: ['$4$'],
            hints: ['$L < 1$ when $|x| < 4$.'],
            explanation: '$|x|/4 < 1 \\Rightarrow |x| < 4$. $R = 4$.'
          }
        ]
      }
    },
    {
      id: 'rr4-input',
      type: 'input-box' as const,
      content: '**Finding R**',
      exercise: {
        question: 'Find the radius of convergence of $\\sum_{n=1}^{\\infty} \\frac{n \\cdot 3^n}{7^n} (x+4)^n$.',
        correctAnswer: '7/3',
        acceptableAnswers: ['7/3', '2.333', '2.33'],
        hints: ['$c_n = n \\cdot 3^n/7^n$. $|c_{n+1}/c_n| = ((n+1)/n)(3/7) \\to 3/7$.', '$R = 1/(3/7) = 7/3$.'],
        explanation: '$\\lim |c_{n+1}/c_n| = 3/7$. $R = 7/3$.'
      }
    },
    {
      id: 'rr4-summary',
      type: 'text' as const,
      content: `### Summary

- Ratio Test on $\\sum c_n(x-a)^n$: set $L < 1$ and solve for $|x - a| < R$
- $R = 1/\\lim|c_{n+1}/c_n|$ (or $\\infty$ if limit is $0$, or $0$ if limit is $\\infty$)
- Always check endpoints separately (Ratio Test gives $L = 1$ there)

> **Next:** Part 5 — AP Exam Strategies.`
    }
  ]
};
