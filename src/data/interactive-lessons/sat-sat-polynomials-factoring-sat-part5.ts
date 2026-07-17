export const satPolynomialsPart5Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf5-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 5 of 7 — Rational Expressions**

### Simplifying Rational Expressions

A rational expression is a fraction with polynomials:

$$\\frac{x^2 - 9}{x^2 + 5x + 6} = \\frac{(x+3)(x-3)}{(x+2)(x+3)} = \\frac{x - 3}{x + 2} \\quad (x \\neq -3)$$

**Steps:** Factor numerator and denominator, then cancel common factors.

### Multiplying & Dividing

**Multiply:** Factor, cancel, then multiply what remains.

$$\\frac{x^2 - 4}{x + 1} \\cdot \\frac{x + 1}{x - 2} = \\frac{(x+2)(x-2)}{x+1} \\cdot \\frac{x+1}{x-2} = x + 2$$

**Divide:** Flip the second fraction and multiply.

### Adding & Subtracting

Find a common denominator:

$$\\frac{2}{x+1} + \\frac{3}{x-1} = \\frac{2(x-1) + 3(x+1)}{(x+1)(x-1)} = \\frac{5x + 1}{x^2 - 1}$$

### Undefined Values (Domain Restrictions)

A rational expression is undefined when the denominator equals zero. The SAT asks: "What value of $x$ makes the expression undefined?"

---

### Worked Example 1 — Multi-step Simplification

**Simplify $\\frac{2x^2 - 8}{x^2 - x - 2}$.**

| Step | Work |
|------|------|
| Factor numerator | $2(x^2 - 4) = 2(x+2)(x-2)$ |
| Factor denominator | $(x-2)(x+1)$ |
| Cancel $(x-2)$ | $\\frac{2(x+2)}{x+1}$, $x \\neq 2$ |

### Worked Example 2 — Subtracting with LCD

**$\\frac{x}{x+3} - \\frac{2}{x-1}$**

| Step | Work |
|------|------|
| LCD | $(x+3)(x-1)$ |
| Rewrite | $\\frac{x(x-1) - 2(x+3)}{(x+3)(x-1)}$ |
| Expand | $\\frac{x^2 - x - 2x - 6}{(x+3)(x-1)} = \\frac{x^2 - 3x - 6}{(x+3)(x-1)}$ |`
    },
    {
      id: 'pf5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rational Expressions** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{x^2 + 4x + 3}{x^2 - 1}$',
            options: ['$\\frac{x + 3}{x - 1}$', '$\\frac{x + 1}{x - 1}$', '$\\frac{x + 3}{x + 1}$', '$\\frac{4x + 3}{-1}$'],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{(x+1)(x+3)}{(x+1)(x-1)} = \\frac{x+3}{x-1}$ (cancel $(x+1)$, $x \\neq -1$).'
          },
          {
            question: 'For what value of $x$ is $\\frac{5}{x^2 - 4}$ undefined?',
            options: ['$x = 2$ and $x = -2$', '$x = 4$ only', '$x = 2$ only', '$x = 0$'],
            correctAnswer: 0,
            explanation: 'Denominator $= 0$: $x^2 - 4 = 0$ → $(x-2)(x+2) = 0$ → $x = 2$ or $x = -2$.'
          },
          {
            question: '$\\frac{1}{x} + \\frac{1}{x+2} = $',
            options: ['$\\frac{2x + 2}{x(x+2)}$', '$\\frac{2}{2x + 2}$', '$\\frac{1}{x^2 + 2x}$', '$\\frac{2}{x(x+2)}$'],
            correctAnswer: 0,
            explanation: 'Common denominator is $x(x+2)$: $\\frac{x+2}{x(x+2)} + \\frac{x}{x(x+2)} = \\frac{2x+2}{x(x+2)}$.'
          }
        ]
      }
    },
    {
      id: 'pf5-text2',
      type: 'text' as const,
      content: `### Complex Fractions

A complex fraction has a fraction in the numerator, denominator, or both:

$$\\frac{\\frac{1}{x} + \\frac{1}{y}}{\\frac{1}{x} - \\frac{1}{y}}$$

**Strategy:** Multiply the top and bottom by the LCD of all the little fractions.

### Worked Example 3 — Simplifying a Complex Fraction

**Simplify $\\frac{\\frac{1}{x} - \\frac{1}{3}}{\\frac{1}{x} + \\frac{1}{3}}$.**

| Step | Work |
|------|------|
| LCD of inner fractions | $3x$ |
| Multiply top and bottom by $3x$ | $\\frac{3x \\cdot \\frac{1}{x} - 3x \\cdot \\frac{1}{3}}{3x \\cdot \\frac{1}{x} + 3x \\cdot \\frac{1}{3}}$ |
| Simplify | $\\frac{3 - x}{3 + x}$ |

### Common SAT Trap — Canceling Terms vs. Factors

| Expression | Can you cancel? | Why? |
|-----------|----------------|------|
| $\\frac{(x+2)(x-3)}{(x+2)}$ | ✅ Yes | $(x+2)$ is a **factor** of both |
| $\\frac{x + 2}{x + 5}$ | ❌ No | $x$ is a **term**, not a factor |
| $\\frac{x^2 + x}{x}$ | ✅ Yes | Factor first: $\\frac{x(x+1)}{x} = x + 1$ |

**Rule:** You can only cancel common **factors** — never individual terms.`
    },
    {
      id: 'pf5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Rational Expressions** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{x^2 - 5x + 6}{x^2 - 4} \\cdot \\frac{x + 2}{x - 3}$',
            options: ['$1$', '$\\frac{x-2}{x+2}$', '$\\frac{x+2}{x-2}$', '$\\frac{(x-2)(x-3)}{(x-2)(x+2)}$'],
            correctAnswer: 0,
            explanation: '$\\frac{(x-2)(x-3)}{(x-2)(x+2)} \\cdot \\frac{(x+2)}{(x-3)}$. Cancel $(x-2)$, $(x+2)$, and $(x-3)$. Result: $1$.'
          },
          {
            question: 'Which is equivalent to $\\frac{x^2 + x}{x^2 - 1}$?',
            options: ['$\\frac{x}{x - 1}$', '$\\frac{x}{x + 1}$', '$\\frac{x + 1}{x - 1}$', '$\\frac{1}{x - 1}$'],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{x(x+1)}{(x+1)(x-1)} = \\frac{x}{x-1}$ after canceling $(x+1)$.'
          },
          {
            question: 'If $\\frac{A}{x-1} + \\frac{B}{x+2} = \\frac{5x+1}{(x-1)(x+2)}$, what is $A$?',
            options: ['$2$', '$3$', '$5$', '$1$'],
            correctAnswer: 0,
            explanation: '$A(x+2) + B(x-1) = 5x+1$. Set $x = 1$: $A(3) = 6$, so $A = 2$. (Check: $x = -2$ gives $B(-3) = -9$, $B = 3$. $2(x+2)+3(x-1) = 5x+1$ ✓.)'
          }
        ]
      }
    },
    {
      id: 'pf5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Simplification Check** 🔍\n\nIs each simplification valid?',
      exercise: {
        dropdowns: [
          { label: '$\\frac{x^2 - 9}{x - 3} = x + 3$', options: ['Valid (factor and cancel)', 'Invalid (can\'t cancel terms)', 'Valid only if x = 3', 'Invalid (sign error)'] },
          { label: '$\\frac{x + 5}{x + 7} = \\frac{5}{7}$', options: ['Invalid (can\'t cancel x)', 'Valid (cancel the x)', 'Valid only if x > 0', 'Invalid (should be 5/7)'] },
          { label: '$\\frac{3x}{6x^2} = \\frac{1}{2x}$', options: ['Valid (cancel 3x)', 'Invalid (can\'t cancel)', 'Valid only if x ≠ 0', 'Invalid (should be 1/2)'] },
          { label: '$\\frac{x^2 + 4}{x + 2} = x + 2$', options: ['Invalid ($x^{2}$ + 4 doesn\'t factor)', 'Valid (divide)', 'Valid (cancel x + 2)', 'Invalid (need to FOIL)'] }
        ],
        correctAnswers: ['Valid (factor and cancel)', 'Invalid (can\'t cancel x)', 'Valid (cancel 3x)', 'Invalid ($x^{2}$ + 4 doesn\'t factor)'],
        hint1: 'For the first one, factor the numerator as a difference of squares.',
        hint2: 'Remember: you can only cancel common FACTORS, not individual terms.',
        hint3: '$x^2 + 4$ is a sum of squares — it does NOT factor over the reals.',
        explanation: '$x^2 - 9 = (x+3)(x-3)$ so canceling is valid. $\\frac{x+5}{x+7}$: x is a term, not a factor — invalid. $\\frac{3x}{6x^2} = \\frac{1}{2x}$ by canceling factor $3x$ — valid. $x^2+4$ doesn\'t factor, so $\\frac{x^2+4}{x+2} \\neq x+2$ — invalid.'
      }
    },
    {
      id: 'pf5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Operation | Procedure |
|-----------|-----------|
| Simplify | Factor top & bottom → cancel common factors |
| Multiply | Factor all → cancel across → multiply |
| Divide | Flip 2nd fraction → multiply |
| Add/Subtract | Find LCD → combine numerators |
| Complex fraction | Multiply top & bottom by LCD of inner fractions |

| Common Trap | Fix |
|------------|-----|
| Canceling terms ($\\frac{x+2}{x+5}$) | Only cancel **factors** |
| Forgetting restrictions | State $x \\neq$ (zeros of original denominator) |
| Sign errors in subtraction | Distribute the minus to ALL terms |

- **Partial fractions** (splitting one fraction into two) appear on harder SAT problems — reverse the adding process`
    }
  ]
};
