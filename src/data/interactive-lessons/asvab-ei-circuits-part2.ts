const eic2SeriesFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="40" y1="40" x2="70" y2="40"/><polyline points="70,40 75,32 85,48 95,32 105,48 115,32 120,40"/><line x1="120" y1="40" x2="140" y2="40"/><polyline points="140,40 145,32 155,48 165,32 175,48 185,32 190,40"/><line x1="190" y1="40" x2="210" y2="40"/><polyline points="210,40 215,32 225,48 235,32 245,48 255,32 260,40"/><line x1="260" y1="40" x2="290" y2="40"/><line x1="290" y1="40" x2="290" y2="160"/><line x1="40" y1="160" x2="290" y2="160"/><line x1="40" y1="40" x2="40" y2="92"/><line x1="40" y1="104" x2="40" y2="160"/></g><g stroke="currentColor"><line x1="22" y1="92" x2="58" y2="92" stroke-width="2.5"/><line x1="31" y1="104" x2="49" y2="104" stroke-width="5"/></g><text x="66" y="96" font-size="14" fill="currentColor">+</text><text x="66" y="112" font-size="14" fill="currentColor">−</text><g class="fig-accent" fill="currentColor" font-size="13" font-weight="bold" text-anchor="middle"><text x="95" y="24">2 Ω</text><text x="165" y="24">3 Ω</text><text x="235" y="24">5 Ω</text><text x="100" y="104">20 V</text></g></svg>',
  alt: 'A series circuit. A 20-volt battery on the left is connected to three resistors placed one after another along the top wire: 2 ohms, 3 ohms and 5 ohms. The wire then returns along the right side and the bottom to the battery. There is only one path.',
  caption: 'Figure 2. Three resistors in series across a 20-V battery.',
  size: 'md' as const,
}

export const asvabEiCircuitsPart2Data = {
  topicSlug: 'asvab-ei-circuits',
  sections: [
    {
      id: 'eic2-intro',
      type: 'text' as const,
      content: `# 🔌 Series and Parallel Circuits and Power

**Part 2 of 7 — Series Circuits**

### One Path Only

In a **series circuit**, the parts are connected **end to end**, so there is only **one path** for current. Every electron that leaves the battery passes through every part, one after another.

### The Three Series Rules

| Quantity | Rule in series | Why |
|:---|:---|:---|
| **Resistance** | **adds up**: $R_{total} = R_1 + R_2 + R_3 + \\dots$ | the current has to push through each one in turn |
| **Current** | **the same everywhere** | there is only one path, and charge is not used up |
| **Voltage** | **divides up**: the drops across the parts add to the source voltage | each part uses its share of the push |

The voltage "drop" across each part follows Ohm's law, $V = I \\times R$. Since the current is the same in every part, **the biggest resistor gets the biggest share of the voltage**.

### What Happens When Things Change

- **Add another resistor in series:** total resistance goes **up**, so the current goes **down** (every bulb in the string dims).
- **One part burns out or a wire breaks:** the only path is broken, so **everything goes off**. This is the classic behavior of older holiday light strings: one dead bulb and the whole string goes dark.
- **A switch or fuse** is always placed **in series** with what it controls or protects, because it has to be able to break the one path.`,
    },
    {
      id: 'eic2-worked',
      type: 'text' as const,
      content: `## Worked Example: the Whole Series Routine

A 12-V battery is connected in series with a 2-Ω resistor and a 4-Ω resistor.

**Step 1. Total resistance.** $R_{total} = 2 + 4 = 6$ Ω.

**Step 2. Current (the same everywhere).** $I = \\frac{V}{R_{total}} = \\frac{12}{6} = 2$ A.

**Step 3. Each voltage drop.** $V_1 = 2 \\times 2 = 4$ V and $V_2 = 2 \\times 4 = 8$ V.

**Step 4. Check.** $4 + 8 = 12$ V, the battery voltage. ✓

| Resistor | Resistance | Current | Voltage drop |
|:---:|:---:|:---:|:---:|
| $R_1$ | 2 Ω | 2 A | 4 V |
| $R_2$ | 4 Ω | 2 A | 8 V |
| **Total** | **6 Ω** | **2 A** | **12 V** |

The 4-Ω resistor has twice the resistance of the 2-Ω resistor, so it takes twice the voltage.

### Identical parts

If $n$ identical resistors (or bulbs) are in series across a source, each one gets $\\frac{1}{n}$ of the voltage. Four identical bulbs on a 12-V battery: 3 V each.`,
    },
    {
      id: 'eic2-figure-input',
      type: 'input-boxes' as const,
      figure: eic2SeriesFigure,
      content: `**Run the series routine on Figure 2.** ✍️ Numbers only.

**1)** Total resistance, in ohms:

**2)** Current through the 3-Ω resistor, in amperes:

**3)** Voltage drop across the 5-Ω resistor, in volts:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '2', '10'],
        hint1: 'In series, add the resistances.',
        hint2: 'Current = 20 V ÷ total resistance, and it is the same through every resistor.',
        hint3: 'Voltage drop = current × that resistor.',
        explanation: '(1) 2 + 3 + 5 = 10 Ω. (2) 20 ÷ 10 = 2 A through every resistor. (3) 2 × 5 = 10 V. Check: the drops are 4 + 6 + 10 = 20 V.',
      },
    },
    {
      id: 'eic2-mc',
      type: 'multiple-choice' as const,
      content: '**Series reasoning.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Five bulbs are wired in series to a battery. One bulb burns out. What happens to the other four?',
            options: ['They all go out', 'They stay lit at the same brightness', 'They brighten', 'Only the bulbs next to the dead one go out'],
            correctAnswer: 0,
            explanation: 'A series circuit has one path. The burned-out filament breaks it, so no current flows anywhere and every bulb goes dark.',
          },
          {
            question: 'In a series circuit, how does the current through the first resistor compare with the current through the last resistor?',
            options: ['The currents are equal', 'The first is larger', 'The last is larger', 'It depends on the resistor sizes'],
            correctAnswer: 0,
            explanation: 'Current is the same at every point in a series circuit, whatever the resistor sizes. Charge is not used up along the way; it is the energy that is delivered to each part.',
          },
          {
            question: 'A third resistor is added in series to a circuit that already has two. The battery is unchanged. What happens to the current?',
            options: ['It decreases', 'It increases', 'It stays the same', 'It drops to zero'],
            correctAnswer: 0,
            explanation: 'Adding a series resistor raises the total resistance. With the same voltage, more resistance means less current.',
          },
          {
            question: 'A 10-Ω resistor and a 30-Ω resistor are in series across a 20-V source. Which statement is true?',
            options: ['The 30-Ω resistor has the larger voltage drop', 'The 10-Ω resistor has the larger voltage drop', 'Both resistors have a 20-V drop', 'The 10-Ω resistor carries the larger current'],
            correctAnswer: 0,
            explanation: 'The current (0.5 A) is the same in both, so the drop is larger where the resistance is larger: 15 V across the 30-Ω resistor and 5 V across the 10-Ω resistor.',
          },
        ],
      },
    },
    {
      id: 'eic2-input',
      type: 'input-boxes' as const,
      content: `**More series practice.** ✍️ Numbers only.

**1)** Resistors of 4 Ω, 6 Ω and 10 Ω are in series across a 40-V source. What is the current, in amperes?

**2)** Six identical bulbs are wired in series across a 120-V supply. What is the voltage across each bulb, in volts?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['2', '20'],
        hint1: 'Add the resistances, then divide the voltage by the total.',
        hint2: 'Identical parts in series share the voltage equally.',
        hint3: '120 ÷ 6.',
        explanation: '(1) 4 + 6 + 10 = 20 Ω, and 40 ÷ 20 = 2 A. (2) 120 ÷ 6 = 20 V each.',
      },
    },
    {
      id: 'eic2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Series** = one path
- Resistances **add**; current is the **same** everywhere; voltage drops **add up to the source**
- The **largest resistor takes the largest voltage drop**
- Adding resistors in series **lowers** the current; one break turns **everything** off
- Switches and fuses go **in series** with what they control

> **Up Next:** Part 3 — parallel circuits, where current has a choice of paths.`,
    },
  ],
}
