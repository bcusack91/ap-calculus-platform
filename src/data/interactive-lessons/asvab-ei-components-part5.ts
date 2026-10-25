const eico5WaveFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="40" y1="60" x2="300" y2="60"/><line x1="40" y1="160" x2="300" y2="160"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="40" y1="10" x2="40" y2="95"/><line x1="40" y1="110" x2="40" y2="210"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2.5" fill="none"><line x1="40" y1="30" x2="300" y2="30"/><path d="M 40 160 C 60 115, 80 115, 100 160 C 120 205, 140 205, 160 160 C 180 115, 200 115, 220 160 C 240 205, 260 205, 280 160"/></g><g fill="currentColor" font-size="11"><text x="44" y="22">DC: steady, one direction</text><text x="44" y="122">AC: rises, falls, reverses</text><text x="304" y="64">0</text><text x="304" y="164">0</text><text x="300" y="214" text-anchor="end">time →</text></g><g stroke="currentColor" stroke-width="1.5"><line x1="40" y1="204" x2="160" y2="204"/><line x1="40" y1="199" x2="40" y2="209"/><line x1="160" y1="199" x2="160" y2="209"/></g><text x="100" y="218" font-size="11" fill="currentColor" text-anchor="middle">one cycle</text></svg>',
  alt: 'Two graphs of voltage against time. Top graph, labeled DC: a flat horizontal line above zero, staying at the same value in one direction. Bottom graph, labeled AC: a smooth wave that rises above zero, falls through zero to below zero, and rises again, repeating. A bracket under the AC wave marks one cycle, from the start of one rise to the start of the next.',
  caption: 'Figure 7. Direct current (top) and alternating current (bottom).',
  size: 'md' as const,
}

const eico5OutletFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="110" y="20" width="100" height="160" rx="14" fill="none" stroke="currentColor" stroke-width="2"/><g fill="currentColor"><rect x="132" y="50" width="11" height="44" rx="2"/><rect x="179" y="55" width="8" height="34" rx="2"/><path d="M 152 125 a 8 8 0 0 1 16 0 v 12 h -16 z"/></g><g stroke="currentColor" stroke-width="1"><line x1="133" y1="72" x2="80" y2="72"/><line x1="188" y1="72" x2="236" y2="72"/><line x1="160" y1="137" x2="160" y2="160"/></g><g fill="currentColor" font-size="12"><text x="8" y="68">wider slot</text><text x="240" y="68">narrow slot</text><text x="160" y="176" text-anchor="middle">round hole</text></g></svg>',
  alt: 'The face of a standard U.S. 120-volt wall outlet with its round ground hole at the bottom. On the left is a wider vertical slot. On the right is a narrower vertical slot. Below and centered is the ground hole, round on top and flat on the bottom (D-shaped).',
  caption: 'Figure 8. A standard U.S. outlet.',
  size: 'md' as const,
}

export const asvabEiComponentsPart5Data = {
  topicSlug: 'asvab-ei-components',
  sections: [
    {
      id: 'eico5-intro',
      type: 'text' as const,
      content: `# 🔧 Components, Symbols and AC vs DC

**Part 5 of 7 — AC vs DC, Frequency and Household Wiring**

### Two Kinds of Current

| | **DC** (direct current) | **AC** (alternating current) |
|:---|:---|:---|
| Direction | always the **same** direction | **reverses** direction over and over |
| Sources | batteries, solar cells, power supplies | generators, power plants, wall outlets |
| Where you meet it | flashlights, phones, cars (about 12 V) | homes and businesses |
| Can a transformer change its voltage? | no | **yes** |

AC won the battle to power homes because **transformers** can step it up to very high voltage for long-distance transmission (high voltage means low current, so less energy is lost as heat in the lines) and back down to safe levels near your house.

Many devices run on DC inside but plug into AC: their power supply uses a **transformer** to lower the voltage and a **rectifier** to turn it into DC.`,
    },
    {
      id: 'eico5-frequency',
      type: 'text' as const,
      content: `## Frequency and Period

One complete back-and-forth of AC is a **cycle**.

- **Frequency** ($f$) is the number of cycles per second, measured in **hertz** (Hz). 1 Hz = 1 cycle per second.
- **Period** ($T$) is the time for one cycle, in seconds.
- They are reciprocals: $f = \\frac{1}{T}$ and $T = \\frac{1}{f}$.

| Example | Frequency | Period |
|:---|:---:|:---:|
| U.S. household power | **60 Hz** | $\\frac{1}{60}$ s |
| A wave with a 0.02-s period | $\\frac{1}{0.02} = 50$ Hz | 0.02 s |
| A wave with a 0.1-s period | 10 Hz | 0.1 s |

Prefixes work as usual: **kHz** = thousands of hertz (AM radio), **MHz** = millions (FM radio), **GHz** = billions (Wi-Fi, cell phones).

## Motors, Generators and Induction

Moving a magnet near a coil (or a coil near a magnet) **induces** a voltage in the coil: **electromagnetic induction**.

- A **generator** turns **mechanical energy into electrical energy** (spin a coil in a magnetic field → AC).
- A **motor** does the reverse: **electrical energy into mechanical energy** (current in a coil inside a magnetic field → spinning).
- A car's **alternator** is a generator; it makes AC, and built-in diodes rectify it to DC for the car's 12-V system.

## Household Wiring (United States)

- Standard outlets: **120 V AC, 60 Hz**. Large appliances (electric dryers, ranges, central air conditioners, water heaters) use **240 V**.
- Circuits are wired **in parallel**, each protected by a breaker in the panel.

| Wire color | Name | Job |
|:---|:---|:---|
| **Black** (or red) | **hot** | carries the current from the panel; dangerous |
| **White** (or gray) | **neutral** | the return path back to the panel |
| **Green** or **bare copper** | **ground** | safety path for fault current; carries no current normally |

On a standard outlet (Figure 8), the **narrow slot is hot**, the **wider slot is neutral**, and the **round hole is ground**.`,
    },
    {
      id: 'eico5-wave-mc',
      type: 'multiple-choice' as const,
      figure: eico5WaveFigure,
      content: '**Read the graphs.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which statement describes the bottom graph in the figure?',
            options: ['It is AC: the current regularly reverses direction', 'It is DC: the current always flows in one direction', 'It is DC that is slowly losing voltage', 'It shows a circuit being switched on once'],
            correctAnswer: 0,
            explanation: 'The wave goes above and below zero over and over, so the current reverses direction regularly: alternating current. The flat top graph is DC.',
          },
          {
            question: 'If the AC wave in the figure completes 60 cycles every second, what is its frequency?',
            options: ['60 Hz', '1/60 Hz', '120 Hz', '30 Hz'],
            correctAnswer: 0,
            explanation: 'Frequency is cycles per second, so 60 cycles per second is 60 Hz, the U.S. household standard. The period is 1/60 of a second.',
          },
        ],
      },
    },
    {
      id: 'eico5-safety',
      type: 'text' as const,
      content: `## Electrical Safety

- It is the **current through your body** that injures, and it does not take much: a fraction of an amp across the chest can stop the heart. Voltage matters because it is what drives that current through your skin's resistance.
- **Water** (sweat, wet floors, damp gloves) lowers your body's resistance. Keep electricity and water apart.
- **Turn off and lock out** the breaker before working on a circuit, and test with a meter to confirm it is dead.
- Work with **one hand** when you must touch equipment that could be live, so current cannot cross your chest from hand to hand.
- Use tools with **insulated handles**, and never stand in water near electrical equipment.
- **Capacitors** can stay charged after power is removed; discharge them before working.
- **Electrical fires:** cut the power and use a **Class C** (or ABC) extinguisher. **Never use water** on an energized electrical fire.`,
    },
    {
      id: 'eico5-outlet-mc',
      type: 'multiple-choice' as const,
      figure: eico5OutletFigure,
      content: '**Wiring and safety.** 🎯 The first question uses Figure 8.',
      exercise: {
        questions: [
          {
            question: 'Which opening in the outlet connects to the hot wire?',
            options: ['The narrow slot', 'The wider slot', 'The round hole', 'All three openings'],
            correctAnswer: 0,
            explanation: 'On a standard U.S. outlet the narrow slot is hot, the wider slot is neutral, and the round hole is ground.',
          },
          {
            question: 'In standard U.S. house wiring, which wire color is used for the neutral conductor?',
            options: ['White', 'Black', 'Green', 'Red'],
            correctAnswer: 0,
            explanation: 'White (or gray) is neutral. Black and red are hot, and green or bare copper is ground.',
          },
          {
            question: 'Which type of fire extinguisher is meant for a fire in energized electrical equipment?',
            options: ['Class C', 'Class A', 'Class B', 'A pressurized water extinguisher'],
            correctAnswer: 0,
            explanation: 'Class C covers energized electrical fires (an ABC extinguisher also works). Class A is for ordinary combustibles, Class B for flammable liquids, and water conducts electricity.',
          },
          {
            question: 'A generator is best described as a device that converts:',
            options: ['mechanical energy into electrical energy', 'electrical energy into mechanical energy', 'AC into DC', 'high voltage into low voltage'],
            correctAnswer: 0,
            explanation: 'A generator spins a coil in a magnetic field to produce electricity. A motor does the reverse, a rectifier changes AC to DC, and a transformer changes voltage.',
          },
        ],
      },
    },
    {
      id: 'eico5-input',
      type: 'input-boxes' as const,
      content: `**Frequency and period.** ✍️ Numbers only.

**1)** An AC signal has a period of 0.05 second. What is its frequency, in hertz?

**2)** A signal has a frequency of 200 Hz. What is its period, in seconds? (decimal)

**3)** How many complete cycles does 60-Hz household power go through in 5 seconds?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '0.005', '300'],
        hint1: 'f = 1 ÷ T, and 1 ÷ 0.05 = 100 ÷ 5.',
        hint2: 'T = 1 ÷ f.',
        hint3: '60 cycles every second, for 5 seconds.',
        explanation: '(1) 1 ÷ 0.05 = 20 Hz. (2) 1 ÷ 200 = 0.005 s. (3) 60 × 5 = 300 cycles.',
      },
    },
    {
      id: 'eico5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **DC** flows one way (batteries, cars at about 12 V); **AC** reverses (generators, outlets)
- **Frequency** = cycles per second, in **hertz**; U.S. power is **60 Hz**; $f = \\frac{1}{T}$
- **Generator** = mechanical → electrical; **motor** = electrical → mechanical; both rely on electromagnetic induction
- U.S. homes: **120 V** outlets, **240 V** large appliances; **black/red hot, white neutral, green/bare ground**
- It is current through the body that injures; no water near electricity; Class C for electrical fires

> **Up Next:** Part 6 — strategy and traps for component questions.`,
    },
  ],
}
