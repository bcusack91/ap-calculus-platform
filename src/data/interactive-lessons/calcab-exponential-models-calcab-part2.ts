export const calcabExpModelsPart2Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp2-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 2 of 7 \u2014 Newton\u2019s Law of Cooling**

### The Differential Equation

$$\\boxed{\\frac{dT}{dt} = k(T - T_s)} \\quad \\text{where } k < 0$$

### The Solution

$$\\boxed{T(t) = T_s + (T_0 - T_s)e^{kt}}$$

| Variable | Meaning |
|:---:|:---:|
| $T(t)$ | Temperature at time $t$ |
| $T_s$ | Surrounding (ambient) temperature |
| $T_0$ | Initial temperature $T(0)$ |
| $k$ | Cooling constant ($k < 0$) |
| $T_0 - T_s$ | Initial temperature difference |

> **Key Fact:** The temperature difference $(T - T_s)$ decays exponentially. The object never overshoots the ambient temperature.`
    },
    {
      id: 'exp2-worked',
      type: 'text' as const,
      content: `### Worked Example

A cup of coffee at $200\u00b0F$ is placed in a $70\u00b0F$ room. After 10 minutes it\u2019s $150\u00b0F$.

| Step | Computation |
|:---:|:---:|
| Set up | $T(t) = 70 + 130e^{kt}$ |
| Use data point | $150 = 70 + 130e^{10k}$ |
| Solve for $e^{10k}$ | $e^{10k} = \\frac{80}{130} = \\frac{8}{13}$ |
| Find $k$ | $k = \\frac{1}{10}\\ln\\frac{8}{13} \\approx -0.0486$ |
| Final model | $T(t) = 70 + 130e^{-0.0486t}$ |

**Follow-up:** When does the coffee reach $100\u00b0F$?

$100 = 70 + 130e^{kt}$

$e^{kt} = \\frac{30}{130} = \\frac{3}{13}$

$t = \\frac{\\ln(3/13)}{k} = \\frac{\\ln(3/13)}{\\frac{1}{10}\\ln(8/13)} \\approx 30.2$ min

> **AP Tip:** Always identify $T_s$ first. Then $T_0 - T_s$ is the initial difference. The model is always $T_s + (\\text{difference})e^{kt}$.`
    },
    {
      id: 'exp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Newton\u2019s Cooling** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A $98\u00b0F$ body is found in a $65\u00b0F$ room. After 1 hour it\u2019s $90\u00b0F$. The cooling constant $k$ is:',
            options: ['$\\ln(25/33)$', '$\\ln(33/25)$', '$\\frac{\\ln(25/33)}{65}$', '$-\\frac{8}{33}$'],
            correctAnswer: 0,
            explanation: '$90 = 65 + 33e^{k}$. $25 = 33e^k$. $e^k = 25/33$. $k = \\ln(25/33) \\approx -0.278$.'
          },
          {
            question: 'In Newton\u2019s cooling, as $t \\to \\infty$, the temperature approaches:',
            options: ['$0$', '$T_0$', '$T_s$ (ambient temperature)', '$(T_0 + T_s)/2$'],
            correctAnswer: 2,
            explanation: '$\\lim_{t\\to\\infty} [T_s + (T_0-T_s)e^{kt}] = T_s$ since $e^{kt} \\to 0$ for $k<0$.'
          },
          {
            question: 'A $40\u00b0F$ item is placed in a $72\u00b0F$ room. The model is:',
            options: ['$T = 72 + 32e^{kt}$', '$T = 72 - 32e^{kt}$', '$T = 40 + 32e^{kt}$', '$T = 40 - 32e^{kt}$'],
            correctAnswer: 1,
            explanation: '$T_s=72$, $T_0=40$. $T = 72 + (40-72)e^{kt} = 72 - 32e^{kt}$. (Object warms up since $T_0 < T_s$.)'
          }
        ]
      }
    },
    {
      id: 'exp2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze cooling scenarios.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'If a hot object cools from $200\u00b0$ to $150\u00b0$ in 10 min in a $70\u00b0$ room, the temperature difference at 10 min is:',
            options: ['$80\u00b0$', '$130\u00b0$', '$150\u00b0$', '$50\u00b0$'],
            correctAnswers: ['$80\u00b0$'],
            hints: ['Temperature difference = $T(t) - T_s = 150 - 70$.'],
            explanation: '$T - T_s = 150 - 70 = 80\u00b0$F.'
          },
          {
            label: 'The rate of cooling is fastest when:',
            options: ['The object is at ambient temperature', 'The temperature difference is greatest (at $t=0$)', 'The object has cooled halfway', 'After one half-life'],
            correctAnswers: ['The temperature difference is greatest (at $t=0$)'],
            hints: ['$dT/dt = k(T-T_s)$. Larger $|T-T_s|$ means faster rate.'],
            explanation: 'The rate is proportional to the temperature difference, which is largest initially.'
          },
          {
            label: 'Newton\u2019s Law is similar to exponential decay because:',
            options: ['Both involve $e^{kt}$ with $k>0$', 'The temperature difference $(T-T_s)$ decays exponentially', 'The temperature itself decays to zero', 'Both have constant rates'],
            correctAnswers: ['The temperature difference $(T-T_s)$ decays exponentially'],
            hints: ['Let $u = T - T_s$. Then $du/dt = ku$.'],
            explanation: 'The substitution $u = T - T_s$ reduces Newton\u2019s Law to $du/dt = ku$, standard exponential decay.'
          }
        ]
      }
    },
    {
      id: 'exp2-input',
      type: 'input-box' as const,
      content: '**Apply Newton\u2019s Law.** \u270d\ufe0f',
      exercise: {
        question: 'A $180\u00b0F$ pie is placed in a $68\u00b0F$ room. After 20 minutes, it\u2019s $124\u00b0F$. What is the temperature (in \u00b0F) after 40 minutes?\n\n(Enter an integer.)',
        correctAnswer: '96',
        acceptableAnswers: ['96'],
        hints: [
          '$T = 68 + 112e^{kt}$. At $t=20$: $124 = 68 + 112e^{20k}$.',
          '$56 = 112e^{20k}$, so $e^{20k} = 1/2$.',
          'At $t=40$: $T = 68 + 112e^{40k} = 68 + 112(1/2)^2 = 68 + 28$.'
        ],
        explanation: '$e^{20k} = 1/2$. At $t=40$: $T = 68 + 112 \\cdot (1/4) = 68 + 28 = 96$. Wait: $112/4 = 28$. $68+28 = 96$.'
      }
    },
    {
      id: 'exp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

| Concept | Formula |
|:---:|:---:|
| Newton\u2019s cooling DE | $\\frac{dT}{dt} = k(T - T_s)$ |
| Solution | $T = T_s + (T_0 - T_s)e^{kt}$ |
| Long-term behavior | $T \\to T_s$ |
| Warming variant | Same formula when $T_0 < T_s$ |

> **Up Next:** Part 3 \u2014 Compound Interest & Continuous Growth.`
    }
  ]
};
