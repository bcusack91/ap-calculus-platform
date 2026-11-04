export const mcatThermoPart2Data = {
  topicSlug: 'mcat-general-chemistry-thermodynamics-mcat',
  sections: [
    {
      id: 'thermo2-intro',
      type: 'text' as const,
      content: `# Thermodynamics

**Part 2 of 5 — Entropy ($\\Delta S$), Spontaneity & the Laws of Thermodynamics**

## Entropy ($S$)

**Entropy** is a measure of disorder or randomness of a system.

$$\\Delta S = S_{\\text{products}} - S_{\\text{reactants}}$$

| $\\Delta S$ | Meaning |
|------------|---------|
| Positive ($\\Delta S > 0$) | Increased disorder |
| Negative ($\\Delta S < 0$) | Decreased disorder |

## Predicting the Sign of $\\Delta S$

**$\\Delta S > 0$ (entropy increases) when:**

1. Gases are produced from solids/liquids ($\\Delta n_{\\text{gas}} > 0$)
2. A solid dissolves to form aqueous ions
3. Temperature increases (for any substance)
4. A substance vaporizes or melts
5. Mixing occurs
6. Gas occupies larger volume

**$\\Delta S < 0$ (entropy decreases) when:**

1. Gases are consumed ($\\Delta n_{\\text{gas}} < 0$, e.g., 3 mol gas → 1 mol gas)
2. A substance crystallizes/freezes
3. Complex molecules form from simpler ones (polymerization)

## Laws of Thermodynamics

**Zeroth Law:** If A is in thermal equilibrium with B, and B with C, then A is in equilibrium with C. (Defines temperature)

**First Law:** Energy is conserved. $\\Delta E_{\\text{universe}} = 0$.

$$\\Delta U = q + w \\quad (\\text{internal energy} = \\text{heat} + \\text{work})$$

where $\\Delta U$ (also written $\\Delta E$) is the change in internal energy and $w = -P\\Delta V$ for expansion/compression work.

**Second Law:** The entropy of the universe always increases for spontaneous processes.

$$\\Delta S_{\\text{universe}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0 \\quad (\\text{spontaneous})$$

The surroundings' entropy changes with the heat the system releases or absorbs: $\\Delta S_{\\text{surr}} = -\\Delta H_{\\text{sys}}/T$. At a phase change, where the two phases are in equilibrium, $\\Delta S = \\Delta H/T$.

**Third Law:** The entropy of a perfect crystal at absolute zero (0 K) is exactly zero. This establishes an absolute reference for entropy measurements.

## Physics Conventions: Work, Heat and Processes

The physics section writes the First Law with work done BY the system: $\\Delta U = Q - W$. Chemistry writes it with work done ON the system: $\\Delta U = q + w$, so $w = -W$. Both say the same thing: a gas that expands does positive work $W$ on its surroundings and loses that energy.

| Process | What is held fixed | Consequence |
|---|---|---|
| Isothermal | temperature | ideal gas (its $U$ depends only on $T$): $\\Delta U = 0$, so $Q = W$ |
| Adiabatic | no heat flow, $Q = 0$ | $\\Delta U = -W$: an expanding gas cools |
| Isobaric | pressure | $W = P\\Delta V$ |
| Isochoric | volume | $W = 0$, so $\\Delta U = Q$ |

- **PV diagrams:** the work done by a gas is the area under its path on a $P$–$V$ graph, positive for expansion; for a closed cycle, the net work is the enclosed area.
- **Heat transfer:** conduction (direct contact), convection (bulk flow of a fluid) and radiation (electromagnetic waves, no medium needed).
- **Thermal expansion:** a solid's length changes by $\\Delta L = \\alpha L_0 \\Delta T$.
- **Bomb calorimetry:** a sealed, constant-volume calorimeter allows no $P\\Delta V$ work, so it measures $q_v = \\Delta U$; a coffee cup at constant pressure measures $q_p = \\Delta H$.
- **Units:** $1$ cal $= 4.184$ J.

## Standard Molar Entropy ($S°$)

$S° > 0$ for all pure substances (third law). More complex molecules have higher $S°$ values.

$$\\Delta S°_{\\text{rxn}} = \\sum n S°(\\text{products}) - \\sum m S°(\\text{reactants})$$

### Worked Example — Entropy of Ammonia Synthesis

**Problem 1.** For $\\text{N}_2(g) + 3\\text{H}_2(g) \\to 2\\text{NH}_3(g)$ at $298$ K, $\\Delta H° = -92.2$ kJ. $S°$ values (J/mol·K): $\\text{N}_2$ $191.6$, $\\text{H}_2$ $130.7$, $\\text{NH}_3$ $192.8$.

- **(a)** From the moles of gas alone, what sign should $\\Delta S°$ have?
- **(b)** What is $\\Delta S°$ for the reaction?
- **(c)** What are $\\Delta S_{\\text{surr}}$ and $\\Delta S_{\\text{univ}}$ at $298$ K, and is the reaction spontaneous?

**(a) Count the gas.** $4$ mol of gas become $2$ mol, so $\\Delta n_{\\text{gas}} = -2$ and $\\Delta S° < 0$.

**(b) Products minus reactants.** $\\Delta S° = 2(192.8) - [191.6 + 3(130.7)] = 385.6 - 583.7 = -198.1$ J/K, negative as predicted in (a).

**(c) Include the surroundings.** $\\Delta S_{\\text{surr}} = -\\Delta H/T = +92{,}200/298 \\approx +309$ J/K. With $-198.1$ J/K from (b), $\\Delta S_{\\text{univ}} \\approx +309 - 198 = +111$ J/K $> 0$: spontaneous, because the heat released raises the surroundings' entropy by more than the system loses.

## Spontaneity — First Look

A process is **spontaneous** if it can proceed without continuous external input of energy.

**Caution:** Spontaneous does NOT mean fast (kinetics is separate from thermodynamics).

- Exothermic processes ($\\Delta H < 0$) tend to be spontaneous — enthalpy drives spontaneity
- Disorder increasing ($\\Delta S > 0$) tends to be spontaneous — entropy drives spontaneity
- But both factors matter. Gibbs free energy combines them, $\\Delta G = \\Delta H - T\\Delta S$ (with $T$ in kelvin), and a process is spontaneous when $\\Delta G < 0$ (Part 3 of this lesson)

| $\\Delta H$ | $\\Delta S$ | Spontaneous? |
|------------|------------|-------------|
| − | + | Always spontaneous |
| + | − | Never spontaneous |
| − | − | Depends on T (low T favors) |
| + | + | Depends on T (high T favors) |
`
    },
    {
      id: 'thermo2-quiz',
      type: 'multiple-choice' as const,
      content: `**Entropy & Laws of Thermodynamics** 🎯`,
      exercise: {
        questions: [
          {
            question: `For the reaction $\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$, what is the sign of $\\Delta S$?`,
            options: [
              `$\\Delta S < 0$ — two solids form`,
              `$\\Delta S > 0$ — a gas forms`,
              `$\\Delta S = 0$ — no net change in moles`,
              `Cannot be determined without data`
            ],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `A gas ($\\text{CO}_2$) is produced from a solid. Gas has far more entropy than solid phases. $\\Delta n_{\\text{gas}} = +1 \\Rightarrow \\mathbf{\\Delta S > 0}$. Focusing on the two solids ignores the gas, which dominates; the moles do change (1 mol of solid becomes 2 mol of products, one of them a gas); and no data are needed, because the sign follows from the change in moles of gas.`
          },
          {
            question: `The Second Law of Thermodynamics states that:`,
            options: [
              `Energy cannot be created or destroyed`,
              `The entropy of the universe increases for all spontaneous processes`,
              `The entropy of a perfect crystal is zero at 0 K`,
              `The enthalpy of a reaction must be negative for spontaneity`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The **Second Law**: $\\Delta S_{\\text{universe}} > 0$ for spontaneous processes. "Energy cannot be created or destroyed" is the First Law; zero entropy for a perfect crystal at 0 K is the Third Law; the negative-enthalpy requirement is incorrect — spontaneity requires $\\Delta G < 0$, not just $\\Delta H < 0$.`
          },
          {
            question: `Which process has $\\Delta S < 0$?`,
            options: [
              `$\\text{H}_2\\text{O}(l) \\to \\text{H}_2\\text{O}(g)$`,
              `$\\text{NaCl}(s) \\to \\text{Na}^+(aq) + \\text{Cl}^-(aq)$`,
              `$\\text{N}_2(g) + 3\\text{H}_2(g) \\to 2\\text{NH}_3(g)$`,
              `$\\text{H}_2\\text{O}(s) \\to \\text{H}_2\\text{O}(l)$`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$\\text{N}_2 + 3\\text{H}_2 \\to 2\\text{NH}_3$: 4 moles of gas → 2 moles of gas. $\\Delta n_{\\text{gas}} = -2$. Entropy **decreases** ($\\Delta S < 0$). Vaporizing water, dissolving NaCl into aqueous ions and melting ice all increase disorder.`
          },
          {
            question: `A reaction has $\\Delta H = +50$ kJ and $\\Delta S = +100$ J/K. At what temperature does the reaction become spontaneous?`,
            options: [
              `T > 0 K`,
              `T > 500 K`,
              `T > 0.5 K`,
              `The reaction is never spontaneous`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Spontaneous when $\\Delta G < 0$: $\\Delta G = \\Delta H - T\\Delta S < 0$. $+50{,}000 - T(100) < 0$ (converting kJ and J consistently). $T > 50{,}000/100 = \\mathbf{500\\text{ K}}$. Dividing $50$ kJ by $100$ J/K without converting gives $0.5$ K. With $\\Delta H$ and $\\Delta S$ both positive, the reaction is spontaneous only above a crossover, so it is neither spontaneous at every $T$ nor never spontaneous.`
          },
          {
            question: `For the freezing of water at exactly 0°C and 1 atm, which statement is correct?`,
            options: [
              `$\\Delta S_{\\text{sys}} > 0$; freezing is spontaneous`,
              `$\\Delta S_{\\text{sys}} < 0$; the ice melts instead`,
              `$\\Delta S_{\\text{sys}} < 0$; ice and water are at equilibrium`,
              `$\\Delta S_{\\text{universe}} < 0$; freezing cannot occur`
            ],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `At the freezing point (0°C), liquid water and ice are in equilibrium: $\\Delta G = 0$, so neither freezing nor melting is favored. Freezing decreases disorder, so $\\Delta S_{\\text{sys}} < 0$. However, the heat released to the surroundings increases $\\Delta S_{\\text{surr}}$ by exactly the same amount, so $\\Delta S_{\\text{universe}} = 0$, not negative. Freezing is spontaneous only below 0°C, and melting only above it.`
          },
          {
            question: `An ideal gas expands isothermally, doing $300$ J of work on its surroundings. Using the physics form $\\Delta U = Q - W$, what are $\\Delta U$ and the heat $Q$ added to the gas?`,
            options: [
              `$\\Delta U = +300$ J; $Q = 0$`,
              `$\\Delta U = -300$ J; $Q = 0$`,
              `$\\Delta U = 0$; $Q = +300$ J`,
              `$\\Delta U = 0$; $Q = -300$ J`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `An ideal gas's internal energy depends only on its temperature, so an isothermal process has $\\Delta U = 0$. Then $Q = W = +300$ J: the gas absorbs as much heat as the work it does. $\\Delta U = -300$ J with $Q = 0$ describes an adiabatic expansion, $Q = -300$ J gets the sign of the work backwards, and $\\Delta U = +300$ J ignores the constant temperature.`
          }
        ]
      }
    },
    {
      id: 'thermo2-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **Predicting $\\Delta S$.** Entropy rises when gas forms, a solid melts or dissolves, substances mix, or temperature rises.
- **First Law.** Energy is conserved: $\\Delta U = q + w$, where expansion work is $w = -P\\Delta V$.
- **Second Law.** Every spontaneous process has $\\Delta S_{\\text{universe}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0$.
- **The sign table.** $\\Delta H < 0$ with $\\Delta S > 0$ is always spontaneous; the reverse never; same signs depend on $T$.

**Common traps**

- **Spontaneous means fast.** Spontaneity is thermodynamics and rate is kinetics, so a spontaneous reaction can be very slow.
- **Mixing work signs.** Physics' $\\Delta U = Q - W$ counts work done BY the gas; chemistry's $\\Delta U = q + w$ counts work done ON it.
- **Counting every mole.** Judge $\\Delta S$ by moles of GAS: $\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$ has $\\Delta S > 0$.
- **System entropy alone.** Lower $S_{\\text{sys}}$ can still be spontaneous if $\\Delta S_{\\text{surr}}$ rises by more.
`
    }
  ]
};
