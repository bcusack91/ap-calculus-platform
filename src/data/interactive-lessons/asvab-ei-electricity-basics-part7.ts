const eib7AmmeterFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="40" x2="146" y2="40"/><line x1="174" y1="40" x2="260" y2="40"/><line x1="260" y1="40" x2="260" y2="70"/><polyline points="260,70 252,75 268,85 252,95 268,105 252,115 268,125 260,130"/><line x1="260" y1="130" x2="260" y2="160"/><line x1="60" y1="160" x2="260" y2="160"/><line x1="60" y1="40" x2="60" y2="92"/><line x1="60" y1="104" x2="60" y2="160"/></g><g stroke="currentColor"><line x1="42" y1="92" x2="78" y2="92" stroke-width="2.5"/><line x1="51" y1="104" x2="69" y2="104" stroke-width="5"/></g><text x="86" y="96" font-size="14" fill="currentColor">+</text><text x="86" y="112" font-size="14" fill="currentColor">−</text><g class="fig-accent"><circle cx="160" cy="40" r="14" fill="none" stroke="currentColor" stroke-width="2"/><text x="160" y="45" font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle">A</text></g><g fill="currentColor" font-size="13" font-weight="bold"><text x="14" y="104">9 V</text><text x="278" y="104">R</text><text x="160" y="76" text-anchor="middle">reads 3 A</text></g></svg>',
  alt: 'A 9-volt battery connected to a single resistor R. An ammeter, a circle with the letter A, is in series in the top wire and reads 3 amperes.',
  caption: 'Figure 7. The ammeter reads 3 A.',
  size: 'md' as const,
}

export const asvabEiElectricityBasicsPart7Data = {
  topicSlug: 'asvab-ei-electricity-basics',
  sections: [
    {
      id: 'eib7-intro',
      type: 'text' as const,
      content: `# ⚡ Current, Voltage, Resistance and Ohm's Law

**Part 7 of 7 — Mixed Mastery Set**

Ten questions at real EI difficulty: a mix of recall, reasoning and hand calculation, in no particular order, just like the test. Give yourself about **40 seconds each**. Use scratch paper, no calculator.

| Skill | Where it was taught |
|:---|:---:|
| Charge, current, voltage, electron flow | Part 2 |
| Conductors, insulators, gauge, wire resistance | Part 3 |
| Ohm's law | Part 4 |
| Meters and prefixes | Part 5 |`,
    },
    {
      id: 'eib7-figure-mc',
      type: 'multiple-choice' as const,
      figure: eib7AmmeterFigure,
      content: '**Question 1.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Based on the figure, what is the resistance of R?',
            options: ['3 Ω', '27 Ω', '6 Ω', '12 Ω'],
            correctAnswer: 0,
            explanation: '$R = \\frac{V}{I} = \\frac{9}{3} = 3$ Ω. Multiplying gives 27, and adding or subtracting the two numbers gives 12 or 6, none of which follows Ohm\'s law.',
          },
        ],
      },
    },
    {
      id: 'eib7-mc-a',
      type: 'multiple-choice' as const,
      content: '**Questions 2–5.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which of these materials is the best insulator?',
            options: ['Porcelain', 'Copper', 'Salt water', 'Aluminum foil'],
            correctAnswer: 0,
            explanation: 'Porcelain (ceramic) is an excellent insulator, which is why it is used to hold power lines. Copper and aluminum are metal conductors, and salt water conducts because of its dissolved salt.',
          },
          {
            question: 'A toaster draws 8 A from a 120-V outlet. What is the resistance of its heating element?',
            options: ['15 Ω', '960 Ω', '112 Ω', '128 Ω'],
            correctAnswer: 0,
            explanation: '$R = \\frac{V}{I} = \\frac{120}{8} = 15$ Ω. 960 comes from multiplying; 112 and 128 come from subtracting and adding.',
          },
          {
            question: 'One ampere of current is equal to:',
            options: ['one coulomb of charge passing a point each second', 'one volt of push applied for one second', 'one ohm of resistance for each volt applied', 'one watt of power delivered by each coulomb'],
            correctAnswer: 0,
            explanation: 'Current is the rate of charge flow, so 1 ampere = 1 coulomb per second.',
          },
          {
            question: 'A battery is connected to a length of thin wire, which is the only resistance in the circuit. The wire is replaced by a longer wire of the same material and thickness. What happens to the current?',
            options: ['It decreases', 'It increases', 'It stays the same', 'It reverses direction'],
            correctAnswer: 0,
            explanation: 'A longer wire has more resistance. With the same voltage, more resistance means less current.',
          },
        ],
      },
    },
    {
      id: 'eib7-mc-b',
      type: 'multiple-choice' as const,
      content: '**Questions 6–9.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 12-V source drives a current of 4 mA through a resistor. What is the resistance?',
            options: ['3 kΩ', '48 kΩ', '3 Ω', '30 kΩ'],
            correctAnswer: 0,
            explanation: 'Volts ÷ milliamps = kilohms: 12 ÷ 4 = 3 kΩ (12 V ÷ 0.004 A = 3,000 Ω). 3 Ω ignores the milli prefix, and 48 kΩ multiplies instead of dividing.',
          },
          {
            question: 'An electrician suspects a break in one conductor inside an unplugged extension cord. Which instrument is best for checking it?',
            options: ['An ohmmeter', 'An ammeter', 'A wattmeter', 'A voltmeter'],
            correctAnswer: 0,
            explanation: 'With the cord unplugged, an ohmmeter can test each conductor for continuity: near 0 Ω means unbroken, infinite means a break. Ammeters, voltmeters and wattmeters need a powered circuit.',
          },
          {
            question: 'A resistor carries 2 A when 6 V is applied. What current will it carry when 15 V is applied?',
            options: ['5 A', '2.5 A', '7.5 A', '30 A'],
            correctAnswer: 0,
            explanation: 'The resistance is 6 ÷ 2 = 3 Ω. At 15 V, $I = \\frac{15}{3} = 5$ A. Or reason by proportion: 15 V is 2.5 times 6 V, so the current is 2.5 × 2 = 5 A.',
          },
          {
            question: 'Which statement about semiconductors such as silicon is true?',
            options: ['Their resistance falls between that of conductors and insulators', 'They conduct electricity better than silver or copper', 'They never allow any current to flow through them', 'They are mainly used as coatings to insulate wires'],
            correctAnswer: 0,
            explanation: 'Semiconductors sit between conductors and insulators, and their conductivity can be controlled, which is what makes diodes, transistors and chips work.',
          },
        ],
      },
    },
    {
      id: 'eib7-input',
      type: 'input-boxes' as const,
      content: `**Question 10.** ✍️ Numbers only.

**1)** A current of 0.2 A flows through a 50-Ω resistor. What is the voltage across it, in volts?

**2)** A space heater draws 12 A on a 120-V circuit. What is its resistance, in ohms?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['10', '10'],
        hint1: 'Voltage = current × resistance.',
        hint2: 'Resistance = voltage ÷ current.',
        hint3: '0.2 × 50 is the same as 50 ÷ 5.',
        explanation: '(1) 0.2 × 50 = 10 V. (2) 120 ÷ 12 = 10 Ω.',
      },
    },
    {
      id: 'eib7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Current, Voltage, Resistance and Ohm's Law

- **Current** (A) = charge per second; **voltage** (V, also $E$) = the push; **resistance** (Ω) = the opposition
- **Ohm's law:** $V = IR$, $I = \\frac{V}{R}$, $R = \\frac{V}{I}$; current rises with voltage and falls with resistance
- **Silver** is the best conductor, **copper** the most used; rubber, glass, porcelain and plastic insulate; silicon and germanium are semiconductors
- Longer or thinner wire → more resistance; bigger gauge number → thinner wire
- Ammeter **in series**, voltmeter **across**, ohmmeter **power off**; 0 Ω = continuity, infinite = open

> **Next topic:** Series and Parallel Circuits and Power.`,
    },
  ],
}
