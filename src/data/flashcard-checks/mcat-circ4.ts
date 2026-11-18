import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the Circuits Part 4 video deck (`mcat-circ4`): one
 * per review card, keyed by the card's exact front text. Each asks the student
 * to use the card's idea in a new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  // Video 1
  [r`What symbol stands for equivalent capacitance, and what is its SI unit?`]: {
    question: r`A sealed box holds an unknown network of capacitors. Its label reads $C_{\text{eq}}$ = 30 μF. How much charge does a 10 V battery move onto the box?`,
    options: [
      r`300 μF, the same as a single 30 μF capacitor`,
      r`300 μC, the same as a single 30 μF capacitor`,
      r`3.0 μC, the same as a single 30 μF capacitor`,
      r`300 μC, but only if all its capacitors are 30 μF`,
    ],
    correctAnswer: 1,
    explanation: r`$C_{\text{eq}}$ is the single capacitance that could replace the whole network, so Q = (30 μF)(10 V) = 300 μC whatever is inside the box. An answer in μF gives a capacitance, not a charge, since the farad is the unit of $C_{\text{eq}}$ itself. 3.0 μC divides instead of multiplying, and the individual capacitors do not need to be 30 μF each.`,
  },
  [r`How do the capacitor combining rules compare with the resistor rules?`]: {
    question: r`A 6 Ω and a 3 Ω resistor give 9 Ω in series and 2 Ω in parallel. What do a 6 μF and a 3 μF capacitor give?`,
    options: [
      r`9 μF in series and 2 μF in parallel`,
      r`9 μF in parallel and 4.5 μF in series`,
      r`18 μF in parallel and 2 μF in series`,
      r`9 μF in parallel and 2 μF in series`,
    ],
    correctAnswer: 3,
    explanation: r`The capacitor rules are the resistor rules reversed: parallel capacitors add directly (6 + 3 = 9 μF) and series capacitors add as reciprocals (2 μF). Getting 9 μF in series copies the resistor rules without reversing them. 4.5 μF is an average and 18 μF is a product, and neither is a combining rule.`,
  },
  [r`What is the equivalent capacitance of capacitors in parallel?`]: {
    question: r`Capacitors of 8.0 μF, 12 μF and 24 μF are all wired in parallel. What single capacitance could replace the three of them?`,
    options: [r`44 μF`, r`4.0 μF`, r`24 μF`, r`0.25 μF`],
    correctAnswer: 0,
    explanation: r`Parallel capacitances add directly: 8.0 + 12 + 24 = 44 μF, larger than the largest one. 4.0 μF comes from adding reciprocals, which is the series rule, and 0.25 is that reciprocal sum before it is flipped. 24 μF is only the largest capacitor, and a parallel result must be bigger than that.`,
  },
  [r`What do capacitors in parallel share, and what adds?`]: {
    question: r`A 4.0 μF and a 10 μF capacitor are wired in parallel across a battery. The 4.0 μF capacitor holds 20 μC. How much charge did the battery supply in total?`,
    options: [r`40 μC`, r`28 μC`, r`70 μC`, r`50 μC`],
    correctAnswer: 2,
    explanation: r`Parallel capacitors share the voltage, here 20 μC ÷ 4.0 μF = 5.0 V. The 10 μF capacitor then holds 10 × 5.0 = 50 μC, and the charges add to 70 μC. 40 μC assumes both hold the same charge, which is the series rule. 28 μC gives the larger capacitor less charge, and 50 μC is the second capacitor alone.`,
  },
  [r`What is the picture for capacitors in parallel?`]: {
    question: r`Two air-filled capacitors have the same gap. Their plate areas are 20 cm² and 60 cm². Wired in parallel, they act like one capacitor with that gap and what plate area?`,
    options: [r`15 cm²`, r`80 cm²`, r`40 cm²`, r`60 cm²`],
    correctAnswer: 1,
    explanation: r`In parallel the plates join into one bigger plate, so the areas add to 80 cm², and more area means more capacitance. 15 cm² is product over sum, which belongs to the series case. 40 cm² is an average and 60 cm² is just the larger plate, and neither counts all of the joined area.`,
  },
  [r`What is the equivalent capacitance of capacitors in series?`]: {
    question: r`Capacitors of 12 μF, 6.0 μF and 4.0 μF are connected one after another in a single chain. What is the equivalent capacitance of the chain?`,
    options: [r`0.50 μF`, r`22 μF`, r`4.0 μF`, r`2.0 μF`],
    correctAnswer: 3,
    explanation: r`In series the reciprocals add: 1/12 + 1/6.0 + 1/4.0 = 6/12 = 0.50, and flipping gives 2.0 μF. Stopping at 0.50 forgets to flip the sum. 22 μF adds the values directly, which is the parallel rule. 4.0 μF is the smallest capacitor, and a series result must be smaller than that.`,
  },
  [r`Why do capacitors in series all carry the same charge?`]: {
    question: r`A 2.0 μF and an 8.0 μF capacitor are in series across a battery. The outer plate of the 2.0 μF capacitor carries +16 μC, so its inner plate carries −16 μC. What charge is on the inner plate of the 8.0 μF capacitor, which is wired to that plate?`,
    options: [
      r`+16 μC, since the joined section stays neutral`,
      r`−16 μC, since the joined plates must match`,
      r`+64 μC, since it has four times the capacitance`,
      r`+4.0 μC, since it has four times the capacitance`,
    ],
    correctAnswer: 0,
    explanation: r`The two inner plates and the wire between them are an isolated piece of metal that started neutral, so −16 μC on one plate forces +16 μC on the other. A matching −16 μC would give that isolated piece a net charge it has no way to gain. Scaling the charge by the capacitance, to 64 μC or 4.0 μC, is wrong because series capacitors carry the same charge whatever their sizes.`,
  },
  [r`What is the picture for two identical capacitors in series?`]: {
    question: r`Each of two identical capacitors has a 0.50 mm gap and a capacitance of 40 pF. Connected in series, they act like one capacitor with the same plates and what gap and capacitance?`,
    options: [
      r`A 1.0 mm gap and 80 pF`,
      r`A 0.25 mm gap and 80 pF`,
      r`A 1.0 mm gap and 20 pF`,
      r`A 0.25 mm gap and 20 pF`,
    ],
    correctAnswer: 2,
    explanation: r`The joined middle plates carry equal and opposite charges that cancel, so the pair acts like one capacitor with the gaps stacked: 1.0 mm. A wider gap means less capacitance, so it is 40/2 = 20 pF. 80 pF is the parallel result, and a 0.25 mm gap shrinks the gap when series stacking widens it.`,
  },
  [r`Which of two unequal capacitors in series takes the larger voltage?`]: {
    question: r`Capacitors X and Y are in series across a battery. A voltmeter reads 9 V across X and 3 V across Y. What does this tell you about them?`,
    options: [
      r`X has three times Y's capacitance`,
      r`X has one third of Y's capacitance`,
      r`X holds three times Y's charge`,
      r`X holds one third of Y's charge`,
    ],
    correctAnswer: 1,
    explanation: r`Series capacitors carry the same charge, and V = Q/C, so the capacitor with three times the voltage has one third of the capacitance. Saying X has three times the capacitance copies the series resistor rule, where the larger element takes more voltage. The two charge answers are wrong because the charges in a series chain are equal.`,
  },
  [r`What is the shortcut for two capacitors in series?`]: {
    question: r`An audio filter has a 20 μF part with a 30 μF part wired end to end after it, so the same charge must pass onto both. What single value could replace the two?`,
    options: [r`50 μF`, r`25 μF`, r`12 μF`, r`0.083 μF`],
    correctAnswer: 2,
    explanation: r`Product over sum gives (20 × 30)/(20 + 30) = 600/50 = 12 μF, smaller than the smaller capacitor. 50 μF adds the two, which is the parallel rule. 25 μF is their average, and 0.083 is sum over product, the reciprocal that still needs to be flipped.`,
  },
  [r`What is the equivalent capacitance of $N$ identical capacitors?`]: {
    question: r`A designer needs 2.0 μF but has only a box of identical 6.0 μF capacitors. Which arrangement gives exactly 2.0 μF?`,
    options: [
      r`Three wired in parallel`,
      r`Four wired in series`,
      r`Four wired in parallel`,
      r`Three wired in series`,
    ],
    correctAnswer: 3,
    explanation: r`N identical capacitors in series give C/N, so three give 6.0/3 = 2.0 μF. Three in parallel give NC = 18 μF, which uses the series result for the wrong arrangement. Four in series give 1.5 μF and four in parallel give 24 μF.`,
  },
  [r`What quick size check catches a wrong capacitor combination?`]: {
    question: r`Four students each combine a 6.0 μF and a 12 μF capacitor and report a result. Which report passes the quick size check?`,
    options: [
      r`4.0 μF for the series pair`,
      r`9.0 μF for the series pair`,
      r`4.0 μF for the parallel pair`,
      r`9.0 μF for the parallel pair`,
    ],
    correctAnswer: 0,
    explanation: r`A series result must be smaller than the smallest capacitor, and 4.0 μF is below 6.0 μF. A series result of 9.0 μF is larger than the smallest, so it fails. A parallel result must be larger than the largest capacitor, 12 μF, so both 4.0 μF and 9.0 μF fail for the parallel pair.`,
  },

  // Video 2
  [r`How do you find the charge a battery puts on a chain of series capacitors?`]: {
    question: r`An 8.0 μF and a 24 μF capacitor are joined in series, and the pair is connected to a 5.0 V battery. What charge ends up on the two capacitors?`,
    options: [
      r`160 μC on each of them`,
      r`30 μC on each of them`,
      r`15 μC on each of them`,
      r`40 μC and then 120 μC`,
    ],
    correctAnswer: 1,
    explanation: r`The chain's equivalent capacitance is (8.0 × 24)/32 = 6.0 μF, so Q = (6.0 μF)(5.0 V) = 30 μC, and every capacitor in the chain carries that same charge. 160 μC adds the capacitances as if they were in parallel. 40 μC and 120 μC give each capacitor the full 5.0 V, and 15 μC splits the shared charge in half.`,
  },
  [r`How do you find the voltage across each capacitor in a series chain?`]: {
    question: r`A series chain of a 2.0 μF, a 4.0 μF and an 8.0 μF capacitor carries 16 μC. In that order, what are the three voltages, and what is the battery's voltage?`,
    options: [
      r`2.0 V, 4.0 V and 8.0 V, with a 14 V battery`,
      r`32 V, 64 V and 128 V, with a 224 V battery`,
      r`8.0 V, 8.0 V and 8.0 V, with a 24 V battery`,
      r`8.0 V, 4.0 V and 2.0 V, with a 14 V battery`,
    ],
    correctAnswer: 3,
    explanation: r`Each voltage is the shared charge over that capacitance: 16/2.0 = 8.0 V, 16/4.0 = 4.0 V and 16/8.0 = 2.0 V, which add to the battery's 14 V. Listing them as 2.0, 4.0 and 8.0 V gives the largest capacitor the most voltage, which is backward. The huge values multiply Q by C, and equal shares only happen for equal capacitors.`,
  },
  [r`How do you collapse a series-parallel capacitor network?`]: {
    question: r`A 3.0 μF and a 9.0 μF capacitor are wired in parallel, and that pair is wired in series with a 4.0 μF capacitor. What is the equivalent capacitance of the whole network?`,
    options: [r`16 μF`, r`6.25 μF`, r`3.0 μF`, r`1.4 μF`],
    correctAnswer: 2,
    explanation: r`Work from the inside out: the parallel pair adds to 12 μF, then 12 μF in series with 4.0 μF gives 48/16 = 3.0 μF. 16 μF adds all three as if everything were in parallel. 6.25 μF uses the resistor rules, and 1.4 μF adds all three as reciprocals as if everything were in series.`,
  },
  [r`A parallel group sits inside a series chain. How do you find the group's voltage and each capacitor's charge?`]: {
    question: r`A series chain carries a charge of 60 μC. One stage of the chain is a 2.0 μF capacitor in parallel with a 10 μF capacitor. What is the voltage across that stage, and how much charge does the 10 μF capacitor hold?`,
    options: [
      r`5.0 V, and it holds 50 μC`,
      r`5.0 V, and it holds 60 μC`,
      r`5.0 V, and it holds 30 μC`,
      r`6.0 V, and it holds 60 μC`,
    ],
    correctAnswer: 0,
    explanation: r`The stage's capacitance is 2.0 + 10 = 12 μF, so its voltage is 60/12 = 5.0 V, and the 10 μF capacitor holds 10 × 5.0 = 50 μC. Giving it the full 60 μC forgets that the chain's charge is shared inside the group. 30 μC splits the charge equally instead of in proportion to C, and 6.0 V divides by 10 μF alone.`,
  },
  [r`What is the common trap when splitting a battery's voltage between unequal series capacitors?`]: {
    question: r`A 24 V supply sits across a chain of two parts wired end to end: 2.0 μF, then 6.0 μF. How does the 24 V divide between them?`,
    options: [
      r`6.0 V on the 2.0 μF and 18 V on the 6.0 μF`,
      r`12 V on the 2.0 μF and 12 V on the 6.0 μF`,
      r`24 V on the 2.0 μF and 24 V on the 6.0 μF`,
      r`18 V on the 2.0 μF and 6.0 V on the 6.0 μF`,
    ],
    correctAnswer: 3,
    explanation: r`Find the shared charge first: the pair is 12/8.0 = 1.5 μF, so Q = 1.5 × 24 = 36 μC, giving 36/2.0 = 18 V and 36/6.0 = 6.0 V. Equal 12 V shares are the trap, since equal shares only happen for equal capacitors. Putting 18 V on the larger capacitor reverses the rule, and 24 V on each treats them as parallel.`,
  },
  [r`What two checks confirm a capacitor network answer?`]: {
    question: r`A 20 V battery drives a 5.0 μF capacitor in series with a parallel group. The chain's charge is 50 μC. Each answer lists the voltage on the single capacitor, the voltage on the group, and the two charges inside the group. Which one passes both checks?`,
    options: [
      r`10 V and 10 V, then 50 μC and 50 μC`,
      r`10 V and 10 V, then 20 μC and 30 μC`,
      r`20 V and 20 V, then 20 μC and 30 μC`,
      r`15 V and 5.0 V, then 10 μC and 15 μC`,
    ],
    correctAnswer: 1,
    explanation: r`The series voltages must add to the battery's 20 V, and the group's charges must add to the chain's 50 μC. Only 10 V + 10 V with 20 μC + 30 μC does both. Charges of 50 μC and 50 μC add to 100 μC, voltages of 20 V and 20 V add to 40 V, and 10 μC with 15 μC adds to only 25 μC.`,
  },

  // Video 3
  [r`What symbol stands for the time constant, and what is its SI unit?`]: {
    question: r`A circuit note for a 4.0 kΩ resistor and a capacitor reads "τ = 0.20" with the unit left off. Which unit completes it, and what is the capacitance?`,
    options: [
      r`0.20 Ω, and C is 50 μF`,
      r`0.20 F, and C is 800 μF`,
      r`0.20 s, and C is 50 μF`,
      r`0.20 s, and C is 800 μF`,
    ],
    correctAnswer: 2,
    explanation: r`τ is the time constant, measured in seconds, and τ = RC gives C = 0.20 s ÷ 4000 Ω = 5.0 × 10⁻⁵ F = 50 μF. Ohms and farads are the units of R and C, not of their product. The 800 figure multiplies 0.20 by 4000 instead of dividing.`,
  },
  [r`How does an uncharged capacitor behave at the instant a switch closes?`]: {
    question: r`A 9.0 V battery, a switch, a 3.0 Ω resistor and an uncharged capacitor form one series loop. Just after the switch closes, how is the battery's voltage shared?`,
    options: [
      r`0 V on the capacitor, 9.0 V on the resistor`,
      r`9.0 V on the capacitor, 0 V on the resistor`,
      r`4.5 V on the capacitor, 4.5 V on the resistor`,
      r`9.0 V on the capacitor, 9.0 V on the resistor`,
    ],
    correctAnswer: 0,
    explanation: r`An uncharged capacitor has V = Q/C = 0, so at the first instant it acts like a plain wire and the whole 9.0 V sits across the resistor. Putting 9.0 V on the capacitor describes the end of charging, not the start. An even 4.5 V split has no basis, and 9.0 V on both would add to twice the battery's voltage.`,
  },
  [r`What is the current at the first instant in a series RC charging circuit?`]: {
    question: r`A 6.0 V cell, a 2.0 kΩ resistor, a switch and an empty 100 μF capacitor are wired in one loop. What is the largest current this loop ever carries, and when?`,
    options: [
      r`3.0 mA, once the capacitor has filled`,
      r`12 mA, at the instant the switch closes`,
      r`12 mA, once the capacitor has filled`,
      r`3.0 mA, at the instant the switch closes`,
    ],
    correctAnswer: 3,
    explanation: r`The empty capacitor acts like a wire at first, so the current starts at its largest value, ε/R = 6.0 V ÷ 2000 Ω = 3.0 mA, and dies away from there. Once the capacitor has filled the current is zero, not at its peak. 12 comes from multiplying 6.0 by 2.0 instead of dividing.`,
  },
  [r`How does a fully charged capacitor behave in a DC circuit at steady state?`]: {
    question: r`Two branches are connected across a 12 V ideal battery: a 6.0 Ω resistor alone, and a 3.0 Ω resistor in series with a capacitor. Long after the battery is connected, what current leaves the battery?`,
    options: [r`6.0 A`, r`2.0 A`, r`4.0 A`, r`0 A`],
    correctAnswer: 1,
    explanation: r`A full capacitor acts like an open branch, so only the 6.0 Ω branch carries current: 12/6.0 = 2.0 A. 6.0 A treats the capacitor as a wire, which is true only at the first instant, and 4.0 A is that first-instant current in the capacitor branch alone. 0 A would be right only if the capacitor blocked every path.`,
  },
  [r`At steady state, what is the voltage across a resistor in series with a full capacitor?`]: {
    question: r`A 20 V battery, a 5.0 kΩ resistor and a 2.0 μF capacitor form one series loop. Long after the loop is completed, how is the 20 V shared?`,
    options: [
      r`20 V on the resistor, 0 V on the capacitor`,
      r`10 V on the resistor, 10 V on the capacitor`,
      r`0 V on the resistor, 20 V on the capacitor`,
      r`4.0 V on the resistor, 16 V on the capacitor`,
    ],
    correctAnswer: 2,
    explanation: r`Once the capacitor is full no current flows, so the resistor drops IR = 0 and the capacitor holds the whole 20 V. Putting 20 V on the resistor describes the first instant instead. The 10 V and 4.0 V answers subtract an IR drop that is not there once the current has stopped.`,
  },
  [r`In an RC circuit, which quantity cannot jump when a switch moves?`]: {
    question: r`A capacitor sits charged to 8.0 V with nothing connected, so no current flows. At t = 0 a switch joins it across a 2.0 Ω resistor. Just after t = 0, what are the capacitor's voltage and the current?`,
    options: [
      r`Still 8.0 V, with a current of 4.0 A`,
      r`Already 0 V, with a current of 4.0 A`,
      r`Still 8.0 V, with a current of 0 A`,
      r`Already 0 V, with a current of 0 A`,
    ],
    correctAnswer: 0,
    explanation: r`The capacitor's voltage cannot jump, because its charge needs time to leave the plates, so it is still 8.0 V. The current can change in an instant: it jumps from zero to 8.0/2.0 = 4.0 A. A voltage that is already 0 V makes the charge vanish at once, and a current still at 0 A treats the current as the quantity that cannot jump.`,
  },
  [r`What is the time constant of an RC circuit?`]: {
    question: r`A backup circuit lets a 0.010 F capacitor discharge through a 200 Ω resistor. What is the time constant of the discharge?`,
    options: [r`20,000 s`, r`0.50 s`, r`5.0 × 10⁻⁵ s`, r`2.0 s`],
    correctAnswer: 3,
    explanation: r`τ = RC = 200 Ω × 0.010 F = 2.0 s, with R in ohms and C in farads. 20,000 divides R by C and 5.0 × 10⁻⁵ divides C by R, and neither ratio has units of seconds. 0.50 is 1/RC, the reciprocal of the time constant.`,
  },
  [r`Why does a charging capacitor fill more and more slowly?`]: {
    question: r`A 10 V battery charges a capacitor through a 2.0 Ω resistor. What is the current at the moment the capacitor's voltage has reached 6.0 V?`,
    options: [r`5.0 A`, r`2.0 A`, r`3.0 A`, r`8.0 A`],
    correctAnswer: 1,
    explanation: r`The capacitor's voltage opposes the battery, so only 10 − 6.0 = 4.0 V is left across the resistor and the current is 4.0/2.0 = 2.0 A. 5.0 A is ε/R, the current at the first instant only. 3.0 A divides the capacitor's own voltage by R, and 8.0 A adds the two voltages when they oppose each other.`,
  },
  [r`How full is a charging capacitor after one time constant, and after five?`]: {
    question: r`A capacitor that will finally hold 200 μC charges with a time constant of 4.0 s. About how much charge does it hold at 4.0 s, and by when can it be treated as full?`,
    options: [
      r`About 74 μC, and full by about 20 s`,
      r`About 126 μC, and full by about 8 s`,
      r`About 126 μC, and full by about 20 s`,
      r`About 200 μC, and full by about 4 s`,
    ],
    correctAnswer: 2,
    explanation: r`After one time constant a charging capacitor holds about 63% of its final charge, here 126 μC, and it passes 99% after about five time constants, 20 s. 74 μC is 37%, the figure for a discharge. Two time constants (8 s) is not enough to call it full, and one time constant is certainly not.`,
  },
  [r`How much charge is left on a discharging capacitor after one time constant, and after five?`]: {
    question: r`A capacitor holding 500 μC discharges through a resistor with a time constant of 0.20 s. About how much charge is left at 0.20 s, and then at 1.0 s?`,
    options: [
      r`About 185 μC, then almost none`,
      r`About 315 μC, then almost none`,
      r`About 185 μC, then about 37 μC`,
      r`About 250 μC, then about 50 μC`,
    ],
    correctAnswer: 0,
    explanation: r`After one time constant about 37% is left, 185 μC, and 1.0 s is five time constants, when essentially nothing remains. 315 μC is the 63% that has left, not what is left. The other answers treat the decay as a steady fraction per second, but each time constant removes the same fraction, so five of them leave under 1%.`,
  },
  [r`What is the final charge on a capacitor charged by a battery of EMF $\varepsilon$?`]: {
    question: r`A 9.0 V battery charges a 50 μF capacitor through a 10 kΩ resistor until it is full. The run is repeated with a 20 kΩ resistor. What is the final charge in each run?`,
    options: [
      r`450 μC, then 900 μC`,
      r`450 μC, then 225 μC`,
      r`5.6 μC, then 5.6 μC`,
      r`450 μC, then 450 μC`,
    ],
    correctAnswer: 3,
    explanation: r`The final charge is Cε = 50 μF × 9.0 V = 450 μC in both runs, because the resistor only sets how long charging takes. Doubling or halving the charge with the resistor confuses the time constant with the final charge. 5.6 comes from dividing C by ε instead of multiplying.`,
  },
  [r`What changes when $R$, $C$ or the battery voltage is doubled in a charging RC circuit?`]: {
    question: r`An RC charging circuit has a time constant of 6.0 ms and a final charge of 30 μC. The resistor is swapped for one with twice the resistance, and the battery for one with twice the voltage. What are the new values?`,
    options: [
      r`12 ms and 30 μC`,
      r`12 ms and 60 μC`,
      r`6.0 ms and 60 μC`,
      r`24 ms and 60 μC`,
    ],
    correctAnswer: 1,
    explanation: r`Doubling R doubles τ = RC to 12 ms, and doubling the battery voltage doubles the final charge Cε to 60 μC. Leaving the charge at 30 μC forgets that the battery sets the final charge. Leaving τ at 6.0 ms ignores the resistor, and 24 ms wrongly lets the battery voltage change the time constant too.`,
  },
  [r`Which way does the current flow while a capacitor discharges through a resistor?`]: {
    question: r`While a capacitor charged, the current ran clockwise around the loop and its top plate became positive. The battery is then swapped for a plain wire. During the discharge, which way does the current run, and what is the top plate's sign?`,
    options: [
      r`Clockwise, and the top plate is still positive`,
      r`Clockwise, and the top plate is now negative`,
      r`Counterclockwise, and the top plate is still positive`,
      r`Counterclockwise, and the top plate is now negative`,
    ],
    correctAnswer: 2,
    explanation: r`During discharge the charge leaves the plates by the way it arrived, so the current runs opposite to the charging current: counterclockwise. The top plate stays positive while its charge decays toward zero. A clockwise current would keep adding charge, and a negative top plate would need the capacitor to recharge the other way round.`,
  },

  // Video 4
  [r`How do you solve a resistor network with a capacitor branch at the instant the switch closes?`]: {
    question: r`An ideal 30 V battery and a switch are in series with a 5.0 Ω resistor, followed by two parallel paths: a 20 Ω resistor alone, and a second 20 Ω resistor in series with an uncharged capacitor. What current leaves the battery at the moment the switch is closed?`,
    options: [r`2.0 A`, r`1.2 A`, r`6.0 A`, r`0.67 A`],
    correctAnswer: 0,
    explanation: r`Replace the uncharged capacitor with a wire: the two 20 Ω paths combine to 10 Ω, the total is 15 Ω, and I = 30/15 = 2.0 A. 1.2 A deletes the capacitor's path, which is the steady-state method. 6.0 A keeps only the 5.0 Ω resistor, and 0.67 A puts all three resistors in series.`,
  },
  [r`How do you solve a resistor network with a capacitor branch at steady state?`]: {
    question: r`An ideal 20 V battery, a 4.0 Ω resistor and a 6.0 Ω resistor form one series loop. A branch holding a 10 Ω resistor in series with a capacitor is connected across the 4.0 Ω resistor. After a long time, what is the capacitor's voltage?`,
    options: [r`12 V`, r`20 V`, r`0 V`, r`8.0 V`],
    correctAnswer: 3,
    explanation: r`Delete the capacitor's branch: the loop current is 20/10 = 2.0 A, so the 4.0 Ω resistor has 8.0 V across it, and the capacitor reads the voltage between the two points its branch joins. 12 V is the voltage across the 6.0 Ω resistor, which the branch does not span. 20 V is the whole battery, and 0 V is the capacitor's voltage at the first instant.`,
  },
  [r`Once you know a capacitor's steady-state voltage, how do you find its charge and stored energy?`]: {
    question: r`In a network at steady state, a 4.0 μF capacitor is found to sit at 10 V. What are its charge and its stored energy?`,
    options: [
      r`40 μC and 400 μJ`,
      r`40 μC and 200 μJ`,
      r`20 μC and 200 μJ`,
      r`40 μC and 20 μJ`,
    ],
    correctAnswer: 1,
    explanation: r`Q = CV = 4.0 μF × 10 V = 40 μC, and U = ½CV² = ½ × 4.0 μF × 100 V² = 200 μJ. 400 μJ leaves the ½ off the energy, and 20 μC puts a ½ on the charge, where it does not belong. 20 μJ forgets to square the voltage.`,
  },
  [r`What must you do before computing $\tau = RC$?`]: {
    question: r`A timing circuit uses a 3.0 kΩ resistor and a 50 μF capacitor. What is its time constant?`,
    options: [r`150 s`, r`0.00015 s`, r`0.15 s`, r`1.5 s`],
    correctAnswer: 2,
    explanation: r`Convert first: 3.0 × 10³ Ω × 50 × 10⁻⁶ F = 0.15 s, or use the shortcut that kΩ × μF gives milliseconds, 150 ms. 150 s multiplies 3.0 by 50 with no conversion at all. 0.00015 s converts the microfarads but leaves the kilohms as 3.0, and 1.5 s slips a power of ten.`,
  },
  [r`How do you estimate the charge on a charging capacitor at $t = \tau$?`]: {
    question: r`A timer's empty 5.0 μF capacitor is fed from a 20 V supply through 100 kΩ. Roughly what charge has built up on it half a second later?`,
    options: [r`63 μC`, r`37 μC`, r`100 μC`, r`50 μC`],
    correctAnswer: 0,
    explanation: r`The time constant is 100 kΩ × 5.0 μF = 0.50 s, so half a second is one time constant, and the charge is about 63% of the final value, Cε = 100 μC. That gives 63 μC. 37 μC is the fraction still missing, 100 μC is the full charge that takes about five time constants, and 50 μC assumes the charge rises at a steady rate.`,
  },
  [r`A resistor sits in series with a capacitor in a side branch. What does it change at steady state?`]: {
    question: r`At steady state, the two points that a capacitor branch joins sit 6.0 V apart. The branch holds a 10 μF capacitor in series with a 2.0 kΩ resistor. What is the capacitor's final charge, and what would it be with an 8.0 kΩ resistor in the branch instead?`,
    options: [
      r`60 μC, then 15 μC with the larger resistor`,
      r`60 μC, then 240 μC with the larger resistor`,
      r`15 μC, then 60 μC with the larger resistor`,
      r`60 μC, then 60 μC with the larger resistor`,
    ],
    correctAnswer: 3,
    explanation: r`Once the current in the branch has stopped, its resistor drops no voltage, so the capacitor holds the full 6.0 V and Q = 10 μF × 6.0 V = 60 μC with either resistor. The larger resistor only makes charging slower. Cutting the charge to 15 μC subtracts a voltage drop that is not there, and raising it to 240 μC scales the charge with the resistance.`,
  },

  // Video 5
  [r`What symbol stands for membrane capacitance, and what is its SI unit?`]: {
    question: r`A recording sheet for a cell lists $C_m$ = 20 pF and a membrane voltage of size 50 mV. What can be worked out from these two numbers alone?`,
    options: [
      r`The leak current, 1.0 pA`,
      r`The separated charge, 1.0 pC`,
      r`The separated charge, 1000 pC`,
      r`The leak current, 2.5 pA`,
    ],
    correctAnswer: 1,
    explanation: r`$C_m$ is the membrane capacitance in farads, so Q = $C_m$V = 20 × 10⁻¹² F × 0.050 V = 1.0 × 10⁻¹² C, which is 1.0 pC. 1000 pC forgets to turn millivolts into volts. A current needs the membrane resistance, which is not given, so neither leak current can be found from a capacitance.`,
  },
  [r`What symbol stands for membrane resistance, and what is its SI unit?`]: {
    question: r`A neuron's data sheet lists $R_m$ = 100 MΩ. A steady current of 0.10 nA is injected and the cell settles. By how much has the membrane voltage shifted?`,
    options: [r`10 V`, r`1.0 mV`, r`10 mV`, r`0.10 mV`],
    correctAnswer: 2,
    explanation: r`$R_m$ is the membrane resistance in ohms, so the steady shift is IR = 1.0 × 10⁻¹⁰ A × 1.0 × 10⁸ Ω = 1.0 × 10⁻² V = 10 mV. 10 V multiplies 0.10 by 100 and ignores both prefixes. The 1.0 mV and 0.10 mV answers each lose a power of ten or more in the conversion.`,
  },
  [r`In the circuit model of a membrane, what are the bilayer, the ion channels and the ion gradients?`]: {
    question: r`A toxin blocks every ion channel in a patch of membrane but leaves the lipid bilayer and the ion gradients as they were. In the circuit model of that patch, what has changed?`,
    options: [
      r`The resistor paths are gone; the capacitor stays`,
      r`The capacitor is gone; the resistor paths stay`,
      r`The batteries are gone; the capacitor stays`,
      r`The batteries are gone; the resistor paths stay`,
    ],
    correctAnswer: 0,
    explanation: r`Each ion channel is a resistor in parallel with the capacitor, so blocking the channels removes the resistor paths. The bilayer is the capacitor, and it is untouched. The batteries are the ion gradients, which the toxin also left alone, so any answer that removes the capacitor or the batteries mixes up the three parts.`,
  },
  [r`How large is the electric field inside a resting membrane?`]: {
    question: r`The lipid bilayer of a nerve cell measures 8.0 nm across and holds 80 mV, with the cell's interior negative. How strong is the field within the bilayer, and which way does it point?`,
    options: [
      r`1.0 × 10⁷ V/m, pointing out of the cell`,
      r`10 V/m, pointing into the cell`,
      r`6.4 × 10⁻¹⁰ V/m, pointing into the cell`,
      r`1.0 × 10⁷ V/m, pointing into the cell`,
    ],
    correctAnswer: 3,
    explanation: r`E = V/d = 0.080 V ÷ 8.0 × 10⁻⁹ m = 1.0 × 10⁷ V/m, and the field points from the positive outer face toward the negative inner face, into the cell. Pointing out of the cell reverses the direction. 10 V/m divides 80 by 8.0 with no unit conversion, and 6.4 × 10⁻¹⁰ multiplies V by d.`,
  },
  [r`What physically is the resting potential, and how much charge does it take?`]: {
    question: r`A cell with a membrane capacitance of 100 pF rests at −60 mV. How much charge is separated across its membrane, and where is the positive layer?`,
    options: [
      r`6.0 pC, positive on the inner face`,
      r`6.0 pC, positive on the outer face`,
      r`6000 pC, positive on the outer face`,
      r`6000 pC, positive on the inner face`,
    ],
    correctAnswer: 1,
    explanation: r`Q = $C_m$V = 100 × 10⁻¹² F × 0.060 V = 6.0 × 10⁻¹² C = 6.0 pC, a tiny charge, with the excess positive charge on the outer face because the inside is negative. 6000 pC skips the conversion from millivolts to volts. Positive on the inner face would make the inside positive, not −60 mV.`,
  },
  [r`Does one action potential change the cell's bulk ion concentrations?`]: {
    question: r`A cell contains about 10¹² sodium ions. During one action potential about 10⁷ sodium ions enter it. By about what percent does the cell's sodium count change?`,
    options: [
      r`About 10%, so the bulk drops noticeably`,
      r`About 50%, so the gradient is halved`,
      r`About 0.001%, so the bulk barely changes`,
      r`About 100%, so the gradient is erased`,
    ],
    correctAnswer: 2,
    explanation: r`10⁷ out of 10¹² is 10⁻⁵, or 0.001%: only a few ions cross to flip the thin charge layer at the membrane, so the bulk concentrations hardly move. The larger percentages assume the voltage reversal needs the concentrations themselves to change, which would stop the cell from firing again without long recovery.`,
  },
  [r`What is the membrane time constant?`]: {
    question: r`Cell X has a membrane resistance of 100 MΩ and a membrane capacitance of 100 pF. Cell Y has 50 MΩ and 400 pF. In which cell does the voltage from a brief input fade more slowly?`,
    options: [
      r`Y, with τ of 20 ms against 10 ms`,
      r`X, with τ of 20 ms against 10 ms`,
      r`X, since its resistance is larger`,
      r`Y, since its resistance is smaller`,
    ],
    correctAnswer: 0,
    explanation: r`τ = $R_m C_m$: X has 1.0 × 10⁸ × 1.0 × 10⁻¹⁰ = 10 ms and Y has 5.0 × 10⁷ × 4.0 × 10⁻¹⁰ = 20 ms, so Y fades more slowly. Giving the 20 ms to X swaps the two. Judging by the resistance alone ignores the capacitance, and a smaller resistance on its own would make the fade faster, not slower.`,
  },
  [r`What does opening more ion channels do to the membrane's resistance and time constant?`]: {
    question: r`A transmitter triples the number of identical open channels in a patch of membrane. What happens to the patch's resistance $R_m$ and its time constant τ?`,
    options: [
      r`$R_m$ rises to three times, and τ triples as well`,
      r`$R_m$ falls to one third, and τ is unchanged`,
      r`$R_m$ is unchanged, and τ falls to one third`,
      r`$R_m$ falls to one third, and τ falls to one third`,
    ],
    correctAnswer: 3,
    explanation: r`Open channels are parallel paths, so three times as many cut $R_m$ to one third, and τ = $R_m C_m$ falls to one third because the bilayer's capacitance has not changed. A rise in $R_m$ treats the channels as series resistors. τ cannot stay the same when $R_m$ changes, and $R_m$ cannot stay the same when more paths open.`,
  },
  [r`How does the membrane time constant affect temporal summation?`]: {
    question: r`A neuron with a membrane time constant of 3 ms receives two identical small inputs 15 ms apart. When the second input arrives, how much of the first is left, and do the two add?`,
    options: [
      r`About 37% is left, so they add partly`,
      r`About 63% is left, so they add strongly`,
      r`Almost none is left, so they barely add`,
      r`All of it is left, so they add fully`,
    ],
    correctAnswer: 2,
    explanation: r`15 ms is five time constants, so the first input has essentially faded before the second arrives and there is almost no temporal summation. 37% is what remains after one time constant, 3 ms, not five. 63% and 100% would need a time constant much longer than the gap between the inputs.`,
  },
  [r`How does myelin change the membrane's capacitance and resistance?`]: {
    question: r`A bare stretch of axon membrane has a capacitance of 80 pF and a resistance of 2.0 MΩ. Wrapping makes it 20 identical membrane layers in series. What are the new capacitance and resistance?`,
    options: [
      r`1600 pF and 0.10 MΩ`,
      r`4.0 pF and 40 MΩ`,
      r`4.0 pF and 0.10 MΩ`,
      r`1600 pF and 40 MΩ`,
    ],
    correctAnswer: 1,
    explanation: r`Layers in series divide the capacitance, 80/20 = 4.0 pF, and multiply the resistance, 20 × 2.0 = 40 MΩ. 1600 pF with 0.10 MΩ has both the wrong way round, as if the layers were in parallel. The mixed answers get one of the two series rules right and reverse the other.`,
  },
  [r`What is saltatory conduction?`]: {
    question: r`A researcher stains a myelinated axon for voltage-gated Na⁺ channels and also maps where ions cross the membrane during an action potential. What does the map show?`,
    options: [
      r`Channels and ion flow are both found at the nodes`,
      r`Channels and ion flow are both spread under myelin`,
      r`Channels sit at the nodes, ion flow is under myelin`,
      r`Channels sit under myelin, ion flow is at the nodes`,
    ],
    correctAnswer: 0,
    explanation: r`In saltatory conduction the action potential jumps from one node of Ranvier to the next, where the voltage-gated Na⁺ channels cluster, so ions cross only at the nodes. Spreading both along the myelin describes an unmyelinated axon. The mixed answers separate the channels from the ion flow, but ions can only cross where the channels are.`,
  },
  [r`What are the two ways an axon conducts faster?`]: {
    question: r`Which axon design conducts an action potential fastest, and for what reason does its width matter?`,
    options: [
      r`Narrow and myelinated; a narrow core has less resistance`,
      r`Wide and unmyelinated; a wide core has more capacitance`,
      r`Narrow and unmyelinated; bare membrane has more channels`,
      r`Wide and myelinated; a wide core has less resistance`,
    ],
    correctAnswer: 3,
    explanation: r`Myelin and a wider diameter both speed conduction, and width helps because a wide core has a lower internal resistance, so current flows down the axon more easily. A narrow core has more resistance, not less. Leaving off the myelin gives up one of the two speed gains, whatever the width.`,
  },
  [r`Why does losing myelin, as in multiple sclerosis, slow or block conduction?`]: {
    question: r`A healthy internode with 40 layers in series has a capacitance of 2.0 pF. Disease strips it down to a single layer. What is its capacitance now, and how does the charge needed to shift it by 10 mV compare with before?`,
    options: [
      r`80 pF, needing 1/40 of the charge`,
      r`80 pF, needing 40 times the charge`,
      r`0.050 pF, needing 40 times the charge`,
      r`0.050 pF, needing 1/40 of the charge`,
    ],
    correctAnswer: 1,
    explanation: r`With 40 layers the capacitance was one fortieth of a single layer's, so the bare stretch has 40 × 2.0 = 80 pF, and Q = CV means 40 times the charge is needed for the same 10 mV. That is why the signal can fail before the next node. 0.050 pF divides when it should multiply, and "1/40 of the charge" gets the link between C and Q backward.`,
  },

  // Video 6
  [r`How do you multiply two numbers in scientific notation, as in $\tau = R_m C_m$?`]: {
    question: r`A membrane has a resistance of 4.0 × 10⁷ Ω and a capacitance of 2.5 × 10⁻¹⁰ F. What is the product of the two, written in proper scientific notation?`,
    options: [
      r`1.0 × 10⁻³ s`,
      r`6.5 × 10⁻³ s`,
      r`1.0 × 10⁻² s`,
      r`1.0 × 10¹⁸ s`,
    ],
    correctAnswer: 2,
    explanation: r`Multiply the front numbers, 4.0 × 2.5 = 10, and add the exponents, 7 + (−10) = −3, giving 10 × 10⁻³ = 1.0 × 10⁻² s. Writing 1.0 × 10⁻³ drops the extra power of ten carried by the 10. 6.5 adds the front numbers, and 10¹⁸ subtracts the exponents instead of adding them.`,
  },
  [r`A drug cuts a membrane's resistance to one quarter. What happens to its time constant?`]: {
    question: r`A channel-opening compound lowers a cell's membrane resistance from 120 MΩ to 30 MΩ. Its membrane capacitance stays at 100 pF. How does the membrane time constant change?`,
    options: [
      r`From 12 ms down to 3.0 ms`,
      r`From 12 ms up to 48 ms`,
      r`From 12 ms down to 6.0 ms`,
      r`It holds at 12 ms throughout`,
    ],
    correctAnswer: 0,
    explanation: r`τ = $R_m C_m$ starts at 1.2 × 10⁸ × 1.0 × 10⁻¹⁰ = 12 ms, and with the resistance at one quarter and the capacitance fixed it falls to one quarter, 3.0 ms. 48 ms moves the wrong way. 6.0 ms only halves it, as if τ went as the square root of the resistance, and no change ignores the resistance altogether.`,
  },
  [r`After a step of input current, when is a membrane's voltage change 63% complete, and when is it essentially complete?`]: {
    question: r`A step of current will finally shift a membrane's voltage by 10 mV. The membrane time constant is 8 ms. About how large is the shift at 8 ms, and when is it essentially complete?`,
    options: [
      r`About 3.7 mV at 8 ms; complete near 40 ms`,
      r`About 6.3 mV at 8 ms; complete near 16 ms`,
      r`About 10 mV at 8 ms; complete near 8 ms`,
      r`About 6.3 mV at 8 ms; complete near 40 ms`,
    ],
    correctAnswer: 3,
    explanation: r`After one time constant the change is about 63% complete, 6.3 mV, and it is essentially complete after about five time constants, 40 ms. 3.7 mV is the part still to come. Two time constants (16 ms) leaves the change well short of done, and one time constant is not a full response.`,
  },
  [r`What must you convert before finding the field inside a membrane?`]: {
    question: r`A membrane is 4.0 nm thick and has 100 mV across it. Dividing 100 by 4.0 gives 25, but that skips the unit work. With both quantities in SI units, what is the field?`,
    options: [
      r`2.5 × 10¹⁰ V/m`,
      r`2.5 × 10⁷ V/m`,
      r`2.5 × 10⁻² V/m`,
      r`4.0 × 10⁻¹⁰ V/m`,
    ],
    correctAnswer: 1,
    explanation: r`Convert both: 100 mV = 0.10 V and 4.0 nm = 4.0 × 10⁻⁹ m, so E = 0.10/(4.0 × 10⁻⁹) = 2.5 × 10⁷ V/m. 2.5 × 10¹⁰ converts the nanometers but leaves the voltage as 100, and 2.5 × 10⁻² converts the millivolts but leaves the thickness as 4.0. 4.0 × 10⁻¹⁰ multiplies V by d.`,
  },
  [r`How do you turn a separated charge into a number of monovalent ions?`]: {
    question: r`A patch of membrane has 3.2 × 10⁻¹³ C of charge separated across it. About how many monovalent ions does that charge correspond to? (e = 1.6 × 10⁻¹⁹ C)`,
    options: [
      r`5.1 × 10⁻³² ions`,
      r`5.0 × 10⁻⁷ ions`,
      r`2.0 × 10⁶ ions`,
      r`2.0 × 10³² ions`,
    ],
    correctAnswer: 2,
    explanation: r`N = Q/e = (3.2 × 10⁻¹³)/(1.6 × 10⁻¹⁹) = 2.0 × 10⁶ ions. 5.1 × 10⁻³² multiplies Q by e, and 5.0 × 10⁻⁷ divides e by Q. A count of ions must be a number larger than one, and 10³² comes from adding the exponents when a division subtracts them.`,
  },
  [r`What is the common trap when finding the charge separated across a membrane?`]: {
    question: r`A membrane with a capacitance of 40 pF has 50 mV across it. What are the charge separated across it and the energy it stores?`,
    options: [
      r`Q = 2.0 pC and U = 5.0 × 10⁻¹⁴ J`,
      r`Q = 1.0 pC and U = 5.0 × 10⁻¹⁴ J`,
      r`Q = 2.0 pC and U = 1.0 × 10⁻¹³ J`,
      r`Q = 1.0 pC and U = 1.0 × 10⁻¹³ J`,
    ],
    correctAnswer: 0,
    explanation: r`Q = $C_m$V = 40 × 10⁻¹² × 0.050 = 2.0 pC, with no ½, and U = ½CV² = ½ × 40 × 10⁻¹² × 2.5 × 10⁻³ = 5.0 × 10⁻¹⁴ J. A charge of 1.0 pC puts the ½ on the charge, which is the trap. An energy of 1.0 × 10⁻¹³ J leaves the ½ off the energy, where it does belong.`,
  },
  [r`A membrane is wrapped in $n$ identical layers in series. What charge now holds the same voltage?`]: {
    question: r`A bare stretch of membrane needs 12 pC of separated charge to hold 60 mV. It is then built up into 6 identical layers in series. What charge now holds the same 60 mV?`,
    options: [r`72 pC`, r`12 pC`, r`0.33 pC`, r`2.0 pC`],
    correctAnswer: 3,
    explanation: r`Six layers in series divide the capacitance by 6, and Q = (C/n)V, so the charge falls to 12/6 = 2.0 pC. 72 pC multiplies by the number of layers, as if they were in parallel. 12 pC assumes the wrapping changes nothing, and 0.33 pC divides by 6 twice.`,
  },

  // Video 7
  [r`What is ventricular fibrillation, and what does a defibrillator's shock do?`]: {
    question: r`A patient's heart monitor shows fast, chaotic electrical activity, yet there is no pulse. Why is no blood being pumped, and what is a shock meant to achieve?`,
    options: [
      r`Cells have stopped firing; the shock restarts each of them`,
      r`Cells fire out of step; the shock depolarizes them together`,
      r`Cells fire out of step; the shock supplies energy to pump`,
      r`Cells have stopped firing; the shock replaces the SA node`,
    ],
    correctAnswer: 1,
    explanation: r`In ventricular fibrillation the muscle cells fire chaotically and out of step, so the heart quivers. The shock depolarizes most of the muscle at once, which lets the SA node take back control. The cells have not stopped firing, as the chaotic trace shows, and the shock neither powers the pumping nor replaces the SA node.`,
  },
  [r`What is the largest current a battery can ever deliver?`]: {
    question: r`A portable battery pack has an EMF of 12 V and an internal resistance of 2.0 Ω. A shock needs about 30 A. What is the most current the pack could ever deliver on its own?`,
    options: [
      r`24 A, just short of the 30 A needed`,
      r`60 A, well above the 30 A needed`,
      r`6.0 A, far short of the 30 A needed`,
      r`360 A, far above the 30 A needed`,
    ],
    correctAnswer: 2,
    explanation: r`The largest current is ε/r = 12/2.0 = 6.0 A, reached with no outside resistance at all, so the pack alone cannot supply a shock. 24 A multiplies ε by r instead of dividing. 60 A and 360 A have no basis in ε/r, and any real load in the path would only lower the current further.`,
  },
  [r`What are the three stages of a defibrillator?`]: {
    question: r`A defibrillator is used once. In order, how do its filling stage and its emptying stage compare in duration and in power?`,
    options: [
      r`Slow fill at low power, then fast release at high power`,
      r`Fast fill at high power, then slow release at low power`,
      r`Slow fill at high power, then fast release at low power`,
      r`Fast fill at low power, then slow release at high power`,
    ],
    correctAnswer: 0,
    explanation: r`The capacitor is charged slowly, over seconds, at modest power, holds its energy, then empties through the chest in milliseconds at very high power. The reversed answer describes the stages backward. The mixed answers break the link between time and power: the same energy moved in less time always means more power.`,
  },
  [r`How is a defibrillator's energy setting reached?`]: {
    question: r`A unit's fixed 100 μF capacitor is charged to 1000 V on its lowest setting and to 3000 V on its highest. What energies do the two settings store?`,
    options: [
      r`50 J and 150 J`,
      r`100 J and 900 J`,
      r`0.10 J and 0.30 J`,
      r`50 J and 450 J`,
    ],
    correctAnswer: 3,
    explanation: r`With C fixed, each setting is a charging voltage: U = ½CV² gives ½ × 10⁻⁴ × 10⁶ = 50 J and ½ × 10⁻⁴ × 9 × 10⁶ = 450 J. Three times the voltage is nine times the energy, so 150 J is wrong because it treats the energy as proportional to V. 100 J and 900 J leave off the ½, and 0.10 and 0.30 are the charges CV.`,
  },
  [r`What sets how fast a defibrillator's capacitor empties through the chest?`]: {
    question: r`A 150 μF defibrillator capacitor empties through a chest path of 40 Ω. Poor pad contact then raises the path's resistance to 80 Ω. What happens to the discharge time constant?`,
    options: [
      r`τ halves from 6.0 ms to 3.0 ms`,
      r`τ doubles from 6.0 ms to 12 ms`,
      r`τ doubles from 6.0 s to 12 s`,
      r`τ stays at 6.0 ms either way`,
    ],
    correctAnswer: 1,
    explanation: r`τ = RC = 40 Ω × 150 × 10⁻⁶ F = 6.0 ms, and doubling the resistance doubles it to 12 ms, so the shock takes longer. Halving τ gets the effect of R backward. Seconds instead of milliseconds forgets to convert the microfarads, and an unchanged τ would mean the chest's resistance did not matter.`,
  },
  [r`How do the current and the power change during a capacitor's discharge?`]: {
    question: r`A shock begins with a peak current of 40 A and a peak power of 80 kW. About what are the current and the power one time constant later?`,
    options: [
      r`About 15 A and 30 kW`,
      r`About 25 A and 50 kW`,
      r`About 15 A and 11 kW`,
      r`About 15 A and 80 kW`,
    ],
    correctAnswer: 2,
    explanation: r`After one time constant the current is at about 37%, 15 A, and the power goes as I², so it is at about 14%, 11 kW. 30 kW gives the power the same 37% as the current, which misses the square. 25 A and 50 kW use 63%, the fraction that has gone, and a power still at 80 kW ignores the decay.`,
  },
  [r`Why does a defibrillator deliver so much more power than its charger supplies?`]: {
    question: r`A camera flash unit stores 6.0 J in its capacitor over 3.0 s, then releases it in 1.0 ms. What are the average power while charging and the average power of the flash?`,
    options: [
      r`2.0 W while charging and 6.0 kW in the flash`,
      r`18 W while charging and 6.0 mW in the flash`,
      r`2.0 W while charging and 2.0 W in the flash`,
      r`6.0 W while charging and 6.0 W in the flash`,
    ],
    correctAnswer: 0,
    explanation: r`P = U/t: 6.0 J over 3.0 s is 2.0 W, and the same 6.0 J over 1.0 × 10⁻³ s is 6000 W. The capacitor compresses the time, it does not add energy. 18 W and 6.0 mW multiply energy by time. Equal powers in and out would need equal times, and 6.0 W confuses the energy in joules with a power.`,
  },
  [r`A dielectric is slid into a capacitor that is still connected to its battery. What happens?`]: {
    question: r`A 10 μF capacitor stays wired to a 12 V battery while a slab with dielectric constant 3 is slid between its plates. What are its charge and voltage afterward?`,
    options: [
      r`120 μC at 4.0 V`,
      r`120 μC at 12 V`,
      r`360 μC at 36 V`,
      r`360 μC at 12 V`,
    ],
    correctAnswer: 3,
    explanation: r`The battery holds the voltage at 12 V, and the capacitance triples to 30 μF, so Q = CV rises from 120 μC to 360 μC. Keeping 120 μC while the voltage drops to 4.0 V is what happens to an isolated capacitor. 120 μC at 12 V ignores the slab, and 36 V would need the battery's voltage to change.`,
  },
  [r`A dielectric is slid into an isolated, charged capacitor. What happens?`]: {
    question: r`A 4.0 μF capacitor is charged to 30 V, storing 1800 μJ, and is then disconnected. A slab with dielectric constant 5 is slid between its plates. What are its voltage and stored energy now?`,
    options: [
      r`30 V and 9000 μJ`,
      r`6.0 V and 360 μJ`,
      r`6.0 V and 1800 μJ`,
      r`150 V and 360 μJ`,
    ],
    correctAnswer: 1,
    explanation: r`With the capacitor isolated the charge is fixed, and C rises five times, so V = Q/C falls to 30/5 = 6.0 V and U = Q²/2C falls to 1800/5 = 360 μJ. 30 V and 9000 μJ is the result when a battery stays connected. Keeping 1800 μJ assumes the energy cannot change, and 150 V multiplies the voltage when it should divide.`,
  },
  [r`A fixed capacitor must store twice the energy. By what factor does its voltage change?`]: {
    question: r`On its 100 J setting, a rescue unit fills its one built-in capacitor to 1000 V. Roughly what voltage does the 200 J setting use?`,
    options: [r`About 2000 V`, r`About 4000 V`, r`About 1410 V`, r`About 1500 V`],
    correctAnswer: 2,
    explanation: r`With C fixed, U goes as V², so twice the energy needs √2 ≈ 1.41 times the voltage: about 1410 V. Charging to 2000 V would store four times the energy, 400 J, and 4000 V would store sixteen times. 1500 V is a guess halfway between and would store 225 J.`,
  },
  [r`The same energy is to be stored in a larger capacitor. How does the voltage needed change?`]: {
    question: r`A unit stores its shock energy at 3000 V. A redesign stores the same energy in a capacitor with nine times the capacitance. What charging voltage does the redesign need?`,
    options: [r`1000 V`, r`333 V`, r`9000 V`, r`27,000 V`],
    correctAnswer: 0,
    explanation: r`With the energy fixed, V goes as 1/√C, so nine times the capacitance needs one third of the voltage: 1000 V. 333 V divides by 9 and forgets the square root, which would store only one ninth of the energy. 9000 V and 27,000 V raise the voltage when a larger capacitor needs less.`,
  },
  [r`What do the unit products Ω·F, F·V and F·V² each equal?`]: {
    question: r`A student works out 50 Ω × 2.0 × 10⁻⁴ F, and then 2.0 × 10⁻⁴ F × 1000 V. With the right units, what are the two results?`,
    options: [
      r`0.010 s and 0.20 J`,
      r`0.010 C and 0.20 J`,
      r`0.010 J and 0.20 C`,
      r`0.010 s and 0.20 C`,
    ],
    correctAnswer: 3,
    explanation: r`Ohms times farads are seconds, as in τ = RC, and farads times volts are coulombs, as in Q = CV, so the results are 0.010 s and 0.20 C. Joules need farads times volts squared, as in ½CV², so 0.20 J is the wrong unit for the second product. Coulombs or joules for the first product ignore that RC is a time.`,
  },

  // Video 8
  [r`How do you find the average power while a capacitor charges?`]: {
    question: r`A portable unit brings its 250 μF capacitor up to 2000 V in 4.0 s. At what average rate does energy flow into the capacitor during that time?`,
    options: [r`250 W`, r`125 W`, r`2000 W`, r`500 W`],
    correctAnswer: 1,
    explanation: r`The stored energy is U = ½CV² = ½ × 2.5 × 10⁻⁴ × 4.0 × 10⁶ = 500 J, and P = U/t = 500/4.0 = 125 W. 250 W leaves the ½ off the energy. 2000 W multiplies the energy by the time, and 500 is the energy in joules, not a power.`,
  },
  [r`What are the peak current and peak power when a charged capacitor discharges through a resistor?`]: {
    question: r`A test rig dumps a capacitor sitting at 1000 V into a 25 Ω heating element. What are the largest current and the largest power the element ever sees?`,
    options: [
      r`40 A and 20 kW`,
      r`40 A and 1.0 kW`,
      r`40 A and 40 kW`,
      r`0.025 A and 25 kW`,
    ],
    correctAnswer: 2,
    explanation: r`At the first instant the full 1000 V is across the resistor, so I₀ = 1000/25 = 40 A and P₀ = V²/R = 10⁶/25 = 40 kW. 20 kW borrows the ½ from the energy formula, which does not belong in the power. 1.0 kW is just I₀R, a voltage, and 0.025 A divides R by V.`,
  },
  [r`During a discharge, which drains faster: the capacitor's charge or its energy?`]: {
    question: r`A discharging capacitor starts with 400 μC of charge and 80 mJ of stored energy. About what are the charge and the energy after two time constants?`,
    options: [
      r`About 54 μC and 1.5 mJ`,
      r`About 54 μC and 11 mJ`,
      r`About 148 μC and 30 mJ`,
      r`About 148 μC and 11 mJ`,
    ],
    correctAnswer: 0,
    explanation: r`After two time constants the charge is at about 14%, 54 μC. The energy goes as Q², so it drains twice as fast and is at about 2%, 1.5 mJ. 11 mJ gives the energy the same 14% as the charge. 148 μC and 30 mJ are the 37% values for one time constant, not two.`,
  },
  [r`How do you find the voltage a capacitor needs to store a given energy?`]: {
    question: r`An engineer wants 100 J held on a 50 μF part. What charging voltage does that take?`,
    options: [r`4.0 × 10⁶ V`, r`1400 V`, r`2.0 V`, r`2000 V`],
    correctAnswer: 3,
    explanation: r`From U = ½CV², V² = 2U ÷ C = 200 ÷ 5.0 × 10⁻⁵ = 4.0 × 10⁶, and the square root is 2000 V. 4.0 × 10⁶ stops before taking the square root. 1400 V leaves out the factor of 2, and 2.0 V uses 50 for the capacitance instead of converting microfarads to farads.`,
  },
  [r`What is the common trap when a fixed capacitor must store four times the energy?`]: {
    question: r`A fixed capacitor stores 25 J at 500 V. To get 100 J, a trainee suggests charging it to 2000 V. What would 2000 V actually store, and what voltage gives 100 J?`,
    options: [
      r`100 J; 2000 V is the right voltage`,
      r`400 J; the right voltage is 1000 V`,
      r`200 J; the right voltage is 1000 V`,
      r`400 J; the right voltage is 707 V`,
    ],
    correctAnswer: 1,
    explanation: r`Energy goes as V², so four times the voltage stores sixteen times the energy, 400 J, and four times the energy needs only twice the voltage, 1000 V. Accepting 2000 V is the trap of scaling the voltage with the energy. 200 J treats the energy as growing more slowly than V², and 707 V is √2 times 500 V, which doubles the energy only.`,
  },
  [r`How does a shock's average power compare with the charging power?`]: {
    question: r`A rescue unit spends 8.0 s filling its capacitor at an average of 40 W, then delivers all of that energy to the patient in 4.0 ms. What is the average power of the shock?`,
    options: [r`320 W`, r`0.020 W`, r`80 kW`, r`10 kW`],
    correctAnswer: 2,
    explanation: r`The same energy is delivered in 4.0 ms instead of 8.0 s, which is 1/2000 of the time, so the power is 2000 times larger: 40 W × 2000 = 80 kW. 320 is the energy in joules, 40 × 8.0, not a power. 0.020 W divides by the ratio instead of multiplying, and 10 kW divides the charging power by the shock time.`,
  },
  [r`What must you convert before using $Q = CV$ or $U = \tfrac12 CV^2$ with a defibrillator's capacitor?`]: {
    question: r`A rescue unit's label gives its capacitor as 500 μF. When the unit is filled to 400 V, how many coulombs sit on the capacitor?`,
    options: [r`0.20 C`, r`200,000 C`, r`200 C`, r`0.10 C`],
    correctAnswer: 0,
    explanation: r`Convert first: 500 μF = 5.0 × 10⁻⁴ F, so Q = CV = 5.0 × 10⁻⁴ × 400 = 0.20 C. 200,000 C multiplies 500 by 400 with no conversion, and 200 C treats a microfarad as a thousandth of a farad. 0.10 C puts a ½ in front, which belongs to the energy, not the charge.`,
  },
}
