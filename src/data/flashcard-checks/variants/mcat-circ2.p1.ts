import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-circ2`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`Give the symbol and the SI unit for current, for voltage and for resistance.`]: {
    kind: 'concept',
    more: [
      {
        question: r`A resistance is found by dividing a voltmeter reading of 6 V by an ammeter reading of 2 A. The unit of the result, the ohm, is the same as which combination of units?`,
        options: [r`One volt times ampere, V·A`, r`One ampere per volt, A/V`, r`One volt per ampere, V/A`, r`One ampere per second, A/s`],
        correctAnswer: 2,
        explanation: r`From V = IR, R = V/I, so the ohm is a volt per ampere: 6 V ÷ 2 A = 3 Ω. A volt times an ampere is a watt, the unit of power. An ampere per volt inverts the ratio, and an ampere per second is not a unit of any of the three quantities.`,
      },
      {
        question: r`A student labels a sketch of a lamp circuit with "12 A across the lamp", "0.5 V through the lamp" and "24 Ω for the lamp". Which correction makes the labels right?`,
        options: [r`Swap two units: 24 V for the lamp and 12 Ω across it`, r`Change the 24 Ω to 24 W and keep the other two labels`, r`Change nothing: all three labels carry the right units`, r`Swap two units: 12 V across it and 0.5 A through it`],
        correctAnswer: 3,
        explanation: r`Voltage is measured across a component in volts, and current flows through it in amperes, so the first two labels have their units exchanged. With the fix they agree with V = IR: 0.5 A × 24 Ω = 12 V. Resistance is correctly in ohms, so moving the ohm or replacing it with the watt, a unit of power, is wrong.`,
      },
    ],
  },
  [r`State Kirchhoff's junction rule. Which conservation law is it?`]: {
    kind: 'calc',
    more: [
      {
        question: r`On a circuit board, two traces carry 1.5 A and 2.5 A into a solder joint. Two other traces carry current away from the joint, and one of them carries 0.8 A. What current does the other outgoing trace carry?`,
        options: [r`4.8 A`, r`3.2 A`, r`4.0 A`, r`0.2 A`],
        correctAnswer: 1,
        explanation: r`Current in equals current out: 1.5 A + 2.5 A = 4.0 A enters, so the unknown trace carries 4.0 A − 0.8 A = 3.2 A. 4.8 A adds all three known currents, 4.0 A forgets the 0.8 A that leaves by the other trace, and 0.2 A treats the 1.5 A as leaving the joint.`,
      },
      {
        question: r`In a temperature sensor, 0.012 A flows into a node and leaves along two branches. One branch carries 7 mA. What current does the other branch carry?`,
        options: [r`19 mA`, r`0.5 mA`, r`5 mA`, r`12 mA`],
        correctAnswer: 2,
        explanation: r`0.012 A is 12 mA, and the two outgoing currents must add to it: 12 mA − 7 mA = 5 mA. 19 mA adds the branch current instead of subtracting it, 0.5 mA is a power-of-ten slip on the correct 5 mA, and 12 mA would leave nothing for the first branch.`,
      },
      {
        question: r`Three electrode leads meet at one node inside a nerve stimulator. The first lead brings 6 mA into the node and the second brings 3 mA into the node. What must the third lead carry?`,
        options: [r`9 mA, into the node`, r`3 mA, out of the node`, r`3 mA, into the node`, r`9 mA, out of the node`],
        correctAnswer: 3,
        explanation: r`Charge cannot pile up at the node, so the 6 mA + 3 mA = 9 mA that arrives must all leave on the third lead. A third current into the node would leave no way out for any charge. 3 mA comes from subtracting the two incoming currents, which would be right only if one of them were leaving.`,
      },
      {
        question: r`Four cables are bolted to one busbar in a fuse box. Two of them carry 7 A and 2 A away from the busbar, and a third brings 4 A to it. What is the current in the fourth cable?`,
        options: [r`5 A away from the busbar`, r`13 A toward the busbar`, r`5 A toward the busbar`, r`1 A away from the busbar`],
        correctAnswer: 2,
        explanation: r`A total of 7 A + 2 A = 9 A leaves, and only 4 A arrives on the third cable, so the fourth must bring in 9 A − 4 A = 5 A. Sending 5 A away would make 14 A out against 4 A in. 13 A adds all three currents, and 1 A subtracts both the 2 A and the 4 A from the 7 A.`,
      },
      {
        question: r`A fixed current of 20 A flows into a node that feeds 4 identical heater strips, so it divides equally among them. A fifth identical strip is connected to the same node and the same 20 A still flows in. By what factor does the current in each strip change?`,
        options: [r`1.25`, r`0.20`, r`0.80`, r`0.25`],
        correctAnswer: 2,
        explanation: r`The outgoing currents must add to 20 A. With 4 strips each carries 5 A, and with 5 strips each carries 4 A, so the factor is 4/5 = 0.80. 1.25 inverts the ratio, while 0.20 and 0.25 are each strip's share of the total (1/5 and 1/4), not the change.`,
      },
      {
        question: r`A current of 10 A flows into node X and divides: 6 A goes through a heater to node Y and the rest goes through a lamp to node Y. A separate wire brings another 3 A into node Y. One last wire leaves node Y. What current does it carry?`,
        options: [r`13 A`, r`10 A`, r`7 A`, r`19 A`],
        correctAnswer: 0,
        explanation: r`At X, 10 A in means 10 A out, so the lamp carries 10 A − 6 A = 4 A. At Y, 6 A + 4 A + 3 A = 13 A arrives and must all leave on the last wire. 10 A forgets the extra 3 A, 7 A subtracts it, and 19 A counts the 6 A twice.`,
      },
    ],
  },
  [r`State Kirchhoff's loop rule. Which conservation law is it?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A string of three indicator lights forms one loop with a single ideal battery. Voltmeters across the three lights read 2.5 V, 3.5 V and 6.0 V. What is the battery's voltage?`,
        options: [r`6.0 V`, r`4.0 V`, r`12 V`, r`0 V`],
        correctAnswer: 2,
        explanation: r`The rise in the battery must equal the total of the drops around the loop: 2.5 V + 3.5 V + 6.0 V = 12 V. 6.0 V is only the largest single drop, 4.0 V is the average of the three, and 0 V is the sum of all the changes around the loop, not the battery's voltage.`,
      },
      {
        question: r`A 9 V battery and a 3 V battery in one loop push current the same way through two resistors. The first resistor drops 7 V. What is the drop across the second resistor?`,
        options: [r`5 V`, r`2 V`, r`1 V`, r`19 V`],
        correctAnswer: 0,
        explanation: r`The two rises total 9 V + 3 V = 12 V, and the drops must match them, so the second resistor drops 12 V − 7 V = 5 V. 2 V leaves out the 3 V battery, 1 V subtracts the 3 V battery as if it opposed the other, and 19 V adds everything together.`,
      },
      {
        question: r`A 1.5 V cell powers three resistors connected in series in a single loop. The first two drop 400 mV and 350 mV. What is the drop across the third?`,
        options: [r`2250 mV`, r`1100 mV`, r`750 mV`, r`75 mV`],
        correctAnswer: 2,
        explanation: r`1.5 V is 1500 mV, and the drops must add to it: 1500 mV − 400 mV − 350 mV = 750 mV. 2250 mV adds the two known drops to the cell voltage, 1100 mV subtracts only the 400 mV drop, and 75 mV is a power-of-ten slip on the correct 750 mV.`,
      },
      {
        question: r`An ideal 12 V battery feeds resistor A, and after A the current divides between resistors B and C, which are connected in parallel with each other before the current returns to the battery. Resistor A drops 5 V. What is the voltage across resistor C?`,
        options: [r`7 V`, r`3.5 V`, r`5 V`, r`12 V`],
        correctAnswer: 0,
        explanation: r`Take the closed loop through the battery, A and C: +12 V − 5 V − V_C = 0, so V_C = 7 V. The loop through B gives the same 7 V for B. 3.5 V wrongly shares the 7 V between B and C as if they were in series, 5 V repeats the drop across A, and 12 V ignores A.`,
      },
      {
        question: r`A 20 V ideal supply and two heating elements form a single loop. The drop across the first element is three times the drop across the second. What is the drop across the first element?`,
        options: [r`15 V`, r`5 V`, r`60 V`, r`10 V`],
        correctAnswer: 0,
        explanation: r`Call the second drop x. The drops must add to the 20 V rise: 3x + x = 20 V, so x = 5 V and the first element drops 15 V. 5 V is the second element's drop, 60 V multiplies the supply voltage by three, and 10 V assumes the two elements share the voltage equally.`,
      },
      {
        question: r`A 15.0 V charger drives current backward through a rechargeable battery in a single loop, so the walk around the loop gains 15.0 V in the charger and loses the battery's voltage. The only other drop is 2.4 V in the connecting cables. What is the battery's voltage?`,
        options: [r`17.4 V`, r`12.6 V`, r`15.0 V`, r`2.4 V`],
        correctAnswer: 1,
        explanation: r`The changes around the loop sum to zero: +15.0 V − 2.4 V − V = 0, so V = 12.6 V. 17.4 V adds the cable drop to the charger voltage, 15.0 V ignores the cable drop, and 2.4 V is the cable drop itself.`,
      },
    ],
  },
  [r`Walking a loop, what do you record when you cross a resistor?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 50 Ω test load carries 0.4 A from terminal K to terminal L. A student writing a loop equation crosses the load from L to K. What potential change is recorded for the load?`,
        options: [r`−20 V`, r`+125 V`, r`+20 V`, r`−125 V`],
        correctAnswer: 2,
        explanation: r`The walk goes against the current, so the potential rises by IR = (0.4 A)(50 Ω) = 20 V and the entry is +20 V. −20 V is the entry for a walk with the current. The 125 V values come from dividing 50 by 0.4 instead of multiplying.`,
      },
      {
        question: r`A 2 kΩ resistor in an amplifier carries 3 mA from its top end to its bottom end. A loop walk crosses it from top to bottom. What is recorded for this resistor?`,
        options: [r`+6 V`, r`−6 V`, r`−6 mV`, r`+6 mV`],
        correctAnswer: 1,
        explanation: r`The walk goes with the current, so the entry is −IR = −(3 mA)(2 kΩ) = −6 V, since milliamperes times kilohms gives volts. +6 V is the entry for a walk against the current. The millivolt values leave out the factor of 10³ in the kilohm.`,
      },
      {
        question: r`Walking clockwise around a loop, a student correctly records −9 V on crossing a 6 Ω resistor. What current flows through that resistor?`,
        options: [r`1.5 A, counterclockwise`, r`1.5 A, clockwise`, r`54 A, clockwise`, r`54 A, counterclockwise`],
        correctAnswer: 1,
        explanation: r`A negative entry means the walk went with the current, so the current is clockwise, and its size is 9 V ÷ 6 Ω = 1.5 A. A counterclockwise current would have given +9 V on a clockwise walk. 54 A multiplies 9 by 6 instead of dividing.`,
      },
      {
        question: r`A loop walk crosses a heating coil against its 4 A current and the entry recorded is +10 V. What is the resistance of the coil?`,
        options: [r`40 Ω`, r`0.4 Ω`, r`2.5 Ω`, r`6 Ω`],
        correctAnswer: 2,
        explanation: r`Against the current the entry is +IR, so R = 10 V ÷ 4 A = 2.5 Ω. 40 Ω multiplies the two numbers, 0.4 Ω divides the current by the voltage, and 6 Ω subtracts them.`,
      },
      {
        question: r`In a two-loop circuit, a walk crosses a 3 Ω resistor in the direction of its 2 A current, and then crosses a 5 Ω resistor against that resistor's 1 A current. What total is recorded for these two resistors?`,
        options: [r`−11 V`, r`+11 V`, r`−1 V`, r`+1 V`],
        correctAnswer: 2,
        explanation: r`With the current the 3 Ω resistor gives −(2 A)(3 Ω) = −6 V, and against the current the 5 Ω resistor gives +(1 A)(5 Ω) = +5 V, for a total of −1 V. −11 V treats both as crossed with the current, +11 V treats both as crossed against it, and +1 V swaps the two signs.`,
      },
      {
        question: r`Crossing a resistor in the direction of its current, a student records −4 V. The current in the resistor is then tripled, and the student crosses it the opposite way. What is recorded now?`,
        options: [r`−12 V`, r`+7 V`, r`−7 V`, r`+12 V`],
        correctAnswer: 3,
        explanation: r`The size of the entry is IR, so tripling the current triples it to 12 V, and crossing against the current makes it positive: +12 V. −12 V keeps the old walking direction. The 7 V values add 3 to the 4 V instead of multiplying by 3.`,
      },
    ],
  },
  [r`Walking a loop, what do you record when you cross a source or an ideal wire?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A loop walk passes through two ideal cells one after the other: a 9 V cell entered at its + terminal and left at its − terminal, then a 1.5 V cell entered at its − terminal and left at its + terminal. What total is recorded for the two cells?`,
        options: [r`+7.5 V`, r`−10.5 V`, r`−7.5 V`, r`+10.5 V`],
        correctAnswer: 2,
        explanation: r`Crossing a source from + to − records −V, and from − to + records +V, so the total is −9 V + 1.5 V = −7.5 V. +7.5 V has both signs reversed. The 10.5 V values give the two cells the same sign, although they are crossed in opposite senses.`,
      },
      {
        question: r`An ideal wire carries 5 A from point P to point Q. A loop walk follows the wire from P to Q. What is recorded for this stretch, and what does it say about the two points?`,
        options: [r`−5 V: Q is lower because current flows to it`, r`+5 V: Q is higher because current flows to it`, r`0 V: but only when the wire carries no current`, r`0 V: P and Q are at the same potential`],
        correctAnswer: 3,
        explanation: r`An ideal wire has no resistance, so the drop IR is zero whatever current it carries, and its two ends are at one potential. The ±5 V answers treat the 5 A current as if it were a voltage. The entry is zero with or without current, so the condition in the last answer is wrong.`,
      },
    ],
  },
  [r`A current you guessed comes out negative. What does that mean?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student guesses that the current in a branch runs upward and the algebra returns −0.4 A. The branch contains a 10 Ω resistor and she needs the power it dissipates. What is the best next step?`,
        options: [r`Start over with a downward guess before going on`, r`Take 0.4 A flowing downward and get 1.6 W`, r`Take −0.4 A and report a negative power, −1.6 W`, r`Drop the branch, since it carries no real current`],
        correctAnswer: 1,
        explanation: r`A negative result means the current runs opposite to the guess with the same size: 0.4 A downward. Then P = I²R = (0.4 A)²(10 Ω) = 1.6 W, which is positive either way because the current is squared. Starting over wastes work that is already correct, and the sign says nothing about the current being absent.`,
      },
      {
        question: r`Two students solve the same single loop without errors. The first guesses a clockwise current and gets +2 A. The second guesses a counterclockwise current. What does the second student get?`,
        options: [r`+2 A: the current is clockwise`, r`−2 A: the current is counterclockwise`, r`+2 A: the current is counterclockwise`, r`−2 A: the current is clockwise`],
        correctAnswer: 3,
        explanation: r`The real current is 2 A clockwise, as the first student's positive answer shows. The second student's guess is opposite to it, so the algebra returns −2 A, and the minus sign means "opposite to the guess", which is clockwise. A positive answer would mean the counterclockwise guess was right, and the circuit cannot carry both.`,
      },
    ],
  },
  [r`How do two sources in one loop combine?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 9 V battery and a 6 V battery are connected in one loop so that both push current the same way through a 2 Ω resistor and a 3 Ω resistor. Treating the batteries as ideal, what current flows?`,
        options: [r`0.6 A`, r`7.5 A`, r`3 A`, r`5 A`],
        correctAnswer: 2,
        explanation: r`Sources pushing the same way add: 9 V + 6 V = 15 V, and the total resistance is 2 Ω + 3 Ω = 5 Ω, so I = 15 V ÷ 5 Ω = 3 A. 0.6 A subtracts the voltages, 7.5 A uses only the 2 Ω resistor and 5 A uses only the 3 Ω resistor.`,
      },
      {
        question: r`A technician wires an 18 V supply and a 6 V cell into one circuit with the cell backward, so the two oppose each other. A 2 Ω motor winding and a 4 Ω lamp complete the single path. Treating both sources as ideal, what current flows?`,
        options: [r`4 A`, r`3 A`, r`6 A`, r`2 A`],
        correctAnswer: 3,
        explanation: r`Opposing sources subtract: 18 V − 6 V = 12 V, and the total resistance is 2 Ω + 4 Ω = 6 Ω, so I = 12 V ÷ 6 Ω = 2 A. 4 A adds the two voltages, 3 A divides by the 4 Ω alone and 6 A divides by the 2 Ω alone.`,
      },
      {
        question: r`A 12 V ideal battery and a second ideal cell push current the same way around a loop whose total resistance is 10 Ω. The current is 1.5 A. What is the voltage of the second cell?`,
        options: [r`3 V`, r`15 V`, r`27 V`, r`8 V`],
        correctAnswer: 0,
        explanation: r`The net voltage is IR = (1.5 A)(10 Ω) = 15 V, and since the sources add, the second cell supplies 15 V − 12 V = 3 V. 15 V is the net voltage of both sources, 27 V adds the 12 V again, and 8 V divides 12 by 1.5.`,
      },
      {
        question: r`A penlight holds two ideal 1.5 V cells in series, both pushing current the same way through one bulb. The current is 0.2 A. What is the resistance of the bulb?`,
        options: [r`15 Ω`, r`7.5 Ω`, r`0.6 Ω`, r`30 Ω`],
        correctAnswer: 0,
        explanation: r`The cells add to 3.0 V, so R = V_net ÷ I = 3.0 V ÷ 0.2 A = 15 Ω. 7.5 Ω uses only one cell, 0.6 Ω multiplies 3.0 by 0.2, and 30 Ω doubles the voltage a second time.`,
      },
      {
        question: r`In a sensor circuit a 9 V ideal battery and a 3 V ideal battery oppose each other in one loop that also contains a 2 kΩ and a 1 kΩ resistor. What current flows?`,
        options: [r`4 mA`, r`2 mA`, r`2 A`, r`18 mA`],
        correctAnswer: 1,
        explanation: r`The net voltage is 9 V − 3 V = 6 V and the total resistance is 3 kΩ, so I = 6 V ÷ 3 kΩ = 2 mA. 4 mA adds the two voltages, 2 A ignores the kilo prefix, and 18 mA multiplies 6 by 3.`,
      },
      {
        question: r`A 12 V and a 4 V ideal battery push current the same way around a loop of fixed total resistance. The 4 V battery is then turned around so that it opposes the 12 V battery. What happens to the loop current?`,
        options: [r`It falls to 1/2 of its first value`, r`It falls to 1/4 of its first value`, r`It falls to 1/3 of its first value`, r`It rises to 2 times its first value`],
        correctAnswer: 0,
        explanation: r`The net voltage goes from 12 V + 4 V = 16 V to 12 V − 4 V = 8 V, and with the resistance fixed the current follows it: 8/16 = 1/2. 1/4 compares the 4 V battery with the 16 V total, 1/3 compares 4 V with 12 V, and doubling inverts the ratio.`,
      },
    ],
  },
  [r`With the − terminal grounded, how does the potential change around a series loop?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A supply's negative side is grounded. A probe moved along a chain of three heater strips, starting at the positive side and following the current, reads 30 V, then 25 V, then 10 V, then 0 V. Which strip has the largest resistance?`,
        options: [r`The first, which starts at the highest potential`, r`The third, which ends on the grounded side`, r`The second, which takes the 15 V step`, r`The first, which takes the smallest step of 5 V`],
        correctAnswer: 2,
        explanation: r`The same current passes through all three, so the largest strip has the largest drop IR. The steps are 5 V, 15 V and 10 V, so the second strip is the largest. How high a strip sits above ground, or whether it touches the grounded side, says nothing about its resistance, and the smallest step marks the smallest resistance.`,
      },
      {
        question: r`A grounded-negative supply powers a string of three unequal heater strips connected in series. Which statement about the potential along the string, followed in the direction of the current, is INCORRECT?`,
        options: [r`The largest strip takes the largest step down in potential`, r`The steps down add up to the full voltage of the supply`, r`The wire back to the negative side sits at a level of 0 V`, r`The potential climbs a step at each strip the current passes`],
        correctAnswer: 3,
        explanation: r`Following the current, the potential falls at each strip by IR; it never climbs there. The only climb is inside the supply. The other three statements are true: the biggest resistance takes the biggest step, the steps total the supply voltage, and the potential lands back on 0 V at the grounded side.`,
      },
    ],
  },
  [r`How do you write the loop equation for a single loop?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 24 V ideal supply and three resistors of 3 Ω, 4 Ω and 5 Ω form one loop. Walking with the current from the supply's − terminal gives +24 − 3I − 4I − 5I = 0. What is the current I?`,
        options: [r`8 A`, r`6 A`, r`2 A`, r`4.8 A`],
        correctAnswer: 2,
        explanation: r`Collecting terms gives 24 = 12I, so I = 2 A. 8 A divides the 24 V by the 3 Ω alone, 6 A by the 4 Ω alone and 4.8 A by the 5 Ω alone, but all three resistors carry the same current and all three terms belong in the equation.`,
      },
      {
        question: r`A 15 V cell and a 6 V cell oppose each other in one loop with a single 3 Ω resistor. You walk the loop in the direction of the current I, which the larger cell sets, starting by crossing the 15 V cell from − to +. Which equation do you write?`,
        options: [r`+15 + 6 − 3I = 0`, r`+15 − 6 + 3I = 0`, r`−15 − 6 − 3I = 0`, r`+15 − 6 − 3I = 0`],
        correctAnswer: 3,
        explanation: r`The 15 V cell is crossed from − to + (+15), the opposing 6 V cell is then crossed from + to − (−6), and the resistor is crossed with the current (−3I). Writing +6 treats the cells as pushing the same way, +3I is the entry for walking against the current, and −15 crosses the first cell the wrong way.`,
      },
      {
        question: r`A 12 V ideal battery drives 2 A through a 4 Ω speaker and an unknown resistor R in a single loop. Writing the loop equation +12 − (2)(4) − (2)R = 0 and solving, what is R?`,
        options: [r`6 Ω`, r`2 Ω`, r`10 Ω`, r`4 Ω`],
        correctAnswer: 1,
        explanation: r`The equation gives 12 − 8 − 2R = 0, so 2R = 4 and R = 2 Ω. 6 Ω is the total resistance of the loop (12 V ÷ 2 A), not R alone. 10 Ω subtracts the current from the voltage, and 4 Ω is the voltage left for R, not its resistance.`,
      },
      {
        question: r`A 9 V ideal battery, a 2 kΩ resistor and a 4 kΩ resistor form one loop. With I in milliamperes and resistances in kilohms, walking with the current gives +9 − 2I − 4I = 0. What is I?`,
        options: [r`1.5 mA`, r`4.5 mA`, r`2.25 mA`, r`54 mA`],
        correctAnswer: 0,
        explanation: r`Collecting terms gives 9 = 6I, so I = 1.5 mA. 4.5 mA keeps only the 2 kΩ term and 2.25 mA keeps only the 4 kΩ term, though both resistors are in the loop. 54 mA multiplies 9 by 6 instead of dividing.`,
      },
      {
        question: r`A loop contains one ideal battery of voltage V, a 10 Ω bulb and a 14 Ω resistor, and it carries 0.5 A. Walking with the current, the loop equation is +V − (0.5)(10) − (0.5)(14) = 0. What is V?`,
        options: [r`48 V`, r`12 V`, r`2 V`, r`24 V`],
        correctAnswer: 1,
        explanation: r`The equation gives V = 5 V + 7 V = 12 V. 48 V divides the total resistance of 24 Ω by 0.5 instead of multiplying, 2 V subtracts the two drops instead of adding them, and 24 V is the number of ohms in the loop, not the voltage.`,
      },
      {
        question: r`A 12 V ideal battery, a 3 Ω resistor, a 4 V ideal battery wired to oppose the first, and a 5 Ω resistor form one loop. Walking with the current gives +12 − 3I − 4 − 5I = 0. What is I?`,
        options: [r`2 A`, r`1.5 A`, r`4 A`, r`1 A`],
        correctAnswer: 3,
        explanation: r`Collecting terms gives 8 = 8I, so I = 1 A. 2 A adds the 4 V battery instead of subtracting it (16 ÷ 8), 1.5 A leaves the 4 V battery out (12 ÷ 8), and 4 A divides the net 8 V by the difference of the two resistances.`,
      },
    ],
  },
  [r`Once you have $I$, how do you find each drop, and how do you check them?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An ideal battery drives 0.5 A through an 8 Ω buzzer and a 16 Ω lamp connected in a single loop. What is the voltage across each, and what must the battery's voltage be?`,
        options: [r`16 V and 32 V; battery 48 V`, r`4 V and 8 V; battery 12 V`, r`4 V and 8 V; battery 8 V`, r`6 V and 6 V; battery 12 V`],
        correctAnswer: 1,
        explanation: r`Each drop is IR: (0.5 A)(8 Ω) = 4 V and (0.5 A)(16 Ω) = 8 V, and the drops add to the battery voltage, 12 V. The 16 V and 32 V values divide by the current instead of multiplying. A battery of 8 V matches only the larger drop, and equal 6 V drops would need equal resistances.`,
      },
      {
        question: r`A student solves a single loop made of an 18 V ideal battery, a 2 Ω resistor and a 5 Ω resistor and reports a current of 3 A. What does checking the drops show?`,
        options: [r`The drops total 21 V, not 18 V, so 3 A is wrong`, r`The drops total 18 V, which agrees with 3 A`, r`The drops total 21 V, which agrees with 3 A`, r`The drops total 7 V, not 18 V, so 3 A is wrong`],
        correctAnswer: 0,
        explanation: r`With 3 A the drops would be (3 A)(2 Ω) = 6 V and (3 A)(5 Ω) = 15 V, a total of 21 V. The drops must add back to the 18 V source, so the reported current is wrong. A total of 18 V is what a correct answer would give, and 7 V is the sum of the resistances, not of the drops.`,
      },
      {
        question: r`A current of 2 mA flows around one loop through three resistors of 1 kΩ, 1.5 kΩ and 2 kΩ, driven by one ideal source. What is the drop across the 1.5 kΩ resistor, and what is the source voltage?`,
        options: [r`3 V; source 3 V`, r`3 mV; source 9 mV`, r`3 V; source 9 V`, r`0.75 V; source 9 V`],
        correctAnswer: 2,
        explanation: r`The drop is IR = (2 mA)(1.5 kΩ) = 3 V. The three drops are 2 V, 3 V and 4 V, which add to the source voltage of 9 V. A source of 3 V counts only one drop, the millivolt answers drop the factor of 10³ in the kilohm, and 0.75 V divides 1.5 by 2.`,
      },
      {
        question: r`A 20 V and an 8 V ideal source oppose each other in one loop with a 1 Ω and a 5 Ω resistor, and the loop current is 2 A. What is the drop across the 5 Ω resistor, and what must the two drops total?`,
        options: [r`10 V; the drops total 28 V`, r`10 V; the drops total 20 V`, r`10 V; the drops total 12 V`, r`2 V; the drops total 12 V`],
        correctAnswer: 2,
        explanation: r`The drop is (2 A)(5 Ω) = 10 V, and with the 2 V across the 1 Ω resistor the drops total 12 V, the net source voltage 20 V − 8 V. A total of 28 V adds the opposing sources, 20 V ignores the smaller source, and 2 V is the drop across the 1 Ω resistor.`,
      },
      {
        question: r`A 30 V ideal source drives 2 A around one loop through a 3 Ω resistor, a 5 Ω resistor and a third resistor whose value is unknown. What is the drop across the third resistor, and what is its resistance?`,
        options: [r`14 V, so it is 7 Ω`, r`16 V, so it is 8 Ω`, r`14 V, so it is 28 Ω`, r`30 V, so it is 15 Ω`],
        correctAnswer: 0,
        explanation: r`The known drops are (2 A)(3 Ω) = 6 V and (2 A)(5 Ω) = 10 V. The drops must total 30 V, so the third is 30 V − 16 V = 14 V and R = 14 V ÷ 2 A = 7 Ω. 16 V is the sum of the two known drops, 28 Ω multiplies 14 by 2, and 30 V gives the whole source voltage to one resistor.`,
      },
      {
        question: r`A 3 Ω resistor and a 9 Ω resistor are part of the same single loop. A voltmeter across the 3 Ω resistor reads 4.5 V. What does it read across the 9 Ω resistor?`,
        options: [r`1.5 V`, r`13.5 V`, r`4.5 V`, r`40.5 V`],
        correctAnswer: 1,
        explanation: r`The loop current is 4.5 V ÷ 3 Ω = 1.5 A, and it is the same in both resistors, so the 9 Ω resistor drops (1.5 A)(9 Ω) = 13.5 V. 1.5 V inverts the ratio of resistances (or reports the current), 4.5 V assumes equal drops, and 40.5 V multiplies 4.5 by 9.`,
      },
    ],
  },
  [r`How do you find the potential at each node?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 V car battery, treated as ideal, has its − post bonded to the chassis, which is taken as 0 V. A current of 1 A leaves the + post through a 2 Ω fuse link, then a 4 Ω fan motor, then a 6 Ω lamp. What does a voltmeter probe read at the point where the fuse link meets the fan motor?`,
        options: [r`2 V`, r`6 V`, r`12 V`, r`10 V`],
        correctAnswer: 3,
        explanation: r`Start at 12 V on the + post and subtract the first drop: 12 V − (1 A)(2 Ω) = 10 V. 2 V is the drop itself, not the potential. 6 V is the potential after the fan motor, and 12 V ignores the drop in the fuse link.`,
      },
      {
        question: r`A 20 V ideal supply with its − terminal at 0 V drives 0.2 A from its + terminal through a 10 Ω, then a 30 Ω, then a 60 Ω heater strip. What is the potential at the point between the 30 Ω and the 60 Ω strips?`,
        options: [r`8 V`, r`12 V`, r`18 V`, r`6 V`],
        correctAnswer: 1,
        explanation: r`The drops are (0.2 A)(10 Ω) = 2 V and (0.2 A)(30 Ω) = 6 V, so the potential is 20 V − 2 V − 6 V = 12 V. 8 V is the total of the two drops, not what is left. 18 V subtracts only the first drop, and 6 V is the drop across the 30 Ω strip alone.`,
      },
      {
        question: r`In a thermometer circuit, an 18 V ideal supply with its negative side at 0 V is wired to a 2 kΩ fixed resistor followed by a 7 kΩ thermistor, with the fixed resistor on the positive side. What does a probe read at the point where the two meet?`,
        options: [r`14 V`, r`4 V`, r`9 V`, r`18 V`],
        correctAnswer: 0,
        explanation: r`The current is 18 V ÷ 9 kΩ = 2 mA, so the 2 kΩ resistor drops (2 mA)(2 kΩ) = 4 V and the point sits at 18 V − 4 V = 14 V. 4 V is the drop, not the potential. 9 V assumes the two parts share the voltage equally, and 18 V ignores the drop.`,
      },
      {
        question: r`The − terminal of a 10 V ideal supply is at 0 V. A current of 2 A flows from the + terminal through a resistor R to a node whose potential is measured as 4 V. What is R?`,
        options: [r`3 Ω`, r`2 Ω`, r`5 Ω`, r`12 Ω`],
        correctAnswer: 0,
        explanation: r`The node is at 10 V minus the drop, so the drop across R is 10 V − 4 V = 6 V and R = 6 V ÷ 2 A = 3 Ω. 2 Ω uses the node potential of 4 V as if it were the drop, 5 Ω uses the whole 10 V, and 12 Ω multiplies 6 by 2.`,
      },
      {
        question: r`A series chain carries 1.5 A, and the battery's − terminal is grounded. The first resistor after the + terminal is 4 Ω, and a probe at the point just after it reads 5 V. What is the potential of the + terminal?`,
        options: [r`6 V`, r`5 V`, r`7.5 V`, r`11 V`],
        correctAnswer: 3,
        explanation: r`The point after the resistor is the + terminal's potential minus the drop, so the + terminal is at 5 V + (1.5 A)(4 Ω) = 5 V + 6 V = 11 V. 6 V is only the drop, 5 V ignores the drop, and 7.5 V multiplies the reading by the current.`,
      },
      {
        question: r`A 9 V ideal cell with its negative side at 0 V pushes 0.5 mA through a chain of sensors, starting from the positive side: 2 kΩ, then 6 kΩ, then 10 kΩ. What does a voltmeter probe read just after the 6 kΩ sensor?`,
        options: [r`5 V`, r`4 V`, r`8 V`, r`3 V`],
        correctAnswer: 0,
        explanation: r`The first two drops are (0.5 mA)(2 kΩ) = 1 V and (0.5 mA)(6 kΩ) = 3 V, so the potential is 9 V − 1 V − 3 V = 5 V. The last 5 V is then dropped in the 10 kΩ sensor, landing on 0 V. 4 V is the sum of the two drops, 8 V subtracts only the first, and 3 V is the 6 kΩ drop alone.`,
      },
    ],
  },
  [r`Two sources oppose each other in one loop. What is the net voltage, and which way does the current run?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 9 V ideal battery and a 6 V ideal battery are wired into one loop so that they oppose each other. The total resistance of the loop is 6 Ω. What are the net voltage and the current?`,
        options: [r`15 V net; 2.5 A`, r`3 V net; 2 A`, r`15 V net; 0.4 A`, r`3 V net; 0.5 A`],
        correctAnswer: 3,
        explanation: r`Opposing sources subtract: 9 V − 6 V = 3 V, and I = 3 V ÷ 6 Ω = 0.5 A. A net of 15 V adds the sources as if they pushed the same way. 2 A divides the resistance by the voltage, and 0.4 A does the same with the wrong net voltage.`,
      },
      {
        question: r`In a loop diagram, a 4 V ideal cell is placed so that it alone would push current clockwise, and a 10 V ideal cell so that it alone would push current counterclockwise. The only resistance is 2 Ω. What current flows?`,
        options: [r`3 A counterclockwise`, r`3 A clockwise`, r`7 A counterclockwise`, r`7 A clockwise`],
        correctAnswer: 0,
        explanation: r`The net voltage is the difference, 10 V − 4 V = 6 V, so I = 6 V ÷ 2 Ω = 3 A, and it runs the way the larger source pushes, counterclockwise. The clockwise answers follow the weaker cell. 7 A adds the two voltages, which is right only when the sources push the same way.`,
      },
      {
        question: r`A 12 V ideal battery and a weaker ideal cell oppose each other in a loop whose total resistance is 8 Ω. The current is 1 A, in the direction the 12 V battery pushes. What is the voltage of the weaker cell?`,
        options: [r`4 V`, r`20 V`, r`8 V`, r`1.5 V`],
        correctAnswer: 0,
        explanation: r`The net voltage is IR = (1 A)(8 Ω) = 8 V, and it is the difference of the sources, so the weaker cell is 12 V − 8 V = 4 V. 20 V adds the 8 V to the 12 V, which would make it the stronger source. 8 V is the net voltage itself, and 1.5 V divides 12 by 8.`,
      },
      {
        question: r`In a stimulator circuit a 9 V ideal source is opposed by a 1.5 V ideal cell, and the loop's total resistance is 2.5 kΩ. What current flows?`,
        options: [r`4.2 mA`, r`3 A`, r`3.6 mA`, r`3 mA`],
        correctAnswer: 3,
        explanation: r`The net voltage is 9 V − 1.5 V = 7.5 V, so I = 7.5 V ÷ 2.5 kΩ = 3 mA. 4.2 mA adds the two voltages (10.5 V), 3 A ignores the kilo prefix, and 3.6 mA leaves the opposing cell out altogether.`,
      },
      {
        question: r`A 20 V ideal source is opposed by a 5 V ideal source in a loop of fixed resistance. The 5 V source is replaced with a 10 V ideal source that still opposes the 20 V source. What happens to the loop current?`,
        options: [r`It rises to 3/2 of its first value`, r`It falls to 1/2 of its first value`, r`It falls to 2/3 of its first value`, r`It rises to 6/5 of its first value`],
        correctAnswer: 2,
        explanation: r`The net voltage is the difference, which goes from 20 V − 5 V = 15 V to 20 V − 10 V = 10 V, and the current follows it: 10/15 = 2/3. 3/2 inverts the ratio, 1/2 compares the two opposing sources (5 V and 10 V) instead, and 6/5 adds the sources (25 V to 30 V).`,
      },
      {
        question: r`A 16 V ideal charger is connected so that it opposes a 12 V battery, treated as ideal, in a single loop. What total loop resistance limits the charging current to 0.5 A?`,
        options: [r`56 Ω`, r`8 Ω`, r`32 Ω`, r`2 Ω`],
        correctAnswer: 1,
        explanation: r`The net voltage is 16 V − 12 V = 4 V, so R = 4 V ÷ 0.5 A = 8 Ω. 56 Ω adds the two voltages (28 V), 32 Ω uses the charger's 16 V alone, and 2 Ω multiplies 4 by 0.5 instead of dividing.`,
      },
    ],
  },
  [r`You walk the loop against the current instead. What changes?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Walking a loop WITH the current, a student records +9 V for the battery, then −3 V and −6 V for two resistors. She then walks the same loop AGAINST the current. What does she record for the same three elements?`,
        options: [r`−9 V, −3 V and −6 V, a sum of −18 V`, r`−9 V, +3 V and +6 V, a sum of zero`, r`+9 V, +3 V and +6 V, a sum of +18 V`, r`+9 V, −3 V and −6 V, a sum of zero`],
        correctAnswer: 1,
        explanation: r`Reversing the walk flips every sign: the battery is now crossed from + to − (−9 V) and each resistor is crossed against the current (+3 V and +6 V), and the sum is still zero. Flipping only the battery or only the resistors gives a sum of ±18 V, which no closed loop can have. Leaving all three unchanged describes the first walk.`,
      },
      {
        question: r`One student walks a loop with the current and solves the loop equation to get I = 2 A. A classmate keeps the same current arrow but walks the same loop the opposite way. If the classmate makes no errors, what does the equation give?`,
        options: [r`I = −2 A, as the walk was turned around`, r`I = 0.5 A, as the resistor terms inverted`, r`No answer, as the sum no longer closes`, r`I = 2 A again, as every term changed sign`],
        correctAnswer: 3,
        explanation: r`Walking the other way multiplies the whole equation by −1, and an equation multiplied through by −1 has the same solution, so I = 2 A again. The sign of I depends on the current arrow, not on the walking direction. Nothing is inverted, and the sum closes to zero for either direction.`,
      },
    ],
  },
  [r`How is the drop across a resistor different from the potential at the node after it?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A current of 0.5 A flows through a 20 Ω resistor. The node the current comes from is at 24 V above ground. What are the drop across the resistor and the potential of the node after it?`,
        options: [r`Drop 10 V; node at 10 V`, r`Drop 10 V; node at 14 V`, r`Drop 14 V; node at 10 V`, r`Drop 10 V; node at 34 V`],
        correctAnswer: 1,
        explanation: r`The drop is IR = (0.5 A)(20 Ω) = 10 V, and the node after sits at 24 V − 10 V = 14 V. Putting the node at 10 V confuses the drop with the potential, swapping the two numbers mixes up which is which, and 34 V adds the drop although potential falls in the direction of the current.`,
      },
      {
        question: r`The nodes on either side of a 5 Ω resistor are at 18 V and 8 V above ground. What current flows through the resistor?`,
        options: [r`2 A`, r`3.6 A`, r`1.6 A`, r`5.2 A`],
        correctAnswer: 0,
        explanation: r`The drop is the difference of the node potentials, 18 V − 8 V = 10 V, so I = 10 V ÷ 5 Ω = 2 A. 3.6 A and 1.6 A divide a single node potential (18 V or 8 V) by the resistance, as if it were the drop, and 5.2 A divides the sum of the two.`,
      },
      {
        question: r`A current of 4 mA flows through a 1.5 kΩ resistor in a sensor. The node the current enters from is at 9 V above ground. What is the potential of the node after the resistor?`,
        options: [r`6 V`, r`3 V`, r`15 V`, r`7.5 V`],
        correctAnswer: 1,
        explanation: r`The drop is (4 mA)(1.5 kΩ) = 6 V, so the node after sits at 9 V − 6 V = 3 V. 6 V is the drop, not the node potential. 15 V adds the drop, and 7.5 V subtracts the 1.5 from the 9 without finding the drop.`,
      },
      {
        question: r`The node before a resistor is at 12 V above ground and the node after it is at 9 V. The resistor carries 0.6 A. What is its resistance?`,
        options: [r`15 Ω`, r`20 Ω`, r`1.8 Ω`, r`5 Ω`],
        correctAnswer: 3,
        explanation: r`The drop is the difference, 12 V − 9 V = 3 V, so R = 3 V ÷ 0.6 A = 5 Ω. 15 Ω and 20 Ω divide a node potential (9 V or 12 V) by the current, as if a potential measured from ground were the drop. 1.8 Ω multiplies 3 by 0.6.`,
      },
      {
        question: r`A node at 20 V above ground feeds 2 A through a 3 Ω resistor and then through a 4 Ω resistor. What are the drop across the 4 Ω resistor and the potential of the node after it?`,
        options: [r`Drop 8 V; node at 12 V`, r`Drop 8 V; node at 6 V`, r`Drop 14 V; node at 6 V`, r`Drop 6 V; node at 14 V`],
        correctAnswer: 1,
        explanation: r`The 3 Ω resistor drops 6 V, taking the potential to 14 V; the 4 Ω resistor drops (2 A)(4 Ω) = 8 V, taking it to 6 V. A node at 12 V forgets the first drop. 14 V is the total fall from the start, not the drop across the 4 Ω alone, and the last answer describes the 3 Ω resistor.`,
      },
      {
        question: r`A current of 1.5 A flows through a 6 Ω resistor, and the node AFTER the resistor is at 5 V above ground. What is the potential of the node the current comes from?`,
        options: [r`14 V`, r`9 V`, r`4 V`, r`1 V`],
        correctAnswer: 0,
        explanation: r`The drop is (1.5 A)(6 Ω) = 9 V, and the node before is higher than the node after by that amount: 5 V + 9 V = 14 V. 9 V is the drop itself, 4 V subtracts the 5 V from the drop, and 1 V divides 6 by 1.5 and subtracts.`,
      },
    ],
  },
  [r`What do the prefixes in mA and kΩ mean, and what do you get when you multiply mA by kΩ?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A current of 5 mA flows through a 2 kΩ resistor in a hearing-aid amplifier. What is the voltage across the resistor?`,
        options: [r`10 V`, r`10 mV`, r`10 kV`, r`2.5 V`],
        correctAnswer: 0,
        explanation: r`Milliamperes times kilohms gives volts, because 10⁻³ and 10³ cancel: (5 mA)(2 kΩ) = 10 V. 10 mV keeps the milli prefix and 10 kV keeps the kilo prefix, as if only one of them applied. 2.5 V divides 5 by 2.`,
      },
      {
        question: r`A voltmeter reads 9 V across a resistor that carries 3 mA. What is the resistance?`,
        options: [r`3 Ω`, r`27 kΩ`, r`0.33 kΩ`, r`3 kΩ`],
        correctAnswer: 3,
        explanation: r`Volts divided by milliamperes gives kilohms: 9 V ÷ 3 mA = 3 kΩ (9 ÷ 0.003 = 3000 Ω). 3 Ω forgets that the current is in milliamperes, 27 kΩ multiplies instead of dividing, and 0.33 kΩ inverts the division.`,
      },
      {
        question: r`A 12 kΩ resistor in a touch sensor has 6 V across it. What current flows through it?`,
        options: [r`0.5 mA`, r`0.5 A`, r`2 mA`, r`72 mA`],
        correctAnswer: 0,
        explanation: r`Volts divided by kilohms gives milliamperes: 6 V ÷ 12 kΩ = 0.5 mA. 0.5 A ignores the kilo prefix, 2 mA inverts the division, and 72 mA multiplies 6 by 12.`,
      },
      {
        question: r`A pacemaker delivers a 2.5 mA pulse through tissue with a resistance of 800 Ω. What voltage appears across the tissue?`,
        options: [r`2000 V`, r`2 mV`, r`2 V`, r`320 V`],
        correctAnswer: 2,
        explanation: r`800 Ω is 0.8 kΩ, so V = (2.5 mA)(0.8 kΩ) = 2 V; in base units, 0.0025 A × 800 Ω = 2 V. 2000 V multiplies 2.5 by 800 without converting the milliamperes, 2 mV divides by an extra factor of 10³, and 320 V divides 800 by 2.5.`,
      },
      {
        question: r`A current of 250 μA flows through a skin electrode contact of 20 kΩ. What is the voltage across the contact?`,
        options: [r`5000 V`, r`5 V`, r`5 mV`, r`12.5 V`],
        correctAnswer: 1,
        explanation: r`250 μA is 0.25 mA, and (0.25 mA)(20 kΩ) = 5 V; in base units, 0.00025 A × 20 000 Ω = 5 V. 5000 V treats the 250 as milliamperes, 5 mV ignores the kilo prefix on the resistance, and 12.5 V divides 250 by 20.`,
      },
      {
        question: r`A resistor in a monitor carries 2 mA when the voltage across it is 8 V. The voltage is raised to 20 V. What current flows now?`,
        options: [r`0.8 mA`, r`5 mA`, r`5 A`, r`80 mA`],
        correctAnswer: 1,
        explanation: r`The resistance is 8 V ÷ 2 mA = 4 kΩ, so at 20 V the current is 20 V ÷ 4 kΩ = 5 mA. 0.8 mA scales the current by 8/20 instead of 20/8, 5 A loses the milli prefix, and 80 mA multiplies 20 by 4.`,
      },
    ],
  },
  [r`How do you trace a network by its nodes?`]: {
    kind: 'concept',
    more: [
      {
        question: r`On a diagram drawn with many bends, the left ends of resistors X, Y and Z are all joined by bare wire to the battery's + terminal, and their right ends are all joined by bare wire to its − terminal. How are the resistors arranged?`,
        options: [r`All three are in parallel across the battery`, r`All three are in series around a single loop`, r`X and Y are in series, with Z in parallel`, r`X is in series with Y and Z in parallel`],
        correctAnswer: 0,
        explanation: r`Points joined by bare wire are a single node, so the circuit has only two nodes, and each resistor runs between the same two. Elements between the same two nodes are in parallel, however the wires are drawn. Any series connection would need a third node between two resistors, and there is none.`,
      },
      {
        question: r`In a toaster, heating element X is wired from point 1 to point 2. Elements Y and Z are each wired from point 2 to point 3, and the supply joins point 3 back to point 1. Which pair of single elements, if any, is in series?`,
        options: [r`X and Y: they are joined end to end at point 2`, r`X and Z: they are joined end to end at point 2`, r`None: point 2 is a junction, splitting X from Y and Z`, r`Y and Z: they are joined at point 2 and at point 3`],
        correctAnswer: 2,
        explanation: r`Two elements are in series only if no junction lies between them, and three elements meet at point 2, so the current through X divides there. X is in series with the Y and Z combination, not with either one alone. Y and Z share both of their nodes, which makes them parallel, not series.`,
      },
    ],
  },
  [r`What is the order for solving a network?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 5 Ω resistor is in series with a parallel pair made of a 20 Ω and a 30 Ω resistor. Collapsing the innermost group first, what is the equivalent resistance of the network?`,
        options: [r`55 Ω`, r`12 Ω`, r`17 Ω`, r`30 Ω`],
        correctAnswer: 2,
        explanation: r`The pair collapses to (20 × 30)/(20 + 30) = 12 Ω, and adding the series 5 Ω gives 17 Ω. 55 Ω adds all three as if they were in series, 12 Ω stops after the parallel pair, and 30 Ω averages the pair to 25 Ω before adding the 5 Ω.`,
      },
      {
        question: r`A 40 V ideal supply powers a 4 Ω cable that leads to two heaters connected in parallel, one of 12 Ω and one of 6 Ω. What total current leaves the supply?`,
        options: [r`10 A`, r`5 A`, r`1.8 A`, r`2.5 A`],
        correctAnswer: 1,
        explanation: r`Collapse the pair first: (12 × 6)/(12 + 6) = 4 Ω. Then R_eq = 4 Ω + 4 Ω = 8 Ω and I = 40 V ÷ 8 Ω = 5 A. 10 A divides by the 4 Ω cable alone, 1.8 A adds all three resistances to 22 Ω, and 2.5 A counts the pair as 12 Ω.`,
      },
      {
        question: r`A 30 V ideal supply powers a 6 Ω cable that leads to a 10 Ω heater and a 15 Ω heater connected in parallel. Find the equivalent resistance, then the total current, then work back out. What is the voltage across the two heaters?`,
        options: [r`30 V`, r`15 V`, r`25 V`, r`12.5 V`],
        correctAnswer: 1,
        explanation: r`The pair is (10 × 15)/(10 + 15) = 6 Ω, so R_eq = 12 Ω and I = 30 V ÷ 12 Ω = 2.5 A. The cable drops (2.5 A)(6 Ω) = 15 V, leaving 15 V across the pair. 30 V forgets the drop in the cable, 25 V sends the full 2.5 A through the 10 Ω heater, and 12.5 V splits the current equally and sends 1.25 A through the 10 Ω heater.`,
      },
      {
        question: r`A 9 V ideal cell is wired to a 1 Ω fuse followed by two lamps connected in parallel, one of 3 Ω and one of 6 Ω. Working inside-out and then back out, what current flows in the 3 Ω lamp?`,
        options: [r`3 A`, r`1 A`, r`2 A`, r`1.5 A`],
        correctAnswer: 2,
        explanation: r`The pair is (3 × 6)/(3 + 6) = 2 Ω, so R_eq = 3 Ω and the total current is 9 V ÷ 3 Ω = 3 A. The pair has (3 A)(2 Ω) = 6 V across it, so the 3 Ω lamp carries 6 V ÷ 3 Ω = 2 A. 3 A is the total current, 1 A is the 6 Ω lamp, and 1.5 A splits the total equally.`,
      },
      {
        question: r`A 21 V ideal battery feeds a 3 Ω resistor in series with a two-branch group. One branch is a single 6 Ω resistor. The other branch is a 4 Ω and an 8 Ω resistor in series. What is the voltage across the 8 Ω resistor?`,
        options: [r`8 V`, r`12 V`, r`24 V`, r`9 V`],
        correctAnswer: 0,
        explanation: r`Innermost first: 4 Ω + 8 Ω = 12 Ω, then 12 Ω in parallel with 6 Ω is 4 Ω, so R_eq = 7 Ω and I = 3 A. The group has (3 A)(4 Ω) = 12 V across it, the 12 Ω branch carries 1 A, and the 8 Ω resistor drops 8 V. 12 V is the whole group's voltage, 24 V sends all 3 A through the 8 Ω, and 9 V is the drop across the 3 Ω series resistor.`,
      },
      {
        question: r`A 30 V ideal battery sends 6 A through a 2 Ω resistor and then into a two-branch parallel pair. One branch carries 4 A. Using the junction check and the loop check, what are the current in the other branch and the voltage across the pair?`,
        options: [r`2 A in the other branch; 18 V across the pair`, r`2 A in the other branch; 12 V across the pair`, r`10 A in the other branch; 18 V across the pair`, r`4 A in the other branch; 30 V across the pair`],
        correctAnswer: 0,
        explanation: r`Junction check: the branch currents must add to 6 A, so the other branch carries 2 A. Loop check: the series resistor drops (6 A)(2 Ω) = 12 V, leaving 30 V − 12 V = 18 V for the pair. 12 V is the series drop, not the pair's voltage, 10 A adds the currents instead of subtracting, and 30 V ignores the series drop.`,
      },
    ],
  },
  [r`Write the voltage divider for two resistors in series.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 9 V ideal cell powers a 20 Ω buzzer and a 40 Ω lamp wired in series in a single loop. What is the voltage across the buzzer?`,
        options: [r`6 V`, r`3 V`, r`4.5 V`, r`18 V`],
        correctAnswer: 1,
        explanation: r`V₁ = V·R₁/(R₁ + R₂) = (9 V)(20/60) = 3 V. 6 V puts the other resistance on top, which is the voltage across the 40 Ω lamp. 4.5 V splits the voltage equally, and 18 V multiplies by 40/20 without dividing by the total.`,
      },
      {
        question: r`A 5 V logic supply sits across a 1 kΩ and a 4 kΩ resistor in series. What is the voltage across the 4 kΩ resistor?`,
        options: [r`1 V`, r`1.25 V`, r`20 V`, r`4 V`],
        correctAnswer: 3,
        explanation: r`The 4 kΩ resistor takes the fraction 4/(1 + 4) of the voltage: (5 V)(4/5) = 4 V. 1 V is the share of the 1 kΩ resistor, 1.25 V divides 5 by 4, and 20 V multiplies 5 by 4.`,
      },
      {
        question: r`In a light sensor, a 300 Ω photoresistor is in series with a 600 Ω fixed resistor across an ideal supply. A voltmeter across the photoresistor reads 1.5 V. What is the supply voltage?`,
        options: [r`3.0 V`, r`4.5 V`, r`0.5 V`, r`0.75 V`],
        correctAnswer: 1,
        explanation: r`The photoresistor holds the fraction 300/(300 + 600) = 1/3 of the supply voltage, so V = 3 × 1.5 V = 4.5 V. 3.0 V is the voltage across the 600 Ω resistor alone, 0.5 V multiplies by 1/3 instead of dividing, and 0.75 V multiplies by 300/600.`,
      },
      {
        question: r`A 12 V ideal source drives a 30 Ω fixed resistor in series with a strain gauge. The voltage across the gauge is 9 V. What is the resistance of the gauge?`,
        options: [r`10 Ω`, r`40 Ω`, r`22.5 Ω`, r`90 Ω`],
        correctAnswer: 3,
        explanation: r`The fixed resistor has the other 3 V, and series resistors share voltage in proportion to resistance, so the gauge is (9/3)(30 Ω) = 90 Ω. Check: (12 V)(90/120) = 9 V. 10 Ω inverts the ratio, 40 Ω uses 12/9, and 22.5 Ω uses 9/12.`,
      },
      {
        question: r`Two equal resistors R in series split an ideal supply's voltage. One of them is replaced with a resistor of 3R. What happens to the voltage across the resistor that was NOT replaced?`,
        options: [r`It falls to 1/3 of its first value`, r`It falls to 1/2 of its first value`, r`It rises to 3/2 of its first value`, r`It falls to 1/4 of its first value`],
        correctAnswer: 1,
        explanation: r`At first the resistor holds R/(R + R) = 1/2 of the supply; afterward it holds R/(R + 3R) = 1/4, and (1/4) ÷ (1/2) = 1/2. 1/3 assumes the voltage scales as the inverse of the other resistor, 3/2 is the change for the replaced resistor, and 1/4 is the new fraction of the supply, not the change.`,
      },
      {
        question: r`A 50 mV biological signal source is in series with a 20 kΩ electrode contact resistance and the 80 kΩ input resistance of an amplifier. What voltage appears across the amplifier input?`,
        options: [r`10 mV`, r`12.5 mV`, r`200 mV`, r`40 mV`],
        correctAnswer: 3,
        explanation: r`The amplifier input takes the fraction 80/(20 + 80) of the signal: (50 mV)(0.8) = 40 mV. 10 mV is the part lost across the electrode contact, 12.5 mV multiplies by 20/80, and 200 mV multiplies by 80/20.`,
      },
    ],
  },
  [r`Write the current divider for two resistors in parallel.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A current of 6 A reaches a fork where a 10 Ω heating wire and a 20 Ω heating wire are connected in parallel. How much of it flows through the 10 Ω wire?`,
        options: [r`2 A`, r`4 A`, r`3 A`, r`12 A`],
        correctAnswer: 1,
        explanation: r`I₁ = I·R₂/(R₁ + R₂) with the OTHER resistance on top: (6 A)(20/30) = 4 A. 2 A puts the wire's own 10 Ω on top, which is the current in the 20 Ω wire. 3 A splits the current equally, and 12 A multiplies by 20/10.`,
      },
      {
        question: r`In a sensor, 15 mA arrives at a 1 kΩ element and a 4 kΩ element wired in parallel. What current flows through the 4 kΩ element?`,
        options: [r`12 mA`, r`3 mA`, r`7.5 mA`, r`3.75 mA`],
        correctAnswer: 1,
        explanation: r`The 4 kΩ element gets the fraction 1/(1 + 4), the other resistance over the sum: (15 mA)(1/5) = 3 mA. 12 mA is the current in the 1 kΩ element, 7.5 mA splits the current equally, and 3.75 mA divides 15 by 4.`,
      },
      {
        question: r`A 3 Ω coil and a 9 Ω coil are wired in parallel. An ammeter in the 9 Ω coil reads 0.6 A. What is the combined current through both coils?`,
        options: [r`0.8 A`, r`1.8 A`, r`1.2 A`, r`2.4 A`],
        correctAnswer: 3,
        explanation: r`The 9 Ω coil carries the fraction 3/(3 + 9) = 1/4 of the total, so the total is 4 × 0.6 A = 2.4 A. Check: the pair has (0.6 A)(9 Ω) = 5.4 V, so the 3 Ω coil carries 1.8 A. 0.8 A uses the fraction 9/12, 1.8 A is only the 3 Ω coil, and 1.2 A assumes equal coils.`,
      },
      {
        question: r`Two heaters wired in parallel draw 8 A altogether. One heater is 12 Ω and carries 2 A. What is the resistance of the other heater?`,
        options: [r`4 Ω`, r`36 Ω`, r`48 Ω`, r`3 Ω`],
        correctAnswer: 0,
        explanation: r`The other heater carries 8 A − 2 A = 6 A at the same voltage, (2 A)(12 Ω) = 24 V, so its resistance is 24 V ÷ 6 A = 4 Ω. 36 Ω makes the heater with three times the current three times larger in resistance, 48 Ω multiplies 12 by 8/2, and 3 Ω divides the 24 V by the total 8 A.`,
      },
      {
        question: r`A fixed total current divides between two parallel 5 Ω resistors. One of them is replaced with a 15 Ω resistor while the total current is held the same. What happens to the current in the 5 Ω resistor that remains?`,
        options: [r`It falls to 1/2 of its first value`, r`It rises to 3/2 of its first value`, r`It rises to 3 times its first value`, r`It falls to 3/4 of its first value`],
        correctAnswer: 1,
        explanation: r`At first it carries 5/(5 + 5) = 1/2 of the total; afterward it carries 15/(5 + 15) = 3/4, and (3/4) ÷ (1/2) = 3/2. 1/2 is the change for the replaced branch (from 1/2 to 1/4), 3 is the ratio of the two currents afterward, and 3/4 is the new share, which is a rise, not a fall.`,
      },
      {
        question: r`A 90 mA test current divides between two parallel tissue paths, one of 100 Ω and one of 200 Ω. What current takes the 200 Ω path?`,
        options: [r`30 mA`, r`60 mA`, r`45 mA`, r`180 mA`],
        correctAnswer: 0,
        explanation: r`The 200 Ω path gets the fraction 100/(100 + 200) = 1/3: (90 mA)(1/3) = 30 mA. 60 mA puts the path's own 200 Ω on top, which is the current in the 100 Ω path. 45 mA splits the current equally, and 180 mA multiplies by 200/100.`,
      },
    ],
  },
  [r`A current splits between 1 Ω and 3 Ω branches in parallel. In what ratio?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A current of 8 A divides between a 1 Ω branch and a 3 Ω branch in parallel. What current flows in each branch?`,
        options: [r`2 A in the 1 Ω branch; 6 A in the 3 Ω branch`, r`4 A in the 1 Ω branch; 4 A in the 3 Ω branch`, r`6 A in the 1 Ω branch; 2 A in the 3 Ω branch`, r`5 A in the 1 Ω branch; 3 A in the 3 Ω branch`],
        correctAnswer: 2,
        explanation: r`The currents are in the inverse ratio of the resistances, 3 : 1, with the larger share in the 1 Ω branch: 3/4 of 8 A is 6 A and 1/4 is 2 A. Both branches then have 6 V across them. The swapped answer gives more current to the larger resistance, the equal split ignores the resistances, and 5 A and 3 A do not give equal voltages.`,
      },
      {
        question: r`A 2 Ω heater and a 10 Ω heater are connected in parallel. What is the ratio of the current in the 2 Ω heater to the current in the 10 Ω heater?`,
        options: [r`5 : 1`, r`1 : 5`, r`6 : 1`, r`1 : 6`],
        correctAnswer: 0,
        explanation: r`Both heaters have the same voltage, so I = V/R gives currents in the inverse ratio of the resistances: 10 : 2 = 5 : 1, with more current in the smaller resistance. 1 : 5 gives the larger share to the larger resistance. The ratios with 6 compare one resistance with the sum of the two.`,
      },
      {
        question: r`A 4 Ω coil and a 12 Ω coil are wired in parallel. The 12 Ω coil carries 0.2 A. What current flows in the 4 Ω coil?`,
        options: [r`0.07 A`, r`0.8 A`, r`0.2 A`, r`0.6 A`],
        correctAnswer: 3,
        explanation: r`The resistances are in the ratio 1 : 3, so the currents are 3 : 1 with the larger share in the 4 Ω coil: 3 × 0.2 A = 0.6 A. Check: both coils have 2.4 V. 0.07 A divides by 3 instead of multiplying, 0.8 A is the total current, and 0.2 A assumes an equal split.`,
      },
      {
        question: r`Current from an electrode divides between two parallel tissue paths of 5 kΩ and 20 kΩ. The 5 kΩ path carries 8 mA. What total current does the electrode deliver?`,
        options: [r`40 mA`, r`16 mA`, r`2 mA`, r`10 mA`],
        correctAnswer: 3,
        explanation: r`The resistances are in the ratio 1 : 4, so the currents are 4 : 1 and the 20 kΩ path carries 8 mA ÷ 4 = 2 mA. The total is 8 mA + 2 mA = 10 mA. 40 mA gives the 20 kΩ path four times the current instead of a quarter, 16 mA assumes equal paths, and 2 mA is the 20 kΩ path alone.`,
      },
      {
        question: r`A current divides between two parallel branches in the ratio 4 : 1. The branch carrying the larger share is 6 Ω. What is the resistance of the other branch?`,
        options: [r`1.5 Ω`, r`30 Ω`, r`24 Ω`, r`10 Ω`],
        correctAnswer: 2,
        explanation: r`Currents divide in the inverse ratio of the resistances, so the branch with one quarter of the current has four times the resistance: 4 × 6 Ω = 24 Ω. 1.5 Ω gives the smaller current to the smaller resistance, 30 Ω multiplies 6 Ω by 5, and 10 Ω adds 4 to 6.`,
      },
      {
        question: r`A 20 Ω branch and a 30 Ω branch are in parallel. What percent of the total current flows through the 30 Ω branch?`,
        options: [r`60%`, r`30%`, r`67%`, r`40%`],
        correctAnswer: 3,
        explanation: r`The currents are in the inverse ratio of the resistances, 30 : 20 = 3 : 2, with the smaller share in the 30 Ω branch: 2/5 = 40%. 60% is the share of the 20 Ω branch, 30% just reads off the resistance, and 67% is the ratio 20/30 of one branch current to the other.`,
      },
    ],
  },
  [r`A circuit changes. In what order do you reason?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An ideal supply feeds a series resistor $R_s$ and then a group of lamps wired in parallel. $R_s$ is replaced with a smaller resistor. What happens to the current in each lamp?`,
        options: [r`It falls: the total current rises, so the series part drops more`, r`It holds: the group always has the whole supply voltage`, r`It rises: the total current rises, so the group's voltage rises`, r`It falls: the total current falls, so the group's voltage falls`],
        correctAnswer: 2,
        explanation: r`Follow the chain: a smaller $R_s$ lowers $R_{eq}$, so the total current rises. The group's resistance is unchanged, so its voltage (total current times group resistance) rises, and each lamp carries more. The series part now drops less, not more, since the group takes a larger share of the fixed supply voltage. The group would have the whole supply voltage only with no series resistor.`,
      },
      {
        question: r`One more lamp is wired in parallel with a group of lamps that sits behind a series resistor on an ideal supply. To find how the old lamps are affected, which quantity should be worked out FIRST?`,
        options: [r`The voltage that is left for the parallel group`, r`The drop across the series resistor on its own`, r`The equivalent resistance of the whole circuit`, r`The current through each lamp in the group`],
        correctAnswer: 2,
        explanation: r`The change first alters $R_{eq}$, and only then can the total current be found from the supply voltage. The total current gives the drop across the series resistor, and that gives the voltage left for the group and so each lamp's current. Each of the other quantities depends on a step that comes before it in this chain.`,
      },
    ],
  },
  [r`A bank sits behind a series resistor and a branch is added to it. What happens to the old branch currents?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A long extension cord with noticeable resistance feeds several monitors plugged in parallel at its far end, from an ideal source. When one more monitor is plugged in, each of the others draws slightly less current. Which explanation is correct?`,
        options: [r`The total current falls, so each monitor gets a smaller share`, r`The source voltage sags as more monitors are plugged into it`, r`The resistance of each monitor rises when another is added`, r`The cord drops more voltage, leaving less across the monitors`],
        correctAnswer: 3,
        explanation: r`Adding a branch lowers the equivalent resistance, so the total current rises. The cord, in series with everything, then drops more voltage (IR), and less is left across the bank of monitors, so each old branch current falls. The total current rises, not falls. An ideal source holds its voltage, and the monitors' own resistances do not change.`,
      },
      {
        question: r`A 30 V ideal supply powers a 5 Ω cable that leads to one 10 Ω heater. A second 10 Ω heater is then connected in parallel with the first, forming a bank. What happens to the total current from the supply and to the voltage across the heater bank?`,
        options: [r`Total rises from 2 A to 4 A; bank holds steady at 20 V`, r`Total holds at 2 A; bank falls from 20 V to 10 V`, r`Total falls from 3 A to 2 A; bank rises from 15 V to 20 V`, r`Total rises from 2 A to 3 A; bank falls from 20 V to 15 V`],
        correctAnswer: 3,
        explanation: r`At first R_eq = 15 Ω, so I = 2 A and the bank has (2 A)(10 Ω) = 20 V. With two branches the bank is 5 Ω, R_eq = 10 Ω, I = 3 A, the cable drops 15 V and the bank has 15 V. A bank that holds 20 V would need a cable with no resistance, a total that holds at 2 A ignores the drop in R_eq, and the last answer has the change backward.`,
      },
    ],
  },
  [r`A bank sits directly across an ideal source and a branch is added. What happens to the other branches?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A second lamp is wired in parallel with a lamp that is already lit, and an ammeter shows that the first lamp's current does not change at all. What does this indicate about the circuit?`,
        options: [r`The pair sits behind a large series resistor`, r`The two lamps have exactly equal resistance`, r`The pair sits directly across an ideal source`, r`The source supplies the same total current`],
        correctAnswer: 2,
        explanation: r`A branch keeps its current only if it keeps its voltage, which happens when the bank is directly across an ideal source. A series resistor would drop more voltage once the total current rose, and the first lamp's current would fall. Equal resistances are not needed, and the total current must rise by the new lamp's current.`,
      },
      {
        question: r`Three devices are plugged directly across an ideal 120 V source and draw 2 A, 3 A and 5 A. The 5 A device is unplugged. What happens to the currents?`,
        options: [r`The others still draw 2 A and 3 A; the total falls to 5 A`, r`The others rise to 4 A and 6 A; the total stays at 10 A`, r`The others still draw 2 A and 3 A; the total stays at 10 A`, r`The others fall to 1 A and 1.5 A; the total falls to 2.5 A`],
        correctAnswer: 0,
        explanation: r`Each device directly across an ideal source keeps the full 120 V, so the remaining two keep their own currents of 2 A and 3 A. Only the total changes, from 10 A to 2 A + 3 A = 5 A. The total cannot stay at 10 A, because nothing forces the source to deliver a fixed current, and nothing lowers the voltage across the remaining devices.`,
      },
    ],
  },
}
