export const precalcLimitsPart3Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🔧 Algebraic Limit Techniques

**Part 3 of 7**

### When Direct Substitution Gives $0/0$

$0/0$ is **indeterminate** — the limit could be any value. We need algebraic manipulation.

### Technique 1: Factor and Cancel

$$\\lim_{x \\to 3} \\frac{x^2-9}{x-3} = \\lim \\frac{(x-3)(x+3)}{x-3} = \\lim(x+3) = 6$$

### Technique 2: Rationalize (Multiply by Conjugate)

$$\\lim_{x \\to 0} \\frac{\\sqrt{x+4}-2}{x}$$

Multiply by $\\frac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2}$:

$$= \\lim \\frac{(x+4)-4}{x(\\sqrt{x+4}+2)} = \\lim \\frac{x}{x(\\sqrt{x+4}+2)} = \\lim \\frac{1}{\\sqrt{x+4}+2} = \\frac{1}{4}$$
      `
    },
    {
      id: 'p3-more',
      type: 'text' as const,
      content: `
## 📝 More Techniques

### Technique 3: Common Denominator

$$\\lim_{x \\to 0} \\frac{\\frac{1}{x+2}-\\frac{1}{2}}{x}$$

Combine fractions in numerator:

$$= \\lim \\frac{\\frac{2-(x+2)}{2(x+2)}}{x} = \\lim \\frac{-x}{2x(x+2)} = \\lim \\frac{-1}{2(x+2)} = -\\frac{1}{4}$$

### Technique 4: Factor Higher-Degree Polynomials

$$\\lim_{x \\to 2} \\frac{x^3-8}{x-2} = \\lim \\frac{(x-2)(x^2+2x+4)}{x-2} = 4+4+4 = 12$$

Recall: $a^3-b^3 = (a-b)(a^2+ab+b^2)$

### Decision Tree

1. Try direct substitution
2. If $0/0$: factor, rationalize, or simplify
3. If $k/0$ ($k \\neq 0$): limit is $\\pm\\infty$ or DNE
      `
    },
    {
      id: 'p3-trig',
      type: 'text' as const,
      content: `
## 🌊 Special Trig Limits

### The Two Famous Limits

$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\qquad \\lim_{x \\to 0} \\frac{1-\\cos x}{x} = 0$$

### Using Them

$$\\lim_{x \\to 0} \\frac{\\sin(3x)}{x} = \\lim \\frac{\\sin(3x)}{3x} \\cdot 3 = 1 \\cdot 3 = 3$$

$$\\lim_{x \\to 0} \\frac{\\tan x}{x} = \\lim \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x} = 1 \\cdot 1 = 1$$

$$\\lim_{x \\to 0} \\frac{\\sin(5x)}{\\sin(3x)} = \\lim \\frac{\\sin(5x)}{5x} \\cdot \\frac{3x}{\\sin(3x)} \\cdot \\frac{5}{3} = 1 \\cdot 1 \\cdot \\frac{5}{3} = \\frac{5}{3}$$

> 💡 The key: make the argument of sin match the denominator.
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Algebraic Techniques Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to -1} \\frac{x^2+3x+2}{x+1} = ?$',
            options: ['$1$', '$0$', '$-1$', 'DNE'],
            correctAnswer: 0,
            explanation: '$= \\lim \\frac{(x+1)(x+2)}{x+1} = \\lim (x+2) = 1$.'
          },
          {
            question: '$\\lim_{x \\to 0} \\frac{\\sin(7x)}{x} = ?$',
            options: ['$0$', '$1$', '$7$', '$1/7$'],
            correctAnswer: 2,
            explanation: '$= 7 \\cdot \\lim \\frac{\\sin(7x)}{7x} = 7 \\cdot 1 = 7$.'
          },
          {
            question: '$\\lim_{x \\to 4} \\frac{\\sqrt{x}-2}{x-4} = ?$',
            options: ['$0$', '$1/4$', '$1/2$', 'DNE'],
            correctAnswer: 1,
            explanation: '$x-4 = (\\sqrt{x}-2)(\\sqrt{x}+2)$. Cancel: $\\frac{1}{\\sqrt{x}+2} \\to \\frac{1}{4}$.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate** 🧮

**1)** $\\lim_{x \\to 5} \\frac{x^2-25}{x-5}$ = ?

**2)** $\\lim_{x \\to 0} \\frac{\\sin(4x)}{2x}$ = ?

**3)** $\\lim_{x \\to 1} \\frac{x^3-1}{x-1}$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '2', '3'],
        hint1: 'Factor: $(x-5)(x+5)/(x-5) = x+5 \\to 10$.',
        hint2: '$= 2 \\cdot \\frac{\\sin(4x)}{4x} = 2$.',
        hint3: '$(x-1)(x^2+x+1)/(x-1) = x^2+x+1 \\to 3$.',
        explanation: '1) $10$. 2) $2$. 3) $3$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Technique Selection** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{0}{0}$ means:',
            options: ['Limit is 0', 'Limit is undefined', 'Indeterminate — investigate', 'Limit DNE'],
            correctAnswer: 2
          },
          {
            label: 'Best technique for $\\frac{\\sqrt{x+1}-1}{x}$:',
            options: ['Factor', 'Rationalize', 'L\'Hôpital', 'Direct sub'],
            correctAnswer: 1
          },
          {
            label: '$\\lim_{x\\to 0} \\frac{\\sin x}{x} = ?$',
            options: ['$0$', '$1$', '$\\infty$', 'DNE'],
            correctAnswer: 1
          },
          {
            label: '$\\frac{5}{0}$ as a limit result suggests:',
            options: ['Limit is 5', 'Limit is 0', 'Vertical asymptote ($\\pm\\infty$)', 'Indeterminate'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Indeterminate — investigate', 'Rationalize', '$1$', 'Vertical asymptote ($\\pm\\infty$)'],
        hint1: '$0/0$ needs more work.',
        hint2: 'Conjugate removes the radical.',
        hint3: 'Fundamental trig limit.',
        explanation: '$0/0$: indeterminate. Radical: rationalize. $\\sin x/x = 1$. $k/0$: asymptote.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 0} \\frac{\\sqrt{1+x}-1}{x} = ?$',
            options: ['$1/2$', '$1$', '$0$', '$2$'],
            correctAnswer: 0,
            explanation: 'Rationalize: $\\frac{x}{x(\\sqrt{1+x}+1)} = \\frac{1}{\\sqrt{1+x}+1} \\to \\frac{1}{2}$.'
          },
          {
            question: '$\\lim_{x \\to 0} \\frac{\\tan(3x)}{\\sin(2x)} = ?$',
            options: ['$3/2$', '$2/3$', '$6$', '$1$'],
            correctAnswer: 0,
            explanation: '$= \\frac{\\sin(3x)}{3x} \\cdot \\frac{2x}{\\sin(2x)} \\cdot \\frac{3x}{2x\\cos(3x)} \\to 1 \\cdot 1 \\cdot \\frac{3}{2} = \\frac{3}{2}$.'
          }
        ]
      }
    }
  ]
};
