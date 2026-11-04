export const mcatThermoPart3Data = {
  topicSlug: 'mcat-general-chemistry-thermodynamics-mcat',
  sections: [
    {
      id: 'thermo3-intro',
      type: 'text' as const,
      content: `# Thermodynamics

**Part 3 of 5 — Gibbs Free Energy, $K_{eq}$ & Cell Potential**

## Gibbs Free Energy ($G$)

$$\\Delta G = \\Delta H - T\\Delta S$$

$\\Delta G$ combines both enthalpy and entropy to predict spontaneity:

| $\\Delta G$ | Process |
|-----------|---------|
| $\\Delta G < 0$ | Spontaneous (thermodynamically favorable) |
| $\\Delta G = 0$ | At equilibrium |
| $\\Delta G > 0$ | Non-spontaneous (requires energy input) |

Temperature governs which effect wins when $\\Delta H$ and $\\Delta S$ have the same sign.

## Standard Gibbs Free Energy ($\\Delta G°$)

$$\\Delta G° = \\Delta H° - T\\Delta S°$$

Also calculable from formation values:
$$\\Delta G° = \\sum n\\Delta G°_f(\\text{products}) - \\sum m\\Delta G°_f(\\text{reactants})$$

### Worked Example — When Does Limestone Decompose?

**Problem 1.** For $\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$, $\\Delta H° = +178$ kJ and $\\Delta S° = +161$ J/K. Assume both stay constant as the temperature changes.

- **(a)** From the signs alone, does high or low temperature favor the reaction?
- **(b)** What is $\\Delta G°$ at $298$ K, and is the reaction spontaneous there?
- **(c)** Above what temperature does the reaction become spontaneous?

**(a) Read the signs.** $\\Delta H > 0$ opposes the reaction and $\\Delta S > 0$ (a gas forms) favors it. With both positive, the $-T\\Delta S$ term wins only at HIGH temperature.

**(b) At room temperature.** Convert $\\Delta S°$ to kJ first: $0.161$ kJ/K. $\\Delta G° = 178 - (298)(0.161) = 178 - 48.0 = +130$ kJ, so the reaction is not spontaneous at $298$ K.

**(c) The crossover.** Set $\\Delta G° = 0$: $T = \\dfrac{\\Delta H°}{\\Delta S°} = \\dfrac{178{,}000\\;\\text{J}}{161\\;\\text{J/K}} \\approx 1110$ K (about $830$°C). Above this temperature $\\Delta G° < 0$, which is why lime is made by roasting limestone in a very hot kiln.

## Relationship Between $\\Delta G°$ and $K_{eq}$

$$\\Delta G° = -RT\\ln K$$

where $R = 8.314$ J/mol·K, $T$ in Kelvin.

| $\\Delta G°$ | $K$ | Meaning |
|------------|-----|---------|
| $< 0$ | $K > 1$ | Products favored at equilibrium |
| $= 0$ | $K = 1$ | Neither side favored at equilibrium |
| $> 0$ | $K < 1$ | Reactants favored at equilibrium |

**Large negative $\\Delta G°$ → large $K$ → reaction runs nearly to completion.**

**Base-10 shortcut:** $\\Delta G° = -2.303RT\\log K$. At $298$ K, $2.303RT \\approx 5.71$ kJ/mol, so every $5.7$ kJ/mol of $\\Delta G°$ changes $K$ by a factor of 10.

## Relationship to Cell Potential ($E°_{\\text{cell}}$)

For electrochemical reactions:

$$\\Delta G° = -nFE°_{\\text{cell}}$$

where:
- $n$ = moles of electrons transferred
- $F = 96{,}485$ C/mol (Faraday constant)
- $E°_{\\text{cell}}$ measured in volts (V)

**Connection between $\\Delta G°$, $K$, and $E°_{\\text{cell}}$:**

$$\\Delta G° = -RT\\ln K = -nFE°_{\\text{cell}}$$

| Sign of $E°_{\\text{cell}}$ | $\\Delta G°$ | Spontaneous? |
|---------------------------|------------|-------------|
| $E°_{\\text{cell}} > 0$ | Negative | Yes |
| $E°_{\\text{cell}} < 0$ | Positive | No |
| $E°_{\\text{cell}} = 0$ | Zero | At equilibrium |

## $\\Delta G$ at Non-Standard Conditions

When the system is not at standard conditions:

$$\\Delta G = \\Delta G° + RT\\ln Q$$

$Q$ is the **reaction quotient**: the same expression as $K$, but built from the current concentrations or pressures rather than the equilibrium ones.

At equilibrium, $\\Delta G = 0$ and $Q = K$, which yields $\\Delta G° = -RT\\ln K$ (as above). If $Q < K$, $\\Delta G < 0$ and the reaction runs forward; if $Q > K$, $\\Delta G > 0$ and it runs in reverse.

### Worked Example — From $\\Delta G°$ to $K$, and Which Way It Runs

**Problem 1.** A reaction has $\\Delta G° = -11.4$ kJ/mol at $298$ K, where $2.303RT \\approx 5.71$ kJ/mol.

- **(a)** Before calculating, is $K$ greater or less than 1?
- **(b)** What is $K$?
- **(c)** A mixture is prepared with $Q = 1000$. What is $\\Delta G$, and which way does the reaction run?

**(a) Sign first.** $\\Delta G° < 0$, so $K > 1$: products are favored at equilibrium.

**(b) Solve for $K$.** $\\log K = \\dfrac{-\\Delta G°}{2.303RT} = \\dfrac{11.4}{5.71} \\approx 2.0$, so $K \\approx 10^{2} = 100$. Check with natural logs: $\\ln K = 11{,}400/(8.314 \\times 298) \\approx 4.60$, and $e^{4.60} \\approx 100$.

**(c) Compare $Q$ with $K$.** $RT\\ln Q = 2.303RT\\log Q = (5.71)(3) = 17.1$ kJ/mol, so $\\Delta G = -11.4 + 17.1 = +5.7$ kJ/mol. $\\Delta G > 0$: the reaction runs in REVERSE, as expected with $Q = 1000$ above $K = 100$ from (b).

## Coupled Reactions

In biochemistry, non-spontaneous reactions are driven by coupling with spontaneous ones:

**Example:** Glucose phosphorylation ($\\Delta G° = +13.8$ kJ) is coupled with ATP hydrolysis ($\\Delta G° = -30.5$ kJ):

$$\\Delta G°_{\\text{total}} = 13.8 + (-30.5) = -16.7\\text{ kJ} \\quad \\text{(spontaneous)}$$

This is how cells use ATP to drive energetically unfavorable biochemical reactions.
`
    },
    {
      id: 'thermo3-quiz',
      type: 'multiple-choice' as const,
      content: `**Gibbs Free Energy, $K_{eq}$ & $E°_{\\text{cell}}$** 🎯`,
      exercise: {
        questions: [
          {
            question: `A reaction has $\\Delta H° = -100$ kJ and $\\Delta S° = -200$ J/K. At what temperature does the reaction become non-spontaneous?`,
            options: [`T > 0 K`, `T > 500 K`, `T > 200 K`, `Always spontaneous`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\Delta G = \\Delta H - T\\Delta S = -100{,}000 - T(-200) = -100{,}000 + 200T$. Non-spontaneous when $\\Delta G > 0$: $-100{,}000 + 200T > 0 \\Rightarrow T > 500\\text{ K}$. Below 500 K, the negative $\\Delta H$ dominates and the reaction is spontaneous. It is not always spontaneous, because the $-T\\Delta S$ term is positive and grows with $T$; $T > 0$ K would mean it is never spontaneous; and $200$ K reads the $\\Delta S$ value as a temperature instead of dividing $\\Delta H$ by $\\Delta S$.`
          },
          {
            question: `A reaction has $\\Delta G° = -17.1$ kJ at 298 K. What is $K_{eq}$? ($R = 8.314$ J/mol·K; $\\ln K = -\\Delta G°/RT$)`,
            options: [`$K \\approx 1$`, `$K \\approx 3$`, `$K \\approx 1000$`, `$K \\approx 7$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$\\ln K = -\\Delta G°/RT = -(-17{,}100)/(8.314 \\times 298) = 17{,}100/2477 = 6.90$. $K = e^{6.90} \\approx \\mathbf{1000}$. Since $\\Delta G° < 0$, $K > 1$ as expected. The value $7$ stops at $\\ln K \\approx 6.9$ and $3$ stops at $\\log K \\approx 3.0$; $1$ comes from leaving $\\Delta G°$ in kJ while $R$ is in J.`
          },
          {
            question: `A galvanic cell has $E°_{\\text{cell}} = +1.20$ V and $n = 2$ mol electrons. What is $\\Delta G°$? ($F = 96{,}500$ C/mol)`,
            options: [
              `$+231.6$ kJ`,
              `$-231.6$ kJ`,
              `$+115.8$ kJ`,
              `$-115.8$ kJ`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\Delta G° = -nFE° = -(2)(96{,}500)(1.20) = -231{,}600\\text{ J} = \\mathbf{-231.6\\text{ kJ}}$. Positive $E°_{\\text{cell}}$ → negative $\\Delta G°$ → galvanic cell is spontaneous. $115.8$ kJ drops $n$, and the positive values miss the minus sign in $-nFE°$.`
          },
          {
            question: `In biochemistry, ATP hydrolysis ($\\Delta G° = -30.5$ kJ) is coupled to drive a reaction with $\\Delta G° = +20.0$ kJ. Is the coupled process spontaneous?`,
            options: [
              `No — the driven reaction has $\\Delta G° > 0$`,
              `Yes — total $\\Delta G° = -10.5$ kJ`,
              `Cannot determine without temperature`,
              `Yes — but only if a catalyst is present`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Coupled reaction total: $\\Delta G°_{\\text{total}} = +20.0 + (-30.5) = -10.5\\text{ kJ}$. Since total $\\Delta G° < 0$, the coupled process is **spontaneous**. This is the biochemical role of ATP — coupling its hydrolysis to drive non-spontaneous reactions.`
          },
          {
            question: `If $\\Delta G° > 0$ for a reaction, which of the following is TRUE at standard conditions?`,
            options: [
              `The reaction cannot proceed in any direction`,
              `$K > 1$, so products are favored at equilibrium`,
              `$E^\\circ_{\\text{cell}} > 0$, as in a galvanic cell`,
              `$K < 1$ and $E^\\circ_{\\text{cell}} < 0$, favoring reactants`
            ],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `$\\Delta G° > 0$ means: (1) non-spontaneous as written; (2) $K < 1$ (reactants favored); (3) $E°_{\\text{cell}} < 0$ (from $\\Delta G° = -nFE°_{\\text{cell}}$, positive $\\Delta G°$ gives negative $E°$). So $K < 1$ with a negative cell potential is correct; $K > 1$ and a positive cell potential describe a spontaneous reaction, and a non-spontaneous reaction can still run in reverse.`
          }
        ]
      }
    },
    {
      id: 'thermo3-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 3

- **Gibbs free energy.** $\\Delta G = \\Delta H - T\\Delta S$: negative is spontaneous, zero is equilibrium, positive is not.
- **Crossover temperature.** When $\\Delta H$ and $\\Delta S$ share a sign, $\\Delta G$ changes sign at $T = \\Delta H/\\Delta S$.
- **One linked trio.** $\\Delta G° = -RT\\ln K = -nFE°_{\\text{cell}}$: $\\Delta G° < 0$, $K > 1$ and $E° > 0$ go together.
- **Non-standard conditions.** $\\Delta G = \\Delta G° + RT\\ln Q$: $Q < K$ runs forward, $Q > K$ runs in reverse.

**Common traps**

- **Mixing kJ and J.** $\\Delta H$ comes in kJ and $\\Delta S$ in J/K; convert before computing $T\\Delta S$ or $\\Delta H/\\Delta S$.
- **$\\Delta G°$ for $\\Delta G$.** $\\Delta G°$ fixes $K$; the direction a real mixture runs depends on $\\Delta G$, which shifts with $Q$.
- **Judging a coupled step alone.** A step with $\\Delta G° > 0$ still runs when coupled to ATP hydrolysis: add the $\\Delta G°$ values.
- **Positive $\\Delta G°$, no reaction.** $\\Delta G° > 0$ only means $K < 1$: some product still forms, and the reverse is spontaneous under standard conditions.
`
    }
  ]
};
