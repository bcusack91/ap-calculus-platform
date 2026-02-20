export const calcabDerivativeDefPart7Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef7-intro',
      type: 'text' as const,
      content: `
# ∫ Review & Applications

**Part 7 of 7 — Comprehensive Review**

### The Big Picture

The derivative $f'(a)$ answers: **"How fast is $f$ changing at $x = a$?"**

- Geometrically: slope of the tangent line
- Physically: instantaneous rate of change
- Algebraically: $\\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$

### Key Relationships

$$\\text{Position } s(t) \\xrightarrow{\\text{derivative}} \\text{Velocity } v(t) = s'(t) \\xrightarrow{\\text{derivative}} \\text{Acceleration } a(t) = v'(t) = s''(t)$$

### Differentiability Hierarchy

$$\\text{Differentiable} \\implies \\text{Continuous} \\implies \\text{Limit exists}$$

But NONE of the reverse implications hold!

### Essential Formulas

- **Derivative definition:** $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$
- **Alternate form:** $f'(a) = \\lim_{x \\to a} \\frac{f(x)-f(a)}{x-a}$
- **Tangent line:** $y = f(a) + f'(a)(x-a)$
- **Linear approximation:** $f(x) \\approx f(a) + f'(a)(x-a)$ for $x$ near $a$
      `
    },
    {
      id: 'derdef7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A particle moves along the $x$-axis with position $s(t) = t^2 - 4t$. At what time is the particle momentarily at rest?',
            options: ['$t = 0$', '$t = 2$', '$t = 4$', '$t = -2$'],
            correctAnswer: 1,
            explanation: '"At rest" means $v(t) = s\'(t) = 0$. $s\'(t) = 2t - 4 = 0$ gives $t = 2$.'
          },
          {
            question: 'The tangent line to $y = f(x)$ at $(1, 3)$ has slope $-2$. Use this to approximate $f(1.05)$.',
            options: ['$2.9$', '$3.1$', '$2.95$', '$3.05$'],
            correctAnswer: 0,
            explanation: '$f(1.05) \\approx f(1) + f\'(1)(1.05 - 1) = 3 + (-2)(0.05) = 3 - 0.1 = 2.9$.'
          }
        ]
      }
    },
    {
      id: 'derdef7-detail',
      type: 'text' as const,
      content: `
### Common AP Exam Derivative Questions

1. **"Find $f'(a)$ using the definition"** — Must show the limit, not just use shortcut rules
2. **"What does $f'(3) = -2$ mean in context?"** — At $x = 3$, $f$ is decreasing at a rate of 2 [units] per [unit]
3. **"Is $f$ differentiable at $x = c$?"** — Check continuity AND matching derivatives from both sides
4. **"Find the tangent/normal line"** — Use point-slope form with $f(a)$ and $f'(a)$
5. **"Approximate using linearization"** — $f(x) \\approx f(a) + f'(a)(x-a)$
      `
    },
    {
      id: 'derdef7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If $f(4) = 7$ and $f\'(4) = -3$, what is the equation of the normal line at $x = 4$?',
            options: ['$y - 7 = -3(x - 4)$', '$y - 7 = 3(x - 4)$', '$y - 7 = \\frac{1}{3}(x - 4)$', '$y - 7 = -\\frac{1}{3}(x - 4)$'],
            correctAnswer: 2,
            explanation: 'The tangent slope is $-3$, so the normal slope is the negative reciprocal: $\\frac{1}{3}$. Normal line: $y - 7 = \\frac{1}{3}(x - 4)$.'
          }
        ]
      }
    },
    {
      id: 'derdef7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Final Review** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'If $f$ has a corner at $x=2$, then $f$ is ___ at $x=2$', options: ['differentiable', 'not differentiable', 'not continuous', 'undefined'] },
          { label: '$s(t) = 5t^2$, find $v(3) = s\'(3)$', options: ['15', '30', '45', '90'] },
          { label: 'Tangent to $y=x^2$ at $(1,1)$: $y =$', options: ['$2x-1$', '$2x+1$', '$x+1$', '$x-1$'] }
        ],
        correctAnswers: ['not differentiable', '30', '$2x-1$'],
        hint1: 'Corners have different slopes from the left and right.',
        hint2: '$s\'(t) = 10t$, so $s\'(3) = ?$',
        hint3: '$f\'(x) = 2x$, so $f\'(1) = 2$. Point-slope: $y - 1 = 2(x-1)$.',
        explanation: 'Corners cause non-differentiability (but $f$ can still be continuous). $v(3) = 10(3) = 30$. Tangent: $y - 1 = 2(x-1) \\Rightarrow y = 2x - 1$.'
      }
    }
  ]
}
