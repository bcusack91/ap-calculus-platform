export const asvabMkAlgebraEquationsPart1Data = {
  topicSlug: 'asvab-mk-algebra-equations',
  sections: [
    {
      id: 'mkle1-intro',
      type: 'text' as const,
      content: `# ⚖️ Linear Equations and Inequalities

**Part 1 of 7 — Algebra on the ASVAB: Expressions and Substitution**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Algebra on the ASVAB: expressions and substitution** |
| 2 | Solving linear equations |
| 3 | Turning words into equations |
| 4 | Linear inequalities |
| 5 | Systems of two equations |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What This Looks Like on the ASVAB

Mathematics Knowledge (MK) is the fifth subtest on the CAT-ASVAB, right after Paragraph Comprehension. You get **15 scored questions in 31 minutes**, so about **2 minutes per question**. Every question has **four answer choices**, and **no calculator** is allowed. At MEPS you get two sheets of scratch paper and two pencils, and you can ask for more.

The official description of MK includes "algebraic operations and equations," and one of the official sample topics is solving an equation like $x + a = b$. Expect several MK questions that come down to the skills in this lesson:

- finding the value of an expression when you are told what the letters equal
- solving an equation for $x$
- solving an inequality and picking the matching graph
- writing an equation from a sentence
- solving two equations together

MK is one of the **four AFQT subtests** (AR, MK, WK and PC). Your AFQT is built from AR + MK + 2·VE, so every MK point you pick up here helps decide whether you can enlist, not just which jobs you qualify for.

> **Good news:** algebra on the ASVAB is the same handful of moves, over and over. Learn the moves and the questions start to look familiar.`
    },
    {
      id: 'mkle1-warmup',
      type: 'multiple-choice' as const,
      content: `**Warm-up.** 🎯 Three quick questions to see where you are. No pressure: this is just a starting point.`,
      exercise: {
        questions: [
          {
            question: 'If $x = 4$, what is the value of $3x - 5$?',
            options: ['$29$', '$7$', '$-3$', '$12$'],
            correctAnswer: 1,
            explanation: '$3x$ means $3$ times $x$: $3(4) - 5 = 12 - 5 = 7$. Reading $3x$ as the two-digit number $34$ gives $29$, computing $3(4 - 5)$ gives $-3$, and stopping at $3 \\cdot 4$ gives $12$.'
          },
          {
            question: 'Solve for $x$: $x + 9 = 15$',
            options: ['$24$', '$-6$', '$6$', '$135$'],
            correctAnswer: 2,
            explanation: 'Subtract $9$ from both sides: $x = 15 - 9 = 6$. Check: $6 + 9 = 15$. Adding $9$ instead of subtracting gives $24$, and multiplying gives $135$.'
          },
          {
            question: 'Which of these is an equation?',
            options: ['$4x - 7$', '$4(x - 7)$', '$4x - 7 + 13$', '$4x - 7 = 13$'],
            correctAnswer: 3,
            explanation: 'An equation has an equals sign: it says two things have the same value. The other three are expressions, which you can simplify or evaluate but cannot solve.'
          }
        ]
      }
    },
    {
      id: 'mkle1-vocab',
      type: 'text' as const,
      content: `## The Words Algebra Uses

A **variable** is a letter that stands for a number you don't know yet. In $7y - 4$, the variable is $y$.

| Word | Meaning | In $7y - 4 = 24$ |
|:---|:---|:---|
| **Term** | A number, a variable, or a number times a variable | $7y$, $-4$ and $24$ |
| **Coefficient** | The number multiplying a variable | $7$ |
| **Constant** | A term with no variable | $-4$ and $24$ |
| **Expression** | Terms joined by $+$ or $-$, with no equals sign | $7y - 4$ |
| **Equation** | Two expressions set equal | $7y - 4 = 24$ |

Some shorthand to know cold:

- $3x$ means $3 \\cdot x$. A number written next to a letter is multiplied.
- $x$ by itself means $1x$.
- $\\frac{x}{4}$ means $x \\div 4$.
- $2(x + 5)$ means $2$ times the whole group $x + 5$.

### Combining like terms

**Like terms** have the same variable part. You add or subtract their coefficients and leave the variable alone:

$$6x - 2 - 4x + 9 = (6x - 4x) + (-2 + 9) = 2x + 7$$

$3x$ and $3$ are **not** like terms: one has a variable and one doesn't, so $3x + 3$ stays as it is.

### The distributive property

A number in front of parentheses multiplies **every** term inside:

$$3(x + 4) = 3x + 12 \\qquad -2(x - 5) = -2x + 10$$

Watch the second one: $-2$ times $-5$ is **positive** $10$. Dropping that sign is one of the most common mistakes on the whole MK subtest.`
    },
    {
      id: 'mkle1-substitution',
      type: 'text' as const,
      content: `## Substitution: Plugging In a Value

"Evaluate" means: replace each letter with its number, then do the arithmetic in order (parentheses, exponents, multiply and divide, add and subtract).

**Always put the number in parentheses when you substitute.** It protects negative signs.

### Worked example 1

Find $5 - 3m$ when $m = -2$.

$$5 - 3(-2) = 5 - (-6) = 5 + 6 = 11$$

Subtracting a negative is adding.

### Worked example 2

Find $2a^2 - 3b$ when $a = -3$ and $b = 4$.

1. Substitute with parentheses: $2(-3)^2 - 3(4)$
2. Exponent first: $(-3)^2 = 9$, so $2(9) - 3(4)$
3. Multiply: $18 - 12$
4. Subtract: $6$

If you had written $2 \\cdot -3^2$ without parentheses, you might square only the $3$ and get $-9$. Parentheses keep the sign attached to the number.

### Worked example 3

Find $\\frac{x + y}{2}$ when $x = 11$ and $y = -3$.

$$\\frac{11 + (-3)}{2} = \\frac{8}{2} = 4$$

The fraction bar acts like parentheses: finish the top before you divide.`
    },
    {
      id: 'mkle1-mc',
      type: 'multiple-choice' as const,
      content: '**Evaluate and simplify.** 🎯 Work each one on scratch paper first.',
      exercise: {
        questions: [
          {
            question: 'If $p = 3$ and $q = -1$, what is the value of $4p - 2q + 1$?',
            options: ['$11$', '$13$', '$15$', '$9$'],
            correctAnswer: 2,
            explanation: '$4(3) - 2(-1) + 1 = 12 + 2 + 1 = 15$. Treating $-2q$ as $-2$ instead of $-2(-1) = +2$ gives $11$.'
          },
          {
            question: 'Which expression is equal to $9x + 5 - 3x - 8$?',
            options: ['$6x - 3$', '$12x - 3$', '$6x + 13$', '$3x$'],
            correctAnswer: 0,
            explanation: 'Group like terms: $9x - 3x = 6x$ and $5 - 8 = -3$, so the result is $6x - 3$. Adding the $3x$ instead of subtracting gives $12x - 3$; $x$-terms and constants cannot be combined into one term.'
          },
          {
            question: 'Which expression is equal to $-4(2x - 3)$?',
            options: ['$-8x - 12$', '$-8x - 3$', '$8x - 12$', '$-8x + 12$'],
            correctAnswer: 3,
            explanation: 'Multiply both terms by $-4$: $-4 \\cdot 2x = -8x$ and $-4 \\cdot (-3) = +12$. Forgetting that a negative times a negative is positive gives $-8x - 12$, and multiplying only the first term gives $-8x - 3$.'
          }
        ]
      }
    },
    {
      id: 'mkle1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Name the parts.** 🔽 Use the equation $5n - 6 = 19$.`,
      exercise: {
        dropdowns: [
          {
            label: 'The coefficient of $n$ is:',
            options: ['$-6$', '$5$', '$19$', '$n$'],
            correctAnswer: 1
          },
          {
            label: 'The constant on the left side is:',
            options: ['$5$', '$19$', '$-6$', '$5n$'],
            correctAnswer: 2
          },
          {
            label: 'The left side, $5n - 6$, by itself is:',
            options: ['an equation', 'an expression', 'a coefficient', 'a solution'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$5$', '$-6$', 'an expression'],
        hint1: 'The coefficient is the number stuck to the variable.',
        hint2: 'A constant has no variable. Keep its sign.',
        hint3: 'Does $5n - 6$ have an equals sign on its own?',
        explanation: 'The coefficient of $n$ is $5$. The constant on the left is $-6$ (the sign belongs to it). With no equals sign, $5n - 6$ is an expression; the whole line $5n - 6 = 19$ is the equation.'
      }
    },
    {
      id: 'mkle1-input',
      type: 'input-boxes' as const,
      content: `**Plug in.** ✍️ Let $a = 5$ and $b = -2$.

**1)** $3a + b$

**2)** $ab$

**3)** $2(a + b)$`,
      exercise: {
        boxes: 3,
        correctAnswers: ['13', '-10', '6'],
        hint1: 'Write each value in parentheses: $3(5) + (-2)$.',
        hint2: '$ab$ means $a$ times $b$.',
        hint3: 'Add inside the parentheses first: $5 + (-2)$.',
        explanation: '(1) $3(5) + (-2) = 15 - 2 = 13$. (2) $(5)(-2) = -10$. (3) $2(5 + (-2)) = 2(3) = 6$.'
      }
    },
    {
      id: 'mkle1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- MK on the CAT-ASVAB: **15 questions, 31 minutes**, about **2 minutes each**, four choices, no calculator
- A number next to a letter means **multiply**: $3x = 3 \\cdot x$
- **Like terms** share the same variable part; combine their coefficients
- **Distribute** to every term inside the parentheses, signs included: $-2(x - 5) = -2x + 10$
- When you substitute, put the number in **parentheses**, then follow the order of operations

> **Up Next:** Part 2 — solving linear equations step by step.`
    }
  ]
};
