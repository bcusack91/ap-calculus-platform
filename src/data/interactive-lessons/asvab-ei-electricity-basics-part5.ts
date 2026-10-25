const eib5MetersFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="40" x2="146" y2="40"/><line x1="174" y1="40" x2="260" y2="40"/><line x1="260" y1="40" x2="260" y2="70"/><polyline points="260,70 252,75 268,85 252,95 268,105 252,115 268,125 260,130"/><line x1="260" y1="130" x2="260" y2="160"/><line x1="60" y1="160" x2="260" y2="160"/><line x1="60" y1="40" x2="60" y2="92"/><line x1="60" y1="104" x2="60" y2="160"/><polyline points="260,55 298,55 298,86"/><polyline points="298,114 298,145 260,145"/></g><g stroke="currentColor"><line x1="42" y1="92" x2="78" y2="92" stroke-width="2.5"/><line x1="51" y1="104" x2="69" y2="104" stroke-width="5"/></g><text x="86" y="96" font-size="14" fill="currentColor">+</text><text x="86" y="112" font-size="14" fill="currentColor">−</text><text x="10" y="104" font-size="12" fill="currentColor">battery</text><text x="232" y="104" font-size="12" fill="currentColor">R</text><g class="fig-accent"><circle cx="160" cy="40" r="14" fill="none" stroke="currentColor" stroke-width="2"/><text x="160" y="45" font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle">A</text></g><g class="fig-accent-2"><circle cx="298" cy="100" r="14" fill="none" stroke="currentColor" stroke-width="2"/><text x="298" y="105" font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle">V</text></g><text x="160" y="72" font-size="11" fill="currentColor" text-anchor="middle">meter 1</text><text x="298" y="190" font-size="11" fill="currentColor" text-anchor="middle">meter 2</text></svg>',
  alt: 'A battery connected to a resistor R. Meter 1, a circle with the letter A, sits in the top wire so that all the current must pass through it. Meter 2, a circle with the letter V, is connected by two side wires to the top and bottom ends of the resistor, alongside it.',
  caption: 'Figure 6. Two meters connected to a simple circuit.',
  size: 'md' as const,
}

export const asvabEiElectricityBasicsPart5Data = {
  topicSlug: 'asvab-ei-electricity-basics',
  sections: [
    {
      id: 'eib5-intro',
      type: 'text' as const,
      content: `# ⚡ Current, Voltage, Resistance and Ohm's Law

**Part 5 of 7 — Measuring Electricity: Meters and Units**

### Three Meters, Three Jobs

| Meter | Measures | How it is connected | Its own resistance |
|:---|:---|:---|:---|
| **Ammeter** | current (amps) | **in series**: the circuit is opened and the meter becomes part of the path, so all the current flows through it | very **low**, so it does not slow the current |
| **Voltmeter** | voltage (volts) | **in parallel**: its two leads touch both ends of the part being measured ("across" it) | very **high**, so almost no current is pulled through it |
| **Ohmmeter** | resistance (ohms) | across the part, with the circuit's **power OFF** | uses its own small battery |

A **multimeter** is one handheld tool that switches between all three jobs (and usually more). A **galvanometer** is a very sensitive meter that detects tiny currents; it is the heart of older needle-style meters. A **wattmeter** measures power.

### Why the hookup matters

- An ammeter connected **across** a part (in parallel) offers a nearly zero-resistance path, so a huge current rushes through it. That can blow the meter's fuse or damage it.
- An ohmmeter connected to a **live** circuit gives a false reading and can be damaged, because the circuit's voltage adds to the meter's own battery.

### Reading an ohmmeter

| Reading | Meaning |
|:---|:---|
| about **0 Ω** | a complete path (**continuity**): a good fuse, a good wire, or a short circuit |
| **infinite** (often shown "OL", over limit) | **no path** (an **open**): a blown fuse, a broken wire, a burned-out bulb filament |
| a number in between | the part's resistance |

> **Key Fact:** Checking whether a fuse or bulb is good is a **continuity test** with an ohmmeter: near 0 Ω means good, infinite means open (bad).`,
    },
    {
      id: 'eib5-figure-mc',
      type: 'multiple-choice' as const,
      figure: eib5MetersFigure,
      content: '**Read the hookup.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Meter 1 sits in the wire so that all the current passes through it. Which meter must it be?',
            options: ['An ammeter, because it is connected in series', 'A voltmeter, because it is connected in series', 'An ohmmeter, because the circuit is powered', 'A wattmeter, because it touches the battery'],
            correctAnswer: 0,
            explanation: 'Current is measured by putting an ammeter in series so the whole current flows through it. Voltmeters go across a part, and an ohmmeter is never used on a powered circuit.',
          },
          {
            question: 'Meter 2 is connected across the two ends of the resistor. What does it measure?',
            options: ['The voltage across the resistor', 'The current through the battery', 'The resistance of the wires', 'The power stored in the battery'],
            correctAnswer: 0,
            explanation: 'A voltmeter connected in parallel with a part reads the voltage across that part: here, the voltage drop across R.',
          },
        ],
      },
    },
    {
      id: 'eib5-units',
      type: 'text' as const,
      content: `## Unit Prefixes

Electronics uses very large and very small numbers, so units get prefixes.

| Prefix | Symbol | Means | Example |
|:---|:---:|:---|:---|
| mega | M | × 1,000,000 | 2 MΩ = 2,000,000 Ω |
| kilo | k | × 1,000 | 4.7 kΩ = 4,700 Ω |
| (none) | | × 1 | 5 A |
| milli | m | ÷ 1,000 | 250 mA = 0.25 A |
| micro | µ | ÷ 1,000,000 | 50 µA = 0.00005 A |

Watch capital vs lowercase: **M** (mega, a million) and **m** (milli, a thousandth) differ by a factor of a billion.

### Converting

- **Larger unit → smaller unit:** multiply by 1,000 per step. 3.2 A = 3,200 mA.
- **Smaller unit → larger unit:** divide by 1,000 per step. 1,500 Ω = 1.5 kΩ.

### Symbols you will see in questions

| Quantity | Letter | Unit | Unit symbol |
|:---|:---:|:---|:---:|
| Current | $I$ | ampere | A |
| Voltage | $V$ or $E$ | volt | V |
| Resistance | $R$ | ohm | Ω |
| Charge | $Q$ | coulomb | C |
| Power | $P$ | watt | W |`,
    },
    {
      id: 'eib5-mc',
      type: 'multiple-choice' as const,
      content: '**Meters in practice.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A technician wants to know whether a cartridge fuse has blown. She removes it and tests it with an ohmmeter. Which reading shows the fuse is blown?',
            options: ['An infinite (open) reading', 'A reading of about 0 Ω', 'A reading equal to the circuit voltage', 'A reading that matches the fuse amp rating'],
            correctAnswer: 0,
            explanation: 'A blown fuse has a melted link, so there is no path through it: the ohmmeter reads infinite. A good fuse reads close to 0 Ω.',
          },
          {
            question: 'Why must the power be turned off before measuring resistance with an ohmmeter?',
            options: ['The circuit voltage would distort the reading and could damage the meter', 'Resistance only exists when no current is flowing', 'An ohmmeter measures only stored charge in a dead circuit', 'Turning the power off doubles the resistance, which makes small values much easier to read'],
            correctAnswer: 0,
            explanation: 'An ohmmeter sends its own small current from an internal battery. Outside voltage adds to that and gives a false reading, and can damage the meter. Resistance itself does not depend on the power being off.',
          },
          {
            question: 'Which meter has a very high internal resistance so that it draws almost no current from the circuit it is measuring?',
            options: ['A voltmeter', 'An ammeter', 'A galvanometer used as a fuse', 'A circuit breaker'],
            correctAnswer: 0,
            explanation: 'A voltmeter sits in parallel with the part it measures, so it must have high resistance to avoid pulling current away. An ammeter sits in series and has very low resistance.',
          },
        ],
      },
    },
    {
      id: 'eib5-input',
      type: 'input-boxes' as const,
      content: `**Convert the units.** ✍️ Numbers only.

**1)** 0.75 A = how many milliamps?

**2)** 6,800 Ω = how many kilohms?

**3)** 2.5 MΩ = how many kilohms?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['750', '6.8', '2500'],
        hint1: 'Amps to milliamps: multiply by 1,000.',
        hint2: 'Ohms to kilohms: divide by 1,000.',
        hint3: 'Megohms to kilohms is one step down: multiply by 1,000.',
        explanation: '(1) 0.75 × 1,000 = 750 mA. (2) 6,800 ÷ 1,000 = 6.8 kΩ. (3) 2.5 × 1,000 = 2,500 kΩ.',
      },
    },
    {
      id: 'eib5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the meter and the hookup.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'To measure the current through a lamp, use:', options: ['an ammeter in series', 'an ammeter in parallel', 'a voltmeter in series', 'an ohmmeter with power on'], correctAnswer: 0 },
          { label: 'To measure the voltage of a battery, use:', options: ['a voltmeter across its terminals', 'an ammeter across its terminals', 'an ohmmeter across its terminals', 'a voltmeter in series with a lamp'], correctAnswer: 0 },
          { label: 'An ohmmeter reads about 0 Ω across a switch that is closed. This shows:', options: ['continuity (a complete path)', 'an open circuit', 'a blown fuse', 'high voltage'], correctAnswer: 0 },
        ],
        correctAnswers: ['an ammeter in series', 'a voltmeter across its terminals', 'continuity (a complete path)'],
        hint1: 'Current is measured by making it flow through the meter.',
        hint2: 'Voltage is measured across two points.',
        hint3: 'Zero ohms means nothing is blocking the path.',
        explanation: 'Ammeters go in series; voltmeters go across (in parallel with) what they measure; a reading near 0 Ω shows continuity, which is what a closed switch should give.',
      },
    },
    {
      id: 'eib5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Ammeter:** current, **in series**, low resistance. **Voltmeter:** voltage, **in parallel (across)**, high resistance. **Ohmmeter:** resistance, **power off**
- A **multimeter** does all three; a **galvanometer** detects small currents; a **wattmeter** measures power
- Ohmmeter: about 0 Ω = continuity; infinite = open (blown fuse, broken wire, dead bulb)
- **M** = million, **k** = thousand, **m** = thousandth, **µ** = millionth

> **Up Next:** Part 6 — how to work EI questions fast and the traps that cost points.`,
    },
  ],
}
