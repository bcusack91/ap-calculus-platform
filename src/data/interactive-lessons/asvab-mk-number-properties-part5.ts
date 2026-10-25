export const asvabMkNumberPropertiesPart5Data = {
  topicSlug: 'asvab-mk-number-properties',
  sections: [
    {
      id: 'mknp5-intro',
      type: 'text' as const,
      content: `# 🔢 Number Properties, Exponents and Roots

**Part 5 of 7 — Square Roots and Radicals**

Square roots are named in the official description of MK, so expect them. Most root questions are quick if you know your perfect squares.

### Perfect Squares to Memorize

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $n^2$ | $1$ | $4$ | $9$ | $16$ | $25$ | $36$ | $49$ | $64$ | $81$ | $100$ |

| $n$ | $11$ | $12$ | $13$ | $14$ | $15$ | $16$ | $20$ | $25$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $n^2$ | $121$ | $144$ | $169$ | $196$ | $225$ | $256$ | $400$ | $625$ |

The **square root** $\\sqrt{x}$ is the nonnegative number whose square is $x$: $\\sqrt{144} = 12$.

### Cube Roots

$\\sqrt[3]{x}$ is the number whose **cube** is $x$. Know $\\sqrt[3]{8} = 2$, $\\sqrt[3]{27} = 3$, $\\sqrt[3]{64} = 4$, $\\sqrt[3]{125} = 5$, $\\sqrt[3]{1{,}000} = 10$. A cube root of a negative number is negative: $\\sqrt[3]{-27} = -3$.

### Estimating a Root

$\\sqrt{55}$ is between $\\sqrt{49} = 7$ and $\\sqrt{64} = 8$, and closer to $7$ (since $55$ is closer to $49$). So $\\sqrt{55} \\approx 7.4$. On the ASVAB, estimating is often enough to pick the right choice.

### Roots of Fractions and Decimals

$$\\sqrt{\\frac{9}{25}} = \\frac{3}{5} \\qquad \\sqrt{0.49} = 0.7 \\qquad \\sqrt{0.04} = 0.2$$

Check decimals by squaring: $0.7 \\times 0.7 = 0.49$. ✔`
    },
    {
      id: 'mknp5-mc-basic',
      type: 'multiple-choice' as const,
      content: '**Roots without a calculator.** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is $\\sqrt{196}$?',
            options: ['$13$', '$98$', '$14$', '$16$'],
            correctAnswer: 2,
            explanation: '$14 \\cdot 14 = 196$. Half of $196$ is $98$, which is not a root; $13^2 = 169$ and $16^2 = 256$.'
          },
          {
            question: '$\\sqrt{90}$ lies between which two consecutive whole numbers?',
            options: ['$8$ and $9$', '$9$ and $10$', '$44$ and $46$', '$10$ and $11$'],
            correctAnswer: 1,
            explanation: '$9^2 = 81$ and $10^2 = 100$, and $90$ is between them, so $\\sqrt{90}$ is between $9$ and $10$.'
          },
          {
            question: 'What is $\\sqrt[3]{-64}$?',
            options: ['$-4$', '$4$', '$-8$', 'It is undefined'],
            correctAnswer: 0,
            explanation: '$(-4)^3 = -64$, so the cube root is $-4$. A negative number has no real square root, but it does have a real cube root.'
          }
        ]
      }
    },
    {
      id: 'mknp5-simplify',
      type: 'text' as const,
      content: `## Simplifying Radicals

Answer choices often show roots in **simplest form**, like $5\\sqrt{3}$ instead of $\\sqrt{75}$.

**Method:** find the **largest perfect square factor**, and take its root out front.

$$\\sqrt{75} = \\sqrt{25 \\cdot 3} = \\sqrt{25} \\cdot \\sqrt{3} = 5\\sqrt{3}$$

$$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$$

If you pick a smaller square, you just have to keep going: $\\sqrt{72} = \\sqrt{4 \\cdot 18} = 2\\sqrt{18} = 2 \\cdot 3\\sqrt{2} = 6\\sqrt{2}$.

### Multiplying and dividing roots

$$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab} \\qquad \\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$$

- $\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{36} = 6$
- $\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{25} = 5$
- $(2\\sqrt{5})(3\\sqrt{5}) = 6 \\cdot 5 = 30$

### Adding and subtracting roots

Only **like radicals** (same number under the root) combine, the way like terms do:

$$4\\sqrt{3} + 2\\sqrt{3} = 6\\sqrt{3}$$

$\\sqrt{2} + \\sqrt{3}$ does **not** simplify. Sometimes simplifying first creates like radicals:

$$\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$$

> **Key Fact:** Roots do not split over addition. $\\sqrt{9 + 16} = \\sqrt{25} = 5$, but $\\sqrt{9} + \\sqrt{16} = 7$. The wrong one is almost always an answer choice.`
    },
    {
      id: 'mknp5-mc-simplify',
      type: 'multiple-choice' as const,
      content: '**Simplify.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which is $\\sqrt{48}$ in simplest form?',
            options: ['$2\\sqrt{12}$', '$16\\sqrt{3}$', '$3\\sqrt{4}$', '$4\\sqrt{3}$'],
            correctAnswer: 3,
            explanation: 'The largest perfect square factor of $48$ is $16$: $\\sqrt{16 \\cdot 3} = 4\\sqrt{3}$. $2\\sqrt{12}$ equals it but is not simplest, because $12$ still has the square factor $4$; $16\\sqrt{3}$ forgets to take the root of $16$.'
          },
          {
            question: 'What is $\\sqrt{8} \\cdot \\sqrt{18}$?',
            options: ['$12$', '$26$', '$\\sqrt{26}$', '$144$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{8 \\cdot 18} = \\sqrt{144} = 12$. Adding under the root ($\\sqrt{26}$) is not the product rule, and $144$ forgets the root.'
          },
          {
            question: 'Simplify $\\sqrt{20} + \\sqrt{45}$.',
            options: ['$\\sqrt{65}$', '$5\\sqrt{5}$', '$6\\sqrt{5}$', '$13\\sqrt{5}$'],
            correctAnswer: 1,
            explanation: '$\\sqrt{20} = 2\\sqrt{5}$ and $\\sqrt{45} = 3\\sqrt{5}$, so the sum is $5\\sqrt{5}$. Roots do not add under one root sign, so $\\sqrt{65}$ is wrong.'
          }
        ]
      }
    },
    {
      id: 'mknp5-input',
      type: 'input-boxes' as const,
      content: `**Fill in the number.** ✍️

**1)** $\\sqrt{98} = a\\sqrt{2}$. What is $a$?

**2)** $\\sqrt{0.81}$ as a decimal:

**3)** $\\sqrt{36 + 64}$:

**4)** $(5\\sqrt{2})^2$:`,
      exercise: {
        boxes: 4,
        correctAnswers: ['7', '0.9', '10', '50'],
        hint1: '$98 = 49 \\cdot 2$.',
        hint2: 'Which decimal times itself is $0.81$?',
        hint3: 'Add under the root first.',
        explanation: '(1) $\\sqrt{49 \\cdot 2} = 7\\sqrt{2}$. (2) $0.9 \\times 0.9 = 0.81$. (3) $\\sqrt{100} = 10$ (not $6 + 8 = 14$). (4) $5^2 \\cdot (\\sqrt{2})^2 = 25 \\cdot 2 = 50$.'
      }
    },
    {
      id: 'mknp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Know the perfect squares through $15^2 = 225$, plus the cubes $8, 27, 64, 125$
- Estimate a root between the two perfect squares around it
- Simplify with the **largest perfect square factor**: $\\sqrt{75} = 5\\sqrt{3}$
- $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$; only **like radicals** add
- $\\sqrt{a + b} \\ne \\sqrt{a} + \\sqrt{b}$

> **Up Next:** Part 6 — how these questions are built to trap you, and how to move fast.`
    }
  ]
};
