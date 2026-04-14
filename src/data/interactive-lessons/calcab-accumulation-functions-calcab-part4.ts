export const calcabAccumulationPart4Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc4-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 4 of 7 — Net Change & Rate Applications**

### The Net Change Theorem

$$\\boxed{\\int_a^b f'(t)\\,dt = f(b) - f(a)}$$

The integral of a **rate of change** gives the **net change** in the original quantity.

| Rate Function | Integral Gives |
|:---:|:---:|
| Velocity $v(t)$ | Net displacement: $s(b)-s(a)$ |
| Speed $|v(t)|$ | Total distance traveled |
| Population rate $P'(t)$ | Net population change |
| Flow rate $R(t)$ (gal/min) | Net gallons added |
| Cost rate $C'(x)$ | Net cost change |

> **Key Fact:** "Net" means signed — positive and negative parts can cancel. "Total" means unsigned — use absolute value.`
    },
    {
      id: 'acc4-displacement',
      type: 'text' as const,
      content: `### Displacement vs. Total Distance

| Quantity | Formula | Meaning |
|:---:|:---:|:---:|
| **Displacement** | $\\int_a^b v(t)\\,dt$ | Where you end up relative to start |
| **Total distance** | $\\int_a^b |v(t)|\\,dt$ | Odometer reading |

**When $v(t)$ changes sign**, split the integral at the zeros.

**Example:** $v(t) = t - 3$ on $[0, 5]$.

Zero at $t=3$:

| Interval | $\\int$ | Value |
|:---:|:---:|:---:|
| $[0,3]$ | $\\int_0^3 (t-3)\\,dt$ | $-\\frac{9}{2}$ |
| $[3,5]$ | $\\int_3^5 (t-3)\\,dt$ | $2$ |
| **Displacement** | Sum | $-\\frac{9}{2} + 2 = -\\frac{5}{2}$ |
| **Total distance** | Sum of $|\\cdot|$ | $\\frac{9}{2} + 2 = \\frac{13}{2}$ |`
    },
    {
      id: 'acc4-rateinout',
      type: 'text' as const,
      content: `### Rate In / Rate Out Problems

$$\\boxed{\\text{Amount at time } t = \\text{Initial} + \\int_0^t [R_{\\text{in}}(s) - R_{\\text{out}}(s)]\\,ds}$$

**Water Tank Example:**

Water enters a tank at $R_{\\text{in}}(t) = 5 + 4\\sin(t^2)$ gal/min and drains at $R_{\\text{out}}(t) = 3 + t$ gal/min. Initially 50 gallons.

| Question | Setup |
|:---:|:---:|
| Amount at $t=4$ | $50 + \\int_0^4 [R_{\\text{in}}(t) - R_{\\text{out}}(t)]\\,dt$ |
| When is water increasing? | When $R_{\\text{in}}(t) > R_{\\text{out}}(t)$ |
| Maximum amount | Find where $R_{\\text{in}}(t) = R_{\\text{out}}(t)$ and test |
| Total water entering | $\\int_0^4 R_{\\text{in}}(t)\\,dt$ |

> **AP Tip:** Rate in/out problems appear on nearly every AP exam Free Response. Always set up the net rate $R_{\\text{in}} - R_{\\text{out}}$ first.`
    },
    {
      id: 'acc4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Net Change Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle has velocity $v(t) = t^2 - 4t + 3$ on $[0, 4]$. The total distance traveled is:',
            options: ['$4$', '$\\frac{8}{3}$', '$4$', '$\\frac{8}{3} + \\frac{4}{3} + \\frac{8}{3} = \\frac{20}{3}$'],
            correctAnswer: 3,
            explanation: 'Zeros at $t=1,3$. $\\int_0^1 (t^2-4t+3)dt = \\frac{4}{3}$, $\\int_1^3 |...|dt = \\frac{4}{3}$, $\\int_3^4 = \\frac{4}{3}$. Wait: $\\int_0^1 = [\\frac{t^3}{3}-2t^2+3t]_0^1 = \\frac{1}{3}-2+3 = \\frac{4}{3}$. $\\int_1^3 = [\\frac{t^3}{3}-2t^2+3t]_1^3 = (9-18+9)-(\\frac{1}{3}-2+3) = 0-\\frac{4}{3} = -\\frac{4}{3}$. $\\int_3^4 = (\\frac{64}{3}-32+12)-(0) = \\frac{4}{3}$. Total distance = $\\frac{4}{3}+\\frac{4}{3}+\\frac{4}{3} = 4$. Actually total distance = 4.'
          },
          {
            question: 'Water enters at $R_{in}(t) = 8$ gal/min and leaves at $R_{out}(t) = 2t$ gal/min. Starting with 20 gal, the amount at $t = 3$ is:',
            options: ['$35$', '$29$', '$20 + \\int_0^3(8-2t)dt = 35$', '$15$'],
            correctAnswer: 2,
            explanation: '$\\int_0^3(8-2t)dt = [8t-t^2]_0^3 = 24-9 = 15$. Amount = $20+15=35$.'
          },
          {
            question: 'If $\\int_0^5 v(t)\\,dt = -3$ and $\\int_0^5 |v(t)|\\,dt = 11$, then the particle moved backward a total of:',
            options: ['$3$ units', '$7$ units', '$8$ units', '$4$ units'],
            correctAnswer: 1,
            explanation: 'Let forward $= F$, backward $= B$. $F - B = -3$ and $F + B = 11$. So $B = 7$.'
          }
        ]
      }
    },
    {
      id: 'acc4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Interpret the integral.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_2^7 C\'(x)\\,dx = 150$ means:',
            options: ['Total cost is \\$150', 'Net cost increase from unit 2 to unit 7 is \\$150', 'Average cost is \\$150', 'Cost per unit is \\$150'],
            correctAnswers: ['Net cost increase from unit 2 to unit 7 is \\$150'],
            hints: ['Integral of rate = net change.'],
            explanation: 'The integral of the marginal cost from 2 to 7 is $C(7)-C(2) = 150$.'
          },
          {
            label: 'To find total distance from velocity $v(t)$:',
            options: ['$\\int_a^b v(t)\\,dt$', '$\\int_a^b |v(t)|\\,dt$', '$|\\int_a^b v(t)\\,dt|$', '$v(b)-v(a)$'],
            correctAnswers: ['$\\int_a^b |v(t)|\\,dt$'],
            hints: ['Total distance uses absolute value inside the integral.'],
            explanation: 'Total distance $= \\int_a^b |v(t)|\\,dt$. This counts all movement as positive.'
          },
          {
            label: 'Tank is increasing when:',
            options: ['$R_{in}(t) > 0$', '$R_{out}(t) > 0$', '$R_{in}(t) > R_{out}(t)$', '$R_{in}(t) + R_{out}(t) > 0$'],
            correctAnswers: ['$R_{in}(t) > R_{out}(t)$'],
            hints: ['Net rate must be positive.'],
            explanation: 'The amount increases when the inflow rate exceeds the outflow rate.'
          }
        ]
      }
    },
    {
      id: 'acc4-input',
      type: 'input-box' as const,
      content: '**Compute net change.** ✍️',
      exercise: {
        question: 'A particle has velocity $v(t) = 3t^2 - 12t + 9$ for $0 \\le t \\le 4$. Find the total distance traveled.\n\n(Enter an integer.)',
        correctAnswer: '12',
        acceptableAnswers: ['12'],
        hints: [
          'Factor: $v(t) = 3(t^2-4t+3) = 3(t-1)(t-3)$.',
          'Zeros at $t=1$ and $t=3$. Split into three intervals.',
          '$\\int_0^1 v\\,dt = 4$, $\\int_1^3 v\\,dt = -4$, $\\int_3^4 v\\,dt = 4$.'
        ],
        explanation: '$v(t)=3(t-1)(t-3)$. Zeros at $t=1,3$. $\\int_0^1 v\\,dt = [t^3-6t^2+9t]_0^1 = 4$. $\\int_1^3 v\\,dt = [t^3-6t^2+9t]_1^3 = (27-54+27)-(1-6+9) = 0-4 = -4$. $\\int_3^4 v\\,dt = (64-96+36)-(0) = 4$. Total distance $= 4+4+4 = 12$.'
      }
    },
    {
      id: 'acc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Concept | Formula |
|:---:|:---:|
| Net change | $\\int_a^b f'(t)\\,dt = f(b)-f(a)$ |
| Displacement | $\\int_a^b v(t)\\,dt$ |
| Total distance | $\\int_a^b |v(t)|\\,dt$ |
| Rate in/out | Initial $+ \\int_0^t [R_{in}-R_{out}]\\,ds$ |

> **Up Next:** Part 5 — Average Value of a Function.`
    }
  ]
};
