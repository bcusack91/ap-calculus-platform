export const satComplexPart1Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx1-intro',
      type: 'text' as const,
      content: `
# 🔢 The Imaginary Unit $i$

**Part 1 of 7 — Definition, Powers of $i$, and the Cycle**

The imaginary unit $i$ was invented to give meaning to the square root of negative numbers:

$$
i = \\sqrt{-1} \\qquad i^2 = -1
$$

| Expression | Value |
|------------|-------|
| $\\sqrt{-4}$ | $2i$ |
| $\\sqrt{-9}$ | $3i$ |
| $\\sqrt{-25}$ | $5i$ |

**General rule:** $\\sqrt{-a} = i\\sqrt{a}$ for any positive number $a$.

A **complex number** has the form $a + bi$, where $a$ is the **real part** and $b$ is the **imaginary part**.
      `
    },
    {
      id: 'sat-cx1-powers',
      type: 'text' as const,
      content: `
## Powers of $i$ — The 4-Step Cycle

The powers of $i$ repeat every 4:

| Power | Value | Why |
|-------|-------|-----|
| $i^1$ | $i$ | Definition |
| $i^2$ | $-1$ | Definition |
| $i^3$ | $-i$ | $i^2 \\cdot i = -1 \\cdot i = -i$ |
| $i^4$ | $1$ | $i^2 \\cdot i^2 = (-1)(-1) = 1$ |
| $i^5$ | $i$ | Cycle restarts |

**Shortcut:** To find $i^n$, divide $n$ by $4$ and look at the **remainder**:

| Remainder | $i^n$ equals |
|-----------|-------------|
| $0$ | $1$ |
| $1$ | $i$ |
| $2$ | $-1$ |
| $3$ | $-i$ |

**Example:** $i^{23}$. Divide $23 \\div 4 = 5$ remainder $3$. So $i^{23} = -i$.

**Example:** $i^{100}$. Divide $100 \\div 4 = 25$ remainder $0$. So $i^{100} = 1$.
      `
    },
    {
      id: 'sat-cx1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Powers of $i$** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of $i^{42}$?',
            options: ['$1$', '$i$', '$-1$', '$-i$'],
            correctAnswer: 2,
            explanation: '$42 \\div 4 = 10$ remainder $2$, so $i^{42} = i^2 = -1$.'
          },
          {
            question: 'What is $i^{17} + i^{18}$?',
            options: ['$0$', '$1 + i$', '$i - 1$', '$-1 - i$'],
            correctAnswer: 2,
            explanation: '$17 \\div 4$ has remainder $1$, so $i^{17} = i$. $18 \\div 4$ has remainder $2$, so $i^{18} = -1$. Sum: $i + (-1) = i - 1$.'
          }
        ]
      }
    },
    {
      id: 'sat-cx1-simplify',
      type: 'text' as const,
      content: `
## Simplifying Square Roots of Negatives

Always extract $i$ first, then simplify the radical:

**Example 1:** $\\sqrt{-48}$
$$\\sqrt{-48} = i\\sqrt{48} = i\\sqrt{16 \\cdot 3} = 4i\\sqrt{3}$$

**Example 2:** $\\sqrt{-72}$
$$\\sqrt{-72} = i\\sqrt{72} = i\\sqrt{36 \\cdot 2} = 6i\\sqrt{2}$$

**Example 3:** $3\\sqrt{-50}$
$$3\\sqrt{-50} = 3 \\cdot i\\sqrt{50} = 3i\\sqrt{25 \\cdot 2} = 15i\\sqrt{2}$$

---

**⚠️ Common mistake:** $\\sqrt{-4} \\cdot \\sqrt{-9} \\neq \\sqrt{36} = 6$. You must convert to $i$-form first: $(2i)(3i) = 6i^2 = -6$.
      `
    },
    {
      id: 'sat-cx1-input1',
      type: 'input-boxes' as const,
      content: `
**Simplify these expressions.** 🧮

Write answers using $i$ (e.g. type "5i" or "-3i" or "1").

1) $i^{36} = $

2) $i^{75} = $

3) $\\sqrt{-64} = $
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '-i', '8i'],
        hint1: '$36 \\div 4 = 9$ remainder $0$. Remainder $0$ means $i^{36} = 1$.',
        hint2: '$75 \\div 4 = 18$ remainder $3$. Remainder $3$ means $i^{75} = -i$.',
        hint3: '$\\sqrt{-64} = i\\sqrt{64} = 8i$.',
        explanation: '$i^{36}=1$ (rem 0), $i^{75}=-i$ (rem 3), $\\sqrt{-64}=8i$.'
      }
    },
    {
      id: 'sat-cx1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Match each expression to its simplified value.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$i^{20}$',
            options: ['$1$', '$i$', '$-1$', '$-i$']
          },
          {
            label: '$i^{31}$',
            options: ['$1$', '$i$', '$-1$', '$-i$']
          },
          {
            label: '$i^{50}$',
            options: ['$1$', '$i$', '$-1$', '$-i$']
          }
        ],
        correctAnswers: ['$1$', '$-i$', '$-1$'],
        hint1: '$20 \\div 4 = 5$ remainder $0$, so $i^{20} = 1$.',
        hint2: '$31 \\div 4 = 7$ remainder $3$, so $i^{31} = -i$.',
        hint3: '$50 \\div 4 = 12$ remainder $2$, so $i^{50} = -1$.',
        explanation: 'Divide the exponent by 4 and use the remainder: 0→1, 1→i, 2→−1, 3→−i.'
      }
    },
    {
      id: 'sat-cx1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is equal to $i^4 + i^8 + i^{12} + i^{16}$?',
            options: ['$4$', '$4i$', '$0$', '$-4$'],
            correctAnswer: 0,
            explanation: 'Each exponent is divisible by 4, so each term equals $1$. The sum is $1+1+1+1=4$.'
          },
          {
            question: 'What is the value of $\\frac{i^{25}}{i^{21}}$?',
            options: ['$1$', '$i$', '$-1$', '$-i$'],
            correctAnswer: 0,
            explanation: '$\\frac{i^{25}}{i^{21}} = i^{25-21} = i^4 = 1$.'
          }
        ]
      }
    }
  ]
}
