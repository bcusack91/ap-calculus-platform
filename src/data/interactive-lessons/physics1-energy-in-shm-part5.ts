export const physics1EnergyInShmPart5Data = {
  topicSlug: 'energy-in-shm',
  sections: [
    {
      id: 'se5-intro',
      type: 'text' as const,
      content: `
# 🌊 Damped Oscillations (Conceptual)

**Part 5 of 7 — Energy in Simple Harmonic Motion**

Real oscillating systems always lose energy to friction, air resistance, or other dissipative forces. This causes the amplitude to decrease over time — a process called **damping**.
      `
    },
    {
      id: 'se5-damping-basics',
      type: 'text' as const,
      content: `
## What Is Damping?

Damping is the gradual loss of mechanical energy from an oscillating system, typically due to:
- **Friction** (surface contact)
- **Air resistance** (drag)
- **Internal friction** (deformation of materials)

### Effect on Motion

With damping:
- **Amplitude decreases** with each cycle
- **Period stays approximately the same** (for light damping)
- **Total energy decreases** over time
- The object eventually comes to rest at the equilibrium position

### Energy Perspective

Without damping: $E = \\frac{1}{2}kA^2 = \\text{constant}$

With damping: $E$ decreases over time. Since $E \\propto A^2$, the amplitude also decreases. The "lost" mechanical energy is converted to thermal energy (heat).
      `
    },
    {
      id: 'se5-types',
      type: 'text' as const,
      content: `
## Types of Damping

### 1. Underdamped
- The system **oscillates** with decreasing amplitude
- Most common in AP problems
- Example: a pendulum in air

### 2. Critically Damped
- The system returns to equilibrium as **quickly as possible without oscillating**
- Example: car shock absorbers (ideally)

### 3. Overdamped
- The system returns to equilibrium **slowly without oscillating**
- Takes longer than critical damping
- Example: a door closer set too tight

### What the Graphs Look Like

| Type | Motion |
|------|--------|
| Underdamped | Oscillations with decaying envelope |
| Critically damped | Smooth exponential return (fastest) |
| Overdamped | Slow exponential return (no oscillation) |

On the AP exam, you mostly need to recognize underdamped motion and understand that energy is gradually converted to thermal energy.
      `
    },
    {
      id: 'se5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Damping Concepts Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an underdamped oscillation, the amplitude:',
            options: [
              'Increases with each cycle',
              'Stays constant',
              'Decreases with each cycle',
              'Increases then decreases'
            ],
            correctAnswer: 2,
            explanation: 'Underdamped means the system oscillates, but friction causes the amplitude to decrease with each successive cycle.'
          },
          {
            question: 'When a real pendulum gradually comes to rest, the total mechanical energy has been converted to:',
            options: [
              'Potential energy',
              'Kinetic energy',
              'Thermal energy (heat)',
              'Nuclear energy'
            ],
            correctAnswer: 2,
            explanation: 'Friction and air resistance convert mechanical energy into thermal energy. The total energy is conserved, but it is no longer in a useful mechanical form.'
          },
          {
            question: 'For lightly damped oscillations, the period:',
            options: [
              'Increases significantly',
              'Decreases significantly',
              'Remains approximately the same',
              'Becomes zero'
            ],
            correctAnswer: 2,
            explanation: 'Light damping reduces the amplitude but has very little effect on the period. The frequency is still approximately $\\omega = \\sqrt{k/m}$.'
          }
        ]
      }
    },
    {
      id: 'se5-energy-loss',
      type: 'text' as const,
      content: `
## Energy Loss in Damped Systems

### After Each Cycle

If a damped oscillator loses a fraction $f$ of its energy each cycle:
- After 1 cycle: $E_1 = (1-f)E_0$
- After 2 cycles: $E_2 = (1-f)^2 E_0$
- After $n$ cycles: $E_n = (1-f)^n E_0$

### Amplitude Decay

Since $E \\propto A^2$:

$$A_n = A_0(1-f)^{n/2}$$

### Quality Factor (Conceptual)

The **Q-factor** measures how "good" an oscillator is at maintaining its energy:
- High Q → low damping → many oscillations before stopping
- Low Q → high damping → few oscillations before stopping

Examples: tuning fork (high Q), pendulum in honey (low Q)
      `
    },
    {
      id: 'se5-energy-quiz',
      type: 'input-boxes' as const,
      content: `
**Damped Energy Calculations** 🧮

A damped oscillator starts with amplitude $A_0 = 0.20$ m and loses 10% of its energy each cycle.

1) What fraction of the original energy remains after 3 cycles? (as a decimal, round to 3 decimal places)

2) What is the amplitude after 3 cycles? (in m, round to 3 decimal places)

3) After how many complete cycles is the energy reduced to less than half? (give the smallest integer)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.729', '0.171', '7'],
        hint1: '$E_3 = (0.90)^3 E_0$',
        hint2: '$A_3 = A_0 \\sqrt{E_3/E_0} = 0.20\\sqrt{0.729}$',
        hint3: '$(0.90)^n < 0.50$. Try $n = 6$: $(0.90)^6 = 0.531$. Try $n = 7$: $(0.90)^7 = 0.478$',
        explanation: '1) $(0.90)^3 = 0.729$. 2) $A = 0.20\\sqrt{0.729} = 0.20(0.854) = 0.171$ m. 3) $(0.90)^6 = 0.531 > 0.5$, $(0.90)^7 = 0.478 < 0.5$. Answer: 7 cycles.'
      }
    },
    {
      id: 'se5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Damping Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The type of damping that returns a system to equilibrium fastest without oscillating is:',
            options: ['underdamped', 'critically damped', 'overdamped', 'undamped'],
            correctIndex: 1,
            explanation: 'Critically damped systems return to equilibrium in the shortest time without oscillating — ideal for shock absorbers.'
          },
          {
            label: 'In a damped oscillating system, the total mechanical energy over time:',
            options: ['increases', 'decreases', 'stays constant', 'oscillates'],
            correctIndex: 1,
            explanation: 'In any damped system, total mechanical energy decreases over time as it is converted to thermal energy.'
          },
          {
            label: 'The total energy of an SHM system is proportional to:',
            options: ['amplitude²', 'amplitude', '1/amplitude', '1/amplitude²'],
            correctIndex: 0,
            explanation: 'Energy is proportional to amplitude squared: $E = \\frac{1}{2}kA^2$. So if $A$ halves, $E$ drops to one quarter.'
          }
        ]
      }
    },
    {
      id: 'se5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Damped Oscillations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A damped oscillator has its amplitude reduced to half the initial value. What fraction of the original energy remains?',
            options: [
              '$1/2$',
              '$1/4$',
              '$1/\\sqrt{2}$',
              '$3/4$'
            ],
            correctAnswer: 1,
            explanation: '$E \\propto A^2$. If $A \\to A/2$: $E \\to (A/2)^2/(A^2) \\times E_0 = E_0/4$. One quarter remains.'
          },
          {
            question: 'Which of the following would increase the rate of energy loss in a pendulum?',
            options: [
              'Reducing the mass of the bob',
              'Swinging it in a vacuum',
              'Increasing air resistance',
              'Making the string longer'
            ],
            correctAnswer: 2,
            explanation: 'Greater air resistance means more friction, which increases the rate at which mechanical energy is converted to thermal energy.'
          }
        ]
      }
    }
  ]
}
