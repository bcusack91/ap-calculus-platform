export const asvabEiElectricityBasicsPart6Data = {
  topicSlug: 'asvab-ei-electricity-basics',
  sections: [
    {
      id: 'eib6-intro',
      type: 'text' as const,
      content: `# ⚡ Current, Voltage, Resistance and Ohm's Law

**Part 6 of 7 — EI Test Strategy and Common Traps**

### Your Time Budget

| Version | EI questions | Time | Average per question |
|:---|:---:|:---:|:---:|
| CAT-ASVAB (MEPS and most test sites) | 15 | 10 min | about **40 s** |
| Paper enlistment test | 20 | 9 min | about 27 s |

Most EI questions are **recall**: you either know that resistance is measured in ohms or you don't. Those should take **10 to 15 seconds**. That banks time for the few **calculation** questions (Ohm's law, unit conversions), which may need 45 to 60 seconds.

### How the CAT works for you (and against you)

- You **cannot go back** to a question once you answer it, and you must answer to move on. Settle each one before you click.
- Some questions may be unscored **tryout** items. You can't tell which, so treat every question as if it counts.
- If time runs out, unanswered questions are scored as if you guessed at random, and a run of wrong answers at the end of a subtest is penalized heavily. If you are running short, keep **reading and genuinely answering** rather than clicking randomly.
- No calculator. The numbers are chosen to work by hand.

### A four-step routine for calculation questions

1. **Name the unknown** and its unit (amps? ohms? volts?).
2. **Cover it on the triangle** you drew on your scratch paper: multiply or divide.
3. **Convert prefixes first** (kΩ, mA) so the units match.
4. **Sanity check:** more resistance should mean less current; the answer's unit must match the question.`,
    },
    {
      id: 'eib6-traps',
      type: 'text' as const,
      content: `## The Traps That Cost Points

| Trap | What the wrong choice looks like | The fix |
|:---|:---|:---|
| Unit mix-up | "Current is measured in volts" | Current → amps, voltage → volts, resistance → ohms, power → watts |
| The letter $E$ | thinking $E$ means energy in $E = IR$ | In Ohm's law, $E$ is voltage (EMF) |
| Upside-down Ohm's law | $I = \\frac{R}{V}$ | Current goes **up** with voltage, **down** with resistance |
| "Best" vs "most used" conductor | picking copper as the best conductor | Best = **silver**; most used = **copper** |
| Gauge backwards | thinking 16-gauge is thicker than 12-gauge | Bigger gauge number = **thinner** wire |
| Direction | mixing electron flow with conventional current | Electrons: − to +. Conventional: + to − |
| Meter hookup | an ammeter connected across a part | Ammeter **in series**, voltmeter **across**, ohmmeter **power off** |
| Prefix slip | treating mA as MΩ, or forgetting to convert kΩ | M = million, m = thousandth; volts ÷ kΩ = mA |
| Cell size | "a D cell gives more volts than an AA cell" | Both ≈ 1.5 V; size changes how long it lasts |

### Elimination

When you are unsure, cross out choices with the **wrong unit** or the **wrong direction** of change first. In a "what happens to the current" question, two choices usually go the wrong way; the answer is between the other two.`,
    },
    {
      id: 'eib6-mc',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯 Each question is built around one of the traps above.',
      exercise: {
        questions: [
          {
            question: 'In the formula $E = I \\times R$, what does $E$ stand for?',
            options: ['Voltage', 'Energy', 'Electrons', 'Efficiency'],
            correctAnswer: 0,
            explanation: '$E$ is electromotive force, another name for voltage. $E = IR$ is just Ohm\'s law written with a different letter.',
          },
          {
            question: 'Which of these wires is the thickest?',
            options: ['10-gauge', '12-gauge', '14-gauge', '18-gauge'],
            correctAnswer: 0,
            explanation: 'In the American Wire Gauge system, a smaller number means a thicker wire, so 10-gauge is the thickest choice.',
          },
          {
            question: 'A 6-V source is connected across a 2-kΩ resistor. What current flows?',
            options: ['3 mA', '3 A', '12 mA', '0.3 mA'],
            correctAnswer: 0,
            explanation: 'Volts ÷ kilohms = milliamps: 6 ÷ 2 = 3 mA (6 ÷ 2,000 Ω = 0.003 A). Answering 3 A forgets the kilo; 12 multiplies instead of dividing.',
          },
          {
            question: 'Which metal has the lowest electrical resistance?',
            options: ['Silver', 'Copper', 'Aluminum', 'Gold'],
            correctAnswer: 0,
            explanation: 'Silver is the best conductor. Copper is the most commonly used because it is nearly as good and much cheaper.',
          },
          {
            question: 'A student connects an ammeter directly across the terminals of a battery. What is the most likely result?',
            options: ['A very large current flows and may blow the meter\'s fuse', 'The meter reads the battery voltage in amps', 'No current flows because the meter blocks it', 'The meter reads the battery\'s internal resistance'],
            correctAnswer: 0,
            explanation: 'An ammeter has very low resistance. Placed across a source, it acts almost like a short, so a large current flows through it. Ammeters belong in series with a load.',
          },
        ],
      },
    },
    {
      id: 'eib6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Sanity-check the direction of change.** 🔽 Use $I = \\frac{V}{R}$.',
      exercise: {
        dropdowns: [
          { label: 'Resistance goes up, voltage unchanged. Current:', options: ['goes down', 'goes up', 'stays the same'], correctAnswer: 0 },
          { label: 'Voltage goes up, resistance unchanged. Current:', options: ['goes up', 'goes down', 'stays the same'], correctAnswer: 0 },
          { label: 'Voltage and resistance are both cut in half. Current:', options: ['stays the same', 'goes up', 'goes down'], correctAnswer: 0 },
        ],
        correctAnswers: ['goes down', 'goes up', 'stays the same'],
        hint1: 'Resistance is in the denominator.',
        hint2: 'Voltage is in the numerator.',
        hint3: 'Halving the top and the bottom of a fraction leaves its value unchanged.',
        explanation: 'Current is voltage divided by resistance: more resistance → less current; more voltage → more current; halving both leaves the ratio, and so the current, unchanged.',
      },
    },
    {
      id: 'eib6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- CAT EI: **15 questions, 10 minutes**, about 40 s each; spend 10–15 s on recall items to bank time for calculations
- No going back and no calculator; treat every question as scored and keep genuinely answering if time runs short
- Routine: name the unknown → cover it on the triangle → convert prefixes → sanity-check the direction
- Know the traps: $E$ = voltage, gauge runs backwards, silver is best but copper is most used, ammeter in series

> **Up Next:** Part 7 — a mixed mastery set at ASVAB difficulty.`,
    },
  ],
}
