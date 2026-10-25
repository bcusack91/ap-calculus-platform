const eico1MysteryFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="40" x2="130" y2="40"/><line x1="170" y1="40" x2="260" y2="40"/><line x1="260" y1="40" x2="260" y2="70"/><polyline points="260,70 252,75 268,85 252,95 268,105 252,115 268,125 260,130"/><line x1="260" y1="130" x2="260" y2="160"/><line x1="60" y1="160" x2="260" y2="160"/><line x1="60" y1="40" x2="60" y2="92"/><line x1="60" y1="104" x2="60" y2="160"/></g><g stroke="currentColor"><line x1="42" y1="92" x2="78" y2="92" stroke-width="2.5"/><line x1="51" y1="104" x2="69" y2="104" stroke-width="5"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2" fill="none"><rect x="130" y="32" width="40" height="16"/><line x1="130" y1="40" x2="170" y2="40"/></g><text x="86" y="96" font-size="14" fill="currentColor">+</text><text x="86" y="112" font-size="14" fill="currentColor">−</text><text x="150" y="70" font-size="12" fill="currentColor" text-anchor="middle">part X</text><text x="278" y="104" font-size="12" fill="currentColor">resistor</text></svg>',
  alt: 'A battery connected in a loop with a resistor. In the top wire, in series with everything, is part X: a small rectangle with the wire running straight through its middle.',
  caption: 'Figure 1. Part X is in series with the battery and the resistor.',
  size: 'md' as const,
}

export const asvabEiComponentsPart1Data = {
  topicSlug: 'asvab-ei-components',
  sections: [
    {
      id: 'eico1-intro',
      type: 'text' as const,
      content: `# 🔧 Components, Symbols and AC vs DC

**Part 1 of 7 — Components on the ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Components on the ASVAB** |
| 2 | Schematic symbols, switches and circuit protection |
| 3 | Resistors, capacitors and inductors |
| 4 | Diodes, transistors and transformers |
| 5 | AC vs DC, frequency and household wiring |
| 6 | Component test strategy and common traps |
| 7 | Mixed mastery set |

### What These Questions Look Like

Electronics Information has **15 questions in 10 minutes** on the CAT-ASVAB (about 40 seconds each). Many of them are quick identification questions:

- **"What does this component do?"** (A diode lets current flow in only one direction.)
- **"Which symbol is a ...?"** (a small schematic drawing with four choices)
- **"What is the unit of ...?"** (capacitance is measured in farads)
- **"What is AC?"** (alternating current: it reverses direction many times a second)

These are recall questions: you either know the part or you don't, so they are fast points once you learn the list below.

### The Component Cheat Sheet

| Component | What it does | Unit or key number |
|:---|:---|:---|
| **Resistor** | limits (opposes) current | ohms (Ω) |
| **Capacitor** | stores electric charge; blocks steady DC, passes AC | farads (F) |
| **Inductor** (coil) | stores energy in a magnetic field; opposes changes in current | henrys (H) |
| **Diode** | lets current flow in **one direction only** | |
| **Transistor** | **amplifies** a signal or works as an electronic **switch** | 3 leads |
| **Transformer** | **steps AC voltage up or down** | works on AC only |
| **Fuse** | melts to open the circuit when current is too high | amp rating |
| **Circuit breaker** | trips open on overcurrent; can be **reset** | amp rating |
| **Switch** | opens or closes a circuit by hand | |
| **Ground** | a connection to the earth (or the metal frame) for safety and as a reference point | |`,
    },
    {
      id: 'eico1-figure-mc',
      type: 'multiple-choice' as const,
      figure: eico1MysteryFigure,
      content: '**Warm-up.** 🎯 Part X in the figure uses one of the standard symbols for a protection device.',
      exercise: {
        questions: [
          {
            question: 'Part X is drawn as a small rectangle with the wire running through it, placed in series with everything. Which component is it?',
            options: ['A fuse', 'A capacitor', 'A diode', 'A transformer'],
            correctAnswer: 0,
            explanation: 'A rectangle with a line through it is a common fuse symbol, and a fuse always goes in series so it can open the whole path. A capacitor is two parallel plates, a diode is a triangle against a bar, and a transformer is two coils.',
          },
          {
            question: 'What happens to part X if the resistor is accidentally shorted and the current becomes very large?',
            options: ['It melts and opens the circuit', 'It stores the extra charge until the short clears', 'It steps the voltage down', 'It reverses the current'],
            correctAnswer: 0,
            explanation: 'A fuse contains a thin metal link that melts when the current exceeds its rating, opening the circuit before the wires overheat.',
          },
          {
            question: 'Which component lets current flow through it in only one direction?',
            options: ['A diode', 'A resistor', 'A fuse', 'An inductor'],
            correctAnswer: 0,
            explanation: 'A diode is a one-way valve for current. Resistors, fuses and inductors conduct in both directions.',
          },
        ],
      },
    },
    {
      id: 'eico1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the component to its job.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Steps AC voltage up or down:', options: ['transformer', 'potentiometer', 'diode', 'fuse'], correctAnswer: 0 },
          { label: 'Amplifies a weak signal:', options: ['transistor', 'potentiometer', 'fuse', 'ground'], correctAnswer: 0 },
          { label: 'Trips open on overcurrent and can be reset:', options: ['circuit breaker', 'fuse', 'electrolytic capacitor', 'inductor'], correctAnswer: 0 },
        ],
        correctAnswers: ['transformer', 'transistor', 'circuit breaker'],
        hint1: 'Trans-FORM-er changes the voltage.',
        hint2: 'Transistors amplify and switch.',
        hint3: 'A fuse must be replaced; a breaker resets.',
        explanation: 'Transformers change AC voltage, transistors amplify (or switch), and circuit breakers trip on overcurrent and can be reset, unlike fuses, which melt and must be replaced.',
      },
    },
    {
      id: 'eico1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Component questions are mostly **fast recall**: learn what each part does, its unit and its symbol
- **Resistor** limits current; **capacitor** stores charge; **inductor** opposes changes in current; **diode** is one-way; **transistor** amplifies or switches; **transformer** changes AC voltage
- **Fuses** melt and are replaced; **breakers** trip and are reset; both go **in series**

> **Up Next:** Part 2 — the schematic symbols, switches and protection devices you need to recognize on sight.`,
    },
  ],
}
