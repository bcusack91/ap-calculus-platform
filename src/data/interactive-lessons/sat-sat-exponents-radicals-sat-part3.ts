export const satExponentsPart3Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp3-intro',
      type: 'text' as const,
      content: `
# √ Simplifying Radicals

**Part 3 of 7 — Perfect Squares, Rationalizing & Combining Radicals**

On the SAT you'll need to simplify radical expressions quickly. Here's the roadmap:

1. **Factor** out perfect squares (or cubes).
2. **Rationalize** denominators when needed.
3. **Combine** like radicals just like like terms.

**Key identity:**

$$\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b} \\qquad (a,b \\ge 0)$$
      `
    },
    {
      id: 'sat-exp3-simplify',
      type: 'text' as const,
      content: `
## Simplifying Square Roots

**Method:** Find the largest perfect-square factor, then pull it out.

**Example 1:** $\\sqrt{72}$

$72 = 36 \\times 2$, so $\\sqrt{72} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$.

**Example 2:** $\\sqrt{50x^4 y^3}$

$50 = 25 \\times 2$, $x^4$ is a perfect square, $y^3 = y^2 \\cdot y$.

$$\\sqrt{50x^4 y^3} = 5x^2 y\\sqrt{2y}$$

**Example 3:** $3\\sqrt{48} - 2\\sqrt{27}$

$\\sqrt{48} = 4\\sqrt{3}$ and $\\sqrt{27} = 3\\sqrt{3}$.

$$3(4\\sqrt{3}) - 2(3\\sqrt{3}) = 12\\sqrt{3} - 6\\sqrt{3} = 6\\sqrt{3}$$

---

**SAT Tip:** Memorize perfect squares up to $15^2 = 225$. It saves huge amounts of time.
      `
    },
    {
      id: 'sat-exp3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Practice — Simplifying** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify $\\sqrt{200}$.',
            options: ['$10\\sqrt{2}$', '$2\\sqrt{100}$', '$20\\sqrt{5}$', '$14.1$'],
            correctAnswer: 0,
            explanation: '$200 = 100 \\times 2$, so $\\sqrt{200} = 10\\sqrt{2}$.'
          },
          {
            question: 'Simplify $5\\sqrt{12} + 3\\sqrt{27}$.',
            options: ['$8\\sqrt{39}$', '$19\\sqrt{3}$', '$8\\sqrt{12}$', '$15\\sqrt{3}$'],
            correctAnswer: 1,
            explanation: '$\\sqrt{12} = 2\\sqrt{3}$ and $\\sqrt{27} = 3\\sqrt{3}$. So $5(2\\sqrt{3}) + 3(3\\sqrt{3}) = 10\\sqrt{3} + 9\\sqrt{3} = 19\\sqrt{3}$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp3-rationalize',
      type: 'text' as const,
      content: `
## Rationalizing Denominators

**Why?** The SAT often wants answers with no radical in the denominator.

**Single radical:** Multiply top and bottom by the radical.

$$\\frac{3}{\\sqrt{5}} = \\frac{3}{\\sqrt{5}} \\cdot \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{3\\sqrt{5}}{5}$$

**Binomial denominator:** Multiply by the conjugate.

$$\\frac{2}{3 + \\sqrt{7}} = \\frac{2(3 - \\sqrt{7})}{(3)^2 - (\\sqrt{7})^2} = \\frac{2(3-\\sqrt{7})}{9-7} = \\frac{2(3-\\sqrt{7})}{2} = 3 - \\sqrt{7}$$

**SAT Tip:** If an answer choice has a radical in the denominator and another doesn't, rationalize to compare.
      `
    },
    {
      id: 'sat-exp3-input',
      type: 'input-boxes' as const,
      content: `
**Simplify each — enter the coefficient in front of the radical.** 🧮

1) $\\sqrt{98}$ = ?$\\sqrt{2}$ → enter the coefficient

2) $\\sqrt{75}$ = ?$\\sqrt{3}$ → enter the coefficient

3) $2\\sqrt{45} + 3\\sqrt{20}$ = ?$\\sqrt{5}$ → enter the coefficient
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '5', '12'],
        hint1: '$98 = 49 \\times 2$, so $\\sqrt{98} = 7\\sqrt{2}$.',
        hint2: '$75 = 25 \\times 3$, so $\\sqrt{75} = 5\\sqrt{3}$.',
        hint3: '$\\sqrt{45} = 3\\sqrt{5}$, $\\sqrt{20} = 2\\sqrt{5}$. So $2(3\\sqrt{5}) + 3(2\\sqrt{5}) = 6\\sqrt{5} + 6\\sqrt{5} = 12\\sqrt{5}$.',
        explanation: '1) $7$. 2) $5$. 3) $12$.'
      }
    },
    {
      id: 'sat-exp3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each expression to its rationalized form.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{4}{\\sqrt{2}}$',
            options: ['$2\\sqrt{2}$', '$4\\sqrt{2}$', '$\\frac{\\sqrt{2}}{4}$', '$2$']
          },
          {
            label: '$\\frac{1}{\\sqrt{3}}$',
            options: ['$\\frac{\\sqrt{3}}{3}$', '$\\frac{3}{\\sqrt{3}}$', '$\\sqrt{3}$', '$\\frac{1}{3}$']
          },
          {
            label: '$\\frac{6}{\\sqrt{6}}$',
            options: ['$1$', '$6$', '$\\sqrt{6}$', '$\\frac{6\\sqrt{6}}{6}$']
          }
        ],
        correctAnswers: ['$2\\sqrt{2}$', '$\\frac{\\sqrt{3}}{3}$', '$\\sqrt{6}$'],
        hint1: '$\\frac{4}{\\sqrt{2}} = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$.',
        hint2: '$\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$.',
        hint3: '$\\frac{6}{\\sqrt{6}} = \\frac{6\\sqrt{6}}{6} = \\sqrt{6}$.',
        explanation: 'Multiply numerator and denominator by the radical in the denominator.'
      }
    },
    {
      id: 'sat-exp3-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'What is the simplified form of $\\frac{\\sqrt{18} + \\sqrt{8}}{\\sqrt{2}}$?',
            options: ['$5$', '$3 + 2$', '$\\sqrt{26}$', '$4$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{18} = 3\\sqrt{2}$, $\\sqrt{8} = 2\\sqrt{2}$. Numerator = $5\\sqrt{2}$. Divide by $\\sqrt{2}$: answer is $5$.'
          },
          {
            question: 'If $\\sqrt{x} = 3\\sqrt{2}$, what is $x$?',
            options: ['$6$', '$9$', '$12$', '$18$'],
            correctAnswer: 3,
            explanation: 'Square both sides: $x = (3\\sqrt{2})^2 = 9 \\cdot 2 = 18$.'
          }
        ]
      }
    }
  ]
}
