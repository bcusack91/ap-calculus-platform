const eic4ComboFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="40" y1="40" x2="70" y2="40"/><polyline points="70,40 75,32 85,48 95,32 105,48 115,32 120,40"/><line x1="120" y1="40" x2="270" y2="40"/><line x1="180" y1="40" x2="180" y2="70"/><polyline points="180,70 172,75 188,85 172,95 188,105 172,115 188,125 180,130"/><line x1="180" y1="130" x2="180" y2="160"/><line x1="270" y1="40" x2="270" y2="70"/><polyline points="270,70 262,75 278,85 262,95 278,105 262,115 278,125 270,130"/><line x1="270" y1="130" x2="270" y2="160"/><line x1="40" y1="160" x2="270" y2="160"/><line x1="40" y1="40" x2="40" y2="92"/><line x1="40" y1="104" x2="40" y2="160"/></g><g stroke="currentColor"><line x1="22" y1="92" x2="58" y2="92" stroke-width="2.5"/><line x1="31" y1="104" x2="49" y2="104" stroke-width="5"/></g><g fill="currentColor"><circle cx="180" cy="40" r="3.5"/><circle cx="180" cy="160" r="3.5"/></g><text x="64" y="96" font-size="14" fill="currentColor">+</text><text x="64" y="112" font-size="14" fill="currentColor">−</text><g class="fig-accent" fill="currentColor" font-size="13" font-weight="bold"><text x="95" y="24" text-anchor="middle">4 Ω</text><text x="196" y="104">6 Ω</text><text x="286" y="104">12 Ω</text><text x="74" y="140">24 V</text></g></svg>',
  alt: 'A combination circuit. A 24-volt battery connects to a 4-ohm resistor in the top wire. After the 4-ohm resistor, the top wire reaches a junction and splits into two parallel branches that both run down to the bottom wire: a 6-ohm resistor and a 12-ohm resistor. The bottom wire returns to the battery.',
  caption: 'Figure 4. A 4-Ω resistor in series with a 6-Ω and 12-Ω parallel pair.',
  size: 'md' as const,
}

const eic4BulbsFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="40" y1="40" x2="94" y2="40"/><line x1="126" y1="40" x2="250" y2="40"/><line x1="170" y1="40" x2="170" y2="84"/><line x1="170" y1="116" x2="170" y2="160"/><line x1="250" y1="40" x2="250" y2="84"/><line x1="250" y1="116" x2="250" y2="160"/><line x1="40" y1="160" x2="250" y2="160"/><line x1="40" y1="40" x2="40" y2="92"/><line x1="40" y1="104" x2="40" y2="160"/></g><g stroke="currentColor"><line x1="22" y1="92" x2="58" y2="92" stroke-width="2.5"/><line x1="31" y1="104" x2="49" y2="104" stroke-width="5"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2" fill="none"><circle cx="110" cy="40" r="16"/><line x1="99" y1="29" x2="121" y2="51"/><line x1="121" y1="29" x2="99" y2="51"/><circle cx="170" cy="100" r="16"/><line x1="159" y1="89" x2="181" y2="111"/><line x1="181" y1="89" x2="159" y2="111"/><circle cx="250" cy="100" r="16"/><line x1="239" y1="89" x2="261" y2="111"/><line x1="261" y1="89" x2="239" y2="111"/></g><g fill="currentColor"><circle cx="170" cy="40" r="3.5"/><circle cx="170" cy="160" r="3.5"/></g><g fill="currentColor" font-size="12"><text x="110" y="76" text-anchor="middle">Bulb 1</text><text x="190" y="104">Bulb 2</text><text x="270" y="104">Bulb 3</text></g></svg>',
  alt: 'A battery connected to Bulb 1 in the top wire. After Bulb 1 the wire splits at a junction into two parallel branches running down to the bottom wire: Bulb 2 in the first branch and Bulb 3 in the second. The bottom wire returns to the battery. All three bulbs are identical.',
  caption: 'Figure 5. Bulb 1 in series with the parallel pair Bulb 2 and Bulb 3 (identical bulbs).',
  size: 'md' as const,
}

export const asvabEiCircuitsPart4Data = {
  topicSlug: 'asvab-ei-circuits',
  sections: [
    {
      id: 'eic4-intro',
      type: 'text' as const,
      content: `# 🔌 Series and Parallel Circuits and Power

**Part 4 of 7 — Combination Circuits and Circuit Faults**

### Series-Parallel Circuits

Many diagrams mix the two: a resistor in series with a parallel group. Solve them by **shrinking** the circuit one piece at a time.

1. **Find a group that is purely parallel** (or purely series) and replace it with its equivalent resistance.
2. **Repeat** until one resistance is left. That is the total.
3. **Total current** = source voltage ÷ total resistance.
4. **Work back out** using Ohm's law for each piece.

### Worked example (Figure 4, coming up)

A 4-Ω resistor is in series with a parallel pair of 6 Ω and 12 Ω, across 24 V.

- **Parallel pair:** $\\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4$ Ω.
- **Total:** $4 + 4 = 8$ Ω (the series resistor plus the pair).
- **Total current:** $\\frac{24}{8} = 3$ A. All 3 A flows through the 4-Ω series resistor.
- **Voltage across the series resistor:** $3 \\times 4 = 12$ V. That leaves $24 - 12 = 12$ V across the parallel pair.
- **Branch currents:** $\\frac{12}{6} = 2$ A and $\\frac{12}{12} = 1$ A, which add back to 3 A. ✓`,
    },
    {
      id: 'eic4-figure-input',
      type: 'input-boxes' as const,
      figure: eic4ComboFigure,
      content: `**Same circuit, new numbers.** ✍️ In Figure 4, the 12-Ω resistor is replaced with a **6-Ω** resistor, so the parallel pair is now two 6-Ω resistors, and the battery is replaced with a **21-V** battery. The series resistor is still 4 Ω. Numbers only.

**1)** Equivalent resistance of the parallel pair, in ohms:

**2)** Total resistance of the circuit, in ohms:

**3)** Total current from the battery, in amperes:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '7', '3'],
        hint1: 'Two identical resistors in parallel: one of them divided by 2.',
        hint2: 'Add the series 4 Ω.',
        hint3: 'Current = 21 ÷ total.',
        explanation: '(1) 6 ÷ 2 = 3 Ω. (2) 4 + 3 = 7 Ω. (3) 21 ÷ 7 = 3 A. That 3 A flows through the 4-Ω resistor (a 12-V drop), leaving 9 V across the pair, so each 6-Ω branch carries 1.5 A.',
      },
    },
    {
      id: 'eic4-faults',
      type: 'text' as const,
      content: `## Circuit Faults: Opens and Shorts

| Fault | What it is | Effect on current | Effect on the parts |
|:---|:---|:---|:---|
| **Open** | a break: burned-out bulb, broken wire, loose connection, blown fuse | **zero** in that path | parts **in series** with the break go off; parallel branches elsewhere keep working |
| **Short** | a near-zero-resistance path that **bypasses** one or more parts | **rises** (total resistance falls) | the bypassed parts go **off**; other series parts get **more** voltage; a short across the source draws a huge current until a fuse or breaker opens |

### Reading a bulb diagram (Figure 5)

Bulb 1 carries the **total** current. Bulbs 2 and 3 split it.

- **Bulb 1 burns out:** it is in series with everything, so **all three go out**.
- **Bulb 2 burns out:** Bulb 3's branch is still a complete path through Bulb 1, so **Bulbs 1 and 3 stay lit**. Now Bulbs 1 and 3 are simply in series, so they share the voltage equally: Bulb 3 gets **brighter** than before and Bulb 1 gets **dimmer**.
- **A wire shorts across Bulb 1:** Bulb 1 goes out, and Bulbs 2 and 3 get the whole battery voltage, so they get **brighter**.

> **Key Fact:** A short does not "use up" current, it **removes resistance**. Less resistance means more current, more heat in the wires, and a blown fuse or tripped breaker if the circuit is protected.`,
    },
    {
      id: 'eic4-figure-mc',
      type: 'multiple-choice' as const,
      figure: eic4BulbsFigure,
      content: '**Use Figure 5.** 🎯 All three bulbs are identical.',
      exercise: {
        questions: [
          {
            question: 'Which bulb carries the most current when all three are lit?',
            options: ['Bulb 1', 'Bulb 2', 'Bulb 3', 'All three carry the same current'],
            correctAnswer: 0,
            explanation: 'All of the current passes through Bulb 1, then splits between Bulbs 2 and 3. With identical bulbs, each branch carries half of Bulb 1\'s current.',
          },
          {
            question: 'Bulb 3 burns out. Which bulbs stay lit?',
            options: ['Bulbs 1 and 2', 'Bulb 1 only', 'Bulb 2 only', 'None of the bulbs'],
            correctAnswer: 0,
            explanation: 'Bulb 2\'s branch still connects through Bulb 1 to both battery terminals, so Bulbs 1 and 2 form a complete series loop and stay lit.',
          },
          {
            question: 'Instead, a wire is connected across Bulb 2, shorting it. What happens?',
            options: ['Bulbs 2 and 3 go out and Bulb 1 gets brighter', 'Only Bulb 2 goes out; Bulbs 1 and 3 stay the same', 'All three bulbs get brighter', 'All three bulbs go out because the battery is disconnected'],
            correctAnswer: 0,
            explanation: 'The wire is in parallel with both Bulb 2 and Bulb 3, so it bypasses the whole parallel pair: current takes the zero-resistance wire instead of either bulb. Bulb 1 is left alone across the battery and gets the full voltage, so it glows brighter.',
          },
        ],
      },
    },
    {
      id: 'eic4-mc',
      type: 'multiple-choice' as const,
      content: '**Faults in general.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Damaged insulation lets the two wires of a lamp cord touch each other. What happens to the current in the cord?',
            options: ['It rises sharply, and the fuse or breaker should open', 'It drops to zero, because the lamp is bypassed', 'It stays the same, but the lamp gets brighter', 'It reverses direction through the lamp'],
            correctAnswer: 0,
            explanation: 'The touching wires form a short: a path with almost no resistance. Current rises sharply, which is exactly what fuses and breakers are designed to stop.',
          },
          {
            question: 'Three identical bulbs are in series across a battery. A wire is connected across one of them. What happens to the other two?',
            options: ['They get brighter', 'They go out', 'They get dimmer', 'They stay exactly the same'],
            correctAnswer: 0,
            explanation: 'The shorted bulb goes out, and the remaining two now share the whole battery voltage (half each instead of a third each), so they glow brighter.',
          },
        ],
      },
    },
    {
      id: 'eic4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Solve combination circuits by **shrinking**: replace parallel groups and series groups with their equivalents, find the total current, then work back out
- The resistor **in series with everything** carries the **total** current
- **Open** = a break, zero current in that path; parts in series with it go off
- **Short** = a bypass with almost no resistance; current rises, bypassed parts go off, other series parts get brighter, fuses blow

> **Up Next:** Part 5 — electrical power: watts, kilowatt-hours and why some bulbs glow brighter.`,
    },
  ],
}
