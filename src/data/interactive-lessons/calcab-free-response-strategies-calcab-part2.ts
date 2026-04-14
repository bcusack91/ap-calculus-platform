export const calcabFRQPart2Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq2-intro',
      type: 'text' as const,
      content: `# Free-Response Strategies \u2014 Rate & Accumulation FRQs

**Part 2 of 7**

---

### The Most Common FRQ Type

Rate & accumulation problems appear on **nearly every AP exam**. They give a rate function $r(t)$ and ask about total change, average value, or behavior.

### Key Formulas

$$\\boxed{\\text{Net Change: } \\int_a^b r(t)\\,dt = R(b) - R(a)}$$

$$\\boxed{\\text{Accumulation: } R(x) = R(a) + \\int_a^x r(t)\\,dt}$$

$$\\boxed{\\text{Average Value: } r_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b r(t)\\,dt}$$

### Common Rate & Accumulation Tasks

| FRQ Prompt | What to Do |
|:---|:---|
| \u201cFind the total amount\u201d | $\\int_a^b r(t)\\,dt$ |
| \u201cIs the amount increasing or decreasing at $t = c$?\u201d | Check the sign of $r(c)$ |
| \u201cAt what time is the amount greatest?\u201d | Find where $r(t)$ changes from $+$ to $-$ |
| \u201cFind the average rate\u201d | $\\frac{1}{b-a}\\int_a^b r(t)\\,dt$ |
| \u201cFind the amount at time $t$\u201d | $R(a) + \\int_a^t r(s)\\,ds$ |

---

### Worked Example \u2014 Water Tank FRQ

Water flows into a tank at $r(t) = 6t - t^2$ liters/min for $0 \\le t \\le 6$. Initially, the tank has 10 liters.

**(a)** How much water enters the tank during $0 \\le t \\le 6$?

$$\\int_0^6 (6t - t^2)\\,dt = [3t^2 - t^3/3]_0^6 = 108 - 72 = 36 \\text{ liters}$$

**(b)** Amount in tank at $t = 6$: $10 + 36 = 46$ liters.

**(c)** When is the flow rate greatest?

$r'(t) = 6 - 2t = 0 \\implies t = 3$. Since $r''(3) = -2 < 0$, this is a maximum. $r(3) = 9$ L/min.

**(d)** Average flow rate on $[0, 6]$:

$$\\frac{1}{6}\\int_0^6 (6t-t^2)\\,dt = \\frac{36}{6} = 6 \\text{ L/min}$$`
    },
    {
      id: 'frq2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rate & Accumulation Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $r(t) > 0$ for all $t$ in $[0, 5]$, then the total amount is:',
            options: ['Increasing on $[0, 5]$', 'Decreasing on $[0, 5]$', 'Constant', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: 'Positive rate means the quantity is accumulating \u2014 total amount increases.'
          },
          {
            question: '$\\int_0^4 v(t)\\,dt = 20$ means the particle\u2019s:',
            options: ['Net displacement is 20 units', 'Total distance is 20 units', 'Final position is 20', 'Speed is 20'],
            correctAnswer: 0,
            explanation: 'The integral of velocity gives net displacement, not distance (which requires $|v|$).'
          },
          {
            question: 'The amount $A(t) = 100 + \\int_0^t r(s)\\,ds$. If $r(3) = -5$, then at $t = 3$:',
            options: ['$A$ is decreasing at 5 units/time', '$A$ is increasing', '$A = -5$', '$A$ has a maximum'],
            correctAnswer: 0,
            explanation: '$A\'(t) = r(t)$. Since $r(3) = -5 < 0$, the amount is decreasing at $t=3$.'
          }
        ]
      }
    },
    {
      id: 'frq2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Interpret the integral.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_2^7 r(t)\\,dt = 30$ where $r$ = gallons/hour:',
            options: ['30 gallons flowed in from $t=2$ to $t=7$', '$r(t) = 30$ at some point', 'The average rate is 30', 'The tank has 30 gallons'],
            correctAnswers: ['30 gallons flowed in from $t=2$ to $t=7$'],
            hints: ['Integral of rate = total change in quantity.'],
            explanation: 'Net change: 30 gallons entered the tank over the 5-hour period.'
          },
          {
            label: '$r(t)$ changes from positive to negative at $t = 4$:',
            options: ['Amount is greatest at $t=4$', 'Amount is zero at $t=4$', 'Rate is greatest at $t=4$', 'Rate is zero at $t=4$'],
            correctAnswers: ['Amount is greatest at $t=4$'],
            hints: ['When the rate changes from $+$ to $-$, accumulation switches to depletion.'],
            explanation: 'First derivative test: rate positive then negative means the accumulated amount peaks.'
          },
          {
            label: 'Average value of $r$ on $[0, 10]$ if $\\int_0^{10} r(t)\\,dt = 80$:',
            options: ['$8$', '$80$', '$800$', '$0.8$'],
            correctAnswers: ['$8$'],
            hints: ['$r_{\\text{avg}} = \\frac{1}{10-0}\\int_0^{10} r\\,dt$.'],
            explanation: '$\\frac{80}{10} = 8$.'
          }
        ]
      }
    },
    {
      id: 'frq2-input',
      type: 'input-box' as const,
      content: '**Compute the accumulation.** \u270d\ufe0f',
      exercise: {
        question: 'Water flows in at $r(t) = 4t$ L/min. If the tank starts with 5 L, how many liters are in the tank at $t = 3$?',
        correctAnswer: '23',
        acceptableAnswers: ['23'],
        hints: [
          '$\\int_0^3 4t\\,dt = [2t^2]_0^3 = 18$ liters flow in.',
          'Total = initial + accumulated = $5 + 18$.',
          '$= 23$ liters.'
        ],
        explanation: '$5 + \\int_0^3 4t\\,dt = 5 + 18 = 23$.'
      }
    },
    {
      id: 'frq2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

- $\\int_a^b r(t)\\,dt$ = net change in quantity
- Amount at time $t$ = initial + $\\int$ rate
- Rate positive \u2192 amount increasing; rate negative \u2192 amount decreasing
- Always interpret integrals with units and context on FRQs`
    }
  ]
};
