export const chemIceTablesCalculationsPart6Data = {
  topicSlug: 'ice-tables-calculations',
  sections: [
    {
      id: 'ic6-intro',
      type: 'text' as const,
      content: `# 🧮 Problem-Solving Workshop: ICE Tables

**Part 6 of 7 — Multiple ICE Table Scenarios**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'ic6-decision-tree',
      type: 'text' as const,
      content: `
## 📌 Decision Tree for ICE Table Problems

> 🔑 **Step 1 — What are you solving for?**
> - **K unknown**: Use given equilibrium data to find K
> - **Equilibrium concentrations unknown**: Use K and initial data to find concentrations


---

> 💡 **Step 2 — Can you use the approximation?** Is $K$ very small compared with $[\\text{initial}]$?
> - **Yes** → Approximate $[\\text{initial}] - x \\approx [\\text{initial}]$, then confirm that $x$ is under 5% of $[\\text{initial}]$
> - **No** → Full quadratic required


---

> ⚠️ **Step 3 — Solve and verify:**
> - Solve for $x$
> - Calculate all equilibrium concentrations
> - Verify: plug back into K expression
> - If approximation used: check 5% test


---

### Common Patterns

| Pattern | Example |
|---------|---------|
| Perfect square | $\\frac{(2x)^2}{(a-x)^2}$ → take square root |
| Small K with approx | $K = \\frac{x^2}{a}$ → $x = \\sqrt{Ka}$ |
| Full quadratic | $ax^2 + bx + c = 0$ → quadratic formula |

### Key Formulas

$$\\boxed{x = \\sqrt{K \\cdot [\\text{initial}]}} \\quad \\text{(small-K approximation)}$$

$$\\boxed{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}} \\quad \\text{(quadratic formula)}$$
      `
    },
    {
      id: 'ic6-problem1',
      type: 'input-boxes' as const,
      content: `
**Problem 1: Finding K** 🧮

> **Problem:** For $2\\,\\text{HI}(g) \\rightleftharpoons \\text{H}_2(g) + \\text{I}_2(g)$, initial $[\\text{HI}] = 1.00$ M, $[\\text{H}_2] = [\\text{I}_2] = 0$. At equilibrium, $[\\text{HI}] = 0.80$ M. Find $K_c$.

**1)** What is $x$? (Remember: the coefficient of HI is 2)

**2)** What is $[\\text{H}_2]$ at equilibrium?

**3)** What is $K_c$? (Enter to 3 significant figures)
      `,
      exercise: {
        questions: [{ question: '1)', answer: '0.10', acceptableAnswers: ['0.10'] }, { question: '2)', answer: '0.10', acceptableAnswers: ['0.10'] }, { question: '3)', answer: '0.0156', acceptableAnswers: ['0.0156', '0.016'] }],
        hint1: '$[\\text{HI}]_{eq} = 1.00 - 2x = 0.80 \\implies 2x = 0.20 \\implies x = 0.10$',
        hint2: '$[\\text{H}_2] = x = 0.10$ M',
        hint3: '$K_c = \\frac{[\\text{H}_2][\\text{I}_2]}{[\\text{HI}]^2} = \\frac{(0.10)(0.10)}{(0.80)^2}$',
        explanation: '1) $2x = 1.00 - 0.80 = 0.20$, so $x = 0.10$. 2) $[\\text{H}_2] = x = 0.10$ M. 3) $K_c = \\frac{(0.10)(0.10)}{(0.80)^2} = \\frac{0.010}{0.64} = 0.0156$.'
      }
    },
    {
      id: 'ic6-problem2',
      type: 'input-boxes' as const,
      content: `
**Problem 2: Using the Approximation** 🧮

> **Problem:** For $\\text{COCl}_2(g) \\rightleftharpoons \\text{CO}(g) + \\text{Cl}_2(g)$ with $K_c = 2.2 \\times 10^{-10}$, initial $[\\text{COCl}_2] = 0.50$ M, $[\\text{CO}] = [\\text{Cl}_2] = 0$. Find the equilibrium concentrations.

Using the approximation $0.50 - x \\approx 0.50$:

**1)** Solve: $x = \\sqrt{K_c \\times 0.50}$. What is $x$? (Enter in scientific notation, e.g. 4.2e-7)

**2)** Does the 5% test pass? (Enter "yes" or "no")

**3)** What is $[\\text{CO}]$ at equilibrium? (Enter in scientific notation, same as x)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        questions: [{ question: '1)', answer: '1.05e-5', acceptableAnswers: ['1.05e-5', '1.0e-5'] }, { question: '2)', answer: 'yes', acceptableAnswers: ['yes'] }, { question: '3)', answer: '1.05e-5', acceptableAnswers: ['1.05e-5', '1.0e-5'] }],
        hint1: '$x = \\sqrt{(2.2 \\times 10^{-10})(0.50)} = \\sqrt{1.1 \\times 10^{-10}}$',
        hint2: '$\\frac{x}{0.50} \\times 100\\% \\ll 5\\%$',
        hint3: '$[\\text{CO}] = x$',
        explanation: '1) $x = \\sqrt{1.1 \\times 10^{-10}} = 1.05 \\times 10^{-5}$. 2) $\\frac{1.05 \\times 10^{-5}}{0.50} \\times 100\\% = 0.0021\\% \\ll 5\\%$, so yes. 3) $[\\text{CO}] = x = 1.05 \\times 10^{-5}$ M.'
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
            question: 'For $\\text{A} \\rightleftharpoons \\text{B} + \\text{C}$, $K_c = 0.25$ and $[\\text{A}]_0 = 0.10$ M. Assuming x is small gives $x = \\sqrt{(0.25)(0.10)} = 0.16$ M. Which method should you use?',
            options: [
              'Keep the small-x answer, since x is positive',
              'Quadratic formula, since x is far over 5% of 0.10 M',
              'Either method works, since both give the same x',
              'Neither; x cannot be found when K > $[\\text{A}]_0$'
            ],
            correctAnswer: 1,
            explanation: 'The approximate x (0.16 M) is 160% of the 0.10 M starting concentration, far over 5% and more than the whole starting amount, so the approximation fails. Use the quadratic formula, which works for any K. A positive x does not make the approximation valid, the two methods give very different x here, and the quadratic finds x whatever the size of K.'
          },
          {
            question: '$K_c = 1.8 \\times 10^{-5}$, $[\\text{HA}]_0 = 0.50$ M. Which method?',
            options: [
              'Quadratic formula',
              'Small-x approximation',
              'Plug directly into K',
              'Need more information'
            ],
            correctAnswer: 1,
            explanation: '$K_c$ is tiny compared with 0.50 M, so assume x is small: $x = \\sqrt{(1.8 \\times 10^{-5})(0.50)} = 3.0 \\times 10^{-3}$ M, which is 0.6% of 0.50 M. That is under 5%, so the approximation is valid and no quadratic is needed.'
          }
        ]
      }
    },
    {
      id: 'ic6-problem4',
      type: 'input-boxes' as const,
      content: `
**Problem 4: Non-Zero Initial Products** 🧮

> **Problem:** For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$ with $K_c = 64$, initial $[\\text{H}_2] = 0.50$, $[\\text{I}_2] = 0.50$, $[\\text{HI}] = 0.20$ M. Find the equilibrium concentrations.

> **Solution:** First check: $Q = \\frac{(0.20)^2}{(0.50)(0.50)} = \\frac{0.04}{0.25} = 0.16$. Since $Q < K$, shift right.

**1)** Using the ICE table with shift right, what is $[\\text{HI}]$ at equilibrium expressed in terms of $x$? (Enter, e.g., "0.20 + 2x")

**2)** This is a perfect-square case. Taking the square root: $8 = \\frac{0.20 + 2x}{0.50 - x}$. Solve for x. (Round to 3 significant figures)

**3)** What is $[\\text{HI}]$ at equilibrium? (Round to 3 significant figures)
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
              'Nothing, since x is a change and can exceed $[\\text{A}]_0$',
              '$[\\text{A}]$ would be negative; recheck the math and shift direction',
              'The K value is wrong and must be recalculated first',
              'The reaction goes all the way to completion, so x is capped at 0.50 M'
            ],
            correctAnswer: 1,
            explanation: '$[\\text{A}]_{eq} = 0.50 - 0.60 = -0.10$, which is impossible. The student either made a calculation error or assumed the wrong direction of shift. Capping x at 0.50 just hides the error; K is given data and is not the problem.'
          },
          {
            question: 'Which is the correct order of steps for an ICE table problem?',
            options: [
              'Find x → Set up ICE → Write K expression → Check',
              'Write K expression → Set up ICE → Substitute → Solve for x → Check',
              'Guess x → Substitute into K → Adjust until it fits',
              'Calculate Q → Set Q equal to K → Solve for x → Check'
            ],
            correctAnswer: 1,
            explanation: 'Systematic approach: write the K expression, set up ICE with initial values and changes in terms of x, substitute equilibrium values into K, solve for x, then verify.'
          }
        ]
      }
    }
  ]
}
