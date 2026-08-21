export const lessonData = {
  topicSlug: 'sat-exponents-radicals-core-skills',
  sections: [
    {
      id: 'exprad-core-p2-recap',
      type: 'text' as const,
      content: `# Roots and Negative Exponents

**Part 2 of 2 — Practice**

### The rules from Part 1

- Multiply, same base → **add** the exponents. $x^{3} \\cdot x^{4} = x^{7}$
- Divide, same base → **subtract** the exponents. $\\frac{x^{9}}{x^{4}} = x^{5}$
- Power of a power → **multiply** the exponents. $(x^{2})^{5} = x^{10}$
- Zero exponent → the answer is $1$. $x^{0} = 1$

### Square roots

A **square root** asks: what number times itself gives this? The symbol is $\\sqrt{\\phantom{x}}$.

$$\\sqrt{36} = 6 \\quad \\text{because} \\quad 6 \\times 6 = 36$$

It helps to know these by sight: $\\sqrt{4} = 2$, $\\sqrt{9} = 3$, $\\sqrt{16} = 4$, $\\sqrt{25} = 5$, $\\sqrt{36} = 6$, $\\sqrt{49} = 7$, $\\sqrt{64} = 8$, $\\sqrt{81} = 9$, $\\sqrt{100} = 10$.

### Negative exponents

A negative exponent means **one over** that power. Flip it, and the exponent turns positive.

$$3^{-2} = \\frac{1}{3^{2}} = \\frac{1}{9}$$

A negative exponent does **not** make the answer negative. It makes it a fraction.

### Fraction exponents

An exponent of $\\frac{1}{2}$ is another way to write a square root.

$$x^{1/2} = \\sqrt{x} \\qquad \\text{so} \\qquad 25^{1/2} = \\sqrt{25} = 5$$

The bottom number of the fraction is the root. So $x^{1/3} = \\sqrt[3]{x}$, the cube root.`
    },
    {
      id: 'exprad-core-p2-q1',
      type: 'quiz' as const,
      question: `What is $\\sqrt{49}$?`,
      options: [
        `$24.5$`,
        `$98$`,
        `$7$`,
        `$9$`
      ],
      correctAnswer: 2,
      explanation: `The answer is $7$.

A square root asks which number times itself gives $49$.

$$7 \\times 7 = 49$$

So $\\sqrt{49} = 7$.

A square root is not the same as dividing by $2$. Half of $49$ is $24.5$, and $24.5 \\times 24.5$ is nowhere near $49$.`
    },
    {
      id: 'exprad-core-p2-q2',
      type: 'quiz' as const,
      question: `Evaluate $4^{-2}$.`,
      options: [
        `$\\frac{1}{16}$`,
        `$-16$`,
        `$16$`,
        `$-\\frac{1}{16}$`
      ],
      correctAnswer: 0,
      explanation: `The answer is $\\frac{1}{16}$.

Step 1 — A negative exponent means one over that power:

$$4^{-2} = \\frac{1}{4^{2}}$$

Step 2 — Work out the bottom: $4^{2} = 4 \\times 4 = 16$.

Step 3 — Put it together: $\\frac{1}{16}$.

The minus sign in the exponent does not make the answer negative. It moves the power to the bottom of a fraction.`
    },
    {
      id: 'exprad-core-p2-q3',
      type: 'quiz' as const,
      question: `Rewrite $x^{1/3}$ using a root symbol.`,
      options: [
        `$3\\sqrt{x}$`,
        `$\\frac{x}{3}$`,
        `$x^{3}$`,
        `$\\sqrt[3]{x}$`
      ],
      correctAnswer: 3,
      explanation: `The answer is $\\sqrt[3]{x}$.

In a fraction exponent, the bottom number tells you which root to take. Here the bottom number is $3$, so it is the cube root:

$$x^{1/3} = \\sqrt[3]{x}$$

The same pattern gives $x^{1/2} = \\sqrt{x}$ and $x^{1/4} = \\sqrt[4]{x}$.

Writing $3\\sqrt{x}$ would mean three times a square root, which is a different thing — the $3$ belongs inside the root symbol, not in front of it.`
    },
    {
      id: 'exprad-core-p2-q4',
      type: 'quiz' as const,
      question: `Simplify $\\sqrt{4} \\cdot \\sqrt{25}$.`,
      options: [
        `$29$`,
        `$10$`,
        `$100$`,
        `$7$`
      ],
      correctAnswer: 1,
      explanation: `The answer is $10$.

Step 1 — Take each square root on its own.

$$\\sqrt{4} = 2 \\quad \\text{because} \\quad 2 \\times 2 = 4$$

$$\\sqrt{25} = 5 \\quad \\text{because} \\quad 5 \\times 5 = 25$$

Step 2 — Multiply the two results.

$$2 \\times 5 = 10$$

Adding the roots instead of multiplying would give $2 + 5 = 7$, but the question has a multiplication dot between them.`
    }
  ]
}
