export const satPassportAdvPart7Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa7-intro',
      type: 'text' as const,
      content: `
# 🎯 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet, Mixed SAT-Style Problems & Exam Strategies**

## Advanced Math — Cheat Sheet

| Topic | Key Facts |
|-------|-----------|
| **Polynomials** | Degree = highest exponent; combine like terms; $(a+b)(a-b) = a^2 - b^2$ |
| **Factoring** | GCF first; diff. of squares $a^2-b^2$; cubes: SOAP mnemonic |
| **Rational Expressions** | Factor & cancel; LCD for add/subtract; domain excludes denominator zeros |
| **Radicals** | $a^{m/n} = \\sqrt[n]{a^m}$; isolate & raise to power; check for extraneous solutions |
| **Nonlinear Systems** | Substitute linear into quadratic; discriminant tells # of solutions |
| **Functions** | $f(g(x))$: inside-out; inverse: swap $x$/$y$ & solve; domain/range swap |

**Top 5 SAT Strategies for Advanced Math:**
1. **Factor first** — most problems simplify dramatically.
2. **Check for extraneous solutions** after squaring or multiplying by variables.
3. **Use the discriminant** $b^2 - 4ac$ to count solutions without solving.
4. **Plug in numbers** when algebra gets messy — especially on multiple-choice.
5. **Read the question carefully** — "which is NOT" and "must be true" change everything.
      `
    },
    {
      id: 'sat-pa7-review',
      type: 'text' as const,
      content: `
## Quick-Review Worked Examples

**Polynomials:** $(2x-3)(x^2+x-4) = 2x^3 + 2x^2 - 8x - 3x^2 - 3x + 12 = 2x^3 - x^2 - 11x + 12$

**Factoring:** $6x^2 + x - 2$. Find two numbers that multiply to $6 \\times (-2) = -12$ and add to $1$: that's $4$ and $-3$.

$$6x^2 + 4x - 3x - 2 = 2x(3x+2) - 1(3x+2) = (3x+2)(2x-1)$$

**Rational:** $\\frac{x^2-4}{x^2-4x+4} = \\frac{(x+2)(x-2)}{(x-2)^2} = \\frac{x+2}{x-2}$

**Radicals:** If $\\sqrt{5x-1} = 3$, then $5x-1 = 9 \\implies x = 2$. ✓

**Systems:** $y = x^2+1$ and $y = 5$: $x^2 = 4 \\implies x = \\pm 2$. Two solutions.

**Functions:** $f(x) = 5x+10$, $f^{-1}(x) = \\frac{x-10}{5}$. Check: $f(f^{-1}(20)) = f(2) = 20$ ✓.
      `
    },
    {
      id: 'sat-pa7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is the degree of $(x^2+1)(x^3-x)$?',
            options: ['$3$', '$4$', '$5$', '$6$'],
            correctAnswer: 2,
            explanation: 'Degree of a product = sum of degrees: $2 + 3 = 5$.'
          },
          {
            question: 'If $f(x) = x^2 - 4x + 3$, what is $f(5)$?',
            options: ['$3$', '$8$', '$18$', '$-2$'],
            correctAnswer: 1,
            explanation: '$f(5) = 25 - 20 + 3 = 8$.'
          }
        ]
      }
    },
    {
      id: 'sat-pa7-mixed',
      type: 'text' as const,
      content: `
## Common SAT Traps

**Trap 1: Sign errors in subtraction.**

$(3x^2 + 5) - (x^2 - 2)$ is $3x^2 + 5 - x^2 + 2 = 2x^2 + 7$, **not** $2x^2 + 3$.

**Trap 2: Forgetting domain restrictions.**

$\\frac{x^2-1}{x-1} = x+1$ is only valid when $x \\neq 1$.

**Trap 3: Extraneous solutions.**

After squaring $\\sqrt{x} = x - 6$: $x = (x-6)^2 = x^2 - 12x + 36$, so $x^2 - 13x + 36 = 0$, giving $x = 9$ or $x = 4$. Check: $\\sqrt{9} = 3 = 9-6$ ✓, but $\\sqrt{4} = 2 \\neq 4-6 = -2$ ✗.

**Trap 4: Confusing $f(g(x))$ with $g(f(x))$.**

Always read the notation carefully and work from the inside out.
      `
    },
    {
      id: 'sat-pa7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

1) Factor $x^2 - 11x + 30 = (x - a)(x - b)$ where $a < b$. What is $b$?

2) Evaluate: $27^{1/3} + 16^{1/2}$.

3) If $f(x) = 3x - 7$, find $f^{-1}(2)$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '7', '3'],
        hint1: 'Find two numbers that multiply to $30$ and add to $11$: $5$ and $6$.',
        hint2: '$27^{1/3} = 3$ and $16^{1/2} = 4$.',
        hint3: '$f^{-1}(x) = \\frac{x+7}{3}$. Plug in $x=2$.',
        explanation: '1) $(x-5)(x-6)$, so $b = 6$. 2) $3 + 4 = 7$. 3) $\\frac{2+7}{3} = 3$.'
      }
    },
    {
      id: 'sat-pa7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Strategy Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When you square both sides of an equation, you should always …',
            options: ['simplify first', 'check for extraneous solutions', 'multiply by $-1$', 'take the square root again']
          },
          {
            label: 'The discriminant $b^2 - 4ac = 0$ means the equation has …',
            options: ['no real solutions', 'exactly one real solution', 'two distinct real solutions', 'infinitely many solutions']
          },
          {
            label: 'To add $\\frac{a}{x}+\\frac{b}{x+1}$, the first step is to …',
            options: ['cross multiply', 'find the LCD', 'cancel $x$', 'set equal to zero']
          }
        ],
        correctAnswers: ['check for extraneous solutions', 'exactly one real solution', 'find the LCD'],
        hint1: 'Squaring can introduce solutions that don\'t satisfy the original equation.',
        hint2: 'Discriminant $= 0$ means repeated root.',
        hint3: 'Before adding fractions with different denominators, find a common denominator.',
        explanation: 'Always check for extraneous solutions after squaring. Discriminant $= 0$ gives one repeated root. Find the LCD before adding fractions.'
      }
    },
    {
      id: 'sat-pa7-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Mixed Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\frac{x^2 + 3x - 10}{x - 2} = x + k$ for all $x \\neq 2$, what is $k$?',
            options: ['$3$', '$5$', '$-5$', '$10$'],
            correctAnswer: 1,
            explanation: '$x^2 + 3x - 10 = (x-2)(x+5)$. Dividing by $(x-2)$ gives $x + 5$, so $k = 5$.'
          },
          {
            question: 'If $g(x) = \\sqrt{2x+9}$ and $g(a) = 5$, what is $a$?',
            options: ['$2$', '$8$', '$7$', '$16$'],
            correctAnswer: 1,
            explanation: '$\\sqrt{2a+9} = 5 \\implies 2a + 9 = 25 \\implies 2a = 16 \\implies a = 8$.'
          }
        ]
      }
    }
  ]
};
