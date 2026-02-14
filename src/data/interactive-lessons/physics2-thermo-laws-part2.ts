export const physics2ThermoLawsPart2Data = {
  topicSlug: 'laws-of-thermodynamics',
  sections: [
    {
      id: 'tl2-intro',
      type: 'text' as const,
      content: `
# ⚡ The First Law of Thermodynamics

**Part 2 of 7 — Energy Conservation for Thermal Systems**

The First Law is simply conservation of energy applied to thermodynamic systems. It connects heat, work, and internal energy in one powerful equation.
      `
    },
    {
      id: 'tl2-first-law',
      type: 'text' as const,
      content: `
## The First Law

$$\\Delta U = Q - W$$

or equivalently:

$$Q = \\Delta U + W$$

where:
- $\\Delta U$ = change in internal energy of the gas
- $Q$ = heat **added to** the gas (positive if heat flows IN)
- $W$ = work done **by** the gas (positive if gas expands)

### What It Says

> The heat added to a system goes into two places: increasing internal energy and doing work.

If you add 500 J of heat and the gas does 200 J of work expanding, then $\\Delta U = 500 - 200 = 300$ J goes into raising the temperature.

### Sign Summary

| Quantity | Positive means... | Negative means... |
|----------|-------------------|-------------------|
| $Q$ | Heat flows INTO gas | Heat flows OUT of gas |
| $W$ | Gas expands (does work on surroundings) | Gas compressed (work done on gas) |
| $\\Delta U$ | Temperature increases | Temperature decreases |
      `
    },
    {
      id: 'tl2-special-processes',
      type: 'text' as const,
      content: `
## First Law Applied to Special Processes

### 1. Isothermal Process ($T$ = constant)
- $\\Delta U = 0$ (internal energy depends only on $T$)
- $Q = W$
- All heat added is converted to work (or vice versa)

### 2. Adiabatic Process ($Q = 0$, no heat exchange)
- $\\Delta U = -W$
- If the gas expands ($W > 0$): $\\Delta U < 0$ → temperature **drops**
- If the gas compresses ($W < 0$): $\\Delta U > 0$ → temperature **rises**

### 3. Isochoric (Isovolumetric) Process ($V$ = constant)
- $W = 0$ (no volume change → no work)
- $\\Delta U = Q$
- All heat goes directly into changing internal energy (temperature)

### 4. Isobaric Process ($P$ = constant)
- $W = P\\Delta V$
- $\\Delta U = Q - P\\Delta V$
- Heat goes into both internal energy AND work
      `
    },
    {
      id: 'tl2-process-quiz',
      type: 'multiple-choice' as const,
      content: `
**Process Identification** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'During an adiabatic expansion of an ideal gas, the temperature:',
            options: [
              'Increases because the gas does work',
              'Decreases because the gas uses internal energy to do work',
              'Stays the same because no heat is exchanged',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: 'Adiabatic: $Q = 0$, so $\\Delta U = -W$. During expansion $W > 0$, so $\\Delta U < 0$, meaning $T$ decreases. The gas cools because it uses its own internal energy to push the piston.'
          },
          {
            question: 'A gas at constant volume absorbs 800 J of heat. How much work does it do?',
            options: [
              '800 J',
              '400 J',
              '0 J',
              'Cannot determine without knowing pressure'
            ],
            correctAnswer: 2,
            explanation: 'Isochoric (constant volume): $W = P\\Delta V = 0$ because $\\Delta V = 0$. All 800 J goes into internal energy: $\\Delta U = Q = 800$ J.'
          }
        ]
      }
    },
    {
      id: 'tl2-first-law-quiz',
      type: 'multiple-choice' as const,
      content: `
**First Law Application** ⚡
      `,
      exercise: {
        questions: [
          {
            question: 'A gas absorbs 600 J of heat while doing 400 J of work. The change in internal energy is:',
            options: [
              '1000 J',
              '200 J',
              '−200 J',
              '400 J'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta U = Q - W = 600 - 400 = 200$ J. The gas gets hotter because more heat came in than left as work.'
          },
          {
            question: 'During an isothermal expansion, a gas does 350 J of work. How much heat was added?',
            options: [
              '0 J',
              '175 J',
              '350 J',
              '700 J'
            ],
            correctAnswer: 2,
            explanation: 'Isothermal: $\\Delta U = 0$, so $Q = W = 350$ J. The gas must absorb exactly as much heat as the work it does to keep its temperature constant.'
          }
        ]
      }
    },
    {
      id: 'tl2-first-law-drill',
      type: 'input-boxes' as const,
      content: `
**First Law Drill** 🔧

Apply $\\Delta U = Q - W$ to each scenario.

1) $Q = 1200$ J, $W = 500$ J. Find $\\Delta U$ (in J).
2) A gas does 300 J of work while its internal energy decreases by 100 J. Find $Q$ (in J).
3) An adiabatic compression does 600 J of work on the gas ($W = -600$ J by the gas). Find $\\Delta U$ (in J).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['700', '200', '600'],
        hint1: '$\\Delta U = Q - W = 1200 - 500$.',
        hint2: '$Q = \\Delta U + W = (-100) + 300 = 200$ J.',
        hint3: 'Adiabatic: $Q = 0$. $\\Delta U = Q - W = 0 - (-600) = 600$ J. The gas heats up.',
        explanation: 'Apply $\\Delta U = Q - W$ carefully with signs. Work done ON the gas means $W < 0$ (by the gas), so $\\Delta U$ increases.'
      }
    }
  ]
}
