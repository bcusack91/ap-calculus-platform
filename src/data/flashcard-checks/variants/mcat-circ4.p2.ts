import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-circ4`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`How full is a charging capacitor after one time constant, and after five?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A heart-monitor circuit charges a capacitor toward a final charge of 50 μC with a time constant of 2.0 ms. About how much charge is on the capacitor 2.0 ms after charging begins?`,
        options: [r`About 19 μC`, r`About 25 μC`, r`About 32 μC`, r`About 50 μC`],
        correctAnswer: 2,
        explanation: r`2.0 ms is one time constant, and a charging capacitor then holds about 63% of its final charge: 0.63 × 50 μC ≈ 32 μC. About 19 μC is the 37% that is still missing, 25 μC treats one time constant as the halfway point, and 50 μC treats one time constant as full.`,
      },
      {
        question: r`A camera's flash capacitor charges with a time constant of 0.60 s. About how long after charging starts can the capacitor be treated as full?`,
        options: [r`About 0.60 s`, r`About 3.0 s`, r`About 1.2 s`, r`About 0.12 s`],
        correctAnswer: 1,
        explanation: r`A charging capacitor is past 99% after about five time constants: 5 × 0.60 s = 3.0 s. At 0.60 s it is only about 63% full and at 1.2 s it is still clearly short of full. Dividing by five instead of multiplying gives 0.12 s.`,
      },
      {
        question: r`A capacitor in a touch lamp reaches about 63% of its final charge 40 ms after charging starts. By the usual rule of thumb, about how long after the start is it treated as fully charged (about 99% of its final charge)?`,
        options: [r`About 63 ms`, r`About 80 ms`, r`About 400 ms`, r`About 200 ms`],
        correctAnswer: 3,
        explanation: r`Reaching 63% takes one time constant, so τ = 40 ms, and passing 99% takes about five of them: 5 × 40 ms = 200 ms. Two time constants, 80 ms, is not enough, 400 ms uses ten, and 63 ms comes from dividing 40 ms by 0.63.`,
      },
      {
        question: r`One time constant after the switch closes, a charging capacitor holds 6.3 μC. About what charge will it hold when it is full?`,
        options: [r`About 10 μC`, r`About 6.3 μC`, r`About 17 μC`, r`About 4.0 μC`],
        correctAnswer: 0,
        explanation: r`After one time constant the capacitor holds about 63% of its final charge, so the final charge is 6.3 μC ÷ 0.63 = 10 μC. Keeping 6.3 μC treats one time constant as full, 17 μC divides by 0.37 instead, and 4.0 μC multiplies by 0.63 instead of dividing.`,
      },
      {
        question: r`A bike light's 5.0 μF capacitor starts empty and is fed from a 20 V line through 4.0 kΩ. About what voltage has it reached 20 ms later?`,
        options: [r`About 13 V`, r`About 7.4 V`, r`About 20 V`, r`About 10 V`],
        correctAnswer: 0,
        explanation: r`τ = RC = (4.0 × 10³ Ω)(5.0 × 10⁻⁶ F) = 20 ms, so 20 ms is one time constant and the capacitor is at about 63% of 20 V, which is about 13 V. About 7.4 V is the 37% still to come, 20 V treats one time constant as full, and 10 V treats it as halfway.`,
      },
      {
        question: r`A capacitor charges toward a final charge of 400 μC with a time constant of 3.0 s. At 3.0 s after the start, about how much charge has still to arrive on it?`,
        options: [r`About 250 μC`, r`About 200 μC`, r`About 150 μC`, r`About 400 μC`],
        correctAnswer: 2,
        explanation: r`After one time constant the capacitor holds about 63% of 400 μC, about 250 μC, so the remaining 37% is still to arrive: 0.37 × 400 μC ≈ 150 μC. About 250 μC is what is already there, 200 μC treats one time constant as halfway, and 400 μC would mean nothing had arrived yet.`,
      },
    ],
  },
  [r`How much charge is left on a discharging capacitor after one time constant, and after five?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A camera flash capacitor holding 80 mC begins to discharge through the flash tube with a time constant of 2.0 ms. About how much charge is still on it 2.0 ms later?`,
        options: [r`About 50 mC`, r`About 40 mC`, r`About 0 mC`, r`About 30 mC`],
        correctAnswer: 3,
        explanation: r`After one time constant a discharging capacitor keeps about 37% of its charge: 0.37 × 80 mC ≈ 30 mC. About 50 mC is the 63% that has left, 40 mC treats one time constant as the halfway point, and it takes about five time constants, not one, to reach almost zero.`,
      },
      {
        question: r`After a power supply is unplugged, its filter capacitor drains through a safety resistor with a time constant of 3.0 s. About how long should a technician wait before treating the capacitor as empty?`,
        options: [r`About 15 s`, r`About 3.0 s`, r`About 6.0 s`, r`About 1.1 s`],
        correctAnswer: 0,
        explanation: r`Essentially no charge is left after about five time constants: 5 × 3.0 s = 15 s. At 3.0 s about 37% of the charge is still there, and at 6.0 s a noticeable part still remains. About 1.1 s comes from multiplying 3.0 s by 0.37.`,
      },
      {
        question: r`One time constant after a capacitor starts to discharge through a resistor, 7.4 μC remains on it. About how much charge did it start with?`,
        options: [r`About 12 μC`, r`About 20 μC`, r`About 2.7 μC`, r`About 4.7 μC`],
        correctAnswer: 1,
        explanation: r`About 37% is left after one time constant, so the starting charge is 7.4 μC ÷ 0.37 = 20 μC. Dividing by 0.63 gives about 12 μC, which uses the charging fraction. Multiplying 7.4 μC by 0.37 or by 0.63 gives 2.7 μC or 4.7 μC, both less than what remains.`,
      },
      {
        question: r`A 50 μF capacitor in a pump controller sits at 30 V when a 4.0 kΩ bleed path is switched in across it. About what voltage does it read 0.20 s later?`,
        options: [r`About 19 V`, r`About 15 V`, r`About 11 V`, r`About 30 V`],
        correctAnswer: 2,
        explanation: r`τ = RC = (4.0 × 10³ Ω)(50 × 10⁻⁶ F) = 0.20 s, so one time constant has passed and about 37% of the voltage is left: 0.37 × 30 V ≈ 11 V. About 19 V is the 63% that has been lost, 15 V treats one time constant as halfway, and 30 V ignores the discharge.`,
      },
      {
        question: r`A capacitor in a strobe light holds 600 μC and discharges with a time constant of 5.0 ms. About how much charge has LEFT its plates after 5.0 ms?`,
        options: [r`About 220 μC`, r`About 380 μC`, r`About 300 μC`, r`About 600 μC`],
        correctAnswer: 1,
        explanation: r`After one time constant about 37% remains, 0.37 × 600 μC ≈ 220 μC, so about 63% has left: 600 − 220 = 380 μC. About 220 μC is what is still on the plates, 300 μC treats one time constant as halfway, and 600 μC would need about five time constants.`,
      },
      {
        question: r`The charge on a discharging capacitor falls from 200 nC to about 74 nC in 12 ms. About how long after the discharge began will the capacitor be essentially empty?`,
        options: [r`About 24 ms`, r`About 19 ms`, r`About 120 ms`, r`About 60 ms`],
        correctAnswer: 3,
        explanation: r`74 nC is 37% of 200 nC, so 12 ms is one time constant, and the capacitor is essentially empty after about five: 5 × 12 ms = 60 ms. Two time constants, 24 ms, leaves a clear fraction behind, 19 ms divides 12 ms by 0.63, and 120 ms uses ten time constants.`,
      },
    ],
  },
  [r`What is the final charge on a capacitor charged by a battery of EMF $\varepsilon$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A car audio system's 2000 μF capacitor is filled from the 12 V car battery through a 100 Ω resistor. What charge does it hold once it is full?`,
        options: [r`120 mC`, r`24 mC`, r`200 mC`, r`6.0 mC`],
        correctAnswer: 1,
        explanation: r`Q = Cε = (2.0 × 10⁻³ F)(12 V) = 24 × 10⁻³ C = 24 mC, and the resistor plays no part. The value 120 mC comes from ε/R = 0.12, which is the starting current in amperes, 200 mC from RC = 0.20, which is a time in seconds, and 6.0 mC from dividing 12 by 2.0.`,
      },
      {
        question: r`A 30 μF capacitor in a toy is charged through a resistor until its charge levels off at 150 μC. What is the EMF of the battery that charged it?`,
        options: [r`0.20 V`, r`4500 V`, r`5.0 V`, r`180 V`],
        correctAnswer: 2,
        explanation: r`From Q = Cε, ε = Q/C = 150 μC ÷ 30 μF = 5.0 V. Inverting the ratio gives 0.20 V, multiplying the two numbers gives 4500, and adding them gives 180.`,
      },
      {
        question: r`A single 1.5 V cell charges a backup capacitor through a resistor, and the charge levels off at 6.0 mC. What is the capacitance?`,
        options: [r`4.0 mF`, r`9.0 mF`, r`0.25 mF`, r`4.5 mF`],
        correctAnswer: 0,
        explanation: r`From Q = Cε, C = Q/ε = (6.0 mC)/(1.5 V) = 4.0 mF. Multiplying 6.0 by 1.5 gives 9.0, inverting the ratio gives 0.25, and subtracting 1.5 from 6.0 gives 4.5.`,
      },
      {
        question: r`A touch-screen sensor has a capacitance of 200 pF and is charged by a 5.0 V source through a resistor. What is its final charge in coulombs? (1 pF = 10⁻¹² F)`,
        options: [r`1.0 × 10⁻⁶ C`, r`4.0 × 10⁻¹¹ C`, r`1.0 × 10³ C`, r`1.0 × 10⁻⁹ C`],
        correctAnswer: 3,
        explanation: r`Q = Cε = (200 × 10⁻¹² F)(5.0 V) = 1000 × 10⁻¹² C = 1.0 × 10⁻⁹ C. Leaving out the prefix altogether gives 1.0 × 10³, treating pico as 10⁻⁹ gives 1.0 × 10⁻⁶, and dividing the capacitance by the voltage gives 4.0 × 10⁻¹¹.`,
      },
      {
        question: r`A flash unit is redesigned: its battery now has three times the EMF, its capacitor half the capacitance, and its charging resistor twice the resistance. By what factor does the charge on the full capacitor change?`,
        options: [r`It becomes 3 times as large`, r`It becomes 1.5 times as large`, r`It becomes 0.75 times as large`, r`It becomes 6 times as large`],
        correctAnswer: 1,
        explanation: r`Q = Cε, so the factor is (1/2)(3) = 1.5, and the resistor does not enter. Multiplying in the resistor's factor of 2 gives 3, dividing by it gives 0.75, and doubling the capacitance instead of halving it gives 6.`,
      },
      {
        question: r`Capacitor X, 10 μF, is filled from a 6.0 V supply through 1.0 kΩ. Capacitor Y, 20 μF, is filled from a 3.0 V supply through 5.0 kΩ. What is the final charge on each?`,
        options: [r`60 μC on X and 12 μC on Y`, r`60 μC on X and 300 μC on Y`, r`60 μC on X and 60 μC on Y`, r`6.0 μC on X and 0.60 μC on Y`],
        correctAnswer: 2,
        explanation: r`Q = Cε gives (10 μF)(6.0 V) = 60 μC for X and (20 μF)(3.0 V) = 60 μC for Y; the resistors only set how long charging takes. Dividing Y's charge by its five times larger resistance gives 12 μC, multiplying by it gives 300 μC, and 6.0 and 0.60 come from ε/R, which is a current.`,
      },
    ],
  },
  [r`What changes when $R$, $C$ or the battery voltage is doubled in a charging RC circuit?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A training defibrillator's capacitor fills with a time constant of 4.0 s and ends with 80 μC. A capacitor twice as large is fitted, with the same resistor and battery. What are the new time constant and final charge?`,
        options: [r`8.0 s and 80 μC`, r`4.0 s and 160 μC`, r`2.0 s and 40 μC`, r`8.0 s and 160 μC`],
        correctAnswer: 3,
        explanation: r`Doubling C doubles τ = RC to 8.0 s, and it also doubles the final charge Q = Cε to 160 μC. Keeping 80 μC forgets that a larger capacitor holds more charge at the same voltage, keeping 4.0 s forgets that C is in τ, and halving both runs the change backward.`,
      },
      {
        question: r`A sensor's capacitor charges with a 50 ms time constant and levels off at 10 nC. The supply is then swapped for one of twice the voltage, with the same resistor and capacitor. What are the new time constant and the charge it levels off at?`,
        options: [r`50 ms and 20 nC`, r`100 ms and 20 nC`, r`100 ms and 10 nC`, r`25 ms and 20 nC`],
        correctAnswer: 0,
        explanation: r`τ = RC does not contain the supply voltage, so it stays 50 ms, while the final charge Q = Cε doubles to 20 nC. The answers with 100 ms or 25 ms let the voltage change the time constant, and 10 nC leaves the final charge alone.`,
      },
      {
        question: r`After one part of a charging RC circuit was swapped, its time constant rose from 3.0 ms to 6.0 ms while the final charge on the capacitor stayed the same. Which single change was made?`,
        options: [r`The capacitance was doubled`, r`The battery voltage was doubled`, r`The resistance was doubled`, r`The resistance was halved`],
        correctAnswer: 2,
        explanation: r`Doubling R doubles τ = RC and leaves the final charge Cε alone, which matches both observations. Doubling the capacitance would also double τ but would double the final charge too, doubling the battery voltage changes only the final charge, and halving R would shorten τ to 1.5 ms.`,
      },
      {
        question: r`A capacitor in a timer fills with a time constant of 20 ms and levels off at 40 μC. The resistor is swapped for one three times as large and the capacitor for one half as large; the battery stays. What are the new time constant and final charge?`,
        options: [r`30 ms and 40 μC`, r`30 ms and 20 μC`, r`120 ms and 20 μC`, r`13 ms and 80 μC`],
        correctAnswer: 1,
        explanation: r`τ = RC changes by 3 × 1/2 = 1.5, to 30 ms, and the final charge Cε halves with C, to 20 μC. Keeping 40 μC forgets that C sets the final charge, 120 ms multiplies by 3 and by 2, and 13 ms with 80 μC applies both changes upside down.`,
      },
      {
        question: r`A capacitor in a flash unit takes about 10 s to become essentially full. The charging resistor is replaced by one with twice the resistance, and the battery by one with twice the voltage. About how long does it take to fill now?`,
        options: [r`About 10 s`, r`About 40 s`, r`About 5.0 s`, r`About 20 s`],
        correctAnswer: 3,
        explanation: r`The filling time is about five time constants, and τ = RC doubles with R, so it now takes about 20 s. The battery voltage changes the final charge, not the time: counting it as a second doubling gives 40 s, letting it cancel the resistor gives 10 s, and 5.0 s halves the time.`,
      },
      {
        question: r`A capacitor fills with a time constant of 1.5 ms and ends with 12 μC. The circuit is rebuilt with twice the resistance, twice the capacitance and half the battery voltage. What are the new time constant and final charge?`,
        options: [r`3.0 ms and 12 μC`, r`6.0 ms and 6.0 μC`, r`6.0 ms and 12 μC`, r`3.0 ms and 24 μC`],
        correctAnswer: 2,
        explanation: r`τ = RC is doubled twice, to 6.0 ms. The final charge Cε is doubled by C and halved by the voltage, so it stays 12 μC. Answers with 3.0 ms count only one of the two doublings, 6.0 μC forgets that the larger capacitor holds more, and 24 μC forgets the halved voltage.`,
      },
    ],
  },
  [r`Which way does the current flow while a capacitor discharges through a resistor?`]: {
    kind: 'concept',
    more: [
      {
        question: r`While a capacitor charged, electrons moved through the resistor from left to right. The battery is then removed and the capacitor discharges through the same resistor. Which line describes the electrons in the resistor during the discharge?`,
        options: [r`They move left to right, and the flow fades to zero`, r`They move right to left, and the flow fades to zero`, r`They move right to left, and the flow stays steady`, r`They move left to right, and the flow grows larger`],
        correctAnswer: 1,
        explanation: r`During the discharge, charge leaves the plates it arrived on, so the flow in the resistor is opposite to the charging flow: right to left. The current decays along with the charge and voltage, so it does not stay steady or grow, and it does not keep its charging direction.`,
      },
      {
        question: r`With the battery removed, a full capacitor empties through the resistor it was charged through. Which statement about this process is NOT correct?`,
        options: [r`The current is opposite to the charging current`, r`The charge on each plate shrinks toward zero`, r`The capacitor's voltage falls as the current falls`, r`The current grows as the plates lose their charge`],
        correctAnswer: 3,
        explanation: r`The charge, voltage and current all decay together, so the current shrinks as the plates lose charge; it does not grow. The other three statements are true: the current runs opposite to the charging current, the plate charge falls toward zero, and the voltage falls along with the current.`,
      },
    ],
  },
  [r`How do you solve a resistor network with a capacitor branch at the instant the switch closes?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 V ideal battery and a switch feed a 4.0 Ω resistor. Beyond it the wiring forks into two routes that rejoin at the battery: a 12 Ω resistor, or a 6.0 Ω resistor followed by an uncharged capacitor. What current leaves the battery at the instant the switch closes?`,
        options: [r`0.75 A`, r`3.0 A`, r`1.5 A`, r`0.55 A`],
        correctAnswer: 2,
        explanation: r`Treat the uncharged capacitor as a wire: 12 Ω in parallel with 6.0 Ω is 4.0 Ω, the total is 8.0 Ω, and I = 12 V / 8.0 Ω = 1.5 A. Treating the capacitor branch as open gives 12/16 = 0.75 A, ignoring the parallel part gives 3.0 A, and adding all three resistors in series gives 0.55 A.`,
      },
      {
        question: r`A 10 V ideal battery feeds a 2.0 Ω resistor, after which the current can take either of two side-by-side paths back to the battery: a 6.0 Ω resistor, or a 3.0 Ω resistor followed by an uncharged capacitor. Just as the circuit is switched on, what is the voltage across the 3.0 Ω resistor?`,
        options: [r`5.0 V`, r`0 V`, r`10 V`, r`7.5 V`],
        correctAnswer: 0,
        explanation: r`With the capacitor replaced by a wire, 6.0 Ω in parallel with 3.0 Ω is 2.0 Ω, the total is 4.0 Ω and the battery current is 2.5 A. The parallel pair has 2.5 A × 2.0 Ω = 5.0 V, all of it across the 3.0 Ω resistor. 0 V treats the capacitor branch as carrying no current, 7.5 V comes from removing that branch, and 10 V ignores the 2.0 Ω resistor.`,
      },
      {
        question: r`A doorbell timer is a single loop: a 9.0 V battery, a push button, a 3.0 kΩ resistor and an empty capacitor. How much current flows at the instant the button is pressed?`,
        options: [r`0 mA`, r`27 mA`, r`0.33 mA`, r`3.0 mA`],
        correctAnswer: 3,
        explanation: r`At that instant the empty capacitor acts as a wire, so the resistor has the full 9.0 V: I = 9.0 V / 3000 Ω = 3.0 mA. Zero is the steady-state current, when the capacitor is full. Multiplying 9.0 by 3.0 gives 27, and inverting the ratio gives 0.33.`,
      },
      {
        question: r`An ideal 6.0 V battery and a switch feed a 2.0 Ω resistor that leads to a junction. From the junction, a 4.0 Ω resistor and an uncharged capacitor with no resistor of its own are connected in parallel, both returning to the battery. How much current does the battery supply at the instant the switch closes?`,
        options: [r`1.0 A`, r`3.0 A`, r`1.5 A`, r`0 A`],
        correctAnswer: 1,
        explanation: r`The uncharged capacitor acts as a plain wire in parallel with the 4.0 Ω resistor, so it shorts that resistor out and only the 2.0 Ω resistor limits the current: I = 6.0 V / 2.0 Ω = 3.0 A. Treating the capacitor as open gives 6.0/6.0 = 1.0 A, which is the steady-state value. Using only the 4.0 Ω resistor gives 1.5 A.`,
      },
      {
        question: r`A 30 V ideal battery, a switch, a 10 Ω resistor, a 2.0 Ω resistor and two uncharged capacitors are all connected in series in a single loop. What is the current at the moment the switch closes?`,
        options: [r`0 A`, r`3.0 A`, r`15 A`, r`2.5 A`],
        correctAnswer: 3,
        explanation: r`Each uncharged capacitor is replaced by a wire, which leaves 10 Ω + 2.0 Ω = 12 Ω in series: I = 30 V / 12 Ω = 2.5 A. Zero is the current long afterward, once the capacitors are full. Using only the 10 Ω resistor gives 3.0 A, and using only the 2.0 Ω resistor gives 15 A.`,
      },
      {
        question: r`At the instant its switch closes, a 30 V ideal battery supplies 3.0 A. The battery feeds an unknown resistor R, beyond which the wiring forks into two routes: a 6.0 Ω resistor, or a 3.0 Ω resistor followed by an uncharged capacitor. What is R?`,
        options: [r`8.0 Ω`, r`4.0 Ω`, r`10 Ω`, r`2.0 Ω`],
        correctAnswer: 0,
        explanation: r`The total resistance is 30 V / 3.0 A = 10 Ω. With the capacitor as a wire, 6.0 Ω in parallel with 3.0 Ω is 2.0 Ω, so R = 10 − 2.0 = 8.0 Ω. Treating the capacitor branch as open leaves 6.0 Ω and gives 4.0 Ω. The values 10 Ω and 2.0 Ω are the total and the parallel pair, not R.`,
      },
    ],
  },
  [r`How do you solve a resistor network with a capacitor branch at steady state?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 24 V supply drives a 3.0 Ω resistor and a 9.0 Ω resistor wired one after the other. A capacitor, with a 5.0 Ω resistor in series with it, is wired across the 9.0 Ω resistor. Once everything has settled, what is the capacitor's voltage?`,
        options: [r`6.0 V`, r`18 V`, r`24 V`, r`0 V`],
        correctAnswer: 1,
        explanation: r`Delete the capacitor branch: I = 24 V / 12 Ω = 2.0 A, so the 9.0 Ω resistor has 18 V, and the capacitor, joined to the same two points, has 18 V. The 5.0 Ω resistor carries no current and drops nothing. 6.0 V is the voltage across the 3.0 Ω resistor, 24 V is the whole supply, and 0 V treats the capacitor as a wire, which holds only at the start.`,
      },
      {
        question: r`A 9.0 V battery, a 2.0 kΩ resistor and a capacitor are connected in one loop and left for a long time. What are the current in the loop and the capacitor's voltage at the end?`,
        options: [r`4.5 mA and 9.0 V`, r`4.5 mA and 0 V`, r`0 mA and 0 V`, r`0 mA and 9.0 V`],
        correctAnswer: 3,
        explanation: r`At steady state the capacitor branch carries no current, and here that branch is the whole loop, so I = 0. With no current the resistor drops 0 V, and the capacitor has the full 9.0 V. The value 4.5 mA is 9.0 V / 2.0 kΩ, the current at the first instant, when the capacitor's voltage was 0 V.`,
      },
      {
        question: r`A 30 V ideal battery feeds a 5.0 Ω resistor, beyond which the wiring forks into two routes that rejoin at the battery: a 10 Ω resistor, or a second 10 Ω resistor followed by a capacitor. Once the capacitor has finished charging, what current does the battery supply?`,
        options: [r`2.0 A`, r`3.0 A`, r`0 A`, r`6.0 A`],
        correctAnswer: 0,
        explanation: r`Delete the capacitor branch. What is left is 5.0 Ω in series with 10 Ω, so I = 30 V / 15 Ω = 2.0 A. Keeping the capacitor branch as a plain 10 Ω path gives 30/10 = 3.0 A, the value at the first instant. Zero would need the capacitor to be in the only path, and 6.0 A uses the 5.0 Ω resistor alone.`,
      },
      {
        question: r`In a settled circuit, an ideal battery drives a 2.0 Ω resistor and a 6.0 Ω resistor in series. A fully charged capacitor connected across the 6.0 Ω resistor reads 9.0 V. What is the battery's EMF?`,
        options: [r`9.0 V`, r`3.0 V`, r`12 V`, r`36 V`],
        correctAnswer: 2,
        explanation: r`The capacitor's voltage equals the voltage across the 6.0 Ω resistor, so I = 9.0 V / 6.0 Ω = 1.5 A, and the EMF is 1.5 A × 8.0 Ω = 12 V. 9.0 V forgets the drop across the 2.0 Ω resistor, 3.0 V is only that drop, and 36 V multiplies 9.0 V by 8.0/2.0, the wrong ratio.`,
      },
      {
        question: r`A sensor circuit has a 12 V supply driving a 1.0 kΩ resistor and a 3.0 kΩ resistor in series. A capacitor is connected across the 1.0 kΩ resistor. What voltage does the capacitor settle at?`,
        options: [r`9.0 V`, r`12 V`, r`3.0 V`, r`4.0 V`],
        correctAnswer: 2,
        explanation: r`With the capacitor branch deleted, I = 12 V / 4.0 kΩ = 3.0 mA, and the 1.0 kΩ resistor has 3.0 mA × 1.0 kΩ = 3.0 V, which is the capacitor's voltage. 9.0 V is across the 3.0 kΩ resistor, which the capacitor is not connected to, 12 V is the whole supply, and 4.0 V divides 12 V by 3.0.`,
      },
      {
        question: r`A 20 V ideal battery drives three resistors in series: 2.0 Ω, then 3.0 Ω, then 5.0 Ω. A branch holding a capacitor and a 4.0 Ω resistor is connected from the point before the 3.0 Ω resistor to the point after the 5.0 Ω resistor, so it spans both. What is the capacitor's voltage at steady state?`,
        options: [r`16 V`, r`6.0 V`, r`10 V`, r`20 V`],
        correctAnswer: 0,
        explanation: r`Delete the capacitor branch: I = 20 V / 10 Ω = 2.0 A. The two points the branch joins are separated by 3.0 Ω + 5.0 Ω = 8.0 Ω, so the capacitor has 2.0 A × 8.0 Ω = 16 V. 6.0 V and 10 V each count only one of the two spanned resistors, and 20 V forgets the drop across the 2.0 Ω resistor.`,
      },
    ],
  },
  [r`Once you know a capacitor's steady-state voltage, how do you find its charge and stored energy?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A capacitor branch in a radio circuit settles at 6.0 V. The capacitor is 2.0 μF. What charge and what energy does it hold?`,
        options: [r`12 μC and 72 μJ`, r`12 μC and 6.0 μJ`, r`12 μC and 36 μJ`, r`6.0 μC and 36 μJ`],
        correctAnswer: 2,
        explanation: r`Q = CV = (2.0 μF)(6.0 V) = 12 μC and U = ½CV² = ½(2.0 μF)(36 V²) = 36 μJ. The answer 72 μJ leaves out the ½, 6.0 μJ leaves out the square, and 6.0 μC puts a ½ into the charge formula, where it does not belong.`,
      },
      {
        question: r`At steady state, the 50 μF capacitor in an amplifier's power supply sits at 20 V. How much energy does it store?`,
        options: [r`20 mJ`, r`10 mJ`, r`0.50 mJ`, r`1.0 mJ`],
        correctAnswer: 1,
        explanation: r`U = ½CV² = ½(50 × 10⁻⁶ F)(400 V²) = 0.010 J = 10 mJ. Leaving out the ½ gives 20 mJ, leaving out the square gives 0.50 mJ, and 1.0 comes from CV, which is the charge in millicoulombs and not an energy.`,
      },
      {
        question: r`A 5.0 μF capacitor in a settled circuit is found to hold 60 μC. What are its voltage and its stored energy?`,
        options: [r`12 V and 360 μJ`, r`12 V and 720 μJ`, r`12 V and 30 μJ`, r`300 V and 360 μJ`],
        correctAnswer: 0,
        explanation: r`V = Q/C = 60 μC ÷ 5.0 μF = 12 V, and U = ½CV² = ½(5.0 μF)(144 V²) = 360 μJ. The answer 720 μJ leaves out the ½, 30 μJ leaves out the square, and 300 V multiplies the charge by the capacitance instead of dividing.`,
      },
      {
        question: r`A 100 μF capacitor in a circuit at steady state stores 0.020 J. What is the voltage across it?`,
        options: [r`400 V`, r`200 V`, r`14 V`, r`20 V`],
        correctAnswer: 3,
        explanation: r`From U = ½CV², V² = 2U/C = 2(0.020 J)/(1.0 × 10⁻⁴ F) = 400 V², so V = 20 V. Stopping before the square root gives 400, using U/C with neither the 2 nor the root gives 200, and leaving out the 2 gives √200 ≈ 14 V.`,
      },
      {
        question: r`A circuit is rewired so that a capacitor's steady-state voltage rises from 4.0 V to 12 V. By what factors do its charge and its stored energy change?`,
        options: [r`Charge 3 times, energy 3 times`, r`Charge 3 times, energy 9 times`, r`Charge 9 times, energy 9 times`, r`Charge 3 times, energy 6 times`],
        correctAnswer: 1,
        explanation: r`The voltage triples. Q = CV is proportional to V, so the charge triples, and U = ½CV² is proportional to V², so the energy rises 3² = 9 times. Tripling the energy forgets the square, 9 times the charge squares the wrong quantity, and 6 times doubles the factor instead of squaring it.`,
      },
      {
        question: r`A 200 nF capacitor on a logic board sits at a steady 5.0 V. What are its charge and its stored energy? (1 nF = 10⁻⁹ F)`,
        options: [r`1.0 μC and 5.0 μJ`, r`1.0 μC and 0.50 μJ`, r`1000 μC and 2500 μJ`, r`1.0 μC and 2.5 μJ`],
        correctAnswer: 3,
        explanation: r`Q = CV = (2.0 × 10⁻⁷ F)(5.0 V) = 1.0 × 10⁻⁶ C = 1.0 μC, and U = ½CV² = ½(2.0 × 10⁻⁷ F)(25 V²) = 2.5 × 10⁻⁶ J = 2.5 μJ. The answer 5.0 μJ leaves out the ½, 0.50 μJ leaves out the square, and the pair in the thousands treats 200 nF as 200 μF.`,
      },
    ],
  },
  [r`What must you do before computing $\tau = RC$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A windshield-wiper delay circuit uses a 20 kΩ resistor with a 5.0 μF capacitor. What is its time constant?`,
        options: [r`100 s`, r`0.10 s`, r`1.0 × 10⁻⁴ s`, r`4.0 s`],
        correctAnswer: 1,
        explanation: r`τ = RC = (20 × 10³ Ω)(5.0 × 10⁻⁶ F) = 0.10 s; as a check, kΩ × μF gives milliseconds, and 20 × 5.0 = 100 ms. Multiplying 20 by 5.0 with no conversions gives 100, converting only the microfarads gives 1.0 × 10⁻⁴, and dividing 20 by 5.0 gives 4.0.`,
      },
      {
        question: r`A sensor input has a 2.0 MΩ resistor and a 30 nF capacitor. What is its time constant? (1 MΩ = 10⁶ Ω, 1 nF = 10⁻⁹ F)`,
        options: [r`60 ns`, r`60 s`, r`6.0 ms`, r`60 ms`],
        correctAnswer: 3,
        explanation: r`τ = RC = (2.0 × 10⁶ Ω)(30 × 10⁻⁹ F) = 60 × 10⁻³ s = 60 ms. Converting only the nanofarads gives 60 × 10⁻⁹ s, which is 60 ns, converting neither value gives 60 s, and 6.0 ms is a slip of one power of ten.`,
      },
      {
        question: r`A designer wants a time constant of 0.50 s using a 100 μF capacitor. What resistance is needed?`,
        options: [r`5.0 Ω`, r`0.0050 Ω`, r`5.0 kΩ`, r`50 kΩ`],
        correctAnswer: 2,
        explanation: r`R = τ/C = (0.50 s)/(100 × 10⁻⁶ F) = 5.0 × 10³ Ω = 5.0 kΩ. Dividing 0.50 by 100 with no conversion gives 0.0050, treating the 100 μF as 100 mF gives 5.0 Ω, and 50 kΩ is a slip of one power of ten.`,
      },
      {
        question: r`A pulse circuit must have a time constant of 4.0 ms, and its resistor is 2.0 kΩ. What capacitance is needed?`,
        options: [r`2.0 μF`, r`2.0 mF`, r`8.0 μF`, r`2.0 nF`],
        correctAnswer: 0,
        explanation: r`C = τ/R = (4.0 × 10⁻³ s)/(2.0 × 10³ Ω) = 2.0 × 10⁻⁶ F = 2.0 μF. Leaving the resistance as 2.0 gives 2.0 × 10⁻³ F, which is 2.0 mF, multiplying 4.0 by 2.0 gives 8.0, and 2.0 nF is too small by a factor of a thousand.`,
      },
      {
        question: r`A camera flash capacitor of 400 μF discharges through a flash tube that acts as a 25 Ω resistor. What is the time constant?`,
        options: [r`1.0 × 10⁴ s`, r`1.0 × 10⁻² s`, r`1.0 × 10¹ s`, r`1.6 × 10¹ s`],
        correctAnswer: 1,
        explanation: r`τ = RC = (25 Ω)(400 × 10⁻⁶ F) = 1.0 × 10⁻² s. Leaving the capacitance as 400 gives 1.0 × 10⁴, treating micro as milli gives 1.0 × 10¹, and dividing 400 by 25 gives 1.6 × 10¹.`,
      },
      {
        question: r`A technician needs an RC time constant of 6.0 ms. Which resistor and capacitor pair gives it?`,
        options: [r`3.0 Ω with 2.0 μF`, r`3.0 kΩ with 2.0 mF`, r`3.0 MΩ with 2.0 μF`, r`3.0 kΩ with 2.0 μF`],
        correctAnswer: 3,
        explanation: r`(3.0 × 10³ Ω)(2.0 × 10⁻⁶ F) = 6.0 × 10⁻³ s = 6.0 ms, since kΩ × μF gives milliseconds. The pair with 3.0 Ω gives 6.0 μs, and the pairs with 2.0 mF or with 3.0 MΩ each give 6.0 s.`,
      },
    ],
  },
  [r`How do you estimate the charge on a charging capacitor at $t = \tau$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An 8.0 V supply charges an empty 50 μF capacitor in a circuit whose time constant is 3.0 s. About how much charge is on the capacitor 3.0 s after charging starts?`,
        options: [r`About 150 μC`, r`About 400 μC`, r`About 250 μC`, r`About 200 μC`],
        correctAnswer: 2,
        explanation: r`The final charge is Cε = (50 μF)(8.0 V) = 400 μC, and at one time constant the capacitor holds about 0.63 × 400 μC ≈ 250 μC. About 150 μC uses 37%, the discharging fraction, 400 μC treats one time constant as full, and 200 μC treats it as halfway.`,
      },
      {
        question: r`A 3.0 V coin cell charges an empty 10 μF capacitor through a 2.0 kΩ resistor. About how much charge is on the capacitor after 20 ms?`,
        options: [r`About 19 μC`, r`About 11 μC`, r`About 30 μC`, r`About 15 μC`],
        correctAnswer: 0,
        explanation: r`τ = RC = (2.0 × 10³ Ω)(10 × 10⁻⁶ F) = 20 ms, so this is one time constant. The final charge is Cε = (10 μF)(3.0 V) = 30 μC, and 0.63 × 30 μC ≈ 19 μC. About 11 μC uses 37%, 30 μC is the full charge, and 15 μC treats one time constant as halfway.`,
      },
      {
        question: r`At one time constant after the switch closes, a 2.0 μF capacitor being charged by a battery holds about 12.6 μC. What is the battery's EMF?`,
        options: [r`6.3 V`, r`17 V`, r`4.0 V`, r`10 V`],
        correctAnswer: 3,
        explanation: r`At one time constant Q ≈ 0.63 Cε, so the final charge is 12.6 μC ÷ 0.63 = 20 μC and ε = 20 μC ÷ 2.0 μF = 10 V. Treating 12.6 μC as the full charge gives 6.3 V, dividing by 0.37 gives 17 V, and multiplying by 0.63 instead of dividing gives 4.0 V.`,
      },
      {
        question: r`A 100 V supply charges a capacitor through a resistor. One time constant after the start, the capacitor holds about 6.3 mC. What is its capacitance?`,
        options: [r`63 μF`, r`100 μF`, r`170 μF`, r`40 μF`],
        correctAnswer: 1,
        explanation: r`At one time constant Q ≈ 0.63 Cε, so the final charge is 6.3 mC ÷ 0.63 = 10 mC and C = 10 × 10⁻³ C ÷ 100 V = 1.0 × 10⁻⁴ F = 100 μF. Treating 6.3 mC as the full charge gives 63 μF, dividing by 0.37 gives 170 μF, and multiplying by 0.63 gives 40 μF.`,
      },
      {
        question: r`A touch sensor's 4.0 nF capacitance is charged from a 5.0 V line through a resistor. About how much charge has it gained one time constant after charging begins?`,
        options: [r`About 7.4 nC`, r`About 20 nC`, r`About 13 nC`, r`About 10 nC`],
        correctAnswer: 2,
        explanation: r`The final charge is Cε = (4.0 nF)(5.0 V) = 20 nC, and at one time constant the sensor holds about 0.63 × 20 nC ≈ 13 nC. About 7.4 nC is the 37% still to come, 20 nC is the full charge, and 10 nC treats one time constant as halfway.`,
      },
      {
        question: r`Two charging circuits use identical capacitors. Circuit A has a 6.0 V battery; circuit B has an 18 V battery and a resistor twice as large as A's. Each capacitor's charge is read at one time constant of its own circuit. How does B's reading compare with A's?`,
        options: [r`It is 3 times as large`, r`It is 6 times as large`, r`It is 1.5 times as large`, r`It is the same size`],
        correctAnswer: 0,
        explanation: r`Each reading is 0.63 Cε. The capacitors match and the EMF in the second circuit is three times as large, so its reading is 3 times as large. The resistor changes only how long one time constant lasts: multiplying by its factor of 2 gives 6, dividing by it gives 1.5, and "the same size" ignores the EMF.`,
      },
    ],
  },
  [r`A resistor sits in series with a capacitor in a side branch. What does it change at steady state?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In a settled network, the resistor that sits in series with a capacitor in a side branch is replaced by one five times larger, and the circuit is restarted with the capacitor empty. How does the capacitor's charging compare with before?`,
        options: [r`It charges more slowly, to a lower final voltage`, r`It charges just as fast, to a lower final voltage`, r`It charges more slowly, to the same final voltage`, r`It charges more quickly, to the same final voltage`],
        correctAnswer: 2,
        explanation: r`The branch resistor only limits the charging current, so a larger one makes charging slower. Once the current has stopped it drops no voltage, so the capacitor still ends at the voltage between the two points its branch joins. A lower final voltage would need a current in the branch at steady state, and a larger resistor cannot speed charging up.`,
      },
      {
        question: r`At steady state, the two points that a side branch joins are 12 V apart. The branch holds a 3.0 kΩ resistor in series with a capacitor. How is the 12 V shared between the two?`,
        options: [r`0 V on the resistor, 12 V on the capacitor`, r`12 V on the resistor, 0 V on the capacitor`, r`6.0 V on the resistor, 6.0 V on the capacitor`, r`4.0 V on the resistor, 8.0 V on the capacitor`],
        correctAnswer: 0,
        explanation: r`At steady state no current flows in the capacitor branch, so the resistor drops V = IR = 0 and the capacitor takes the whole 12 V. Giving the resistor all 12 V describes the first instant, with the capacitor still empty. Any split such as 6.0 V each or 4.0 V and 8.0 V would need a current still flowing through the resistor.`,
      },
    ],
  },
  [r`What symbol stands for membrane capacitance, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A paper reports one property of a cell's membrane as "35 pF". Which line names that quantity and writes it correctly in the base SI unit?`,
        options: [r`$C_m$ = 3.5 × 10⁻⁸ F`, r`$R_m$ = 3.5 × 10⁻¹¹ Ω`, r`$C_m$ = 3.5 × 10⁻¹¹ F`, r`$R_m$ = 3.5 × 10⁻⁸ Ω`],
        correctAnswer: 2,
        explanation: r`The farad is the unit of capacitance, so the value is the membrane capacitance $C_m$, and pico means 10⁻¹²: 35 × 10⁻¹² F = 3.5 × 10⁻¹¹ F. The lines with 10⁻⁸ use the wrong power of ten, and the lines with $R_m$ and ohms describe the membrane resistance.`,
      },
      {
        question: r`A student divides the charge separated across a cell's membrane, in coulombs, by the membrane voltage, in volts. Which quantity has been found, and in what unit?`,
        options: [r`$R_m$, in ohms`, r`$C_m$, in farads`, r`$C_m$, in ohms`, r`$R_m$, in farads`],
        correctAnswer: 1,
        explanation: r`Charge divided by voltage is capacitance, Q/V = C, and one coulomb per volt is one farad, so the result is the membrane capacitance $C_m$ in farads. The ohm is a volt per ampere and belongs to the membrane resistance $R_m$, which would need a current, not a charge.`,
      },
    ],
  },
  [r`What symbol stands for membrane resistance, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A steady current of 0.10 nA injected into a cell shifts its membrane voltage by 30 mV once it has settled. Which membrane quantity does 30 mV ÷ 0.10 nA give, and what is its value?`,
        options: [r`$C_m$ = 300 pF`, r`$R_m$ = 300 kΩ`, r`$C_m$ = 3.0 pF`, r`$R_m$ = 300 MΩ`],
        correctAnswer: 3,
        explanation: r`A voltage divided by a current is a resistance, in ohms, so this is the membrane resistance: $R_m$ = 3.0 × 10⁻² V ÷ 1.0 × 10⁻¹⁰ A = 3.0 × 10⁸ Ω = 300 MΩ. The answer 300 kΩ is too small by a thousand, and the answers in picofarads name the membrane capacitance, which is a charge divided by a voltage.`,
      },
      {
        question: r`A neuron's data sheet lists four values without labels: 80 MΩ, 80 pF, −80 mV and 8 ms. Which one is $R_m$, and how can you tell?`,
        options: [r`80 MΩ, since $R_m$ is measured in ohms`, r`80 pF, since $R_m$ is measured in farads`, r`−80 mV, since $R_m$ is measured in volts`, r`8 ms, since $R_m$ is measured in seconds`],
        correctAnswer: 0,
        explanation: r`$R_m$ is the membrane resistance, and resistance is measured in ohms; many megaohms is typical for a neuron. The value in farads is the membrane capacitance, the value in volts is the membrane voltage, and the value in seconds is a time such as the time constant.`,
      },
    ],
  },
  [r`In the circuit model of a membrane, what are the bilayer, the ion channels and the ion gradients?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In an experiment, the K⁺ concentration is made equal on the two sides of a membrane patch while its K⁺ channels stay open and the bilayer is untouched. Which change to the patch's circuit drawing shows this?`,
        options: [r`Remove the K⁺ resistor, and keep its battery`, r`Set the K⁺ battery to zero, and keep its resistor`, r`Remove the capacitor, and keep the K⁺ battery`, r`Set the capacitor to zero, and keep the K⁺ resistor`],
        correctAnswer: 1,
        explanation: r`An ion's concentration gradient is its battery, so with no K⁺ gradient that battery becomes zero. The channels are still open, so the resistor stays, and the bilayer, which is the capacitor, has not changed. Removing the resistor would show blocked channels, and the capacitor changes only if the bilayer does.`,
      },
      {
        question: r`In the standard electrical drawing of a membrane patch, how is each channel's resistor wired relative to the bilayer's capacitor, and why does the bilayer count as a capacitor?`,
        options: [r`In series; the bilayer insulates between two conducting fluids`, r`In parallel; the bilayer conducts between two insulating fluids`, r`In parallel; the bilayer insulates between two conducting fluids`, r`In series; the bilayer conducts between two insulating fluids`],
        correctAnswer: 2,
        explanation: r`Channels pass through the bilayer from one solution to the other, so each resistor joins the same two sides as the capacitor: they are in parallel. The bilayer is a capacitor because it is an insulator between two conducting salt solutions. The answers that call the lipid a conductor and the solutions insulators have the materials reversed.`,
      },
    ],
  },
  [r`How large is the electric field inside a resting membrane?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An artificial lipid bilayer in a lab chamber is 4.0 nm from face to face and has 100 mV applied to it. How strong is the field within it?`,
        options: [r`2.5 × 10⁷ V/m`, r`2.5 × 10¹⁰ V/m`, r`4.0 × 10⁻¹⁰ V/m`, r`2.5 × 10¹ V/m`],
        correctAnswer: 0,
        explanation: r`E = V/d = (0.10 V)/(4.0 × 10⁻⁹ m) = 2.5 × 10⁷ V/m. Leaving the voltage as 100 gives 2.5 × 10¹⁰, multiplying 0.10 V by 4.0 × 10⁻⁹ m gives 4.0 × 10⁻¹⁰, and dividing 100 by 4.0 with no conversions gives 2.5 × 10¹.`,
      },
      {
        question: r`A probe study finds a field of 1.5 × 10⁷ V/m within a bilayer that measures 6.0 nm from face to face. What voltage does the bilayer hold?`,
        options: [r`9.0 mV`, r`900 mV`, r`90 mV`, r`2.5 mV`],
        correctAnswer: 2,
        explanation: r`V = Ed = (1.5 × 10⁷ V/m)(6.0 × 10⁻⁹ m) = 9.0 × 10⁻² V = 90 mV. The answers 9.0 mV and 900 mV are slips of one power of ten, and 2.5 mV comes from dividing 1.5 by 6.0 instead of multiplying.`,
      },
      {
        question: r`A bilayer holds 50 mV, and the field within it is 1.0 × 10⁷ V/m. What is the distance between its two faces?`,
        options: [r`50 nm`, r`5.0 nm`, r`0.50 nm`, r`5.0 μm`],
        correctAnswer: 1,
        explanation: r`d = V/E = (0.050 V)/(1.0 × 10⁷ V/m) = 5.0 × 10⁻⁹ m = 5.0 nm. Leaving the voltage as 50 gives 5.0 × 10⁻⁶ m, which is 5.0 μm, and 50 nm and 0.50 nm are slips of one power of ten.`,
      },
      {
        question: r`Compared with a natural membrane, an artificial one is three times as thick and holds twice the voltage. How does the field inside the artificial membrane compare?`,
        options: [r`It is 3/2 as strong`, r`It is 6 times as strong`, r`It is 1/6 as strong`, r`It is 2/3 as strong`],
        correctAnswer: 3,
        explanation: r`E = V/d, so the field changes by 2 ÷ 3 = 2/3. Inverting the ratio gives 3/2, multiplying the two factors gives 6, and dividing by both gives 1/6.`,
      },
      {
        question: r`Dry air sparks when the field in it reaches about 3 × 10⁶ V/m. A resting membrane holds 70 mV across 7.0 nm. About how does the field in the membrane compare with the field that makes air spark?`,
        options: [r`About 30 times as strong`, r`About 3 times as strong`, r`About 1/3 as strong`, r`About 1/30 as strong`],
        correctAnswer: 1,
        explanation: r`E = V/d = (0.070 V)/(7.0 × 10⁻⁹ m) = 1.0 × 10⁷ V/m, and 1.0 × 10⁷ ÷ 3 × 10⁶ ≈ 3. About 30 times is a slip of one power of ten, and the two fractions invert the comparison.`,
      },
      {
        question: r`At the peak of an action potential the inside of a cell is 40 mV positive relative to the outside. The membrane is 8.0 nm thick. What are the size and direction of the field inside the membrane at that moment?`,
        options: [r`5.0 × 10⁹ V/m, pointing into the cell`, r`5.0 × 10⁶ V/m, pointing into the cell`, r`5.0 × 10⁶ V/m, pointing out of the cell`, r`5.0 × 10⁹ V/m, pointing out of the cell`],
        correctAnswer: 2,
        explanation: r`E = V/d = (0.040 V)/(8.0 × 10⁻⁹ m) = 5.0 × 10⁶ V/m. A field points from the positive side to the negative side, and here the inside is positive, so it points out of the cell; the inward direction belongs to the resting membrane. The answers with 10⁹ leave the voltage as 40 instead of 0.040 V.`,
      },
    ],
  },
  [r`What physically is the resting potential, and how much charge does it take?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A patch of muscle-cell membrane has a capacitance of 30 pF and sits at −70 mV. How much charge is held in the layer on each face?`,
        options: [r`2100 pC`, r`0.43 pC`, r`21 pC`, r`2.1 pC`],
        correctAnswer: 3,
        explanation: r`Q = $C_m$V = (30 × 10⁻¹² F)(0.070 V) = 2.1 × 10⁻¹² C = 2.1 pC. Leaving the voltage as 70 gives 2100 pC, dividing 30 by 70 gives 0.43, and 21 pC is a slip of one power of ten.`,
      },
      {
        question: r`The layer of charge on each face of a cell's membrane is 12 pC, and the membrane capacitance is 150 pF. What is the size of the membrane voltage?`,
        options: [r`80 mV`, r`13 mV`, r`1800 mV`, r`8.0 mV`],
        correctAnswer: 0,
        explanation: r`V = Q/$C_m$ = (12 pC)/(150 pF) = 0.080 V = 80 mV. Inverting the ratio gives 12.5, about 13, multiplying 12 by 150 gives 1800, and 8.0 mV is a slip of one power of ten.`,
      },
      {
        question: r`A cell membrane at 90 mV holds 4.5 pC of separated charge. What is the membrane capacitance?`,
        options: [r`0.050 pF`, r`50 pF`, r`20 pF`, r`410 pF`],
        correctAnswer: 1,
        explanation: r`$C_m$ = Q/V = 4.5 × 10⁻¹² C ÷ 0.090 V = 5.0 × 10⁻¹¹ F = 50 pF. Leaving the voltage as 90 gives 0.050, inverting the ratio gives 20, and multiplying 4.5 by 90 gives about 410.`,
      },
      {
        question: r`A neuron with a membrane capacitance of 100 pF goes from −70 mV to +30 mV during an action potential. How much charge must move onto the membrane's faces to make this change?`,
        options: [r`4.0 pC`, r`7.0 pC`, r`10 pC`, r`3.0 pC`],
        correctAnswer: 2,
        explanation: r`The voltage changes by 30 − (−70) = 100 mV, so ΔQ = $C_m$ΔV = (100 × 10⁻¹² F)(0.10 V) = 1.0 × 10⁻¹¹ C = 10 pC. Using 70 − 30 = 40 mV gives 4.0 pC, and 7.0 pC and 3.0 pC are the charges at −70 mV and at +30 mV alone, not the change between them.`,
      },
      {
        question: r`A membrane has $C_m$ = 2.0 × 10⁻¹⁰ F and a voltage of size 6.0 × 10⁻² V. How much charge is separated across it?`,
        options: [r`1.2 × 10⁻⁸ C`, r`1.2 × 10⁻¹¹ C`, r`3.3 × 10⁻⁹ C`, r`1.2 × 10⁻¹² C`],
        correctAnswer: 1,
        explanation: r`Q = $C_m$V = (2.0 × 10⁻¹⁰)(6.0 × 10⁻²) = 12 × 10⁻¹² = 1.2 × 10⁻¹¹ C. Subtracting the exponents instead of adding them gives 10⁻⁸, dividing the capacitance by the voltage gives 3.3 × 10⁻⁹, and 1.2 × 10⁻¹² forgets to raise the exponent when 12 is rewritten as 1.2.`,
      },
      {
        question: r`Cell B has three times the membrane capacitance of cell A, and its resting voltage is half the size of A's. How does the charge separated across B's membrane compare with A's?`,
        options: [r`It is 6 times as large`, r`It is 2/3 as large`, r`It is 1/6 as large`, r`It is 1.5 times as large`],
        correctAnswer: 3,
        explanation: r`Q = $C_m$V, so the factor is 3 × 1/2 = 1.5. Multiplying by 2 instead of by 1/2 gives 6, inverting the whole ratio gives 2/3, and dividing by both factors gives 1/6.`,
      },
    ],
  },
  [r`Does one action potential change the cell's bulk ion concentrations?`]: {
    kind: 'concept',
    more: [
      {
        question: r`During the upstroke of an action potential a neuron's membrane voltage goes from −70 mV to +30 mV. Which line describes what changed in the cell?`,
        options: [r`The charge layer at the membrane flipped; bulk Na⁺ barely moved`, r`The charge layer at the membrane stayed; bulk Na⁺ rose sharply`, r`The charge layer at the membrane flipped; bulk Na⁺ ran down fully`, r`The charge layer at the membrane stayed; bulk Na⁺ ran down fully`],
        correctAnswer: 0,
        explanation: r`The membrane voltage is set by a thin layer of excess charge at the membrane, and only a few ions need to cross to flip it. The bulk concentrations on the two sides hardly change, so the Na⁺ gradient is neither run down nor noticeably altered, and the voltage could not reverse if the charge layer had stayed as it was.`,
      },
      {
        question: r`A poison stops a neuron's Na⁺/K⁺ pumps. Immediately afterward, can the neuron still fire action potentials?`,
        options: [r`No, since one spike uses up the whole Na⁺ gradient`, r`Yes, but only one, since a spike halves the gradient`, r`Yes, many more, since each spike moves very few ions`, r`No, since the pumps supply the current of each spike`],
        correctAnswer: 2,
        explanation: r`Each action potential moves only a tiny number of ions compared with the bulk, so the gradients are still nearly intact after one spike and can drive many more before they run down. A spike does not use up or halve the gradient, and its current flows through channels, driven by the gradients, not through the pumps.`,
      },
    ],
  },
  [r`What is the membrane time constant?`]: {
    kind: 'calc',
    more: [
      {
        question: r`For a retinal cell, a recording gives 200 MΩ for the combined resistance of the channels and 50 pF for the capacitance of the bilayer. What is τ, the time that sets how quickly this cell's voltage responds to an input?`,
        options: [r`10 μs`, r`10 s`, r`10 ms`, r`4.0 ms`],
        correctAnswer: 2,
        explanation: r`τ = $R_m C_m$ = (2.0 × 10⁸ Ω)(5.0 × 10⁻¹¹ F) = 1.0 × 10⁻² s = 10 ms. The answers 10 μs and 10 s are slips of a factor of a thousand in the unit conversions, and 4.0 comes from dividing 200 by 50 instead of multiplying.`,
      },
      {
        question: r`A cortical cell's voltage responds with τ = 30 ms, and its $C_m$ is 150 pF. What is $R_m$, the combined resistance of its open channels?`,
        options: [r`200 MΩ`, r`20 MΩ`, r`2.0 MΩ`, r`5.0 MΩ`],
        correctAnswer: 0,
        explanation: r`$R_m$ = τ/$C_m$ = (3.0 × 10⁻² s)/(1.5 × 10⁻¹⁰ F) = 2.0 × 10⁸ Ω = 200 MΩ. The answers 20 MΩ and 2.0 MΩ are slips in the powers of ten, and 5.0 comes from dividing 150 by 30, which inverts the ratio.`,
      },
      {
        question: r`A muscle cell has τ = 8.0 ms and $R_m$ = 40 MΩ. What is $C_m$, the capacitance of its bilayer?`,
        options: [r`320 pF`, r`5.0 pF`, r`20 pF`, r`200 pF`],
        correctAnswer: 3,
        explanation: r`$C_m$ = τ/$R_m$ = (8.0 × 10⁻³ s)/(4.0 × 10⁷ Ω) = 2.0 × 10⁻¹⁰ F = 200 pF. Multiplying 8.0 by 40 gives 320, dividing 40 by 8.0 gives 5.0, and 20 pF is a slip of one power of ten.`,
      },
      {
        question: r`A cell has $R_m$ = 80 MΩ and $C_m$ = 250 pF. After a brief input, about how long does it take for the small voltage bump to be essentially gone?`,
        options: [r`About 20 ms`, r`About 100 ms`, r`About 40 ms`, r`About 7 ms`],
        correctAnswer: 1,
        explanation: r`τ = $R_m C_m$ = (8.0 × 10⁷ Ω)(2.5 × 10⁻¹⁰ F) = 2.0 × 10⁻² s = 20 ms, and a decay is essentially finished after about five time constants, 100 ms. At 20 ms about 37% of the bump is still there, 40 ms is only two time constants, and 7 ms is 0.37 × 20 ms.`,
      },
      {
        question: r`Cell A's voltage fades with τ = 5.0 ms. Cell B has twice the $R_m$ and three times the $C_m$ of cell A. With what τ does cell B's voltage fade?`,
        options: [r`25 ms`, r`7.5 ms`, r`30 ms`, r`3.3 ms`],
        correctAnswer: 2,
        explanation: r`τ = $R_m C_m$, so the factor is 2 × 3 = 6 and τ = 6 × 5.0 ms = 30 ms. Adding the factors gives 5 and 25 ms, dividing 3 by 2 gives 1.5 and 7.5 ms, and dividing 2 by 3 gives 3.3 ms.`,
      },
      {
        question: r`A steady current is switched on into a cell with $R_m$ = 50 MΩ and $C_m$ = 100 pF. About how long does the membrane voltage take to cover 63% of its final shift?`,
        options: [r`25 ms`, r`5.0 ms`, r`0.50 ms`, r`2.0 ms`],
        correctAnswer: 1,
        explanation: r`Covering 63% of the final shift takes one time constant: τ = $R_m C_m$ = (5.0 × 10⁷ Ω)(1.0 × 10⁻¹⁰ F) = 5.0 × 10⁻³ s = 5.0 ms. The answer 25 ms is five time constants, when the shift is essentially complete, 0.50 ms is a slip of one power of ten, and 2.0 comes from dividing 100 by 50.`,
      },
    ],
  },
  [r`What does opening more ion channels do to the membrane's resistance and time constant?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A patch of membrane has 50 identical open channels, each with a resistance of 10 GΩ (1 GΩ = 10⁹ Ω). What is the patch's membrane resistance $R_m$?`,
        options: [r`500 GΩ`, r`200 MΩ`, r`10 GΩ`, r`20 MΩ`],
        correctAnswer: 1,
        explanation: r`Open channels are parallel paths, so identical ones give $R_m$ = (10 × 10⁹ Ω)/50 = 2.0 × 10⁸ Ω = 200 MΩ. Multiplying by 50 treats the channels as resistors in series and gives 500 GΩ, 10 GΩ is one channel alone, and 20 MΩ is a slip of one power of ten.`,
      },
      {
        question: r`With 20 identical channels open, a cell's membrane resistance is 90 MΩ. A transmitter then opens 40 more of the same channels. What is the membrane resistance now?`,
        options: [r`45 MΩ`, r`270 MΩ`, r`90 MΩ`, r`30 MΩ`],
        correctAnswer: 3,
        explanation: r`There are now 60 open channels, three times as many parallel paths, so $R_m$ falls to one third: 90 MΩ ÷ 3 = 30 MΩ. Halving to 45 MΩ reads "40 more" as a doubling, 270 MΩ raises the resistance instead of lowering it, and 90 MΩ leaves it unchanged.`,
      },
      {
        question: r`A cell's membrane time constant is 8.0 ms. A blocker then closes half of its open channels, which are all identical. What is the time constant now?`,
        options: [r`16 ms`, r`4.0 ms`, r`8.0 ms`, r`32 ms`],
        correctAnswer: 0,
        explanation: r`Half as many parallel paths means twice the membrane resistance, and the capacitance belongs to the bilayer and does not change, so τ = $R_m C_m$ doubles to 16 ms. Halving to 4.0 ms is what opening more channels would do, 8.0 ms ignores the change, and 32 ms doubles twice.`,
      },
      {
        question: r`After a transmitter acts, a cell's membrane time constant falls from 20 ms to 5.0 ms with no change in the bilayer. How has the number of identical open channels changed?`,
        options: [r`It is 1/4 as large`, r`It is 2 times as large`, r`It is 4 times as large`, r`It is 16 times as large`],
        correctAnswer: 2,
        explanation: r`With $C_m$ fixed, τ = $R_m C_m$ falling to one quarter means $R_m$ fell to one quarter, and identical parallel channels give one quarter of the resistance when there are 4 times as many. One quarter as many channels would raise τ, and 2 or 16 come from taking a square root or a square that the relationship does not contain.`,
      },
      {
        question: r`Channels open in a cell and its membrane resistance falls from 150 MΩ to 50 MΩ. Before, the membrane capacitance was 80 pF and τ was 12 ms. What are the capacitance and τ afterward?`,
        options: [r`27 pF and 1.3 ms`, r`240 pF and 12 ms`, r`80 pF and 12 ms`, r`80 pF and 4.0 ms`],
        correctAnswer: 3,
        explanation: r`The capacitance belongs to the bilayer, so it stays 80 pF, and τ = $R_m C_m$ = (5.0 × 10⁷ Ω)(8.0 × 10⁻¹¹ F) = 4.0 ms, one third of before. Lowering the capacitance to 27 pF as well, or raising it to 240 pF to keep τ fixed, changes something the channels do not touch, and 80 pF with 12 ms forgets that τ contains $R_m$.`,
      },
      {
        question: r`Two cells have identical bilayers and identical channels. Cell A has 300 channels open and a time constant of 6.0 ms. Cell B has 100 channels open. What is cell B's time constant?`,
        options: [r`2.0 ms`, r`18 ms`, r`6.0 ms`, r`54 ms`],
        correctAnswer: 1,
        explanation: r`With one third as many parallel channels, the second cell has three times the membrane resistance and the same capacitance, so its τ is 3 × 6.0 ms = 18 ms. The answer 2.0 ms has fewer channels lowering the resistance, 6.0 ms ignores the channels, and 54 ms applies the factor of 3 twice.`,
      },
    ],
  },
  [r`How does the membrane time constant affect temporal summation?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Before a drug, pairs of small inputs arriving 10 ms apart added together in a neuron. After the drug, the same pairs no longer add. What did the drug most likely do to the membrane time constant τ?`,
        options: [r`It shortened τ, so each input fades sooner`, r`It lengthened τ, so each input fades sooner`, r`It shortened τ, so each input fades later`, r`It lengthened τ, so each input fades later`],
        correctAnswer: 0,
        explanation: r`Inputs add when the first is still present as the second arrives. Losing summation means the first input now fades before 10 ms has passed, which is what a shorter τ does. A longer τ makes inputs fade later and would help summation, and the two mixed answers pair a change in τ with the opposite effect on fading.`,
      },
      {
        question: r`A neuron's membrane time constant is 20 ms. Two identical inputs each raise the voltage by 5 mV at once, and the second arrives 20 ms after the first, which has been decaying exponentially in between. About how high above rest is the voltage just after the second input?`,
        options: [r`About 10 mV`, r`About 5 mV`, r`About 8 mV`, r`About 7 mV`],
        correctAnswer: 3,
        explanation: r`The gap is one time constant, so about 37% of the first input is left, about 2 mV, and the second input lands on top of it: 5 + 2 ≈ 7 mV. About 10 mV assumes the first has not faded at all, 5 mV assumes it has gone completely, and 8 mV uses 63% as the fraction left.`,
      },
    ],
  },
  [r`How does myelin change the membrane's capacitance and resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Before myelination, a length of axon membrane measures 150 pF. Schwann cells then wrap it into 30 identical layers in series. What does its capacitance measure afterward?`,
        options: [r`4500 pF`, r`150 pF`, r`5.0 pF`, r`0.20 pF`],
        correctAnswer: 2,
        explanation: r`Identical capacitors in series give C = C_one/n = 150 pF ÷ 30 = 5.0 pF. Multiplying by 30 gives 4500 pF, which is the rule for resistance, 150 pF ignores the wrapping, and 0.20 comes from dividing 30 by 150.`,
      },
      {
        question: r`A single sheet of glial membrane has a leak resistance of 0.50 MΩ. A sheath stacks 60 such sheets, one on top of another, around an axon. What is the leak resistance of the whole sheath?`,
        options: [r`30 MΩ`, r`120 MΩ`, r`0.50 MΩ`, r`0.0083 MΩ`],
        correctAnswer: 0,
        explanation: r`The stacked sheets are resistors in series, which add, so R = n R_one = 60 × 0.50 MΩ = 30 MΩ. Dividing by 60 gives 0.0083 MΩ, which is the rule for the capacitance, dividing 60 by 0.50 gives 120, and 0.50 MΩ ignores the wrapping.`,
      },
      {
        question: r`A stretch of axon measures 120 pF bare and 3.0 pF once it is myelinated. Treating the wraps as identical layers in series, how many layers are there?`,
        options: [r`360 layers`, r`117 layers`, r`4 layers`, r`40 layers`],
        correctAnswer: 3,
        explanation: r`C = C_one/n, so n = 120 pF ÷ 3.0 pF = 40 layers. Multiplying the two values gives 360, subtracting them gives 117, and 4 is a slip of one power of ten.`,
      },
      {
        question: r`A bare stretch of membrane has a resistance R and a capacitance C whose product RC is 2.0 ms. It is then wrapped into 50 identical layers in series. What is the product RC for the wrapped stretch?`,
        options: [r`100 ms`, r`2.0 ms`, r`0.040 ms`, r`5000 ms`],
        correctAnswer: 1,
        explanation: r`The resistance becomes 50R and the capacitance becomes C/50, so the product is (50R)(C/50) = RC = 2.0 ms, unchanged. Applying only the resistance change gives 100 ms, applying only the capacitance change gives 0.040 ms, and multiplying by 50 twice gives 5000 ms.`,
      },
      {
        question: r`A bare stretch of axon has a capacitance of 90 pF. After it is wrapped into 30 identical layers in series, how much charge is needed to shift the wrapped stretch's voltage by 20 mV?`,
        options: [r`1.8 pC`, r`54 pC`, r`0.060 pC`, r`60 pC`],
        correctAnswer: 2,
        explanation: r`The wrapped capacitance is 90 pF ÷ 30 = 3.0 pF, so Q = CV = (3.0 × 10⁻¹² F)(0.020 V) = 6.0 × 10⁻¹⁴ C = 0.060 pC. Using the bare 90 pF gives 1.8 pC, multiplying the capacitance by 30 gives 54 pC, and leaving the voltage as 20 gives 60 pC.`,
      },
      {
        question: r`With 50 mV across it, a bare stretch of membrane with a resistance of 1.0 MΩ leaks 50 nA. It is wrapped into 25 identical layers in series. How much current leaks with the same 50 mV across the wrapped stretch?`,
        options: [r`2.0 nA`, r`50 nA`, r`1250 nA`, r`25 nA`],
        correctAnswer: 0,
        explanation: r`The resistance becomes 25 × 1.0 MΩ = 25 MΩ, so I = V/R = (0.050 V)/(2.5 × 10⁷ Ω) = 2.0 × 10⁻⁹ A = 2.0 nA, one twenty-fifth of before. Keeping 50 nA ignores the wrapping, 1250 nA multiplies the leak by 25 instead of dividing, and 25 nA only halves it.`,
      },
    ],
  },
  [r`What is saltatory conduction?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A toxin blocks the voltage-gated Na⁺ channels at the nodes of Ranvier of a myelinated axon and nowhere else. What happens to an action potential traveling along that axon?`,
        options: [r`It continues, since the signal is renewed under the myelin`, r`It fails, since the signal is renewed only at the nodes`, r`It speeds up, since fewer ions now cross the membrane`, r`It continues, since the myelin itself carries the signal`],
        correctAnswer: 1,
        explanation: r`In a myelinated axon the voltage-gated Na⁺ channels cluster at the nodes, and the action potential is regenerated only there as it jumps from node to node. With those channels blocked nothing can renew it, so it dies out. No renewal happens under the myelin, and myelin is an insulator, not a carrier of the signal.`,
      },
      {
        question: r`Two things happen as a signal moves along a myelinated axon: (1) current spreads passively inside the axon, and (2) voltage-gated Na⁺ channels open and ions cross the membrane. Where does each one mainly take place?`,
        options: [r`(1) along the internodes; (2) at the nodes of Ranvier`, r`(1) at the nodes of Ranvier; (2) along the internodes`, r`(1) and (2) both take place only along the internodes`, r`(1) and (2) both take place within the myelin sheath`],
        correctAnswer: 0,
        explanation: r`Under the myelin, current simply flows along the inside of the axon from one node to the next, and the voltage-gated Na⁺ channels, clustered at the nodes, open there to regenerate the action potential. Ions do not cross the membrane along the wrapped internodes, and the signal travels inside the axon, not within the sheath.`,
      },
    ],
  },
  [r`What are the two ways an axon conducts faster?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Squid have no myelin, yet the axons that trigger their escape jet must conduct very quickly. Which feature of these axons makes that possible, and why?`,
        options: [r`They are very narrow, lowering the internal resistance`, r`They are very wide, raising the internal resistance`, r`They are very narrow, raising the membrane capacitance`, r`They are very wide, lowering the internal resistance`],
        correctAnswer: 3,
        explanation: r`Without myelin, the remaining way to conduct faster is a wider axon: a wide core has a lower internal resistance, so current flows down it more easily. That is why the squid's axons are giant. A narrow axon has a higher internal resistance and conducts more slowly, and raising a resistance or a capacitance would not speed conduction.`,
      },
      {
        question: r`Four axons are compared. P is narrow and bare, Q is wide and bare, R is narrow and myelinated, and S is wide and myelinated. Which conducts slowest, and which fastest?`,
        options: [r`S is the slowest and P is the fastest`, r`Q is the slowest and R is the fastest`, r`P is the slowest and S is the fastest`, r`R is the slowest and Q is the fastest`],
        correctAnswer: 2,
        explanation: r`Myelin and a wider diameter each make conduction faster. The narrow bare axon has neither, so it is slowest, and the wide myelinated axon has both, so it is fastest. The axons with only one of the two features fall in between, so neither of them can be the slowest or the fastest.`,
      },
    ],
  },
  [r`Why does losing myelin, as in multiple sclerosis, slow or block conduction?`]: {
    kind: 'concept',
    more: [
      {
        question: r`After myelin is lost from a stretch of axon, signals along it arrive late or not at all. Which pair of changes in the stripped internodes explains this?`,
        options: [r`The capacitance rises and the resistance falls`, r`The capacitance falls and the resistance rises`, r`The capacitance and the resistance both rise`, r`The capacitance and the resistance both fall`],
        correctAnswer: 0,
        explanation: r`Myelin's layers in series lower the capacitance and raise the resistance, so stripping them does the opposite: the capacitance rises and the resistance falls. More charge is then needed per millivolt and more current leaks out, so the signal can fade before the next node. Lower capacitance with higher resistance describes adding myelin, not losing it.`,
      },
      {
        question: r`A healthy internode with 50 identical layers in series has a membrane resistance of 100 MΩ. Disease strips it down to a single layer. What is its resistance now, and how does the current leaking out at a given voltage compare with before?`,
        options: [r`2.0 MΩ, leaking 1/50 of the current`, r`2.0 MΩ, leaking 50 times the current`, r`5000 MΩ, leaking 50 times the current`, r`5000 MΩ, leaking 1/50 of the current`],
        correctAnswer: 1,
        explanation: r`Resistances in series add, so one layer has 100 MΩ ÷ 50 = 2.0 MΩ, and by I = V/R the leak at a given voltage is 50 times larger. That lost current is why the signal can fail before the next node. Multiplying to 5000 MΩ runs the change backward, and a lower resistance cannot leak less current.`,
      },
    ],
  },
  [r`How do you multiply two numbers in scientific notation, as in $\tau = R_m C_m$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A cell has $R_m$ = 3.0 × 10⁸ Ω and $C_m$ = 2.0 × 10⁻¹⁰ F. What is the product $R_m C_m$?`,
        options: [r`5.0 × 10⁻² s`, r`6.0 × 10¹⁸ s`, r`6.0 × 10⁻⁸⁰ s`, r`6.0 × 10⁻² s`],
        correctAnswer: 3,
        explanation: r`Multiply the front numbers, 3.0 × 2.0 = 6.0, and add the exponents, 8 + (−10) = −2, giving 6.0 × 10⁻² s. Adding the front numbers gives 5.0, subtracting the exponents gives 10¹⁸, and multiplying the exponents gives 10⁻⁸⁰.`,
      },
      {
        question: r`A student multiplies 5.0 × 10⁷ Ω by 6.0 × 10⁻¹⁰ F for a time constant. What is the result in proper scientific notation?`,
        options: [r`3.0 × 10⁻⁴ s`, r`3.0 × 10⁻² s`, r`3.0 × 10⁻³ s`, r`1.1 × 10⁻² s`],
        correctAnswer: 1,
        explanation: r`5.0 × 6.0 = 30 and 7 + (−10) = −3, so the product is 30 × 10⁻³ s; rewriting 30 as 3.0 × 10¹ raises the exponent by one, to 3.0 × 10⁻² s. Leaving the exponent at −3 gives 3.0 × 10⁻³, lowering it instead gives 3.0 × 10⁻⁴, and adding the front numbers gives 11 × 10⁻³ = 1.1 × 10⁻².`,
      },
      {
        question: r`The charge on a membrane is $Q = C_m V$. With $C_m$ = 4.0 × 10⁻¹¹ F and $V$ = 7.0 × 10⁻² V, what is $Q$?`,
        options: [r`2.8 × 10⁻¹² C`, r`2.8 × 10⁻¹³ C`, r`2.8 × 10⁻¹⁴ C`, r`1.1 × 10⁻¹² C`],
        correctAnswer: 0,
        explanation: r`4.0 × 7.0 = 28 and −11 + (−2) = −13, so Q = 28 × 10⁻¹³ = 2.8 × 10⁻¹² C. Leaving the exponent at −13 after rewriting 28 as 2.8 gives 2.8 × 10⁻¹³, moving it the wrong way gives 2.8 × 10⁻¹⁴, and adding the front numbers gives 11 × 10⁻¹³ = 1.1 × 10⁻¹².`,
      },
      {
        question: r`A bench circuit has R = 2.0 × 10³ Ω and C = 4.5 × 10⁻⁶ F. What is the product RC?`,
        options: [r`9.0 × 10⁻¹⁸ s`, r`6.5 × 10⁻³ s`, r`9.0 × 10⁻³ s`, r`9.0 × 10⁻⁹ s`],
        correctAnswer: 2,
        explanation: r`2.0 × 4.5 = 9.0 and 3 + (−6) = −3, so RC = 9.0 × 10⁻³ s. Multiplying the exponents gives 10⁻¹⁸, subtracting 3 from −6 gives 10⁻⁹, and adding the front numbers gives 6.5.`,
      },
      {
        question: r`A student knows that $R_m$ = 4.0 × 10⁷ Ω and τ = 8.0 × 10⁻³ s. Which value of $C_m$, multiplied by this $R_m$, gives that τ?`,
        options: [r`2.0 × 10⁻⁴ F`, r`4.0 × 10⁻¹⁰ F`, r`2.0 × 10⁻⁹ F`, r`2.0 × 10⁻¹⁰ F`],
        correctAnswer: 3,
        explanation: r`Check by multiplying: (4.0 × 10⁷)(2.0 × 10⁻¹⁰) = 8.0 × 10⁻³, since 4.0 × 2.0 = 8.0 and 7 + (−10) = −3. With 2.0 × 10⁻⁴ the exponents add to +3, with 2.0 × 10⁻⁹ they add to −2, and 4.0 × 10⁻¹⁰ gives a front number of 16, not 8.0.`,
      },
      {
        question: r`A cell has $R_m$ = 8.0 × 10⁷ Ω and $C_m$ = 2.5 × 10⁻¹⁰ F. What is its time constant in milliseconds?`,
        options: [r`2.0 ms`, r`20 ms`, r`200 ms`, r`0.20 ms`],
        correctAnswer: 1,
        explanation: r`8.0 × 2.5 = 20 and 7 + (−10) = −3, so τ = 20 × 10⁻³ s = 20 ms. The answer 2.0 ms drops a power of ten when 20 is rewritten as 2.0 × 10¹, and 200 ms and 0.20 ms come from adding the exponents wrongly, to −2 or to −5 with the front number rewritten.`,
      },
    ],
  },
  [r`A drug cuts a membrane's resistance to one quarter. What happens to its time constant?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An anesthetic leaves a cell's membrane with 25% of its original resistance and the same capacitance. Before the dose, a small voltage bump faded with a time constant of 40 ms. With what time constant does it fade now?`,
        options: [r`160 ms`, r`20 ms`, r`10 ms`, r`40 ms`],
        correctAnswer: 2,
        explanation: r`τ = $R_m C_m$ and $C_m$ is unchanged, so τ falls to one quarter along with $R_m$: 40 ms ÷ 4 = 10 ms. Multiplying by 4 gives 160 ms, 20 ms takes a square root that the relationship does not contain, and 40 ms ignores the change.`,
      },
      {
        question: r`After a drug, a cell's τ has dropped from 32 ms to 8.0 ms with its $C_m$ unchanged. Before the drug, $R_m$ was 200 MΩ. What is $R_m$ now?`,
        options: [r`50 MΩ`, r`800 MΩ`, r`100 MΩ`, r`25 MΩ`],
        correctAnswer: 0,
        explanation: r`With $C_m$ fixed, τ = $R_m C_m$ is proportional to $R_m$. The time constant fell to one quarter, so the resistance did too: 200 MΩ ÷ 4 = 50 MΩ. Multiplying by 4 gives 800 MΩ, 100 MΩ only halves it, and 25 MΩ divides 200 by 8.0.`,
      },
      {
        question: r`A toxin blocks channels and raises a cell's membrane resistance to four times its value; the membrane capacitance is unchanged. The time constant was 5.0 ms. What is it now?`,
        options: [r`1.3 ms`, r`20 ms`, r`10 ms`, r`5.0 ms`],
        correctAnswer: 1,
        explanation: r`τ = $R_m C_m$ with $C_m$ fixed, so four times the resistance gives four times the time constant: 4 × 5.0 ms = 20 ms. Dividing by 4 gives about 1.3 ms, which is what a fall in resistance would do, 10 ms only doubles it, and 5.0 ms ignores the change.`,
      },
      {
        question: r`A drug lowers a cell's $R_m$ from 160 MΩ to 40 MΩ. Its $C_m$ is 50 pF throughout. What is τ after the drug has acted?`,
        options: [r`8.0 ms`, r`32 ms`, r`4.0 ms`, r`2.0 ms`],
        correctAnswer: 3,
        explanation: r`τ = $R_m C_m$ = (4.0 × 10⁷ Ω)(5.0 × 10⁻¹¹ F) = 2.0 × 10⁻³ s = 2.0 ms, one quarter of the 8.0 ms before the drug. The answer 8.0 ms is the value before the drug, 32 ms multiplies it by 4, and 4.0 ms only halves it.`,
      },
      {
        question: r`Before a drug, the voltage bump from a brief input was essentially gone after about 100 ms. The drug cuts the membrane resistance to one quarter and leaves the capacitance alone. After about how long is such a bump gone now?`,
        options: [r`About 25 ms`, r`About 400 ms`, r`About 50 ms`, r`About 100 ms`],
        correctAnswer: 0,
        explanation: r`The fading time is about five time constants, and τ = $R_m C_m$ falls to one quarter with $R_m$, so the fading time falls to one quarter too: 100 ms ÷ 4 = 25 ms. Multiplying by 4 gives 400 ms, 50 ms only halves it, and 100 ms ignores the change.`,
      },
      {
        question: r`A cell's membrane time constant is 16 ms. A drug cuts its membrane resistance to one quarter, and the cell also swells so that its membrane capacitance doubles. What is the new time constant?`,
        options: [r`4.0 ms`, r`8.0 ms`, r`32 ms`, r`2.0 ms`],
        correctAnswer: 1,
        explanation: r`τ = $R_m C_m$ changes by 1/4 × 2 = 1/2, so it becomes 8.0 ms. The answer 4.0 ms applies only the resistance change, 32 ms applies only the capacitance change, and 2.0 ms divides by both factors.`,
      },
    ],
  },
}
