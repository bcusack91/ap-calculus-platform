const eib1CircuitFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="40" x2="260" y2="40"/><line x1="260" y1="40" x2="260" y2="84"/><line x1="260" y1="116" x2="260" y2="160"/><line x1="60" y1="160" x2="260" y2="160"/><line x1="60" y1="40" x2="60" y2="92"/><line x1="60" y1="104" x2="60" y2="160"/></g><g stroke="currentColor"><line x1="42" y1="92" x2="78" y2="92" stroke-width="2.5"/><line x1="51" y1="104" x2="69" y2="104" stroke-width="5"/></g><g class="fig-accent"><circle cx="260" cy="100" r="16" fill="none" stroke="currentColor" stroke-width="2"/><line x1="249" y1="89" x2="271" y2="111" stroke="currentColor" stroke-width="2"/><line x1="271" y1="89" x2="249" y2="111" stroke="currentColor" stroke-width="2"/></g><text x="86" y="96" font-size="14" fill="currentColor">+</text><text x="86" y="112" font-size="14" fill="currentColor">−</text><text x="12" y="102" font-size="12" fill="currentColor">12 V</text><text x="12" y="116" font-size="11" fill="currentColor">battery</text><text x="282" y="104" font-size="12" fill="currentColor">lamp</text><text x="160" y="30" font-size="11" fill="currentColor" text-anchor="middle">wire</text></svg>',
  alt: 'A simple circuit drawn as a rectangle of wire. On the left side is a battery symbol labeled 12 V: a long thin line marked plus above a short thick line marked minus. On the right side is a lamp, drawn as a circle with an X inside. Wires connect the top of the battery to the top of the lamp and the bottom of the battery to the bottom of the lamp.',
  caption: 'Figure 1. A battery connected to a lamp.',
  size: 'md' as const,
}

export const asvabEiElectricityBasicsPart1Data = {
  topicSlug: 'asvab-ei-electricity-basics',
  sections: [
    {
      id: 'eib1-intro',
      type: 'text' as const,
      content: `# ⚡ Current, Voltage, Resistance and Ohm's Law

**Part 1 of 7 — Electricity on the ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Electricity on the ASVAB** |
| 2 | Charge, current and voltage |
| 3 | Resistance, conductors and insulators |
| 4 | Ohm's law |
| 5 | Measuring electricity: meters and units |
| 6 | EI test strategy and common traps |
| 7 | Mixed mastery set |

### What Electronics Information (EI) Is

Electronics Information is the **6th subtest** on the computer-adaptive CAT-ASVAB, right after Mathematics Knowledge. You get **15 scored questions in 10 minutes**, which works out to about **40 seconds per question**. Every question has **4 answer choices**.

You do not need to be an electrician. EI asks about a small set of ideas that come up again and again:

- the three basic quantities: **current, voltage and resistance**
- **Ohm's law**, with numbers simple enough to work by hand (no calculator is allowed)
- which materials **conduct** electricity and which **insulate**
- how **meters** measure a circuit
- series and parallel **circuits**, **components** and their **symbols**, and **AC vs DC** (the other two EI topics in this course)

> **Key Fact:** EI is **not** part of your AFQT score (that comes from Arithmetic Reasoning, Mathematics Knowledge, Word Knowledge and Paragraph Comprehension). EI matters for **job line scores**: for example the Air Force Electronics score (E = GS + AR + MK + EI), the Navy and Marine Corps Electronics score (EL = GS + AR + MK + EI), and the Marine Corps Mechanical Maintenance score (MM = AR + MC + EI + AS). In the Army, EI is one of the subtests that matter most for the Electronics, General Maintenance, Mechanical Maintenance and Surveillance and Communications scores. Ask your recruiter which line scores your target job needs.

If you take the paper version at a test site, EI has 20 questions in 9 minutes. The high-school CEP computer version has 16 EI questions. The content is the same.`,
    },
    {
      id: 'eib1-big-three',
      type: 'text' as const,
      content: `## The Big Three

Almost every EI question in this topic is about one of three quantities. Learn the name, the letter and the unit of each one.

| Quantity | Letter in formulas | Unit | Unit symbol | Think of it as |
|:---|:---:|:---|:---:|:---|
| **Current** | $I$ | ampere (amp) | A | how much electric charge **flows** past a point each second |
| **Voltage** | $V$ (sometimes $E$) | volt | V | the electrical **push** that drives the charge |
| **Resistance** | $R$ | ohm | Ω | how strongly something **opposes** the flow |

Two more words you will see:

- A **circuit** is a complete loop that charge can travel around: a source (like a battery), wires, and a **load** (something that uses the energy, like a lamp or motor).
- A **conductor** lets charge flow easily (copper wire); an **insulator** blocks it (the rubber or plastic coating on the wire).

> **Key Fact:** The letter $I$ stands for current (from the French *intensité*), not "C" for current. Lock it in now: **$I$ = current, in amps.**

These three quantities are tied together by **Ohm's law**, $V = IR$, which you will master in Part 4.`,
    },
    {
      id: 'eib1-warmup-figure',
      type: 'multiple-choice' as const,
      figure: eib1CircuitFigure,
      content: '**Warm-up: read the circuit.** 🎯 These are the kinds of quick questions EI opens with.',
      exercise: {
        questions: [
          {
            question: 'In the circuit shown, which part supplies the voltage that pushes charge around the loop?',
            options: ['The battery', 'The lamp', 'The top wire', 'The bottom wire'],
            correctAnswer: 0,
            explanation: 'The battery is the source: it provides the voltage (the push). The lamp is the load that uses the energy, and the wires only carry the charge between them.',
          },
          {
            question: 'What unit is used to measure electrical resistance?',
            options: ['The ohm', 'The coulomb', 'The volt', 'The watt'],
            correctAnswer: 0,
            explanation: 'Resistance is measured in ohms (symbol Ω). Coulombs measure electric charge, volts measure voltage, and watts measure power.',
          },
          {
            question: 'Which quantity describes how much charge flows past a point in the circuit each second?',
            options: ['Current', 'Voltage', 'Resistance', 'Insulation'],
            correctAnswer: 0,
            explanation: 'Current is the rate at which charge flows, measured in amperes. Voltage is the push that causes the flow, and resistance is the opposition to it.',
          },
        ],
      },
    },
    {
      id: 'eib1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match each quantity to its unit.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Current is measured in:', options: ['amperes (A)', 'volts (V)', 'ohms (Ω)', 'watts (W)'], correctAnswer: 0 },
          { label: 'Voltage is measured in:', options: ['volts (V)', 'amperes (A)', 'ohms (Ω)', 'hertz (Hz)'], correctAnswer: 0 },
          { label: 'The letter used for current in formulas is:', options: ['$I$', '$C$', '$A$', '$R$'], correctAnswer: 0 },
        ],
        correctAnswers: ['amperes (A)', 'volts (V)', '$I$'],
        hint1: 'Current is named after André-Marie Ampère.',
        hint2: 'Voltage is named after Alessandro Volta.',
        hint3: 'The current letter comes from the French word *intensité*.',
        explanation: 'Current is in amperes (A), voltage in volts (V), and resistance in ohms (Ω). In formulas, current is written $I$, voltage $V$ (or $E$), and resistance $R$.',
      },
    },
    {
      id: 'eib1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- EI is the 6th CAT-ASVAB subtest: **15 questions in 10 minutes**, about 40 seconds each
- EI is not in the AFQT, but it feeds **electronics and mechanical line scores** in every branch
- **Current** ($I$, amperes) is the flow; **voltage** ($V$ or $E$, volts) is the push; **resistance** ($R$, ohms, Ω) is the opposition
- A **circuit** is a complete loop: source → wire → load → back to the source

> **Up Next:** Part 2 — what electric charge is, and how current and voltage really work.`,
    },
  ],
}
