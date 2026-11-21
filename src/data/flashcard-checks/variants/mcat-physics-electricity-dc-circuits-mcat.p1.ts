import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-physics-electricity-dc-circuits-mcat`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`Conventional current flows out of the source's {{c1::positive}} terminal, through the external circuit, and back into the negative terminal.`]: {
    kind: 'concept',
    more: [
      {
        question: r`In the copper wire attached to terminal T of a battery that is running a fan, the electrons are found to be drifting toward the battery and into T. Which terminal is T, and which way does conventional current flow in that wire?`,
        options: [r`Negative; current flows away from T`, r`Negative; current flows toward T`, r`Positive; current flows away from T`, r`Positive; current flows toward T`],
        correctAnswer: 2,
        explanation: r`In the external circuit electrons travel from the negative terminal around to the positive terminal, so a terminal that electrons are entering is the positive one. Conventional current is opposite to the electron drift, so it leaves T and flows out into the wire. The "negative" answers reverse the electron path, and "toward T" gives the current the same direction as the electrons.`,
      },
      {
        question: r`A battery's + terminal is wired to a switch, the switch to a lamp, the lamp to a motor, and the motor back to the − terminal. In what order does conventional current pass through the three parts, and in what order does a drifting electron pass through them?`,
        options: [r`Current: motor, lamp, switch. Electron: switch, lamp, motor`, r`Current: switch, lamp, motor. Electron: switch, lamp, motor`, r`Current: motor, lamp, switch. Electron: motor, lamp, switch`, r`Current: switch, lamp, motor. Electron: motor, lamp, switch`],
        correctAnswer: 3,
        explanation: r`Conventional current leaves the + terminal, so it meets the switch first, then the lamp, then the motor. Electrons leave the − terminal and go round the other way: motor, lamp, switch. The answers that give both the same order ignore that electrons drift opposite to the current, and the remaining one starts the current at the negative terminal.`,
      },
    ],
  },
  [r`A $9$ V ideal battery, an open switch and a lamp form one loop. What is the voltage across the lamp, and across the switch gap?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 12 V ideal battery, a switch and a lamp form one loop. The switch is closed, yet the lamp stays dark. A voltmeter reads 12 V across the lamp and 0 V across the switch. Which fault explains both readings?`,
        options: [r`The lamp filament is broken, leaving a gap in the loop`, r`The switch contacts are stuck open, leaving a gap there`, r`The battery is flat, leaving no voltage for the loop`, r`The lamp is bridged by a stray wire that bypasses it`],
        correctAnswer: 0,
        explanation: r`With no current, every intact part of the loop has V = IR = 0, so the whole battery voltage appears across the one gap. The 12 V reading is across the lamp, so the gap is the broken filament. An open switch would show 12 V across the switch instead, a flat battery would give 0 V everywhere, and a wire bridging the lamp would put 0 V across the lamp.`,
      },
      {
        question: r`A 1.5 V ideal cell, a buzzer and a push-button form one loop. One voltmeter is across the buzzer and another across the button. The button starts open and is then pressed closed. How do the two readings change?`,
        options: [r`Buzzer: 1.5 V to 0 V. Button: 0 V to 1.5 V`, r`Buzzer: 0 V to 1.5 V. Button: 1.5 V to 0 V`, r`Buzzer: 0 V to 1.5 V. Button: stays at 0 V`, r`Buzzer: stays at 1.5 V. Button: 1.5 V to 0 V`],
        correctAnswer: 1,
        explanation: r`While the button is open no current flows, so the buzzer has V = IR = 0 V and the full 1.5 V sits across the gap. Once it is closed, the closed button is just a piece of wire with 0 V across it and the buzzer takes the whole 1.5 V. The other answers either put the voltage on the buzzer while no current flows or leave the open gap at 0 V, and then the voltages around the loop would not add up to 1.5 V.`,
      },
    ],
  },
  [r`Released from rest in an electric field, an electron moves toward {{c1::higher}} potential, and its potential energy decreases.`]: {
    kind: 'concept',
    more: [
      {
        question: r`A free charged particle is released from rest at a point where the potential is 0 V. With no other forces acting, it drifts to a point where the potential is −50 V. What can be said about the particle?`,
        options: [r`Its charge is negative, and its potential energy rose`, r`Its charge is negative, and its potential energy fell`, r`Its charge is positive, and its potential energy rose`, r`Its charge is positive, and its potential energy fell`],
        correctAnswer: 3,
        explanation: r`Any charge released from rest moves so that its potential energy falls, and in $\Delta U = q\Delta V$ a negative $\Delta V$ gives a negative $\Delta U$ only when $q$ is positive. A negative particle such as an electron would have gone the other way, toward higher potential. The answers with rising potential energy describe motion that needs an outside force.`,
      },
      {
        question: r`An outside force carries an electron slowly from a point at +30 V to a point at +5 V. What happens to the electron's electrical potential energy?`,
        options: [r`It rises, because the electron ends at a lower potential`, r`It falls, because the electron ends at a lower potential`, r`It rises, because the electron ends at a higher potential`, r`It stays the same, because both potentials are positive`],
        correctAnswer: 0,
        explanation: r`For an electron $q$ is negative, so $\Delta U = q\Delta V$ is positive when $\Delta V = -25$ V: its potential energy rises, which is why an outside force is needed. Falling energy at lower potential is true of a positive charge, not an electron. The point at +5 V is the lower potential, not the higher, and only the difference in potential matters, not the signs of the two values.`,
      },
    ],
  },
  [r`By how much does the potential energy of one $\text{Na}^+$ ion change when it crosses a $70$ mV membrane potential?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A Cl⁻ ion crosses a synaptic membrane through a potential difference of 50 mV. Taking e = 1.6 × 10⁻¹⁹ C, what is the size of the change in its electrical potential energy?`,
        options: [r`8.0 × 10⁻¹⁸ J`, r`8.0 × 10⁻²¹ J`, r`3.2 × 10⁻¹⁸ J`, r`8.0 × 10⁻²⁰ J`],
        correctAnswer: 1,
        explanation: r`|ΔU| = q|ΔV| = 1.6 × 10⁻¹⁹ C × 0.050 V = 8.0 × 10⁻²¹ J. Using 50 instead of 0.050 V gives 8.0 × 10⁻¹⁸ J, dividing the charge by 0.050 V gives 3.2 × 10⁻¹⁸ J, and 8.0 × 10⁻²⁰ J is a slip of one power of ten in the millivolt conversion.`,
      },
      {
        question: r`A Mg²⁺ ion is carried across a membrane through a potential difference of 30 mV. Taking e = 1.6 × 10⁻¹⁹ C, by how much does its electrical potential energy change?`,
        options: [r`4.8 × 10⁻²¹ J`, r`9.6 × 10⁻¹⁸ J`, r`9.6 × 10⁻²¹ J`, r`4.8 × 10⁻¹⁸ J`],
        correctAnswer: 2,
        explanation: r`The ion carries 2e = 3.2 × 10⁻¹⁹ C, so |ΔU| = 3.2 × 10⁻¹⁹ C × 0.030 V = 9.6 × 10⁻²¹ J. Using a single charge e gives 4.8 × 10⁻²¹ J, leaving the voltage as 30 gives 9.6 × 10⁻¹⁸ J, and making both mistakes gives 4.8 × 10⁻¹⁸ J.`,
      },
      {
        question: r`A Na⁺ ion loses 4.8 × 10⁻²¹ J of electrical potential energy as it passes through a channel. Taking e = 1.6 × 10⁻¹⁹ C, what potential difference did it move through?`,
        options: [r`30 mV`, r`3.0 mV`, r`300 mV`, r`33 mV`],
        correctAnswer: 0,
        explanation: r`|ΔV| = |ΔU|/q = 4.8 × 10⁻²¹ J ÷ 1.6 × 10⁻¹⁹ C = 0.030 V = 30 mV. The values 3.0 mV and 300 mV are power-of-ten slips in the division or in changing volts to millivolts, and 33 mV comes from inverting the ratio to 1.6/4.8.`,
      },
      {
        question: r`During one heartbeat, 1.0 × 10⁶ Na⁺ ions enter a cell, each moving through a potential difference of 50 mV. Taking e = 1.6 × 10⁻¹⁹ C, how much electrical potential energy do the ions lose in total?`,
        options: [r`8.0 × 10⁻²¹ J`, r`8.0 × 10⁻¹² J`, r`3.2 × 10⁻¹² J`, r`8.0 × 10⁻¹⁵ J`],
        correctAnswer: 3,
        explanation: r`Each ion loses 1.6 × 10⁻¹⁹ C × 0.050 V = 8.0 × 10⁻²¹ J, so 10⁶ ions lose 8.0 × 10⁻¹⁵ J. The value 8.0 × 10⁻²¹ J is for one ion only, 8.0 × 10⁻¹² J leaves the 50 mV unconverted, and 3.2 × 10⁻¹² J divides by 0.050 V instead of multiplying.`,
      },
      {
        question: r`A Na⁺ ion crosses a potential difference of 60 mV, and a Ca²⁺ ion crosses a potential difference of 90 mV. The change in potential energy of the Ca²⁺ ion is how many times that of the Na⁺ ion?`,
        options: [r`1.5 times`, r`0.75 times`, r`3 times`, r`6 times`],
        correctAnswer: 2,
        explanation: r`ΔU = qΔV, so the ratio is (2e × 90 mV)/(e × 60 mV) = 180/60 = 3. Comparing only the voltages gives 1.5, halving for the calcium charge instead of doubling gives 0.75, and 6 doubles for the charge twice.`,
      },
      {
        question: r`A proton (H⁺) is pumped across the inner mitochondrial membrane against a potential difference of 150 mV. Taking e = 1.6 × 10⁻¹⁹ C, how much electrical potential energy does the proton gain?`,
        options: [r`2.4 × 10⁻²⁰ J`, r`2.4 × 10⁻¹⁷ J`, r`1.1 × 10⁻¹⁸ J`, r`2.4 × 10⁻²¹ J`],
        correctAnswer: 0,
        explanation: r`ΔU = qΔV = 1.6 × 10⁻¹⁹ C × 0.150 V = 2.4 × 10⁻²⁰ J. Leaving the voltage as 150 gives 2.4 × 10⁻¹⁷ J, dividing the charge by 0.150 V gives 1.1 × 10⁻¹⁸ J, and 2.4 × 10⁻²¹ J treats 150 mV as 0.015 V.`,
      },
    ],
  },
  [r`Heating a metal {{c1::lowers}} its conductivity, while heating an electrolyte solution {{c2::raises}} its conductivity.`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two unlabeled conductors, X and Y, are each held at a fixed voltage. One is a length of metal wire and the other is a tube of salt solution. When both are warmed, the current in X rises and the current in Y falls. Which is which?`,
        options: [r`X is the metal wire, and Y is the salt solution`, r`X is the salt solution, and Y is the metal wire`, r`The test cannot tell, as both currents should rise`, r`The test cannot tell, as both currents should fall`],
        correctAnswer: 1,
        explanation: r`At fixed voltage a rising current means rising conductivity, which is what an electrolyte does when warmed, so X is the solution. A warmed metal conducts less well, so the falling current marks Y as the wire. The reversed answer swaps the two trends, and the "cannot tell" answers assume both materials respond to heat in the same way.`,
      },
      {
        question: r`A nickel wire conducts less well when it is hot, while a beaker of NaCl solution conducts better when it is hot. Which pair of reasons accounts for the two trends?`,
        options: [r`Wire: electrons scatter more often. Solution: ions move faster`, r`Wire: fewer electrons are free. Solution: ions move faster`, r`Wire: electrons scatter more often. Solution: ions gain charge`, r`Wire: fewer electrons are free. Solution: ions gain charge`],
        correctAnswer: 0,
        explanation: r`A metal has a fixed supply of conduction electrons, and the hotter, more strongly vibrating lattice scatters them more often. In solution the warmer ions move faster through a less viscous solvent. Heating does not remove free electrons from a metal, and it does not change the charge that an ion carries, so any answer containing either of those reasons fails.`,
      },
    ],
  },
  [r`In saline, conventional current runs from left to right. Do the $\text{Na}^+$ and $\text{Cl}^-$ contributions to the current cancel?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In an electrolysis cell, the conventional current through the solution is directed from electrode P toward electrode Q. Which way do the positive ions (cations) and negative ions (anions) in the solution drift?`,
        options: [r`Cations toward P, and anions toward P`, r`Cations toward P, and anions toward Q`, r`Cations toward Q, and anions toward Q`, r`Cations toward Q, and anions toward P`],
        correctAnswer: 3,
        explanation: r`Conventional current is the direction positive charge moves, so cations drift toward Q. Anions drift the opposite way, toward P, and negative charge moving toward P carries current toward Q as well, so the two flows add. If both kinds of ion drifted the same way their contributions would oppose each other, and cations moving toward P would mean a current toward P.`,
      },
      {
        question: r`Salt water is pumped through a plastic pipe, so its Na⁺ and Cl⁻ ions, present in equal numbers, are all carried to the right at the same speed. No voltage is applied. What net electric current does this flow carry?`,
        options: [r`A current to the right, since both ions carry charge that way`, r`A current to the left, since Cl⁻ moving right counts as leftward`, r`Zero current, since opposite charges moving one way cancel out`, r`A current to the right, since only the Na⁺ ions count as current`],
        correctAnswer: 2,
        explanation: r`Na⁺ moving right is a current to the right, and Cl⁻ moving right is an equal current to the left, so the net current is zero. The contributions add only when the two ions drift in opposite directions, as they do when a voltage drives them. The other answers either ignore the sign of the chloride charge or count only one of the two ions.`,
      },
    ],
  },
  [r`A $2$ pA channel current carried by $\text{Ca}^{2+}$ needs {{c1::half as many}} ions per second as the same current carried by $\text{K}^+$.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A channel passes a steady 1.6 pA, carried entirely by Mg²⁺ ions, for 5.0 ms. Taking e = 1.6 × 10⁻¹⁹ C, how many ions cross in that time?`,
        options: [r`5.0 × 10⁴ ions`, r`2.5 × 10⁷ ions`, r`1.0 × 10⁵ ions`, r`2.5 × 10⁴ ions`],
        correctAnswer: 3,
        explanation: r`ΔQ = 1.6 × 10⁻¹² A × 5.0 × 10⁻³ s = 8.0 × 10⁻¹⁵ C, and each ion carries 2e = 3.2 × 10⁻¹⁹ C, so N = 2.5 × 10⁴. Dividing by a single e gives 5.0 × 10⁴, dividing by e/2 gives 1.0 × 10⁵, and leaving the time as 5.0 s gives 2.5 × 10⁷.`,
      },
      {
        question: r`A patch-clamp recording of a heart muscle cell shows 3.0 × 10⁶ Ca²⁺ ions entering through an open pore every second. Taking e = 1.6 × 10⁻¹⁹ C, what size of current does the recording amplifier measure?`,
        options: [r`0.48 pA`, r`0.96 pA`, r`1.9 pA`, r`9.6 pA`],
        correctAnswer: 1,
        explanation: r`Each ion carries 2e = 3.2 × 10⁻¹⁹ C, so I = 3.0 × 10⁶ per second × 3.2 × 10⁻¹⁹ C = 9.6 × 10⁻¹³ A = 0.96 pA. Counting one charge per ion gives 0.48 pA, doubling for the charge twice gives 1.9 pA, and 9.6 pA is a power-of-ten slip in changing amperes to picoamperes.`,
      },
      {
        question: r`A K⁺ channel passes 6.0 × 10⁶ ions each second. A Ca²⁺ channel carries exactly the same current. How many Ca²⁺ ions pass through it each second?`,
        options: [r`3.0 × 10⁶ ions`, r`1.2 × 10⁷ ions`, r`6.0 × 10⁶ ions`, r`1.5 × 10⁶ ions`],
        correctAnswer: 0,
        explanation: r`The same current means the same charge per second, and each Ca²⁺ carries 2e, so only half as many ions are needed: 3.0 × 10⁶ per second. Doubling instead gives 1.2 × 10⁷, equal numbers would give the calcium channel twice the current, and 1.5 × 10⁶ halves twice.`,
      },
      {
        question: r`Channel X passes a certain number of Na⁺ ions each second and carries 4 pA. Channel Y passes the same number of ions each second, but they are Ca²⁺ ions. What current does channel Y carry?`,
        options: [r`2 pA`, r`4 pA`, r`8 pA`, r`16 pA`],
        correctAnswer: 2,
        explanation: r`Current is the number of ions per second times the charge on each ion. With the same number per second and 2e per ion instead of e, the current doubles to 8 pA. The value 2 pA inverts the ratio, 4 pA ignores the ion's charge, and 16 pA squares the factor of 2.`,
      },
      {
        question: r`A channel carries a steady 3.2 pA of Ca²⁺ ions. Taking e = 1.6 × 10⁻¹⁹ C, how long does it take for 5.0 × 10⁴ ions to cross?`,
        options: [r`2.5 ms`, r`5.0 ms`, r`10 ms`, r`50 ms`],
        correctAnswer: 1,
        explanation: r`The ions carry ΔQ = 5.0 × 10⁴ × 3.2 × 10⁻¹⁹ C = 1.6 × 10⁻¹⁴ C, so Δt = ΔQ/I = 1.6 × 10⁻¹⁴ C ÷ 3.2 × 10⁻¹² A = 5.0 × 10⁻³ s = 5.0 ms. Using a single e per ion gives 2.5 ms, doubling for the charge twice gives 10 ms, and 50 ms is a power-of-ten slip.`,
      },
      {
        question: r`A channel current of 6.4 pA is carried by 2.0 × 10⁷ identical ions each second. Taking e = 1.6 × 10⁻¹⁹ C, how much charge does each ion carry?`,
        options: [r`1.6 × 10⁻¹⁹ C, so each ion carries 1e`, r`8.0 × 10⁻²⁰ C, so each ion carries e/2`, r`6.4 × 10⁻¹⁹ C, so each ion carries 4e`, r`3.2 × 10⁻¹⁹ C, so each ion carries 2e`],
        correctAnswer: 3,
        explanation: r`Charge per ion = (6.4 × 10⁻¹² C/s)/(2.0 × 10⁷ s⁻¹) = 3.2 × 10⁻¹⁹ C, which is 2e, as for Ca²⁺. Assuming one e per ion would give only 3.2 pA for this number of ions, e/2 is not a possible ionic charge, and 4e would need 12.8 pA.`,
      },
    ],
  },
  [r`A steady $0.50$ A current flows for $1$ minute. How much charge passes, and about how many electrons is that?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The motor of an infusion pump draws a steady 0.25 A for 4.0 minutes. How much charge passes through the motor?`,
        options: [r`1.0 C`, r`16 C`, r`60 C`, r`960 C`],
        correctAnswer: 2,
        explanation: r`ΔQ = IΔt = (0.25 A)(240 s) = 60 C, after converting 4.0 min to 240 s. Leaving the time in minutes gives 1.0 C, dividing 4.0 by 0.25 gives 16, and dividing 240 by 0.25 gives 960.`,
      },
      {
        question: r`A charging cable carries a steady 1.6 A for 10 s. Taking e = 1.6 × 10⁻¹⁹ C, how many electrons pass through the cable in that time?`,
        options: [r`1.0 × 10²⁰ electrons`, r`1.0 × 10¹⁹ electrons`, r`6.0 × 10²¹ electrons`, r`2.6 × 10⁻¹⁸ electrons`],
        correctAnswer: 0,
        explanation: r`ΔQ = (1.6 A)(10 s) = 16 C, and N = 16/(1.6 × 10⁻¹⁹) = 1.0 × 10²⁰ electrons. Leaving out the time gives 1.0 × 10¹⁹, treating the 10 s as 10 minutes gives 6.0 × 10²¹, and multiplying 16 C by e instead of dividing gives 2.6 × 10⁻¹⁸, which is not even a whole electron.`,
      },
      {
        question: r`An electroplating bath needs 120 C of charge to pass through it. For how long must a steady 0.40 A current flow?`,
        options: [r`0.80 min`, r`300 min`, r`50 min`, r`5.0 min`],
        correctAnswer: 3,
        explanation: r`Δt = ΔQ/I = (120 C)/(0.40 A) = 300 s, which is 5.0 minutes. Reading the 300 s as minutes gives 300 min, multiplying 120 by 0.40 gives 48 s or 0.80 min, and 50 min is a power-of-ten slip in the division.`,
      },
      {
        question: r`In 2.0 minutes, 3.0 × 10²⁰ electrons pass through a lamp filament at a steady rate. Taking e = 1.6 × 10⁻¹⁹ C, what is the current in the lamp?`,
        options: [r`24 A`, r`0.40 A`, r`2.5 A`, r`0.80 A`],
        correctAnswer: 1,
        explanation: r`ΔQ = 3.0 × 10²⁰ × 1.6 × 10⁻¹⁹ C = 48 C, and I = ΔQ/Δt = 48 C/120 s = 0.40 A. Dividing by 2.0 without converting to seconds gives 24 A, inverting to 120/48 gives 2.5 A, and using 60 s for the two minutes gives 0.80 A.`,
      },
      {
        question: r`In a second trial, the current through an electrode is doubled and the time it flows is cut to one third of the original. By what factor does the number of electrons that pass change?`,
        options: [r`It becomes 2/3 as large`, r`It becomes 3/2 as large`, r`It becomes 6 times larger`, r`It becomes 1/6 as large`],
        correctAnswer: 0,
        explanation: r`The number of electrons is N = IΔt/e, so the factor is 2 × (1/3) = 2/3. The factor 3/2 inverts both changes, 6 multiplies by 3 instead of dividing, and 1/6 divides by the 2 as well as by the 3.`,
      },
      {
        question: r`An iontophoresis patch drives a steady 20 μA through the skin for 5.0 minutes. How much charge passes?`,
        options: [r`0.10 mC`, r`6000 C`, r`6.0 mC`, r`100 C`],
        correctAnswer: 2,
        explanation: r`ΔQ = IΔt = 20 × 10⁻⁶ A × 300 s = 6.0 × 10⁻³ C = 6.0 mC. Leaving the time as 5.0 gives 1.0 × 10⁻⁴ C = 0.10 mC, dropping the micro prefix gives 6000 C, and making both mistakes gives 100 C.`,
      },
    ],
  },
  [r`Conductance is $G =$ {{c1::$1/R$}}, measured in siemens, and for resistors in parallel the {{c2::conductances}} add.`]: {
    kind: 'calc',
    more: [
      {
        question: r`The contact between a skin electrode and the body has a resistance of 2.0 kΩ. What is the conductance of this contact?`,
        options: [r`0.50 S`, r`2.0 mS`, r`5.0 mS`, r`0.50 mS`],
        correctAnswer: 3,
        explanation: r`G = 1/R = 1/(2000 Ω) = 5.0 × 10⁻⁴ S = 0.50 mS. Ignoring the kilo prefix gives 0.50 S, 2.0 mS just relabels the resistance figure, and 5.0 mS is a power-of-ten slip in the reciprocal.`,
      },
      {
        question: r`A patch of membrane has a conductance of 20 nS, and the voltage driving ions across it is 50 mV. What current crosses the patch?`,
        options: [r`1000 nA`, r`1.0 nA`, r`400 nA`, r`2.5 nA`],
        correctAnswer: 1,
        explanation: r`I = V/R = GV = (20 × 10⁻⁹ S)(0.050 V) = 1.0 × 10⁻⁹ A = 1.0 nA. Leaving the voltage as 50 gives 1000 nA, dividing the conductance by 0.050 V gives 400 nA, and 2.5 comes from dividing 50 by 20 with no physical basis.`,
      },
      {
        question: r`Three heating strips with conductances of 0.10 S, 0.15 S and 0.25 S are connected in parallel. What is the equivalent resistance of the combination?`,
        options: [r`2.0 Ω`, r`0.50 Ω`, r`21 Ω`, r`4.0 Ω`],
        correctAnswer: 0,
        explanation: r`Parallel conductances add: G = 0.10 + 0.15 + 0.25 = 0.50 S, so R = 1/G = 2.0 Ω. The value 0.50 is the conductance, not the resistance. About 21 Ω adds the three resistances (10 Ω, 6.7 Ω and 4.0 Ω) as if in series, and 4.0 Ω is the smallest single strip, which the parallel total must be below.`,
      },
      {
        question: r`A sensor network must have an equivalent resistance of 100 Ω. It already contains one branch with a conductance of 4 mS. What conductance must a second branch, connected in parallel with the first, have?`,
        options: [r`14 mS`, r`6.7 mS`, r`6 mS`, r`10 mS`],
        correctAnswer: 2,
        explanation: r`The total conductance needed is G = 1/(100 Ω) = 10 mS, and parallel conductances add, so the second branch supplies 10 − 4 = 6 mS. Adding gives 14 mS, 10 mS is the total and not the missing part, and 6.7 mS comes from treating the conductances with the reciprocal rule that belongs to resistances.`,
      },
      {
        question: r`A membrane has 50 identical open ion channels, which act as parallel paths. A drug opens more of the same channels, bringing the number to 150. By what factor does the resistance of the membrane change?`,
        options: [r`It falls to one third of its value`, r`It rises to three times its value`, r`It falls to one ninth of its value`, r`It rises to nine times its value`],
        correctAnswer: 0,
        explanation: r`Conductances in parallel add, so three times as many identical channels give three times the conductance, and R = 1/G falls to one third. Three times the resistance would be true of channels in series, and the factors of nine square a ratio that enters only once.`,
      },
      {
        question: r`A current of 0.60 A flows through a heating element whose conductance is 0.20 S. What is the voltage across the element?`,
        options: [r`0.12 V`, r`0.33 V`, r`5.0 V`, r`3.0 V`],
        correctAnswer: 3,
        explanation: r`R = 1/G = 5.0 Ω, so V = IR = I/G = (0.60 A)/(0.20 S) = 3.0 V. Multiplying the current by the conductance gives 0.12, inverting the ratio gives 0.33, and 5.0 is the resistance in ohms, not the voltage.`,
      },
    ],
  },
  [r`A metal wire is drawn out to three times its length at constant volume. By what factor does its resistance change?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A jeweller pulls a 5.0 Ω length of gold wire through a die until it is three times as long. No metal is lost. What is the resistance of the longer wire?`,
        options: [r`15 Ω`, r`45 Ω`, r`1.7 Ω`, r`0.56 Ω`],
        correctAnswer: 1,
        explanation: r`At constant volume, tripling the length cuts the area to one third, so R = ρL/A rises by 3 × 3 = 9: 5.0 Ω × 9 = 45 Ω. Counting only the change in length gives 15 Ω, dividing by 3 gives 1.7 Ω, and dividing by 9 gives 0.56 Ω.`,
      },
      {
        question: r`A 2.0 Ω wire is drawn out at constant volume, and its resistance is then measured as 50 Ω. By what factor was its length increased?`,
        options: [r`5 times`, r`25 times`, r`12.5 times`, r`7.1 times`],
        correctAnswer: 0,
        explanation: r`Stretching by a factor n at constant volume multiplies R by n². Here R rose by 50/2.0 = 25, so n = 5. Answering 25 forgets the square, 12.5 halves the factor of 25 instead of taking its root, and 7.1 is the square root of 50, which ignores the starting 2.0 Ω.`,
      },
      {
        question: r`A strain gauge is a fine metal wire glued to a surface. When the surface is stretched, the 100 Ω wire becomes 10% longer with no change in its volume. What is its resistance now?`,
        options: [r`110 Ω`, r`100 Ω`, r`91 Ω`, r`121 Ω`],
        correctAnswer: 3,
        explanation: r`The length is multiplied by 1.1 and the area is divided by 1.1, so R is multiplied by 1.1² = 1.21, giving 121 Ω. The value 110 Ω counts the extra length but not the thinner cross-section, 100 Ω assumes no change, and 91 Ω divides by 1.1.`,
      },
      {
        question: r`A 3.0 Ω metal strip is rolled thinner until its cross-sectional area is half of what it was, with its volume unchanged. What is its new resistance?`,
        options: [r`6.0 Ω`, r`1.5 Ω`, r`12 Ω`, r`0.75 Ω`],
        correctAnswer: 2,
        explanation: r`At constant volume, halving the area doubles the length, so R = ρL/A picks up a factor of 2 from each: 3.0 Ω × 4 = 12 Ω. The value 6.0 Ω counts only the area, and 1.5 Ω and 0.75 Ω apply the factors of 2 and 4 the wrong way up.`,
      },
      {
        question: r`A 0.25 Ω copper rod is drawn into a wire with half the original diameter. Its volume does not change. What is the resistance of the wire?`,
        options: [r`4.0 Ω`, r`1.0 Ω`, r`0.50 Ω`, r`2.0 Ω`],
        correctAnswer: 0,
        explanation: r`Half the diameter means one quarter of the area, so at constant volume the length is 4 times greater. R = ρL/A then rises by 4 × 4 = 16: 0.25 Ω × 16 = 4.0 Ω. The value 1.0 Ω counts only the smaller area, 0.50 Ω treats the area as halved with no change in length, and 2.0 Ω treats the area as halved and the length as quadrupled.`,
      },
      {
        question: r`A wire connected to a 6 V ideal battery carries 1.8 A. The wire is removed, drawn out to three times its length at constant volume, and reconnected to the same battery. What current flows now?`,
        options: [r`0.60 A`, r`5.4 A`, r`16 A`, r`0.20 A`],
        correctAnswer: 3,
        explanation: r`Tripling the length at constant volume multiplies the resistance by 3² = 9, and at fixed voltage I = V/R falls to one ninth: 1.8 A/9 = 0.20 A. Using a factor of 3 gives 0.60 A, and 5.4 A and 16 A multiply the current by 3 and by 9 as if the resistance had fallen.`,
      },
    ],
  },
  [r`Axon B has twice the diameter of axon A, with identical cytoplasm. Compare the internal resistance of equal lengths.`]: {
    kind: 'calc',
    more: [
      {
        question: r`One centimeter of a thin nerve fiber has an internal (lengthwise) resistance of 60 MΩ. A second fiber has the same cytoplasm and twice the diameter. What is the internal resistance of one centimeter of the second fiber?`,
        options: [r`30 MΩ`, r`3.75 MΩ`, r`15 MΩ`, r`240 MΩ`],
        correctAnswer: 2,
        explanation: r`R ∝ 1/A and area scales as diameter squared, so twice the diameter gives one quarter of the resistance: 60/4 = 15 MΩ. Dividing by 2 gives 30 MΩ, dividing by 2⁴ = 16 borrows the fluid-flow rule and gives 3.75 MΩ, and 240 MΩ multiplies by 4.`,
      },
      {
        question: r`A dendrite has an internal resistance of 6.0 MΩ per millimeter. It narrows to a branch with half the diameter and the same cytoplasm. What is the internal resistance per millimeter of the narrow branch?`,
        options: [r`12 MΩ`, r`24 MΩ`, r`96 MΩ`, r`1.5 MΩ`],
        correctAnswer: 1,
        explanation: r`Half the diameter means one quarter of the cross-sectional area, and R ∝ 1/A, so the resistance is 4 times greater: 24 MΩ. Doubling gives 12 MΩ, a factor of 2⁴ = 16 from the fluid-flow rule gives 96 MΩ, and 1.5 MΩ divides by 4 instead of multiplying.`,
      },
      {
        question: r`An axon 1.0 μm in diameter has an internal resistance of 160 MΩ per centimeter. What diameter would an axon with the same cytoplasm need for its internal resistance to be 10 MΩ per centimeter?`,
        options: [r`4.0 μm`, r`16 μm`, r`2.0 μm`, r`0.25 μm`],
        correctAnswer: 0,
        explanation: r`The resistance must fall by a factor of 16, and R ∝ 1/d², so the diameter must be √16 = 4 times larger: 4.0 μm. Answering 16 μm forgets the square, 2.0 μm uses the fourth-power rule of fluid flow, and 0.25 μm makes the axon thinner, which raises the resistance.`,
      },
      {
        question: r`Two equal lengths of axon have identical cytoplasm, and the same voltage is applied between the ends of each. Axon B has three times the diameter of axon A. The current along the inside of B is how many times the current along A?`,
        options: [r`3 times`, r`81 times`, r`one ninth`, r`9 times`],
        correctAnswer: 3,
        explanation: r`B has 3² = 9 times the cross-sectional area, so its internal resistance is one ninth of A's, and at the same voltage I = V/R is 9 times larger. A factor of 3 forgets that area goes as diameter squared, 81 uses the fourth power that applies to fluid flow, and one ninth is the resistance ratio, not the current ratio.`,
      },
      {
        question: r`A fine nerve process 500 nm in diameter has an internal resistance of 320 MΩ per millimeter. What is the internal resistance per millimeter of a process 2.0 μm in diameter with the same cytoplasm?`,
        options: [r`80 MΩ`, r`20 MΩ`, r`1.25 MΩ`, r`1280 MΩ`],
        correctAnswer: 1,
        explanation: r`2.0 μm is 2000 nm, which is 4 times the diameter and so 16 times the area, and R ∝ 1/A gives 320/16 = 20 MΩ. Dividing by 4 gives 80 MΩ, dividing by 4⁴ = 256 gives 1.25 MΩ, and 1280 MΩ multiplies by 4.`,
      },
      {
        question: r`Axon P has an internal resistance of 150 MΩ per centimeter. Axon Q has identical cytoplasm and 5 times the cross-sectional area of P. What is the internal resistance of one centimeter of Q?`,
        options: [r`6.0 MΩ`, r`750 MΩ`, r`30 MΩ`, r`67 MΩ`],
        correctAnswer: 2,
        explanation: r`R ∝ 1/A, and here the area itself is given, so the resistance is simply one fifth: 150/5 = 30 MΩ. Squaring the 5 as if it were a diameter ratio gives 6.0 MΩ, multiplying gives 750 MΩ, and 67 MΩ divides by √5.`,
      },
    ],
  },
  [r`For an ohmic resistor, what is the slope of a graph of current (vertical axis) against voltage (horizontal axis)?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A student plots current (vertical axis) against voltage (horizontal axis) for a carbon resistor. The straight line through the origin rises by 30 mA for every 6.0 V. What is the resistance?`,
        options: [r`5.0 Ω`, r`0.005 Ω`, r`0.20 Ω`, r`200 Ω`],
        correctAnswer: 3,
        explanation: r`The slope is 0.030 A/6.0 V = 0.005 A per volt, and the slope of a current against voltage graph is 1/R, so R = 200 Ω. Reading the slope itself as the resistance gives 0.005 Ω, and 5.0 Ω and 0.20 Ω come from dividing 30 by 6.0 or 6.0 by 30 with the milliamperes unconverted.`,
      },
      {
        question: r`A 400 Ω ohmic resistor is tested, and its current (vertical axis) is plotted against voltage (horizontal axis). What is the slope of the line?`,
        options: [r`2.5 mA per volt`, r`400 mA per volt`, r`0.40 mA per volt`, r`25 mA per volt`],
        correctAnswer: 0,
        explanation: r`With current on the vertical axis the slope is 1/R = 1/(400 Ω) = 0.0025 A per volt, which is 2.5 mA per volt. A slope of 400 would be right only with voltage on the vertical axis (and in volts per ampere), 0.40 inverts 2.5, and 25 is a power-of-ten slip.`,
      },
      {
        question: r`For an ohmic heating element, voltage is plotted on the vertical axis against current on the horizontal axis, and the straight line passes through the origin and the point (0.20 A, 8.0 V). If the axes were swapped, so that current is on the vertical axis, what would the slope be?`,
        options: [r`40 A per volt`, r`0.025 A per volt`, r`1.6 A per volt`, r`0.25 A per volt`],
        correctAnswer: 1,
        explanation: r`The resistance is 8.0 V divided by 0.20 A, which is 40 Ω, and that is the slope while voltage is vertical. With current vertical the slope is 1/R = 0.20/8.0 = 0.025 A per volt. Keeping 40 forgets to invert, 1.6 multiplies the two coordinates, and 0.25 is a power-of-ten slip.`,
      },
      {
        question: r`Two ohmic resistors are plotted on the same axes, with current vertical and voltage horizontal. Line P has a slope of 0.50 A per volt and line Q has a slope of 0.10 A per volt. How does the resistance of Q compare with that of P?`,
        options: [r`Q has one fifth the resistance of P`, r`Q has the same resistance as P`, r`Q has 5 times the resistance of P`, r`Q has 25 times the resistance of P`],
        correctAnswer: 2,
        explanation: r`On these axes the slope is 1/R, so P is 1/0.50 = 2 Ω and Q is 1/0.10 = 10 Ω: Q has 5 times the resistance. One fifth reads the slope as the resistance, so the shallower line is wrongly given the smaller value. Equal resistances would need equal slopes, and 25 squares the ratio.`,
      },
      {
        question: r`The current against voltage line for an ohmic sensor (current on the vertical axis) has a slope of 0.040 A per volt. What voltage across the sensor drives a current of 0.60 A through it?`,
        options: [r`15 V`, r`0.024 V`, r`25 V`, r`0.067 V`],
        correctAnswer: 0,
        explanation: r`The slope is 1/R, so R = 1/0.040 = 25 Ω and V = IR = (0.60 A)(25 Ω) = 15 V. Multiplying the current by the slope gives 0.024, 25 is the resistance in ohms rather than the voltage, and 0.067 divides the slope by the current.`,
      },
      {
        question: r`An ohmic resistor gives a line of slope 0.30 A per volt on a graph with current on the vertical axis and voltage on the horizontal axis. It is replaced by a resistor with three times the resistance. What is the slope of the new line?`,
        options: [r`0.90 A per volt`, r`0.30 A per volt`, r`3.3 A per volt`, r`0.10 A per volt`],
        correctAnswer: 3,
        explanation: r`On these axes the slope is 1/R, so tripling R cuts the slope to one third: 0.10 A per volt. A slope of 0.90 would mean the slope is proportional to R, 0.30 means no change, and 3.3 is 1/0.30, the old resistance in ohms.`,
      },
    ],
  },
  [r`Doubling the voltage across an incandescent filament {{c1::less than doubles}} the current, because the filament is non-ohmic.`]: {
    kind: 'concept',
    more: [
      {
        question: r`An incandescent lamp carries 0.50 A at its normal 12 V. A dimmer then lowers the voltage across the filament to 6 V, and the filament glows a dull red. Which current is expected?`,
        options: [r`0.20 A`, r`0.25 A`, r`0.35 A`, r`0.50 A`],
        correctAnswer: 2,
        explanation: r`At 6 V the filament is cooler, so its resistance is lower than at 12 V, and the current is more than half of 0.50 A while still below 0.50 A: 0.35 A. Exactly half, 0.25 A, is what a fixed (ohmic) resistance would give, 0.20 A would need the resistance to rise on cooling, and 0.50 A would mean the voltage made no difference.`,
      },
      {
        question: r`An incandescent filament carries 0.20 A when 2.0 V is across it. The voltage is then doubled to 4.0 V and the filament becomes much hotter. Which value could be its resistance at 4.0 V?`,
        options: [r`16 Ω`, r`10 Ω`, r`8 Ω`, r`5 Ω`],
        correctAnswer: 0,
        explanation: r`At 2.0 V the resistance is 2.0/0.20 = 10 Ω. The hotter filament has a higher resistance, which is why its current less than doubles, so only 16 Ω (a current of 0.25 A) fits. A resistance still at 10 Ω describes an ohmic element, and 8 Ω or 5 Ω would make the current more than double.`,
      },
    ],
  },
  [r`Three identical resistors are in series across an ideal battery, and the middle one is shorted by a wire. By what factor does the battery current change?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Seven identical lamps are in series across an ideal supply. A fault places a wire of negligible resistance across one lamp. By what factor does the current from the supply change?`,
        options: [r`It rises by a factor of 7`, r`It rises by a factor of 7/6`, r`It falls by a factor of 6/7`, r`It stays exactly the same`],
        correctAnswer: 1,
        explanation: r`The total resistance falls from 7R to 6R, so I = V/R rises from V/7R to V/6R, a factor of 7/6. A factor of 7 would need six lamps shorted, 6/7 treats the lower resistance as lowering the current, and "the same" forgets that the ideal supply keeps its voltage while the resistance drops.`,
      },
      {
        question: r`A model railway's 12 V ideal power pack feeds three identical 10 Ω track heaters connected in series. A dropped paper clip of negligible resistance then shorts one heater. How much current leaves the power pack now?`,
        options: [r`0.40 A`, r`1.2 A`, r`0.60 A`, r`0.27 A`],
        correctAnswer: 2,
        explanation: r`The shorted resistor drops out, leaving 20 Ω, so I = 12 V/20 Ω = 0.60 A, which is 3/2 of the original 0.40 A. Keeping 0.40 A ignores the short, 1.2 A removes two resistors, and 0.27 A divides the original current by 3/2 instead of multiplying.`,
      },
      {
        question: r`Six identical lamps are in series across a 24 V ideal supply. One lamp is then shorted by a wire of negligible resistance. What is the voltage across each of the lamps that still glow?`,
        options: [r`4.8 V`, r`4.0 V`, r`3.3 V`, r`24 V`],
        correctAnswer: 0,
        explanation: r`The shorted lamp has 0 V across it, so the 24 V is shared equally by the other five: 24/5 = 4.8 V each. The current has risen by 6/5, and so has each remaining lamp's voltage. The value 4.0 V is the share before the short, 3.3 V lowers the share instead of raising it, and 24 V would be right only for a single lamp.`,
      },
      {
        question: r`Six identical resistors in series across an ideal battery carry 0.20 A. Wires of negligible resistance are then connected across two of the resistors. What is the new battery current?`,
        options: [r`0.13 A`, r`0.24 A`, r`0.40 A`, r`0.30 A`],
        correctAnswer: 3,
        explanation: r`The resistance falls from 6R to 4R, so the current rises by 6/4: 0.20 A × 1.5 = 0.30 A. Inverting the factor gives 0.13 A, 0.24 A shorts only one resistor (a factor of 6/5), and 0.40 A doubles the current because two resistors were shorted.`,
      },
      {
        question: r`A chain of identical resistors in series across an ideal battery carries 2.0 A. When one of the resistors is shorted by a wire, the current rises to 2.5 A. How many resistors are in the chain?`,
        options: [r`4 resistors`, r`5 resistors`, r`6 resistors`, r`3 resistors`],
        correctAnswer: 1,
        explanation: r`Shorting one of N identical resistors changes the current by N/(N − 1). Here the factor is 2.5/2.0 = 5/4, so N = 5. Four is the number left working after the short, and chains of 6 or 3 would give factors of 6/5 or 3/2.`,
      },
      {
        question: r`A 20 V ideal laboratory supply feeds a 3 Ω coil, a 5 Ω coil and a 12 Ω coil connected in series. A metal clip of negligible resistance then shorts the 12 Ω coil. By what factor does the supply current change?`,
        options: [r`It rises by a factor of 1.5`, r`It falls by a factor of 0.40`, r`It rises by a factor of 2.5`, r`It rises by a factor of 1.67`],
        correctAnswer: 2,
        explanation: r`Before the short R = 20 Ω and I = 1.0 A. Afterward R = 3 + 5 = 8 Ω and I = 20/8 = 2.5 A, a factor of 2.5. The factor 1.5 belongs to three identical resistors, 0.40 inverts the ratio, and 1.67 is 20/12, which keeps the shorted resistor and removes the others.`,
      },
    ],
  },
  [r`State Ohm's law and identify what each variable means.`]: {
    kind: 'calc',
    more: [
      {
        question: r`The heating coil of a hair dryer carries 8.0 A when it is plugged into a 120 V outlet. What is the resistance of the coil while it runs?`,
        options: [r`15 Ω`, r`960 Ω`, r`0.067 Ω`, r`112 Ω`],
        correctAnswer: 0,
        explanation: r`R = V/I = 120 V/8.0 A = 15 Ω. Multiplying the two values gives 960, inverting the ratio gives 0.067, and 112 subtracts the current from the voltage, which has no physical meaning.`,
      },
      {
        question: r`A worker with dry skin touches the two terminals of a 120 V source. The resistance of the path through the body is 100 kΩ. What current flows through the worker?`,
        options: [r`1.2 A`, r`0.83 mA`, r`12 mA`, r`1.2 mA`],
        correctAnswer: 3,
        explanation: r`I = V/R = 120 V/(1.0 × 10⁵ Ω) = 1.2 × 10⁻³ A = 1.2 mA. Ignoring the kilo prefix gives 1.2 A, inverting the ratio leads to 0.83, and 12 mA is a power-of-ten slip in the conversion.`,
      },
      {
        question: r`An indicator circuit sends 40 mA through a 150 Ω resistor. What is the voltage across the resistor?`,
        options: [r`6000 V`, r`6.0 V`, r`3.75 V`, r`0.27 V`],
        correctAnswer: 1,
        explanation: r`V = IR = (0.040 A)(150 Ω) = 6.0 V. Leaving the current as 40 gives 6000 V, dividing 150 by 40 gives 3.75, and dividing 40 by 150 gives 0.27.`,
      },
      {
        question: r`In a second trial, the voltage across an ohmic electrode gel is doubled and the gel is reformulated to have half the resistance. The new current is how many times the original current?`,
        options: [r`The same as the original current`, r`2 times the original current`, r`4 times the original current`, r`One quarter of the original current`],
        correctAnswer: 2,
        explanation: r`I = V/R, so doubling V doubles the current and halving R doubles it again: a factor of 4. "The same" lets the two changes cancel, as they would if R had doubled. A factor of 2 counts only one change, and one quarter inverts both.`,
      },
      {
        question: r`A 9.0 V battery is connected across a glass recording electrode whose resistance is 3.0 MΩ. What current flows through the electrode?`,
        options: [r`3.0 μA`, r`3.0 A`, r`27 μA`, r`0.33 μA`],
        correctAnswer: 0,
        explanation: r`I = V/R = 9.0 V/(3.0 × 10⁶ Ω) = 3.0 × 10⁻⁶ A = 3.0 μA. Ignoring the mega prefix gives 3.0 A, multiplying 9.0 by 3.0 gives 27, and inverting the ratio gives 0.33.`,
      },
      {
        question: r`A 24 V supply drives 0.50 A through a heater and its control dial, which together act as one resistance. To what total resistance must the dial bring the circuit for the current to be 0.20 A at the same voltage?`,
        options: [r`48 Ω`, r`4.8 Ω`, r`72 Ω`, r`120 Ω`],
        correctAnswer: 3,
        explanation: r`R = V/I = 24 V/0.20 A = 120 Ω. The value 48 Ω is the resistance at the original 0.50 A, 72 Ω is the amount that must be added and not the total, and 4.8 multiplies the voltage by the new current.`,
      },
    ],
  },
  [r`Resistors in series vs. parallel?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A hobbyist has a 20 Ω motor winding and a 5 Ω lamp. She can connect them to each other in series or in parallel. What single resistance does each arrangement present?`,
        options: [r`4 Ω in series; 25 Ω in parallel`, r`25 Ω in series; 4 Ω in parallel`, r`25 Ω in series; 12.5 Ω in parallel`, r`25 Ω in series; 0.25 Ω in parallel`],
        correctAnswer: 1,
        explanation: r`In series the resistances add: 20 + 5 = 25 Ω. In parallel 1/R = 1/20 + 1/5 = 5/20, so R = 4 Ω. The first answer swaps the two rules, 12.5 Ω is the average of the two resistors, and 0.25 is the sum of the reciprocals before it has been inverted.`,
      },
      {
        question: r`Three resistors of 2.0 kΩ, 500 Ω and 1.5 kΩ are connected in series on a circuit board. What is their total resistance?`,
        options: [r`504 Ω`, r`0.32 kΩ`, r`40 kΩ`, r`4.0 kΩ`],
        correctAnswer: 3,
        explanation: r`In the same units the values are 2000 Ω, 500 Ω and 1500 Ω, and series resistances add to 4000 Ω = 4.0 kΩ. Adding 2.0 + 500 + 1.5 without converting gives 504, 0.32 kΩ applies the parallel rule, and 40 kΩ is a power-of-ten slip.`,
      },
      {
        question: r`A series chain contains a 12 Ω resistor, a 20 Ω resistor and a third resistor. The chain has a total resistance of 47 Ω. What is the third resistance?`,
        options: [r`15 Ω`, r`79 Ω`, r`32 Ω`, r`27 Ω`],
        correctAnswer: 0,
        explanation: r`Series resistances add, so 12 + 20 + R = 47 and R = 15 Ω. Adding all three numbers gives 79 Ω, 32 Ω is the sum of the two known resistors, and 27 Ω subtracts only the 20 Ω.`,
      },
      {
        question: r`A 30 Ω lamp and a 15 Ω lamp are connected in parallel across a 30 V ideal supply. What total current does the supply deliver?`,
        options: [r`0.67 A`, r`2 A`, r`3 A`, r`1 A`],
        correctAnswer: 2,
        explanation: r`In parallel 1/R = 1/30 + 1/15 = 3/30, so R = 10 Ω and I = 30 V/10 Ω = 3 A (1 A in the 30 Ω lamp plus 2 A in the 15 Ω lamp). Adding the resistances as if in series gives 0.67 A, and 1 A and 2 A are the single branch currents.`,
      },
      {
        question: r`Three identical resistors in series across an ideal battery are rewired so that all three are in parallel across the same battery. By what factor does the battery current change?`,
        options: [r`It becomes 3 times as large`, r`It becomes 9 times as large`, r`It becomes 1/3 as large`, r`It becomes 1/9 as large`],
        correctAnswer: 1,
        explanation: r`In series the total is 3R, and in parallel it is R/3, which is 9 times smaller, so I = V/R is 9 times larger. A factor of 3 compares only one arrangement with a single resistor, and the fractions swap the two arrangements.`,
      },
      {
        question: r`Two 8 Ω resistors are connected in parallel with each other, and this pair is connected in series with a 6 Ω resistor. What is the equivalent resistance of the whole network?`,
        options: [r`22 Ω`, r`2.4 Ω`, r`14 Ω`, r`10 Ω`],
        correctAnswer: 3,
        explanation: r`The parallel pair is 1/R = 1/8 + 1/8, so R = 4 Ω, and adding the series 6 Ω gives 10 Ω. Adding all three as if in series gives 22 Ω, putting all three in parallel gives 2.4 Ω, and 14 Ω counts the parallel pair as 8 Ω.`,
      },
    ],
  },
  [r`Three resistors of 6 Ω each are connected in parallel. What is the total resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Three 150 Ω temperature probes are connected in parallel to one input of a monitor. What resistance does the monitor see?`,
        options: [r`450 Ω`, r`150 Ω`, r`50 Ω`, r`0.02 Ω`],
        correctAnswer: 2,
        explanation: r`1/R = 3 × (1/150) = 1/50, so R = 50 Ω, the same as R/n = 150/3. Adding gives 450 Ω, which is the series total, 150 Ω ignores the extra branches, and 0.02 is the sum of the reciprocals before it has been inverted.`,
      },
      {
        question: r`Five identical 100 Ω lamps are connected in parallel across a 20 V ideal supply. What total current does the supply deliver?`,
        options: [r`1.0 A`, r`0.040 A`, r`0.20 A`, r`5.0 A`],
        correctAnswer: 0,
        explanation: r`The total resistance is R/n = 100/5 = 20 Ω, so I = 20 V/20 Ω = 1.0 A. Adding the lamps to 500 Ω as if in series gives 0.040 A, 0.20 A is the current in one lamp only, and 5.0 A comes from dividing 100 by 20.`,
      },
      {
        question: r`An ohmmeter placed across a bundle of three identical nichrome heating strands, which are connected in parallel, reads 8 Ω. What would the ohmmeter read across one strand on its own?`,
        options: [r`2.7 Ω`, r`24 Ω`, r`8 Ω`, r`72 Ω`],
        correctAnswer: 1,
        explanation: r`For n identical resistors in parallel the total is R/n, so R = 3 × 8 Ω = 24 Ω. Dividing by 3 gives 2.7 Ω, which treats the 8 Ω as a series total. Each resistor cannot be 8 Ω, since the parallel total is below any single branch, and 72 Ω multiplies by 3 twice.`,
      },
      {
        question: r`Three identical heaters are connected in parallel. One of them is then unplugged, leaving two. By what factor does the equivalent resistance of the group change?`,
        options: [r`It falls to 2/3 of its value`, r`It rises to 3 times its value`, r`It stays at the same value`, r`It rises to 3/2 of its value`],
        correctAnswer: 3,
        explanation: r`With three the total is R/3 and with two it is R/2, so the factor is (R/2)/(R/3) = 3/2. Falling to 2/3 treats the heaters as if they were in series, a factor of 3 would be the change from three heaters to one, and the total cannot stay the same when a path is removed.`,
      },
      {
        question: r`A sensor board has six 3.0 kΩ pull-up components soldered in parallel between a pair of copper tracks. What single resistance does the board present between the tracks?`,
        options: [r`500 Ω`, r`18 kΩ`, r`0.50 Ω`, r`2.0 Ω`],
        correctAnswer: 0,
        explanation: r`R/n = (3000 Ω)/6 = 500 Ω. Multiplying gives the series total of 18 kΩ, 0.50 Ω forgets the kilo prefix, and 2.0 comes from dividing 6 by 3.0.`,
      },
      {
        question: r`Three 9 Ω heating elements are connected in parallel, and together they draw 6 A from an ideal supply. What is the voltage of the supply?`,
        options: [r`54 V`, r`162 V`, r`18 V`, r`2 V`],
        correctAnswer: 2,
        explanation: r`The equivalent resistance is 9/3 = 3 Ω, so V = IR = (6 A)(3 Ω) = 18 V. Using 9 Ω, the value of one element, gives 54 V, using the series total of 27 Ω gives 162 V, and 2 V divides 6 by 3.`,
      },
    ],
  },
  [r`In a series circuit with a 12 V battery and three 4 Ω resistors, what is the current?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A flashlight's 9 V battery is connected to three 6 Ω lamps wired in series. What current flows through the lamps?`,
        options: [r`1.5 A`, r`0.5 A`, r`4.5 A`, r`2 A`],
        correctAnswer: 1,
        explanation: r`In series R = 6 + 6 + 6 = 18 Ω, so I = 9 V/18 Ω = 0.5 A. Using only one 6 Ω lamp gives 1.5 A, the parallel total of 2 Ω gives 4.5 A, and 2 A inverts the ratio to 18/9.`,
      },
      {
        question: r`Three 5 Ω resistors are connected in series to an ideal battery, and an ammeter in the loop reads 0.4 A. What is the battery voltage?`,
        options: [r`2.0 V`, r`0.67 V`, r`38 V`, r`6.0 V`],
        correctAnswer: 3,
        explanation: r`In series R = 15 Ω, so V = IR = (0.4 A)(15 Ω) = 6.0 V. The value 2.0 V is the voltage across just one resistor, 0.67 V uses the parallel total of 1.67 Ω, and 38 V divides 15 by 0.4.`,
      },
      {
        question: r`Four identical resistors are connected in series to a 12 V ideal battery, and the current is 0.25 A. What is the resistance of each resistor?`,
        options: [r`12 Ω`, r`48 Ω`, r`192 Ω`, r`3 Ω`],
        correctAnswer: 0,
        explanation: r`The total resistance is V/I = 12 V/0.25 A = 48 Ω, and in series that is shared by four equal resistors: 12 Ω each. The value 48 Ω is the total, 192 Ω multiplies by 4 instead of dividing, and 3 Ω divides by 4 twice.`,
      },
      {
        question: r`A 24 V truck battery powers a dashboard loop that contains a 3 Ω gauge, a 4 Ω warning lamp and a 5 Ω fan motor, all connected in series. How many volts does the fan motor receive?`,
        options: [r`8 V`, r`24 V`, r`10 V`, r`4.8 V`],
        correctAnswer: 2,
        explanation: r`In series R = 3 + 4 + 5 = 12 Ω, so I = 24 V/12 Ω = 2 A and the 5 Ω fan motor has V = (2 A)(5 Ω) = 10 V. Sharing the 24 V equally gives 8 V, 24 V is the whole battery voltage, and 4.8 V divides 24 by 5.`,
      },
      {
        question: r`Three identical resistors are in series across an ideal battery. A fourth identical resistor is added to the series chain. By what factor does the current change?`,
        options: [r`It falls to 1/4 of its value`, r`It falls to 3/4 of its value`, r`It rises to 4/3 of its value`, r`It stays at the same value`],
        correctAnswer: 1,
        explanation: r`The total resistance rises from 3R to 4R, so I = V/R falls from V/3R to V/4R, which is 3/4 of the original. One quarter compares the chain with a single resistor, 4/3 inverts the change, and the current cannot stay the same when the total resistance rises at fixed voltage.`,
      },
      {
        question: r`A 1.5 V cell is connected to a 1 kΩ, a 2 kΩ and another 2 kΩ resistor, all in series. What current flows?`,
        options: [r`0.30 A`, r`3.0 mA`, r`7.5 mA`, r`0.30 mA`],
        correctAnswer: 3,
        explanation: r`In series R = 1 + 2 + 2 = 5 kΩ = 5000 Ω, so I = 1.5 V/5000 Ω = 3.0 × 10⁻⁴ A = 0.30 mA. Ignoring the kilo prefix gives 0.30 A, the parallel total of 0.5 kΩ gives 3.0 mA, and 7.5 multiplies 1.5 by 5.`,
      },
    ],
  },
  [r`In series, {{c1::current}} is the same through all components; in parallel, {{c2::voltage}} is the same across all branches.`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student wants to measure the current through a lamp and the voltage across the same lamp. An ammeter reads correctly only if it carries the lamp's current, and a voltmeter only if it has the lamp's voltage across it. How should the two meters be wired?`,
        options: [r`Ammeter in parallel with the lamp; voltmeter in series with it`, r`Ammeter in series with the lamp; voltmeter in parallel with it`, r`Ammeter in series with the lamp; voltmeter in series with it`, r`Ammeter in parallel with the lamp; voltmeter in parallel with it`],
        correctAnswer: 1,
        explanation: r`Components in series carry the same current, so the ammeter goes in series with the lamp. Components in parallel have the same voltage across them, so the voltmeter goes in parallel with the lamp. A meter wired the other way round shares the wrong quantity with the lamp: an ammeter in parallel shares the lamp's voltage, and a voltmeter in series shares its current.`,
      },
      {
        question: r`Two unequal resistors are the only loads connected to a battery. Measurements show 4 V across each of them, with 0.2 A in one and 0.5 A in the other. How are the two resistors connected?`,
        options: [r`In series, as they have equal voltages but unequal currents`, r`In series, as unequal resistors can never share a current`, r`In parallel, as unequal resistors can never share a voltage`, r`In parallel, as they have equal voltages but unequal currents`],
        correctAnswer: 3,
        explanation: r`Parallel branches join the same two points, so they share one voltage while the currents differ according to I = V/R: 4 V with 0.2 A and 0.5 A is exactly that. Series resistors would carry the same current, and unequal ones would then have unequal voltages. The other two reasons are false in themselves: sharing a current is what series resistors do, and sharing a voltage is what parallel ones do.`,
      },
    ],
  },
  [r`A short circuit is dangerous because:`]: {
    kind: 'concept',
    more: [
      {
        question: r`A fuse is placed in series with household wiring to guard against a short circuit. What condition during a short makes the fuse melt and open the loop?`,
        options: [r`A current far above its normal value`, r`A voltage far above its normal value`, r`A resistance far above its normal value`, r`A current far below its normal value`],
        correctAnswer: 0,
        explanation: r`A short gives the current a path of very low resistance, so at the fixed supply voltage I = V/R becomes very large, and that large current heats the fuse wire until it melts. The supply voltage does not rise in a short, the resistance of the path falls instead of rising, and a current below normal is what a break in the circuit would cause.`,
      },
      {
        question: r`The cord of a space heater can fail in two ways: one of its two conductors can break, or the two conductors can touch each other ahead of the heater. Which failure is the fire hazard, and why?`,
        options: [r`The break: the resistance falls, so the current surges`, r`The break: the resistance rises, so the current surges`, r`The touch: the resistance falls, so the current surges`, r`The touch: the resistance rises, so the voltage surges`],
        correctAnswer: 2,
        explanation: r`Touching conductors let the current bypass the heater through almost no resistance, so I = V/R becomes very large and the wiring overheats. A break is an open circuit: the resistance becomes enormous and the current stops, which is a nuisance but not a source of heat. The outlet voltage is fixed by the supply and does not surge in either case.`,
      },
    ],
  },
  [r`Two 6 Ω resistors in series give:`]: {
    kind: 'calc',
    more: [
      {
        question: r`Two 75 Ω heating pads are plugged together so that they are connected in series. What is their combined resistance?`,
        options: [r`37.5 Ω`, r`150 Ω`, r`75 Ω`, r`5625 Ω`],
        correctAnswer: 1,
        explanation: r`Series resistances add: 75 + 75 = 150 Ω. Halving gives the parallel value of 37.5 Ω, 75 Ω ignores the second pad, and 5625 multiplies the two values.`,
      },
      {
        question: r`A 2.2 kΩ resistor is soldered in series with an 800 Ω resistor. What is the resistance of the pair?`,
        options: [r`802 Ω`, r`0.59 kΩ`, r`1.4 kΩ`, r`3.0 kΩ`],
        correctAnswer: 3,
        explanation: r`In the same units, 2200 Ω + 800 Ω = 3000 Ω = 3.0 kΩ. Adding 2.2 to 800 without converting gives 802, 0.59 kΩ uses the parallel rule, and 1.4 kΩ subtracts the two values.`,
      },
      {
        question: r`Two identical resistors connected in series have a total resistance of 34 Ω. What is the resistance of each one?`,
        options: [r`17 Ω`, r`68 Ω`, r`34 Ω`, r`8.5 Ω`],
        correctAnswer: 0,
        explanation: r`Series resistances add, so R + R = 34 Ω and R = 17 Ω. Answering 68 Ω would be right if 34 Ω were the parallel total, 34 Ω each would give 68 Ω in series, and 8.5 Ω halves twice.`,
      },
      {
        question: r`A current of 0.5 A flows through two 8 Ω resistors connected in series. What is the total voltage across the pair?`,
        options: [r`4 V`, r`2 V`, r`8 V`, r`32 V`],
        correctAnswer: 2,
        explanation: r`In series R = 8 + 8 = 16 Ω, so V = IR = (0.5 A)(16 Ω) = 8 V. The value 4 V is the voltage across only one resistor, 2 V uses the parallel total of 4 Ω, and 32 divides 16 by 0.5.`,
      },
      {
        question: r`A single 6 Ω resistor connected to an ideal battery carries 3 A. A second 6 Ω resistor is then added in series with the first. What current does the battery supply now?`,
        options: [r`6 A`, r`1.5 A`, r`3 A`, r`0.75 A`],
        correctAnswer: 1,
        explanation: r`The battery is 18 V, and the series pair has 6 + 6 = 12 Ω, so I = 18 V/12 Ω = 1.5 A: doubling the resistance halves the current. An answer of 6 A treats the added resistor as a parallel branch, 3 A ignores it, and 0.75 A halves twice.`,
      },
      {
        question: r`A string of decorative lights contains 20 identical lamps in series, each with a resistance of 2.5 Ω. What is the resistance of the whole string?`,
        options: [r`0.125 Ω`, r`8.0 Ω`, r`22.5 Ω`, r`50 Ω`],
        correctAnswer: 3,
        explanation: r`Series resistances add, and 20 equal lamps give 20 × 2.5 Ω = 50 Ω. Dividing 2.5 by 20 gives the parallel value of 0.125 Ω, 8.0 divides 20 by 2.5, and 22.5 adds the number of lamps to the resistance of one.`,
      },
    ],
  },
  [r`Wire resistance is $R =$ {{c1::$\rho L/A$}}, so doubling the radius cuts resistance to one fourth.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A heater needs a 10 Ω coil. The wire available has a resistivity of 1.0 × 10⁻⁶ Ω·m and a cross-sectional area of 5.0 × 10⁻⁷ m². What length of wire is needed?`,
        options: [r`5.0 m`, r`20 m`, r`0.20 m`, r`50 m`],
        correctAnswer: 0,
        explanation: r`Rearranging R = ρL/A gives L = RA/ρ = (10)(5.0 × 10⁻⁷)/(1.0 × 10⁻⁶) = 5.0 m. Using Rρ/A gives 20, inverting the correct expression gives 0.20, and 50 m is a power-of-ten slip.`,
      },
      {
        question: r`To identify an unknown alloy, a lab group cuts a 2.0 m sample that is 1.0 × 10⁻⁶ m² in cross-section and measures 0.10 Ω from end to end with an ohmmeter. What resistivity should the group report for the alloy?`,
        options: [r`2.0 × 10⁻⁷ Ω·m`, r`2.0 × 10⁵ Ω·m`, r`5.0 × 10⁻⁸ Ω·m`, r`5.0 × 10⁻⁷ Ω·m`],
        correctAnswer: 2,
        explanation: r`Rearranging R = ρL/A gives ρ = RA/L = (0.10)(1.0 × 10⁻⁶)/(2.0) = 5.0 × 10⁻⁸ Ω·m. Multiplying by the length instead of dividing gives 2.0 × 10⁻⁷, using RL/A gives 2.0 × 10⁵, and 5.0 × 10⁻⁷ is a power-of-ten slip.`,
      },
      {
        question: r`A 7 Ω wire is replaced by a wire of the same metal that has half the radius and half the length. What is the resistance of the replacement?`,
        options: [r`7 Ω`, r`28 Ω`, r`3.5 Ω`, r`14 Ω`],
        correctAnswer: 3,
        explanation: r`Half the radius gives one quarter of the area, which multiplies R = ρL/A by 4, and half the length multiplies it by 1/2: 7 Ω × 4 × 1/2 = 14 Ω. Treating the radius as a simple factor of 2 makes the changes cancel at 7 Ω, 28 Ω ignores the shorter length, and 3.5 Ω ignores the radius.`,
      },
      {
        question: r`A 10 m extension cord has a resistance of 0.20 Ω. What is the resistance of a 25 m cord made from the same wire?`,
        options: [r`0.080 Ω`, r`0.50 Ω`, r`1.25 Ω`, r`5.0 Ω`],
        correctAnswer: 1,
        explanation: r`With the same metal and area, R is proportional to L, so R = 0.20 Ω × (25/10) = 0.50 Ω. Inverting the ratio gives 0.080 Ω, squaring the factor of 2.5 gives 1.25 Ω, and 5.0 Ω multiplies 0.20 by 25 without dividing by 10.`,
      },
      {
        question: r`An electrician checks a 1.0 m offcut of copper house cable whose conductor is 1.7 mm² in cross-section. Copper has a resistivity of 1.7 × 10⁻⁸ Ω·m. What should the offcut measure from end to end?`,
        options: [r`1.0 × 10⁻² Ω`, r`1.0 × 10⁻⁸ Ω`, r`1.0 × 10⁻⁵ Ω`, r`1.0 × 10⁻¹⁴ Ω`],
        correctAnswer: 0,
        explanation: r`1 mm² is 10⁻⁶ m², so the area is 1.7 × 10⁻⁶ m² and R = ρL/A = (1.7 × 10⁻⁸)(1.0)/(1.7 × 10⁻⁶) = 1.0 × 10⁻² Ω. Leaving the area as 1.7 gives 10⁻⁸, converting with 10⁻³ (the factor for a length, not an area) gives 10⁻⁵, and converting the wrong way with 10⁶ gives 10⁻¹⁴.`,
      },
      {
        question: r`Wires P and Q have the same length. The metal of P has twice the resistivity of the metal of Q, and P has twice the radius of Q. How does the resistance of P compare with that of Q?`,
        options: [r`P has twice the resistance of Q`, r`P has the same resistance as Q`, r`P has one half the resistance of Q`, r`P has one eighth the resistance of Q`],
        correctAnswer: 2,
        explanation: r`R = ρL/A. Twice the resistivity multiplies R by 2, and twice the radius gives 4 times the area, which multiplies R by 1/4, so P has 2 × 1/4 = 1/2 the resistance of Q. "Twice" ignores the radius, "the same" lets the radius count only once, and one eighth divides by the resistivity factor instead of multiplying.`,
      },
    ],
  },
  [r`A $6\,\Omega$ and a $3\,\Omega$ resistor are connected in parallel. What is the equivalent resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 Ω speaker and a 4 Ω speaker are wired in parallel to the same amplifier output. What is their equivalent resistance?`,
        options: [r`16 Ω`, r`8 Ω`, r`0.33 Ω`, r`3 Ω`],
        correctAnswer: 3,
        explanation: r`Product over sum: (12 × 4)/(12 + 4) = 48/16 = 3 Ω, which is below the smaller resistor as it must be. Adding gives the series value of 16 Ω, 8 Ω is the average (or the difference), and 0.33 is 1/12 + 1/4 before it has been inverted.`,
      },
      {
        question: r`On an amplifier board, a 3.0 kΩ feedback component and a 1.0 kΩ trimmer are soldered in parallel between two solder pads. What single resistance appears between the pads?`,
        options: [r`4.0 kΩ`, r`750 Ω`, r`0.75 Ω`, r`1.3 kΩ`],
        correctAnswer: 1,
        explanation: r`Product over sum in kΩ: (3.0 × 1.0)/(3.0 + 1.0) = 0.75 kΩ = 750 Ω. Adding gives the series value of 4.0 kΩ, 0.75 Ω drops the kilo prefix, and 1.3 kΩ turns the fraction upside down (sum over product).`,
      },
      {
        question: r`A 12 Ω heater and a 6 Ω heater are connected in parallel across a 36 V ideal supply. What total current does the supply deliver?`,
        options: [r`9 A`, r`2 A`, r`3 A`, r`6 A`],
        correctAnswer: 0,
        explanation: r`The parallel pair is (12 × 6)/(12 + 6) = 72/18 = 4 Ω, so I = 36 V/4 Ω = 9 A. Adding the resistances to 18 Ω as if in series gives 2 A, and 3 A and 6 A are the currents in the 12 Ω branch and the 6 Ω branch alone.`,
      },
      {
        question: r`Two 50 Ω coaxial terminators are connected in parallel at the end of a cable. What is their equivalent resistance?`,
        options: [r`100 Ω`, r`50 Ω`, r`25 Ω`, r`0.04 Ω`],
        correctAnswer: 2,
        explanation: r`Product over sum: (50 × 50)/(50 + 50) = 2500/100 = 25 Ω, half of either one. Adding gives the series value of 100 Ω, 50 Ω ignores the second path, and 0.04 is 1/50 + 1/50 before it has been inverted.`,
      },
      {
        question: r`A technician lowers the resistance of a circuit branch of resistance R by soldering a shunt of resistance 4R in parallel with it. In terms of R, what is the resistance of the shunted branch?`,
        options: [r`5.0R`, r`1.25R`, r`0.20R`, r`0.80R`],
        correctAnswer: 3,
        explanation: r`Product over sum: (R × 4R)/(R + 4R) = 4R²/5R = 0.80R, a little below the smaller resistor. Adding gives the series value 5.0R, 1.25R turns the fraction upside down, and 0.20R divides R by 5 as if there were five equal branches.`,
      },
      {
        question: r`In a model of blood flow drawn as an electric circuit, two vessel beds are represented by a 4 Ω and a 6 Ω resistor in parallel. What is the equivalent resistance of the two beds?`,
        options: [r`10 Ω`, r`2.4 Ω`, r`5 Ω`, r`0.42 Ω`],
        correctAnswer: 1,
        explanation: r`Product over sum: (4 × 6)/(4 + 6) = 24/10 = 2.4 Ω. Adding gives the series value of 10 Ω, 5 Ω is the average of the two, and 0.42 is 1/4 + 1/6 before it has been inverted.`,
      },
    ],
  },
  [r`Placing $N$ identical resistors of resistance $R$ in parallel gives an equivalent resistance of {{c1::$R/N$}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`Eight identical 40 Ω electrode pads are connected in parallel between two leads. What is the equivalent resistance of the set?`,
        options: [r`320 Ω`, r`32 Ω`, r`5 Ω`, r`0.2 Ω`],
        correctAnswer: 2,
        explanation: r`For N identical resistors in parallel the total is R/N = 40/8 = 5 Ω. Multiplying gives the series value of 320 Ω, 32 subtracts the number of pads from the resistance, and 0.2 divides 8 by 40.`,
      },
      {
        question: r`Twelve identical bulbs are wired in parallel, and the whole set has a resistance of 20 Ω. What is the resistance of one bulb?`,
        options: [r`240 Ω`, r`1.7 Ω`, r`20 Ω`, r`32 Ω`],
        correctAnswer: 0,
        explanation: r`The total is R/N, so R = N × 20 Ω = 12 × 20 = 240 Ω. Dividing 20 by 12 gives 1.7 Ω, which would be right if the bulbs were in series. One bulb cannot equal the 20 Ω total, and 32 simply adds 12 and 20.`,
      },
      {
        question: r`Six identical lamps are connected in parallel across a 12 V ideal battery, and each lamp carries 0.25 A. What is the equivalent resistance of the six lamps together?`,
        options: [r`48 Ω`, r`288 Ω`, r`2.0 Ω`, r`8.0 Ω`],
        correctAnswer: 3,
        explanation: r`Each lamp is 12 V/0.25 A = 48 Ω, and six in parallel give 48/6 = 8.0 Ω (equally, 12 V divided by the total current of 1.5 A). The value 48 Ω is a single lamp, 288 Ω multiplies by 6 as if in series, and 2.0 divides the voltage by the number of lamps.`,
      },
      {
        question: r`Three identical resistors in parallel have an equivalent resistance of 30 Ω. Three more of the same resistors are added in parallel, making six. What is the equivalent resistance now?`,
        options: [r`60 Ω`, r`15 Ω`, r`10 Ω`, r`5 Ω`],
        correctAnswer: 1,
        explanation: r`The total is R/N, so doubling N halves it: 30 Ω becomes 15 Ω (each resistor is 90 Ω, and 90/6 = 15). Doubling to 60 Ω treats the added resistors as if in series, 10 Ω divides by the 3 added resistors, and 5 Ω divides the old total by 6.`,
      },
      {
        question: r`A patch of membrane contains 1000 identical open ion channels in parallel. Each channel has a resistance of 50 GΩ (1 GΩ = 10⁹ Ω). What is the resistance of the patch?`,
        options: [r`5.0 × 10⁷ Ω`, r`5.0 × 10¹³ Ω`, r`5.0 × 10¹⁰ Ω`, r`5.0 × 10⁴ Ω`],
        correctAnswer: 0,
        explanation: r`One channel is 5.0 × 10¹⁰ Ω, and R/N = (5.0 × 10¹⁰ Ω)/1000 = 5.0 × 10⁷ Ω. Multiplying by 1000 gives the series value of 5.0 × 10¹³ Ω, 5.0 × 10¹⁰ Ω is one channel alone, and 5.0 × 10⁴ Ω takes a gigaohm as 10⁶ Ω.`,
      },
      {
        question: r`Twenty identical heating wires are connected in parallel in a rear-window heater, and the supply delivers a total of 5.0 A. What current flows in each wire?`,
        options: [r`100 A`, r`5.0 A`, r`0.25 A`, r`4.0 A`],
        correctAnswer: 2,
        explanation: r`Identical parallel branches have the same voltage and the same resistance, so they share the total equally: 5.0 A/20 = 0.25 A each. This is why the total resistance is R/N. Multiplying gives 100 A, 5.0 A in every wire is the series idea of a single shared current, and 4.0 divides 20 by 5.0.`,
      },
    ],
  },
  [r`How does raising the temperature of a metal conductor affect its resistance?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A temperature probe made of platinum wire and a second probe made of a semiconductor are both moved from a cool bath into a warm bath. How does the resistance of each probe change?`,
        options: [r`Platinum resistance falls; semiconductor resistance rises`, r`Platinum resistance rises; semiconductor resistance rises`, r`Platinum resistance falls; semiconductor resistance falls`, r`Platinum resistance rises; semiconductor resistance falls`],
        correctAnswer: 3,
        explanation: r`Platinum is a metal: warming makes its lattice vibrate more, conduction electrons scatter more often, and the resistance rises. A semiconductor behaves the opposite way, with resistance falling as it warms. The other answers swap the two materials or assume both respond to heat in the same direction.`,
      },
      {
        question: r`The resistance of a copper coil is measured as 5.0 Ω in the morning and 4.6 Ω in the evening. Nothing about the coil's size or shape has changed. What is the most likely explanation?`,
        options: [r`The coil is cooler, so its electrons are scattered less often`, r`The coil is warmer, so its electrons are scattered less often`, r`The coil is cooler, so fewer of its electrons are free to move`, r`The coil is warmer, so more of its electrons are free to move`],
        correctAnswer: 0,
        explanation: r`A metal's resistance falls when it cools, because the lattice vibrates less and scatters the conduction electrons less often. Warming would raise the resistance, not lower it. The number of free electrons in a metal is essentially fixed, and fewer free electrons would raise the resistance, not lower it.`,
      },
    ],
  },
  [r`A resistanceless wire is connected across one resistor in a series chain. What happens?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Three unequal resistors are in series across an ideal battery. A wire of negligible resistance is then connected across the middle resistor. Which statement about the circuit afterward is NOT correct?`,
        options: [r`The middle resistor now has zero volts across it`, r`The current supplied by the battery is now larger`, r`The other resistors each have less voltage than before`, r`The total resistance of the chain is now smaller`],
        correctAnswer: 2,
        explanation: r`Shorting the middle resistor removes its resistance from the chain, so the total falls and the battery current rises. With more current, V = IR gives each of the other resistors more voltage, not less: together they now take the whole battery voltage. The shorted resistor does have 0 V across it, because the wire joins its two ends.`,
      },
      {
        question: r`A student wants to take one lamp "out" of a string of identical lamps in series across an ideal battery. She can either unscrew it, leaving a gap, or bridge it with a wire of negligible resistance. What do the other lamps do in each case?`,
        options: [r`Gap: they get brighter. Bridge: they all go out`, r`Gap: they all go out. Bridge: they get brighter`, r`Gap: they all go out. Bridge: they stay the same`, r`Gap: they get dimmer. Bridge: they get brighter`],
        correctAnswer: 1,
        explanation: r`A gap opens the only path, so the current stops and every lamp goes out. A bridging wire shorts the lamp: the total resistance falls, the current rises, and the remaining lamps glow brighter. The first answer swaps the two cases, "stay the same" ignores the rise in current, and "dimmer" would need some current to keep flowing across the gap.`,
      },
    ],
  },
  [r`The equivalent resistance of a parallel combination is always less than {{c1::the smallest individual resistor}}.`]: {
    kind: 'concept',
    more: [
      {
        question: r`A fixed 50 Ω resistor is connected in parallel with a variable resistor that can be set anywhere from nearly zero to a very large value. Over what range can the equivalent resistance of the pair be set?`,
        options: [r`From nearly 0 Ω up to just under 50 Ω`, r`From 25 Ω up to just under 50 Ω`, r`From just over 50 Ω up to 100 Ω`, r`From just over 50 Ω up to very large`],
        correctAnswer: 0,
        explanation: r`A parallel pair is always below its smallest member. When the variable resistor is tiny the pair is even smaller, close to 0 Ω, and when it is huge the pair approaches, but never reaches, 50 Ω. Starting at 25 Ω assumes the variable resistor cannot go below 50 Ω, and the ranges above 50 Ω are what a series connection would give.`,
      },
      {
        question: r`Two resistors in parallel are known to have an equivalent resistance of 30 Ω. Which of these pairs could they be?`,
        options: [r`15 Ω and 15 Ω`, r`30 Ω and 30 Ω`, r`20 Ω and 60 Ω`, r`40 Ω and 120 Ω`],
        correctAnswer: 3,
        explanation: r`The equivalent must be below the smallest resistor, so both resistors must be larger than 30 Ω, and only 40 Ω with 120 Ω qualifies: (40 × 120)/160 = 30 Ω. A pair of 15 Ω resistors adds to 30 Ω only in series, two 30 Ω resistors give 15 Ω, and a pair containing 20 Ω must come out below 20 Ω.`,
      },
    ],
  },
}
