/**
 * Circuits Part 4: the extra conceptual questions for each CONCEPT video
 * (videos 1, 3, 5, 7). Together with the shot list's three checkpoints they
 * give every concept video at least three questions spread over its sections
 * and three on its "Remember" section; circuits4-lesson.ts says which goes
 * where. Each one uses a new situation, so none repeats a shot-list
 * checkpoint, a worked example or an exit-quiz item. See
 * circuits1-recap-questions.ts for the rules.
 */
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'

export const RECAP: Record<number, CheckpointQuestion[]> = {
  // 1 · Capacitor Networks
  1: [
    {
      // on 06-shortcuts
      question: 'Four identical 12 μF capacitors are available. What is their equivalent capacitance when all four are in series, and when all four are in parallel?',
      options: ['48 μF in series, 3.0 μF in parallel', '3.0 μF in series, 48 μF in parallel', '12 μF in series, 48 μF in parallel', '3.0 μF in series, 12 μF in parallel'],
      correctAnswer: 1,
      explanation: 'For N identical capacitors, series gives C/N and parallel gives NC: 12/4 = 3.0 μF and 4 × 12 = 48 μF. In series the gaps stack; in parallel the plates join. The reversed option uses the resistor rules, and 12 μF would mean that combining them changed nothing.',
    },
    {
      // Remember
      question: 'A resistor R and a resistor 3R are in series across a battery. Separately, a capacitor C and a capacitor 3C are in series across the same battery. Which element in each pair takes the larger share of the voltage?',
      options: ['The 3R resistor and the 3C capacitor', 'The R resistor and the C capacitor', 'The 3R resistor and the C capacitor', 'The R resistor and the 3C capacitor'],
      correctAnswer: 2,
      explanation: 'Series resistors share the current, and V = IR, so the larger resistor takes more voltage. Series capacitors share the charge, and V = Q/C, so the smaller capacitor takes more voltage. The two pairs are mirror images, so the answer picks the larger R but the smaller C.',
    },
    {
      // Remember
      question: 'A student combines a 4.0 μF and a 12 μF capacitor in series and reports 16 μF. Which quick check shows that this cannot be right?',
      options: [
        'A series result must be smaller than the smallest one',
        'A series result must be larger than the largest one',
        'A series result must be the average of the two values',
        'A series result must be the same for any two values',
      ],
      correctAnswer: 0,
      explanation: 'Series capacitors combine by reciprocals, so the result is always below the smallest: here (4.0)(12)/(4.0 + 12) = 3.0 μF. Adding to get 16 μF is the parallel rule, and a parallel result is the one that comes out larger than the largest.',
    },
  ],
  // 3 · RC Circuits and the Time Constant
  3: [
    {
      // Remember
      question: 'A bulb is wired in series with a battery, a switch and an uncharged capacitor. What does the bulb do after the switch is closed?',
      options: [
        'It stays dark at first, then slowly brightens',
        'It lights at a steady brightness and stays lit',
        'It stays dark, since a capacitor blocks current',
        'It is brightest at once, then fades until dark',
      ],
      correctAnswer: 3,
      explanation: 'At the first instant the empty capacitor has no voltage across it and acts like a wire, so the current is at its largest and the bulb is brightest. As the capacitor fills, its voltage opposes the battery and the current dies away; when it is full the branch is open and the bulb is dark.',
    },
    {
      // Remember
      question: 'An uncharged capacitor charges toward 12 V through a resistor, with a time constant of 3.0 s. About what is the capacitor’s voltage 3.0 s after the switch closes?',
      options: ['About 4.4 V', 'About 6.0 V', 'About 7.6 V', 'About 12 V'],
      correctAnswer: 2,
      explanation: 'After one time constant a charging capacitor is about 63% of the way to its final value: 0.63 × 12 V ≈ 7.6 V. 4.4 V is the 37% that is still missing (the discharging number); 6.0 V treats τ as a half-time; and 12 V calls it full after one τ, which takes about five.',
    },
    {
      // Remember
      question: 'A switch in an RC circuit is moved from one position to another. Which quantity cannot change at the instant the switch moves?',
      options: [
        'The current through the capacitor’s branch',
        'The voltage across the capacitor’s plates',
        'The voltage across the series resistor',
        'The current that the battery supplies',
      ],
      correctAnswer: 1,
      explanation: 'The capacitor’s voltage is Q/C, and charge takes time to flow on or off the plates, so V_C cannot jump. The currents can change in an instant, and so can a resistor’s voltage, since V = IR follows the current.',
    },
  ],
  // 5 · The Membrane as an RC Circuit
  5: [
    {
      // on 04-stored-charge
      question: 'A neuron fires a single action potential. What happens to the concentration of sodium ions in the bulk of its cytosol?',
      options: [
        'It rises until it matches the level outside',
        'It roughly doubles, then is pumped back out',
        'It falls, since sodium rushes out of the cell',
        'It barely changes, since very few ions cross',
      ],
      correctAnswer: 3,
      explanation: 'The membrane voltage is set by a thin layer of excess charge at the membrane, Q = C_mV, and C_m is small. Flipping that layer takes only a tiny number of ions compared with what the cell holds, so the bulk concentrations barely move. Sodium enters during the upstroke; it does not leave.',
    },
    {
      // on 09-diameter-ms
      question: 'Two unmyelinated axons are identical except that axon X is wider than axon Y. Which conducts an action potential faster, and why?',
      options: [
        'X, since its interior resists current less',
        'Y, since its interior resists current less',
        'X, since its membrane has less capacitance',
        'Y, since its membrane leaks less current',
      ],
      correctAnswer: 0,
      explanation: 'A wider axon has a lower internal (axial) resistance, so current flows down the inside more easily and the signal spreads faster. Width and myelin are the two speed levers. A wider axon has more membrane, not less, so its capacitance per length is not lower.',
    },
    {
      // Remember
      question: 'In the circuit model of a patch of membrane, what does opening one more ion channel add?',
      options: [
        'One more capacitor in series with the bilayer',
        'One more resistor in series with the others',
        'One more resistor in parallel with the others',
        'One more capacitor in parallel with the bilayer',
      ],
      correctAnswer: 2,
      explanation: 'Each open channel is another path for ionic current across the insulating bilayer, so it is a resistor in parallel with the other channels and with the membrane capacitance. More parallel paths lower the membrane resistance R_m, which shortens τ = R_mC_m. The capacitance belongs to the bilayer and does not change.',
    },
    {
      // Remember
      question: 'Two identical small inputs reach a neuron 10 ms apart. Neither alone reaches threshold. Which membrane is more likely to reach threshold from the pair?',
      options: [
        'One with a long time constant, since the first input fades slowly',
        'One with a short time constant, since the voltage rises quickly',
        'Either one, since the time constant sets only the final voltage',
        'Neither one, since inputs that arrive at different times never add',
      ],
      correctAnswer: 0,
      explanation: 'With a long τ = R_mC_m the first input is still fading when the second arrives, so the two add (temporal summation) and can reach threshold. With a short τ the first has already faded away. The time constant sets how fast the voltage changes, not its final value.',
    },
  ],
  // 7 · Defibrillators: Slow Charge, Fast Shock
  7: [
    {
      // on 03-battery-limit
      question: 'A 3.0 V battery has an internal resistance of 0.50 Ω. What is the largest current it could ever drive, whatever is connected to it?',
      options: ['1.5 A', '3.5 A', '6.0 A', '60 A'],
      correctAnswer: 2,
      explanation: 'The current is ε/(R + r), which is largest when the outside resistance R is zero: ε/r = 3.0/0.50 = 6.0 A. That ceiling is why a small battery cannot deliver a shock directly. 1.5 A multiplies instead of dividing, and 3.5 A adds the two numbers.',
    },
    {
      // on 09-units
      question: 'Which combination of units is equal to a joule?',
      options: ['An ohm times a farad', 'A farad times a volt', 'A joule per second', 'A farad times a volt squared'],
      correctAnswer: 3,
      explanation: 'A farad is a coulomb per volt, so F·V² = (C/V)·V² = C·V, and a coulomb-volt is a joule, as in U = ½CV². An ohm times a farad is a second (τ = RC), a farad times a volt is a coulomb (Q = CV), and a joule per second is a watt.',
    },
    {
      // Remember
      question: 'What does a defibrillator’s shock do to a heart in ventricular fibrillation?',
      options: [
        'It supplies the energy the heart muscle needs to contract',
        'It depolarizes most of the heart muscle at the same moment',
        'It replaces the SA node as the heart’s pacemaker afterward',
        'It drives a steady current that makes each later beat stronger',
      ],
      correctAnswer: 1,
      explanation: 'A brief, strong current depolarizes most of the heart muscle at once, which stops the chaotic, out-of-step firing. That gives the SA node, the heart’s own pacemaker, the chance to take back control. The shock does not power the heartbeat, and it lasts only milliseconds.',
    },
    {
      // Remember
      question: 'A defibrillator’s capacitor is fixed. To store twice as much energy, by what factor must the charging voltage change?',
      options: ['It must be 4 times as large', 'It must be 2 times as large', 'It must be about 1.41 times as large', 'It must be about 0.71 times as large'],
      correctAnswer: 2,
      explanation: 'With C fixed, U = ½CV² goes as V², so V goes as the square root of U: twice the energy needs √2 ≈ 1.41 times the voltage. Doubling the voltage would store four times the energy.',
    },
  ],
}
