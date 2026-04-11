export const precalcRatesOfChangePart4Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# ⚡ Instantaneous Rate of Change

**Part 4 of 7**

### AROC vs IROC

| Feature | AROC | IROC |
|:--------|:-----|:-----|
| Formula | $\\frac{f(b)-f(a)}{b-a}$ | $\\lim_{h \\to 0}\\frac{f(a+h)-f(a)}{h}$ |
| Geometry | Secant line slope | Tangent line slope |
| Interval | Finite $[a,b]$ | Single point $x=a$ |
| Measures | Average behavior | Instantaneous behavior |

### Physical Interpretation

- **AROC of position** = average velocity
- **IROC of position** = instantaneous velocity (speedometer reading)
- **AROC of velocity** = average acceleration
- **IROC of velocity** = instantaneous acceleration
      `
    },
    {
      id: 'p4-compute',
      type: 'text' as const,
      content: `
## Computing IROC

### Method 1: Difference Quotient Limit

For $f(x) = x^2 + 2x$ at $x = 3$:

$$\\lim_{h \\to 0}\\frac{(3+h)^2 + 2(3+h) - (9+6)}{h}$$

$$= \\lim_{h \\to 0}\\frac{9 + 6h + h^2 + 6 + 2h - 15}{h}$$

$$= \\lim_{h \\to 0}\\frac{8h + h^2}{h} = \\lim_{h \\to 0}(8 + h) = 8$$

### Method 2: Shrinking Intervals

Approximate IROC at $x=3$ for $f(x)=x^2$:

| Interval | AROC |
|:---------|:-----|
| $[3, 4]$ | $7$ |
| $[3, 3.1]$ | $6.1$ |
| $[3, 3.01]$ | $6.01$ |
| $[3, 3.001]$ | $6.001$ |

Pattern: AROC → $6$ as interval shrinks. So IROC at $x=3$ is $6$.
      `
    },
    {
      id: 'p4-interpret',
      type: 'text' as const,
      content: `
## Interpreting IROC

### Sign of IROC

- $f'(a) > 0$: function is **increasing** at $a$
- $f'(a) < 0$: function is **decreasing** at $a$
- $f'(a) = 0$: function has a **horizontal tangent** (possible max/min)

### Magnitude of IROC

- $|f'(a)|$ is large: function is changing **rapidly**
- $|f'(a)|$ is small: function is changing **slowly**
- $|f'(a)| = 0$: momentarily not changing

### Example: Population Growth

If $P(t) = 1000e^{0.05t}$ gives population at time $t$:
- $P'(0) = 50$: growing at 50 organisms/year initially
- $P'(10) \\approx 82$: growing faster later (exponential!)

The IROC itself is increasing — **accelerating growth**.
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**IROC Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'IROC at $x=2$ for $f(x)=x^2$ (using $f\'(x)=2x$):',
            options: ['$2$', '$4$', '$8$', '$0$'],
            correctAnswer: 1,
            explanation: '$f\'(2) = 2(2) = 4$.'
          },
          {
            question: 'If $f\'(5) = -3$, at $x=5$ the function is:',
            options: ['Increasing at rate 3', 'Decreasing at rate 3', 'At a maximum', 'Undefined'],
            correctAnswer: 1,
            explanation: 'Negative derivative means decreasing. $|{-3}| = 3$ is the rate.'
          },
          {
            question: 'How do shrinking intervals approximate IROC?',
            options: ['AROC values approach IROC', 'Secant slopes diverge', 'No connection', 'IROC = average of AROCs'],
            correctAnswer: 0,
            explanation: 'As the interval shrinks to zero width, AROC converges to IROC.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Find the IROC:**

**1)** $f(x)=x^2-3x$ at $x=4$ (DQ simplifies to $2x+h-3$):

**2)** $f(x)=x^3$ at $x=1$ (DQ limit: $3x^2$):

**3)** Position $s(t) = t^2 + 5t$. Instantaneous velocity at $t=3$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '3', '11'],
        hint1: '$2(4)+0-3 = 5$.',
        hint2: '$3(1)^2 = 3$.',
        hint3: '$s\'(t) = 2t+5$, so $s\'(3) = 11$.',
        explanation: '(1) $2(4)-3=5$. (2) $3(1)=3$. (3) $2(3)+5=11$ units/time.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**IROC Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'IROC is the slope of the:',
            options: ['Secant line', 'Tangent line', 'Normal line', 'Horizontal line'],
            correctAnswer: 1
          },
          {
            label: 'If IROC = 0, the tangent is:',
            options: ['Vertical', 'Horizontal', 'Diagonal', 'Undefined'],
            correctAnswer: 1
          },
          {
            label: 'Instantaneous velocity is IROC of:',
            options: ['Acceleration', 'Position', 'Speed', 'Force'],
            correctAnswer: 1
          },
          {
            label: 'As $h \\to 0$ in the DQ, secant becomes:',
            options: ['Vertical', 'Tangent', 'Horizontal', 'Disappears'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Tangent line', 'Horizontal', 'Position', 'Tangent'],
        hint1: 'IROC = instantaneous rate = tangent slope.',
        hint2: 'Zero slope = flat = horizontal.',
        hint3: 'Velocity = rate of position change.',
        explanation: 'IROC = tangent slope. Zero → horizontal. Velocity = dPosition/dt. h→0: secant → tangent.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$f(x) = 5x^2$. IROC at $x = -1$ (DQ limit: $10x$):',
            options: ['$10$', '$-10$', '$5$', '$-5$'],
            correctAnswer: 1,
            explanation: '$f\'(x) = 10x$, so $f\'(-1) = -10$. Negative = decreasing.'
          },
          {
            question: 'The relationship between AROC and IROC:',
            options: ['AROC = IROC always', 'IROC = limit of AROC as interval → 0', 'They are unrelated', 'AROC > IROC always'],
            correctAnswer: 1,
            explanation: 'IROC is the limit of AROC as the interval width shrinks to zero.'
          }
        ]
      }
    }
  ]
};
