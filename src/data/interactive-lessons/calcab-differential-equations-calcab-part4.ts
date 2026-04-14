export const calcabDiffEqPart4Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de4-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 4 of 7 — Exponential Growth & Decay**

### The Fundamental Model

$$\\boxed{\\frac{dy}{dt} = ky \\implies y = y_0 e^{kt}}$$

| Parameter | Meaning |
|:---:|:---:|
| $y_0$ | Initial value: $y(0) = y_0$ |
| $k > 0$ | Exponential **growth** |
| $k < 0$ | Exponential **decay** |
| $t$ | Time variable |

### Deriving the Solution

$\\frac{dy}{y} = k\\,dt$ → $\\ln|y| = kt + C$ → $y = e^{kt+C} = e^C \\cdot e^{kt} = Ae^{kt}$

At $t = 0$: $y(0) = A = y_0$. So $y = y_0 e^{kt}$.

> **Key Fact:** "$y$ changes at a rate proportional to $y$" is the verbal form of $\\frac{dy}{dt} = ky$.`
    },
    {
      id: 'de4-halflife',
      type: 'text' as const,
      content: `### Doubling Time & Half-Life

| Concept | Formula | Derivation |
|:---:|:---:|:---:|
| **Doubling time** $(k > 0)$ | $T_d = \\frac{\\ln 2}{k}$ | $2y_0 = y_0 e^{kT}$, $\\ln 2 = kT$ |
| **Half-life** $(k < 0)$ | $T_h = \\frac{\\ln 2}{|k|}$ | $\\frac{y_0}{2} = y_0 e^{kT}$, $\\ln(1/2) = kT$ |

### Quick Computation Tricks

| Number of half-lives | Fraction remaining |
|:---:|:---:|
| $1$ | $1/2$ |
| $2$ | $1/4$ |
| $3$ | $1/8$ |
| $n$ | $(1/2)^n$ |

**Example:** Substance has half-life 10 hours. Starting with 200 g:
- After 10 hrs: $100$ g
- After 20 hrs: $50$ g  
- After 30 hrs: $25$ g

Finding $k$: $T_h = \\ln 2 / |k|$ → $k = -\\ln 2 / 10 \\approx -0.0693$`
    },
    {
      id: 'de4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Models** 🎯',
      exercise: {
        questions: [
          {
            question: 'A population doubles every 5 years. Starting at 1000, the population after 15 years is:',
            options: ['$4000$', '$8000$', '$3000$', '$6000$'],
            correctAnswer: 1,
            explanation: '15 years = 3 doublings. $1000 \\times 2^3 = 8000$.'
          },
          {
            question: 'If $\\frac{dP}{dt} = 0.02P$ and $P(0) = 500$, find $P(10)$.',
            options: ['$500e^{0.2}$', '$500e^{0.02}$', '$500e^{2}$', '$10e^{0.02}$'],
            correctAnswer: 0,
            explanation: '$P = 500e^{0.02t}$. $P(10) = 500e^{0.02 \\times 10} = 500e^{0.2}$.'
          },
          {
            question: 'A substance decays with $k = -0.05$. Its half-life is:',
            options: ['$20$ hours', '$\\frac{\\ln 2}{0.05}$ hours', '$\\frac{0.05}{\\ln 2}$ hours', '$\\frac{1}{0.05}$ hours'],
            correctAnswer: 1,
            explanation: '$T_h = \\frac{\\ln 2}{|k|} = \\frac{\\ln 2}{0.05} \\approx 13.86$ hours.'
          }
        ]
      }
    },
    {
      id: 'de4-newton',
      type: 'text' as const,
      content: `### Newton's Law of Cooling

$$\\boxed{\\frac{dT}{dt} = -k(T - T_{env})}$$

| Variable | Meaning |
|:---:|:---:|
| $T$ | Temperature of object |
| $T_{env}$ | Ambient (surrounding) temperature |
| $k > 0$ | Cooling constant |

**Solution:** Let $u = T - T_{env}$, then $\\frac{du}{dt} = -ku$:

$$T(t) = T_{env} + (T_0 - T_{env})e^{-kt}$$

**Example:** Coffee at $200°F$ in a $70°F$ room, $k = 0.1$:

$$T(t) = 70 + 130e^{-0.1t}$$

As $t \\to \\infty$: $T \\to 70°F$ (room temperature).

> **AP Tip:** Newton's Law of Cooling is a VERY common AP FRQ topic. The key insight: the rate of cooling is proportional to the temperature DIFFERENCE, not the temperature itself.`
    },
    {
      id: 'de4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify exponential models.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '"A radioactive isotope decays at a rate proportional to the amount present" means:',
            options: ['$dN/dt = kN$ with $k > 0$', '$dN/dt = kN$ with $k < 0$', '$dN/dt = -kN^2$', '$N = N_0 - kt$'],
            correctAnswers: ['$dN/dt = kN$ with $k < 0$'],
            hints: ['"Decays" means decreasing, so the rate constant is negative.'],
            explanation: '"Proportional to amount" → $kN$. "Decays" → $k < 0$.'
          },
          {
            label: 'For Newton\'s Law of Cooling with $T_{env} = 25$ and $T_0 = 95$, a solution looks like:',
            options: ['$T = 95e^{-kt}$', '$T = 25 + 70e^{-kt}$', '$T = 70 + 25e^{-kt}$', '$T = 95 - 25e^{-kt}$'],
            correctAnswers: ['$T = 25 + 70e^{-kt}$'],
            hints: ['$T = T_{env} + (T_0 - T_{env})e^{-kt} = 25 + (95-25)e^{-kt}$.'],
            explanation: '$T = 25 + 70e^{-kt}$.'
          },
          {
            label: 'If a population triples every 4 years, then $k =$',
            options: ['$\\ln 3 / 4$', '$3/4$', '$\\ln 2 / 4$', '$4 / \\ln 3$'],
            correctAnswers: ['$\\ln 3 / 4$'],
            hints: ['$3P_0 = P_0 e^{4k}$, so $\\ln 3 = 4k$.'],
            explanation: '$e^{4k} = 3$, so $k = \\ln 3 / 4$.'
          }
        ]
      }
    },
    {
      id: 'de4-input',
      type: 'input-box' as const,
      content: '**Apply Newton\'s Law of Cooling.** ✍️',
      exercise: {
        question: 'A pie at $350°F$ is placed in a $75°F$ room. After 10 minutes, the pie is $250°F$. Find the cooling constant $k$ (to 3 decimal places).\n\nUse $T = T_{env} + (T_0 - T_{env})e^{-kt}$.',
        correctAnswer: '0.045',
        acceptableAnswers: ['0.045', '0.0452', '0.046'],
        hints: [
          '$250 = 75 + 275e^{-10k}$.',
          '$175 = 275e^{-10k}$. $e^{-10k} = 175/275 = 7/11$.',
          '$-10k = \\ln(7/11)$. $k = -\\ln(7/11)/10 = \\ln(11/7)/10$.'
        ],
        explanation: '$e^{-10k} = 7/11$. $k = \\frac{\\ln(11/7)}{10} = \\frac{\\ln 1.571}{10} \\approx \\frac{0.4519}{10} \\approx 0.045$.'
      }
    },
    {
      id: 'de4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Model | DE | Solution |
|:---:|:---:|:---:|
| Exponential growth | $dy/dt = ky$, $k>0$ | $y = y_0 e^{kt}$ |
| Exponential decay | $dy/dt = ky$, $k<0$ | $y = y_0 e^{kt}$ |
| Newton's cooling | $dT/dt = -k(T-T_{env})$ | $T = T_{env} + (T_0-T_{env})e^{-kt}$ |
| Doubling time | — | $T_d = \\ln 2/k$ |
| Half-life | — | $T_h = \\ln 2/|k|$ |

> **Up Next:** Part 5 — Particular Solutions & IVPs.`
    }
  ]
};
