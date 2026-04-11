export const precalcRatesOfChangePart7Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Rates of Change — Complete Synthesis

**Part 7 of 7**

### Everything Connected

\`\`\`
Rates of Change Master Map
│
├─ Average Rate (AROC)
│   ├─ Formula: [f(b)-f(a)]/(b-a)
│   ├─ Geometry: Secant line slope
│   └─ Physics: Average velocity
│
├─ Difference Quotient
│   ├─ Formula: [f(x+h)-f(x)]/h
│   ├─ Algebraic simplification
│   └─ Must cancel h from denominator
│
├─ Instantaneous Rate (IROC)
│   ├─ = lim(h→0) of DQ
│   ├─ Geometry: Tangent line slope
│   ├─ Physics: Instantaneous velocity
│   └─ THIS IS THE DERIVATIVE
│
└─ Applications
    ├─ Motion: position → velocity → acceleration
    ├─ Economics: cost → marginal cost
    ├─ Biology: population → growth rate
    └─ Always include units and context
\`\`\`
      `
    },
    {
      id: 'p7-review',
      type: 'text' as const,
      content: `
## Key Formulas Reference

### The Core Three

$$\\text{AROC} = \\frac{f(b)-f(a)}{b-a} \\quad \\text{(secant slope)}$$

$$\\text{DQ} = \\frac{f(x+h)-f(x)}{h} \\quad \\text{(general secant)}$$

$$\\text{IROC} = f'(a) = \\lim_{h \\to 0}\\frac{f(a+h)-f(a)}{h} \\quad \\text{(tangent slope)}$$

### Known DQ Results

| $f(x)$ | DQ simplified | Limit ($f'(x)$) |
|:--------|:-------------|:----------------|
| $mx + b$ | $m$ | $m$ |
| $x^2$ | $2x + h$ | $2x$ |
| $x^3$ | $3x^2 + 3xh + h^2$ | $3x^2$ |
| $1/x$ | $-1/[x(x+h)]$ | $-1/x^2$ |
| $\\sqrt{x}$ | $1/(\\sqrt{x+h}+\\sqrt{x})$ | $1/(2\\sqrt{x})$ |

### Tangent Line Formula

$$y = f(a) + f'(a)(x - a)$$
      `
    },
    {
      id: 'p7-bridge',
      type: 'text' as const,
      content: `
## Bridge to Calculus

### What Calculus Adds

In calculus, you'll learn **shortcut rules** so you don't need the limit process each time:

- **Power Rule**: $\\frac{d}{dx}[x^n] = nx^{n-1}$
- **Product Rule**: $(fg)' = f'g + fg'$
- **Chain Rule**: $[f(g(x))]' = f'(g(x)) \\cdot g'(x)$

But the **limit definition** is where it all starts. Everything builds from here.

### The Precalculus → Calculus Pipeline

1. ✅ Functions & graphs (completed)
2. ✅ Limits (computed and understood)
3. ✅ Rates of change (AROC → IROC)
4. ➡️ **Next**: Derivatives (formalized IROC)
5. ➡️ **Then**: Integrals (reverse of derivatives)
6. ➡️ **Finally**: FTC (connects derivatives & integrals)

You now have the conceptual foundation for ALL of calculus!
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Master Rates Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'DQ of $f(x) = x^2 + 5x - 2$ simplifies to:',
            options: ['$2x + h + 5$', '$2x + 5$', '$2x + h - 2$', '$x^2 + 5$'],
            correctAnswer: 0,
            explanation: 'Expand $(x+h)^2 + 5(x+h) - 2 - x^2 - 5x + 2 = 2xh + h^2 + 5h$. Divide by $h$: $2x+h+5$.'
          },
          {
            question: 'The tangent line to $f(x)=x^3$ at $x=2$ passes through:',
            options: ['$(2, 8)$ with slope $12$', '$(2, 8)$ with slope $6$', '$(2, 4)$ with slope $12$', '$(2, 8)$ with slope $8$'],
            correctAnswer: 0,
            explanation: '$f(2) = 8$, $f\'(2) = 3(4) = 12$. Point $(2,8)$ with slope $12$.'
          },
          {
            question: 'Ball at $s(t)=-16t^2+96t$. Maximum height occurs at:',
            options: ['$t = 2$', '$t = 3$', '$t = 4$', '$t = 6$'],
            correctAnswer: 1,
            explanation: '$v(t) = -32t + 96 = 0 \\Rightarrow t = 3$ seconds.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice:**

**1)** AROC of $f(x) = x^2$ on $[1,5]$:

**2)** IROC of $f(x) = x^2$ at $x = 3$ (use $f'(x)=2x$):

**3)** Tangent to $f(x)=x^2$ at $x=3$: $y = 6x - ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '6', '9'],
        hint1: '$\\frac{25-1}{4} = 6$.',
        hint2: '$f\'(3) = 2(3) = 6$.',
        hint3: '$y - 9 = 6(x-3) \\Rightarrow y = 6x - 9$.',
        explanation: '(1) $(25-1)/4 = 6$. (2) $2(3) = 6$. (3) $y = 6x - 9$, so the blank is $9$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Synthesis** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'AROC is to secant as IROC is to:',
            options: ['Chord', 'Tangent', 'Normal', 'Axis'],
            correctAnswer: 1
          },
          {
            label: 'Power Rule for $x^4$ gives $f\'(x)$ =',
            options: ['$x^3$', '$4x^3$', '$4x^4$', '$3x^4$'],
            correctAnswer: 1
          },
          {
            label: 'The derivative of a constant is:',
            options: ['The constant', '$1$', '$0$', 'Undefined'],
            correctAnswer: 2
          },
          {
            label: 'The precalculus foundation for calculus is:',
            options: ['Geometry', 'Limits and rates of change', 'Statistics', 'Number theory'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Tangent', '$4x^3$', '$0$', 'Limits and rates of change'],
        hint1: 'IROC = tangent slope.',
        hint2: 'Power Rule: $nx^{n-1}$, so $4x^3$.',
        hint3: 'Constants don\'t change → rate = 0.',
        explanation: 'AROC:secant :: IROC:tangent. Power Rule: $4x^3$. Constant\' = 0. Calc built on limits & rates.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Use the tangent at $x=4$ ($f(x)=\\sqrt{x}$, $f\'(x)=1/(2\\sqrt{x})$) to estimate $\\sqrt{4.04}$:',
            options: ['$2.01$', '$2.02$', '$2.1$', '$2.001$'],
            correctAnswer: 0,
            explanation: '$f(4)=2, f\'(4)=1/4$. $\\sqrt{4.04} \\approx 2 + (1/4)(0.04) = 2 + 0.01 = 2.01$.'
          },
          {
            question: 'The single most important idea bridging precalculus to calculus:',
            options: ['Factoring', 'The limit', 'Quadratic formula', 'Unit circle'],
            correctAnswer: 1,
            explanation: 'The limit is THE bridge. Derivatives = limits. Integrals = limits. Continuity = limits. It all starts here.'
          }
        ]
      }
    }
  ]
};
