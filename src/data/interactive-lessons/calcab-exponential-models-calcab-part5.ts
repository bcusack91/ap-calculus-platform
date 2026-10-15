export const calcabExpModelsPart5Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp5-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 5 of 7 \u2014 Logistic Growth**

### The Logistic Differential Equation

$$\\boxed{\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)}$$

| Variable | Meaning |
|:---:|:---:|
| $P$ | Population at time $t$ |
| $k$ | Growth rate constant |
| $L$ | Carrying capacity |
| $kP$ | Growth term |
| $(1-P/L)$ | Limiting factor |

### Key Behaviors

| Condition | Growth Rate | Behavior |
|:---:|:---:|:---:|
| $P \\ll L$ | $\\approx kP$ | Nearly exponential |
| $P = L/2$ | Maximum: $kL/4$ | Inflection point |
| $P = L$ | Zero | Equilibrium |
| $P > L$ | Negative | Population decreases toward $L$ |
| $P = 0$ | Zero | No population |

> **Key Fact:** The logistic model is the most realistic population model on the AP exam. It accounts for limited resources.`
    },
    {
      id: 'exp5-shape',
      type: 'text' as const,
      content: `### The Logistic Curve (S-Curve)

| Phase | $P$ range | Shape | Description |
|:---:|:---:|:---:|:---:|
| Phase 1 | $0 < P < L/2$ | Concave up | Accelerating growth |
| Inflection | $P = L/2$ | Changes concavity | Fastest growth rate |
| Phase 2 | $L/2 < P < L$ | Concave down | Decelerating growth |
| Equilibrium | $P = L$ | Horizontal | Stable steady state |

### The Solution (for reference)

$$P(t) = \\frac{L}{1 + Ae^{-kt}} \\quad \\text{where } A = \\frac{L - P_0}{P_0}$$

### Maximum Growth Rate

$$\\boxed{\\left(\\frac{dP}{dt}\\right)_{\\max} = \\frac{kL}{4} \\quad \\text{at } P = \\frac{L}{2}}$$

> **AP Tip:** You do NOT need to memorize the logistic solution formula. AP questions focus on the DE, carrying capacity, inflection point, and qualitative behavior.`
    },
    {
      id: 'exp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Logistic Growth** \ud83c\udfaf\n\nConsider $\\frac{dP}{dt} = 0.5P(1 - P/1000)$.',
      exercise: {
        questions: [
          {
            question: 'The carrying capacity is:',
            options: ['$1000$', '$500$', '$0.5$', '$0$'],
            correctAnswer: 0,
            explanation: '$L = 1000$ from the factor $(1 - P/L)$. $P = 0$ is also an equilibrium, but it is not the carrying capacity; $500 = L/2$ is where growth is fastest, and $0.5$ is the growth constant $k$.'
          },
          {
            question: 'The population is growing fastest when $P =$',
            options: ['$500$', '$1000$', '$250$', '$0$'],
            correctAnswer: 0,
            explanation: 'Maximum growth at $P = L/2 = 500$.'
          },
          {
            question: 'When $P = 1200$, the population is:',
            options: ['Increasing, moving away from 1000', 'Decreasing toward 1000', 'At equilibrium, since $P > L$', 'Decreasing toward 0 and dying out'],
            correctAnswer: 1,
            explanation: '$P > L$: $(1-1200/1000) = -0.2 < 0$, so $dP/dt < 0$. The population decreases toward $L = 1000$ and levels off there; it does not die out, and $P = 1200$ is not an equilibrium because $dP/dt \\ne 0$.'
          }
        ]
      }
    },
    {
      id: 'exp5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Logistic analysis.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{dP}{dt} = 3P(1-P/600)$. The maximum growth rate is:',
            options: ['$3 \\cdot 600 = 1800$', '$\\frac{3 \\cdot 600}{4} = 450$', '$\\frac{3 \\cdot 600}{2} = 900$', '$600/4 = 150$'],
            correctAnswers: ['$\\frac{3 \\cdot 600}{4} = 450$'],
            hints: ['Max rate $= kL/4$.'],
            explanation: '$kL/4 = 3(600)/4 = 450$ at $P = 300$. Dividing by $2$ instead of $4$ forgets the factor $(1 - \\frac{1}{2})$; $3 \\cdot 600$ ignores the logistic factor entirely.'
          },
          {
            label: 'For $P < L/2$, the logistic curve is:',
            options: ['Concave up (increasing faster)', 'Concave down (increasing slower)', 'Linear', 'Decreasing'],
            correctAnswers: ['Concave up (increasing faster)'],
            hints: ['Below the inflection point, growth accelerates.'],
            explanation: 'The inflection point is at $P=L/2$. Below it, the curve is concave up.'
          },
          {
            label: 'As $t \\to \\infty$, the logistic solution approaches:',
            options: ['$0$, after the population crashes', '$\\infty$, with no upper bound', '$L$, the carrying capacity', '$L/2$, the inflection value'],
            correctAnswers: ['$L$, the carrying capacity'],
            hints: ['The carrying capacity is the long-term limit.'],
            explanation: '$\\lim_{t \\to \\infty} P(t) = L$. $L/2$ is where growth is fastest, not where it ends.'
          }
        ]
      }
    },
    {
      id: 'exp5-input',
      type: 'input-box' as const,
      content: '**Compute the maximum growth rate.** \u270d\ufe0f',
      exercise: {
        question: 'A population follows $\\frac{dP}{dt} = 0.4P(1-P/800)$. What is the maximum rate of population growth?\n\n(Enter an integer.)',
        correctAnswer: '80',
        acceptableAnswers: ['80'],
        hints: [
          'Maximum rate $= kL/4$.',
          '$k = 0.4$, $L = 800$.',
          '$kL/4 = 0.4 \\cdot 800/4 = 320/4$.'
        ],
        explanation: 'Max rate $= kL/4 = 0.4(800)/4 = 80$, occurring at $P = 400$.'
      }
    },
    {
      id: 'exp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

| Concept | Formula |
|:---:|:---:|
| Logistic DE | $\\frac{dP}{dt} = kP(1-P/L)$ |
| Carrying capacity | $L$ |
| Fastest growth at | $P = L/2$ |
| Maximum rate | $kL/4$ |
| Long-term behavior | $P \\to L$ |

> **Up Next:** Part 6 \u2014 Problem-Solving Workshop.`
    }
  ]
};
