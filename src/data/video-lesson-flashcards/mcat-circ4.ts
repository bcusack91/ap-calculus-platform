import type { ReviewCard } from '@/lib/video-lesson-core'

/**
 * Review flashcards for the Circuits Part 4 video lesson (lesson key
 * `mcat-circ4`, Capacitor Networks & Bioelectricity): one deck per source
 * video, offered before that video's "Remember" section. See mcat-circ1.ts
 * for the format.
 */
const r = String.raw

export const decks: Record<number, ReviewCard[]> = {
  // 1 · Capacitor Networks
  1: [
    { front: r`What symbol stands for equivalent capacitance, and what is its SI unit?`, back: r`$C_{\text{eq}}$: the single capacitance that could replace a whole network. The SI unit is the farad, F.` },
    { front: r`How do the capacitor combining rules compare with the resistor rules?`, back: r`They are the exact reverse. Capacitors in parallel add directly, as resistors in series do. Capacitors in series add as reciprocals, as resistors in parallel do.` },
    { front: r`What is the equivalent capacitance of capacitors in parallel?`, back: r`$C_{\text{eq}} = C_1 + C_2 + \dots$, always larger than the largest. Here $C_1$ and $C_2$ are the individual capacitances.` },
    { front: r`What do capacitors in parallel share, and what adds?`, back: r`They share the voltage $V$, since each one joins the same two nodes. The charges add: $Q = Q_1 + Q_2$, with $Q_1 = C_1 V$ and $Q_2 = C_2 V$, so the larger capacitor holds more charge.` },
    { front: r`What is the picture for capacitors in parallel?`, back: r`The plates join into one bigger plate. More plate area means more capacitance, since $C = \kappa \varepsilon_0 A / d$. Here $A$ is the plate area and $d$ the gap.` },
    { front: r`What is the equivalent capacitance of capacitors in series?`, back: r`$\dfrac{1}{C_{\text{eq}}} = \dfrac{1}{C_1} + \dfrac{1}{C_2} + \dots$, always smaller than the smallest. Here $C_1$ and $C_2$ are the individual capacitances. Remember to flip the sum at the end.` },
    { front: r`Why do capacitors in series all carry the same charge?`, back: r`The joined inner plates and the wire between them are an isolated piece of metal that starts neutral and stays neutral. So $+Q$ on one inner plate forces $-Q$ on its partner.` },
    { front: r`What is the picture for two identical capacitors in series?`, back: r`One capacitor with twice the gap: the joined middle plates carry $-Q$ and $+Q$, which cancel. A wider gap means less capacitance, so $C_{\text{eq}} = C/2$.` },
    { front: r`Which of two unequal capacitors in series takes the larger voltage?`, back: r`$V = Q/C$ with the same $Q$ on each, so the SMALLER capacitor takes the larger voltage. Here $Q$ is the shared charge and $C$ each capacitance. This is the mirror image of series resistors, where the larger $R$ takes more.` },
    { front: r`What is the shortcut for two capacitors in series?`, back: r`$C_{\text{eq}} = \dfrac{C_1 C_2}{C_1 + C_2}$: product over sum. Here $C_1$ and $C_2$ are the two capacitances. It is the parallel-resistor algebra, used for the opposite arrangement.` },
    { front: r`What is the equivalent capacitance of $N$ identical capacitors?`, back: r`$C_{\text{eq}} = C/N$ in series, where the gaps stack, and $C_{\text{eq}} = NC$ in parallel, where the plates join. Here $C$ is one capacitance and $N$ the number of capacitors.` },
    { front: r`What quick size check catches a wrong capacitor combination?`, back: r`A series result must be smaller than the smallest capacitor; a parallel result must be larger than the largest. Using the resistor formulas on capacitors fails this check.` },
  ],
  // 2 · Capacitor Networks: Worked Examples
  2: [
    { front: r`How do you find the charge a battery puts on a chain of series capacitors?`, back: r`$Q = C_{\text{eq}} V$, and every capacitor in the chain carries that same $Q$. Here $C_{\text{eq}}$ is the chain's equivalent capacitance and $V$ the battery's voltage.` },
    { front: r`How do you find the voltage across each capacitor in a series chain?`, back: r`$V_i = Q / C_i$ for each one, using the shared charge. Here $Q$ is the chain's charge and $C_i$ that capacitor's capacitance. Check: the voltages add up to the battery's.` },
    { front: r`How do you collapse a series-parallel capacitor network?`, back: r`From the inside out: add each parallel group first, then combine the series pieces by reciprocals (or product over sum). Then walk back out to find each charge and voltage.` },
    { front: r`A parallel group sits inside a series chain. How do you find the group's voltage and each capacitor's charge?`, back: r`$V_{\text{group}} = Q / C_{\text{group}}$, using the chain's charge and the group's summed capacitance. Then each capacitor in the group holds $Q_i = C_i V_{\text{group}}$, so the charge splits in proportion to $C$.` },
    { front: r`What is the common trap when splitting a battery's voltage between unequal series capacitors?`, back: r`Giving each an equal share. Equal shares only happen for equal capacitors. Find the shared $Q$ first, then use $V = Q/C$ for each.` },
    { front: r`What two checks confirm a capacitor network answer?`, back: r`Series voltages add up to the battery's voltage, and the charges in a parallel group add up to the group's total charge.` },
  ],
  // 3 · RC Circuits and the Time Constant
  3: [
    { front: r`What symbol stands for the time constant, and what is its SI unit?`, back: r`$\tau$ (the Greek letter tau). The SI unit is the second, s: ohms times farads is seconds.` },
    { front: r`How does an uncharged capacitor behave at the instant a switch closes?`, back: r`Like a plain wire: $V_C = Q/C = 0$, so it does not oppose the battery. Here $V_C$ is the capacitor's voltage, $Q$ its charge and $C$ its capacitance.` },
    { front: r`What is the current at the first instant in a series RC charging circuit?`, back: r`$I_0 = \varepsilon / R$, the largest current the circuit ever carries, since the empty capacitor acts like a wire. Here $\varepsilon$ is the battery's EMF and $R$ the resistance.` },
    { front: r`How does a fully charged capacitor behave in a DC circuit at steady state?`, back: r`Like an open branch (a cut wire): it carries no current. Its voltage equals the voltage between the two points it connects.` },
    { front: r`At steady state, what is the voltage across a resistor in series with a full capacitor?`, back: r`$V_R = IR = 0$, since no current flows in that branch. Here $I$ is the branch current and $R$ the resistance. Do not subtract an $IR$ drop that is not there.` },
    { front: r`In an RC circuit, which quantity cannot jump when a switch moves?`, back: r`The capacitor's voltage: $V_C = Q/C$, and charge takes time to flow onto or off the plates. The current CAN change in an instant.` },
    { front: r`What is the time constant of an RC circuit?`, back: r`$\tau = RC$, in seconds when $R$ is in ohms and $C$ in farads. Here $R$ is the resistance the capacitor charges or discharges through and $C$ the capacitance.` },
    { front: r`Why does a charging capacitor fill more and more slowly?`, back: r`Its growing voltage opposes the battery, leaving less voltage across the resistor to push current. The current starts at $\varepsilon/R$ and dies away toward zero.` },
    { front: r`How full is a charging capacitor after one time constant, and after five?`, back: r`About 63% of its final charge after one $\tau$; past 99% after about five, so treat it as full. One $\tau$ is NOT full.` },
    { front: r`How much charge is left on a discharging capacitor after one time constant, and after five?`, back: r`About 37% after one $\tau$; essentially none after about five.` },
    { front: r`What is the final charge on a capacitor charged by a battery of EMF $\varepsilon$?`, back: r`$Q_{\max} = C\varepsilon$. Here $C$ is the capacitance and $\varepsilon$ the battery's EMF. The resistor sets how long charging takes, not the final charge.` },
    { front: r`What changes when $R$, $C$ or the battery voltage is doubled in a charging RC circuit?`, back: r`Doubling $R$ or $C$ doubles $\tau$: charging is slower. Doubling the battery voltage leaves $\tau$ alone and only doubles the final charge.` },
    { front: r`Which way does the current flow while a capacitor discharges through a resistor?`, back: r`Opposite to the charging current: charge is now leaving the plates instead of arriving. The charge, voltage and current all decay together.` },
  ],
  // 4 · RC Circuits: Worked Examples
  4: [
    { front: r`How do you solve a resistor network with a capacitor branch at the instant the switch closes?`, back: r`Replace each uncharged capacitor with a wire, then solve the resistor network as usual.` },
    { front: r`How do you solve a resistor network with a capacitor branch at steady state?`, back: r`Delete each capacitor branch (it carries no current), solve what is left, then read the capacitor's voltage as the voltage between the two points its branch connects.` },
    { front: r`Once you know a capacitor's steady-state voltage, how do you find its charge and stored energy?`, back: r`$Q = CV$ and $U = \tfrac12 CV^2$. Here $C$ is the capacitance and $V$ the capacitor's steady-state voltage.` },
    { front: r`What must you do before computing $\tau = RC$?`, back: r`Convert to ohms and farads: 1 kΩ $= 10^3$ Ω and 1 μF $= 10^{-6}$ F. Here $R$ is the resistance and $C$ the capacitance. A handy pair: kΩ × μF gives milliseconds.` },
    { front: r`How do you estimate the charge on a charging capacitor at $t = \tau$?`, back: r`$Q \approx 0.63\,Q_{\max}$, with $Q_{\max} = C\varepsilon$. Here $C$ is the capacitance and $\varepsilon$ the battery's EMF.` },
    { front: r`A resistor sits in series with a capacitor in a side branch. What does it change at steady state?`, back: r`Only how fast the capacitor charges. It drops no voltage once the current has stopped, so it does not change the capacitor's final voltage.` },
  ],
  // 5 · The Membrane as an RC Circuit
  5: [
    { front: r`What symbol stands for membrane capacitance, and what is its SI unit?`, back: r`$C_m$. The SI unit is the farad, F; a cell's membrane capacitance is typically picofarads.` },
    { front: r`What symbol stands for membrane resistance, and what is its SI unit?`, back: r`$R_m$. The SI unit is the ohm, Ω; a neuron's membrane resistance is typically many megaohms.` },
    { front: r`In the circuit model of a membrane, what are the bilayer, the ion channels and the ion gradients?`, back: r`The lipid bilayer is a capacitor (an insulator between two conducting solutions). Each ion channel is a resistor, in parallel with the capacitor. Each ion's concentration gradient is a battery: its Nernst potential.` },
    { front: r`How large is the electric field inside a resting membrane?`, back: r`$E = V/d \approx \dfrac{0.07\ \text{V}}{7 \times 10^{-9}\ \text{m}} = 10^7\ \text{V/m}$, pointing inward. Here $V$ is the resting potential's size and $d$ the membrane's thickness.` },
    { front: r`What physically is the resting potential, and how much charge does it take?`, back: r`$Q = C_m V$: a thin layer of excess + charge on the outer face and − charge on the inner face. Here $C_m$ is the membrane capacitance and $V$ the membrane voltage. $C_m$ is small, so $Q$ is tiny.` },
    { front: r`Does one action potential change the cell's bulk ion concentrations?`, back: r`Barely. Only a few ions cross to flip the thin charge layer at the membrane; the bulk concentrations hardly move.` },
    { front: r`What is the membrane time constant?`, back: r`$\tau = R_m C_m$: how fast the membrane voltage responds to an input and how fast it fades afterward. Here $R_m$ is the membrane resistance and $C_m$ the membrane capacitance.` },
    { front: r`What does opening more ion channels do to the membrane's resistance and time constant?`, back: r`Channels are parallel paths, so more open channels LOWER $R_m$, and $\tau = R_m C_m$ gets shorter. The capacitance belongs to the bilayer and does not change.` },
    { front: r`How does the membrane time constant affect temporal summation?`, back: r`A long $\tau$ favors it: the first input fades slowly, so a second input lands on top of it and the two add. With a short $\tau$ the first has faded before the second arrives.` },
    { front: r`How does myelin change the membrane's capacitance and resistance?`, back: r`Its wraps are membranes in series: $C = C_{\text{one}}/n$, lower, and $R = n R_{\text{one}}$, higher. Here $n$ is the number of layers. Less charge is needed per millivolt and less current leaks out.` },
    { front: r`What is saltatory conduction?`, back: r`In a myelinated axon the action potential jumps from one node of Ranvier to the next, where voltage-gated Na⁺ channels cluster. It is fast and saves energy, since ions cross only at the nodes.` },
    { front: r`What are the two ways an axon conducts faster?`, back: r`Myelin, and a wider diameter. A wider axon has a lower internal resistance, so current flows down it more easily.` },
    { front: r`Why does losing myelin, as in multiple sclerosis, slow or block conduction?`, back: r`The bare internode's capacitance rises and its resistance falls. More charge is needed per millivolt and current leaks away, so the signal can fail before the next node.` },
  ],
  // 6 · Membrane Circuits: Worked Examples
  6: [
    { front: r`How do you multiply two numbers in scientific notation, as in $\tau = R_m C_m$?`, back: r`Multiply the front numbers and add the exponents: $(2.0 \times 10^{8})(1.5 \times 10^{-10}) = 3.0 \times 10^{-2}$. Here $R_m$ is in ohms and $C_m$ in farads, so $\tau$ is in seconds.` },
    { front: r`A drug cuts a membrane's resistance to one quarter. What happens to its time constant?`, back: r`$\tau = R_m C_m$ falls to one quarter too, since $C_m$ does not change. Here $R_m$ is the membrane resistance and $C_m$ the membrane capacitance.` },
    { front: r`After a step of input current, when is a membrane's voltage change 63% complete, and when is it essentially complete?`, back: r`About 63% after one $\tau$; essentially complete (over 99%) after about five $\tau$.` },
    { front: r`What must you convert before finding the field inside a membrane?`, back: r`Millivolts to volts and nanometers to meters: 1 mV $= 10^{-3}$ V and 1 nm $= 10^{-9}$ m. Then $E = V/d$, where $V$ is the membrane voltage and $d$ its thickness.` },
    { front: r`How do you turn a separated charge into a number of monovalent ions?`, back: r`$N = Q/e$, with $e = 1.6 \times 10^{-19}$ C. Here $Q$ is the charge in coulombs and $N$ a count of ions, not coulombs.` },
    { front: r`What is the common trap when finding the charge separated across a membrane?`, back: r`Putting a ½ in front: $Q = C_m V$ has none. The ½ belongs to the energy, $U = \tfrac12 CV^2$.` },
    { front: r`A membrane is wrapped in $n$ identical layers in series. What charge now holds the same voltage?`, back: r`$Q = (C/n)V$: one $n$th of the charge, because the capacitance is divided by $n$. Here $C$ is one layer's capacitance and $V$ the voltage.` },
  ],
  // 7 · Defibrillators: Slow Charge, Fast Shock
  7: [
    { front: r`What is ventricular fibrillation, and what does a defibrillator's shock do?`, back: r`The heart muscle cells fire chaotically and out of step, so the heart quivers and stops pumping. A brief, strong current depolarizes most of the muscle at once, which lets the SA node take back control.` },
    { front: r`What is the largest current a battery can ever deliver?`, back: r`$I_{\max} = \varepsilon / r$, reached with no outside resistance at all. Here $\varepsilon$ is the EMF and $r$ the internal resistance. A small battery cannot supply the tens of amps a shock needs.` },
    { front: r`What are the three stages of a defibrillator?`, back: r`Charge: fill the capacitor slowly, over seconds, at modest power. Store: hold $U = \tfrac12 CV^2$. Discharge: empty it through the chest in milliseconds.` },
    { front: r`How is a defibrillator's energy setting reached?`, back: r`$U = \tfrac12 CV^2$ with $C$ fixed, so each energy setting means charging to the matching voltage. Here $C$ is the capacitance and $V$ the charging voltage.` },
    { front: r`What sets how fast a defibrillator's capacitor empties through the chest?`, back: r`$\tau = RC$: a few milliseconds. Here $R$ is the resistance of the chest and $C$ the capacitance. It is essentially empty after about five $\tau$.` },
    { front: r`How do the current and the power change during a capacitor's discharge?`, back: r`$I_0 = V/R$ at the first instant, the peak, then the current decays. Power goes as $I^2$, so it falls faster: after one $\tau$ the current is at 37% and the power at about 14%. Here $V$ is the starting voltage and $R$ the resistance.` },
    { front: r`Why does a defibrillator deliver so much more power than its charger supplies?`, back: r`$P = U/t$: the same energy in far less time is far more power. Here $U$ is the energy and $t$ the time. The capacitor is a time compressor, not an energy source.` },
    { front: r`A dielectric is slid into a capacitor that is still connected to its battery. What happens?`, back: r`$V$ is fixed and $C$ rises by $\kappa$, so $Q = CV$ and $U = \tfrac12 CV^2$ both rise by $\kappa$. Here $\kappa$ is the dielectric constant.` },
    { front: r`A dielectric is slid into an isolated, charged capacitor. What happens?`, back: r`$Q$ is fixed and $C$ rises by $\kappa$, so $V = Q/C$ and $U = Q^2/2C$ both fall by $\kappa$. Here $\kappa$ is the dielectric constant.` },
    { front: r`A fixed capacitor must store twice the energy. By what factor does its voltage change?`, back: r`$\sqrt{2} \approx 1.41$: with $C$ fixed, $U = \tfrac12 CV^2$ goes as $V^2$. Doubling the voltage would store four times the energy.` },
    { front: r`The same energy is to be stored in a larger capacitor. How does the voltage needed change?`, back: r`$V \propto 1/\sqrt{C}$ when $U$ is fixed, from $U = \tfrac12 CV^2$. Here $V$ is the voltage, $C$ the capacitance and $U$ the energy. Four times the capacitance needs half the voltage.` },
    { front: r`What do the unit products Ω·F, F·V and F·V² each equal?`, back: r`Ω·F is seconds ($\tau = RC$). F·V is coulombs ($Q = CV$). F·V² is joules ($U = \tfrac12 CV^2$). And a joule per second is a watt.` },
  ],
  // 8 · Defibrillators: Worked Examples
  8: [
    { front: r`How do you find the average power while a capacitor charges?`, back: r`$P = U/t$, with $U = \tfrac12 CV^2$. Here $U$ is the stored energy, $t$ the charging time, $C$ the capacitance and $V$ the final voltage.` },
    { front: r`What are the peak current and peak power when a charged capacitor discharges through a resistor?`, back: r`$I_0 = V/R$ and $P_0 = V^2/R$, both at the first instant, when the full voltage is across the resistor. Here $V$ is the capacitor's starting voltage and $R$ the resistance.` },
    { front: r`During a discharge, which drains faster: the capacitor's charge or its energy?`, back: r`The energy: $U = Q^2/2C$ goes as $Q^2$, so it drains twice as fast. After two $\tau$ the charge is at about 14% and the energy at about 2%. Here $Q$ is the charge and $C$ the capacitance.` },
    { front: r`How do you find the voltage a capacitor needs to store a given energy?`, back: r`$V = \sqrt{2U/C}$, from $U = \tfrac12 CV^2$. Here $U$ is the energy in joules and $C$ the capacitance in farads.` },
    { front: r`What is the common trap when a fixed capacitor must store four times the energy?`, back: r`Using four times the voltage, which would store sixteen times the energy. Energy goes as $V^2$, so four times the energy needs twice the voltage.` },
    { front: r`How does a shock's average power compare with the charging power?`, back: r`By the ratio of the times: the same energy delivered in 1/500 of the time is 500 times the power.` },
    { front: r`What must you convert before using $Q = CV$ or $U = \tfrac12 CV^2$ with a defibrillator's capacitor?`, back: r`Microfarads to farads: 1 μF $= 10^{-6}$ F, so 100 μF $= 1.0 \times 10^{-4}$ F. Here $C$ is the capacitance and $V$ the voltage.` },
  ],
}
