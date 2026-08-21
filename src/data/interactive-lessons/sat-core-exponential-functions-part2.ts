export const lessonData = {
  topicSlug: 'sat-exponential-functions-core-skills',
  sections: [
    {
      id: 'exp-core-p2-recap',
      type: 'text' as const,
      content: `# Exponential Functions: Practice

**Part 2 of 2 — Run the Steps**

To build or read an exponential model $y = a \\cdot b^{x}$:

1. Find the **starting amount**. That number goes in front, as $a$.
2. Find the **percent change** in the problem.
3. Turn the percent into the base $b$. Growing: $b = 1 + \\text{percent as a decimal}$. Shrinking: $b = 1 - \\text{percent as a decimal}$.
4. Put the number of steps in for the exponent and do the arithmetic.

### Reading a model at a glance

- $b > 1$ means growth. Example: $1.09$ is growth of $9\\%$.
- $0 < b < 1$ means decay. Example: $0.88$ is a drop of $12\\%$.
- The $y$-intercept is always the point $(0, a)$, because the exponent is $0$ there and $b^{0} = 1$.

### Percent as a decimal

Move the decimal point two places left.

- $5\\% = 0.05$
- $25\\% = 0.25$
- $40\\% = 0.40$

One year of growth is one multiplication. Two years is two multiplications, and so on.`
    },
    {
      id: 'exp-core-p2-q1',
      type: 'quiz' as const,
      question: 'Does $y = 500(0.9)^{t}$ show growth or decay?',
      options: ['Growth', 'Decay', 'Linear change', 'Neither'],
      correctAnswer: 1,
      explanation: 'The answer is decay. The base is $0.9$, which is between $0$ and $1$. Multiplying by a number less than $1$ makes the amount smaller each time, so the value drops. In fact $0.9 = 1 - 0.10$, which means the amount falls by $10\\%$ each step. Growth would need a base larger than $1$.'
    },
    {
      id: 'exp-core-p2-q2',
      type: 'quiz' as const,
      question: 'A town has $400$ people and grows by $25\\%$ in one year. How many people live there after that year?',
      options: ['$425$', '$300$', '$500$', '$1000$'],
      correctAnswer: 2,
      explanation: 'The answer is $500$. Growing by $25\\%$ means the growth factor is $1 + 0.25 = 1.25$. Multiply the starting number by that factor: $400 \\times 1.25 = 500$. You can also check it by parts: $25\\%$ of $400$ is $100$, and $400 + 100 = 500$. The choice $425$ comes from adding $25$ people instead of $25\\%$.'
    },
    {
      id: 'exp-core-p2-q3',
      type: 'quiz' as const,
      question: 'What is the $y$-intercept of $f(x) = 6 \\cdot 5^{x}$?',
      options: ['$(0, 5)$', '$(0, 30)$', '$(5, 0)$', '$(0, 6)$'],
      correctAnswer: 3,
      explanation: 'The answer is $(0, 6)$. The $y$-intercept is the point where $x = 0$, so put $0$ in for $x$: $f(0) = 6 \\cdot 5^{0}$. Any number raised to the power $0$ equals $1$, so $f(0) = 6 \\times 1 = 6$. That gives the point $(0, 6)$. The choice $(0, 30)$ comes from multiplying $6 \\times 5$, which would be the value at $x = 1$.'
    },
    {
      id: 'exp-core-p2-q4',
      type: 'quiz' as const,
      question: 'What is the main difference between linear growth and exponential growth?',
      options: ['Linear growth adds the same amount each step; exponential growth multiplies by the same number each step', 'Linear growth and exponential growth are two names for the same thing', 'Linear growth is always faster than exponential growth', 'Exponential growth always starts at a higher value'],
      correctAnswer: 0,
      explanation: 'The answer is that linear growth adds the same amount each step while exponential growth multiplies by the same number each step. Adding $10$ each time gives $10, 20, 30, 40$. Multiplying by $2$ each time gives $10, 20, 40, 80$. Exponential growth starts slowly but passes linear growth once enough steps go by, so it is not always the smaller one at the start.'
    }
  ]
}
