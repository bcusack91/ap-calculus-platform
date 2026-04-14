export const calcbcDiffEqPart3Data = {
  topicSlug: 'differential-equations-bc-calcbc',
  sections: [
    {
      id: 'de3-intro',
      type: 'text' as const,
      content: `# Modeling with Differential Equations

**Part 3 of 7 — Setting Up DEs from Context**

### Translating Words to DEs

The AP exam frequently presents real-world scenarios and asks you to write or interpret a DE.

| Phrase | DE translation |
|--------|---------------|
| "Rate of change is proportional to $y$" | $dy/dt = ky$ |
| "Rate proportional to amount remaining" | $dy/dt = -ky$ ($k > 0$) |
| "Rate proportional to product of $y$ and $(L - y)$" | $dy/dt = ky(L - y)$ |
| "Rate proportional to difference from equilibrium" | $dy/dt = k(M - y)$ |

> **Key Fact:** "Proportional to" means "equals a constant times." The constant $k$ is always introduced.`
    },
    {
      id: 'de3-models',
      type: 'text' as const,
      content: `### Classic Models

**Exponential Growth/Decay:**
$$\\boxed{\\frac{dy}{dt} = ky \\implies y = y_0 e^{kt}}$$
- $k > 0$: growth (population, compound interest)
- $k < 0$: decay (radioactive, cooling)

**Newton's Law of Cooling:**
$$\\boxed{\\frac{dT}{dt} = k(T - T_s)}$$
where $T_s$ is the surrounding temperature, $k < 0$.

**Solution:** $T(t) = T_s + (T_0 - T_s)e^{kt}$

**Mixing Problems:**
$$\\frac{dy}{dt} = \\text{rate in} - \\text{rate out}$$

> **AP Tip:** On FRQs, you may need to SET UP the DE from a problem description, not just solve one.`
    },
    {
      id: 'de3-example',
      type: 'text' as const,
      content: `### Worked Example — Newton's Law of Cooling

A cup of coffee at 200°F is placed in a 70°F room. After 5 minutes, it is 180°F. Find the temperature at $t = 10$ minutes.

**Step 1 — DE:** $\\frac{dT}{dt} = k(T - 70)$

**Step 2 — General Solution:** $T = 70 + Ce^{kt}$

**Step 3 — IC $T(0) = 200$:** $200 = 70 + C$, so $C = 130$.

$$T = 70 + 130e^{kt}$$

**Step 4 — Find $k$ using $T(5) = 180$:**
$180 = 70 + 130e^{5k}$
$110 = 130e^{5k}$
$e^{5k} = 11/13$
$k = \\frac{1}{5}\\ln\\frac{11}{13} \\approx -0.0334$

**Step 5 — Find $T(10)$:**
$T(10) = 70 + 130e^{10k} = 70 + 130\\left(\\frac{11}{13}\\right)^2 \\approx 70 + 93.1 \\approx 163.1°F$`
    },
    {
      id: 'de3-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: '"The population grows at a rate proportional to its current size." This means:',
            options: ['$dP/dt = kP$ (exponential growth model)', '$dP/dt = k$ (linear growth)', '$dP/dt = kP^2$', '$P = kt + C$'],
            correctAnswer: 0,
            explanation: '"Proportional to current size" = $kP$.'
          },
          {
            question: 'A substance decays with half-life 10 years. If $y(0) = 100$, the value of $k$ in $y = 100e^{kt}$ is:',
            options: ['$k = -\\ln 2/10 \\approx -0.0693$', '$k = -1/10$', '$k = \\ln 2/10$', '$k = -10/\\ln 2$'],
            correctAnswer: 0,
            explanation: '$50 = 100e^{10k} \\Rightarrow e^{10k} = 1/2 \\Rightarrow 10k = -\\ln 2 \\Rightarrow k = -\\ln 2/10$.'
          },
          {
            question: 'In Newton\'s Law of Cooling, $T(t) \\to T_s$ as $t \\to \\infty$ because:',
            options: ['$e^{kt} \\to 0$ when $k < 0$, so $T \\to T_s + 0 = T_s$', 'The temperature drops linearly to $T_s$', '$k$ becomes zero over time', 'The DE has no solution for large $t$'],
            correctAnswer: 0,
            explanation: 'With $k < 0$, the exponential term decays to 0. The temperature approaches the surrounding temperature.'
          }
        ]
      }
    },
    {
      id: 'de3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Setting Up a DE**\n\nA tank holds 100 liters of pure water. Salt solution (2 g/L) flows in at 5 L/min. The well-mixed solution flows out at 5 L/min.',
      exercise: {
        dropdowns: [
          {
            label: 'Rate of salt IN (grams per minute):',
            options: ['$2 \\times 5 = 10$ g/min', '$5$ g/min', '$2$ g/min', '$100$ g/min'],
            correctAnswers: ['$2 \\times 5 = 10$ g/min'],
            hints: ['Concentration × flow rate.'],
            explanation: '2 g/L × 5 L/min = 10 g/min entering.'
          },
          {
            label: 'If $y(t)$ = grams of salt at time $t$, concentration in tank is $y/100$. Rate OUT:',
            options: ['$5y/100 = y/20$ g/min', '$5y$ g/min', '$y/5$ g/min', '$2y/100$ g/min'],
            correctAnswers: ['$5y/100 = y/20$ g/min'],
            hints: ['Outflow rate × concentration in tank.'],
            explanation: '5 L/min × $y/100$ g/L = $y/20$ g/min.'
          },
          {
            label: 'The DE for $y(t)$ is:',
            options: ['$dy/dt = 10 - y/20$', '$dy/dt = 10 - 5y$', '$dy/dt = 2 - y/100$', '$dy/dt = 10y/100$'],
            correctAnswers: ['$dy/dt = 10 - y/20$'],
            hints: ['Rate in − rate out.'],
            explanation: '$dy/dt = 10 - y/20$. As $t \\to \\infty$, $y \\to 200$ grams (equilibrium).'
          }
        ]
      }
    },
    {
      id: 'de3-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'A population doubles every 4 years. If $P(0) = 500$, what is $P(4)$?',
        correctAnswer: '1000',
        acceptableAnswers: ['1000', '1000.0'],
        hints: ['"Doubles every 4 years" means $P(4) = 2P(0)$.'],
        explanation: '$P(4) = 2 \\times 500 = 1000$.'
      }
    },
    {
      id: 'de3-summary',
      type: 'text' as const,
      content: `### Key Models

| Model | DE | Solution |
|-------|-----|---------|
| Exponential growth | $y' = ky$ | $y = y_0 e^{kt}$ |
| Exponential decay | $y' = -ky$ | $y = y_0 e^{-kt}$ |
| Newton's cooling | $T' = k(T - T_s)$ | $T = T_s + (T_0 - T_s)e^{kt}$ |
| Mixing | $y' = \\text{in} - \\text{out}$ | Varies |

$$\\boxed{\\text{Half-life: } k = -\\frac{\\ln 2}{t_{1/2}}}$$

**Next: Part 4 — Slope Fields and Qualitative Analysis**`
    }
  ]
};
