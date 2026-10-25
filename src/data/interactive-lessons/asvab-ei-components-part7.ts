const CAP = '<g stroke="currentColor" fill="none"><line x1="15" y1="50" x2="72" y2="50" stroke-width="2"/><line x1="72" y1="25" x2="72" y2="75" stroke-width="3"/><line x1="88" y1="25" x2="88" y2="75" stroke-width="3"/><line x1="88" y1="50" x2="145" y2="50" stroke-width="2"/></g>'
const IND = '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="15" y1="55" x2="40" y2="55"/><path d="M 40 55 a 10 10 0 0 1 20 0 a 10 10 0 0 1 20 0 a 10 10 0 0 1 20 0 a 10 10 0 0 1 20 0"/><line x1="120" y1="55" x2="145" y2="55"/></g>'
const DIODE = '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="15" y1="50" x2="65" y2="50"/><polygon points="65,32 65,68 95,50"/><line x1="95" y1="32" x2="95" y2="68" stroke-width="3"/><line x1="95" y1="50" x2="145" y2="50"/></g>'
const VRES = '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="15" y1="50" x2="50" y2="50"/><polyline points="50,50 55,40 65,60 75,40 85,60 95,40 105,60 110,50"/><line x1="110" y1="50" x2="145" y2="50"/><line x1="55" y1="77" x2="102" y2="27"/></g><polygon points="106,23 93,27 102,36" fill="currentColor"/>'

const eico7SymbolsFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">'
    + `<g>${CAP}</g><g transform="translate(160,0)">${DIODE}</g><g transform="translate(0,100)">${IND}</g><g transform="translate(160,100)">${VRES}</g>`
    + '<g class="fig-accent" fill="currentColor" font-size="14" font-weight="bold"><text x="6" y="18">1</text><text x="166" y="18">2</text><text x="6" y="118">3</text><text x="166" y="118">4</text></g>'
    + '<line x1="160" y1="5" x2="160" y2="195" class="fig-muted" stroke="currentColor" stroke-dasharray="3 3"/><line x1="5" y1="100" x2="315" y2="100" class="fig-muted" stroke="currentColor" stroke-dasharray="3 3"/>'
    + '</svg>',
  alt: 'Four numbered schematic symbols. Symbol 1: the wire ends in two parallel vertical plates with a gap between them. Symbol 2: a triangle pointing right into a vertical bar. Symbol 3: the wire forms a row of four rounded loops like a coil. Symbol 4: a zigzag with a diagonal arrow drawn through it.',
  caption: 'Figure 9. Four numbered symbols.',
  size: 'md' as const,
}

export const asvabEiComponentsPart7Data = {
  topicSlug: 'asvab-ei-components',
  sections: [
    {
      id: 'eico7-intro',
      type: 'text' as const,
      content: `# 🔧 Components, Symbols and AC vs DC

**Part 7 of 7 — Mixed Mastery Set**

Ten questions covering the whole topic at real EI difficulty. Aim for about **40 seconds each**, and much less on the recall items.

| Skill | Where it was taught |
|:---|:---:|
| Symbols, switches, fuses, breakers, ground | Part 2 |
| Resistors, color code, capacitors, inductors | Part 3 |
| Diodes, transistors, transformers | Part 4 |
| AC, DC, frequency, house wiring, safety | Part 5 |`,
    },
    {
      id: 'eico7-figure-mc',
      type: 'multiple-choice' as const,
      figure: eico7SymbolsFigure,
      content: '**Questions 1–3 use Figure 9.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which numbered symbol stores electric charge and blocks steady DC?',
            options: ['Symbol 1', 'Symbol 2', 'Symbol 3', 'Symbol 4'],
            correctAnswer: 0,
            explanation: 'Two parallel plates with a gap is the capacitor symbol. Symbol 2 is a diode, Symbol 3 an inductor, and Symbol 4 a variable resistor.',
          },
          {
            question: 'Which numbered symbol allows current in only one direction?',
            options: ['Symbol 2', 'Symbol 1', 'Symbol 3', 'Symbol 4'],
            correctAnswer: 0,
            explanation: 'The triangle-and-bar is a diode, which conducts only from anode to cathode, the way the triangle points.',
          },
          {
            question: 'Symbol 4 could be used as which of these?',
            options: ['A volume control on a radio', 'A one-way valve for current', 'A step-down transformer', 'A protective fuse'],
            correctAnswer: 0,
            explanation: 'A zigzag with an arrow through it is a variable resistor. A potentiometer used as a volume knob is the classic example.',
          },
        ],
      },
    },
    {
      id: 'eico7-mc-a',
      type: 'multiple-choice' as const,
      content: '**Questions 4–7.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A transformer has 600 turns on its primary and 30 turns on its secondary. The primary is connected to 120 V AC. What is the secondary voltage?',
            options: ['6 V', '2,400 V', '20 V', '60 V'],
            correctAnswer: 0,
            explanation: 'The secondary has 30 ÷ 600 = 1/20 as many turns, so it gets 1/20 of the voltage: 120 ÷ 20 = 6 V. 2,400 V flips the ratio.',
          },
          {
            question: 'Which device is used to hold a power supply\'s output at a steady voltage by conducting in reverse at a set voltage?',
            options: ['A zener diode', 'A light-emitting diode', 'An inductor', 'A relay'],
            correctAnswer: 0,
            explanation: 'A zener diode is built to conduct in reverse at a specific voltage, which clamps the output at that value.',
          },
          {
            question: 'An AC signal has a period of 1/50 of a second. What is its frequency?',
            options: ['50 Hz', '0.02 Hz', '100 Hz', '25 Hz'],
            correctAnswer: 0,
            explanation: 'Frequency is the reciprocal of period: 1 ÷ (1/50) = 50 Hz. 0.02 is the period written as a decimal, in seconds, not the frequency.',
          },
          {
            question: 'A resistor is marked yellow, violet, orange, silver. What are its value and tolerance?',
            options: ['47 kΩ ±10%', '4,700 Ω ±10%', '473 Ω ±5%', '47,000 Ω ±5%'],
            correctAnswer: 0,
            explanation: 'Yellow = 4, violet = 7, orange = three zeros: 47,000 Ω = 47 kΩ. Silver is ±10% (gold would be ±5%).',
          },
        ],
      },
    },
    {
      id: 'eico7-mc-b',
      type: 'multiple-choice' as const,
      content: '**Questions 8–10.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A radio receiver must strengthen the weak signal from its antenna. Which component does that job?',
            options: ['A transistor', 'A circuit breaker', 'A rectifier', 'A resistor'],
            correctAnswer: 0,
            explanation: 'Transistors amplify: a small signal at the base controls a much larger collector current. Circuit breakers protect wiring, rectifiers convert AC to DC, and resistors only limit current.',
          },
          {
            question: 'A kitchen circuit breaker trips whenever the microwave and a space heater run at the same time. What is the safest fix?',
            options: ['Plug one appliance into a different circuit', 'Install a breaker that has a higher amp rating', 'Tape the breaker handle in the ON position', 'Replace the breaker with a copper bar'],
            correctAnswer: 0,
            explanation: 'The breaker is doing its job: the two appliances together draw more current than the wiring is rated for. Spreading the load over another circuit fixes the cause. A bigger breaker or a bypass lets the wire overheat.',
          },
          {
            question: 'Inductance is measured in which unit?',
            options: ['Henrys', 'Farads', 'Ohms', 'Hertz'],
            correctAnswer: 0,
            explanation: 'Inductance is in henrys. Farads measure capacitance, ohms resistance, and hertz frequency.',
          },
        ],
      },
    },
    {
      id: 'eico7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Components, Symbols and AC vs DC

- Learn each part by **job, unit and symbol**: resistor (Ω, zigzag), capacitor (farads, two plates), inductor (henrys, coil), diode (one-way, triangle + bar), transistor (amplify/switch; emitter, base, collector), transformer (AC voltage; two coils and a core)
- **Fuse** melts and is replaced with the same rating; **breaker** trips and resets; **GFCI** protects people near water; **ground** is the safety path
- Color code: digit, digit, zeros, tolerance (gold ±5%, silver ±10%)
- **AC** reverses (60 Hz in the U.S.); **DC** flows one way; $f = \\frac{1}{T}$
- U.S. homes: 120 V and 240 V; black/red hot, white neutral, green/bare ground

> **Next unit:** Auto Information.`,
    },
  ],
}
