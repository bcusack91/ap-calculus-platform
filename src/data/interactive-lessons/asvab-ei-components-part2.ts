const SVG_OPEN = '<svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">'
const label = (t: string) => `<text x="80" y="94" font-size="12" fill="currentColor" text-anchor="middle">${t}</text>`

const SYM = {
  resistor: '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="15" y1="45" x2="50" y2="45"/><polyline points="50,45 55,35 65,55 75,35 85,55 95,35 105,55 110,45"/><line x1="110" y1="45" x2="145" y2="45"/></g>',
  battery: '<g stroke="currentColor" fill="none"><line x1="15" y1="45" x2="62" y2="45" stroke-width="2"/><line x1="62" y1="25" x2="62" y2="65" stroke-width="2.5"/><line x1="72" y1="35" x2="72" y2="55" stroke-width="5"/><line x1="84" y1="25" x2="84" y2="65" stroke-width="2.5"/><line x1="94" y1="35" x2="94" y2="55" stroke-width="5"/><line x1="94" y1="45" x2="145" y2="45" stroke-width="2"/></g><text x="52" y="24" font-size="13" fill="currentColor">+</text>',
  switchOpen: '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="15" y1="45" x2="55" y2="45"/><line x1="55" y1="45" x2="98" y2="22"/><line x1="105" y1="45" x2="145" y2="45"/></g><circle cx="55" cy="45" r="3.5" fill="currentColor"/><circle cx="105" cy="45" r="3.5" fill="currentColor"/>',
  fuse: '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="15" y1="45" x2="145" y2="45"/><rect x="50" y="35" width="60" height="20"/></g>',
  breaker: '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="15" y1="45" x2="51" y2="45"/><path d="M 55 42 Q 80 10 105 42"/><line x1="109" y1="45" x2="145" y2="45"/><circle cx="55" cy="45" r="3.5"/><circle cx="105" cy="45" r="3.5"/></g>',
  ground: '<g stroke="currentColor" stroke-width="2.5"><line x1="80" y1="8" x2="80" y2="45"/><line x1="55" y1="45" x2="105" y2="45"/><line x1="63" y1="56" x2="97" y2="56"/><line x1="72" y1="67" x2="88" y2="67"/></g>',
  lamp: '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="15" y1="45" x2="62" y2="45"/><circle cx="80" cy="45" r="18"/><line x1="67" y1="32" x2="93" y2="58"/><line x1="93" y1="32" x2="67" y2="58"/><line x1="98" y1="45" x2="145" y2="45"/></g>',
  motor: '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="15" y1="45" x2="60" y2="45"/><circle cx="80" cy="45" r="20"/><line x1="100" y1="45" x2="145" y2="45"/></g><text x="80" y="51" font-size="17" font-weight="bold" fill="currentColor" text-anchor="middle">M</text>',
}

const panel = (body: string, name: string, alt: string) => ({
  svg: `${SVG_OPEN}${body}${label(name)}</svg>`,
  alt,
  size: 'sm' as const,
})

const eico2Gallery = [
  panel(SYM.battery, 'battery (+ is the long line)', 'Battery symbol: alternating long thin lines and short thick lines across the wire; the long line is the positive terminal.'),
  panel(SYM.resistor, 'resistor', 'Resistor symbol: a zigzag line in the wire.'),
  panel(SYM.switchOpen, 'switch (open)', 'Open switch symbol: a short line hinged at one contact dot and tilted away from the second contact dot.'),
  panel(SYM.lamp, 'lamp', 'Lamp symbol: a circle with an X inside it, in the wire.'),
  panel(SYM.fuse, 'fuse', 'Fuse symbol: a small rectangle with the wire running straight through it.'),
  panel(SYM.breaker, 'circuit breaker', 'Circuit breaker symbol: two small open-circle contacts joined by a curved arc above the wire.'),
  panel(SYM.ground, 'ground', 'Ground symbol: a vertical line ending in three horizontal lines that get shorter toward the bottom.'),
  panel(SYM.motor, 'motor', 'Motor symbol: a circle with the letter M inside, in the wire.'),
]

const eico2IdFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">'
    + `<g>${SYM.ground}</g>`
    + `<g transform="translate(160,0)">${SYM.switchOpen}</g>`
    + `<g transform="translate(0,100)">${SYM.breaker}</g>`
    + `<g transform="translate(160,100)">${SYM.lamp}</g>`
    + '<g class="fig-accent" fill="currentColor" font-size="14" font-weight="bold"><text x="6" y="18">1</text><text x="166" y="18">2</text><text x="6" y="118">3</text><text x="166" y="118">4</text></g>'
    + '<line x1="160" y1="5" x2="160" y2="195" class="fig-muted" stroke="currentColor" stroke-dasharray="3 3"/><line x1="5" y1="100" x2="315" y2="100" class="fig-muted" stroke="currentColor" stroke-dasharray="3 3"/>'
    + '</svg>',
  alt: 'Four numbered schematic symbols. Symbol 1: a vertical line ending in three horizontal lines that get shorter toward the bottom. Symbol 2: a short line hinged at one contact dot and tilted up away from a second contact dot. Symbol 3: two small open-circle contacts joined by a curved arc above the wire. Symbol 4: a circle with an X inside it.',
  caption: 'Figure 2. Four numbered symbols.',
  size: 'md' as const,
}

const eico2JunctionFigure = {
  svg: '<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2"><line x1="20" y1="70" x2="140" y2="70"/><line x1="80" y1="15" x2="80" y2="125"/><line x1="180" y1="70" x2="300" y2="70"/><line x1="240" y1="15" x2="240" y2="125"/></g><circle cx="240" cy="70" r="5" fill="currentColor"/><text x="80" y="150" font-size="12" fill="currentColor" text-anchor="middle">Drawing A: no dot</text><text x="240" y="150" font-size="12" fill="currentColor" text-anchor="middle">Drawing B: dot</text></svg>',
  alt: 'Two drawings of a horizontal wire and a vertical wire crossing. Drawing A has no dot where they cross. Drawing B has a solid dot at the crossing point.',
  caption: 'Figure 3. Two ways wires can meet on a schematic.',
  size: 'md' as const,
}

export const asvabEiComponentsPart2Data = {
  topicSlug: 'asvab-ei-components',
  sections: [
    {
      id: 'eico2-intro',
      type: 'text' as const,
      content: `# 🔧 Components, Symbols and AC vs DC

**Part 2 of 7 — Schematic Symbols, Switches and Circuit Protection**

### Why Symbols

A **schematic** is a wiring map drawn with standard symbols instead of pictures. Anyone trained in electronics can read one, and the ASVAB expects you to recognize the common symbols at a glance.

The gallery on the next screen shows the symbols for this part. Study the **shape** of each one: on the test, the label will not be there.

| Symbol shape | Component | Memory hook |
|:---|:---|:---|
| long and short parallel lines | **battery** (a single pair is one **cell**) | long line = **+** |
| zigzag | **resistor** | the path is made "harder" to travel |
| hinged line with a gap | **switch** | a gate that swings open |
| circle with an X | **lamp** | the X is the glowing filament |
| rectangle with the wire through it (or a small S-curve) | **fuse** | a thin link inside a holder |
| arc between two small circles | **circuit breaker** | a contact that can spring open |
| line ending in three shrinking bars | **ground** | the lines "sink into" the earth |
| circle with an M | **motor** | M for motor |`,
    },
    {
      id: 'eico2-gallery',
      type: 'figure' as const,
      figure: eico2Gallery,
      content: 'The eight symbols of Part 2. Cover the labels with your hand and name each one.',
    },
    {
      id: 'eico2-id-mc',
      type: 'multiple-choice' as const,
      figure: eico2IdFigure,
      content: '**Name that symbol.** 🎯 Use Figure 2.',
      exercise: {
        questions: [
          {
            question: 'Which numbered symbol represents a ground connection?',
            options: ['Symbol 1', 'Symbol 2', 'Symbol 3', 'Symbol 4'],
            correctAnswer: 0,
            explanation: 'Ground is a line ending in three horizontal bars that get shorter. Symbol 2 is an open switch, Symbol 3 is a circuit breaker, and Symbol 4 is a lamp.',
          },
          {
            question: 'Which numbered symbol represents a device that opens on overcurrent and can then be reset?',
            options: ['Symbol 3', 'Symbol 1', 'Symbol 2', 'Symbol 4'],
            correctAnswer: 0,
            explanation: 'A circuit breaker (the arc between two small circles) trips open on overcurrent and is reset by hand. A switch (Symbol 2) is opened deliberately, not by overcurrent.',
          },
          {
            question: 'What does Symbol 4 represent?',
            options: ['A lamp', 'A motor', 'A fuse', 'A resistor'],
            correctAnswer: 0,
            explanation: 'A circle with an X inside is a lamp. A motor is a circle with an M, a fuse is a rectangle with the wire through it, and a resistor is a zigzag.',
          },
        ],
      },
    },
    {
      id: 'eico2-switches',
      type: 'text' as const,
      content: `## Switches and Relays

A switch opens (OFF) or closes (ON) a circuit. Switches are named by **poles** (how many separate circuits they control) and **throws** (how many positions connect).

| Name | What it does | Everyday example |
|:---|:---|:---|
| **SPST** (single-pole, single-throw) | simple ON/OFF for one circuit | a basic light switch |
| **SPDT** (single-pole, double-throw) | sends one input to **either** of two outputs | a three-way switch at each end of a hallway |
| **DPDT** (double-pole, double-throw) | two SPDT switches moving together | reversing the direction of a DC motor |
| **Push-button, normally open (NO)** | closes only while pressed | a doorbell button |
| **Push-button, normally closed (NC)** | opens only while pressed | a refrigerator door light switch |

A **relay** is a switch flipped by an **electromagnet**. A small current through the relay's coil pulls its contacts closed, letting a low-power circuit switch a high-power one (a car's tiny starter-button circuit controlling the big starter current, for example).

## Protection: Fuses, Breakers and Ground

| Device | How it protects | After it acts |
|:---|:---|:---|
| **Fuse** | a thin metal link **melts** when current goes over its rating | it must be **replaced**, always with one of the **same amp rating** |
| **Circuit breaker** | a switch that **trips open** on overcurrent (heat or magnetic action) | it is **reset** |
| **Ground** | gives stray current a safe, low-resistance path to the earth, so a fault trips the breaker instead of shocking someone | |
| **GFCI** (ground-fault circuit interrupter) | senses current leaking out of the circuit (through a person, for example) and cuts power in a fraction of a second | press reset; required near water (bathrooms, kitchens, outdoors) |

Fuses and breakers both go **in series** with what they protect. Their main job is to **protect the wiring** from overheating; a GFCI is what protects **people** from a shock.

> **Key Fact:** Never replace a blown fuse with a higher-rated one. The fuse is matched to the wire; a bigger fuse lets the wire overheat before it blows, which is a fire hazard.

### Wires on a schematic

Where two wires **cross** with **no dot**, they are **not connected** (one passes over the other). A **dot** at the crossing means they **are connected**.`,
    },
    {
      id: 'eico2-junction-mc',
      type: 'multiple-choice' as const,
      figure: eico2JunctionFigure,
      content: '**Read the crossing.** 🎯 Use Figure 3.',
      exercise: {
        questions: [
          {
            question: 'Which statement about the two drawings is correct?',
            options: ['Only Drawing B shows the wires connected', 'Only Drawing A shows the wires connected', 'Both drawings show the wires connected', 'Neither drawing shows the wires connected'],
            correctAnswer: 0,
            explanation: 'A dot at a crossing marks a connection. Wires that cross with no dot simply pass over each other.',
          },
        ],
      },
    },
    {
      id: 'eico2-mc',
      type: 'multiple-choice' as const,
      content: '**Switches and protection.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 15-amp fuse in a circuit has blown. What should replace it?',
            options: ['Another 15-amp fuse', 'A 20-amp fuse, so it blows less often', 'A 10-amp fuse, to be extra safe', 'A piece of copper wire'],
            correctAnswer: 0,
            explanation: 'Replace a fuse with the same rating, which is matched to the wiring. A larger fuse or a wire bypass lets the wires overheat; a smaller fuse would blow during normal use.',
          },
          {
            question: 'Which device is an electrically operated switch that uses a small current to control a larger one?',
            options: ['A relay', 'A fuse', 'A ground rod', 'A resistor'],
            correctAnswer: 0,
            explanation: 'A relay\'s electromagnet coil pulls its contacts closed, so a low-current control circuit can switch a high-current load.',
          },
          {
            question: 'Outlets near a kitchen sink are required to have which protective device to prevent shocks?',
            options: ['A GFCI', 'A transformer', 'A capacitor', 'A potentiometer'],
            correctAnswer: 0,
            explanation: 'A ground-fault circuit interrupter detects current leaking through an unintended path, such as a person, and cuts power almost instantly.',
          },
          {
            question: 'A hallway light can be turned on or off from switches at both ends of the hall. What type of switch is used at each end?',
            options: ['SPDT', 'SPST', 'Push-button NC', 'DPST'],
            correctAnswer: 0,
            explanation: 'Each end needs a switch that sends the current to either of two traveler wires: a single-pole, double-throw switch (called a three-way switch in house wiring).',
          },
        ],
      },
    },
    {
      id: 'eico2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Know the symbols by **shape**: zigzag resistor, long/short-line battery, hinged switch, X-in-circle lamp, rectangle fuse, arc breaker, three-bar ground, M-in-circle motor
- A **dot** where wires cross = connected; no dot = not connected
- **SPST** = simple on/off; **SPDT** = one input to two outputs; a **relay** is a switch worked by an electromagnet
- **Fuse** melts (replace with the **same rating**); **breaker** trips (reset); both go **in series**; **ground** and **GFCI** protect people

> **Up Next:** Part 3 — resistors (and their color code), capacitors and inductors.`,
    },
  ],
}
