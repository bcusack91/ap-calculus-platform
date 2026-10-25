export const asvabEiComponentsPart6Data = {
  topicSlug: 'asvab-ei-components',
  sections: [
    {
      id: 'eico6-intro',
      type: 'text' as const,
      content: `# 🔧 Components, Symbols and AC vs DC

**Part 6 of 7 — Component Test Strategy and Common Traps**

### Timing

CAT-ASVAB EI: **15 questions, 10 minutes**, about **40 seconds** each (paper: 20 questions in 9 minutes). Component and symbol questions are pure recall, so aim for **10 to 15 seconds** each and save the extra time for circuit calculations.

Remember the CAT rules: you can't return to a question, you must answer to move on, and any question could be an unscored tryout, so treat each as scored. If time is short, keep answering genuinely; a burst of random answers at the end is penalized heavily.

### A recall routine

1. **Name what the part does** before you look at the choices (diode → one way).
2. **Check the unit** if the question asks for one (capacitor → farads).
3. **Picture the symbol** if one is shown: shape first, then details (triangle + bar = diode; which way is the triangle pointing?).
4. **Eliminate by job**: a choice that describes another part's job is wrong even if it sounds technical.

### Pairs the test likes to swap

| Pair | Tell them apart |
|:---|:---|
| Fuse vs circuit breaker | fuse **melts** (replace); breaker **trips** (reset) |
| Capacitor vs inductor | capacitor **blocks DC**, farads, plates; inductor **opposes changing current**, henrys, coil |
| Rectifier vs transformer | rectifier changes **AC → DC**; transformer changes **AC voltage** |
| Motor vs generator | motor: electrical → **motion**; generator: motion → **electricity** |
| Potentiometer vs rheostat | pot: 3 terminals, voltage divider; rheostat: 2 terminals, adjusts current |
| NPN vs PNP | arrow points **out** (NPN) or **in** (PNP) |
| Neutral vs ground | neutral (white) carries return current; ground (green/bare) carries current only during a fault |`,
    },
    {
      id: 'eico6-traps',
      type: 'text' as const,
      content: `## The Traps

| Trap | Wrong idea | Right idea |
|:---|:---|:---|
| Fuse upgrade | "Use a bigger fuse so it stops blowing" | always the **same rating**; a bigger fuse lets wires overheat |
| Transformers and DC | "A transformer can step up a battery's voltage" | transformers need **AC** (a changing field) |
| Step-up current | "Step-up transformers raise current too" | voltage up → current **down** |
| Diode direction | "Current flows into the bar" | conventional current flows **into the triangle, out through the bar** (anode → cathode) |
| Color code band 3 | reading the third band as a digit | band 3 is the **multiplier** (number of zeros) |
| Capacitors in parallel | combining like parallel resistors | capacitors in parallel **add** |
| Hz vs V | "U.S. power is 60 volts" | **120 V**, **60 Hz** |
| Wire crossings | "Crossing wires are always connected" | connected only where there is a **dot** |
| "Closed" switch | closed = off | **closed = ON** (complete path) |`,
    },
    {
      id: 'eico6-mc',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A technician wants to raise the 12-V output of a car battery to 120 V using only a transformer. Will this work?',
            options: ['No, because a transformer needs AC', 'Yes, with a 10-to-1 step-up ratio', 'Yes, if the primary has more turns', 'No, because 120 V is too high'],
            correctAnswer: 0,
            explanation: 'A battery supplies steady DC, which makes no changing magnetic field, so a transformer induces nothing. (Devices that do this first convert the DC to AC with an inverter.)',
          },
          {
            question: 'A resistor is marked brown, green, orange, gold. What is its value?',
            options: ['15,000 Ω', '153 Ω', '1,500 Ω', '150,000 Ω'],
            correctAnswer: 0,
            explanation: 'Brown = 1, green = 5, orange = three zeros: 15,000 Ω (15 kΩ). Reading orange as a third digit gives 153, which is the trap.',
          },
          {
            question: 'A step-up transformer doubles the voltage. What happens to the current on the secondary side compared with the primary (ignoring losses)?',
            options: ['It is about half', 'It is about double', 'It is the same', 'It is about four times as large'],
            correctAnswer: 0,
            explanation: 'Power in ≈ power out. If voltage doubles, current must be cut about in half to keep volts × amps the same.',
          },
          {
            question: 'Two 4-µF capacitors are connected in parallel. What is their total capacitance?',
            options: ['8 µF', '2 µF', '4 µF', '16 µF'],
            correctAnswer: 0,
            explanation: 'Capacitors in parallel add: 4 + 4 = 8 µF. The "half of one" rule (2 µF) is for resistors in parallel or capacitors in series.',
          },
          {
            question: 'Which wire in a U.S. home normally carries no current unless there is a fault?',
            options: ['The green or bare wire', 'The white neutral wire', 'The black hot wire', 'The red hot wire'],
            correctAnswer: 0,
            explanation: 'The ground wire is a safety path that carries current only during a fault. The neutral carries the normal return current, and the black and red wires are hot.',
          },
        ],
      },
    },
    {
      id: 'eico6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Swap check.** 🔽 Pick the part that matches each description.',
      exercise: {
        dropdowns: [
          { label: 'Changes AC into DC:', options: ['rectifier', 'transformer', 'inductor', 'relay'], correctAnswer: 0 },
          { label: 'Has 3 terminals and works as a volume control:', options: ['potentiometer', 'rheostat', 'thermistor', 'fuse'], correctAnswer: 0 },
          { label: 'Turns electrical energy into motion:', options: ['motor', 'generator', 'transformer', 'capacitor'], correctAnswer: 0 },
        ],
        correctAnswers: ['rectifier', 'potentiometer', 'motor'],
        hint1: 'Rectifiers use diodes.',
        hint2: 'A volume knob taps part of a voltage.',
        hint3: 'Generators go the other way.',
        explanation: 'A rectifier changes AC to DC; a potentiometer (3 terminals) divides voltage, as in a volume knob; a motor turns electricity into motion.',
      },
    },
    {
      id: 'eico6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Component items are fast recall: about **10–15 seconds** each, to bank time for calculations
- Name the job first, then check units and symbol shape, then eliminate choices that describe a different part
- Know the swapped pairs: fuse/breaker, capacitor/inductor, rectifier/transformer, motor/generator, pot/rheostat, NPN/PNP, neutral/ground
- Transformers need **AC**; voltage up means current down; same-rating fuses only; band 3 = zeros

> **Up Next:** Part 7 — a mixed mastery set.`,
    },
  ],
}
