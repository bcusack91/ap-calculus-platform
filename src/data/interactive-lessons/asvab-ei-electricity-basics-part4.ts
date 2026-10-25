const eib4TriangleFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="160,20 270,180 50,180" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="105" y1="110" x2="215" y2="110" stroke="currentColor" stroke-width="2"/><g class="fig-accent" fill="currentColor" font-size="30" font-weight="bold" text-anchor="middle"><text x="160" y="92">V</text><text x="125" y="160">I</text><text x="195" y="160">R</text></g><text x="160" y="160" font-size="20" fill="currentColor" text-anchor="middle">×</text></svg>',
  alt: 'The Ohm\'s law triangle. A triangle split by a horizontal line: V is in the top section. The bottom section is split by a vertical line into I on the left and R on the right, with a times sign between them.',
  caption: 'Figure 4. Cover the quantity you want: what is left shows how to find it.',
  size: 'sm' as const,
}

const eib4CircuitFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="40" x2="260" y2="40"/><line x1="260" y1="40" x2="260" y2="70"/><polyline points="260,70 252,75 268,85 252,95 268,105 252,115 268,125 260,130"/><line x1="260" y1="130" x2="260" y2="160"/><line x1="60" y1="160" x2="260" y2="160"/><line x1="60" y1="40" x2="60" y2="92"/><line x1="60" y1="104" x2="60" y2="160"/></g><g stroke="currentColor"><line x1="42" y1="92" x2="78" y2="92" stroke-width="2.5"/><line x1="51" y1="104" x2="69" y2="104" stroke-width="5"/></g><text x="86" y="96" font-size="14" fill="currentColor">+</text><text x="86" y="112" font-size="14" fill="currentColor">−</text><g class="fig-accent" fill="currentColor" font-size="14" font-weight="bold"><text x="10" y="104">24 V</text><text x="276" y="104">8 Ω</text></g></svg>',
  alt: 'A circuit with a 24-volt battery on the left connected by wires to a single 8-ohm resistor on the right.',
  caption: 'Figure 5. A 24-V battery and an 8-Ω resistor.',
  size: 'md' as const,
}

export const asvabEiElectricityBasicsPart4Data = {
  topicSlug: 'asvab-ei-electricity-basics',
  sections: [
    {
      id: 'eib4-intro',
      type: 'text' as const,
      content: `# ⚡ Current, Voltage, Resistance and Ohm's Law

**Part 4 of 7 — Ohm's Law**

### One Formula, Three Forms

**Ohm's law** says the voltage across a resistance equals the current through it times the resistance:

$$V = I \\times R$$

Rearranged, it gives all three quantities:

| To find | Formula | In words |
|:---|:---:|:---|
| Voltage | $V = I \\times R$ | amps × ohms = volts |
| Current | $I = \\frac{V}{R}$ | volts ÷ ohms = amps |
| Resistance | $R = \\frac{V}{I}$ | volts ÷ amps = ohms |

### The triangle trick

Draw the triangle in Figure 4 on your scratch paper at the start of EI. **Cover the letter you want to find**:

- Cover **V**: $I$ and $R$ sit side by side, so **multiply**: $V = I \\times R$
- Cover **I**: $V$ sits over $R$, so **divide**: $I = V \\div R$
- Cover **R**: $V$ sits over $I$, so **divide**: $R = V \\div I$

Some books write $E = I \\times R$ (with $E$ for EMF). It is the same law.`,
      figure: eib4TriangleFigure,
    },
    {
      id: 'eib4-worked',
      type: 'text' as const,
      content: `## Worked Examples

**1. Find the current.** A 12-V battery is connected across a 4-Ω resistor.
$I = \\frac{V}{R} = \\frac{12}{4} = 3$, so the current is **3 A**.

**2. Find the voltage.** A current of 2 A flows through a 6-Ω resistor.
$V = I \\times R = 2 \\times 6 = 12$, so the voltage across it is **12 V**.

**3. Find the resistance.** A heater draws 10 A from a 120-V outlet.
$R = \\frac{V}{I} = \\frac{120}{10} = 12$, so its resistance is **12 Ω**.

**4. Watch the prefixes.** A 9-V battery is connected across a 3-kΩ resistor (k = kilo = 1,000, so 3,000 Ω).
$I = \\frac{9}{3000} = 0.003$ A = **3 mA** (milliamps). Shortcut: volts ÷ kilohms = milliamps, so 9 ÷ 3 = 3 mA.

## Reasoning Without Numbers

Many EI questions ask **what happens** instead of asking for a number. Use $I = \\frac{V}{R}$:

| Change | Effect on current |
|:---|:---|
| Voltage doubles, resistance stays the same | current **doubles** |
| Resistance doubles, voltage stays the same | current is **cut in half** |
| Voltage and resistance both double | current **stays the same** |
| Resistance drops toward zero (a short) | current becomes **very large** |

> **Key Fact:** Current goes **up** with voltage and **down** with resistance. If your answer says more resistance gives more current, you have the formula upside down.`,
    },
    {
      id: 'eib4-figure-input',
      type: 'input-boxes' as const,
      figure: eib4CircuitFigure,
      content: `**Use the circuit above.** ✍️

**1)** What current flows through the resistor, in amperes? (number only)

**2)** The 8-Ω resistor is replaced with a 4-Ω resistor. What current flows now, in amperes? (number only)

**3)** With the original 8-Ω resistor back in place, the battery is replaced with a 12-V battery. What current flows, in amperes? (number only)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '6', '1.5'],
        hint1: 'Current = voltage ÷ resistance.',
        hint2: 'Halving the resistance doubles the current.',
        hint3: 'Halving the voltage halves the current.',
        explanation: '(1) 24 ÷ 8 = 3 A. (2) 24 ÷ 4 = 6 A. (3) 12 ÷ 8 = 1.5 A.',
      },
    },
    {
      id: 'eib4-input',
      type: 'input-boxes' as const,
      content: `**Pick the right form.** ✍️

**1)** A current of 5 A flows through a 20-Ω resistor. What is the voltage across it, in volts? (number only)

**2)** A lamp draws 0.5 A when connected to 6 V. What is its resistance, in ohms? (number only)

**3)** A 15-V source is connected across a 5-kΩ resistor. What is the current, in milliamps? (number only)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['100', '12', '3'],
        hint1: 'Voltage = current × resistance.',
        hint2: 'Resistance = voltage ÷ current. Dividing by 0.5 is the same as multiplying by 2.',
        hint3: 'Volts ÷ kilohms = milliamps.',
        explanation: '(1) 5 × 20 = 100 V. (2) 6 ÷ 0.5 = 12 Ω. (3) 15 ÷ 5 = 3 mA (15 V ÷ 5,000 Ω = 0.003 A).',
      },
    },
    {
      id: 'eib4-mc',
      type: 'multiple-choice' as const,
      content: '**Reason it out.** 🎯',
      exercise: {
        questions: [
          {
            question: 'The voltage across a resistor is tripled while its resistance stays the same. What happens to the current?',
            options: ['It triples', 'It drops to one third', 'It stays the same', 'It increases nine times'],
            correctAnswer: 0,
            explanation: 'With $I = \\frac{V}{R}$ and $R$ fixed, current is proportional to voltage: three times the voltage gives three times the current.',
          },
          {
            question: 'A circuit keeps the same voltage, but its resistance is doubled. What happens to the current?',
            options: ['It is cut in half', 'It doubles', 'It stays the same', 'It is cut to one fourth'],
            correctAnswer: 0,
            explanation: 'With the voltage fixed, current is inversely proportional to resistance: twice the resistance lets only half the current through.',
          },
          {
            question: 'Which equation is a correct form of Ohm\'s law?',
            options: ['$R = \\frac{V}{I}$', '$I = \\frac{R}{V}$', '$V = \\frac{I}{R}$', '$R = V \\times I$'],
            correctAnswer: 0,
            explanation: 'From $V = IR$, dividing both sides by $I$ gives $R = \\frac{V}{I}$. The other three put a quantity upside down or multiply where they should divide.',
          },
        ],
      },
    },
    {
      id: 'eib4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the operation.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'To find current from voltage and resistance:', options: ['divide volts by ohms', 'multiply volts by ohms', 'divide ohms by volts', 'add volts and ohms'], correctAnswer: 0 },
          { label: 'To find voltage from current and resistance:', options: ['multiply amps by ohms', 'divide amps by ohms', 'divide ohms by amps', 'add amps and ohms'], correctAnswer: 0 },
          { label: 'To find resistance from voltage and current:', options: ['divide volts by amps', 'multiply volts by amps', 'divide amps by volts', 'subtract amps from volts'], correctAnswer: 0 },
        ],
        correctAnswers: ['divide volts by ohms', 'multiply amps by ohms', 'divide volts by amps'],
        hint1: 'Use the triangle: V is on top.',
        hint2: 'When V is covered, I and R sit side by side: multiply.',
        hint3: 'When I or R is covered, V sits over the other one: divide.',
        explanation: '$I = V \\div R$, $V = I \\times R$, $R = V \\div I$.',
      },
    },
    {
      id: 'eib4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Ohm's law:** $V = I \\times R$, so $I = \\frac{V}{R}$ and $R = \\frac{V}{I}$ (also written $E = IR$)
- Draw the **V over I × R triangle** on your scratch paper and cover the unknown
- Current rises with voltage and falls with resistance
- Volts ÷ kilohms = **milliamps**; convert prefixes before you divide

> **Up Next:** Part 5 — how meters measure current, voltage and resistance, and the unit prefixes you need.`,
    },
  ],
}
