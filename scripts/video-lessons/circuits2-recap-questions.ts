/**
 * Circuits Part 2: the conceptual questions on each CONCEPT video's
 * "Remember" section. Videos 1, 5 and 7 get three each. Video 3's recap
 * already carries two "put it together" problems, so it gets one. See
 * circuits1-recap-questions.ts for the rules.
 */
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'

export const RECAP: Record<number, CheckpointQuestion[]> = {
  // 1 · Kirchhoff's Rules
  1: [
    {
      question: 'Kirchhoff’s loop rule says the potential changes around any closed loop add to zero. Which conservation law does it express?',
      options: [
        'Energy: a charge returns to its starting potential',
        'Charge: none of it can pile up at a junction',
        'Momentum: the carriers keep one drift speed',
        'Current: the same amount flows in every wire',
      ],
      correctAnswer: 0,
      explanation: 'A charge that goes round a loop and returns is back at the same potential, so every volt gained in a source is dropped somewhere along the way: energy is conserved. Charge conservation is the junction rule.',
    },
    {
      question: 'Walking a loop, you cross a resistor in the direction OPPOSITE to the current through it. What do you record?',
      options: [
        '−IR, a drop in potential',
        '+IR, a rise in potential',
        'Zero, since you oppose the flow',
        '+V, the full source voltage',
      ],
      correctAnswer: 1,
      explanation: 'Current flows from high to low potential through a resistor. Crossing it against the current takes you from the low side to the high side, a rise of IR.',
    },
    {
      question: 'A 10 V battery and a 6 V battery sit in one loop, connected so that they push current in opposite directions. What net voltage drives the current?',
      options: [
        '16 V, the way the 10 V battery pushes',
        '4 V, the way the 6 V battery pushes',
        '4 V, the way the 10 V battery pushes',
        '0 V, since opposing batteries cancel',
      ],
      correctAnswer: 2,
      explanation: 'Opposing sources subtract: 10 − 6 = 4 V, and the current runs the way the larger source pushes.',
    },
  ],
  // 3 · Networks and Dividers (third question; two numeric problems come first)
  3: [
    {
      question: 'A parallel bank sits behind a series resistor on an ideal battery. One more branch is added to the bank. What happens to the current in each original branch?',
      options: [
        'It rises, since the battery supplies more current',
        'It stays the same, since branches are independent',
        'It falls to zero, since the new branch is a short',
        'It falls, since less voltage is left for the bank',
      ],
      correctAnswer: 3,
      explanation: 'The new branch lowers R_eq, so the total current rises and the series resistor drops more voltage. Less is left across the bank, so each original branch carries less. Branches are independent only directly across an ideal source.',
    },
  ],
  // 5 · Power, Energy and Safety
  5: [
    {
      question: 'Two different resistors are in series, so they carry the same current. Which one dissipates more power?',
      options: [
        'The larger one, since P = I²R at a shared current',
        'The smaller one, since P = V²/R favors a small R',
        'Neither, since one current means one power',
        'The one nearer the + terminal of the battery',
      ],
      correctAnswer: 0,
      explanation: 'Pick the form that holds the shared quantity fixed. In series the current is shared, so P = I²R and the larger resistance dissipates more.',
    },
    {
      question: 'An electricity bill charges for kilowatt-hours. What kind of quantity is a kilowatt-hour?',
      options: [
        'Power: an energy divided by a time',
        'Energy: a power multiplied by a time',
        'Current: a charge divided by a time',
        'Voltage: an energy divided by a charge',
      ],
      correctAnswer: 1,
      explanation: 'E = Pt. One kilowatt-hour is 1000 W for 3600 s, which is 3.6 × 10⁶ J of energy.',
    },
    {
      question: 'The voltage across a fixed resistor is tripled. By what factor does the power it dissipates change?',
      options: [
        '3, since P = IV and V has tripled',
        '6, since V and I each count once',
        '9, since P = V²/R at a fixed R',
        '1/3, since more volts mean less current',
      ],
      correctAnswer: 2,
      explanation: 'At fixed R, P = V²/R, so tripling V multiplies the power by 3² = 9. (The current triples as well, and P = IV gives the same 3 × 3.)',
    },
  ],
  // 7 · Ranking Bulb Brightness
  7: [
    {
      question: 'Two bulbs are rated 40 W and 100 W for the same line voltage. Which one has the larger filament resistance?',
      options: [
        'The 100 W bulb, since more power needs more R',
        'Neither, since one voltage means one resistance',
        'The 100 W bulb, since it draws the larger current',
        'The 40 W bulb, since R = V²/P at the rated voltage',
      ],
      correctAnswer: 3,
      explanation: 'A rating gives the resistance: R = V²/P. At the same rated voltage, the lower wattage means the higher resistance.',
    },
    {
      question: 'A 40 W bulb and a 100 W bulb, rated for the same voltage, are wired in SERIES across that voltage. Which one glows brighter?',
      options: [
        'The 40 W bulb: same current, larger resistance',
        'The 100 W bulb: same current, smaller resistance',
        'The 100 W bulb: it has the higher rating',
        'Neither: one shared current, one brightness',
      ],
      correctAnswer: 0,
      explanation: 'In series the bulbs share one current, so compare with P = I²R. The 40 W bulb has the larger resistance (R = V²/P), so it dissipates more and glows brighter. The order is the reverse of household (parallel) use.',
    },
    {
      question: 'Three identical bulbs are in parallel directly across an ideal battery, and one burns out. What happens to the other two?',
      options: [
        'They brighten, sharing the spare current',
        'They stay exactly as bright as before',
        'They dim, since the total current falls',
        'They go dark, since the circuit is open',
      ],
      correctAnswer: 1,
      explanation: 'Each bulb sits directly across the ideal source, so it keeps the full voltage and the same power. Only the total current from the battery falls.',
    },
  ],
}
