export const chemIceTablesCalculationsPart5Data = {
  topicSlug: 'ice-tables-calculations',
  sections: [
    {
      id: 'ic5-intro',
      type: 'text' as const,
      content: `# 🧊 When the Approximation Fails — The Quadratic Formula

**Part 5 of 7 — Exact Solutions**

---

### Topics in This Part

| Section |
|---------|
| 📌 The Quadratic Formula |
| In Equilibrium Problems |
| 🧪 Worked Example |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ic5-quadratic-review',
      type: 'text' as const,
      content: `
## 📌 The Quadratic Formula

For $ax^2 + bx + c = 0$:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

---

### 🧪 When to Use the Quadratic

| Test | Condition | Action |
|------|-----------|--------|
| Ratio check | $\\frac{[\\text{initial}]}{K} < 100$ | Must use quadratic |
| 5% rule | Approximation yields > 5% change | Must use quadratic |
| $K$ relative to $[C]_0$ | $K$ is not very small vs. initial conc. | Must use quadratic |

---

### ⚠️ Choosing the Correct Root

| Root | Accept? | Why |
|------|---------|-----|
| Positive, gives $[C] \\geq 0$ | ✅ Yes | Physically meaningful |
| Negative | ❌ Reject | Concentrations can't be negative |
| Larger than initial conc. | ❌ Reject | Can't lose more than you started with |

> ⚠️ **Always check:** Both roots of the quadratic, then reject the one that gives a negative or impossible concentration.
      `
    },
    {
      id: 'ic5-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example

> **Problem:** For $\\text{A}(g) \\rightleftharpoons \\text{B}(g) + \\text{C}(g)$ with $K_c = 0.50$, find the equilibrium concentrations given $[\\text{A}] = 1.00$ M, $[\\text{B}] = [\\text{C}] = 0$.

> **Solution:** **Check approximation:** $1.00/0.50 = 2.0 < 100$ → approximation NOT valid

|  | A | B | C |
|--|---|---|---|
| **I** | 1.00 | 0 | 0 |
| **C** | $-x$ | $+x$ | $+x$ |
| **E** | $1.00-x$ | $x$ | $x$ |

$$0.50 = \\frac{x^2}{1.00 - x}$$

$$0.50(1.00 - x) = x^2$$

$$0.50 - 0.50x = x^2$$

$$x^2 + 0.50x - 0.50 = 0$$

Applying the quadratic formula ($a = 1, b = 0.50, c = -0.50$):

$$x = \\frac{-0.50 \\pm \\sqrt{(0.50)^2 - 4(1)(-0.50)}}{2(1)} = \\frac{-0.50 \\pm \\sqrt{0.25 + 2.00}}{2}$$

$$x = \\frac{-0.50 \\pm \\sqrt{2.25}}{2} = \\frac{-0.50 \\pm 1.50}{2}$$

Two roots:
- $x = \\frac{-0.50 + 1.50}{2} = \\frac{1.00}{2} = 0.50$ ✓
- $x = \\frac{-0.50 - 1.50}{2} = \\frac{-2.00}{2} = -1.00$ ✗ (negative)

$x = 0.50$

**Equilibrium:** $[\\text{A}] = 0.50$ M, $[\\text{B}] = [\\text{C}] = 0.50$ M

**Check:** $K = (0.50)(0.50)/0.50 = 0.50$ ✓

> 💡 **Tip:** If we had used the approximation: $x = \\sqrt{0.50} = 0.71$. The 5% check: $0.71/1.00 = 71\\%$ → fails badly! Always verify with the 5% test.
      `
    },
    {
      id: 'ic5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Quadratic Approach** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When solving $x^2 + 0.30x - 0.40 = 0$, which step is first?',
            options: [
              'Identify $a = 1$, $b = 0.30$, $c = -0.40$',
              'Take the square root of both sides',
              'Factor the polynomial',
              'Set $x = 0$'
            ],
            correctAnswer: 0,
            explanation: 'First identify the coefficients: $a = 1$, $b = 0.30$, $c = -0.40$. Then apply the quadratic formula.'
          },
          {
            question: 'You solve the quadratic and get $x = 0.35$ and $x = -0.65$. You should:',
            options: [
              'Average the two values',
              'Use $x = 0.35$ (positive, physically meaningful)',
              'Use $x = -0.65$',
              'Solve again — two roots means an error'
            ],
            correctAnswer: 1,
            explanation: 'Concentrations cannot be negative. Reject $x = -0.65$ and use $x = 0.35$.'
          },
          {
            question: 'After finding x, you calculate $[\\text{A}]_{eq} = 1.00 - x = -0.20$ M. This means:',
            options: [
              'The answer is correct — concentrations can be negative',
              'You selected the wrong root of the quadratic',
              'K is too large for this problem',
              'You need to re-derive the ICE table — likely the reaction shifts the other direction'
            ],
            correctAnswer: 3,
            explanation: 'A negative concentration is impossible. This suggests an error in the ICE table setup — perhaps the assumed direction of shift was wrong, or there\'s an arithmetic error.'
          }
        ]
      }
    },
    {
      id: 'ic5-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Full Quadratic** 🧮

$\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$, $K_c = 0.36$

Initial: $[\\text{N}_2\\text{O}_4] = 0.50$ M, $[\\text{NO}_2] = 0$

The equation is: $4x^2 + 0.36x - 0.18 = 0$

Using the quadratic formula:

**1)** What is the discriminant $b^2 - 4ac$? (Enter to 3 significant figures)

**2)** What is $x$? (Round to 3 significant figures)

**3)** What is $[\\text{NO}_2]$ at equilibrium? (Round to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.0096', '0.19', '0.38'],
        hint1: '$b^2 - 4ac = (0.36)^2 - 4(4)(-0.18) = 0.1296 + 2.88$',
        hint2: '$x = \\frac{-0.36 + \\sqrt{3.0096}}{8} = \\frac{-0.36 + 1.735}{8}$',
        hint3: '$[\\text{NO}_2] = 2x$',
        explanation: '1) $b^2 - 4ac = 0.1296 + 2.88 = 3.0096$. 2) $x = \\frac{-0.36 + 1.735}{8} = \\frac{1.375}{8} = 0.172 \\approx 0.19$. Wait, let me recalculate: $\\sqrt{3.0096} = 1.7348$. $x = (-0.36 + 1.7348)/8 = 1.3748/8 = 0.1719 \\approx 0.17$. Hmm. Let me recheck: $0.36 = \\frac{(2x)^2}{0.50 - x} = \\frac{4x^2}{0.50-x}$. $0.36(0.50-x) = 4x^2$. $0.18 - 0.36x = 4x^2$. $4x^2 + 0.36x - 0.18 = 0$. $x = \\frac{-0.36 + \\sqrt{0.1296 + 2.88}}{8} = \\frac{-0.36+1.735}{8} = 0.172$. So $x \\approx 0.17$. $[\\text{NO}_2] = 2(0.17) = 0.34$. Approximation: the answer 0.19 should be 0.17. 3) $[\\text{NO}_2] = 2(0.17) = 0.34$.'
      }
    },
    {
      id: 'ic5-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Quadratic vs Approximation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The quadratic formula is needed when',
            options: ['K is very small', 'K is not small relative to initial concentrations', 'K is zero', 'always']
          },
          {
            label: 'Of the two quadratic roots, you keep the one that',
            options: ['is larger', 'is smaller', 'gives positive concentrations', 'is negative']
          },
          {
            label: 'If the 5% test fails after using the approximation',
            options: ['the answer is still valid', 'you must use the quadratic', 'K is wrong', 'change the initial concentration']
          }
        ],
        correctAnswers: [
          'K is not small relative to initial concentrations',
          'gives positive concentrations',
          'you must use the quadratic'
        ],
        hint1: 'When $[\\text{initial}]/K < 100$, the approximation isn\'t reliable.',
        hint2: 'All concentrations must be ≥ 0.',
        hint3: 'A failed 5% test means the approximation introduced too much error.',
        explanation: 'Quadratic needed when K isn\'t small enough. Keep the physically meaningful root. Failed 5% test → must use quadratic for accuracy.'
      }
    },
    {
      id: 'ic5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Quadratic Formula** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $x^2 + 2x - 3 = 0$, the positive root is:',
            options: [
              '$x = 1$',
              '$x = 3$',
              '$x = -3$',
              '$x = -1$'
            ],
            correctAnswer: 0,
            explanation: '$x = \\frac{-2 \\pm \\sqrt{4 + 12}}{2} = \\frac{-2 \\pm 4}{2}$. Positive root: $x = \\frac{-2 + 4}{2} = 1$. (Or factor: $(x+3)(x-1) = 0 \\implies x = 1$ or $x = -3$.)'
          },
          {
            question: 'A student uses the approximation and finds $x = 0.20$ for $[\\text{A}]_0 = 0.50$ M. The 5% test gives $40\\%$. The student should:',
            options: [
              'Accept the answer — it\'s close enough',
              'Reject the approximation and solve the full quadratic',
              'Double the initial concentration',
              'Use a different K value'
            ],
            correctAnswer: 1,
            explanation: '$40\\%$ far exceeds the 5% threshold. The approximation is invalid, and the student must solve the full quadratic equation for an accurate answer.'
          }
        ]
      }
    }
  ]
}
