const eic1SwitchFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="40" x2="130" y2="40"/><line x1="170" y1="40" x2="260" y2="40"/><line x1="260" y1="40" x2="260" y2="84"/><line x1="260" y1="116" x2="260" y2="160"/><line x1="60" y1="160" x2="260" y2="160"/><line x1="60" y1="40" x2="60" y2="92"/><line x1="60" y1="104" x2="60" y2="160"/></g><g stroke="currentColor"><line x1="42" y1="92" x2="78" y2="92" stroke-width="2.5"/><line x1="51" y1="104" x2="69" y2="104" stroke-width="5"/></g><g class="fig-accent-2" stroke="currentColor" stroke-width="2.5"><line x1="130" y1="40" x2="166" y2="18"/></g><g fill="currentColor"><circle cx="130" cy="40" r="3.5"/><circle cx="170" cy="40" r="3.5"/></g><g class="fig-accent"><circle cx="260" cy="100" r="16" fill="none" stroke="currentColor" stroke-width="2"/><line x1="249" y1="89" x2="271" y2="111" stroke="currentColor" stroke-width="2"/><line x1="271" y1="89" x2="249" y2="111" stroke="currentColor" stroke-width="2"/></g><text x="86" y="96" font-size="14" fill="currentColor">+</text><text x="86" y="112" font-size="14" fill="currentColor">−</text><text x="8" y="82" font-size="12" fill="currentColor">battery</text><text x="282" y="104" font-size="12" fill="currentColor">lamp</text><text x="150" y="66" font-size="12" fill="currentColor" text-anchor="middle">switch (open)</text></svg>',
  alt: 'A battery connected in a loop to a lamp. In the top wire is a switch drawn as a short line hinged at one contact and tilted up, away from the second contact, so there is a gap in the wire. The switch is labeled open.',
  caption: 'Figure 1. A battery, an open switch and a lamp.',
  size: 'md' as const,
}

export const asvabEiCircuitsPart1Data = {
  topicSlug: 'asvab-ei-circuits',
  sections: [
    {
      id: 'eic1-intro',
      type: 'text' as const,
      content: `# 🔌 Series and Parallel Circuits and Power

**Part 1 of 7 — Circuits on the ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Circuits on the ASVAB** |
| 2 | Series circuits |
| 3 | Parallel circuits |
| 4 | Combination circuits and circuit faults |
| 5 | Electrical power and energy |
| 6 | Circuit test strategy and common traps |
| 7 | Mixed mastery set |

### Why Circuits Matter on EI

Electronics Information gives you **15 questions in 10 minutes** on the CAT-ASVAB (about 40 seconds each). Circuit questions are some of the most common: a small diagram of a battery, some resistors or bulbs, maybe a switch, and a question like "what is the current?" or "which bulbs stay lit?" The numbers are always simple enough to do without a calculator.

You will use **Ohm's law** constantly in this topic:

$$V = I \\times R \\qquad I = \\frac{V}{R} \\qquad R = \\frac{V}{I}$$

(If that is new, work through the topic *Current, Voltage, Resistance and Ohm's Law* first.)

### The Parts of Every Circuit

| Part | Job | Examples |
|:---|:---|:---|
| **Source** | supplies the voltage (the push) | battery, generator, wall outlet |
| **Load** | uses the electrical energy | lamp, motor, heater, resistor |
| **Conductors** | carry current between source and load | copper wires |
| **Control** | opens or closes the path | switch |
| **Protection** | opens the path if the current gets dangerously high | fuse, circuit breaker |`,
    },
    {
      id: 'eic1-states',
      type: 'text' as const,
      content: `## Open, Closed and Short

Current flows only around a **complete loop** from one terminal of the source, through the load, and back to the other terminal.

| Condition | What it means | Current |
|:---|:---|:---|
| **Closed circuit** | the loop is complete (switch ON) | flows normally |
| **Open circuit** | the loop is broken somewhere: a switch turned OFF, a cut wire, a burned-out bulb, a blown fuse | **zero**: nothing flows anywhere in that loop |
| **Short circuit** | current finds a path that **bypasses the load** with almost no resistance | **very large**: wires heat up, and the fuse or breaker should open |

> **Key Fact:** "Closed" sounds like "shut off," but in electricity a **closed** switch is **ON** (the path is complete) and an **open** switch is **OFF** (there is a gap).

### Reading a Simple Schematic

Electricians draw circuits with **symbols**, not pictures. You need only a few for now:

| Symbol | Part |
|:---|:---|
| a long line beside a short, thick line | battery (the long line is **+**) |
| a zigzag line | resistor |
| a circle with an X inside | lamp (bulb) |
| a short line hinged at one point, tilted away from the other contact | open switch |
| plain lines | wires (they have almost no resistance) |`,
    },
    {
      id: 'eic1-figure-mc',
      type: 'multiple-choice' as const,
      figure: eic1SwitchFigure,
      content: '**Warm-up: read the diagram.** 🎯',
      exercise: {
        questions: [
          {
            question: 'In the circuit shown, the switch is open. What is the lamp doing?',
            options: ['It is off, because the loop is broken at the open switch', 'It is lit, because the battery is still connected to it', 'It is dimly lit, because a little current jumps the gap', 'It is off, because the battery is connected backwards'],
            correctAnswer: 0,
            explanation: 'An open switch leaves a gap in the only path, so no current flows anywhere in the loop and the lamp stays off. A small gap in a low-voltage circuit is not jumped by current, and the battery direction does not matter for a lamp.',
          },
          {
            question: 'When the switch in the figure is closed, which part is the load?',
            options: ['The lamp', 'The battery', 'The switch', 'A wire'],
            correctAnswer: 0,
            explanation: 'The load is the part that uses the energy, here the lamp. The battery is the source, the switch is the control, and the wire is a conductor.',
          },
          {
            question: 'A wire accidentally connects the two ends of the lamp together while the switch is closed. What has been created?',
            options: ['A short circuit', 'An open circuit', 'A series circuit with two lamps', 'A safer circuit with less current'],
            correctAnswer: 0,
            explanation: 'The wire gives current a nearly zero-resistance path around the lamp: a short circuit. The lamp goes out, and a very large current flows from the battery.',
          },
        ],
      },
    },
    {
      id: 'eic1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name the condition.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'A flashlight with its switch turned ON and the bulb glowing is a:', options: ['closed circuit', 'open circuit', 'short circuit'], correctAnswer: 0 },
          { label: 'A lamp cord with a wire cut all the way through is a:', options: ['open circuit', 'closed circuit', 'short circuit'], correctAnswer: 0 },
          { label: 'Bare wires touching each other before reaching the lamp make a:', options: ['short circuit', 'open circuit', 'closed circuit'], correctAnswer: 0 },
        ],
        correctAnswers: ['closed circuit', 'open circuit', 'short circuit'],
        hint1: 'Closed = complete path.',
        hint2: 'Open = a break in the path.',
        hint3: 'Short = a path that skips the load.',
        explanation: 'A working circuit is closed; a break makes it open; a low-resistance path around the load is a short.',
      },
    },
    {
      id: 'eic1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Every circuit has a **source**, a **load** and **conductors**; most also have a **control** (switch) and **protection** (fuse or breaker)
- Current flows only around a **complete loop**
- **Closed** = complete = ON; **open** = broken = OFF, zero current; **short** = bypasses the load, very high current
- Ohm's law ($V = IR$) is the main tool in this topic

> **Up Next:** Part 2 — series circuits, where everything sits on one path.`,
    },
  ],
}
