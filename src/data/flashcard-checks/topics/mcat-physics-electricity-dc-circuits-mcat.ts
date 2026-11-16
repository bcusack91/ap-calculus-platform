import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-electricity-dc-circuits-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Conventional current flows out of the source's {{c1::positive}} terminal, through the external circuit, and back into the negative terminal.`]: {
    question: r`A phone charger's red wire is joined to the supply's positive terminal and its black wire to the negative terminal. While the phone charges, which way do conventional current and the electrons move in the red wire?`,
    options: [r`Current toward the supply; electrons toward the phone`, r`Current toward the phone; electrons toward the supply`, r`Current toward the phone; electrons toward the phone`, r`Current toward the supply; electrons toward the supply`],
    correctAnswer: 1,
    explanation: r`Conventional current leaves the positive terminal, so in the red wire it runs from the supply to the phone, and the electrons drift the opposite way, back toward the supply. The reversed choice swaps the two, and the choices that send both the same way forget that electrons carry negative charge.`,
  },
  [r`A $9$ V ideal battery, an open switch and a lamp form one loop. What is the voltage across the lamp, and across the switch gap?`]: {
    question: r`A 6 V ideal battery, a 3 Ω heating coil and a fuse form one loop. The fuse blows and leaves a gap. A voltmeter is then placed across the coil, and afterward across the blown fuse. What does it read?`,
    options: [r`6 V across the coil; 0 V across the fuse`, r`3 V across the coil; 3 V across the fuse`, r`0 V across the coil; 0 V across the fuse`, r`0 V across the coil; 6 V across the fuse`],
    correctAnswer: 3,
    explanation: r`With the loop broken no current flows, so the coil has V = IR = 0 and the whole 6 V appears across the gap. Putting 6 V on the coil treats the circuit as still complete, the 3 V split invents a divider, and zero across both would break the loop rule.`,
  },
  [r`Released from rest in an electric field, an electron moves toward {{c1::higher}} potential, and its potential energy decreases.`]: {
    question: r`Plate X is held at +40 V and plate Y at +10 V. An electron is released from rest midway between the plates. Which way does it move, and what happens to its electrical potential energy?`,
    options: [r`Toward X, and its potential energy decreases`, r`Toward Y, and its potential energy decreases`, r`Toward X, and its potential energy increases`, r`Toward Y, and its potential energy increases`],
    correctAnswer: 0,
    explanation: r`A negative charge released from rest moves toward higher potential, here plate X, and since ΔU = qΔV with negative q and positive ΔV, its potential energy falls. Moving toward Y is what a positive charge would do, and any free charge released from rest loses potential energy rather than gaining it.`,
  },
  [r`By how much does the potential energy of one $\text{Na}^+$ ion change when it crosses a $70$ mV membrane potential?`]: {
    question: r`During the falling phase of an action potential, a K⁺ ion leaves a neuron through an open channel and moves through a potential drop of 100 mV. Taking e = 1.6 × 10⁻¹⁹ C, how much electrical potential energy does the ion lose?`,
    options: [r`1.6 × 10⁻¹⁷ J`, r`1.6 × 10⁻¹⁸ J`, r`1.6 × 10⁻²⁰ J`, r`3.2 × 10⁻²⁰ J`],
    correctAnswer: 2,
    explanation: r`|ΔU| = q|ΔV| = 1.6 × 10⁻¹⁹ × 0.100 = 1.6 × 10⁻²⁰ J, after converting 100 mV to 0.100 V. The value 1.6 × 10⁻¹⁷ J uses 100 V without converting, 1.6 × 10⁻¹⁸ J divides the charge by 0.100 instead of multiplying, and 3.2 × 10⁻²⁰ J gives the ion two elementary charges.`,
  },
  [r`Heating a metal {{c1::lowers}} its conductivity, while heating an electrolyte solution {{c2::raises}} its conductivity.`]: {
    question: r`A copper wire and a beaker of KCl solution are each connected across their own ideal battery. Both are warmed from 20 °C to 60 °C. How does the current in each one change?`,
    options: [r`Wire current rises; solution current falls`, r`Wire current falls; solution current rises`, r`Wire current falls; solution current falls`, r`Wire current rises; solution current rises`],
    correctAnswer: 1,
    explanation: r`Heating a metal makes its lattice scatter electrons more, so its conductivity and current fall, while warmer ions move faster through the solvent, so the solution conducts better. The reversed choice swaps the two materials, and the choices that move both currents the same way treat metals and electrolytes as one kind of conductor.`,
  },
  [r`In saline, conventional current runs from left to right. Do the $\text{Na}^+$ and $\text{Cl}^-$ contributions to the current cancel?`]: {
    question: r`In an electrolyte between two electrodes, K⁺ ions drifting to the right account for 3 mA and Cl⁻ ions drifting to the left account for 2 mA. What is the total conventional current in the solution?`,
    options: [r`5 mA, directed to the right`, r`1 mA, directed to the right`, r`5 mA, directed to the left`, r`1 mA, directed to the left`],
    correctAnswer: 0,
    explanation: r`Negative charge moving left transports charge exactly as positive charge moving right does, so the two contributions add to 5 mA to the right. The 1 mA answers subtract them as if opposite drift meant opposite current, and the leftward answers take the current direction from the negative ions.`,
  },
  [r`A $2$ pA channel current carried by $\text{Ca}^{2+}$ needs {{c1::half as many}} ions per second as the same current carried by $\text{K}^+$.`]: {
    question: r`An ion channel passes a steady 3.2 pA carried entirely by Ca²⁺ ions. Taking e = 1.6 × 10⁻¹⁹ C, how many ions cross the channel each second?`,
    options: [r`2.0 × 10⁷ ions per second`, r`4.0 × 10⁷ ions per second`, r`5.0 × 10⁶ ions per second`, r`1.0 × 10⁷ ions per second`],
    correctAnswer: 3,
    explanation: r`Each Ca²⁺ carries 2e = 3.2 × 10⁻¹⁹ coulombs, so N = 3.2 × 10⁻¹² / 3.2 × 10⁻¹⁹ = 1.0 × 10⁷ per second. The value 2.0 × 10⁷ counts one charge per ion, 4.0 × 10⁷ doubles for the charge instead of halving, and 5.0 × 10⁶ halves once too often.`,
  },
  [r`A steady $0.50$ A current flows for $1$ minute. How much charge passes, and about how many electrons is that?`]: {
    question: r`A steady current of 0.80 A flows through a pump motor for 2 minutes. Taking e = 1.6 × 10⁻¹⁹ C, about how many electrons pass through the motor in that time?`,
    options: [r`1.0 × 10¹⁹ electrons`, r`5.0 × 10¹⁸ electrons`, r`6.0 × 10²⁰ electrons`, r`3.0 × 10²⁰ electrons`],
    correctAnswer: 2,
    explanation: r`ΔQ = IΔt = (0.80 A)(120 s) = 96 C, and 96/(1.6 × 10⁻¹⁹) = 6.0 × 10²⁰ electrons. The value 1.0 × 10¹⁹ leaves the time as 2 without converting to seconds, 5.0 × 10¹⁸ is the number in a single second, and 3.0 × 10²⁰ uses 60 s instead of 120 s.`,
  },
  [r`Conductance is $G =$ {{c1::$1/R$}}, measured in siemens, and for resistors in parallel the {{c2::conductances}} add.`]: {
    question: r`Two populations of open ion channels form parallel paths across a membrane patch, with conductances of 2 mS and 3 mS. What is the equivalent resistance of the patch?`,
    options: [r`200 Ω`, r`833 Ω`, r`500 Ω`, r`0.2 Ω`],
    correctAnswer: 0,
    explanation: r`Conductances in parallel add, giving 5 mS, and R = 1/G = 1/(0.005 S) = 200 Ω. The value 833 Ω adds the two resistances (500 Ω and 333 Ω) as if the paths were in series, 500 Ω uses only the 2 mS path, and 0.2 Ω forgets that the conductance is in millisiemens.`,
  },
  [r`A metal wire is drawn out to three times its length at constant volume. By what factor does its resistance change?`]: {
    question: r`A metal rod with a resistance of 18 Ω is reshaped, at constant volume, into a rod one third of its original length. What is its new resistance?`,
    options: [r`6 Ω`, r`54 Ω`, r`2 Ω`, r`162 Ω`],
    correctAnswer: 2,
    explanation: r`At constant volume, cutting the length to one third triples the cross-sectional area, so R = ρL/A falls by a factor of 9, from 18 Ω to 2 Ω. The value 6 Ω changes only the length, while 54 Ω and 162 Ω apply the factors of 3 and 9 in the wrong direction.`,
  },
  [r`Axon B has twice the diameter of axon A, with identical cytoplasm. Compare the internal resistance of equal lengths.`]: {
    question: r`Axon X has an internal resistance of 90 MΩ per centimeter of length. Axon Y has identical cytoplasm but three times the diameter. What is the internal resistance of one centimeter of axon Y?`,
    options: [r`30 MΩ`, r`270 MΩ`, r`1.1 MΩ`, r`10 MΩ`],
    correctAnswer: 3,
    explanation: r`Resistance varies as 1/A, and area goes as the diameter squared, so tripling the diameter cuts the resistance to one ninth: 10 MΩ. The value 30 MΩ scales with the diameter only, 270 MΩ scales the wrong way, and 1.1 MΩ borrows the fourth-power dependence of fluid flow.`,
  },
  [r`For an ohmic resistor, what is the slope of a graph of current (vertical axis) against voltage (horizontal axis)?`]: {
    question: r`For an ohmic resistor, current (vertical axis, in amperes) is plotted against voltage (horizontal axis, in volts). The straight line passes through the origin and the point (10 V, 0.5 A). What is the resistance?`,
    options: [r`0.05 Ω`, r`20 Ω`, r`5 Ω`, r`200 Ω`],
    correctAnswer: 1,
    explanation: r`With current on the vertical axis the slope is 1/R = 0.5/10 = 0.05 A/V, so R = 20 Ω. Choosing 0.05 Ω reads the slope itself as the resistance, 5 Ω multiplies the two coordinates, and 200 Ω is a decimal slip.`,
  },
  [r`Doubling the voltage across an incandescent filament {{c1::less than doubles}} the current, because the filament is non-ohmic.`]: {
    question: r`An incandescent bulb carries 0.30 A when 3 V is across its filament. The voltage is raised to 6 V and the filament glows much hotter. Which current is expected?`,
    options: [r`0.15 A`, r`0.45 A`, r`0.60 A`, r`0.75 A`],
    correctAnswer: 1,
    explanation: r`The hotter filament has a higher resistance, so the current rises but less than doubles: more than 0.30 A and less than 0.60 A, which leaves 0.45 A. Exactly 0.60 A would be an ohmic resistor, 0.75 A needs the resistance to fall, and 0.15 A has the current dropping as the voltage rises.`,
  },
  [r`Three identical resistors are in series across an ideal battery, and the middle one is shorted by a wire. By what factor does the battery current change?`]: {
    question: r`Four identical resistors in series across an ideal battery carry 0.60 A. A wire of negligible resistance is then connected across one of the resistors. What is the new battery current?`,
    options: [r`0.80 A`, r`0.45 A`, r`0.60 A`, r`2.4 A`],
    correctAnswer: 0,
    explanation: r`The shorted resistor drops out, so the resistance falls from 4R to 3R and the current rises by 4/3, to 0.80 A. The value 0.45 A applies the factor upside down, 0.60 A assumes the short changes nothing, and 2.4 A treats the wire as shorting all but one quarter of the resistance.`,
  },
  [r`State Ohm's law and identify what each variable means.`]: {
    question: r`A 12 V supply drives 6 A through a heater coil. The coil is replaced by one with three times the resistance, on the same supply. What current flows now?`,
    options: [r`18 A`, r`6 A`, r`2 A`, r`0.5 A`],
    correctAnswer: 2,
    explanation: r`The first coil is R = V/I = 2 Ω, so the new one is 6 Ω and I = 12/6 = 2 A: at fixed voltage, tripling R cuts the current to one third. The value 18 A scales the current the wrong way, 6 A ignores the change, and 0.5 A computes R/V instead of V/R.`,
  },
  [r`Resistors in series vs. parallel?`]: {
    question: r`A technician has two 30 Ω heating strips and a 60 V ideal supply. The strips can be wired end to end in one path, or side by side with each strip directly across the supply. What current does the supply deliver in each arrangement?`,
    options: [r`4 A end to end; 1 A side by side`, r`1 A end to end; 2 A side by side`, r`2 A end to end; 4 A side by side`, r`1 A end to end; 4 A side by side`],
    correctAnswer: 3,
    explanation: r`End to end is series: 30 + 30 = 60 Ω, so I = 1 A. Side by side is parallel: 1/R = 1/30 + 1/30, so R = 15 Ω and I = 4 A. The swapped answer mixes up the two rules, 2 A side by side counts only one strip, and 2 A end to end ignores the second strip in the path.`,
  },
  [r`Three resistors of 6 Ω each are connected in parallel. What is the total resistance?`]: {
    question: r`Four 20 Ω heating elements are connected in parallel across a 10 V ideal supply. What total current does the supply deliver?`,
    options: [r`0.5 A`, r`0.125 A`, r`2 A`, r`8 A`],
    correctAnswer: 2,
    explanation: r`Four equal resistors in parallel give 20/4 = 5 Ω, so I = 10/5 = 2 A (or 0.5 A in each of four branches). The value 0.5 A is one branch only, 0.125 A adds the resistors as if in series, and 8 A multiplies by four twice.`,
  },
  [r`In a series circuit with a 12 V battery and three 4 Ω resistors, what is the current?`]: {
    question: r`Three resistance thermometers of 20 Ω, 30 Ω and 50 Ω are wired one after another in a single path to a 5 V sensor supply. How much current passes through the 30 Ω thermometer?`,
    options: [r`50 mA`, r`167 mA`, r`517 mA`, r`20 mA`],
    correctAnswer: 0,
    explanation: r`One after another means series: the resistances add to 100 Ω and the same current, 5/100 = 0.05 A = 50 mA, flows through every element. The value 167 mA puts the whole 5 V across the 30 Ω element, 517 mA treats the three as parallel branches, and 20 mA divides resistance by voltage.`,
  },
  [r`In series, {{c1::current}} is the same through all components; in parallel, {{c2::voltage}} is the same across all branches.`]: {
    question: r`A 10 Ω resistor and a 30 Ω resistor are connected in parallel across a battery. The 10 Ω resistor carries 0.6 A. What are the voltage across the 30 Ω resistor and the current through it?`,
    options: [r`18 V and 0.6 A`, r`6 V and 0.2 A`, r`6 V and 0.6 A`, r`18 V and 0.2 A`],
    correctAnswer: 1,
    explanation: r`Parallel branches share the same voltage, (0.6 A)(10 Ω) = 6 V, so the 30 Ω branch carries 6/30 = 0.2 A. The 18 V answers give the 30 Ω resistor the same current as its neighbor, which is the series rule, and 6 V with 0.6 A applies both rules at once.`,
  },
  [r`A short circuit is dangerous because:`]: {
    question: r`A 120 V outlet feeds a lamp whose resistance is 240 Ω. Worn insulation lets the cord's two wires touch, so the resistance of the path falls to 0.1 Ω. What happens to the current drawn from the outlet?`,
    options: [r`It stays at 0.5 A, because the outlet voltage is fixed`, r`It rises from 0.5 A to 1200 A, overheating the cord`, r`It rises from 0.5 A to 12 A, a small and harmless change`, r`It falls from 0.5 A to zero, since the lamp is bypassed`],
    correctAnswer: 1,
    explanation: r`I = V/R goes from 120/240 = 0.5 A to 120/0.1 = 1200 A, and that enormous current heats the wiring, which is the fire hazard of a short. A fixed voltage does not fix the current, 12 A comes from multiplying 120 by 0.1, and bypassing the lamp removes resistance rather than current.`,
  },
  [r`Two 6 Ω resistors in series give:`]: {
    question: r`Two 15 Ω resistors are joined end to end so that they form a single path across a 9 V ideal battery. What current flows from the battery?`,
    options: [r`1.2 A`, r`0.6 A`, r`3.3 A`, r`0.3 A`],
    correctAnswer: 3,
    explanation: r`End to end means series, so the resistances add to 30 Ω and I = 9/30 = 0.3 A. The value 1.2 A uses the parallel result of 7.5 Ω, 0.6 A counts only one resistor, and 3.3 A divides resistance by voltage.`,
  },
  [r`Wire resistance is $R =$ {{c1::$\rho L/A$}}, so doubling the radius cuts resistance to one fourth.`]: {
    question: r`Wire X has length L, radius r and a resistance of 8 Ω. Wire Y is made of the same metal with length 2L and radius 2r. What is the resistance of wire Y?`,
    options: [r`4 Ω`, r`8 Ω`, r`16 Ω`, r`2 Ω`],
    correctAnswer: 0,
    explanation: r`R = ρL/A: doubling the length doubles R, and doubling the radius quadruples the area and cuts R to one fourth, so R = 8 × 2/4 = 4 Ω. The value 8 Ω lets the radius count only once, 16 Ω ignores the radius, and 2 Ω ignores the length.`,
  },
  [r`A $6\,\Omega$ and a $3\,\Omega$ resistor are connected in parallel. What is the equivalent resistance?`]: {
    question: r`A 20 Ω resistor is connected in parallel with an unknown resistor, and the combination measures 4 Ω. What is the unknown resistance?`,
    options: [r`16 Ω`, r`24 Ω`, r`5 Ω`, r`80 Ω`],
    correctAnswer: 2,
    explanation: r`1/R = 1/4 − 1/20 = 4/20, so R = 5 Ω; check with product over sum: (20)(5)/25 = 4 Ω. The value 16 Ω subtracts resistances and 24 Ω adds them, both series thinking, and 80 Ω simply multiplies the two numbers.`,
  },
  [r`Placing $N$ identical resistors of resistance $R$ in parallel gives an equivalent resistance of {{c1::$R/N$}}.`]: {
    question: r`Each strip of a rear-window defroster has a resistance of 60 Ω, and all the strips run side by side between the same two bus bars. How many strips give the defroster an overall resistance of 12 Ω?`,
    options: [r`4 strips`, r`6 strips`, r`48 strips`, r`5 strips`],
    correctAnswer: 3,
    explanation: r`N identical resistors in parallel give R/N, so N = 60/12 = 5. Four strips would give 15 Ω and six would give 10 Ω, and 48 comes from subtracting 12 from 60 as if parallel resistances subtracted.`,
  },
  [r`How does raising the temperature of a metal conductor affect its resistance?`]: {
    question: r`A platinum wire connected to a constant 2 V source carries 20 mA while it sits in ice water. The wire is then moved into boiling water, still connected. What is observed?`,
    options: [r`The current falls below 20 mA as the resistance rises`, r`The current rises above 20 mA as the resistance falls`, r`The current stays at 20 mA as the resistance is fixed`, r`The current rises above 20 mA as the resistance rises`],
    correctAnswer: 0,
    explanation: r`A hotter metal lattice vibrates more and scatters conduction electrons more often, so resistance rises and, at fixed voltage, the current falls. Falling resistance on heating describes a semiconductor, a fixed resistance ignores temperature, and a current that rises while resistance rises contradicts I = V/R.`,
  },
  [r`A resistanceless wire is connected across one resistor in a series chain. What happens?`]: {
    question: r`A 12 V ideal battery drives a 2 Ω, a 4 Ω and a 6 Ω resistor in series, so 1 A flows. A wire of negligible resistance is then connected directly across the 6 Ω resistor. What is true afterward?`,
    options: [r`The 6 Ω dissipates 6 W; the others still carry 1 A`, r`The 6 Ω dissipates 0 W; the others still carry 1 A`, r`The 6 Ω dissipates 0 W; the others now carry 2 A`, r`The 6 Ω dissipates 0 W; the others now carry 0 A`],
    correctAnswer: 2,
    explanation: r`The wire short-circuits the 6 Ω resistor, so it has no voltage across it and dissipates nothing, while the total resistance falls to 6 Ω and the current rises to 12/6 = 2 A. Keeping 1 A or 6 W ignores the change the short makes, and 0 A confuses a short across one resistor with a break in the loop.`,
  },
  [r`The equivalent resistance of a parallel combination is always less than {{c1::the smallest individual resistor}}.`]: {
    question: r`A 100 Ω resistor is connected in parallel with a second resistor whose value is not known. Which statement about the equivalent resistance of the pair must be true?`,
    options: [r`It is more than 100 Ω, whatever the second value is`, r`It is less than 100 Ω, whatever the second value is`, r`It is less than 100 Ω only if the second is smaller`, r`It is exactly 50 Ω, whatever the second value is`],
    correctAnswer: 1,
    explanation: r`A parallel combination is always smaller than its smallest resistor, so the pair is below 100 Ω even if the second resistor is huge, because any extra branch adds a route for current. More than 100 Ω is series thinking, the conditional answer misses that even a large branch lowers the total, and 50 Ω holds only for two equal resistors.`,
  },
}
