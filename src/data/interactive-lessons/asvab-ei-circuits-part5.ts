const eic5TriangleFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="160,20 270,180 50,180" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="105" y1="110" x2="215" y2="110" stroke="currentColor" stroke-width="2"/><g class="fig-accent-2" fill="currentColor" font-size="30" font-weight="bold" text-anchor="middle"><text x="160" y="92">P</text><text x="125" y="160">I</text><text x="195" y="160">V</text></g><text x="160" y="160" font-size="20" fill="currentColor" text-anchor="middle">×</text></svg>',
  alt: 'The power triangle. P is in the top section. The bottom section holds I on the left and V on the right, with a times sign between them.',
  caption: 'Figure 6. Power = current × voltage. Cover the quantity you want.',
  size: 'sm' as const,
}

export const asvabEiCircuitsPart5Data = {
  topicSlug: 'asvab-ei-circuits',
  sections: [
    {
      id: 'eic5-intro',
      type: 'text' as const,
      content: `# 🔌 Series and Parallel Circuits and Power

**Part 5 of 7 — Electrical Power and Energy**

### What Power Means

**Power** is how fast electrical energy is used (or delivered). It is measured in **watts** (W). A 100-W bulb uses energy twice as fast as a 50-W bulb. 1 **kilowatt** (kW) = 1,000 W.

### The Power Formula

$$P = I \\times V \\qquad \\text{(watts = amps} \\times \\text{volts)}$$

Combine it with Ohm's law and you get two more forms, useful when you know the resistance:

| You know | Use | Example |
|:---|:---|:---|
| current and voltage | $P = I \\times V$ | 2 A at 12 V: 24 W |
| current and resistance | $P = I^2 \\times R$ | 3 A through 4 Ω: $9 \\times 4 = 36$ W |
| voltage and resistance | $P = \\frac{V^2}{R}$ | 12 V across 6 Ω: $\\frac{144}{6} = 24$ W |

Rearranged: $I = \\frac{P}{V}$ (find the current an appliance draws) and $V = \\frac{P}{I}$.

**Worked example 1.** A 1,200-W hair dryer runs on 120 V. Current: $I = \\frac{1200}{120} = 10$ A.

**Worked example 2.** A 60-W bulb on a 120-V circuit. Current: $\\frac{60}{120} = 0.5$ A. Resistance: $R = \\frac{V}{I} = \\frac{120}{0.5} = 240$ Ω.

> **Key Fact:** Resistance turns electrical energy into **heat**. Doubling the current through the same resistor makes **four times** the heat ($P = I^2R$). That is why a short circuit, with its huge current, heats wires so fast.`,
      figure: eic5TriangleFigure,
    },
    {
      id: 'eic5-energy',
      type: 'text' as const,
      content: `## Energy and the Electric Bill

**Energy = power × time.** The power company bills you in **kilowatt-hours** (kWh): one kilowatt used for one hour.

| Appliance | Power | Time | Energy |
|:---|:---:|:---:|:---:|
| Ten 100-W bulbs | 1,000 W = 1 kW | 1 hour | 1 kWh |
| One 100-W bulb | 0.1 kW | 10 hours | 1 kWh |
| A 1,500-W heater | 1.5 kW | 4 hours | 6 kWh |

**Cost** = kWh × price per kWh. At 15 cents per kWh, the heater above costs 6 × 15 = 90 cents, or \\$0.90.

Do not mix up **kW** (how fast energy is used, a power) with **kWh** (how much energy was used in total).

## Which Bulb Is Brighter?

Brightness follows the power each bulb actually uses.

- **In parallel** (normal house wiring), every bulb gets the full voltage, so the bulb rated at **more watts** (lower resistance) glows brighter. A 100-W bulb beats a 60-W bulb.
- **In series**, every bulb carries the **same current**, so $P = I^2R$ says the bulb with the **larger resistance** uses more power and glows brighter. (Surprise: wired in series, a 60-W bulb outshines a 100-W bulb, because the 60-W bulb has the higher resistance.)
- In a series circuit, adding bulbs lowers the current, so **every** bulb gets dimmer. In parallel, adding bulbs leaves each one's brightness unchanged.`,
    },
    {
      id: 'eic5-input',
      type: 'input-boxes' as const,
      content: `**Power and energy by hand.** ✍️ Numbers only.

**1)** A car headlight draws 5 A from a 12-V battery. What is its power, in watts?

**2)** A 900-W microwave runs on 120 V. What current does it draw, in amperes?

**3)** A current of 2 A flows through a 15-Ω resistor. How much power does the resistor use, in watts?

**4)** A 2,000-W space heater runs for 3 hours. How many kilowatt-hours does it use?`,
      exercise: {
        boxes: 4,
        correctAnswers: ['60', '7.5', '60', '6'],
        hint1: 'P = I × V.',
        hint2: 'I = P ÷ V.',
        hint3: 'P = I² × R; for energy, convert watts to kilowatts and multiply by hours.',
        explanation: '(1) 5 × 12 = 60 W. (2) 900 ÷ 120 = 7.5 A. (3) 2² × 15 = 4 × 15 = 60 W. (4) 2,000 W = 2 kW, and 2 × 3 = 6 kWh.',
      },
    },
    {
      id: 'eic5-mc',
      type: 'multiple-choice' as const,
      content: '**Reason about power.** 🎯',
      exercise: {
        questions: [
          {
            question: 'The current through a resistor doubles. By what factor does the power it turns into heat change?',
            options: ['It becomes 4 times as large', 'It becomes 2 times as large', 'It stays the same', 'It becomes half as large'],
            correctAnswer: 0,
            explanation: 'With R fixed, $P = I^2R$. Doubling I multiplies $I^2$ by 4, so the heat is four times as large.',
          },
          {
            question: 'A 40-W bulb and a 100-W bulb are each plugged into separate 120-V household outlets. Which statement is correct?',
            options: ['The 100-W bulb is brighter and has the lower resistance', 'The 100-W bulb is brighter and has the higher resistance', 'The 40-W bulb is brighter and has the lower resistance', 'Both are equally bright because the voltage is the same'],
            correctAnswer: 0,
            explanation: 'At the same voltage, $P = \\frac{V^2}{R}$, so the higher-wattage bulb has the lower resistance and uses more power, glowing brighter.',
          },
          {
            question: 'Which unit does the electric company use to bill for the total energy a home uses?',
            options: ['Kilowatt-hour', 'Kilowatt', 'Volt-ampere', 'Ampere-hour per volt'],
            correctAnswer: 0,
            explanation: 'Energy = power × time, billed in kilowatt-hours. A kilowatt is a rate (power), not a total amount of energy.',
          },
          {
            question: 'A 12-V source is connected across a 3-Ω resistor. How much power does the resistor use?',
            options: ['48 W', '36 W', '4 W', '144 W'],
            correctAnswer: 0,
            explanation: '$P = \\frac{V^2}{R} = \\frac{144}{3} = 48$ W. Or: I = 12 ÷ 3 = 4 A, and 4 × 12 = 48 W. 4 is the current, 36 multiplies volts by ohms, and 144 forgets to divide.',
          },
        ],
      },
    },
    {
      id: 'eic5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Pick the formula.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'You know the current and the voltage. Power =', options: ['I × V', 'V ÷ I', 'I ÷ V', 'I + V'], correctAnswer: 0 },
          { label: 'You know the current and the resistance. Power =', options: ['I² × R', 'I × R', 'R ÷ I²', 'I ÷ R'], correctAnswer: 0 },
          { label: 'You know the power and the voltage. Current =', options: ['P ÷ V', 'P × V', 'V ÷ P', 'P − V'], correctAnswer: 0 },
        ],
        correctAnswers: ['I × V', 'I² × R', 'P ÷ V'],
        hint1: 'Watts = amps × volts.',
        hint2: 'Replace V with I × R in P = I × V.',
        hint3: 'Cover I on the power triangle.',
        explanation: '$P = IV$; substituting $V = IR$ gives $P = I^2R$; and $I = \\frac{P}{V}$.',
      },
    },
    {
      id: 'eic5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Power** (watts) = $I \\times V$; also $I^2R$ and $\\frac{V^2}{R}$; 1 kW = 1,000 W
- Current an appliance draws: $I = \\frac{P}{V}$ (1,200 W at 120 V → 10 A)
- **Energy** = power × time, billed in **kilowatt-hours**; cost = kWh × price
- Double the current through a resistor → **4×** the heat
- In parallel the **higher-wattage** bulb is brighter; in series the **higher-resistance** bulb is brighter

> **Up Next:** Part 6 — how to work circuit questions fast and the traps to avoid.`,
    },
  ],
}
