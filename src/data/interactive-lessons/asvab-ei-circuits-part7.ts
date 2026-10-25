const eic7ComboFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="40" y1="40" x2="70" y2="40"/><polyline points="70,40 75,32 85,48 95,32 105,48 115,32 120,40"/><line x1="120" y1="40" x2="270" y2="40"/><line x1="180" y1="40" x2="180" y2="70"/><polyline points="180,70 172,75 188,85 172,95 188,105 172,115 188,125 180,130"/><line x1="180" y1="130" x2="180" y2="160"/><line x1="270" y1="40" x2="270" y2="70"/><polyline points="270,70 262,75 278,85 262,95 278,105 262,115 278,125 270,130"/><line x1="270" y1="130" x2="270" y2="160"/><line x1="40" y1="160" x2="270" y2="160"/><line x1="40" y1="40" x2="40" y2="92"/><line x1="40" y1="104" x2="40" y2="160"/></g><g stroke="currentColor"><line x1="22" y1="92" x2="58" y2="92" stroke-width="2.5"/><line x1="31" y1="104" x2="49" y2="104" stroke-width="5"/></g><g fill="currentColor"><circle cx="180" cy="40" r="3.5"/><circle cx="180" cy="160" r="3.5"/></g><text x="64" y="96" font-size="14" fill="currentColor">+</text><text x="64" y="112" font-size="14" fill="currentColor">−</text><g class="fig-accent" fill="currentColor" font-size="13" font-weight="bold"><text x="95" y="24" text-anchor="middle">2 Ω</text><text x="196" y="104">3 Ω</text><text x="286" y="104">6 Ω</text><text x="74" y="140">12 V</text></g></svg>',
  alt: 'A 12-volt battery connects to a 2-ohm resistor in the top wire. After it, the wire splits into two parallel branches running down to the bottom wire: a 3-ohm resistor and a 6-ohm resistor. The bottom wire returns to the battery.',
  caption: 'Figure 7. A 2-Ω resistor in series with a 3-Ω and 6-Ω parallel pair.',
  size: 'md' as const,
}

export const asvabEiCircuitsPart7Data = {
  topicSlug: 'asvab-ei-circuits',
  sections: [
    {
      id: 'eic7-intro',
      type: 'text' as const,
      content: `# 🔌 Series and Parallel Circuits and Power

**Part 7 of 7 — Mixed Mastery Set**

Ten questions mixing everything in this topic, at real EI difficulty. Aim for about **40 seconds each**, using scratch paper and no calculator.

| Skill | Where it was taught |
|:---|:---:|
| Open, closed and short circuits | Part 1 |
| Series rules | Part 2 |
| Parallel rules | Part 3 |
| Combination circuits and faults | Part 4 |
| Power and energy | Part 5 |`,
    },
    {
      id: 'eic7-figure-mc',
      type: 'multiple-choice' as const,
      figure: eic7ComboFigure,
      content: '**Questions 1–3 use Figure 7.** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the total current supplied by the battery?',
            options: ['3 A', '1 A', '6 A', '1.1 A'],
            correctAnswer: 0,
            explanation: 'The parallel pair is $\\frac{3 \\times 6}{3 + 6} = 2$ Ω, so the total is 2 + 2 = 4 Ω and the current is 12 ÷ 4 = 3 A. 1.1 A comes from wrongly adding all three resistors (11 Ω).',
          },
          {
            question: 'What is the voltage across the 3-Ω resistor?',
            options: ['6 V', '12 V', '9 V', '3 V'],
            correctAnswer: 0,
            explanation: 'The 2-Ω series resistor carries all 3 A, so it drops 3 × 2 = 6 V. That leaves 12 − 6 = 6 V across the parallel pair, and both branches share that same 6 V.',
          },
          {
            question: 'What current flows through the 6-Ω resistor?',
            options: ['1 A', '2 A', '3 A', '0.5 A'],
            correctAnswer: 0,
            explanation: 'The 6-Ω branch has 6 V across it, so 6 ÷ 6 = 1 A. The 3-Ω branch carries 6 ÷ 3 = 2 A, and 1 + 2 = 3 A matches the total.',
          },
        ],
      },
    },
    {
      id: 'eic7-mc-a',
      type: 'multiple-choice' as const,
      content: '**Questions 4–7.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 3-Ω resistor and a 9-Ω resistor are in series across a 24-V source. What is the voltage drop across the 9-Ω resistor?',
            options: ['18 V', '6 V', '24 V', '12 V'],
            correctAnswer: 0,
            explanation: 'Total resistance 12 Ω, current 24 ÷ 12 = 2 A, and the drop across the 9-Ω resistor is 2 × 9 = 18 V. (The 3-Ω resistor takes the other 6 V.)',
          },
          {
            question: 'Four 20-Ω resistors are connected in parallel. What is the equivalent resistance?',
            options: ['5 Ω', '80 Ω', '20 Ω', '10 Ω'],
            correctAnswer: 0,
            explanation: 'Identical resistors in parallel: 20 ÷ 4 = 5 Ω. 80 Ω is the series total; 10 Ω would be only two of them in parallel.',
          },
          {
            question: 'A 660-W coffee maker is plugged into a 120-V outlet. How much current does it draw?',
            options: ['5.5 A', '55 A', '0.18 A', '540 A'],
            correctAnswer: 0,
            explanation: '$I = \\frac{P}{V} = \\frac{660}{120} = 5.5$ A. 55 A slips the decimal, 0.18 A divides upside down, and 540 A subtracts.',
          },
          {
            question: 'A 4-Ω resistor and a 6-Ω resistor are in parallel across a 12-V battery. What is the total current from the battery?',
            options: ['5 A', '1.2 A', '2.5 A', '10 A'],
            correctAnswer: 0,
            explanation: 'Each branch gets 12 V: 12 ÷ 4 = 3 A and 12 ÷ 6 = 2 A, for a total of 5 A. 1.2 A treats the resistors as if they were in series (10 Ω).',
          },
        ],
      },
    },
    {
      id: 'eic7-mc-b',
      type: 'multiple-choice' as const,
      content: '**Questions 8–10.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 125-W television runs for 12 hours. How much energy does it use?',
            options: ['1.5 kWh', '1,500 kWh', '15 kWh', '0.15 kWh'],
            correctAnswer: 0,
            explanation: '125 W = 0.125 kW, and 0.125 × 12 = 1.5 kWh (1,500 watt-hours). 1,500 kWh forgets to convert watts to kilowatts; 15 and 0.15 slip the decimal.',
          },
          {
            question: 'Two identical lamps are in series across a 12-V battery. A third identical lamp is added in series. How does the voltage across each lamp change?',
            options: ['From 6 V to 4 V', 'From 6 V to 12 V', 'It stays at 12 V', 'From 4 V to 6 V'],
            correctAnswer: 0,
            explanation: 'Identical lamps in series share the voltage equally: 12 ÷ 2 = 6 V each, then 12 ÷ 3 = 4 V each. Every lamp gets dimmer.',
          },
          {
            question: 'A switch is placed so that it turns off only one of three lamps wired in parallel. Where must the switch be?',
            options: ['In series with that lamp, on its own branch', 'In parallel with that lamp, across its terminals', 'In the main wire next to the battery', 'Across the battery terminals'],
            correctAnswer: 0,
            explanation: 'A switch controls whatever is in series with it. On one lamp\'s branch, it breaks only that branch. In the main wire it would turn off all three, and placed across a lamp or the battery it would make a short when closed.',
          },
        ],
      },
    },
    {
      id: 'eic7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Series and Parallel Circuits and Power

- **Series:** one path; resistances add; same current; voltage drops add to the source; one break → all off
- **Parallel:** separate branches; same voltage; currents add; total resistance below the smallest branch; one branch out → others stay on
- **Combination circuits:** shrink parallel groups first, find the total current, then work back out
- **Shorts** raise current and blow fuses; **opens** stop current in their path
- **Power:** $P = IV = I^2R = \\frac{V^2}{R}$; energy in kWh = kW × hours

> **Next topic:** Components, Symbols and AC vs DC.`,
    },
  ],
}
