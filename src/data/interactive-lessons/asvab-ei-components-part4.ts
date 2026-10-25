const SVG_OPEN = '<svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">'
const label = (t: string) => `<text x="80" y="96" font-size="12" fill="currentColor" text-anchor="middle">${t}</text>`

const SYM = {
  diode: '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="15" y1="45" x2="65" y2="45"/><polygon points="65,27 65,63 95,45"/><line x1="95" y1="27" x2="95" y2="63" stroke-width="3"/><line x1="95" y1="45" x2="145" y2="45"/></g>',
  ledArrows: '<g stroke="currentColor" stroke-width="1.5"><line x1="86" y1="22" x2="100" y2="8"/><line x1="98" y1="26" x2="112" y2="12"/></g><polygon points="103,5 94,9 99,14" fill="currentColor"/><polygon points="115,9 106,13 111,18" fill="currentColor"/>',
  zenerBar: '<g stroke="currentColor" stroke-width="3" fill="none"><polyline points="88,20 95,27 95,63 102,70"/></g>',
  npn: '<g stroke="currentColor" stroke-width="2" fill="none"><circle cx="88" cy="47" r="30"/><line x1="15" y1="47" x2="76" y2="47"/><line x1="76" y1="29" x2="76" y2="65" stroke-width="3"/><polyline points="76,37 100,23 100,4"/><polyline points="76,57 100,71 100,90"/></g><polygon points="100,71 88.9,70.3 93.9,61.7" fill="currentColor"/><g fill="currentColor" font-size="11"><text x="20" y="40">B</text><text x="106" y="14">C</text><text x="106" y="88">E</text></g>',
  pnp: '<g stroke="currentColor" stroke-width="2" fill="none"><circle cx="88" cy="47" r="30"/><line x1="15" y1="47" x2="76" y2="47"/><line x1="76" y1="29" x2="76" y2="65" stroke-width="3"/><polyline points="76,37 100,23 100,4"/><polyline points="76,57 100,71 100,90"/></g><polygon points="77,58 88.1,58.7 83.1,67.3" fill="currentColor"/><g fill="currentColor" font-size="11"><text x="20" y="40">B</text><text x="106" y="14">C</text><text x="106" y="88">E</text></g>',
}

const panel = (body: string, name: string, alt: string, tall = false) => ({
  svg: tall
    ? `<svg viewBox="0 0 160 118" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">${body}<text x="80" y="114" font-size="12" fill="currentColor" text-anchor="middle">${name}</text></svg>`
    : `${SVG_OPEN}${body}${label(name)}</svg>`,
  alt,
  size: 'sm' as const,
})

const eico4Gallery = [
  panel(SYM.diode, 'diode', 'Diode symbol: a triangle pointing right into a vertical bar, in the wire.'),
  panel(SYM.diode + SYM.ledArrows, 'LED (light-emitting diode)', 'LED symbol: a diode triangle and bar with two small arrows pointing up and away from it.'),
  panel(SYM.diode.replace('<line x1="95" y1="27" x2="95" y2="63" stroke-width="3"/>', '') + SYM.zenerBar, 'zener diode', 'Zener diode symbol: a diode triangle pointing into a bar whose ends are bent, like a stretched Z.'),
  panel(SYM.npn, 'NPN transistor', 'NPN transistor symbol: a circle containing a base line meeting a short bar, a collector line going up, and an emitter line going down with an arrow pointing outward, away from the base.', true),
]

const eico4DiodeFigure = {
  svg: '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="20" y1="70" x2="130" y2="70"/><polygon points="130,40 130,100 180,70"/><line x1="180" y1="40" x2="180" y2="100" stroke-width="4"/><line x1="180" y1="70" x2="300" y2="70"/></g><g fill="currentColor" font-size="13" text-anchor="middle"><text x="80" y="55">anode (+)</text><text x="245" y="55">cathode (−)</text><text x="180" y="122">the bar marks the cathode</text></g><g class="fig-accent" stroke="currentColor" stroke-width="2"><line x1="60" y1="138" x2="120" y2="138"/></g><polygon class="fig-accent" points="128,138 116,132 116,144" fill="currentColor"/><text x="20" y="142" font-size="11" fill="currentColor">flow</text></svg>',
  alt: 'A diode symbol drawn large: a triangle pointing right into a vertical bar. The left lead is labeled anode, plus. The right lead, at the bar, is labeled cathode, minus, and a note says the bar marks the cathode. An arrow labeled flow points to the right, in the direction the triangle points.',
  caption: 'Figure 5. A diode conducts (conventional current) in the direction the triangle points: anode to cathode.',
  size: 'md' as const,
}

const eico4TransformerFigure = {
  svg: '<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M 120 30 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 20"/><path d="M 200 30 a 10 10 0 0 0 0 20 a 10 10 0 0 0 0 20 a 10 10 0 0 0 0 20 a 10 10 0 0 0 0 20 a 10 10 0 0 0 0 20 a 10 10 0 0 0 0 20"/><polyline points="120,30 60,30"/><polyline points="120,150 60,150"/><polyline points="200,30 260,30"/><polyline points="200,150 260,150"/></g><g class="fig-muted" stroke="currentColor" stroke-width="3"><line x1="155" y1="25" x2="155" y2="155"/><line x1="165" y1="25" x2="165" y2="155"/></g><g fill="currentColor" font-size="12" text-anchor="middle"><text x="70" y="85">primary</text><text x="70" y="100">(input)</text><text x="250" y="85">secondary</text><text x="250" y="100">(output)</text><text x="160" y="174">iron core</text></g></svg>',
  alt: 'A transformer symbol: a coil on the left labeled primary, input, and a coil on the right labeled secondary, output, facing each other. Two straight vertical lines between the coils are labeled iron core. The coils are not connected by any wire.',
  caption: 'Figure 6. A transformer: two coils sharing an iron core, with no wire between them.',
  size: 'md' as const,
}

export const asvabEiComponentsPart4Data = {
  topicSlug: 'asvab-ei-components',
  sections: [
    {
      id: 'eico4-intro',
      type: 'text' as const,
      content: `# 🔧 Components, Symbols and AC vs DC

**Part 4 of 7 — Diodes, Transistors and Transformers**

### Semiconductors in One Paragraph

Diodes and transistors are made of **semiconductors**, usually **silicon** (sometimes germanium). Adding tiny amounts of other elements (**doping**) makes **N-type** material (extra free electrons, negative carriers) or **P-type** material (missing electrons, called holes, which act as positive carriers). Where P and N meet, a **junction** forms that lets current cross easily in one direction only.

## Diodes: One-Way Valves

A **diode** is one P-N junction. It conducts when its **anode** is more positive than its **cathode** (**forward bias**) and blocks current when connected the other way (**reverse bias**).

- In the symbol, the **triangle points the way conventional current flows**, and the **bar is the cathode**. (On a real diode, a painted stripe marks the cathode end.)
- A **rectifier** uses diodes to change **AC into DC**. One diode lets through only half of each AC cycle (half-wave); four diodes in a bridge use both halves (full-wave).
- An **LED** (light-emitting diode) gives off light when current flows forward.
- A **zener diode** is designed to conduct backwards at a set voltage, so it is used to **regulate** (hold steady) a voltage.

> **History note:** Before semiconductors, the same jobs were done by **vacuum tubes** (electron tubes): a tube diode rectified, a tube triode amplified. Tubes are larger, run hot and burn out; diodes and transistors replaced them in almost everything.`,
    },
    {
      id: 'eico4-diode-mc',
      type: 'multiple-choice' as const,
      figure: eico4DiodeFigure,
      content: '**Read the diode.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A diode is connected so that its cathode is attached to the positive terminal of a battery and its anode to the negative terminal. What happens?',
            options: ['It blocks current, because it is reverse-biased', 'It conducts, because the diode is forward-biased', 'It conducts in both directions equally', 'It changes the DC into AC'],
            correctAnswer: 0,
            explanation: 'Forward bias needs the anode more positive than the cathode. Here the cathode is positive, so the diode is reverse-biased and blocks the current.',
          },
          {
            question: 'What is the main job of a rectifier circuit?',
            options: ['Changing AC into DC', 'Changing DC into AC', 'Raising an AC voltage', 'Storing electric charge'],
            correctAnswer: 0,
            explanation: 'A rectifier uses diodes to let current through in only one direction, turning alternating current into direct current. Raising AC voltage is a transformer\'s job, and storing charge is a capacitor\'s.',
          },
        ],
      },
    },
    {
      id: 'eico4-transistors',
      type: 'text' as const,
      content: `## Transistors: Amplifiers and Switches

A **transistor** has **three leads**: the **emitter**, the **base** and the **collector**. A **small current into the base controls a much larger current** between the collector and the emitter. That gives it two jobs:

| Job | How | Example |
|:---|:---|:---|
| **Amplifier** | a weak signal at the base becomes a strong copy at the collector | radio, microphone and audio amplifiers |
| **Switch** | a small base current turns the big current fully on or off | computer chips contain billions of transistor switches |

The two types are **NPN** and **PNP**. In the symbol, the arrow is on the **emitter**:

- **NPN:** the arrow points **out** of the transistor ("**N**ot **P**ointing i**N**")
- **PNP:** the arrow points **in** ("**P**ointing i**N** **P**roudly")

An **integrated circuit (IC)**, or chip, packs many transistors, resistors and other parts onto one small piece of silicon.

## Transformers: Changing AC Voltage

A **transformer** is two coils wound on a shared **iron core** (Figure 6). AC in the **primary** coil makes a changing magnetic field, and that changing field induces a voltage in the **secondary** coil. There is **no wire connection** between the coils.

$$\\frac{V_{secondary}}{V_{primary}} = \\frac{N_{secondary}}{N_{primary}} \\qquad (N = \\text{number of turns})$$

- **More turns on the secondary → step-up** (higher output voltage).
- **Fewer turns on the secondary → step-down** (lower output voltage).
- Power in ≈ power out, so when voltage goes **up**, current goes **down** by the same factor.
- A transformer works **only on AC**. Steady DC makes no changing field, so nothing is induced.

**Worked example 1.** A primary with 200 turns gets 24 V AC. The secondary has 1,000 turns (5 times as many). Output: 5 × 24 = **120 V**. Step-up.

**Worked example 2.** A doorbell transformer steps 120 V down to 12 V, a 10 : 1 ratio. If the secondary has 50 turns, the primary has 10 × 50 = **500 turns**. If the secondary supplies 1 A, the primary draws only about **0.1 A**.`,
    },
    {
      id: 'eico4-gallery',
      type: 'figure' as const,
      figure: [...eico4Gallery, eico4TransformerFigure],
      content: 'Diode-family symbols, an NPN transistor and a transformer. A PNP transistor looks like the NPN one with its emitter arrow pointing inward.',
    },
    {
      id: 'eico4-mc',
      type: 'multiple-choice' as const,
      content: '**Check the ideas.** 🎯',
      exercise: {
        questions: [
          {
            question: 'What are the three leads of a transistor called?',
            options: ['Emitter, base and collector', 'Anode, cathode and gate', 'Primary, secondary and core', 'Positive, negative and ground'],
            correctAnswer: 0,
            explanation: 'A bipolar transistor has an emitter, a base and a collector. Anode and cathode name a diode\'s leads, and primary and secondary name transformer coils.',
          },
          {
            question: 'Why does a transformer not work on steady DC?',
            options: ['Steady DC makes no changing field to induce voltage', 'DC flows too fast for the iron core to carry it', 'DC is blocked by the wire connecting the two coils', 'A transformer needs a battery to start working'],
            correctAnswer: 0,
            explanation: 'Only a changing magnetic field induces voltage in the secondary. Steady DC gives a constant field, so no voltage appears. (The coils are not connected by wire at all.)',
          },
          {
            question: 'Which component was used for amplifying and rectifying before transistors and semiconductor diodes replaced it?',
            options: ['The vacuum tube', 'The electrolytic capacitor', 'The relay', 'The rheostat'],
            correctAnswer: 0,
            explanation: 'Vacuum (electron) tubes did these jobs in early radios and computers. Semiconductors replaced them because they are smaller, cooler and longer lasting.',
          },
          {
            question: 'In the symbol for an NPN transistor, the arrow on the emitter points:',
            options: ['away from the base (outward)', 'toward the base (inward)', 'straight up toward the collector', 'in both directions'],
            correctAnswer: 0,
            explanation: 'NPN: "Not Pointing iN," so the emitter arrow points outward. In a PNP transistor it points inward.',
          },
        ],
      },
    },
    {
      id: 'eico4-input',
      type: 'input-boxes' as const,
      content: `**Transformer ratios.** ✍️ Numbers only.

**1)** A transformer has 100 turns on its primary and 400 turns on its secondary. The primary gets 30 V AC. What is the secondary voltage, in volts?

**2)** A step-down transformer changes 240 V to 12 V. Its primary has 2,000 turns. How many turns are on the secondary?

**3)** For the transformer in question 1, the secondary supplies 2 A. About how much current does the primary draw, in amperes? (Assume no losses.)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['120', '100', '8'],
        hint1: 'The secondary has 4 times as many turns, so 4 times the voltage.',
        hint2: '240 to 12 is a 20 : 1 step-down, so the secondary has one twentieth of the turns.',
        hint3: 'Power in = power out: find the secondary power (volts × amps), then divide by the primary voltage.',
        explanation: '(1) 400 ÷ 100 = 4, and 4 × 30 = 120 V. (2) 2,000 ÷ 20 = 100 turns. (3) Power in = power out: 120 V × 2 A = 240 W, and 240 W ÷ 30 V = 8 A in the primary.',
      },
    },
    {
      id: 'eico4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Diodes and transistors are made of **semiconductors** (silicon, germanium) doped into **P-type** and **N-type**
- **Diode** = one-way valve; conducts **anode → cathode** (triangle points the way); the **bar/stripe is the cathode**
- **Rectifier** = AC → DC; **LED** = light; **zener** = voltage regulation; **vacuum tubes** came before semiconductors
- **Transistor:** emitter, base, collector; amplifier or switch; NPN arrow points **out**, PNP **in**
- **Transformer:** $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$; more secondary turns = step-up; current changes the opposite way; **AC only**

> **Up Next:** Part 5 — AC vs DC, frequency, and how a house is wired.`,
    },
  ],
}
