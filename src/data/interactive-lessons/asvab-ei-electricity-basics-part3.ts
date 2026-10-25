const eib3WiresFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-accent" stroke="currentColor" stroke-linecap="round"><line x1="90" y1="35" x2="290" y2="35" stroke-width="3"/><line x1="90" y1="80" x2="190" y2="80" stroke-width="3"/><line x1="90" y1="125" x2="290" y2="125" stroke-width="10"/><line x1="90" y1="170" x2="190" y2="170" stroke-width="10"/></g><text x="12" y="39" font-size="12" fill="currentColor">Wire 1</text><text x="12" y="84" font-size="12" fill="currentColor">Wire 2</text><text x="12" y="129" font-size="12" fill="currentColor">Wire 3</text><text x="12" y="174" font-size="12" fill="currentColor">Wire 4</text><text x="200" y="84" font-size="11" fill="currentColor">short, thin</text><text x="200" y="174" font-size="11" fill="currentColor">short, thick</text><text x="190" y="22" font-size="11" fill="currentColor" text-anchor="middle">long, thin</text><text x="190" y="110" font-size="11" fill="currentColor" text-anchor="middle">long, thick</text></svg>',
  alt: 'Four copper wires drawn as bars. Wire 1 is long and thin. Wire 2 is half as long and thin. Wire 3 is long and thick. Wire 4 is half as long and thick. All are copper at the same temperature.',
  caption: 'Figure 3. Four copper wires at the same temperature.',
  size: 'md' as const,
}

export const asvabEiElectricityBasicsPart3Data = {
  topicSlug: 'asvab-ei-electricity-basics',
  sections: [
    {
      id: 'eib3-intro',
      type: 'text' as const,
      content: `# ⚡ Current, Voltage, Resistance and Ohm's Law

**Part 3 of 7 — Resistance, Conductors and Insulators**

### Resistance

**Resistance** is the opposition a material gives to the flow of current. It is measured in **ohms**, written with the Greek letter omega, **Ω**. When charge is forced through a resistance, some electrical energy turns into **heat**. That is how a toaster, a space heater and an old-style light bulb filament work.

Every material falls into one of three groups:

| Group | Resistance | Examples | Used for |
|:---|:---|:---|:---|
| **Conductors** | very low | silver, copper, gold, aluminum, most metals | wires, connectors |
| **Insulators** | very high | rubber, glass, plastic, porcelain (ceramic), mica, dry wood, dry air | wire coatings, tool handles, power-line supports |
| **Semiconductors** | in between, and controllable | silicon, germanium | diodes, transistors, computer chips |

### The best conductors, in order

1. **Silver**: the lowest resistance of any common metal, but expensive
2. **Copper**: almost as good and far cheaper, so it is the **most commonly used** wire metal
3. **Gold**: does not corrode, so it coats connectors and contacts
4. **Aluminum**: lighter and cheaper, used in overhead power lines

> **Key Fact:** "Best conductor" = **silver**. "Most commonly used conductor in wiring" = **copper**. The ASVAB likes this distinction.

Pure water is actually a poor conductor, but real water (tap water, sweat, puddles) has dissolved minerals and conducts well enough to be **dangerous**. Treat any wet surface near electricity as a conductor.`,
    },
    {
      id: 'eib3-factors',
      type: 'text' as const,
      content: `## Four Things That Set a Wire's Resistance

| Factor | Effect | Water-pipe picture |
|:---|:---|:---|
| **Material** | silver < copper < aluminum < iron (in resistance) | a smooth pipe vs a rough one |
| **Length** | **longer → more** resistance (double the length, double the resistance) | a longer pipe has more drag |
| **Thickness** (cross-section) | **thicker → less** resistance (double the area, half the resistance) | a wide pipe carries more water |
| **Temperature** | for metals, **hotter → more** resistance | |

**Worked example 1.** A copper wire has a resistance of 6 Ω. A second copper wire is the same thickness but **three times as long**. Its resistance is 3 × 6 = **18 Ω**.

**Worked example 2.** A 10-Ω wire is replaced by one of the same material and length but with **twice the cross-sectional area**. The new resistance is 10 ÷ 2 = **5 Ω**.

## Wire Gauge

Wire thickness is labeled by **gauge**. In the American Wire Gauge (AWG) system the rule runs **backwards**:

- **Larger gauge number = thinner wire** = more resistance = less current it can carry safely
- **Smaller gauge number = thicker wire** = less resistance = more current

| Gauge | Typical use |
|:---:|:---|
| 22 | small electronics, hookup wire |
| 14 | household lighting circuits (15-amp) |
| 12 | household outlet circuits (20-amp) |
| 10 | water heaters, dryers (30-amp) |

A wire that is too thin for its current **overheats**, which can melt insulation and start a fire. That is why the circuit breaker on each circuit is matched to the wire size.

> **Key Fact:** 10-gauge wire is **thicker** than 14-gauge wire. If you remember only one thing about gauge, remember that the numbers run backwards.`,
    },
    {
      id: 'eib3-figure-mc',
      type: 'multiple-choice' as const,
      figure: eib3WiresFigure,
      content: '**Compare the wires.** 🎯 All four are copper at the same temperature.',
      exercise: {
        questions: [
          {
            question: 'Which wire in the figure has the LEAST resistance?',
            options: ['Wire 4, short and thick', 'Wire 1, long and thin', 'Wire 2, short and thin', 'Wire 3, long and thick'],
            correctAnswer: 0,
            explanation: 'Shorter means less resistance and thicker means less resistance, so the short, thick wire wins on both counts.',
          },
          {
            question: 'Which wire in the figure has the MOST resistance?',
            options: ['Wire 1, long and thin', 'Wire 4, short and thick', 'Wire 3, long and thick', 'Wire 2, short and thin'],
            correctAnswer: 0,
            explanation: 'Longer and thinner both raise resistance, so the long, thin wire has the most.',
          },
        ],
      },
    },
    {
      id: 'eib3-mc',
      type: 'multiple-choice' as const,
      content: '**Materials and gauge.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which metal is used most often for household and vehicle wiring?',
            options: ['Copper', 'Silver', 'Gold', 'Iron'],
            correctAnswer: 0,
            explanation: 'Copper conducts nearly as well as silver at a small fraction of the cost. Silver is the better conductor but too expensive for wiring; gold is used for corrosion-proof contacts; iron has much higher resistance.',
          },
          {
            question: 'Which of these materials is a semiconductor?',
            options: ['Silicon', 'Porcelain', 'Aluminum', 'Mica'],
            correctAnswer: 0,
            explanation: 'Silicon (like germanium) is a semiconductor: its resistance falls between conductors and insulators and can be controlled, which makes diodes and transistors possible. Porcelain and mica are insulators; aluminum is a conductor.',
          },
          {
            question: 'An electrician needs wire that can safely carry more current than 14-gauge wire. Which gauge should she choose?',
            options: ['12-gauge', '16-gauge', '18-gauge', '22-gauge'],
            correctAnswer: 0,
            explanation: 'A smaller gauge number means a thicker wire, which has less resistance and carries more current. 16, 18 and 22 gauge are all thinner than 14 gauge.',
          },
          {
            question: 'A metal wire gets hot while carrying current. What happens to its resistance?',
            options: ['It increases', 'It decreases', 'It drops to zero', 'It stays exactly the same'],
            correctAnswer: 0,
            explanation: 'For metals, resistance rises as temperature rises. The atoms vibrate more and get in the way of the moving electrons.',
          },
        ],
      },
    },
    {
      id: 'eib3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each material.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Rubber:', options: ['insulator', 'conductor', 'semiconductor'], correctAnswer: 0 },
          { label: 'Aluminum:', options: ['conductor', 'insulator', 'semiconductor'], correctAnswer: 0 },
          { label: 'Germanium:', options: ['semiconductor', 'conductor', 'insulator'], correctAnswer: 0 },
          { label: 'Glass:', options: ['insulator', 'conductor', 'semiconductor'], correctAnswer: 0 },
        ],
        correctAnswers: ['insulator', 'conductor', 'semiconductor', 'insulator'],
        hint1: 'Metals are conductors.',
        hint2: 'Silicon and germanium are the classic semiconductors.',
        hint3: 'Rubber and glass block current.',
        explanation: 'Rubber and glass are insulators, aluminum is a metal conductor, and germanium is a semiconductor.',
      },
    },
    {
      id: 'eib3-input',
      type: 'input-boxes' as const,
      content: `**Scale the resistance.** ✍️ Same material and temperature in each case.

**1)** A wire has 4 Ω of resistance. A wire of the same thickness but twice as long has how many ohms? (number only)

**2)** A wire has 12 Ω of resistance. A wire of the same length with three times the cross-sectional area has how many ohms? (number only)

**3)** A wire has 8 Ω of resistance. A wire half as long and twice the cross-sectional area has how many ohms? (number only)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '4', '2'],
        hint1: 'Resistance is proportional to length.',
        hint2: 'Resistance is inversely proportional to area: three times the area, one third the resistance.',
        hint3: 'Do both changes: half the length halves it, and double the area halves it again.',
        explanation: '(1) 2 × 4 = 8 Ω. (2) 12 ÷ 3 = 4 Ω. (3) Half the length: 8 → 4 Ω; double the area: 4 → 2 Ω.',
      },
    },
    {
      id: 'eib3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Resistance (Ω) opposes current and turns electrical energy into **heat**
- **Conductors**: silver (best), copper (most used), gold (no corrosion), aluminum (light). **Insulators**: rubber, glass, plastic, porcelain, mica, dry wood. **Semiconductors**: silicon, germanium
- **Longer** wire → more resistance; **thicker** wire → less; **hotter** metal → more
- Wire gauge runs backwards: **bigger number = thinner wire** = less current capacity

> **Up Next:** Part 4 — Ohm's law, the one formula that ties current, voltage and resistance together.`,
    },
  ],
}
