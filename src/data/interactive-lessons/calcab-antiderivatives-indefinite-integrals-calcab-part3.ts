export const calcabAntiderivativesPart3Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti3-intro',
      type: 'text' as const,
      content: `# ∫ Antiderivatives

**Part 3 of 7 — Initial Value Problems (IVPs)**

### Finding a Specific Antiderivative

An **initial condition** pins down the exact value of $C$:

$$\\boxed{\\text{General antiderivative} + \\text{initial condition} = \\text{particular solution}}$$

| Step | Action |
|:---:|:---:|
| 1 | Integrate $f'(x)$ to get $f(x) = F(x) + C$ |
| 2 | Substitute the initial condition $(x_0, y_0)$ |
| 3 | Solve for $C$ |
| 4 | Write the particular solution |

### Worked Example

Given: $f'(x) = 3x^2 - 4x + 1$ and $f(0) = 5$. Find $f(x)$.

**Step 1:** $f(x) = \\int (3x^2 - 4x + 1)\\,dx = x^3 - 2x^2 + x + C$

**Step 2:** $f(0) = 0 - 0 + 0 + C = 5$

**Step 3:** $C = 5$

$$\\boxed{f(x) = x^3 - 2x^2 + x + 5}$$

> **Check:** $f'(x) = 3x^2 - 4x + 1$ ✓ and $f(0) = 5$ ✓`
    },
    {
      id: 'anti3-motion',
      type: 'text' as const,
      content: `### Position-Velocity-Acceleration

$$\\boxed{a(t) \\xrightarrow{\\int} v(t) \\xrightarrow{\\int} s(t)}$$

Each integration introduces a NEW constant, determined by initial conditions.

| Quantity | Symbol | Relationship |
|:---:|:---:|:---:|
| Acceleration | $a(t)$ | Given (or from forces) |
| Velocity | $v(t)$ | $v(t) = \\int a(t)\\,dt$ |
| Position | $s(t)$ | $s(t) = \\int v(t)\\,dt$ |

### Worked Example: Free Fall

A ball is thrown upward at 64 ft/s from height 80 ft. Find $s(t)$.

$a(t) = -32$ $ft/s^{2}$ (gravity)

**Step 1:** $v(t) = \\int (-32)\\,dt = -32t + C_1$
- $v(0) = 64$ → $C_1 = 64$
- So $v(t) = -32t + 64$

**Step 2:** $s(t) = \\int (-32t + 64)\\,dt = -16t^2 + 64t + C_2$
- $s(0) = 80$ → $C_2 = 80$

$$\\boxed{s(t) = -16t^2 + 64t + 80}$$

> **Key Fact:** In free fall, $a = -32$ $ft/s^{2}$ or $a = -9.8$ $m/s^{2}$. The negative sign means downward. Two initial conditions are needed: $v(0)$ and $s(0)$.`
    },
    {
      id: 'anti3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Initial Value Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f\'(x) = 6x + 2$ and $f(1) = 8$, find $f(x)$.',
            options: ['$3x^2 + 2x + 3$', '$3x^2 + 2x$', '$6x^2 + 2x + 3$', '$3x^2 + 2x - 3$'],
            correctAnswer: 0,
            explanation: '$f(x) = 3x^2 + 2x + C$. $f(1) = 3 + 2 + C = 8$, so $C = 3$. $f(x) = 3x^2 + 2x + 3$.'
          },
          {
            question: 'A ball is thrown upward with $v(0) = 64$ ft/s from height $s(0) = 80$ ft. If $a(t) = -32$, find $s(t)$.',
            options: ['$-16t^2 + 64t + 80$', '$-32t^2 + 64t + 80$', '$-16t^2 + 64t$', '$-32t + 64$'],
            correctAnswer: 0,
            explanation: '$v(t) = -32t + 64$. $s(t) = -16t^2 + 64t + C_2$. $s(0) = 80$: $C_2 = 80$.'
          },
          {
            question: 'If $f\'\'(x) = 6$, $f\'(0) = -2$, and $f(0) = 3$, find $f(1)$.',
            options: ['$4$', '$7$', '$1$', '$10$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 6x + C_1$. $f\'(0) = -2$: $C_1 = -2$. $f\'(x) = 6x - 2$.\\n$f(x) = 3x^2 - 2x + C_2$. $f(0) = 3$: $C_2 = 3$.\\n$f(x) = 3x^2 - 2x + 3$. $f(1) = 3 - 2 + 3 = 4$.'
          }
        ]
      }
    },
    {
      id: 'anti3-multi',
      type: 'text' as const,
      content: `### Multiple Initial Conditions

When given $f''(x)$, you need TWO initial conditions (one for each integration):

| Integration Level | Introduces | Determined By |
|:---:|:---:|:---:|
| $f''(x) \\to f'(x)$ | $C_1$ | $f'(x_0) = v_0$ |
| $f'(x) \\to f(x)$ | $C_2$ | $f(x_1) = y_1$ |

### AP-Style Example

$f''(x) = 12x - 4$, $f'(1) = 3$, $f(2) = 10$. Find $f(x)$.

**First integration:** $f'(x) = 6x^2 - 4x + C_1$
- $f'(1) = 6 - 4 + C_1 = 3$ → $C_1 = 1$
- $f'(x) = 6x^2 - 4x + 1$

**Second integration:** $f(x) = 2x^3 - 2x^2 + x + C_2$
- $f(2) = 16 - 8 + 2 + C_2 = 10$ → $C_2 = 0$

$$\\boxed{f(x) = 2x^3 - 2x^2 + x}$$

> **AP Tip:** When an IVP asks for a SPECIFIC value like $f(3)$, you can sometimes use the definite integral: $f(3) = f(2) + \\int_2^3 f'(x)\\,dx$, which may be faster.`
    },
    {
      id: 'anti3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Motion IVPs** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle has $v(t) = 3t^2 - 6t$ and $s(0) = 4$. Find $s(2)$.',
            options: ['$0$', '$4$', '$-4$', '$8$'],
            correctAnswer: 0,
            explanation: '$s(t) = t^3 - 3t^2 + C$. $s(0) = C = 4$. So $s(t) = t^3 - 3t^2 + 4$. $s(2) = 8 - 12 + 4 = 0$.'
          },
          {
            question: 'When does the ball $s(t) = -16t^2 + 64t + 80$ hit the ground?',
            options: ['$t = 5$', '$t = 4$', '$t = 2$', '$t = 8$'],
            correctAnswer: 0,
            explanation: '$-16t^2 + 64t + 80 = 0$. Divide by $-16$: $t^2 - 4t - 5 = 0$. $(t-5)(t+1) = 0$. $t = 5$ (positive time).'
          }
        ]
      }
    },
    {
      id: 'anti3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Solve the IVP step by step.** 🔍\n\n$f\'(x) = 4x - 3$, $f(2) = 7$',
      exercise: {
        dropdowns: [
          {
            label: 'General antiderivative:',
            options: ['$2x^2 - 3x + C$', '$4x^2 - 3x + C$', '$2x^2 - 3 + C$', '$4x - 3 + C$'],
            correctAnswers: ['$2x^2 - 3x + C$'],
            hints: ['$\\int 4x\\,dx = 2x^2$ and $\\int (-3)\\,dx = -3x$.'],
            explanation: '$\\int (4x - 3)\\,dx = 2x^2 - 3x + C$.'
          },
          {
            label: 'Value of $C$:',
            options: ['$C = 5$', '$C = 1$', '$C = -1$', '$C = 7$'],
            correctAnswers: ['$C = 5$'],
            hints: ['$f(2) = 2(4) - 3(2) + C = 8 - 6 + C = 7$.'],
            explanation: '$2 + C = 7$, so $C = 5$.'
          },
          {
            label: '$f(0) =$',
            options: ['$0$', '$5$', '$7$', '$-3$'],
            correctAnswers: ['$5$'],
            hints: ['$f(x) = 2x^2 - 3x + 5$. Set $x = 0$.'],
            explanation: '$f(0) = 0 - 0 + 5 = 5$.'
          }
        ]
      }
    },
    {
      id: 'anti3-input',
      type: 'input-box' as const,
      content: '**Solve the IVP.** ✍️',
      exercise: {
        question: 'If $f\'(x) = 12x^2 - 6x$ and $f(1) = 10$, find $f(2)$.',
        correctAnswer: '29',
        acceptableAnswers: ['29', '29.0'],
        hints: [
          '$f(x) = \\int (12x^2 - 6x)\\,dx = 4x^3 - 3x^2 + C$.',
          '$f(1) = 4 - 3 + C = 10$, so $C = 9$.',
          '$f(x) = 4x^3 - 3x^2 + 9$. Evaluate at $x = 2$.'
        ],
        explanation: '$f(x) = 4x^3 - 3x^2 + C$. $f(1) = 4 - 3 + C = 10 \\Rightarrow C = 9$.\\n\\n$f(2) = 4(8) - 3(4) + 9 = 32 - 12 + 9 = 29$.'
      }
    },
    {
      id: 'anti3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

$$\\boxed{f'(x) + \\text{initial condition} \\xrightarrow{\\int} \\text{unique } f(x)}$$

| Concept | Key Rule |
|:---:|:---:|
| IVP | Antiderivative + initial condition → find $C$ |
| Double IVP | $f'' \\to f' \\to f$ needs TWO conditions |
| Motion | $a \\xrightarrow{\\int} v \\xrightarrow{\\int} s$, each step needs an IC |
| Free fall | $a = -32$ $ft/s^{2}$, $v(t) = -32t + v_0$, $s(t) = -16t^2 + v_0 t + s_0$ |
| AP shortcut | $f(b) = f(a) + \\int_a^b f'(x)\\,dx$ |

> **Up Next:** Part 4 — Algebraic Manipulation Before Integrating.`
    }
  ]
};
