export const chemIceTablesCalculationsPart6Data = {
  topicSlug: 'ice-tables-calculations',
  sections: [
    {
      id: 'ic6-intro',
      type: 'text' as const,
      content: `
# 🧮 Problem-Solving Workshop: ICE Tables

**Part 6 of 7 — Multiple ICE Table Scenarios**

This workshop presents varied ICE table problems: finding K, finding equilibrium concentrations, using the approximation, and the quadratic. Practice the decision-making process for each type.
      `
    },
    {
      id: 'ic6-decision-tree',
      type: 'text' as const,
      content: `
## Decision Tree for ICE Table Problems

### Step 1: What are you solving for?
- **K unknown**: Use given equilibrium data to find K
- **Equilibrium concentrations unknown**: Use K and initial data to find concentrations

### Step 2: Can you use the approximation?
- Check: $\\frac{[\\text{initial}]}{K} > 100$?
  - **Yes** → Approximate: $[\\text{initial}] - x \\approx [\\text{initial}]$
  - **No** → Full quadratic required

### Step 3: Solve and verify
- Solve for $x$
- Calculate all equilibrium concentrations
- Verify: plug back into K expression
- If approximation used: check 5% test

### Common Patterns

| Pattern | Example |
|---------|---------|
| Perfect square | $\\frac{(2x)^2}{(a-x)^2}$ → take square root |
| Small K with approx | $K = \\frac{x^2}{a}$ → $x = \\sqrt{Ka}$ |
| Full quadratic | $ax^2 + bx + c = 0$ → quadratic formula |
      `
    },
    {
      id: 'ic6-problem1',
      type: 'input-boxes' as const,
      content: `
**Problem 1: Finding K** 🧮

$2\\,\\text{HI}(g) \\rightleftharpoons \\text{H}_2(g) + \\text{I}_2(g)$

Initial: $[\\text{HI}] = 1.00$ M, $[\\text{H}_2] = [\\text{I}_2] = 0$

At equilibrium: $[\\text{HI}] = 0.80$ M

1) What is $x$? (Remember: the coefficient of HI is 2)

2) What is $[\\text{H}_2]$ at equilibrium?

3) What is $K_c$? (Enter to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.10', '0.10', '0.016'],
        hint1: '$[\\text{HI}]_{eq} = 1.00 - 2x = 0.80 \\implies 2x = 0.20 \\implies x = 0.10$',
        hint2: '$[\\text{H}_2] = x = 0.10$ M',
        hint3: '$K_c = \\frac{[\\text{H}_2][\\text{I}_2]}{[\\text{HI}]^2} = \\frac{(0.10)(0.10)}{(0.80)^2}$',
        explanation: '1) $2x = 1.00 - 0.80 = 0.20$, so $x = 0.10$. 2) $[\\text{H}_2] = x = 0.10$ M. 3) $K_c = \\frac{(0.10)(0.10)}{(0.80)^2} = \\frac{0.010}{0.64} = 0.01563 \\approx 0.016$.'
      }
    },
    {
      id: 'ic6-problem2',
      type: 'input-boxes' as const,
      content: `
**Problem 2: Using the Approximation** 🧮

$\\text{COCl}_2(g) \\rightleftharpoons \\text{CO}(g) + \\text{Cl}_2(g)$, $K_c = 2.2 \\times 10^{-10}$

Initial: $[\\text{COCl}_2] = 0.50$ M, $[\\text{CO}] = [\\text{Cl}_2] = 0$

Using the approximation $0.50 - x \\approx 0.50$:

1) Solve: $x = \\sqrt{K_c \\times 0.50}$. What is $x$? (Enter in scientific notation, e.g. 1.0e-5)

2) Does the 5% test pass? (Enter "yes" or "no")

3) What is $[\\text{CO}]$ at equilibrium? (Enter in scientific notation, same as x)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.0e-5', 'yes', '1.0e-5'],
        hint1: '$x = \\sqrt{(2.2 \\times 10^{-10})(0.50)} = \\sqrt{1.1 \\times 10^{-10}}$',
        hint2: '$\\frac{x}{0.50} \\times 100\\% \\ll 5\\%$',
        hint3: '$[\\text{CO}] = x$',
        explanation: '1) $x = \\sqrt{1.1 \\times 10^{-10}} = 1.05 \\times 10^{-5} \\approx 1.0 \\times 10^{-5}$. 2) $\\frac{1.0 \\times 10^{-5}}{0.50} \\times 100\\% = 0.002\\% \\ll 5\\%$, so yes. 3) $[\\text{CO}] = x = 1.0 \\times 10^{-5}$ M.'
      }
    },
    {
      id: 'ic6-problem3',
      type: 'multiple-choice' as const,
      content: `
**Problem 3: Which Method?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$K_c = 0.25$, $[\\text{A}]_0 = 0.10$ M. $[\\text{initial}]/K = 0.10/0.25 = 0.40$. Which method should you use?',
            options: [
              'Small-x approximation (ratio > 100)',
              'Quadratic formula (ratio < 100)',
              'Either method works',
              'Cannot be solved'
            ],
            correctAnswer: 1,
            explanation: '$[\\text{initial}]/K = 0.40 \\ll 100$. The ratio is far below 100, so the approximation is NOT valid. Use the quadratic formula.'
          },
          {
            question: '$K_c = 1.8 \\times 10^{-5}$, $[\\text{HA}]_0 = 0.50$ M. Which method?',
            options: [
              'Quadratic formula',
              'Small-x approximation',
              'Cannot be solved',
              'Need more information'
            ],
            correctAnswer: 1,
            explanation: '$0.50/(1.8 \\times 10^{-5}) = 27{,}778 \\gg 100$. The approximation is valid.'
          }
        ]
      }
    },
    {
      id: 'ic6-problem4',
      type: 'input-boxes' as const,
      content: `
**Problem 4: Non-Zero Initial Products** 🧮

$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$, $K_c = 64$

Initial: $[\\text{H}_2] = 0.50$, $[\\text{I}_2] = 0.50$, $[\\text{HI}] = 0.20$ M

First check: $Q = \\frac{(0.20)^2}{(0.50)(0.50)} = \\frac{0.04}{0.25} = 0.16$. Since $Q < K$, shift right.

1) Using the ICE table with shift right, what is $[\\text{HI}]$ at equilibrium expressed in terms of $x$? (Enter, e.g., "0.20 + 2x")

2) This is a perfect-square case. Taking the square root: $8 = \\frac{0.20 + 2x}{0.50 - x}$. Solve for x. (Round to 3 significant figures)

3) What is $[\\text{HI}]$ at equilibrium? (Round to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.20 + 2x', '0.38', '0.96'],
        hint1: 'HI starts at 0.20 and gains $+2x$.',
        hint2: '$8(0.50 - x) = 0.20 + 2x \\implies 4.0 - 8x = 0.20 + 2x \\implies 3.80 = 10x$',
        hint3: '$[\\text{HI}] = 0.20 + 2(0.38) = 0.20 + 0.76$',
        explanation: '1) $[\\text{HI}]_{eq} = 0.20 + 2x$. 2) $4.0 - 8x = 0.20 + 2x \\implies 3.80 = 10x \\implies x = 0.38$. 3) $[\\text{HI}] = 0.20 + 0.76 = 0.96$ M.'
      }
    },
    {
      id: 'ic6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — ICE Table Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student sets up an ICE table and gets $x = 0.60$ for $[\\text{A}]_0 = 0.50$. What went wrong?',
            options: [
              'Nothing — x can exceed the initial concentration',
              'The concentration would be negative; the student likely made an arithmetic error or assumed the wrong shift direction',
              'K must be recalculated',
              'The reaction doesn\'t reach equilibrium'
            ],
            correctAnswer: 1,
            explanation: '$[\\text{A}]_{eq} = 0.50 - 0.60 = -0.10$, which is impossible. The student either made a calculation error or assumed the wrong direction of shift.'
          },
          {
            question: 'Which is the correct order of steps for an ICE table problem?',
            options: [
              'Find x → Set up ICE → Write K expression → Check',
              'Write K expression → Set up ICE → Substitute → Solve for x → Check',
              'Guess x → Check → Adjust',
              'Calculate Q → Set K = Q → Done'
            ],
            correctAnswer: 1,
            explanation: 'Systematic approach: write the K expression, set up ICE with initial values and changes in terms of x, substitute equilibrium values into K, solve for x, then verify.'
          }
        ]
      }
    }
  ]
}
