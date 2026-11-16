/**
 * Circuits Part 3: the three conceptual questions on each CONCEPT video's
 * "Remember" section (videos 1, 3, 5, 7). They come straight after the
 * video's required flashcards and the recap clip, and each one tests an idea
 * from those cards with a new situation, so none repeats a section
 * checkpoint, a worked example or an exit-quiz item. See
 * circuits1-recap-questions.ts for the rules.
 */
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'

export const RECAP: Record<number, CheckpointQuestion[]> = {
  // 1 · EMF and Terminal Voltage
  1: [
    {
      question: 'A battery’s EMF is 9.0 V. How much work does its chemistry do on 2.0 C of charge it moves from the − terminal to the + terminal?',
      options: ['18 J', '4.5 J', '9.0 J', '0.22 J'],
      correctAnswer: 0,
      explanation: 'EMF is work per coulomb, ε = W/q, so W = εq = (9.0 V)(2.0 C) = 18 J. 4.5 J divides instead of multiplying; 9.0 J is the work on ONE coulomb; and 0.22 J is q/ε, the formula upside down.',
    },
    {
      question: 'A battery’s chemistry supplies 30 W while 5 W heats the inside of the battery. How much power reaches the external load?',
      options: ['35 W', '30 W', '25 W', '6 W'],
      correctAnswer: 2,
      explanation: 'The chemistry’s power εI splits into I²r, lost inside, and I²R, delivered to the load: 30 − 5 = 25 W. 35 W adds the internal loss instead of subtracting it; 30 W ignores the internal resistance; and 6 W is a ratio, not a share of the power.',
    },
    {
      question: 'An old battery and a new one both read 1.5 V on a voltmeter with nothing else attached, but the old one barely lights a bulb. What has changed in the old battery?',
      options: [
        'Its EMF has fallen well below 1.5 V',
        'It has used up its supply of charge',
        'Its two terminals have swapped sign',
        'Its internal resistance has risen',
      ],
      correctAnswer: 3,
      explanation: 'The unloaded reading is still the EMF, so the EMF has not changed. With age the internal resistance r rises, and that only shows under load: the bulb’s current drops a large Ir inside the battery, so the terminal voltage sags. Charge is never used up in a circuit, and a battery’s polarity does not reverse with age.',
    },
  ],
  // 3 · Cells and Meters
  3: [
    {
      question: 'Two identical 1.5 V cells, each with internal resistance 0.40 Ω, are connected in parallel (+ to +, − to −). What are the pack’s EMF and internal resistance?',
      options: ['1.5 V and 0.20 Ω', '3.0 V and 0.80 Ω', '3.0 V and 0.20 Ω', '1.5 V and 0.80 Ω'],
      correctAnswer: 0,
      explanation: 'In parallel both cells push between the same two rails, so the pack keeps one cell’s EMF, 1.5 V. Their internal resistances sit side by side, r in parallel with r, which is r/2 = 0.20 Ω. 3.0 V and 0.80 Ω are the SERIES values; the mixed options combine one series rule with one parallel rule.',
    },
    {
      question: 'A battery is rated 500 mAh. How much charge can it deliver?',
      options: ['500 C', '0.14 C', '1800 C', '30 C'],
      correctAnswer: 2,
      explanation: 'A milliamp-hour is a current times a time, so it is charge: 1 mAh = (10⁻³ A)(3600 s) = 3.6 C, and 500 mAh = 500 × 3.6 = 1800 C. 500 C forgets to convert; 0.14 C divides by 3600 instead of multiplying by 3.6; and 30 C counts the hour as 60 seconds, (0.50 A)(60 s).',
    },
    {
      question: 'In a galvanic cell used as a battery, which electrode is the battery’s positive terminal, and what happens there?',
      options: [
        'The anode, where oxidation happens',
        'The cathode, where oxidation happens',
        'The anode, where reduction happens',
        'The cathode, where reduction happens',
      ],
      correctAnswer: 3,
      explanation: 'Electrons leave the anode, where oxidation happens, travel through the external wire, and arrive at the cathode, where reduction happens. The cathode is the + terminal. Oxidation always happens at the anode and reduction at the cathode, so the other three options each swap at least one of those.',
    },
  ],
  // 5 · Capacitance
  5: [
    {
      question: 'A 4.0 μF capacitor is connected to a 6.0 V battery until it is fully charged. What charge sits on each plate?',
      options: ['1.5 μC', '24 μC', '0.67 μC', '48 μC'],
      correctAnswer: 1,
      explanation: 'Q = CV = (4.0 μF)(6.0 V) = 24 μC: +24 μC on one plate and −24 μC on the other (microfarads times volts gives microcoulombs). 1.5 μC is C/V and 0.67 μC is V/C; 48 μC counts both plates, but "the charge on a capacitor" means the charge on EACH plate.',
    },
    {
      question: 'Which single change DOUBLES the capacitance of a parallel-plate capacitor?',
      options: [
        'Doubling the voltage across its plates',
        'Doubling the gap between its plates',
        'Halving the gap between its plates',
        'Halving the area of each of its plates',
      ],
      correctAnswer: 2,
      explanation: 'C = κε₀A/d, so C goes as 1/d: halving the gap doubles C. Capacitance is fixed by construction, so a new voltage changes Q, not C; doubling the gap HALVES C; and halving the area halves it too.',
    },
    {
      question: 'A parallel-plate capacitor stays connected to its battery while the gap between the plates is doubled. What happens to the field between the plates?',
      options: [
        'It falls to half its value',
        'It rises to twice its value',
        'It stays exactly the same',
        'It falls to a quarter of it',
      ],
      correctAnswer: 0,
      explanation: 'Between parallel plates E = V/d. The battery holds V fixed, so doubling d halves E. The field would stay the same only if V doubled along with d, and nothing in E = V/d is squared.',
    },
  ],
  // 7 · Dielectrics and Energy
  7: [
    {
      question: 'Why does sliding a dielectric between a capacitor’s plates raise its capacitance?',
      options: [
        'It carries some charge from one plate across to the other',
        'Its induced charges weaken the field, so V drops for the same Q',
        'It adds charge of its own to both of the capacitor’s plates',
        'It pushes the plates closer together, so the gap gets smaller',
      ],
      correctAnswer: 1,
      explanation: 'The dielectric’s molecules polarize, and their induced layers partly cancel the plates’ field. A weaker field means a lower voltage for the same charge, so C = Q/V rises, by κ. A dielectric is an insulator, so it carries no charge across and adds no net charge; and it fills the gap without moving the plates.',
    },
    {
      question: 'A capacitor stays connected while its battery voltage is doubled, and its capacitance does not change. By what factor does its stored energy change?',
      options: ['It halves', 'It doubles', 'It stays the same', 'It quadruples'],
      correctAnswer: 3,
      explanation: 'With C fixed, U = ½CV², so doubling V multiplies U by 2² = 4. "It doubles" is the change in the CHARGE (Q = CV); the energy goes with V squared.',
    },
    {
      question: 'A battery charges an empty capacitor through a resistor. What fraction of the energy the battery delivers ends up stored in the capacitor?',
      options: [
        'Half, whatever the size of the resistor',
        'All of it, if the resistor is very small',
        'Half, but only for a very large resistor',
        'None of it: all of it becomes heat',
      ],
      correctAnswer: 0,
      explanation: 'The battery delivers QV, but the capacitor stores only ½QV; the other half becomes heat in the resistance. A smaller resistor charges the capacitor faster but loses the same half, and a larger one loses the same half more slowly.',
    },
  ],
}
