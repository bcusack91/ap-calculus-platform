export const calcabDefiniteIntegralsPart5Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int5-intro',
      type: 'text' as const,
      content: `# ∫ Definite Integrals

**Part 5 of 7 — FTC Part 2 & Net Change**

### The Evaluation Theorem (FTC Part 2)

$$\\boxed{\\int_a^b f(x)\\,dx = F(b) - F(a) \\quad \\text{where } F' = f}$$

**Notation:** $F(x)\\Big|_a^b$ or $\\left[F(x)\\right]_a^b = F(b) - F(a)$

### Quick Evaluation Examples

| Integral | Antiderivative | Evaluation |
|:---:|:---:|:---:|
| $\\int_0^2 3x^2\\,dx$ | $x^3$ | $8 - 0 = 8$ |
| $\\int_1^e \\frac{1}{x}\\,dx$ | $\\ln x$ | $1 - 0 = 1$ |
| $\\int_0^1 e^x\\,dx$ | $e^x$ | $e - 1$ |
| $\\int_0^{\\pi/2} \\cos x\\,dx$ | $\\sin x$ | $1 - 0 = 1$ |

> **Key Fact:** You can use ANY antiderivative — so always choose $C = 0$ for simplicity.`
    },
    {
      id: 'int5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Evaluate Using FTC Part 2** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_1^3 (2x - 1)\\,dx$.',
            options: ['$4$', '$6$', '$8$', '$2$'],
            correctAnswer: 1,
            explanation: '$[x^2 - x]_1^3 = (9 - 3) - (1 - 1) = 6 - 0 = 6$.'
          },
          {
            question: 'Evaluate $\\int_0^{\\pi} \\sin x\\,dx$.',
            options: ['$0$', '$1$', '$2$', '$-2$'],
            correctAnswer: 2,
            explanation: '$[-\\cos x]_0^{\\pi} = -(-1) - (-1) = 1 + 1 = 2$.'
          },
          {
            question: 'Evaluate $\\int_1^4 \\frac{3}{\\sqrt{x}}\\,dx$.',
            options: ['$6$', '$3$', '$9$', '$12$'],
            correctAnswer: 0,
            explanation: '$\\int 3x^{-1/2}\\,dx = 6\\sqrt{x}$. $[6\\sqrt{x}]_1^4 = 12 - 6 = 6$.'
          }
        ]
      }
    },
    {
      id: 'int5-netchange',
      type: 'text' as const,
      content: `### Net Change Theorem

$$\\boxed{\\int_a^b f'(x)\\,dx = f(b) - f(a)}$$

**The integral of a rate of change gives the NET CHANGE in the original quantity.**

### Applications Table

| Quantity | Rate | $\\int_a^b (\\text{rate})\\,dt$ gives... |
|:---:|:---:|:---:|
| Position $s(t)$ | Velocity $v(t)$ | **Displacement** $= s(b) - s(a)$ |
| Population $P(t)$ | Growth rate $P'(t)$ | Net population change |
| Water in tank | Flow rate $R(t)$ | Net change in volume |
| Revenue | Marginal revenue | Net change in revenue |
| Temperature | Rate of change | Net temperature change |

### Displacement vs Total Distance

$$\\boxed{\\text{Displacement} = \\int_a^b v(t)\\,dt \\qquad \\text{Total Distance} = \\int_a^b |v(t)|\\,dt}$$

| Concept | Formula | Includes direction? |
|:---:|:---:|:---:|
| Displacement | $\\int v\\,dt$ | Yes (can be negative) |
| Total Distance | $\\int |v|\\,dt$ | No (always positive) |

> **AP Tip:** "How far" = total distance ($\\int |v|$). "What is the displacement" or "change in position" = $\\int v$. Read the question carefully!`
    },
    {
      id: 'int5-worked',
      type: 'text' as const,
      content: `### Worked Example — Displacement vs Distance

A particle has $v(t) = t^2 - 4$ on $[0, 3]$.

**Displacement:** $\\int_0^3 (t^2 - 4)\\,dt = [\\frac{t^3}{3} - 4t]_0^3 = (9 - 12) - 0 = -3$

The particle is 3 units to the LEFT of where it started.

**Total Distance:** $v(t) = 0$ at $t = 2$. Split at the zero:

$\\int_0^2 |t^2-4|\\,dt + \\int_2^3 |t^2-4|\\,dt = \\int_0^2 (4-t^2)\\,dt + \\int_2^3 (t^2-4)\\,dt$

$= [4t - \\frac{t^3}{3}]_0^2 + [\\frac{t^3}{3} - 4t]_2^3 = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$

> **Key Concept:** To compute $\\int |v|\\,dt$, find where $v = 0$, split the integral, and negate $v$ on intervals where $v < 0$.`
    },
    {
      id: 'int5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Net Change Theorem** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle has $v(t) = t^2 - 4$. Find its displacement from $t = 0$ to $t = 3$.',
            options: ['$3$ m', '$-3$ m', '$\\frac{23}{3}$ m', '$5$ m'],
            correctAnswer: 1,
            explanation: '$\\int_0^3 (t^2-4)\\,dt = [t^3/3 - 4t]_0^3 = 9 - 12 = -3$ m.'
          },
          {
            question: 'Water flows into a tank at $R(t) = 5 + 2t$ gal/min. How much enters from $t = 0$ to $t = 4$?',
            options: ['$36$ gal', '$28$ gal', '$13$ gal', '$40$ gal'],
            correctAnswer: 0,
            explanation: '$\\int_0^4 (5+2t)\\,dt = [5t + t^2]_0^4 = 20 + 16 = 36$ gal.'
          },
          {
            question: 'If $\\int_2^7 f\'(x)\\,dx = 12$ and $f(2) = 5$, what is $f(7)$?',
            options: ['$12$', '$17$', '$7$', '$60$'],
            correctAnswer: 1,
            explanation: 'Net Change: $f(7) - f(2) = 12$. So $f(7) = 12 + 5 = 17$.'
          }
        ]
      }
    },
    {
      id: 'int5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Interpret each integral.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_0^{10} v(t)\\,dt = -15$ means:',
            options: ['The particle traveled 15 units total', 'The particle is 15 units left of its starting position', 'The particle is 15 units right of its starting position', 'The particle stopped after 15 seconds'],
            correctAnswers: ['The particle is 15 units left of its starting position'],
            hints: ['$\\int v\\,dt$ gives displacement (net change in position), and it is negative.'],
            explanation: 'Displacement = −15 means the particle moved 15 units in the negative direction from its start.'
          },
          {
            label: 'To find the total distance traveled, you compute:',
            options: ['$\\int_a^b v(t)\\,dt$', '$\\int_a^b |v(t)|\\,dt$', '$|\\int_a^b v(t)\\,dt|$', '$\\int_a^b v(t)^2\\,dt$'],
            correctAnswers: ['$\\int_a^b |v(t)|\\,dt$'],
            hints: ['You need absolute value of velocity INSIDE the integral, not outside.'],
            explanation: 'Total distance = $\\int |v|\\,dt$. Note: $|\\int v\\,dt| \\neq \\int |v|\\,dt$ in general!'
          },
          {
            label: 'If $P\'(t) > 0$ for all $t$ in $[0, 5]$, then $\\int_0^5 P\'(t)\\,dt$ is:',
            options: ['Zero', 'Positive', 'Negative', 'Cannot determine'],
            correctAnswers: ['Positive'],
            hints: ['$P\' > 0$ means the population is always increasing.'],
            explanation: '$\\int_0^5 P\' = P(5) - P(0) > 0$ since $P$ is increasing.'
          }
        ]
      }
    },
    {
      id: 'int5-input',
      type: 'input-box' as const,
      content: '**Net Change Problem** ✍️',
      exercise: {
        question: 'A particle has velocity $v(t) = 3t^2 - 12$ and starts at $s(0) = 5$. Find $s(3)$.\n\n(Enter a whole number.)',
        correctAnswer: '-4',
        acceptableAnswers: ['-4', '-4.0'],
        hints: [
          '$s(3) = s(0) + \\int_0^3 v(t)\\,dt$.',
          '$\\int_0^3 (3t^2 - 12)\\,dt = [t^3 - 12t]_0^3$.',
          '$= (27 - 36) - 0 = -9$. So $s(3) = 5 + (-9)$.'
        ],
        explanation: '$s(3) = s(0) + \\int_0^3 (3t^2-12)\\,dt = 5 + [t^3 - 12t]_0^3 = 5 + (27 - 36) = 5 - 9 = -4$.'
      }
    },
    {
      id: 'int5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Concept | Formula |
|:---:|:---:|
| FTC Part 2 | $\\int_a^b f = F(b) - F(a)$ |
| Net Change | $\\int_a^b f\' = f(b) - f(a)$ |
| Displacement | $\\int_a^b v\\,dt$ (signed) |
| Total Distance | $\\int_a^b |v|\\,dt$ (always ≥ 0) |
| Position update | $s(b) = s(a) + \\int_a^b v\\,dt$ |

> **Up Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
