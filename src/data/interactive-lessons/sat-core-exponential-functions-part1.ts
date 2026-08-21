export const lessonData = {
  topicSlug: 'sat-exponential-functions-core-skills',
  sections: [
    {
      id: 'exp-core-p1-intro',
      type: 'text' as const,
      content: `# Exponential Functions: The Basics

**Part 1 of 2 — One Skill, One Idea**

Linear growth **adds** the same amount each step: $10, 20, 30, 40$. You are adding $10$ every time.

Exponential growth **multiplies** by the same number each step: $10, 20, 40, 80$. You are doubling every time.

Every exponential function on the SAT looks like this:

$$y = a \\cdot b^{x}$$

- $a$ is the **starting amount** — the value when $x = 0$.
- $b$ is the **base**, also called the **growth factor** — the number you multiply by each step.
- $x$ is the **exponent** — how many times you multiply.

If $b$ is bigger than $1$, the amount **grows**. If $b$ is between $0$ and $1$, the amount **shrinks**. Shrinking is called **decay**.

### The one move: turn a percent into the number $b$

- Growing by $7\\%$? Then $b = 1 + 0.07 = 1.07$. You keep all of it and add a little.
- Shrinking by $7\\%$? Then $b = 1 - 0.07 = 0.93$. You keep the rest.

### Worked example

You put $\\$200$ in an account that grows $10\\%$ per year. Write the model and find the amount after $1$ year.

Step 1 — The starting amount is $a = 200$.

Step 2 — Growing $10\\%$ means $b = 1 + 0.10 = 1.10$.

Step 3 — Put the pieces in place: $y = 200(1.10)^{t}$, where $t$ is the number of years.

Step 4 — For one year, put $t = 1$ in: $y = 200(1.10)^{1} = 200 \\times 1.10 = 220$.

After one year there is $\\$220$ in the account.`
    },
    {
      id: 'exp-core-p1-q1',
      type: 'quiz' as const,
      question: 'In the function $y = 350 \\cdot 2^{x}$, what is the starting value, meaning the value when $x = 0$?',
      options: ['$2$', '$350$', '$700$', '$0$'],
      correctAnswer: 1,
      explanation: 'The answer is $350$. In the form $y = a \\cdot b^{x}$, the number in front, $a$, is the starting value. You can check it by putting $x = 0$ in: $y = 350 \\cdot 2^{0}$, and any number raised to the power $0$ equals $1$, so $y = 350 \\times 1 = 350$. The choice $700$ is the value after one step, not the start.'
    },
    {
      id: 'exp-core-p1-q2',
      type: 'quiz' as const,
      question: 'A population grows by $6\\%$ each year. What is the growth factor $b$?',
      options: ['$0.06$', '$0.94$', '$1.06$', '$6$'],
      correctAnswer: 2,
      explanation: 'The answer is $1.06$. For growth you keep everything you had, which is $1$ whole, and add the percent as a decimal. Write $6\\%$ as $0.06$, then $1 + 0.06 = 1.06$. The choice $0.94$ is the factor for a population that **shrinks** by $6\\%$.'
    },
    {
      id: 'exp-core-p1-q3',
      type: 'quiz' as const,
      question: 'A car is worth $\\$8000$ today and loses $15\\%$ of its value each year. Which equation gives its value after $t$ years?',
      options: ['$y = 8000(0.85)^{t}$', '$y = 8000(1.15)^{t}$', '$y = 8000 - 15t$', '$y = 8000(15)^{t}$'],
      correctAnswer: 0,
      explanation: 'The answer is $y = 8000(0.85)^{t}$. The starting amount is $8000$, so that goes in front. Losing $15\\%$ means the car keeps $100\\% - 15\\% = 85\\%$ of its value, and $85\\%$ written as a decimal is $0.85$. So the base is $0.85$. The choice with $1.15$ would make the car gain value each year instead of losing it.'
    },
    {
      id: 'exp-core-p1-q4',
      type: 'quiz' as const,
      question: 'If $f(x) = 3 \\cdot 2^{x}$, what is $f(2)$?',
      options: ['$6$', '$9$', '$36$', '$12$'],
      correctAnswer: 3,
      explanation: 'The answer is $12$. Replace $x$ with $2$: $f(2) = 3 \\cdot 2^{2}$. Do the exponent first, since the exponent belongs only to the $2$: $2^{2}$ means $2 \\times 2 = 4$. Then multiply: $3 \\times 4 = 12$. The choice $36$ comes from multiplying $3 \\times 2 = 6$ first and then squaring, which changes the order of operations.'
    }
  ]
}
