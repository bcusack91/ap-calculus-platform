import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-electricity-rc-circuits-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`A charging capacitor follows $Q(t) =$ {{c1::$C\varepsilon(1 - e^{-t/RC})$}}, rising quickly and then leveling off.`]: {
    question: r`A 4.0 μF capacitor is charged from empty through a resistor by a 50 V battery, following Q(t) = Cε(1 − e^(−t/RC)). Taking e⁻² ≈ 0.14, about how much charge is on the capacitor at t = 2RC?`,
    options: [r`28 μC`, r`200 μC`, r`126 μC`, r`172 μC`],
    correctAnswer: 3,
    explanation: r`The final charge is Cε = (4.0 μF)(50 V) = 200 μC, and at t = 2RC the capacitor holds 1 − 0.14 = 0.86 of it, which is 172 μC. The 28 μC answer uses the decaying factor alone, as for a discharge, 200 μC assumes charging is already complete, and 126 μC is the 63% reached after only one time constant.`,
  },
  [r`When a charged capacitor discharges through a resistor, the current flows in the {{c1::opposite}} direction to the charging current.`]: {
    question: r`A battery, a resistor and a capacitor form one series loop. While the capacitor charges, current passes through the resistor from left to right. The battery is then removed and replaced by a plain wire. Describe the current in the resistor from that moment on.`,
    options: [r`Left to right, starting at its largest value and decaying`, r`Right to left, starting at its largest value and decaying`, r`Right to left, starting at zero and steadily growing`, r`Left to right, starting at zero and steadily growing`],
    correctAnswer: 1,
    explanation: r`During discharge the charge that arrived on the plates leaves by the way it came, so the current reverses to right to left, and it is largest at the start, when the capacitor voltage is highest, then decays. Left to right would keep charging the capacitor with no battery to drive it, and a current that grows from zero does not happen in a discharge.`,
  },
  [r`A $3.0\,\mu$F and a $6.0\,\mu$F capacitor are in series across $12$ V. What voltage does each one take?`]: {
    question: r`A 2.0 μF capacitor and an 8.0 μF capacitor are connected in series across a 20 V battery. What voltage ends up across each one?`,
    options: [r`16 V on the 2.0 μF and 4.0 V on the 8.0 μF`, r`4.0 V on the 2.0 μF and 16 V on the 8.0 μF`, r`10 V on the 2.0 μF and 10 V on the 8.0 μF`, r`20 V on the 2.0 μF and 20 V on the 8.0 μF`],
    correctAnswer: 0,
    explanation: r`The equivalent capacitance is (2.0)(8.0)/(10) = 1.6 μF, so each capacitor holds Q = (1.6)(20) = 32 μC, giving 32/2.0 = 16 V and 32/8.0 = 4.0 V: the smaller capacitor takes the larger voltage. The reversed answer splits the voltage in proportion to capacitance, like resistors, the equal split ignores the different capacitances, and 20 V on each is the parallel result.`,
  },
  [r`A capacitor reaches half its final charge (or loses half while discharging) after about {{c1::$0.69\tau$}}.`]: {
    question: r`A 50 μF capacitor charged to 8.0 V is discharged through a 20 kΩ resistor. Taking ln 2 ≈ 0.69, about how long does its voltage take to fall to 2.0 V?`,
    options: [r`0.69 s`, r`2.0 s`, r`1.4 s`, r`0.75 s`],
    correctAnswer: 2,
    explanation: r`The time constant is (2.0 × 10⁴ Ω)(5.0 × 10⁻⁵ F) = 1.0 s, and each halving takes about 0.69τ. Going from 8.0 V to 2.0 V is two halvings, so about 1.4 s. The 0.69 s answer is a single halving, 2.0 s takes each halving to last a full time constant, and 0.75 s assumes the voltage falls in a straight line.`,
  },
  [r`A $2.0\text{ k}\Omega$ resistor charges a $50\,\mu$F capacitor from a battery. About how long until the capacitor is essentially fully charged?`]: {
    question: r`A camera flash uses a 200 μF capacitor that must be essentially fully charged within 1.0 s. About what is the largest charging resistance that allows this?`,
    options: [r`1.0 kΩ`, r`5.0 kΩ`, r`25 kΩ`, r`0.20 kΩ`],
    correctAnswer: 0,
    explanation: r`Essentially full takes about five time constants, so 5RC = 1.0 s and RC = 0.20 s, giving R = 0.20/(2.0 × 10⁻⁴) = 1.0 kΩ. The 5.0 kΩ answer sets one time constant equal to 1.0 s, which leaves the capacitor at only about 63%, 25 kΩ multiplies by five instead of dividing, and 0.20 kΩ works but is not the largest value allowed.`,
  },
  [r`In a myelinated axon, the action potential is regenerated only at the {{c1::nodes of Ranvier}}, where voltage-gated $\text{Na}^+$ channels are concentrated.`]: {
    question: r`A researcher labels voltage-gated Na⁺ channels along a healthy myelinated axon with a fluorescent antibody. What pattern should appear along the axon?`,
    options: [r`An even glow along the whole length under the myelin`, r`Bright bands at the middle of each myelin-wrapped part`, r`A single bright patch where the axon meets its target`, r`Narrow bright bands at the regular gaps in the myelin`],
    correctAnswer: 3,
    explanation: r`Voltage-gated Na⁺ channels are concentrated at the nodes of Ranvier, the regular gaps between myelin segments, which is where the action potential is regenerated. An even glow would describe an unmyelinated axon, and the myelin-wrapped internodes carry the signal passively with few such channels. The terminal is where the signal ends, not where it is renewed along the way.`,
  },
  [r`In multiple sclerosis, how do a demyelinated internode's capacitance and resistance compare with a healthy one, and why does conduction suffer?`]: {
    question: r`In a demyelinating disease, one internode of an axon loses its myelin. Compared with the healthy internode, how do the charge needed to depolarize it by 10 mV and the current leaking out across it change?`,
    options: [r`Less charge is needed, and more current leaks out`, r`More charge is needed, and more current leaks out`, r`More charge is needed, and less current leaks out`, r`Less charge is needed, and less current leaks out`],
    correctAnswer: 1,
    explanation: r`Without the stacked myelin layers the membrane capacitance rises, so Q = CV demands more charge for the same 10 mV, and the membrane resistance falls, so more current leaks out. Both changes slow or block conduction. The other answers reverse one or both changes, treating lost myelin as lower capacitance or as higher resistance.`,
  },
  [r`A defibrillator charges its capacitor over $6.0$ s and delivers the same energy in about $6.0$ ms. How does the delivery power compare with the charging power?`]: {
    question: r`A 2.0 W battery circuit charges a flash capacitor for 4.0 s. The capacitor then delivers that energy to the flash tube in 1.0 ms. Ignoring losses, what is the average power delivered to the tube?`,
    options: [r`2.0 W`, r`8.0 W`, r`8.0 kW`, r`2.0 mW`],
    correctAnswer: 2,
    explanation: r`The stored energy is (2.0 W)(4.0 s) = 8.0 J, and releasing it in 1.0 × 10⁻³ s gives 8.0/10⁻³ = 8000 W. The capacitor adds no energy; it squeezes the same energy into a much shorter time. The 2.0 W answer assumes the power cannot change, 8.0 W confuses joules with watts, and 2.0 mW scales the power down by the time ratio instead of up.`,
  },
  [r`Why does myelin LOWER the axon's membrane capacitance?`]: {
    question: r`A patch of bare axon membrane has a capacitance of 40 pF. A model of myelin stacks 20 identical patches of membrane on top of one another, so they act as capacitors in series. What is the capacitance of the stack?`,
    options: [r`2.0 pF`, r`800 pF`, r`40 pF`, r`60 pF`],
    correctAnswer: 0,
    explanation: r`Identical capacitors in series give C/n, so the stack has 40/20 = 2.0 pF, the same as one capacitor with a gap 20 times as wide. This is why myelin lowers membrane capacitance. The 800 pF answer multiplies as if the layers were side by side in parallel, 40 pF assumes stacking changes nothing, and 60 pF adds the two numbers.`,
  },
  [r`A toxin opens many extra $\text{K}^+$ leak channels in a neuron. How do the membrane resistance and time constant change?`]: {
    question: r`A neuron has a membrane resistance of 100 MΩ and a membrane capacitance of 100 pF, so its time constant is 10 ms. A toxin opens extra K⁺ leak channels until four times as many identical channels are open. What are the new membrane resistance and time constant?`,
    options: [r`400 MΩ and 40 ms`, r`25 MΩ and 10 ms`, r`100 MΩ and 2.5 ms`, r`25 MΩ and 2.5 ms`],
    correctAnswer: 3,
    explanation: r`Open channels are resistors in parallel, so four times as many of them cut the membrane resistance to 25 MΩ, and with the capacitance unchanged τ = RC falls to (25 MΩ)(100 pF) = 2.5 ms. The 400 MΩ and 40 ms answer adds the channels as if they were in series, and the other two change only one of the two linked quantities.`,
  },
  [r`Capacitors in parallel:`]: {
    question: r`A circuit needs 15 μF of capacitance, but only a 10 μF capacitor is installed. What should be added to reach 15 μF?`,
    options: [r`A 5.0 μF capacitor in series with it`, r`A 5.0 μF capacitor in parallel with it`, r`A 30 μF capacitor in parallel with it`, r`A 30 μF capacitor in series with it`],
    correctAnswer: 1,
    explanation: r`Capacitors in parallel add directly, so 10 + 5.0 = 15 μF. Adding anything in series lowers the total below 10 μF: 5.0 μF in series gives about 3.3 μF and 30 μF in series gives 7.5 μF. A 30 μF capacitor in parallel overshoots to 40 μF.`,
  },
  [r`After a long time in a DC circuit, current through a capacitor is:`]: {
    question: r`Two branches are each connected directly across an ideal 24 V battery. One branch is an 8.0 Ω resistor. The other is a 4.0 Ω resistor in series with a capacitor. Long after the circuit is switched on, what current does the battery supply?`,
    options: [r`9.0 A`, r`2.0 A`, r`3.0 A`, r`6.0 A`],
    correctAnswer: 2,
    explanation: r`At steady state the charged capacitor passes no current, so its whole branch is dead and only the 8.0 Ω branch conducts: 24/8.0 = 3.0 A. The 9.0 A answer treats the capacitor as a wire, which is true only at the first instant, 6.0 A is that capacitor branch alone at the first instant, and 2.0 A puts the two resistors in series.`,
  },
  [r`At the instant an uncharged capacitor is connected, it behaves like:`]: {
    question: r`A 12 V battery, a 2.0 Ω resistor, a 4.0 Ω resistor and an uncharged capacitor are connected in one series loop. At the instant the switch closes, what are the voltages across the 2.0 Ω resistor, the 4.0 Ω resistor and the capacitor?`,
    options: [r`4.0 V, 8.0 V and 0 V`, r`0 V, 0 V and 12 V`, r`4.0 V, 4.0 V and 4.0 V`, r`2.0 V, 4.0 V and 6.0 V`],
    correctAnswer: 0,
    explanation: r`An uncharged capacitor has no voltage across it, so at the first instant it acts like a wire and I = 12/6.0 = 2.0 A, giving 4.0 V and 8.0 V across the resistors. Putting 12 V on the capacitor and none on the resistors describes the steady state instead, the equal split treats all three parts alike, and the last answer gives the capacitor a voltage before any charge has arrived.`,
  },
  [r`A defibrillator must deliver $200$ J from a $100\,\mu$F capacitor. What principle sets the charging voltage?`]: {
    question: r`A defibrillator with a 20 μF capacitor must store 90 J. To what voltage must the capacitor be charged?`,
    options: [r`2.1 × 10³ V`, r`3.0 × 10³ V`, r`4.5 × 10⁶ V`, r`9.0 × 10⁶ V`],
    correctAnswer: 1,
    explanation: r`From U = ½CV², V² = 2U/C = 180/(2.0 × 10⁻⁵) = 9.0 × 10⁶, so V = 3.0 × 10³ V. The 2.1 × 10³ V answer leaves out the factor of 2, and the two answers near 10⁶ V stop at the ratio of energy to capacitance, or twice that ratio, without taking the square root.`,
  },
  [r`Capacitors in series combine like resistors in parallel: $1/C_{eq} =$ {{c1::$1/C_1 + 1/C_2$}}.`]: {
    question: r`A 20 μF capacitor and a 30 μF capacitor are connected in series. What single capacitor could replace the pair?`,
    options: [r`50 μF`, r`25 μF`, r`10 μF`, r`12 μF`],
    correctAnswer: 3,
    explanation: r`In series the reciprocals add: 1/C = 1/20 + 1/30 = 5/60, so C = 12 μF, which is less than the smaller capacitor, as it must be. The 50 μF answer adds them directly, which is the parallel rule, 25 μF averages them, and 10 μF is their difference.`,
  },
  [r`Why do series capacitors carry equal charge while parallel capacitors carry equal voltage?`]: {
    question: r`A 2.0 μF capacitor and a 4.0 μF capacitor are connected in series across a battery. The right-hand plate of the first carries −24 μC, and a wire joins it to the left-hand plate of the second and to nothing else. What charge is on that left-hand plate?`,
    options: [r`−24 μC, because the joined plates share their charge`, r`+48 μC, because its capacitance is twice as large`, r`+24 μC, because the joined pair of plates stays neutral`, r`+12 μC, because its voltage is half as large`],
    correctAnswer: 2,
    explanation: r`The two plates and the wire between them form an isolated conductor that started neutral, so the −24 μC on one plate must be balanced by +24 μC on the other. That is why series capacitors always carry equal charge, whatever their capacitances. Scaling the charge with capacitance or voltage gives +48 μC or +12 μC, and −24 μC on both plates would give the isolated piece a net charge from nowhere.`,
  },
  [r`The RC time constant is $\tau =$ {{c1::$RC$}} and carries units of seconds.`]: {
    question: r`A timing circuit uses a 250 kΩ resistor and a 20 nF capacitor. What is its time constant?`,
    options: [r`5.0 ms`, r`5.0 s`, r`5.0 μs`, r`0.50 ms`],
    correctAnswer: 0,
    explanation: r`τ = RC = (2.5 × 10⁵ Ω)(2.0 × 10⁻⁸ F) = 5.0 × 10⁻³ s, or 5.0 ms, since ohms times farads gives seconds. The 5.0 s answer mishandles the nano prefix by three powers of ten, 5.0 μs forgets that the resistance is in kilohms, and 0.50 ms slips one power of ten.`,
  },
  [r`After one time constant, what fraction of its final charge does a charging capacitor hold?`]: {
    question: r`A capacitor is charged through a resistor by a battery. Its final charge will be 80 μC, and the circuit's time constant is 2.0 s. About how much charge does it hold 2.0 s after the switch closes?`,
    options: [r`About 30 μC`, r`About 50 μC`, r`About 40 μC`, r`About 80 μC`],
    correctAnswer: 1,
    explanation: r`After one time constant a charging capacitor holds 1 − e⁻¹ ≈ 63% of its final charge: 0.63 × 80 ≈ 50 μC. The 30 μC answer uses 37%, which is what remains after one time constant of a discharge, 40 μC takes one time constant as the halfway point, and 80 μC assumes charging is finished after one time constant.`,
  },
  [r`Physically, why does putting capacitors in series lower the total capacitance?`]: {
    question: r`Two identical air-filled capacitors, each with plate area A and a 1.0 mm gap, are connected in series. Which single air-filled capacitor has the same capacitance as the pair?`,
    options: [r`Plate area 2A with a gap of 1.0 mm`, r`Plate area A with a gap of 0.50 mm`, r`Plate area 2A with a gap of 2.0 mm`, r`Plate area A with a gap of 2.0 mm`],
    correctAnswer: 3,
    explanation: r`Series capacitors behave like one capacitor with the gaps added together, so the pair matches area A with a 2.0 mm gap, and C = ε₀A/d is halved. Doubling the area describes a parallel connection and would double the capacitance, a 0.50 mm gap would also double it, and doubling both area and gap leaves the capacitance of a single capacitor.`,
  },
  [r`Capacitors in parallel add directly: $C_{eq} =$ {{c1::$C_1 + C_2$}}.`]: {
    question: r`A capacitor connected to a 6.0 V battery holds 30 μC. A second, identical capacitor is then connected in parallel with it while the battery stays attached. What charge does each capacitor hold afterward?`,
    options: [r`15 μC each, so 30 μC in total`, r`60 μC each, so 120 μC in total`, r`30 μC each, so 60 μC in total`, r`20 μC each, so 40 μC in total`],
    correctAnswer: 2,
    explanation: r`Parallel capacitors each have the full 6.0 V across them, so each holds 30 μC and the battery supplies a second 30 μC: the capacitances add and the total charge doubles to 60 μC. Splitting the original 30 μC between them would be right only if the battery had been removed first, and 60 μC on each doubles the charge twice.`,
  },
  [r`During discharge, capacitor charge decays {{c1::exponentially}}, following $Q = Q_0e^{-t/\tau}$.`]: {
    question: r`A 5.0 ms time constant governs the discharge of a capacitor that starts with 200 μC. Using e⁻¹ ≈ 0.37, about how much charge remains after 10 ms?`,
    options: [r`About 27 μC`, r`About 74 μC`, r`About 52 μC`, r`About 0 μC`],
    correctAnswer: 0,
    explanation: r`An exponential decay multiplies the charge by the same factor in each equal time: 200 × 0.37 = 74 μC after 5.0 ms and 74 × 0.37 ≈ 27 μC after 10 ms. The 74 μC answer stops after one time constant, 52 μC subtracts the same 74 μC twice as if the loss were steady, and 0 μC assumes the capacitor empties at its starting rate.`,
  },
  [r`In a charging RC circuit, when is the current largest?`]: {
    question: r`A 9.0 V battery charges an empty capacitor through a resistor in a single series loop. How does the voltage across the RESISTOR behave after the switch closes?`,
    options: [r`It starts at 0 V and rises toward 9.0 V`, r`It starts at 9.0 V and decays toward 0 V`, r`It starts at 4.5 V and decays toward 0 V`, r`It starts at 9.0 V and stays at 9.0 V`],
    correctAnswer: 1,
    explanation: r`The charging current is largest at t = 0, when the empty capacitor has no voltage and the full 9.0 V sits across the resistor, and V = IR then decays as the capacitor's voltage builds. Rising from 0 V toward 9.0 V describes the capacitor, not the resistor, 4.5 V assumes an even split at the start, and a constant 9.0 V would mean the capacitor never charges.`,
  },
  [r`In an RC circuit an uncharged capacitor acts like a {{c1::wire}} at $t = 0$ and like an open switch at steady state.`]: {
    question: r`Lamp X is in series with an uncharged capacitor, and that branch is connected directly across an ideal battery. Lamp Y is connected directly across the same battery on its own. Which lamps are lit just after the switch closes, and which are lit long afterward?`,
    options: [r`Only Y is lit at first; later both lamps are lit`, r`Both are lit at first; later only lamp X is lit`, r`Only X is lit at first; later both lamps are lit`, r`Both are lit at first; later only lamp Y is lit`],
    correctAnswer: 3,
    explanation: r`At first the uncharged capacitor acts like a wire, so lamp X carries current and both lamps light. Once the capacitor is fully charged it acts like an open switch, so lamp X goes dark, while lamp Y keeps the battery voltage and stays lit. The answers in which X lights up later reverse the capacitor's two behaviours, and nothing ever switches lamp Y off.`,
  },
  [r`Doubling $R$ in a charging RC circuit changes what, and what stays the same?`]: {
    question: r`A 12 V battery charges a 100 μF capacitor through a 3.0 kΩ resistor, with an initial current of 4.0 mA and a final charge of 1.2 mC. The experiment is repeated from empty with a 6.0 kΩ resistor. What are the initial current and the final charge now?`,
    options: [r`Initial current 2.0 mA, final charge 1.2 mC`, r`Initial current 4.0 mA, final charge 1.2 mC`, r`Initial current 2.0 mA, final charge 0.60 mC`, r`Initial current 4.0 mA, final charge 2.4 mC`],
    correctAnswer: 0,
    explanation: r`The initial current is ε/R, so doubling R halves it to 2.0 mA, and the time constant doubles, but the final charge Cε = 1.2 mC does not involve R at all. Keeping 4.0 mA ignores the resistor's effect on the current, and the answers with 0.60 mC or 2.4 mC wrongly let the resistance change how much charge the capacitor ends up holding.`,
  },
  [r`Why is an axon membrane modeled as a resistor and capacitor in parallel?`]: {
    question: r`A researcher forms an artificial membrane from pure lipid, with no channel proteins, between two salt solutions. In the circuit model of a membrane, how does this bilayer behave?`,
    options: [r`As a resistor with an almost infinite capacitance`, r`As a capacitor with an almost zero leak resistance`, r`As a capacitor with an almost infinite leak resistance`, r`As a resistor with an almost zero capacitance`],
    correctAnswer: 2,
    explanation: r`The thin insulating bilayer keeps charge separated across it, so it is the capacitor, and the leak resistance comes from ion channels. With no channels there is almost no path for ions, so the leak resistance is enormous. A leak resistance near zero would describe a membrane full of open channels, and the answers calling the bilayer a resistor swap the roles of the lipid and the channels.`,
  },
  [r`That $2000$ V defibrillator discharges through a $50\ \Omega$ thorax. Estimate the peak current and the pulse duration.`]: {
    question: r`A shock delivered through a chest of resistance 50 Ω peaks at 40 A and then dies away with a time constant of 4.0 ms. What were the capacitor's starting voltage and its capacitance?`,
    options: [r`2000 V and 200 mF`, r`2000 V and 80 μF`, r`0.80 V and 80 μF`, r`0.80 V and 200 mF`],
    correctAnswer: 1,
    explanation: r`The current peaks at the first instant, when the full capacitor voltage drives the chest: V = IR = (40)(50) = 2000 V. The time constant is RC, so the capacitance is (4.0 × 10⁻³)/50 = 8.0 × 10⁻⁵ F, or 80 μF. The 0.80 V answers divide the current by the resistance, and 200 mF multiplies the time constant by the resistance instead of dividing.`,
  },
  [r`At steady state a capacitor in series with a resistor passes {{c1::zero}} current, so the full battery voltage sits across the capacitor.`]: {
    question: r`A 6.0 V battery, a 5.0 MΩ resistor and a 2.0 μF capacitor are connected in one series loop and left for a very long time. What are the charge on the capacitor and the voltage across the resistor?`,
    options: [r`12 μC on the capacitor and 6.0 V across the resistor`, r`0 μC on the capacitor and 6.0 V across the resistor`, r`6.0 μC on the capacitor and 3.0 V across the resistor`, r`12 μC on the capacitor and 0 V across the resistor`],
    correctAnswer: 3,
    explanation: r`At steady state no current flows, so the resistor drops IR = 0 however large it is, and the whole 6.0 V sits across the capacitor: Q = CV = 12 μC. Giving the resistor 6.0 V as well breaks the loop rule, 0 μC with 6.0 V on the resistor describes the first instant, and the even split assumes a large resistor keeps a share of the voltage.`,
  },
  [r`A $12$ V battery, a $2$ k$\Omega$ resistor, and an uncharged $10\ \mu$F capacitor sit in series. What is the current the instant the switch closes?`]: {
    question: r`A 24 V battery, an 8.0 kΩ resistor and an uncharged 50 μF capacitor are connected in series. What current flows at the instant the switch is closed?`,
    options: [r`3.0 mA`, r`0 mA`, r`3.0 A`, r`1.2 mA`],
    correctAnswer: 0,
    explanation: r`With no charge on it the capacitor has no voltage and acts like a wire, so the full 24 V drives the resistor: I = 24/8000 = 3.0 mA, the largest current the circuit ever carries. Zero current is the steady state, not the start, 3.0 A forgets the kilo prefix, and 1.2 comes from CV, which is the final charge in millicoulombs and not a current.`,
  },
  [r`$R_1$ and $R_2$ are in series across a battery and a capacitor is wired in parallel with $R_2$. What charge does it hold at steady state?`]: {
    question: r`A 4.0 kΩ resistor and a 2.0 kΩ resistor are in series across an ideal 18 V battery, and a 5.0 μF capacitor is connected in parallel with the 2.0 kΩ resistor. What charge does the capacitor hold at steady state?`,
    options: [r`90 μC`, r`60 μC`, r`30 μC`, r`0 μC`],
    correctAnswer: 2,
    explanation: r`At steady state no current enters the capacitor, so the resistors form a plain divider with 18 × 2.0/6.0 = 6.0 V across the 2.0 kΩ resistor, and the capacitor in parallel with it holds (5.0 μF)(6.0 V) = 30 μC. The 90 μC answer gives the capacitor the full battery voltage, 60 μC uses the 12 V across the other resistor, and 0 μC confuses zero current with zero charge.`,
  },
  [r`A defibrillator's $100\ \mu$F capacitor charged to $2000$ V stores $U = \frac12 CV^2 =$ {{c1::$200$ J}}.`]: {
    question: r`How many joules are available from the 50 μF capacitor of a portable defibrillator once it has 4000 V across it?`,
    options: [r`800 J`, r`400 J`, r`0.10 J`, r`0.20 J`],
    correctAnswer: 1,
    explanation: r`U = ½CV² = ½(5.0 × 10⁻⁵)(4000)² = ½(5.0 × 10⁻⁵)(1.6 × 10⁷) = 400 J. The 800 J answer leaves out the factor of ½, and 0.10 J and 0.20 J forget to square the voltage, giving ½CV and CV, which are charges in coulombs and not energies.`,
  },
  [r`Two identical capacitors are connected across the same battery, first in parallel and then in series. Which arrangement stores more energy?`]: {
    question: r`Two 6.0 μF capacitors are connected to a 10 V battery, first in parallel with each other and later in series with each other. How much energy does the pair store in each arrangement?`,
    options: [r`150 μJ in parallel and 600 μJ in series`, r`600 μJ in parallel and 300 μJ in series`, r`300 μJ in parallel and 300 μJ in series`, r`600 μJ in parallel and 150 μJ in series`],
    correctAnswer: 3,
    explanation: r`The battery voltage is the same both times, so U = ½CV² follows the equivalent capacitance: 12 μF in parallel gives ½(12)(100) = 600 μJ and 3.0 μF in series gives 150 μJ, a factor of four. The reversed answer swaps the series and parallel rules, 300 μJ in series uses one capacitor's 6.0 μF, and equal energies assume the wiring does not matter.`,
  },
  [r`A neuron's membrane time constant is $\tau = R_mC_m$, so a longer $\tau$ produces {{c1::greater temporal summation}} of successive inputs.`]: {
    question: r`Neuron P has a membrane time constant of 2 ms and neuron Q has one of 20 ms. Each receives two identical subthreshold excitatory inputs, 5 ms apart, at the same synapse. Which neuron is more likely to reach threshold, and why?`,
    options: [r`P, because the first potential has barely decayed`, r`P, because its membrane voltage responds faster`, r`Q, because the first potential has barely decayed`, r`Q, because its membrane voltage responds faster`],
    correctAnswer: 2,
    explanation: r`With τ = 20 ms, most of the first postsynaptic potential is still present 5 ms later, so the second adds on top of it: temporal summation. With τ = 2 ms the first potential has almost vanished after 5 ms, so the inputs do not add. A fast-responding membrane is the short-τ neuron P, and that speed is exactly what makes each input fade before the next arrives.`,
  },
  [r`Myelin raises membrane resistance, lengthening the axon's length constant, so a passive signal decays {{c1::less}} with distance.`]: {
    question: r`A disease lowers the membrane resistance of the internodes of a myelinated axon. How do the internode's length constant and the passive depolarization that reaches the next node change?`,
    options: [r`The length constant shortens, so less depolarization arrives`, r`The length constant lengthens, so less depolarization arrives`, r`The length constant shortens, so more depolarization arrives`, r`The length constant lengthens, so more depolarization arrives`],
    correctAnswer: 0,
    explanation: r`A lower membrane resistance lets more current leak out through the membrane, which shortens the length constant, so the passive signal decays more with distance and may reach the next node below threshold. A longer length constant is what healthy myelin provides by raising the resistance, and a shorter length constant can never deliver a larger signal.`,
  },
}
