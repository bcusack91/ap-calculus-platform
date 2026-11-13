import type { ReviewCard } from '@/lib/video-lesson-core'

/**
 * Review flashcards for the Circuits Part 2 video lesson (lesson key
 * `mcat-circ2`): one deck per source video, offered before that video's
 * "Remember" section. See mcat-circ1.ts for the format.
 */
const r = String.raw

export const decks: Record<number, ReviewCard[]> = {
  // 1 · Kirchhoff's Rules
  1: [
    { front: r`State Kirchhoff's junction rule. Which conservation law is it?`, back: r`$\sum I_{\text{in}} = \sum I_{\text{out}}$ at every node. It is conservation of charge: charge cannot pile up in a wire. Here $\sum I_{\text{in}}$ is the total current flowing into the node and $\sum I_{\text{out}}$ is the total flowing out.` },
    { front: r`State Kirchhoff's loop rule. Which conservation law is it?`, back: r`$\sum \Delta V = 0$ around any closed loop. It is conservation of energy: every volt gained in a source is dropped somewhere along the way. Here $\sum \Delta V$ is the sum of every potential change (rises positive, drops negative) met on one trip around the loop.` },
    { front: r`Walking a loop, what do you record when you cross a resistor?`, back: r`WITH the current: $-IR$. AGAINST the current: $+IR$. Here $I$ is the current through that resistor and $R$ is its resistance.` },
    { front: r`Walking a loop, what do you record when you cross a source or an ideal wire?`, back: r`Source from − to +: $+V$. Source from + to −: $-V$. Ideal wire: 0. Here $V$ is the source's voltage.` },
    { front: r`A current you guessed comes out negative. What does that mean?`, back: r`It runs opposite to your guess, and the size is still correct. Reverse the arrow; do not start over.` },
    { front: r`How do two sources in one loop combine?`, back: r`Pushing the same way, they add. Opposing, they subtract. The net voltage drives the current through the total resistance: $I = V_{\text{net}}/R_{\text{total}}$. Here $I$ is the loop current, $V_{\text{net}}$ is the sum (or difference) of the source voltages and $R_{\text{total}}$ is the total resistance in the loop.` },
    { front: r`With the − terminal grounded, how does the potential change around a series loop?`, back: r`It falls in steps, the biggest step across the biggest resistor, and lands back on 0 V.` },
  ],
  // 2 · Kirchhoff's Rules: Worked Examples
  2: [
    { front: r`How do you write the loop equation for a single loop?`, back: r`Walk the loop: $+V$ for each source crossed − to +, $-IR$ for each resistor crossed with the current. Set the sum to zero and solve for $I$. Here $V$ is a source's voltage, $I$ is the loop current and $R$ is the resistance of each resistor crossed.` },
    { front: r`Once you have $I$, how do you find each drop, and how do you check them?`, back: r`Each drop is $IR$. The drops add back to the net source voltage. Here $I$ is the loop current and $R$ is the resistance of that resistor.` },
    { front: r`How do you find the potential at each node?`, back: r`Start from the + terminal's potential and subtract each drop in turn. The last step lands on 0 V at the grounded − terminal.` },
    { front: r`Two sources oppose each other in one loop. What is the net voltage, and which way does the current run?`, back: r`The net voltage is the difference, and the current runs the way the larger source pushes.` },
    { front: r`You walk the loop against the current instead. What changes?`, back: r`Every sign flips, the batteries as well as the resistors, and the sum still closes to zero.` },
    { front: r`How is the drop across a resistor different from the potential at the node after it?`, back: r`The drop is a difference, $IR$. The node potential is measured from ground: the potential before the resistor minus that drop. Here $I$ is the current through the resistor and $R$ is its resistance.` },
  ],
  // 3 · Networks and Dividers
  3: [
    { front: r`How do you trace a network by its nodes?`, back: r`Points joined by bare wire are one node. Two elements between the same two nodes are in parallel. Two are in series only if no junction lies between them.` },
    { front: r`What is the order for solving a network?`, back: r`Collapse the innermost group and repeat down to one $R_{eq}$. Find $I = V/R_{eq}$. Walk back out, splitting voltage through series pieces and current across parallel ones. Finish with a junction check and a loop check. Here $R_{eq}$ is the equivalent resistance of the whole network, $V$ is the source voltage and $I$ is the total current from the source.` },
    { front: r`Write the voltage divider for two resistors in series.`, back: r`$V_1 = V\,\dfrac{R_1}{R_1 + R_2}$. Series resistors share the voltage in proportion to $R$. Here $V$ is the total voltage across both resistors and $V_1$ is the voltage across $R_1$.` },
    { front: r`Write the current divider for two resistors in parallel.`, back: r`$I_1 = I\,\dfrac{R_2}{R_1 + R_2}$, with the OTHER resistor on top. Current favors the smaller resistance. Here $I$ is the total current entering the pair and $I_1$ is the current in the $R_1$ branch.` },
    { front: r`A current splits between 1 Ω and 3 Ω branches in parallel. In what ratio?`, back: r`3 : 1, with the larger share through the 1 Ω branch.` },
    { front: r`A circuit changes. In what order do you reason?`, back: r`The change → $R_{eq}$ → the total current → the drop across any series resistor → the voltage left for the parallel part. Here $R_{eq}$ is the equivalent resistance of the whole circuit.` },
    { front: r`A bank sits behind a series resistor and a branch is added to it. What happens to the old branch currents?`, back: r`They fall. $R_{eq}$ drops, the total current rises, the series resistor drops more voltage, and less is left across the bank. Here $R_{eq}$ is the equivalent resistance of the whole circuit.` },
    { front: r`A bank sits directly across an ideal source and a branch is added. What happens to the other branches?`, back: r`Nothing. Each keeps the full source voltage and its own current; only the total current rises.` },
    { front: r`A bare wire shorts one branch of a parallel bank. What happens?`, back: r`The whole bank is shorted. Every branch shares the same two nodes, so all of them have 0 V across them.` },
    { front: r`How does current between two electrodes divide among the body's tissues?`, back: r`Inversely with resistance, like any parallel paths: most of it travels through blood and muscle rather than fat or bone.` },
  ],
  // 4 · Networks and Dividers: Worked Examples
  4: [
    { front: r`A resistor is in series with a parallel pair. How do you find the total current?`, back: r`Inside-out: collapse the pair with product over sum, add the series resistor, then $I = V/R_{eq}$. Here $I$ is the total current from the battery, $V$ is the battery voltage and $R_{eq}$ is the equivalent resistance of the whole circuit.` },
    { front: r`How do you walk back out to find each branch current?`, back: r`The series drop is $IR$. What is left of the battery voltage sits across the pair. Each branch current is that voltage over its own resistance. Here $I$ is the total current and $R$ is the series resistor's resistance.` },
    { front: r`What is the voltage across a parallel pair that sits behind a series resistor?`, back: r`$V_{\text{pair}} = V_{\text{battery}} - IR_{\text{series}}$. It is not the full battery voltage. Here $V_{\text{pair}}$ is the voltage across the pair, $V_{\text{battery}}$ is the battery voltage, $I$ is the total current and $R_{\text{series}}$ is the series resistor's resistance.` },
    { front: r`A branch opens. How do you re-solve the circuit?`, back: r`Start again from $R_{eq}$. Never carry the old total current over. Here $R_{eq}$ is the equivalent resistance of the circuit as it is after the change.` },
    { front: r`Write both divider formulas.`, back: r`Voltage (series): $V_1 = V\,\dfrac{R_1}{R_1 + R_2}$. Current (parallel): $I_1 = I\,\dfrac{R_2}{R_1 + R_2}$, with the other resistor on top. Here $V$ is the total voltage across the series pair and $V_1$ is the voltage across $R_1$; $I$ is the total current entering the parallel pair and $I_1$ is the current in the $R_1$ branch.` },
    { front: r`What two checks finish a network problem?`, back: r`The branch currents add to the total current, and both parallel branches end up with the same voltage.` },
  ],
  // 5 · Power, Energy and Safety
  5: [
    { front: r`Write the three forms of electrical power, with the unit.`, back: r`$P = IV = I^2R = \dfrac{V^2}{R}$, in watts: $1\ \text{W} = 1\ \text{J/s}$. Here $P$ is the power (W), $I$ is the current through the element (A), $V$ is the voltage across it (V) and $R$ is its resistance (Ω).` },
    { front: r`Two resistors carry the same current (series). Which form of power do you use, and which resistor dissipates more?`, back: r`$P = I^2R$. The LARGER resistor dissipates more. Here $P$ is the power (W), $I$ is the shared current (A) and $R$ is that resistor's resistance (Ω).` },
    { front: r`Two resistors have the same voltage (parallel, or any outlet). Which form do you use, and which dissipates more?`, back: r`$P = \dfrac{V^2}{R}$. The SMALLER resistor dissipates more. Here $P$ is the power (W), $V$ is the shared voltage (V) and $R$ is that resistor's resistance (Ω).` },
    { front: r`At fixed $R$, the current doubles. What happens to the power?`, back: r`It quadruples, because $P = I^2R$. Here $P$ is the power, $I$ is the current and $R$ is the resistance.` },
    { front: r`At fixed $V$, the resistance halves. What happens to the power?`, back: r`It doubles, because $P = V^2/R$. Here $P$ is the power, $V$ is the voltage and $R$ is the resistance.` },
    { front: r`$V$ triples and $R$ doubles. By what factor does the power change?`, back: r`By $\dfrac{3^2}{2} = \dfrac{9}{2}$. Multiply the factor changes in $P = V^2/R$. Here $P$ is the power, $V$ is the voltage across the resistor and $R$ is its resistance.` },
    { front: r`How do you get energy from power? What is a kilowatt-hour?`, back: r`$E = Pt$. The kilowatt-hour is a unit of ENERGY: $1\ \text{kWh} = 3.6 \times 10^6$ J. Here $E$ is the energy (J, or kWh), $P$ is the power (W, or kW) and $t$ is the time (s, or h).` },
    { front: r`How does the power an ideal source delivers compare with the power in the resistors?`, back: r`They are equal: $V \cdot I_{\text{total}}$ is the sum of the resistor powers. Here $V$ is the source voltage and $I_{\text{total}}$ is the total current leaving the source.` },
    { front: r`Why do power lines run at high voltage?`, back: r`The same power then needs less current, and the line loss $I^2R$ falls with the square of that current. Here $I$ is the current in the line and $R$ is the resistance of the line itself.` },
    { front: r`What does the harm in an electric shock, and why is wet skin dangerous?`, back: r`The current through the body, $I = V/R_{\text{body}}$. Dry skin is about $10^5\ \Omega$ and wet skin about $10^3\ \Omega$, so the same voltage drives about 100 times the current. Here $I$ is the current through the body, $V$ is the voltage touched and $R_{\text{body}}$ is the body's resistance along that path.` },
  ],
  // 6 · Power, Energy and Safety: Worked Examples
  6: [
    { front: r`An appliance has a power rating at a known voltage. How do you find its current and resistance?`, back: r`$I = P/V$, then $R = V/I$ (or $R = V^2/P$). Check with the third form. Here $P$ is the rated power (W), $V$ is the voltage it runs on (V), $I$ is the current it draws (A) and $R$ is its resistance (Ω).` },
    { front: r`What do you get when you divide a power by a current?`, back: r`The voltage: $P/I = V$. It is not a resistance. Here $P$ is the power (W), $I$ is the current (A) and $V$ is the voltage (V).` },
    { front: r`How do you find energy use in kilowatt-hours, and the cost?`, back: r`Convert watts to kilowatts and minutes to hours, then multiply: kWh = kW × h. Cost = kWh × price.` },
    { front: r`How do you convert kilowatt-hours to joules?`, back: r`Multiply by $3.6 \times 10^6$ J/kWh.` },
    { front: r`How do you find the current and power through the body for a given skin resistance?`, back: r`$I = V/R_{\text{body}}$, then $P = V^2/R_{\text{body}}$. Here $I$ is the current through the body (A), $V$ is the voltage touched (V), $R_{\text{body}}$ is the body's resistance (Ω) and $P$ is the power delivered to the body (W).` },
    { front: r`At a fixed voltage, the body's resistance falls by a factor of 100. What happens to the current and the power?`, back: r`Both rise by a factor of 100.` },
  ],
  // 7 · Ranking Bulb Brightness
  7: [
    { front: r`What does a bulb's brightness measure? What is $P_0$?`, back: r`Brightness is power. For one bulb alone on an ideal source, $P_0 = \dfrac{V^2}{R}$. Here $V$ is the source voltage and $R$ is the bulb's resistance.` },
    { front: r`$n$ identical bulbs are in series. What does each one get, and what is the total power?`, back: r`Each gets $V/n$ and $P_0/n^2$; the total is $P_0/n$. Two in series each glow at one QUARTER of solo power. Here $n$ is the number of bulbs, $V$ is the source voltage and $P_0$ is the power of one bulb alone on that source.` },
    { front: r`$n$ identical bulbs are in parallel across the source. What does each one get, and what is the total power?`, back: r`Each keeps $V$ and $P_0$; the total is $nP_0$. Here $n$ is the number of bulbs, $V$ is the source voltage and $P_0$ is the power of one bulb alone on that source.` },
    { front: r`How do you find a bulb's resistance from its rating?`, back: r`$R = \dfrac{V^2}{P}$, so a LOWER wattage means a HIGHER resistance. Here $R$ is the bulb's resistance (Ω), $V$ is its rated voltage (V) and $P$ is its rated power (W).` },
    { front: r`A 60 W bulb and a 100 W bulb are wired in parallel, then in series. Which is brighter each time?`, back: r`Parallel: the 100 W bulb. Series: the order swaps and the 60 W bulb is brighter, because the shared current makes the higher resistance dissipate more.` },
    { front: r`How do you rank brightness without computing?`, back: r`Find what the bulbs share (current in series, voltage in parallel), pick the power form that holds it constant, and compare.` },
    { front: r`One of two identical bulbs carries twice the current of the other. How do their powers compare?`, back: r`It has four times the power, because $P = I^2R$. Here $P$ is the power, $I$ is the current through the bulb and $R$ is its resistance.` },
    { front: r`A bulb burns out. What happens in a series string, and in a parallel bank across an ideal source?`, back: r`A burned-out bulb is an open circuit. The series string goes dark; the bulbs in the parallel bank carry on unchanged.` },
    { front: r`In A + (B ∥ C), bulb C burns out. What happens to A and to B?`, back: r`A dims and B brightens.` },
    { front: r`A bulb is added in series, or directly across the source. What happens to the others?`, back: r`In series: every bulb in that path dims. Directly across the source: the others are unchanged, and the total power rises.` },
    { front: r`How is household wiring arranged, and where is the breaker?`, back: r`Appliances are in parallel, so each one switched on raises the total current. The breaker is in SERIES with the branch circuit and trips when that current is too high.` },
  ],
  // 8 · Ranking Bulb Brightness: Worked Examples
  8: [
    { front: r`How do you get each bulb's resistance from its rating?`, back: r`$R = \dfrac{V^2}{P}$. The lower-wattage bulb has the larger resistance. Here $R$ is the bulb's resistance (Ω), $V$ is its rated voltage (V) and $P$ is its rated power (W).` },
    { front: r`Which power form and which bulb wins in series, and in parallel?`, back: r`Series: one current, $P = I^2R$, the larger $R$ wins. Parallel: one voltage, $P = V^2/R$, the smaller $R$ wins. Here $P$ is a bulb's power, $I$ is the shared series current, $V$ is the shared parallel voltage and $R$ is that bulb's resistance.` },
    { front: r`Do rated bulbs wired in series run at their rated powers?`, back: r`No. A rating holds only at the rated voltage. Find each $R$, then the shared current, then $P = I^2R$ with that bulb's own resistance. Here $R$ is each bulb's resistance (from $R = V^2/P$ with its rated voltage and power), $I$ is the shared current and $P$ is the power it actually dissipates.` },
    { front: r`How do you rank a mixed circuit?`, back: r`First by sharing: a bulb with twice the current has four times the power. Then confirm with $R_{eq}$, the total current and each drop. Here $R_{eq}$ is the equivalent resistance of the whole circuit.` },
    { front: r`A bulb in the parallel bank burns out. How do you find the new brightnesses?`, back: r`Re-solve from $R_{eq}$. The bulb in series with the bank dims, and the surviving bank bulb brightens. Here $R_{eq}$ is the equivalent resistance of the circuit after the burnout.` },
    { front: r`What check finishes a bulb-power problem?`, back: r`The bulb powers add up to the battery's $V \cdot I$. Here $V$ is the battery voltage and $I$ is the total current from the battery.` },
  ],
}
