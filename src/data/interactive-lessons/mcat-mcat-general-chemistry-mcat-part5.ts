export const mcatGenChemPart5Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc5-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 5 of 7 — Thermodynamics & Equilibrium**

Thermodynamics tells us **whether** a reaction is favorable; kinetics tells us how fast. The MCAT extensively tests your ability to connect $\\Delta G$, $\\Delta H$, $\\Delta S$, and $K$ to real chemical and biological scenarios (ATP hydrolysis, protein folding, metabolic reactions).
`
    },
    {
      id: 'gc5-enthalpy-entropy',
      type: 'text' as const,
      content: `## Enthalpy, Entropy, and Free Energy

### Enthalpy ($\\Delta H$)

Enthalpy measures heat flow at constant pressure.

- $\\Delta H < 0$: exothermic (heat released to surroundings)
- $\\Delta H > 0$: endothermic (heat absorbed from surroundings)

**Hess's Law:** $\\Delta H_{rxn}$ can be calculated by algebraically combining reaction enthalpies:

$$\\Delta H_{rxn} = \\sum \\Delta H_f°(\\text{products}) - \\sum \\Delta H_f°(\\text{reactants})$$

Standard enthalpy of formation of any **element in its standard state** = 0 (e.g., $O_2(g)$, $C(\\text{graphite})$).

### Entropy ($\\Delta S$)

Entropy measures **disorder or dispersal** of energy.

- $\\Delta S > 0$: increase in disorder (favored)
- $\\Delta S < 0$: decrease in disorder (unfavored)

**Predicting sign of $\\Delta S$:**
- Solid → liquid → gas: $\\Delta S > 0$
- Dissolving most salts: $\\Delta S > 0$
- More moles of gas products than reactants: $\\Delta S > 0$
- Protein folding, crystallization: $\\Delta S < 0$

### Gibbs Free Energy ($\\Delta G$)

$$\\Delta G = \\Delta H - T\\Delta S$$

- $\\Delta G < 0$: spontaneous (thermodynamically favorable)
- $\\Delta G > 0$: non-spontaneous
- $\\Delta G = 0$: system at equilibrium

**Temperature crossover:** For reactions where $\\Delta H$ and $\\Delta S$ have the same sign, spontaneity depends on temperature. Set $\\Delta G = 0$ to find the crossover temperature:

$$T = \\frac{\\Delta H}{\\Delta S}$$
`
    },
    {
      id: 'gc5-spontaneity-table',
      type: 'text' as const,
      content: `## Spontaneity Analysis — The Four Cases

| $\\Delta H$ | $\\Delta S$ | $\\Delta G = \\Delta H - T\\Delta S$ | Spontaneous? |
|-----------|-----------|-------------------------------------|--------------|
| $-$ | $+$ | Always negative | **Always** (at all T) |
| $+$ | $-$ | Always positive | **Never** (at any T) |
| $-$ | $-$ | Negative only when $T < \\Delta H / \\Delta S$ | **Low T only** |
| $+$ | $+$ | Negative only when $T > \\Delta H / \\Delta S$ | **High T only** |

**Biological example:** ATP hydrolysis ($\\text{ATP} + \\text{H}_2\\text{O} \\to \\text{ADP} + P_i$) has $\\Delta G°' \\approx -30.5$ kJ/mol under standard biochemical conditions — spontaneous, drives unfavorable reactions when coupled.

### Connecting $\\Delta G°$ to Equilibrium

$$\\Delta G° = -RT\\ln K$$

$$\\ln K = -\\frac{\\Delta G°}{RT}$$

| $\\Delta G°$ | $K$ | Meaning |
|------------|-----|---------|
| $< 0$ | $> 1$ | Products favored at equilibrium |
| $> 0$ | $< 1$ | Reactants favored at equilibrium |
| $= 0$ | $= 1$ | Neither favored |

### Reaction at Non-Standard Conditions

$$\\Delta G = \\Delta G° + RT\\ln Q$$

When $Q < K$: $\\Delta G < 0$ (forward reaction spontaneous)  
When $Q > K$: $\\Delta G > 0$ (reverse reaction spontaneous)  
When $Q = K$: $\\Delta G = 0$ (equilibrium)
`
    },
    {
      id: 'gc5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Thermodynamics: ΔG, ΔH, ΔS** 🎯`,
      exercise: {
        questions: [
          {
            question: `A reaction has $\\Delta H = +30$ kJ/mol and $\\Delta S = +100$ J/(mol·K). At what temperature does it become spontaneous?`,
            options: [
              `Above 300 K`,
              `Below 300 K`,
              `At all temperatures`,
              `Never spontaneous`
            ],
            correctAnswer: 0,
            explanation: `$\\Delta G = 0$ at $T = \\Delta H / \\Delta S = 30{,}000 \\text{ J/mol} / 100 \\text{ J/(mol}\\cdot\\text{K)} = 300$ K. Above 300 K, $T\\Delta S > \\Delta H$, so $\\Delta G < 0$ (spontaneous). Watch units: convert kJ to J!`
          },
          {
            question: `If $K_{eq} > 1$ at standard conditions, then $\\Delta G°$ is:`,
            options: [
              `Negative`,
              `Positive`,
              `Zero`,
              `Cannot be determined`
            ],
            correctAnswer: 0,
            explanation: `$\\Delta G° = -RT\\ln K$. If $K > 1$, then $\\ln K > 0$, so $-RT\\ln K < 0$ → $\\Delta G° < 0$.`
          },
          {
            question: `The dissolution of $\\text{KNO}_3$ in water is endothermic ($\\Delta H > 0$) but spontaneous at room temperature. This is explained by:`,
            options: [
              `The large increase in entropy ($\\Delta S \\gg 0$) overcoming the unfavorable enthalpy`,
              `The large decrease in entropy compensating for the enthalpy`,
              `A negative enthalpy change`,
              `A decrease in volume`
            ],
            correctAnswer: 0,
            explanation: `When $\\Delta H > 0$ and $\\Delta S > 0$, spontaneity depends on temperature. At room temperature, $T\\Delta S$ is large enough that $\\Delta G = \\Delta H - T\\Delta S < 0$. Dissolution creates significant disorder (entropy increase).`
          },
          {
            question: `For the reaction $\\text{N}_2(g) + 3\\text{H}_2(g) \\to 2\\text{NH}_3(g)$, the sign of $\\Delta S$ is:`,
            options: [
              `Positive (more product moles)`,
              `Negative (4 mol gas → 2 mol gas)`,
              `Zero (all gases)`,
              `Cannot be determined`
            ],
            correctAnswer: 1,
            explanation: `4 moles of gaseous reactants become 2 moles of gaseous products. Fewer moles of gas = less freedom of motion = lower entropy → $\\Delta S < 0$.`
          }
        ]
      }
    },
    {
      id: 'gc5-equilibrium',
      type: 'text' as const,
      content: `## Chemical Equilibrium

### Equilibrium Constant

For $a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$:

$$K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$$

**Important rules:**
- Pure solids and pure liquids are NOT included in $K$ expressions
- $K_p$ uses partial pressures; $K_c$ uses molar concentrations
- $K_p = K_c(RT)^{\\Delta n_{gas}}$ where $\\Delta n_{gas}$ = moles gas products − moles gas reactants

### Le Chatelier's Principle

When a system at equilibrium is disturbed, it shifts to **partially counteract** the disturbance.

| Disturbance | Direction of Shift |
|-------------|-------------------|
| Add reactant | Forward (→) |
| Remove reactant | Reverse (←) |
| Add product | Reverse (←) |
| Remove product | Forward (→) |
| Increase pressure (gas) | Toward fewer moles of gas |
| Decrease pressure (gas) | Toward more moles of gas |
| Increase temperature | Toward endothermic direction |
| Decrease temperature | Toward exothermic direction |
| Add catalyst | No shift (reaches equilibrium faster) |

### Reaction Quotient Q

$$Q = \\frac{[\\text{products (current)}]}{[\\text{reactants (current)}]}$$

- $Q < K$: too many reactants → shifts forward
- $Q > K$: too many products → shifts reverse
- $Q = K$: at equilibrium
`
    },
    {
      id: 'gc5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Equilibrium & Le Chatelier** 🎯`,
      exercise: {
        questions: [
          {
            question: `For the equilibrium $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$, increasing pressure at constant temperature will:`,
            options: [
              `Shift toward $\\text{N}_2\\text{O}_4$ (fewer moles of gas)`,
              `Shift toward $\\text{NO}_2$ (more moles of gas)`,
              `Have no effect on the equilibrium position`,
              `Change the value of $K$`
            ],
            correctAnswer: 0,
            explanation: `Increasing pressure favors the side with fewer moles of gas. Here, 1 mol gas → 2 mol gas, so the reaction shifts left (toward $\\text{N}_2\\text{O}_4$) to reduce pressure.`
          },
          {
            question: `A catalyst is added to a reaction at equilibrium. Which statement is TRUE?`,
            options: [
              `The equilibrium shifts toward products`,
              `$K$ increases`,
              `The system reaches equilibrium faster if disturbed, but $K$ is unchanged`,
              `The activation energy increases`
            ],
            correctAnswer: 2,
            explanation: `Catalysts lower the activation energy for both forward and reverse reactions equally. They do not change $\\Delta G°$, $K$, or equilibrium position — they only affect the rate of reaching equilibrium.`
          },
          {
            question: `For $\\text{PCl}_3(g) + \\text{Cl}_2(g) \\rightleftharpoons \\text{PCl}_5(g)$, $\\Delta H < 0$. Increasing temperature will:`,
            options: [
              `Shift toward products and increase $K$`,
              `Shift toward reactants and decrease $K$`,
              `Shift toward products and decrease $K$`,
              `Have no effect on $K$`
            ],
            correctAnswer: 1,
            explanation: `The reaction is exothermic. Increasing temperature favors the endothermic direction (reverse), shifting toward reactants. This decreases the concentrations of $\\text{PCl}_5$ and increases $[\\text{PCl}_3]$ and $[\\text{Cl}_2]$, so $K$ decreases.`
          },
          {
            question: `At 500 K, a reaction has $\\Delta G° = -8.31$ kJ/mol. Using $R = 8.31$ J/(mol·K), what is $K$?`,
            options: [
              `$K = e^2 \\approx 7.4$`,
              `$K = e^{-2} \\approx 0.14$`,
              `$K = 1$`,
              `$K = e^{0.5} \\approx 1.6$`
            ],
            correctAnswer: 0,
            explanation: `$\\Delta G° = -RT\\ln K \\Rightarrow \\ln K = -\\Delta G°/(RT) = 8310/(8.31 \\times 500) = 8310/4155 = 2.0$. So $K = e^2 \\approx 7.4$.`
          }
        ]
      }
    },
    {
      id: 'gc5-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 5

- **$\\Delta G = \\Delta H - T\\Delta S$:** memorize this and the four cases in the spontaneity table.
- **Watch units:** $\\Delta H$ is usually in kJ; $\\Delta S$ in J/K — convert before calculating $T$ crossover.
- **$\\Delta G° = -RT\\ln K$:** negative $\\Delta G°$ → $K > 1$ → products favored.
- **Le Chatelier:** adding stress shifts system to relieve stress. Catalyst does NOT shift position.
- **$Q$ vs $K$:** $Q < K$ → forward; $Q > K$ → reverse.
- **Hess's Law:** $\\Delta H$ is a state function; add/subtract reactions algebraically.
- **Biological link:** ATP hydrolysis ($\\Delta G° < 0$) drives coupled biosynthetic reactions.
`
    }
  ]
};
