export const calcabIntAppsPart1Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia1-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 1 of 7 — Average Value of a Function**

### In This Topic

| Part | Topic |
|:---:|:---:|
| **1** | **Average Value of a Function** |
| 2 | Position, Velocity, and Displacement |
| 3 | Total Distance and Speed |
| 4 | Accumulation in Applied Contexts |
| 5 | Rate Problems & Net Change |
| 6 | Practice Workshop |
| 7 | Final Assessment |

This lesson covers the first three topics of Unit 8: average value, motion, and accumulation in context. Area between curves and volumes have their own lessons.

### The Average Value of $f$ on $[a, b]$

$$\\boxed{f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx}$$

**Why it works:** to average $n$ numbers, add them and divide by $n$. Cut $[a, b]$ into $n$ equal pieces of width $\\Delta x = \\frac{b-a}{n}$ and average one sample value from each piece:

$$\\frac{1}{n}\\sum_{i=1}^{n} f(x_i) = \\frac{1}{b-a}\\sum_{i=1}^{n} f(x_i)\\,\\Delta x \;\\longrightarrow\; \\frac{1}{b-a}\\int_a^b f(x)\\,dx$$

**Picture:** when $f \\ge 0$, $f_{\\text{avg}}$ is the height of the rectangle on $[a, b]$ that has the same area as the region under $f$.

> **Key Fact:** If $f$ is continuous on $[a, b]$, then $f(c) = f_{\\text{avg}}$ for at least one $c$ in $[a, b]$, because the average lies between the minimum and maximum values of $f$.`
    },
    {
      id: 'ia1-value-vs-rate',
      type: 'text' as const,
      content: `### Average Value vs. Average Rate of Change

These two phrases sound alike but use different formulas.

| The question asks for | Formula | What it uses |
|:---:|:---:|:---:|
| The average **value** of $f$ on $[a, b]$ | $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$ | An integral of $f$ |
| The average **rate of change** of $f$ on $[a, b]$ | $\\frac{f(b)-f(a)}{b-a}$ | Two values of $f$ |

They connect through rates: if $r(t) = A'(t)$ is a rate, the average value of $r$ is the average rate of change of $A$:

$$\\frac{1}{b-a}\\int_a^b A'(t)\\,dt = \\frac{A(b)-A(a)}{b-a}$$

### Worked Example 1 — From a Formula

Find the average value of $f(x) = \\sqrt{x}$ on $[0, 4]$, and a value $c$ where $f(c)$ equals it.

$$f_{\\text{avg}} = \\frac{1}{4}\\int_0^4 x^{1/2}\\,dx = \\frac{1}{4}\\cdot\\frac{2}{3}x^{3/2}\\Big|_0^4 = \\frac{1}{4}\\cdot\\frac{16}{3} = \\frac{4}{3}$$

$\\sqrt{c} = \\frac{4}{3}$ gives $c = \\frac{16}{9}$, which is in $[0, 4]$.

### Worked Example 2 — From a Graph

$f$ is piecewise linear through $(0, 1)$, $(2, 5)$ and $(6, 5)$. Find its average value on $[0, 6]$.

Areas: trapezoid on $[0, 2]$ is $\\frac{1+5}{2}\\cdot 2 = 6$; rectangle on $[2, 6]$ is $5 \\cdot 4 = 20$.

$$f_{\\text{avg}} = \\frac{6 + 20}{6} = \\frac{13}{3}$$

### Worked Example 3 — From a Table

| $t$ (hours) | 0 | 4 | 6 | 10 |
|:---:|:---:|:---:|:---:|:---:|
| $T(t)$ (°F) | 60 | 68 | 72 | 66 |

Estimate the average temperature over $0 \\le t \\le 10$ with a trapezoidal sum:

$$\\int_0^{10} T(t)\\,dt \\approx 4\\cdot\\frac{60+68}{2} + 2\\cdot\\frac{68+72}{2} + 4\\cdot\\frac{72+66}{2} = 256 + 140 + 276 = 672$$

Average temperature $\\approx \\frac{672}{10} = 67.2$ °F.

> **AP Tip:** Watch the widths. Unequal subintervals need their own widths, and you divide by the whole interval length $b - a$, not by the number of subintervals.`
    },
    {
      id: 'ia1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Average Value** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the average value of $f(x) = 6x^2$ on $[0, 2]$?',
            options: ['$8$', '$16$', '$12$', '$4$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{2}\\int_0^2 6x^2\\,dx = \\frac{1}{2}\\left[2x^3\\right]_0^2 = \\frac{16}{2} = 8$. The integral alone is $16$, the average rate of change $\\frac{f(2) - f(0)}{2} = \\frac{24}{2}$ is $12$, and $4$ divides by 2 twice ($\\frac{16}{2}$, then by 2 again).'
          },
          {
            question: 'What is the average value of $\\cos x$ on $\\left[0, \\frac{\\pi}{2}\\right]$?',
            options: ['$\\frac{2}{\\pi}$', '$1$', '$\\frac{\\pi}{2}$', '$\\frac{1}{2}$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{\\pi/2}\\int_0^{\\pi/2} \\cos x\\,dx = \\frac{2}{\\pi}\\left[\\sin x\\right]_0^{\\pi/2} = \\frac{2}{\\pi}$. The integral alone is $1$, $\\frac{\\pi}{2}$ multiplies by the length instead of dividing, and $\\frac{1}{2}$ averages only the endpoint values $\\cos 0$ and $\\cos\\frac{\\pi}{2}$.'
          },
          {
            question: 'If $\\int_2^8 g(x)\\,dx = 30$, what is the average value of $g$ on $[2, 8]$?',
            options: ['$5$', '$30$', '$\\frac{15}{4}$', '$3$'],
            correctAnswer: 0,
            explanation: 'Divide by the length of the interval, $8 - 2 = 6$: $\\frac{30}{6} = 5$. Dividing by the right endpoint 8 gives $\\frac{15}{4}$, dividing by $8 + 2 = 10$ gives $3$, and $30$ forgets to divide.'
          }
        ]
      }
    },
    {
      id: 'ia1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Value or rate?** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'For $f \\ge 0$, the average value of $f$ on $[a, b]$ is the height of:',
            options: ['The equal-area rectangle on $[a, b]$', 'The highest point of $f$ on $[a, b]$', 'The graph at the midpoint $\\frac{a+b}{2}$', 'The secant line from $a$ to $b$'],
            correctAnswers: ['The equal-area rectangle on $[a, b]$'],
            hints: ['Multiply both sides of the formula by $b - a$.'],
            explanation: '$(b - a)\\,f_{\\text{avg}} = \\int_a^b f(x)\\,dx$: a rectangle of width $b - a$ and height $f_{\\text{avg}}$ has the same area as the region under $f$. The midpoint value matches only for special functions, such as linear ones.'
          },
          {
            label: '$P(t)$ is a population. "Find the average rate of change of $P$ on $[0, 5]$" means:',
            options: ['$\\frac{P(5)-P(0)}{5}$', '$\\frac{1}{5}\\int_0^5 P(t)\\,dt$', '$P\'(2.5)$', '$\\int_0^5 P\'(t)\\,dt$'],
            correctAnswers: ['$\\frac{P(5)-P(0)}{5}$'],
            hints: ['Rate of change of $P$: change in $P$ divided by change in $t$.'],
            explanation: 'The average rate of change uses two values: $\\frac{P(5) - P(0)}{5 - 0}$. $\\frac{1}{5}\\int_0^5 P(t)\\,dt$ is the average value of $P$ (the average population), and $\\int_0^5 P\'(t)\\,dt$ is the total change, not divided by the time.'
          },
          {
            label: '$r(t)$ is a rainfall rate in inches per hour. The average value of $r$ on $[0, 6]$ has units:',
            options: ['inches per hour', 'inches', 'inches per hour per hour', 'hours'],
            correctAnswers: ['inches per hour'],
            hints: ['$\\int_0^6 r(t)\\,dt$ is in inches; then divide by hours.'],
            explanation: 'The integral is in (inches per hour)(hours) = inches, and dividing by 6 hours gives inches per hour. An average value always has the same units as the function being averaged.'
          }
        ]
      }
    },
    {
      id: 'ia1-input',
      type: 'input-box' as const,
      content: '**Compute an average value.** ✍️',
      exercise: {
        question: 'Find the average value of $f(x) = e^x$ on $[0, \\ln 3]$. Give an exact answer, or a decimal correct to three places.',
        correctAnswer: '2/ln(3)',
        acceptableAnswers: ['2/ln(3)', '2/ln3', '2/ln 3', '1.820', '1.82'],
        hints: [
          '$\\int_0^{\\ln 3} e^x\\,dx = e^{\\ln 3} - e^0$.',
          'That is $3 - 1 = 2$.',
          'Divide by the length of the interval, $\\ln 3$.'
        ],
        explanation: '$f_{\\text{avg}} = \\frac{1}{\\ln 3}\\int_0^{\\ln 3} e^x\\,dx = \\frac{3 - 1}{\\ln 3} = \\frac{2}{\\ln 3} \\approx 1.820$.'
      }
    },
    {
      id: 'ia1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Concept | Formula or rule |
|:---:|:---:|
| Average value | $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$ |
| Average rate of change | $\\frac{f(b)-f(a)}{b-a}$ |
| Average of a rate | Net change divided by elapsed time |
| From a table | Trapezoidal (or Riemann) sum, then divide by $b - a$ |
| Units | Same as the units of $f$ |

> **Up Next:** Part 2 — Position, Velocity, and Displacement.`
    }
  ]
};
