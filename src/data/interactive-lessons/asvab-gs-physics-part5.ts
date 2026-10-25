const gspMagnetFigure = {
  svg: '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M 110 102 C 40 0, 280 0, 210 102"/><path d="M 110 106 C 70 40, 250 40, 210 106"/><path d="M 110 110 C 85 75, 235 75, 210 110"/><path d="M 110 128 C 40 230, 280 230, 210 128"/><path d="M 110 124 C 70 190, 250 190, 210 124"/><path d="M 110 120 C 85 155, 235 155, 210 120"/><line x1="110" y1="115" x2="20" y2="115"/><line x1="300" y1="115" x2="210" y2="115"/></g><g class="fig-muted" fill="currentColor"><polygon points="164,25.5 156,21.5 156,29.5"/><polygon points="164,56.5 156,52.5 156,60.5"/><polygon points="164,84.3 156,80.3 156,88.3"/><polygon points="164,204.5 156,200.5 156,208.5"/><polygon points="164,173.5 156,169.5 156,177.5"/><polygon points="164,145.8 156,141.8 156,149.8"/><polygon points="52,115 60,111 60,119"/><polygon points="252,115 260,111 260,119"/></g><g class="fig-accent-2"><rect x="110" y="100" width="50" height="30" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/></g><g class="fig-accent"><rect x="160" y="100" width="50" height="30" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/></g><text x="135" y="120" font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle">N</text><text x="185" y="120" font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle">S</text><circle cx="98" cy="94" r="3.5" fill="currentColor"/><text x="90" y="90" font-size="12" fill="currentColor" text-anchor="end">P</text><circle cx="290" cy="40" r="3.5" fill="currentColor"/><text x="298" y="36" font-size="12" fill="currentColor">Q</text></svg>',
  alt: 'A bar magnet lying horizontally, with its north pole (N) on the left half and its south pole (S) on the right half. Curved magnetic field lines loop from the N end over the top and under the bottom of the magnet to the S end; arrows on the loops point from the N side toward the S side. A straight line leaves the N end going left with an arrow pointing left, away from N, and a straight line comes in from the right into the S end with an arrow pointing left, toward S. The lines are crowded together near the two ends of the magnet and spread far apart away from it. Point P is just above the N end, where the lines are crowded. Point Q is far away in the upper right, where the lines are widely spaced.',
  caption: 'Figure 1. The magnetic field around a bar magnet.',
  size: 'md' as const,
}

export const asvabGsPhysicsPart5Data = {
  topicSlug: 'asvab-gs-physics',
  sections: [
    {
      id: 'gsp5-intro',
      type: 'text' as const,
      content: `# ⚡ Physics: Motion, Energy and Waves

**Part 5 of 7 — Electricity and Magnetism Basics**

### Electric Charge

All matter is made of atoms with **positive protons** and **negative electrons**. Normally the charges balance. Rub two materials together (a balloon on your hair, socks on carpet) and electrons move from one to the other: one object becomes **negative** (extra electrons), the other **positive** (missing electrons). That built-up charge is **static electricity**.

| Rule | Example |
|:---|:---|
| **Like charges repel** | Two balloons both rubbed on hair push apart |
| **Opposite charges attract** | A charged balloon sticks to a wall |
| A charge jumps when it builds up enough | A shock from a doorknob; **lightning** is a giant static discharge |

> **Key Fact:** Only **electrons** move when objects become charged. Protons stay locked in the nucleus.

### Conductors and Insulators

| Electrical **conductors** (charge flows easily) | Electrical **insulators** (charge does not flow) |
|:---|:---|
| Metals: **silver** (best), copper, gold, aluminum | Rubber, plastic, glass, dry wood |
| Salt water, the human body | Air (until lightning breaks through) |

That is why wires are copper on the inside and covered in plastic or rubber on the outside.

### Three words you need

| Quantity | What it is | Unit | Water-hose picture |
|:---|:---|:---|:---|
| **Current** ($I$) | The flow of charge | ampere (amp, A) | How much water flows |
| **Voltage** ($V$) | The push that drives the flow | volt (V) | The water pressure |
| **Resistance** ($R$) | Opposition to the flow | ohm (Ω) | A narrow, kinked hose |

They are linked by **Ohm's law**, $V = IR$. Working with circuits (series, parallel, power in a circuit) belongs to the Electronics Information subtest; for GS, know the three words, their units, and that a battery's **direct current (DC)** flows one way while wall outlets supply **alternating current (AC)**, which reverses direction many times a second.`
    },
    {
      id: 'gsp5-magnets',
      type: 'text' as const,
      content: `## Magnets

Every magnet has a **north pole** and a **south pole**. Cut a magnet in half and you get two smaller magnets, each with its own north and south.

| Rule | |
|:---|:---|
| **Like poles repel** | N pushes N away; S pushes S away |
| **Opposite poles attract** | N pulls S |
| **Field lines** | Run **out of the north pole and into the south pole** outside the magnet |
| **Strength** | Strongest at the poles, where the field lines are closest together |

**Magnetic materials.** Only a few metals are strongly attracted to magnets: **iron, nickel and cobalt** (and steel, which is mostly iron). Aluminum, copper, gold, wood and plastic are **not**. Memory hook: "**I** **N**eed **Co**ffee": **I**ron, **N**ickel, **Co**balt.

**Earth is a giant magnet.** A compass needle is a small magnet free to turn. Its north-seeking end points toward Earth's **geographic North Pole**, which means a **magnetic south pole** sits near there (opposites attract).

### Electricity and magnetism are linked

| Device | What happens | Energy change |
|:---|:---|:---|
| **Electromagnet** | Current through a coil of wire wrapped around an iron core makes a magnet that can be **switched off** | electrical → magnetic |
| **Electric motor** | Current in a magnetic field makes a coil **spin** | electrical → mechanical |
| **Generator** | Spinning a coil in a magnetic field **makes** current | mechanical → electrical |

An electromagnet gets **stronger** with more current, more turns of wire, or an iron core. Junkyard cranes use electromagnets so they can drop the load by switching off the current.

> **Key Fact:** Motor and generator are opposites. A **motor uses** electricity to make motion; a **generator uses** motion to make electricity.`
    },
    {
      id: 'gsp5-figure-mc',
      type: 'multiple-choice' as const,
      figure: gspMagnetFigure,
      content: '**Read the field.** 🧲 Use Figure 1.',
      exercise: {
        questions: [
          {
            question: 'At which point is the magnetic field stronger, and why?',
            options: ['At P, because the field lines are crowded there', 'At Q, because the field lines are spread out there', 'At Q, because it is farther from the north pole', 'It is equally strong at P and at Q'],
            correctAnswer: 0,
            explanation: 'Crowded field lines mean a strong field. P sits just off the north pole, where the lines bunch together; at Q they are far apart, so the field is weak.'
          },
          {
            question: 'A small compass is placed at the far right end of the line that enters the S pole. Which way does its north-seeking end point?',
            options: ['Left, toward the magnet\'s S pole', 'Right, away from the magnet', 'Straight up, across the line', 'Straight down, across the line'],
            correctAnswer: 0,
            explanation: 'A compass needle lines up with the field, and its north-seeking end points the way the arrows go. On that line the arrow points left, into the S pole; north is attracted to south.'
          }
        ]
      }
    },
    {
      id: 'gsp5-mc',
      type: 'multiple-choice' as const,
      content: '**Charges and magnets.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A magnet will pick up which of these objects?',
            options: ['An iron nail', 'An aluminum can', 'A copper penny', 'A gold ring'],
            correctAnswer: 0,
            explanation: 'Iron is magnetic. Aluminum, copper and gold are metals and good conductors, but magnets do not attract them.'
          },
          {
            question: 'After you rub a balloon on a wool sweater, the balloon has a negative charge. What happened?',
            options: ['Electrons moved from the wool to the balloon', 'Protons moved from the balloon to the wool', 'Electrons moved from the balloon to the wool', 'Neutrons moved from the wool to the balloon'],
            correctAnswer: 0,
            explanation: 'A negative charge means extra electrons, and only electrons move during charging. The balloon gained electrons from the wool, which is left positive.'
          },
          {
            question: 'A wind turbine\'s blades spin a coil inside a magnetic field to produce electricity. The turbine is acting as a:',
            options: ['generator', 'motor', 'transformer', 'battery'],
            correctAnswer: 0,
            explanation: 'Motion turned into electricity is a generator. A motor does the reverse, turning electricity into motion.'
          }
        ]
      }
    },
    {
      id: 'gsp5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Units and rules.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Electric current is measured in:',
            options: ['amperes', 'volts', 'ohms', 'watts'],
            correctAnswer: 0
          },
          {
            label: 'Two north poles brought close together will:',
            options: ['repel each other', 'attract each other', 'have no effect', 'lose magnetism'],
            correctAnswer: 0
          },
          {
            label: 'The best material for the outer covering of a wire is:',
            options: ['rubber', 'copper', 'silver', 'aluminum'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['amperes', 'repel each other', 'rubber'],
        hint1: 'Voltage is the push; current is the flow.',
        hint2: 'Like poles behave like like charges.',
        hint3: 'The covering must stop the current from escaping.',
        explanation: 'Current is measured in amperes (amps); volts measure voltage and ohms measure resistance. Like poles repel. A wire\'s covering must be an insulator such as rubber; copper, silver and aluminum are all conductors.'
      }
    },
    {
      id: 'gsp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Like charges repel, opposite charges attract; only electrons move when objects get charged; lightning is a static discharge
- Conductors: metals (silver best, copper common). Insulators: rubber, plastic, glass, dry wood
- Current = flow (amperes), voltage = push (volts), resistance = opposition (ohms); $V = IR$; DC flows one way, AC reverses
- Like poles repel, opposite poles attract; field lines run N → S outside the magnet and crowd together where the field is strong
- Magnetic metals: iron, nickel, cobalt ("I Need Coffee")
- A compass's north-seeking end points to geographic north; Earth acts like a giant magnet
- Electromagnet = current makes magnetism; motor = electricity → motion; generator = motion → electricity

> **Up Next:** Part 6 — how to work the physics questions fast and dodge the common traps.`
    }
  ]
};
