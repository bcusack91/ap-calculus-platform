export const lessonData = {
  topicSlug: 'sat-exponents-radicals-core-skills',
  sections: [
    {
      id: 'exprad-core-p1-intro',
      type: 'text' as const,
      content: `# Exponents: The Basics

**Part 1 of 2 — One Skill, One Idea**

An **exponent** is the small raised number. It tells you how many times to multiply the base by itself.

$$2^{3} = 2 \\times 2 \\times 2 = 8$$

Here the **base** is $2$ and the **exponent** is $3$. We say "two to the third power."

### The one move: count the factors

Most SAT exponent questions are one rule. You can get every one of them by counting factors.

**Multiplying.** What is $2^{3} \\times 2^{4}$?

Write it out:

$$2^{3} \\times 2^{4} = (2 \\times 2 \\times 2) \\times (2 \\times 2 \\times 2 \\times 2)$$

Count the twos. There are $3$ of them, then $4$ more. That is $7$ twos in a row.

$$2^{3} \\times 2^{4} = 2^{7}$$

So when the bases match and you multiply, you **add** the exponents: $3 + 4 = 7$.

### The three rules that come from counting

- **Multiply → add the exponents.** $x^{5} \\cdot x^{2} = x^{7}$
- **Divide → subtract the exponents.** $\\frac{x^{6}}{x^{2}} = x^{4}$, because two of the $x$'s on the bottom cancel two on the top.
- **Power of a power → multiply the exponents.** $(x^{3})^{2} = x^{6}$, because $x^{3}$ is written down twice, giving $3 + 3 = 6$ factors.

### One fact to memorize

Anything raised to the zero power is $1$.

$$5^{0} = 1 \\qquad 12^{0} = 1 \\qquad x^{0} = 1$$

It is not $0$. It is $1$. That one comes up often enough to be worth remembering on its own.`
    },
    {
      id: 'exprad-core-p1-q1',
      type: 'quiz' as const,
      question: `Simplify $3^{5} \\cdot 3^{2}$. The answer is $3^{?}$. What is the exponent?`,
      options: [
        `$3$`,
        `$7$`,
        `$10$`,
        `$25$`
      ],
      correctAnswer: 1,
      explanation: `The answer is $7$.

The bases are the same — both are $3$ — and the two pieces are being multiplied. So you add the exponents.

$$5 + 2 = 7$$

That gives $3^{5} \\cdot 3^{2} = 3^{7}$.

If you multiplied $5 \\times 2$ instead of adding, you would get $10$. Multiplying the exponents is the rule for a power raised to a power, not for two powers multiplied together.`
    },
    {
      id: 'exprad-core-p1-q2',
      type: 'quiz' as const,
      question: `Simplify $\\frac{5^{8}}{5^{3}}$. The answer is $5^{?}$. What is the exponent?`,
      options: [
        `$11$`,
        `$24$`,
        `$3$`,
        `$5$`
      ],
      correctAnswer: 3,
      explanation: `The answer is $5$.

The bases are the same — both are $5$ — and this is a division. So you subtract the bottom exponent from the top one.

$$8 - 3 = 5$$

That gives $\\frac{5^{8}}{5^{3}} = 5^{5}$.

Adding the exponents would give $11$, but adding is the rule for multiplying, not dividing.`
    },
    {
      id: 'exprad-core-p1-q3',
      type: 'quiz' as const,
      question: `Simplify $(2^{4})^{3}$. The answer is $2^{?}$. What is the exponent?`,
      options: [
        `$12$`,
        `$7$`,
        `$64$`,
        `$1$`
      ],
      correctAnswer: 0,
      explanation: `The answer is $12$.

This is a power raised to another power, so you multiply the exponents.

$$4 \\times 3 = 12$$

That gives $(2^{4})^{3} = 2^{12}$.

Here is why it works: $(2^{4})^{3}$ means $2^{4} \\cdot 2^{4} \\cdot 2^{4}$. That is $4 + 4 + 4 = 12$ twos in a row.

Adding $4 + 3$ would give $7$, but the exponents are added only when two powers are multiplied side by side.`
    },
    {
      id: 'exprad-core-p1-q4',
      type: 'quiz' as const,
      question: `What is $7^{0}$?`,
      options: [
        `$0$`,
        `$7$`,
        `$1$`,
        `$70$`
      ],
      correctAnswer: 2,
      explanation: `The answer is $1$.

Any number raised to the zero power equals $1$. So $7^{0} = 1$, and $100^{0} = 1$ too.

The common slip is answering $0$, because the exponent is $0$. The exponent is not the answer — it only tells you what to do with the base, and a zero exponent always gives you $1$.`
    }
  ]
}
