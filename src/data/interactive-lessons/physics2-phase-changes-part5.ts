export const physics2PhaseChangesPart5Data = {
  topicSlug: 'phase-changes-latent-heat',
  sections: [
    {
      id: 'pc5-intro',
      type: 'text' as const,
      content: `
# 🧮 Calorimetry with Phase Changes

**Part 5 of 7 — Problem-Solving Workshop**

The most challenging (and most common) AP problems combine $Q = mc\\Delta T$ with $Q = mL$ in **calorimetry** — mixing substances at different temperatures where one or more may undergo a phase change.

### The Master Equation

In an insulated system, energy is conserved:

$$Q_{\\text{lost}} + Q_{\\text{gained}} = 0$$

or equivalently:

$$\\sum Q_i = 0$$

Each $Q_i$ may include heating/cooling steps AND phase-change steps.
      `
    },
    {
      id: 'pc5-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

### Step 1: Determine if a Phase Change Occurs
Before solving, check: **is there enough energy to complete the phase change?**

**Example**: Mixing 0.10 kg of ice at 0°C with 0.20 kg of water at 25°C.

Energy available from cooling water to 0°C:
$$Q_{\\text{available}} = m_w c_w \\Delta T = (0.20)(4{,}186)(25) = 20{,}930 \\text{ J}$$

Energy needed to melt all the ice:
$$Q_{\\text{needed}} = m_i L_f = (0.10)(334{,}000) = 33{,}400 \\text{ J}$$

Since $Q_{\\text{available}} < Q_{\\text{needed}}$, **not all ice melts!** The final temperature is 0°C with some ice remaining.

### Step 2: Set Up the Energy Equation
- If the phase change **does** complete: include both $Q = mL$ and $Q = mc\\Delta T$ terms
- If the phase change **does not** complete: the final temperature is at the phase-change temperature, and you solve for how much substance changes phase

### Step 3: Solve for the Unknown
Common unknowns: final temperature $T_f$, mass of ice melted, or time required.
      `
    },
    {
      id: 'pc5-check-quiz',
      type: 'multiple-choice' as const,
      content: `
**Strategy Check** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'You mix 0.050 kg of ice at 0°C with 0.50 kg of water at 80°C. The energy available from the hot water cooling to 0°C is $(0.50)(4186)(80) = 167{,}440$ J. The energy needed to melt the ice is $(0.050)(334{,}000) = 16{,}700$ J. What happens?',
            options: [
              'Not all ice melts; final temperature is 0°C',
              'All ice melts and the final temperature is between 0°C and 80°C',
              'All ice melts and the final temperature is exactly 0°C',
              'The water freezes'
            ],
            correctAnswer: 1,
            explanation: 'The available energy (167,440 J) far exceeds the energy needed to melt the ice (16,700 J). All ice melts, and there is plenty of energy left over to raise the temperature above 0°C. The final temperature will be between 0°C and 80°C.'
          },
          {
            question: 'In a calorimetry problem, if the available energy is NOT enough to complete the phase change, the final temperature equals:',
            options: [
              'The average of the initial temperatures',
              'The phase-change temperature (e.g., 0°C for melting ice)',
              'Absolute zero',
              'Room temperature'
            ],
            correctAnswer: 1,
            explanation: 'If there is not enough energy to complete the phase change, both the original substance and the partially changed substance coexist at the phase-change temperature. For ice-water mixtures, this means $T_f = 0$°C.'
          }
        ]
      }
    },
    {
      id: 'pc5-worked-example',
      type: 'text' as const,
      content: `
## Worked Example: Ice in Hot Water

**Problem**: 0.100 kg of ice at $-15$°C is placed in 0.300 kg of water at $60$°C in an insulated container. Find the final temperature.

### Step 1: Check if all ice melts

Energy needed to bring ice to 0°C and melt it:
$$Q_{\\text{ice to 0°C}} = (0.100)(2{,}090)(15) = 3{,}135 \\text{ J}$$
$$Q_{\\text{melt}} = (0.100)(334{,}000) = 33{,}400 \\text{ J}$$
$$Q_{\\text{total needed}} = 3{,}135 + 33{,}400 = 36{,}535 \\text{ J}$$

Energy available from water cooling to 0°C:
$$Q_{\\text{available}} = (0.300)(4{,}186)(60) = 75{,}348 \\text{ J}$$

Since $75{,}348 > 36{,}535$: ✅ All ice melts. Final $T_f > 0$°C.

### Step 2: Energy equation

$$\\underbrace{(0.100)(2{,}090)(15)}_{\\text{heat ice}} + \\underbrace{(0.100)(334{,}000)}_{\\text{melt ice}} + \\underbrace{(0.100)(4{,}186)(T_f - 0)}_{\\text{heat meltwater}} + \\underbrace{(0.300)(4{,}186)(T_f - 60)}_{\\text{cool hot water}} = 0$$

### Step 3: Solve
$$3{,}135 + 33{,}400 + 418.6 T_f + 1{,}255.8 T_f - 75{,}348 = 0$$
$$1{,}674.4 T_f = 38{,}813$$
$$T_f = 23.2°\\text{C}$$
      `
    },
    {
      id: 'pc5-problem-drill',
      type: 'input-boxes' as const,
      content: `
**Calorimetry Workshop** 🔢

**Problem**: 0.200 kg of ice at 0°C is added to 0.400 kg of water at 50°C in an insulated container.

Use: $c_w = 4{,}186$ J/(kg·°C), $L_f = 334{,}000$ J/kg.

1) Energy needed to melt all the ice (in J)
2) Energy available from water cooling to 0°C (in J)
3) Does all the ice melt? Enter "yes" or "no"
4) Final temperature of the mixture (in °C, round to 1 decimal)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['66800', '83720', 'yes', '6.7', '6.70'],
        hint1: '$Q_{\\text{melt}} = m_{\\text{ice}} L_f = (0.200)(334{,}000)$.',
        hint2: '$Q_{\\text{available}} = m_w c_w \\Delta T = (0.400)(4186)(50)$. Compare with $Q_{\\text{melt}}$.',
        hint3: 'All ice melts. Set up: $m_{\\text{ice}} L_f + (m_{\\text{ice}} + m_w) c_w T_f = m_w c_w (50)$. The total mass of water is $0.200 + 0.400 = 0.600$ kg. Remaining energy = $83{,}720 - 66{,}800 = 16{,}920$ J. $T_f = 16{,}920 / ((0.600)(4186))$.',
        explanation: '$Q_{\\text{melt}} = 66{,}800$ J. $Q_{\\text{avail}} = 83{,}720$ J. Since $83{,}720 > 66{,}800$, all ice melts. Remaining energy: $83{,}720 - 66{,}800 = 16{,}920$ J heats $0.600$ kg of water: $T_f = 16{,}920/((0.600)(4{,}186)) = 16{,}920/2{,}511.6 = 6.74$°C ≈ **6.7°C**.'
      }
    },
    {
      id: 'pc5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'You place a small amount of ice in a large amount of very warm water. The most likely outcome is:',
            options: [
              'The final temperature is 0°C',
              'All ice melts and the water cools only slightly',
              'The water freezes around the ice',
              'Nothing happens'
            ],
            correctAnswer: 1,
            explanation: 'A small amount of ice in a large amount of warm water: the warm water provides far more energy than needed to melt the ice. All ice melts quickly, and the large thermal mass of the warm water means its temperature drops only slightly.'
          },
          {
            question: 'In a calorimetry problem with ice and water, you find that the energy available is exactly equal to the energy needed to melt the ice. The final temperature is:',
            options: [
              'Slightly above 0°C',
              'Exactly 0°C with all water and no ice',
              'Slightly below 0°C',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: 'If the available energy exactly equals $mL_f$, all the ice just barely melts. There is no leftover energy to raise the temperature, so the final state is all liquid water at exactly 0°C.'
          }
        ]
      }
    }
  ]
}
