export const mcatGenChemPart6Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc6-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 6 of 7 — Chemical Kinetics**

Kinetics answers the question **how fast?** Thermodynamics only tells us if a reaction is favorable ($\\Delta G$); kinetics tells us the rate and what factors control it. On the MCAT, kinetics questions often appear in enzyme kinetics passages (Michaelis-Menten is direct kinetics) and analytical chemistry passages.
`
    },
    {
      id: 'gc6-rate-laws',
      type: 'text' as const,
      content: `## Rate Laws & Reaction Orders

### The Rate Law

$$\\text{Rate} = k[A]^m[B]^n$$

- $k$ = rate constant (temperature-dependent)
- $m$, $n$ = reaction orders in A and B — **determined experimentally**, NOT from stoichiometric coefficients
- Overall order = $m + n$

### Method of Initial Rates

Change one reactant concentration at a time and measure the effect on rate:

| $[A]$ doubled | Rate doubles | → 1st order in A ($m=1$) |
|---|---|---|
| $[A]$ doubled | Rate quadruples | → 2nd order in A ($m=2$) |
| $[A]$ doubled | Rate unchanged | → 0th order in A ($m=0$) |

**Worked Example:**

| Experiment | $[A]$ (M) | $[B]$ (M) | Rate (M/s) |
|------------|-----------|-----------|-----------|
| 1 | 0.10 | 0.10 | $2.0 \\times 10^{-4}$ |
| 2 | 0.20 | 0.10 | $8.0 \\times 10^{-4}$ |
| 3 | 0.10 | 0.20 | $4.0 \\times 10^{-4}$ |

- Exp 1→2: [A] doubles, rate × 4 → 2nd order in A
- Exp 1→3: [B] doubles, rate × 2 → 1st order in B
- **Rate = $k[A]^2[B]$**; overall 3rd order

Calculate $k$: $k = \\text{Rate}/([A]^2[B]) = 2.0 \\times 10^{-4}/(0.01 \\times 0.10) = 0.20$ $M^{-2}s^{-1}$
`
    },
    {
      id: 'gc6-integrated',
      type: 'text' as const,
      content: `## Integrated Rate Laws & Half-Lives

### First-Order Reactions (Most Important on MCAT)

$$\\ln[A]_t = \\ln[A]_0 - kt$$

$$[A]_t = [A]_0 e^{-kt}$$

Half-life: $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$ — **concentration-independent** (constant half-life)

**MCAT application:** Radioactive decay, many drug elimination processes, and first-order enzyme reactions at low substrate are 1st order.

### Zero-Order Reactions

$$[A]_t = [A]_0 - kt$$

Half-life: $t_{1/2} = \\frac{[A]_0}{2k}$ — depends on initial concentration

### Second-Order Reactions

$$\\frac{1}{[A]_t} = \\frac{1}{[A]_0} + kt$$

Half-life: $t_{1/2} = \\frac{1}{k[A]_0}$ — inversely proportional to $[A]_0$

### Graphical Identification

| Plot | Linear For | Slope |
|------|-----------|-------|
| $[A]$ vs time | Zero order | $-k$ |
| $\\ln[A]$ vs time | First order | $-k$ |
| $1/[A]$ vs time | Second order | $+k$ |

### Radioactive Decay Example

A radioactive isotope has $t_{1/2} = 5730$ years (Carbon-14). After 11,460 years (2 half-lives):
$$[A] = [A]_0 \\left(\\frac{1}{2}\\right)^2 = \\frac{[A]_0}{4}$$

Only 25% of original remains.
`
    },
    {
      id: 'gc6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Rate Laws & Integrated Equations** 🎯`,
      exercise: {
        questions: [
          {
            question: `In an experiment, tripling $[A]$ triples the rate, and doubling $[B]$ quadruples the rate. The rate law is:`,
            options: [
              `Rate $= k[A][B]^2$`,
              `Rate $= k[A]^2[B]$`,
              `Rate $= k[A][B]$`,
              `Rate $= k[A]^3[B]^2$`
            ],
            correctAnswer: 0,
            explanation: `Tripling [A] triples rate: $3^m = 3$ → $m = 1$ (first order in A). Doubling [B] quadruples rate: $2^n = 4$ → $n = 2$ (second order in B). Rate = $k[A][B]^2$, overall 3rd order.`
          },
          {
            question: `A radioactive sample has a constant half-life. This indicates the decay is:`,
            options: [
              `Zero order`,
              `First order`,
              `Second order`,
              `Third order`
            ],
            correctAnswer: 1,
            explanation: `A concentration-independent, constant half-life is the defining characteristic of first-order kinetics. $t_{1/2} = 0.693/k$ for first-order processes.`
          },
          {
            question: `A drug in the body follows first-order kinetics with $k = 0.139$ $hr^{-1}$. Its half-life is approximately:`,
            options: [
              `5 hours`,
              `7 hours`,
              `2 hours`,
              `10 hours`
            ],
            correctAnswer: 0,
            explanation: `$t_{1/2} = 0.693/k = 0.693/0.139 \\approx 5.0$ hours. After 5 hours, plasma concentration drops to 50% of initial.`
          },
          {
            question: `If rate = $k[A]^2[B]$, by what factor does the rate change when [A] doubles and [B] triples?`,
            options: [
              `6`,
              `8`,
              `12`,
              `24`
            ],
            correctAnswer: 2,
            explanation: `Factor = $[A]^2 \\times [B]^1 = 2^2 \\times 3^1 = 4 \\times 3 = 12$.`
          },
          {
            question: `For a second-order reaction, a plot of ______ vs time yields a straight line with slope = $+k$.`,
            options: [
              `$[A]$`,
              `$\\ln[A]$`,
              `$1/[A]$`,
              `$[A]^2$`
            ],
            correctAnswer: 2,
            explanation: `The integrated second-order rate law is $1/[A]_t = 1/[A]_0 + kt$. A plot of $1/[A]$ vs time is linear with slope $+k$ and y-intercept $1/[A]_0$.`
          }
        ]
      }
    },
    {
      id: 'gc6-arrhenius',
      type: 'text' as const,
      content: `## Arrhenius Equation & Reaction Mechanisms

### Arrhenius Equation

$$k = Ae^{-E_a/RT}$$

$$\\ln k = \\ln A - \\frac{E_a}{RT}$$

- $A$ = frequency factor (collision frequency × proper orientation)
- $E_a$ = activation energy (energy barrier)
- $R = 8.314$ J/(mol·K)
- $T$ = temperature in Kelvin

**Two-temperature form** (MCAT-friendly):

$$\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$

### Effects on Rate

| Factor | Effect on Rate | Effect on $k$ | Effect on $E_a$ | Effect on $\\Delta G$ |
|--------|----------------|--------------|-----------------|----------------------|
| ↑ Temperature | Increases | Increases | No change | No change |
| Add catalyst | Increases | Increases | **Decreases** | No change |
| ↑ Concentration | Increases | No change | No change | No change |

**Catalyst:** provides alternative mechanism with lower $E_a$. Does NOT change $\\Delta G$, $\\Delta H$, $K$, or equilibrium position.

### Reaction Mechanisms & Rate-Determining Step

An elementary mechanism consists of steps; the **slowest step** determines the overall rate.

**Example** — Overall reaction: $2\\text{NO} + \\text{O}_2 \\to 2\\text{NO}_2$

Step 1 (fast): $2\\text{NO} \\rightleftharpoons \\text{N}_2\\text{O}_2$  
Step 2 (slow, rate-determining): $\\text{N}_2\\text{O}_2 + \\text{O}_2 \\to 2\\text{NO}_2$

Rate = $k[\\text{N}_2\\text{O}_2][\\text{O}_2]$

Since $[\\text{N}_2\\text{O}_2] = K_{eq}[\\text{NO}]^2$ from fast equilibrium Step 1:

$$\\text{Rate} = k'[\\text{NO}]^2[\\text{O}_2]$$

**Intermediates** (appear and are consumed during mechanism) do NOT appear in the overall rate law.
`
    },
    {
      id: 'gc6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Arrhenius & Mechanism** 🎯`,
      exercise: {
        questions: [
          {
            question: `A catalyst lowers $E_a$ from 80 kJ/mol to 50 kJ/mol. The $\\Delta G°$ of the reaction:`,
            options: [
              `Decreases by 30 kJ/mol`,
              `Increases by 30 kJ/mol`,
              `Remains unchanged`,
              `Becomes zero`
            ],
            correctAnswer: 2,
            explanation: `Catalysts lower the activation energy for both forward and reverse reactions equally. They do not affect thermodynamics ($\\Delta G°$, $\\Delta H°$, $K$).`
          },
          {
            question: `The rate-determining step of a two-step mechanism is:`,
            options: [
              `Always the first step`,
              `The step with the highest activation energy (slowest step)`,
              `The step that produces the most product`,
              `The step with the lowest activation energy`
            ],
            correctAnswer: 1,
            explanation: `The rate-determining step is the slowest elementary step, which has the highest activation energy barrier. The overall rate cannot exceed the rate of this step.`
          },
          {
            question: `Increasing temperature from 300 K to 310 K increases the rate of a reaction by a factor of 2. This indicates $E_a$ is approximately: ($R = 8.31$ J/mol·K)`,
            options: [
              `~53 kJ/mol`,
              `~8.3 kJ/mol`,
              `~263 kJ/mol`,
              `~0.53 kJ/mol`
            ],
            correctAnswer: 0,
            explanation: `Using $\\ln(k_2/k_1) = (E_a/R)(1/T_1 - 1/T_2)$: $\\ln 2 = (E_a/8.31)(1/300 - 1/310) = (E_a/8.31)(1.08 \\times 10^{-4})$. Solving: $E_a \\approx 0.693/(1.08 \\times 10^{-4}/8.31) \\approx 53$ kJ/mol.`
          }
        ]
      }
    },
    {
      id: 'gc6-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 6

- **Rate law exponents are experimental** — do NOT read them from the balanced equation.
- **Method of initial rates:** vary one reactant, compute rate ratio to find order.
- **First-order half-life** ($t_{1/2} = 0.693/k$) is concentration-independent — diagnostic feature.
- **Graph trick:** which plot is linear identifies the order (0=linear [A]; 1=ln[A]; 2=1/[A]).
- **Catalyst:** lowers $E_a$ for both directions, increases rate, does NOT change equilibrium or $\\Delta G$.
- **Rate-determining step** = slowest step = highest $E_a$ step.
- **Intermediates** appear in mechanism steps but not in the overall rate law.
`
    }
  ]
};
