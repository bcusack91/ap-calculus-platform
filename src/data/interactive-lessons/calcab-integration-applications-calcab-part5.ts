export const calcabIntAppsPart5Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia5-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 5 of 7 \u2014 Rate Problems & Net Change**

### The Net Change Theorem

$$\\boxed{\\int_a^b f'(x)\\,dx = f(b) - f(a)}$$

The integral of a rate of change gives the net change in the quantity.

### Common AP Contexts

| Rate Function | What $\\int$ Gives | Units |
|:---:|:---:|:---:|
| $v(t)$ (velocity) | Displacement | distance |
| $|v(t)|$ (speed) | Total distance | distance |
| $R(t)$ (flow rate) | Net volume change | volume |
| $P'(t)$ (pop. rate) | Net population change | count |
| $C'(x)$ (marginal cost) | Total cost change | dollars |

> **Key Fact:** "Rate" in the problem statement means you\u2019re given $f'$, and integration gives $f(b)-f(a)$.`
    },
    {
      id: 'ia5-rateinout',
      type: 'text' as const,
      content: `### Rate In / Rate Out

$$\\boxed{Q(t) = Q_0 + \\int_0^t [R_{in}(s) - R_{out}(s)]\\,ds}$$

### AP FRQ Pattern

| Part | Typical Question |
|:---:|:---:|
| (a) | Compute $\\int_a^b R(t)\\,dt$ and interpret |
| (b) | Is quantity increasing or decreasing at $t = c$? |
| (c) | Find absolute min/max on interval |
| (d) | Average rate over interval |

**Interpretation sentence template:**

"$\\int_a^b R(t)\\,dt = N$ means that $N$ [units] of [quantity] [entered/left] from $t=a$ to $t=b$."

> **AP Tip:** The AP exam almost always asks you to **interpret** the integral in context. Include units and the time interval.`
    },
    {
      id: 'ia5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rate Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Water flows in at $R(t) = 10+\\sin(t)$ gal/min. Total water entering from $t=0$ to $t=\\pi$:',
            options: ['$10\\pi+2$', '$10\\pi$', '$10\\pi-2$', '$2$'],
            correctAnswer: 0,
            explanation: '$\\int_0^{\\pi}(10+\\sin t)dt = [10t-\\cos t]_0^{\\pi} = (10\\pi+1)-(0-1) = 10\\pi+2$.'
          },
          {
            question: 'If $\\int_0^5 v(t)\\,dt = 12$ and $s(0)=3$, then $s(5) =$',
            options: ['$15$', '$12$', '$9$', '$3$'],
            correctAnswer: 0,
            explanation: '$s(5) = s(0) + \\int_0^5 v(t)\\,dt = 3+12 = 15$.'
          },
          {
            question: 'Water enters at $R_{in}=8$ and leaves at $R_{out}=3+t$. The tank is decreasing when:',
            options: ['$t > 5$', '$t > 8$', '$t > 3$', '$t > 11$'],
            correctAnswer: 0,
            explanation: 'Net rate $= 8-(3+t) = 5-t < 0$ when $t > 5$.'
          }
        ]
      }
    },
    {
      id: 'ia5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Interpret the integral.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_2^6 C\'(x)\\,dx = 340$ means:',
            options: ['Total cost is \\$340', 'The cost of producing units 2 through 6 is \\$340', 'Average cost is \\$340', 'Cost per unit is \\$340'],
            correctAnswers: ['The cost of producing units 2 through 6 is \\$340'],
            hints: ['Integral of marginal cost = change in cost: $C(6)-C(2) = 340$.'],
            explanation: '$C(6)-C(2) = 340$: the additional cost from unit 2 to unit 6.'
          },
          {
            label: '$\\int_0^{10} R_{in}(t)\\,dt = 500$ and $\\int_0^{10} R_{out}(t)\\,dt = 350$. Net change in tank:',
            options: ['$150$ gallons added', '$500$ gallons added', '$350$ gallons removed', '$850$ total gallons'],
            correctAnswers: ['$150$ gallons added'],
            hints: ['Net = in $-$ out $= 500-350$.'],
            explanation: 'Net change $= 500-350 = 150$ gallons added to the tank.'
          },
          {
            label: 'Average rate of change of $f$ on $[a,b]$ equals:',
            options: ['$\\frac{f(b)-f(a)}{b-a}$', '$\\frac{1}{b-a}\\int_a^b f(x)\\,dx$', '$f\'(c)$ for some $c$', 'Both the first and third options'],
            correctAnswers: ['Both the first and third options'],
            hints: ['Average rate of change uses the difference quotient. MVT guarantees $f\'(c)$ equals it.'],
            explanation: 'Average rate $= \\frac{f(b)-f(a)}{b-a} = f\'(c)$ by MVT.'
          }
        ]
      }
    },
    {
      id: 'ia5-input',
      type: 'input-box' as const,
      content: '**Apply net change.** \u270d\ufe0f',
      exercise: {
        question: 'Water enters a tank at $R_{in}(t) = 10$ gal/min and drains at $R_{out}(t) = 2t$ gal/min. Starting with 50 gallons, how many gallons are in the tank at $t=4$?\n\n(Enter an integer.)',
        correctAnswer: '74',
        acceptableAnswers: ['74'],
        hints: [
          'Net rate $= 10 - 2t$.',
          '$\\int_0^4(10-2t)dt = [10t-t^2]_0^4 = 40-16 = 24$.',
          'Amount $= 50 + 24$.'
        ],
        explanation: '$50 + \\int_0^4(10-2t)dt = 50 + 24 = 74$ gallons.'
      }
    },
    {
      id: 'ia5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

| Concept | Formula |
|:---:|:---:|
| Net change | $\\int_a^b f'(t)\\,dt = f(b)-f(a)$ |
| Rate in/out | $Q_0 + \\int_0^t(R_{in}-R_{out})ds$ |
| Interpretation | Include units and time interval |

> **Up Next:** Part 6 \u2014 Problem-Solving Workshop.`
    }
  ]
};
