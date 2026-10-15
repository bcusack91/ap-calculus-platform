export const physics2TemperaturePart4Data = {
  topicSlug: 'temperature-thermal-expansion',
  sections: [
    {
      id: 'te4-intro',
      type: 'text' as const,
      content: `
# 🎈 The Ideal Gas Law

**Part 4 of 7 — Pressure, Volume, Amount, and Temperature in One Equation**

Part 3 explained pressure with collisions. Now we connect pressure to the other measurable properties of a gas — volume, the amount of gas, and temperature — using the model of an **ideal gas**.
      `
    },
    {
      id: 'te4-model',
      type: 'text' as const,
      content: `
## The Ideal Gas Model

The classical ideal gas model makes four assumptions about the atoms:

| Assumption | What it means |
|---|---|
| Random motion | At any instant, atom velocities point in random directions |
| Negligible volume | The atoms themselves take up almost none of the container's volume |
| Elastic collisions | Kinetic energy is conserved when atoms collide with each other or the walls |
| No forces except during collisions | Atoms do not attract or repel each other between collisions |

Real gases behave almost ideally when they are **not too dense** and **not too cold**, because then the atoms are far apart and moving fast enough that attractions hardly matter. On the AP exam, gases are treated as ideal (and monatomic) unless a problem says otherwise.

## The Ideal Gas Law

$$\\boxed{PV = nRT = Nk_BT}$$

| Symbol | Meaning | SI unit |
|---|---|---|
| $P$ | absolute pressure | Pa |
| $V$ | volume | $\\text{m}^3$ |
| $n$ | number of moles | mol |
| $N$ | number of atoms | (none) |
| $T$ | absolute temperature | K |
| $R$ | gas constant, $8.31$ J/(mol·K) | |
| $k_B$ | Boltzmann's constant, $1.38 \\times 10^{-23}$ J/K | |

The two forms are the same law: $N = nN_A$ and $R = N_A k_B$. Use $n$ and $R$ when you know moles; use $N$ and $k_B$ when you count atoms.

### Unit Traps
- $T$ must be in **kelvins**: $T_K = T_C + 273$.
- $V$ must be in **cubic meters**: $1 \\text{ L} = 10^{-3} \\text{ m}^3$.
- $P$ must be in **pascals**: $1 \\text{ kPa} = 10^3$ Pa.
      `
    },
    {
      id: 'te4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Ideal Gas Model Check** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'Which assumption is part of the classical ideal gas model?',
            options: [
              'Forces act only during collisions',
              'Atoms attract each other weakly at all distances',
              'Atoms lose some kinetic energy in every collision',
              'Atoms fill a large fraction of the container volume'
            ],
            correctAnswer: 0,
            explanation: 'In the ideal gas model the only appreciable forces act during collisions, and those collisions are elastic. Attractions between atoms, energy loss in collisions, and a large atomic volume are all features of real gases that the model ignores.'
          },
          {
            question: 'A sealed, rigid tank of gas is warmed from $27°\\text{C}$ to $327°\\text{C}$. The pressure becomes:',
            options: [
              'Twice the original',
              'About 12 times the original',
              'Unchanged',
              'Half the original'
            ],
            correctAnswer: 0,
            explanation: 'With $V$ and $n$ fixed, $P \\propto T$ in kelvins: $T$ goes from 300 K to 600 K, so $P$ doubles. The ratio $327/27 \\approx 12$ wrongly uses Celsius temperatures.'
          },
          {
            question: 'At constant temperature, a fixed amount of ideal gas is squeezed to one-third of its volume. Its pressure:',
            options: [
              'Triples',
              'Drops to one-third',
              'Increases by a factor of nine',
              'Stays the same'
            ],
            correctAnswer: 0,
            explanation: 'With $n$ and $T$ fixed, $PV$ is constant, so $P \\propto 1/V$: one-third the volume gives three times the pressure. A factor of nine would come from wrongly squaring the volume ratio.'
          }
        ]
      }
    },
    {
      id: 'te4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

### Example 1 — How Many Moles?

A $2.0$ L flask holds helium at $150$ kPa and $27°\\text{C}$. How many moles of helium are inside?

Convert first: $V = 2.0 \\times 10^{-3} \\text{ m}^3$, $P = 1.5 \\times 10^5$ Pa, $T = 300$ K.

$$n = \\frac{PV}{RT} = \\frac{(1.5 \\times 10^5)(2.0 \\times 10^{-3})}{(8.31)(300)} = \\frac{300}{2493} \\approx 0.12 \\text{ mol}$$

### Example 2 — How Many Atoms?

Using the same flask, the number of atoms is

$$N = \\frac{PV}{k_BT} = \\frac{300}{(1.38 \\times 10^{-23})(300)} \\approx 7.2 \\times 10^{22} \\text{ atoms}$$

### Example 3 — Two States of the Same Gas

For a fixed amount of gas, $\\frac{PV}{T}$ stays constant, so

$$\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$$

A balloon holds $3.0$ L of air at $100$ kPa and $300$ K. It rises to where the pressure is $75$ kPa and the temperature is $270$ K. New volume:

$$V_2 = V_1 \\cdot \\frac{P_1}{P_2} \\cdot \\frac{T_2}{T_1} = 3.0 \\cdot \\frac{100}{75} \\cdot \\frac{270}{300} = 3.6 \\text{ L}$$

Ratios let you keep liters and kilopascals here, because the units cancel. Temperature must still be in kelvins.

## Special Cases at a Glance

| Held constant | Relationship | Graph shape |
|---|---|---|
| $T$ (isothermal) | $P \\propto 1/V$ | $P$ vs. $V$ is a hyperbola |
| $P$ (isobaric) | $V \\propto T$ | $V$ vs. $T$ is a line through the origin (in K) |
| $V$ (isovolumetric) | $P \\propto T$ | $P$ vs. $T$ is a line through the origin (in K) |
      `
    },
    {
      id: 'te4-drill',
      type: 'input-boxes' as const,
      content: `
**Ideal Gas Law Drill** 🎈

Use $R = 8.31$ J/(mol·K) and $k_B = 1.38 \\times 10^{-23}$ J/K.

1) A $0.50$ mol sample of gas fills a $10.0$ L container at $400$ K. Find the pressure in kPa (3 significant figures).

2) A $5.0 \\times 10^{-3} \\text{ m}^3$ container holds gas at $2.0 \\times 10^5$ Pa and $350$ K. Find the number of atoms, in units of $10^{23}$ (2 significant figures).

3) A gas at $200$ kPa and $300$ K is heated at constant volume until the pressure is $260$ kPa. Find the final temperature in K.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['166', '2.1', '390'],
        hint1: '$P = nRT/V$ with $V = 10.0 \\times 10^{-3} \\text{ m}^3$. Divide pascals by 1,000 for kPa.',
        hint2: '$N = PV/(k_BT) = (2.0 \\times 10^5)(5.0 \\times 10^{-3}) / [(1.38 \\times 10^{-23})(350)]$.',
        hint3: 'At constant volume $P/T$ is constant: $T_2 = T_1 (P_2/P_1)$.',
        explanation: '1) $P = (0.50)(8.31)(400)/(0.0100) = 1.66 \\times 10^5$ Pa $= 166$ kPa. 2) $N = 1000 / (4.83 \\times 10^{-21}) \\approx 2.1 \\times 10^{23}$. 3) $T_2 = 300 \\times 260/200 = 390$ K.'
      }
    },
    {
      id: 'te4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A gas is held at constant pressure while its absolute temperature doubles. Its volume:',
            options: [
              'Becomes half as large',
              'Becomes twice as large',
              'Stays the same',
              'Becomes four times as large'
            ],
            correctAnswer: 1,
            explanation: 'At constant $P$ and $n$, $V \\propto T$ (in kelvins), so doubling $T$ doubles $V$. The volume would halve only if the pressure doubled at constant temperature.'
          },
          {
            question: 'Two containers have equal volume and equal temperature. Container X holds twice as many moles of gas as container Y. Which is true?',
            options: [
              'X has double the pressure, because pressure is proportional to $n$',
              'X and Y have equal pressure, because they share $V$ and $T$',
              'X has four times the pressure, because both the hits and their force double',
              'X has half the pressure, because its atoms crowd each other'
            ],
            correctAnswer: 0,
            explanation: 'With $V$ and $T$ equal, $P = nRT/V$ is proportional to $n$, so X has twice the pressure. Doubling the moles doubles the collision rate but not the momentum per collision, so the pressure does not quadruple.'
          }
        ]
      }
    }
  ]
}
