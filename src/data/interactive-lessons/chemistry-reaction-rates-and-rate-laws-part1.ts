export const chemReactionRatesAndRateLawsPart1Data = {
  topicSlug: 'reaction-rates-and-rate-laws',
  sections: [
    {
      id: 'rr1-intro',
      type: 'text' as const,
      content: `# ⚗️ Measuring Reaction Rates

**Part 1 of 7 — How Fast Does It Go?**

---

### Topics in This Part

| Section |
|---------|
| ⚗️ Defining Reaction Rate |
| Key Points |
| Example |
| ⏱️ Average Rate vs. Instantaneous Rate |
| Average Rate |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'rr1-defining-rate',
      type: 'text' as const,
      content: `
## ⚗️ Defining Reaction Rate

For a general reaction:

$$aA + bB \\rightarrow cC + dD$$

The **rate of reaction** is defined as the change in concentration of a reactant or product per unit time:

$$\\boxed{\\text{Rate} = -\\frac{1}{a}\\frac{\\Delta[A]}{\\Delta t} = -\\frac{1}{b}\\frac{\\Delta[B]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta[C]}{\\Delta t} = +\\frac{1}{d}\\frac{\\Delta[D]}{\\Delta t}}$$


---

### Key Points

| Symbol | Meaning |
|--------|---------|
| $\\Delta[A]$ | Change in molar concentration of A |
| $\\Delta t$ | Change in time |
| Negative sign for reactants | Reactants are consumed, so $\\Delta[A] < 0$; the negative sign makes rate positive |
| Stoichiometric coefficients | Divide by coefficient to get a single, unique rate |

> 🔑 **Key Concept:** Rate is always defined as a **positive quantity**. The negative sign for reactants ensures this, since reactant concentrations decrease over time ($\\Delta[A] < 0$).

---

### Example

> **Problem:** For $2\\text{N}_2\\text{O}_5 \\rightarrow 4\\text{NO}_2 + \\text{O}_2$:

> **Solution:**
>
> $$\\boxed{\\text{Rate} = -\\frac{1}{2}\\frac{\\Delta[\\text{N}_2\\text{O}_5]}{\\Delta t} = +\\frac{1}{4}\\frac{\\Delta[\\text{NO}_2]}{\\Delta t} = +\\frac{\\Delta[\\text{O}_2]}{\\Delta t}}$$
>
> If $\\text{O}_2$ appears at $0.024$ M/s, then $\\text{NO}_2$ appears at $4 \\times 0.024 = 0.096$ M/s and $\\text{N}_2\\text{O}_5$ disappears at $2 \\times 0.024 = 0.048$ M/s.
      `
    },
    {
      id: 'rr1-rate-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Rate Definition Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For the reaction 2A → 3B, if B is produced at a rate of 0.060 M/s, what is the rate of disappearance of A?',
            options: [
              '0.020 M/s',
              '0.040 M/s',
              '0.060 M/s',
              '0.090 M/s'
            ],
            correctAnswer: 1,
            explanation: 'Rate = (1/3)(Δ[B]/Δt) = (1/2)(−Δ[A]/Δt). So −Δ[A]/Δt = (2/3)(0.060) = 0.040 M/s.'
          },
          {
            question: 'Why do we include the negative sign when expressing rate in terms of a reactant?',
            options: [
              'Reactants always have negative concentrations',
              'It converts the negative Δ[reactant] to a positive rate value',
              'It indicates the reaction goes in reverse',
              'It is just a convention with no mathematical purpose'
            ],
            correctAnswer: 1,
            explanation: 'Reactant concentrations decrease over time, so Δ[A] is negative. Multiplying by −1 gives a positive rate, since we define rate as a positive quantity.'
          },
          {
            question: 'For $N_{2}$ + $3H_{2}$ → $2NH_{3}$, the rate of disappearance of $H_{2}$ is 0.30 M/s. What is the rate of appearance of $NH_{3}$?',
            options: [
              '0.10 M/s',
              '0.20 M/s',
              '0.30 M/s',
              '0.45 M/s'
            ],
            correctAnswer: 1,
            explanation: 'Rate = (1/3)(−Δ[$H_{2}$]/Δt) = (1/2)(Δ[$NH_{3}$]/Δt). Rate = 0.30/3 = 0.10 M/s. Then Δ[$NH_{3}$]/Δt = 2 × 0.10 = 0.20 M/s.'
          }
        ]
      }
    },
    {
      id: 'rr1-average-vs-instantaneous',
      type: 'text' as const,
      content: `
## ⏱️ Average Rate vs. Instantaneous Rate

### Average Rate

The **average rate** is calculated over a finite time interval:

$$\\boxed{\\text{Average rate} = -\\frac{\\Delta[A]}{\\Delta t} = -\\frac{[A]_{t_2} - [A]_{t_1}}{t_2 - t_1}}$$


---

### Instantaneous Rate

The **instantaneous rate** is the rate at a specific moment — the slope of the tangent line to the concentration-vs-time curve:

$$\\boxed{\\text{Instantaneous rate} = -\\frac{d[A]}{dt}}$$


---

### Key Differences

| Feature | Average Rate | Instantaneous Rate |
|---------|-------------|-------------------|
| Time interval | Finite ($\\Delta t$) | Infinitesimally small ($dt$) |
| Graphically | Slope of secant line | Slope of tangent line |
| Accuracy | Approximation | Exact at that instant |
| As $\\Delta t \\rightarrow 0$ | Approaches instantaneous rate | — |


---

### Initial Rate

The **initial rate** is the instantaneous rate at $t = 0$, before significant product buildup. It is especially useful because:
- Concentrations are known precisely (the starting concentrations)
- Reverse reactions have not yet become significant
- It is used in the **method of initial rates** to determine rate laws

> 🔑 **Key Concept:** The **initial rate** is key to determining rate laws because concentrations are precisely known and the reverse reaction hasn't started.
      `
    },
    {
      id: 'rr1-rate-types-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Average vs. Instantaneous Rate** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The slope of a secant line on a [A] vs t graph gives the',
            options: ['instantaneous rate', 'average rate', 'rate constant', 'half-life']
          },
          {
            label: 'The slope of a tangent line at a specific time gives the',
            options: ['average rate', 'instantaneous rate', 'overall rate constant', 'equilibrium constant']
          },
          {
            label: 'The initial rate is measured at',
            options: ['the midpoint of the reaction', 't = 0', 'equilibrium', 'the endpoint']
          },
          {
            label: 'As Δt becomes very small, the average rate approaches the',
            options: ['equilibrium constant', 'rate constant', 'instantaneous rate', 'zero']
          }
        ],
        correctAnswers: ['average rate', 'instantaneous rate', 't = 0', 'instantaneous rate'],
        hint1: 'A secant line connects two points over a finite interval.',
        hint2: 'A tangent line touches the curve at exactly one point.',
        hint3: 'Initial rate is measured right at the start of the reaction.',
        explanation: 'A secant line spans a finite Δt, giving the average rate. A tangent at one point gives the instantaneous rate. The initial rate is the instantaneous rate at t = 0. As Δt → 0, the secant becomes a tangent.'
      }
    },
    {
      id: 'rr1-measurement-methods',
      type: 'text' as const,
      content: `
## ⏱️ Experimental Methods for Measuring Rates

### Monitoring Concentration Over Time

| Method | What It Measures | Best For |
|--------|-----------------|----------|
| **Spectrophotometry** | Absorbance (Beer\'s Law: $A = \\varepsilon bc$) | Colored solutions |
| **Pressure change** | Total gas pressure | Gas-phase reactions |
| **Conductivity** | Ion concentration | Reactions producing/consuming ions |
| **Mass loss** | Mass of system | Reactions releasing gas |
| **Titration** (aliquot method) | Concentration at specific times | Slow reactions |
| **pH measurement** | [$H^{+}$] or [$OH^{-}$] | Acid/base reactions |


---

### Beer\'s Law Connection

For colored species, absorbance is directly proportional to concentration:

$$\\boxed{A = \\varepsilon b c}$$

where $\\varepsilon$ = molar absorptivity, $b$ = path length, $c$ = concentration. By measuring absorbance over time, you can track $[\\text{colored species}]$ over time.
      `
    },
    {
      id: 'rr1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Rate Calculation Drill** 🧮

Consider the reaction: $2\\text{NO}_2 \\rightarrow 2\\text{NO} + \\text{O}_2$

| Time (s) | [$NO_{2}$] (M) |
|----------|-----------|
| 0 | 0.500 |
| 50 | 0.380 |
| 100 | 0.300 |

**1)** What is the average rate of disappearance of $NO_{2}$ over the first 50 s? (in M/s, 3 significant figures)

**2)** What is the average rate of the reaction over the first 50 s? (divide by stoichiometric coefficient, 3 significant figures)

**3)** What is the average rate of appearance of $O_{2}$ over the interval 0–100 s? (in M/s, 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.0024', '0.0012', '0.0010'],
        hint1: 'Rate of disappearance = −Δ[$NO_{2}$]/Δt = −(0.380 − 0.500)/(50 − 0).',
        hint2: 'Rate of reaction = (1/2) × rate of disappearance of $NO_{2}$.',
        hint3: 'Rate of reaction = rate of appearance of $O_{2}$ (coefficient is 1). Use the 0–100 s interval.',
        explanation: '1) −Δ[$NO_{2}$]/Δt = −(0.380 − 0.500)/50 = 0.120/50 = 0.0024 M/s. 2) Rate = (1/2)(0.0024) = 0.0012 M/s. 3) Over 0–100 s: Rate = (1/2)(−(0.300 − 0.500)/100) = (1/2)(0.0020) = 0.0010 M/s. Rate of $O_{2}$ appearance = 0.0010 M/s.'
      }
    },
    {
      id: 'rr1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Measuring Reaction Rates** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $2H_{2}O_{2}$ → $2H_{2}O$ + $O_{2}$, if $O_{2}$ forms at 0.015 M/s, what is the rate of disappearance of $H_{2}O_{2}$?',
            options: [
              '0.0075 M/s',
              '0.015 M/s',
              '0.030 M/s',
              '0.045 M/s'
            ],
            correctAnswer: 2,
            explanation: 'Rate = Δ[$O_{2}$]/Δt = (1/2)(−Δ[$H_{2}O_{2}$]/Δt). So −Δ[$H_{2}O_{2}$]/Δt = 2 × 0.015 = 0.030 M/s.'
          },
          {
            question: 'Which method would best track the rate of a reaction that produces a colored product?',
            options: [
              'Measuring mass loss',
              'Spectrophotometry',
              'Measuring pressure change',
              'Conductivity'
            ],
            correctAnswer: 1,
            explanation: 'Spectrophotometry (Beer\'s Law) is ideal for tracking colored species. Absorbance is proportional to concentration, allowing direct monitoring.'
          }
        ]
      }
    }
  ]
}
