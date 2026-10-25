const SVG_OPEN = '<svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">'
const label = (t: string) => `<text x="80" y="94" font-size="12" fill="currentColor" text-anchor="middle">${t}</text>`

const SYM = {
  resistor: '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="15" y1="45" x2="50" y2="45"/><polyline points="50,45 55,35 65,55 75,35 85,55 95,35 105,55 110,45"/><line x1="110" y1="45" x2="145" y2="45"/></g>',
  arrowThrough: '<g stroke="currentColor" stroke-width="2"><line x1="55" y1="72" x2="102" y2="22"/></g><polygon points="106,18 93,22 102,31" fill="currentColor"/>',
  capacitor: '<g stroke="currentColor" fill="none"><line x1="15" y1="45" x2="72" y2="45" stroke-width="2"/><line x1="72" y1="20" x2="72" y2="70" stroke-width="3"/><line x1="88" y1="20" x2="88" y2="70" stroke-width="3"/><line x1="88" y1="45" x2="145" y2="45" stroke-width="2"/></g>',
  inductor: '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="15" y1="50" x2="40" y2="50"/><path d="M 40 50 a 10 10 0 0 1 20 0 a 10 10 0 0 1 20 0 a 10 10 0 0 1 20 0 a 10 10 0 0 1 20 0"/><line x1="120" y1="50" x2="145" y2="50"/></g>',
  ironCore: '<g stroke="currentColor" stroke-width="2"><line x1="40" y1="30" x2="120" y2="30"/><line x1="40" y1="25" x2="120" y2="25"/></g>',
}

const panel = (body: string, name: string, alt: string) => ({
  svg: `${SVG_OPEN}${body}${label(name)}</svg>`,
  alt,
  size: 'sm' as const,
})

const eico3Gallery = [
  panel(SYM.resistor + SYM.arrowThrough, 'variable resistor', 'Variable resistor symbol: a zigzag resistor with a diagonal arrow drawn through it.'),
  panel(SYM.capacitor, 'capacitor', 'Capacitor symbol: the wire ends in two parallel vertical plates separated by a small gap.'),
  panel(SYM.inductor, 'inductor (coil)', 'Inductor symbol: the wire forms a row of four rounded loops, like a coil.'),
  panel(SYM.inductor + SYM.ironCore, 'iron-core inductor', 'Iron-core inductor symbol: a row of four rounded coil loops with two straight parallel lines drawn just above them.'),
]

const eico3BandsFigure = {
  svg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="10" y1="70" x2="70" y2="70"/><line x1="250" y1="70" x2="310" y2="70"/><rect x="70" y="45" width="180" height="50" rx="18"/></g><g class="fig-accent" fill="currentColor"><rect x="88" y="45" width="14" height="50"/><rect x="128" y="45" width="14" height="50"/><rect x="168" y="45" width="14" height="50"/></g><g class="fig-muted" fill="currentColor"><rect x="218" y="45" width="10" height="50"/></g><g fill="currentColor" font-size="10" text-anchor="middle"><text x="95" y="30">band 1</text><text x="135" y="30">band 2</text><text x="175" y="30">band 3</text><text x="223" y="30">band 4</text><text x="95" y="114">yellow</text><text x="135" y="114">violet</text><text x="175" y="114">red</text><text x="223" y="114">gold</text></g><text x="160" y="152" font-size="11" fill="currentColor" text-anchor="middle">read from the end with the bands bunched together</text></svg>',
  alt: 'A resistor body with four color bands. Reading from the left: band 1 is yellow, band 2 is violet, band 3 is red, and band 4, set apart near the right end, is gold.',
  caption: 'Figure 4. A four-band resistor: yellow, violet, red, gold.',
  size: 'md' as const,
}

export const asvabEiComponentsPart3Data = {
  topicSlug: 'asvab-ei-components',
  sections: [
    {
      id: 'eico3-intro',
      type: 'text' as const,
      content: `# 🔧 Components, Symbols and AC vs DC

**Part 3 of 7 — Resistors, Capacitors and Inductors**

### Resistors

A **resistor** limits current and drops voltage. Most are **fixed** (one value). Some are **variable**:

| Type | Terminals | Typical use |
|:---|:---:|:---|
| **Potentiometer** ("pot") | 3 | a volume knob: the middle terminal slides along the resistor and picks off part of the voltage |
| **Rheostat** | 2 | adjusts current in a circuit, such as an older light dimmer or a motor speed control |
| **Thermistor** | 2 | resistance changes with temperature (used in thermostats and engine temperature sensors) |
| **Photoresistor** | 2 | resistance changes with light (night lights that switch on at dusk) |

### The resistor color code

Small resistors are marked with colored bands instead of printed numbers. For a four-band resistor, start from the end where the bands are bunched together:

- **Band 1:** first digit
- **Band 2:** second digit
- **Band 3:** multiplier (how many zeros to add)
- **Band 4:** tolerance: **gold = ±5%**, **silver = ±10%**

| Color | Digit | | Color | Digit |
|:---|:---:|:---:|:---|:---:|
| Black | 0 | | Green | 5 |
| Brown | 1 | | Blue | 6 |
| Red | 2 | | Violet | 7 |
| Orange | 3 | | Gray | 8 |
| Yellow | 4 | | White | 9 |

A memory sentence for the order Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Gray, White: **"Better Be Right Or Your Great Big Venture Goes West."**

**Worked example (Figure 4).** Yellow (4), violet (7), red (2 zeros), gold: 47 followed by two zeros = **4,700 Ω** (4.7 kΩ), ±5%.

**Another.** Brown (1), black (0), orange (3 zeros): **10,000 Ω** = 10 kΩ.`,
      figure: eico3BandsFigure,
    },
    {
      id: 'eico3-gallery',
      type: 'figure' as const,
      figure: eico3Gallery,
      content: 'Symbols for this part. A diagonal arrow through any symbol means "adjustable."',
    },
    {
      id: 'eico3-cap-ind',
      type: 'text' as const,
      content: `## Capacitors

A **capacitor** is two metal plates separated by an insulator (called the **dielectric**). Connected to a battery, charge piles up on the plates: one plate becomes positive, the other negative, and the capacitor **stores electric charge** (energy in an electric field).

- **Unit:** the **farad** (F). A farad is huge, so real capacitors are rated in **microfarads (µF)** or **picofarads (pF)**.
- **DC:** current flows only briefly while the capacitor charges, then stops. A capacitor **blocks steady DC**.
- **AC:** the voltage keeps reversing, so the capacitor keeps charging and discharging and current keeps flowing. A capacitor **passes AC**, and passes it more easily at **higher** frequencies.
- **Uses:** smoothing ripple in power supplies, timing circuits, tuning radios, starting motors, camera flashes.
- **Combining:** capacitors in **parallel add** (the opposite of resistors). In series, they combine the way resistors do in parallel.

> **Safety:** A capacitor can **hold its charge after the power is off**. Large capacitors in microwaves, TVs and power supplies can give a dangerous shock even when unplugged.

## Inductors

An **inductor** is a **coil of wire**. Current through it creates a **magnetic field**, and the coil **opposes any change in current**: when current tries to rise or fall, the changing field pushes back.

- **Unit:** the **henry** (H).
- **DC:** once the current is steady, an inductor is just a wire. It **passes DC** easily.
- **AC:** the current is always changing, so an inductor **opposes AC**, and opposes it more at **higher** frequencies (the opposite of a capacitor).
- An **iron core** inside the coil makes the effect much stronger.
- Inductors in series add, like resistors.

The same idea makes an **electromagnet**: a coil around an iron core becomes a magnet only while current flows. Electromagnets drive **relays**, **solenoids** (a coil that pulls a plunger, like a car's starter solenoid or a door lock), speakers and motors.

| | Capacitor | Inductor |
|:---|:---|:---|
| Stores energy in | an electric field | a magnetic field |
| Unit | farad (F) | henry (H) |
| Steady DC | **blocks** | **passes** |
| AC | passes, better at high frequency | opposes, more at high frequency |
| Opposes changes in | voltage | current |`,
    },
    {
      id: 'eico3-mc',
      type: 'multiple-choice' as const,
      content: '**Check the ideas.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A four-band resistor is marked red, red, brown, gold. What is its value?',
            options: ['220 Ω ±5%', '22 Ω ±5%', '2,200 Ω ±10%', '221 Ω ±5%'],
            correctAnswer: 0,
            explanation: 'Red = 2, red = 2, brown = one zero: 220 Ω. Gold tolerance is ±5%. Reading brown as a third digit gives 221, which is the trap.',
          },
          {
            question: 'In which unit is capacitance measured?',
            options: ['The farad', 'The henry', 'The ohm', 'The hertz'],
            correctAnswer: 0,
            explanation: 'Capacitance is measured in farads (usually microfarads in practice). Henrys measure inductance, ohms resistance, hertz frequency.',
          },
          {
            question: 'A capacitor is connected in series with a lamp and a battery. After a moment, what happens to the current?',
            options: ['It stops once the capacitor is charged', 'It keeps flowing steadily through the lamp', 'It reverses direction many times a second', 'It doubles as the capacitor fills'],
            correctAnswer: 0,
            explanation: 'A capacitor blocks steady DC. Current flows only while it charges; once its voltage matches the battery, the current stops and the lamp goes out.',
          },
          {
            question: 'Which component opposes changes in the current through it by means of its magnetic field?',
            options: ['An inductor', 'A capacitor', 'A fuse', 'A potentiometer'],
            correctAnswer: 0,
            explanation: 'An inductor (coil) builds a magnetic field that pushes back whenever the current tries to change.',
          },
          {
            question: 'Why can a television\'s power supply still be dangerous to touch after it has been unplugged?',
            options: ['Its capacitors may still hold a charge', 'Its inductors keep generating current', 'Its resistors store electricity until cooled', 'Its fuses release energy when removed'],
            correctAnswer: 0,
            explanation: 'Capacitors store charge and can keep it after the power is removed. Large ones must be safely discharged before anyone works on the circuit.',
          },
        ],
      },
    },
    {
      id: 'eico3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Capacitor or inductor?** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Blocks steady DC:', options: ['capacitor', 'inductor'], correctAnswer: 0 },
          { label: 'Is basically a coil of wire:', options: ['inductor', 'capacitor'], correctAnswer: 0 },
          { label: 'Is rated in henrys:', options: ['inductor', 'capacitor'], correctAnswer: 0 },
          { label: 'Combining two of them in parallel adds their values:', options: ['capacitor', 'inductor'], correctAnswer: 0 },
        ],
        correctAnswers: ['capacitor', 'inductor', 'inductor', 'capacitor'],
        hint1: 'Plates separated by an insulator cannot pass steady current.',
        hint2: 'Coil = magnetic field = inductor.',
        hint3: 'Capacitors in parallel add; inductors (like resistors) add in series.',
        explanation: 'The capacitor blocks DC and adds in parallel; the inductor is a coil rated in henrys (and inductors add in series, like resistors).',
      },
    },
    {
      id: 'eico3-input',
      type: 'input-boxes' as const,
      content: `**Read the bands and combine.** ✍️ Numbers only.

**1)** A resistor reads green, blue, red, gold. What is its value in ohms?

**2)** A resistor reads orange, orange, orange, silver. What is its value in ohms?

**3)** A 10-µF and a 22-µF capacitor are connected in parallel. What is the total capacitance in µF?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['5600', '33000', '32'],
        hint1: 'Green = 5, blue = 6, red = two zeros.',
        hint2: 'Orange = 3 for both digits, and orange as the multiplier = three zeros.',
        hint3: 'Capacitors in parallel add.',
        explanation: '(1) 56 followed by two zeros = 5,600 Ω (±5%). (2) 33 followed by three zeros = 33,000 Ω (33 kΩ, ±10%). (3) 10 + 22 = 32 µF.',
      },
    },
    {
      id: 'eico3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Potentiometer** (3 terminals) = adjustable voltage divider; **rheostat** (2 terminals) = adjustable resistance; thermistors and photoresistors respond to heat and light
- Color code: Black 0, Brown 1, Red 2, Orange 3, Yellow 4, Green 5, Blue 6, Violet 7, Gray 8, White 9; band 3 = number of zeros; gold ±5%, silver ±10%
- **Capacitor:** plates + insulator, stores charge, **farads**, blocks DC, passes AC, adds in parallel, can stay charged after power-off
- **Inductor:** coil, magnetic field, opposes changes in current, **henrys**, passes DC, opposes AC
- Electromagnets drive relays, solenoids, speakers and motors

> **Up Next:** Part 4 — diodes, transistors and transformers.`,
    },
  ],
}
