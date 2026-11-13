/**
 * Circuits Part 1: the three conceptual questions on each CONCEPT video's
 * "Remember" section (videos 1, 3, 5, 7). They come straight after the
 * video's required flashcards and the recap clip, and each one tests an idea
 * from those cards with a new situation, so none repeats a section
 * checkpoint, a worked example or an exit-quiz item.
 */
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'

export const RECAP: Record<number, CheckpointQuestion[]> = {
  // 1 · Current: Charge on the Move
  1: [
    {
      question: 'The same amount of charge passes a point in a wire, but in half the time. What happens to the current?',
      options: [
        'It doubles, since current is charge per time',
        'It halves, since less time has gone by',
        'It stays the same, since the charge is the same',
        'It quadruples, since the time enters squared',
      ],
      correctAnswer: 0,
      explanation: 'Current is a rate, I = ΔQ/Δt. The same ΔQ in half the Δt gives twice the current.',
    },
    {
      question: 'In a metal wire the electrons drift to the left. Which way does the conventional current point?',
      options: [
        'To the left, along the electron drift',
        'To the right, opposite the electron drift',
        'Both ways at once, since the wire is neutral',
        'Neither way, since electrons are negative',
      ],
      correctAnswer: 1,
      explanation: 'Conventional current is the direction positive charge would move. A negative charge moving left is the same current as a positive charge moving right.',
    },
    {
      question: 'Two ion channels carry the same current. One passes K⁺ ions and the other passes Ca²⁺ ions. How do the numbers of ions crossing each second compare?',
      options: [
        'The same number, since the current is the same',
        'Twice as many Ca²⁺ ions, since each carries 2e',
        'Half as many Ca²⁺ ions, since each carries 2e',
        'Four times as many K⁺ ions, since e is squared',
      ],
      correctAnswer: 2,
      explanation: 'The same current means the same charge per second, and N = ΔQ/q. Each Ca²⁺ carries 2e, so half as many ions deliver that charge.',
    },
  ],
  // 3 · Voltage: Energy per Charge
  3: [
    {
      question: 'One coulomb of charge passes through a 6 V battery, and one coulomb passes through a 12 V battery. How do the energies given to that coulomb compare?',
      options: [
        'The 6 V battery gives twice as much energy',
        'Both give the same energy to one coulomb',
        'It depends on the current each one drives',
        'The 12 V battery gives twice as much energy',
      ],
      correctAnswer: 3,
      explanation: 'Voltage is energy per charge, W = qV. One coulomb gains 6 J from the 6 V battery and 12 J from the 12 V battery.',
    },
    {
      question: 'The ground point of a circuit is moved from the battery’s − terminal to its + terminal. What happens to the voltage across each bulb?',
      options: [
        'Nothing; only the potential labels shift',
        'Each one reverses its sign but keeps its size',
        'Each one falls to zero at the new ground',
        'Each one rises by the battery voltage',
      ],
      correctAnswer: 0,
      explanation: 'Voltage is always a difference. Moving the ground shifts every potential by the same amount, so no difference changes.',
    },
    {
      question: 'Two points in a circuit are joined by an ideal wire that is carrying current. What is the voltage between the two points?',
      options: [
        'The battery voltage, since current is flowing',
        'Zero, since an ideal wire is at one potential',
        'It depends on how long the wire is',
        'It depends on how much current flows',
      ],
      correctAnswer: 1,
      explanation: 'An ideal wire is an equipotential: no voltage drops along it, whatever current it carries. Drops happen only across elements.',
    },
  ],
  // 5 · Resistance and Ohm's Law
  5: [
    {
      question: 'A resistor stays connected to the same battery while its resistance is doubled. What happens to the current through it?',
      options: [
        'It doubles, since V = IR and R has doubled',
        'It stays the same, since the battery sets it',
        'It halves, since I = V/R at a fixed voltage',
        'It falls to one quarter, since R is squared',
      ],
      correctAnswer: 2,
      explanation: 'The battery holds V fixed, so I = V/R: the current is inversely proportional to R. Twice the resistance gives half the current.',
    },
    {
      question: 'Two wires are made of the same metal and have the same thickness. Wire B is three times as long as wire A. How do their resistances compare?',
      options: [
        'B has one third of the resistance of A',
        'B has nine times the resistance of A',
        'They are equal, since the metal is the same',
        'B has three times the resistance of A',
      ],
      correctAnswer: 3,
      explanation: 'R = ρL/A. With the same ρ and A, resistance is proportional to length, so three times the length gives three times the resistance. (Nine times is for a wire STRETCHED to three times its length, which also thins it.)',
    },
    {
      question: 'On a graph of current (vertical axis) against voltage (horizontal axis), two ohmic resistors give straight lines through the origin. Which line belongs to the larger resistance?',
      options: [
        'The less steep line, since the slope is 1/R',
        'The steeper line, since the slope equals R',
        'Either one, since both pass through zero',
        'The longer line, since it reaches more volts',
      ],
      correctAnswer: 0,
      explanation: 'With current on the vertical axis, I = (1/R)V, so the slope is 1/R. A larger resistance gives a smaller slope: less current for each volt.',
    },
  ],
  // 7 · Series vs. Parallel Resistors
  7: [
    {
      question: 'Two resistors are connected so that both ends of one join both ends of the other. Which quantity must be the same for the two?',
      options: [
        'The current through each one',
        'The voltage across each one',
        'The power used by each one',
        'The resistance of each one',
      ],
      correctAnswer: 1,
      explanation: 'Both resistors join the same two nodes, so they are in parallel and share one voltage. Their currents are equal only if their resistances are.',
    },
    {
      question: 'A 10 Ω resistor and a 40 Ω resistor are connected in parallel. Before any calculation, what must be true of the equivalent resistance?',
      options: [
        'It is between 10 Ω and 40 Ω',
        'It is more than 40 Ω',
        'It is less than 10 Ω',
        'It is exactly 25 Ω',
      ],
      correctAnswer: 2,
      explanation: 'A parallel combination is always smaller than its smallest branch, because every added branch gives the current another path. Here it is (10)(40)/50 = 8 Ω.',
    },
    {
      question: 'Four identical resistors, each R, are connected in series and then rewired in parallel. What are the two equivalent resistances?',
      options: [
        'R/4 in series and 4R in parallel',
        '4R in series and 4R in parallel',
        '2R in series and R/2 in parallel',
        '4R in series and R/4 in parallel',
      ],
      correctAnswer: 3,
      explanation: 'n identical resistors give nR in series, where resistances add, and R/n in parallel, where the conductances add.',
    },
  ],
}
