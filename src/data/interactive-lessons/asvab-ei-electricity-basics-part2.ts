const eib2FlowFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="40" x2="260" y2="40"/><line x1="260" y1="40" x2="260" y2="70"/><polyline points="260,70 252,75 268,85 252,95 268,105 252,115 268,125 260,130"/><line x1="260" y1="130" x2="260" y2="160"/><line x1="60" y1="160" x2="260" y2="160"/><line x1="60" y1="40" x2="60" y2="92"/><line x1="60" y1="104" x2="60" y2="160"/></g><g stroke="currentColor"><line x1="42" y1="92" x2="78" y2="92" stroke-width="2.5"/><line x1="51" y1="104" x2="69" y2="104" stroke-width="5"/></g><text x="86" y="96" font-size="14" fill="currentColor">+</text><text x="86" y="112" font-size="14" fill="currentColor">−</text><text x="278" y="104" font-size="12" fill="currentColor">resistor</text><g class="fig-accent" fill="currentColor"><polygon points="170,160 158,154 158,166"/><polygon points="260,140 254,152 266,152"/><polygon points="150,40 162,34 162,46"/></g><text x="160" y="182" font-size="11" fill="currentColor" text-anchor="middle">electron flow →</text><text x="160" y="28" font-size="11" fill="currentColor" text-anchor="middle">← electron flow</text></svg>',
  alt: 'A battery on the left connected by wires to a resistor (a zigzag line) on the right. The battery long plate, marked plus, is on top; the short plate, marked minus, is on the bottom. Arrows labeled electron flow point to the right along the bottom wire, up the right side toward the resistor, and to the left along the top wire, back toward the plus terminal.',
  caption: 'Figure 2. Arrows show the direction electrons move.',
  size: 'md' as const,
}

export const asvabEiElectricityBasicsPart2Data = {
  topicSlug: 'asvab-ei-electricity-basics',
  sections: [
    {
      id: 'eib2-intro',
      type: 'text' as const,
      content: `# ⚡ Current, Voltage, Resistance and Ohm's Law

**Part 2 of 7 — Charge, Current and Voltage**

### Where Electricity Comes From

Everything is made of **atoms**. An atom has a center (the nucleus) holding **protons**, which carry a **positive (+)** charge, and **neutrons**, which carry no charge. Around the nucleus move **electrons**, which carry a **negative (−)** charge.

- **Like charges repel** (two negatives push apart).
- **Opposite charges attract** (a negative is pulled toward a positive).

In a metal like copper, the outermost electron of each atom is held loosely. These **free electrons** can drift from atom to atom. When something pushes them all in the same direction, you have an electric current.

Electric **charge** is measured in **coulombs** (C). One coulomb is the charge of a huge number of electrons (about 6 billion billion), so you never count electrons one at a time.`,
    },
    {
      id: 'eib2-current-voltage',
      type: 'text' as const,
      content: `## Current: the Flow

**Current** is the rate at which charge flows past a point. Its unit, the **ampere** (amp, A), means **one coulomb per second**:

$$I = \\frac{Q}{t} \\qquad \\text{(current = charge} \\div \\text{time)}$$

**Example:** 20 coulombs pass a point in 4 seconds. The current is 20 ÷ 4 = **5 A**.

## Voltage: the Push

**Voltage** is the electrical "pressure" that pushes charge through a circuit. It is also called **potential difference** or **electromotive force (EMF)**, which is why some formulas write it as $E$ instead of $V$. Its unit is the **volt** (V).

A battery has a voltage between its two terminals. No voltage, no push, no current, even if the wires are connected.

### The water-pipe picture

| Water system | Electric circuit |
|:---|:---|
| Pump | Battery or generator (the source) |
| Water pressure | **Voltage** |
| Flow rate (gallons per minute) | **Current** |
| A narrow section of pipe | **Resistance** |
| Water wheel turned by the flow | Load (lamp, motor) |

More pressure pushes more water through the same pipe. In the same way, **more voltage pushes more current through the same resistance**.

## Batteries and Cells

A single **cell** produces a fixed voltage. A common AA, AAA, C or D flashlight cell gives about **1.5 V**, whatever its size (bigger cells last longer, they do not push harder). Stacking cells end to end, positive to negative, **adds their voltages**:

| Cells stacked end to end | Total voltage |
|:---:|:---:|
| 2 × 1.5 V | 3 V |
| 4 × 1.5 V | 6 V |
| 6 cells of about 2 V (a car battery) | about 12 V |

Batteries supply **direct current (DC)**: the charge always flows the same way around the circuit.`,
    },
    {
      id: 'eib2-direction',
      type: 'text' as const,
      content: `## Which Way Does It Flow?

Two conventions exist, and the ASVAB can ask about either one. Read the wording carefully.

| Name | Direction outside the battery | Why |
|:---|:---|:---|
| **Electron flow** | from the **negative (−)** terminal, around the circuit, to the **positive (+)** terminal | electrons are negative, so they are pushed away from − and pulled toward + |
| **Conventional current** | from **positive (+)** to **negative (−)** | the older rule, chosen before electrons were discovered; still used in most formulas and diagrams |

The two arrows point in **opposite** directions, but they describe the **same** current with the same size in amps.

### Worked examples

**1. Charge and time.** A wire carries 3 A for 10 seconds. How much charge passes? Rearrange $I = \\frac{Q}{t}$ to $Q = I \\times t = 3 \\times 10 = 30$ coulombs.

**2. Stacked cells.** A flashlight holds three 1.5-V cells end to end. Total voltage: 3 × 1.5 = **4.5 V**.

**3. Direction.** A question says "electrons flow through the lamp from left to right." The **conventional current** through the lamp is therefore right to left.`,
    },
    {
      id: 'eib2-figure-mc',
      type: 'multiple-choice' as const,
      figure: eib2FlowFigure,
      content: '**Follow the arrows.** 🎯',
      exercise: {
        questions: [
          {
            question: 'The arrows in the figure show electron flow. Which statement describes it correctly?',
            options: [
              'Electrons leave the negative terminal and return to the positive terminal',
              'Electrons leave the positive terminal and return to the negative terminal',
              'Electrons are used up in the resistor, so none return to the battery',
              'Electrons move only through the top wire of the circuit',
            ],
            correctAnswer: 0,
            explanation: 'The arrows start at the minus (short-plate) terminal, go along the bottom wire, up through the resistor and back along the top wire to the plus terminal. Electrons are not used up: the same charge goes all the way around the loop.',
          },
          {
            question: 'In the same circuit, which way does conventional current flow through the resistor?',
            options: [
              'Downward, from the top wire to the bottom wire',
              'Upward, from the bottom wire up to the top wire',
              'Both directions at once, cancelling out',
              'It does not flow through a resistor at all',
            ],
            correctAnswer: 0,
            explanation: 'Electrons move up through the resistor, and conventional current is defined in the opposite direction, so it moves down through the resistor: out of the plus terminal, along the top wire and down.',
          },
        ],
      },
    },
    {
      id: 'eib2-mc',
      type: 'multiple-choice' as const,
      content: '**Check the ideas.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which particle moves through a copper wire to carry an electric current?',
            options: ['The electron', 'The proton', 'The neutron', 'The nucleus'],
            correctAnswer: 0,
            explanation: 'Free electrons drift through a metal to carry current. Protons and neutrons are locked in the nucleus of each atom and do not travel along the wire.',
          },
          {
            question: 'Two objects both carry a negative charge. What happens when they are brought close together?',
            options: ['They push each other away', 'They pull toward each other', 'Nothing, since like charges do not interact', 'They swap their charges and become positive'],
            correctAnswer: 0,
            explanation: 'Like charges repel. Two negatives push apart; a negative and a positive would attract.',
          },
          {
            question: 'Electromotive force (EMF) is another name for which quantity?',
            options: ['Voltage', 'Current', 'Resistance', 'Charge'],
            correctAnswer: 0,
            explanation: 'EMF is the push a source provides, which is voltage. That is why some formulas use $E$ for voltage.',
          },
          {
            question: 'A D cell and an AA cell are both fresh. How do their voltages compare?',
            options: ['Both are about 1.5 V; the D cell just lasts longer', 'The D cell is about 6 V because it is larger', 'The AA cell is higher because it is smaller', 'The D cell is about 3 V and the AA cell is about 1.5 V'],
            correctAnswer: 0,
            explanation: 'Common flashlight cells of every size produce about 1.5 V. A larger cell stores more energy, so it lasts longer, but it does not push harder.',
          },
        ],
      },
    },
    {
      id: 'eib2-input',
      type: 'input-boxes' as const,
      content: `**Work it by hand.** ✍️

**1)** 36 coulombs of charge pass a point in 9 seconds. What is the current, in amperes? (number only)

**2)** A current of 2 A flows for 15 seconds. How many coulombs of charge pass? (number only)

**3)** A lantern holds eight 1.5-V cells stacked end to end. What is the total voltage, in volts? (number only)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '30', '12'],
        hint1: 'Current = charge ÷ time.',
        hint2: 'Charge = current × time.',
        hint3: 'Cells stacked end to end add their voltages.',
        explanation: '(1) 36 ÷ 9 = 4 A. (2) 2 × 15 = 30 coulombs. (3) 8 × 1.5 = 12 V.',
      },
    },
    {
      id: 'eib2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Complete the water-pipe comparison.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Water pressure in a pipe is like:', options: ['voltage', 'current', 'resistance', 'charge'], correctAnswer: 0 },
          { label: 'The flow rate of water is like:', options: ['current', 'voltage', 'resistance', 'power'], correctAnswer: 0 },
          { label: 'A narrow, clogged section of pipe is like:', options: ['resistance', 'voltage', 'current', 'a battery'], correctAnswer: 0 },
          { label: 'The pump that pushes the water is like:', options: ['a battery', 'a lamp', 'a resistor', 'a wire'], correctAnswer: 0 },
        ],
        correctAnswers: ['voltage', 'current', 'resistance', 'a battery'],
        hint1: 'Pressure is what pushes.',
        hint2: 'Flow is how much moves past a point each second.',
        hint3: 'A narrow pipe opposes the flow; the pump is the source.',
        explanation: 'Pressure ↔ voltage (the push), flow rate ↔ current (the flow), narrow pipe ↔ resistance (the opposition), pump ↔ battery (the source).',
      },
    },
    {
      id: 'eib2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Electrons are **negative**, protons **positive**; like charges repel, opposite charges attract
- **Current** = charge per second: $I = \\frac{Q}{t}$; 1 ampere = 1 coulomb per second
- **Voltage** (potential difference, EMF, $E$) is the push; no voltage, no current
- One flashlight cell ≈ **1.5 V** whatever its size; cells stacked end to end **add** their voltages; a car battery ≈ **12 V**
- **Electron flow** goes − to +; **conventional current** goes + to −

> **Up Next:** Part 3 — resistance, and why copper wire is wrapped in rubber.`,
    },
  ],
}
