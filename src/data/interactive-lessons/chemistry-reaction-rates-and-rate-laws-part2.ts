export const chemReactionRatesAndRateLawsPart2Data = {
  topicSlug: 'reaction-rates-and-rate-laws',
  sections: [
    {
      id: 'rr2-intro',
      type: 'text' as const,
      content: `
# 🌡️ Factors Affecting Reaction Rate

**Part 2 of 7 — What Makes Reactions Faster?**

Not all reactions proceed at the same speed. Some are explosively fast, while others take geological timescales. In this part, we explore the four major factors that determine how quickly a reaction occurs.
      `
    },
    {
      id: 'rr2-concentration',
      type: 'text' as const,
      content: `
## Factor 1: Concentration of Reactants

**Higher concentration → faster rate** (usually)

### Why?

More particles per unit volume means more frequent collisions. More collisions per second means more chances for a successful (reactive) collision.

### Mathematical Connection

The rate law (which we will derive in later parts) often takes the form:

$$\\text{Rate} = k[A]^m[B]^n$$

Increasing $[A]$ or $[B]$ directly increases the rate (when $m, n > 0$).

### Example

Burning steel wool in pure O₂ (100%) is dramatically faster than in air (21% O₂) because the concentration of oxygen molecules is about 5 times higher.
      `
    },
    {
      id: 'rr2-temperature',
      type: 'text' as const,
      content: `
## Factor 2: Temperature

**Higher temperature → faster rate**

### Why?

At higher temperatures:
1. Molecules move **faster** → more frequent collisions
2. A greater **fraction** of molecules have enough energy to overcome the activation energy barrier

### Rule of Thumb

For many reactions, a **10°C increase** roughly **doubles** the rate. This is an approximation — the actual factor depends on the activation energy.

### Quantitative: The Arrhenius Equation

$$k = Ae^{-E_a/(RT)}$$

where:
- $k$ = rate constant
- $A$ = frequency factor (collision frequency × orientation factor)
- $E_a$ = activation energy
- $R$ = 8.314 J/(mol·K)
- $T$ = temperature in Kelvin

We will explore this equation in depth in a later topic.
      `
    },
    {
      id: 'rr2-surface-area',
      type: 'text' as const,
      content: `
## Factor 3: Surface Area

**Greater surface area → faster rate** (for heterogeneous reactions)

### Why?

In heterogeneous reactions (where reactants are in different phases), the reaction occurs at the **interface** between phases. More exposed surface = more contact area = faster reaction.

### Examples

| Form | Surface Area | Rate |
|------|-------------|------|
| Iron block | Low | Rusts slowly over years |
| Iron filings | Medium | Rusts in days |
| Iron nanoparticles | Very high | Can ignite spontaneously |

### Dust Explosions

Finely powdered combustible materials (flour, coal dust, grain dust) have enormous surface area. If suspended in air, they can ignite and cause devastating explosions. This is why grain elevators have strict safety protocols.
      `
    },
    {
      id: 'rr2-catalysts',
      type: 'text' as const,
      content: `
## Factor 4: Catalysts

**Catalysts speed up reactions without being consumed**

### How?

A catalyst provides an **alternative reaction pathway** with a **lower activation energy** ($E_a$).

$$E_a(\\text{catalyzed}) < E_a(\\text{uncatalyzed})$$

### Key Properties of Catalysts

- **Not consumed** — regenerated at the end of the mechanism
- **Lower $E_a$** — more molecules have sufficient energy to react
- **Do NOT change** $\\Delta H$ or $\\Delta G$ — thermodynamics is unaffected
- **Do NOT shift equilibrium** — both forward and reverse rates increase equally
- **Speed up both directions** equally

### Types

| Type | Description | Example |
|------|-------------|---------|
| **Homogeneous** | Same phase as reactants | Acid catalysis in solution |
| **Heterogeneous** | Different phase (usually solid) | Catalytic converter (Pt surface) |
| **Biological** | Enzymes | Lactase breaking down lactose |
      `
    },
    {
      id: 'rr2-factors-quiz',
      type: 'multiple-choice' as const,
      content: `
**Factors Affecting Rate Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which factor affects reaction rate by increasing the fraction of molecules with sufficient energy to react?',
            options: [
              'Concentration',
              'Surface area',
              'Temperature',
              'Adding an inert gas'
            ],
            correctAnswer: 2,
            explanation: 'Higher temperature shifts the Maxwell-Boltzmann distribution so that a greater fraction of molecules exceed the activation energy. Concentration increases collision frequency but doesn\'t change the energy distribution.'
          },
          {
            question: 'A catalyst speeds up a reaction by:',
            options: [
              'Increasing the temperature of the reaction',
              'Increasing the concentration of reactants',
              'Providing an alternative pathway with lower activation energy',
              'Making the reaction more thermodynamically favorable'
            ],
            correctAnswer: 2,
            explanation: 'A catalyst provides an alternative mechanism with a lower activation energy. It does NOT change ΔH, ΔG, or equilibrium position.'
          },
          {
            question: 'Powdered zinc reacts with HCl faster than a zinc strip because:',
            options: [
              'Powdered zinc has a higher molar mass',
              'Powdered zinc has greater surface area exposed to the acid',
              'Powdered zinc is at a higher temperature',
              'The powder acts as a catalyst'
            ],
            correctAnswer: 1,
            explanation: 'Powdering increases the surface area dramatically. More Zn surface is in contact with HCl at any given moment, so the rate of the heterogeneous reaction increases.'
          }
        ]
      }
    },
    {
      id: 'rr2-factors-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Factor** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Adding a catalyst changes the reaction\'s',
            options: ['ΔH', 'activation energy', 'equilibrium constant', 'entropy']
          },
          {
            label: 'Grinding a solid into a powder increases its',
            options: ['molar mass', 'temperature', 'surface area', 'concentration']
          },
          {
            label: 'Doubling the concentration of a first-order reactant will',
            options: ['double the rate', 'quadruple the rate', 'not change the rate', 'halve the rate']
          },
          {
            label: 'Increasing temperature increases rate primarily by increasing the',
            options: ['number of moles', 'fraction of molecules exceeding Ea', 'equilibrium constant', 'volume']
          }
        ],
        correctAnswers: ['activation energy', 'surface area', 'double the rate', 'fraction of molecules exceeding Ea'],
        hint1: 'Catalysts lower Ea but do not change thermodynamic quantities.',
        hint2: 'Grinding exposes more surface for reaction.',
        hint3: 'For a first-order reactant, Rate = k[A]¹. Doubling [A] doubles the rate.',
        explanation: 'Catalysts lower Ea. Grinding increases surface area. For first-order, rate is directly proportional to [A]. Temperature increases the fraction of molecules with energy ≥ Ea (Boltzmann distribution).'
      }
    },
    {
      id: 'rr2-application-problems',
      type: 'input-boxes' as const,
      content: `
**Application Problems** 🧮

**1)** A reaction has a rate of 0.020 M/s at 25°C. Using the rough rule that rate doubles with each 10°C increase, estimate the rate at 45°C. (in M/s)

**2)** If the concentration of a reactant is tripled, and the reaction is second-order in that reactant, by what factor does the rate increase? (whole number)

**3)** A catalyzed reaction has $E_a = 50$ kJ/mol. The uncatalyzed reaction has $E_a = 120$ kJ/mol. By how many kJ/mol does the catalyst lower the activation energy?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.080', '9', '70'],
        hint1: '45°C is 20°C above 25°C, so two doublings: rate × 2 × 2.',
        hint2: 'Rate ∝ [A]². If [A] → 3[A], rate → 3² = 9 times.',
        hint3: 'ΔEa = 120 − 50 = 70 kJ/mol.',
        explanation: '1) 20°C increase = 2 doublings. 0.020 × 2² = 0.020 × 4 = 0.080 M/s. 2) Rate = k[A]². If [A] triples: rate factor = 3² = 9. 3) 120 − 50 = 70 kJ/mol reduction in activation energy.'
      }
    },
    {
      id: 'rr2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Factors Affecting Rate** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about catalysts is FALSE?',
            options: [
              'They lower the activation energy',
              'They are not consumed in the overall reaction',
              'They shift the equilibrium toward products',
              'They speed up both forward and reverse reactions equally'
            ],
            correctAnswer: 2,
            explanation: 'Catalysts do NOT shift equilibrium. They speed up both forward and reverse reactions equally, so the equilibrium position is unchanged. They lower Ea and are regenerated.'
          },
          {
            question: 'A reaction is zero-order in reactant X. Doubling [X] will:',
            options: [
              'Double the rate',
              'Quadruple the rate',
              'Have no effect on the rate',
              'Halve the rate'
            ],
            correctAnswer: 2,
            explanation: 'For a zero-order reactant, Rate = k[X]⁰ = k. The rate is independent of [X], so changing [X] has no effect.'
          }
        ]
      }
    }
  ]
}
