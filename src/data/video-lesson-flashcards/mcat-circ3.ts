import type { ReviewCard } from '@/lib/video-lesson-core'

/**
 * Review flashcards for the Circuits Part 3 video lesson (lesson key
 * `mcat-circ3`, EMF & Capacitance): one deck per source video, offered before
 * that video's "Remember" section. See mcat-circ1.ts for the format.
 */
const r = String.raw

export const decks: Record<number, ReviewCard[]> = {
  // 1 · EMF and Terminal Voltage
  1: [
    { front: r`Give the symbol and the SI unit for EMF, for internal resistance and for terminal voltage.`, back: r`EMF: $\varepsilon$, in volts (V), where $1\ \text{V} = 1\ \text{J/C}$. Internal resistance: $r$, in ohms (Ω). Terminal voltage: $V_{\text{term}}$, in volts.` },
    { front: r`What is a battery's EMF?`, back: r`The work its chemistry does per coulomb it pushes from the − terminal to the + terminal: $\varepsilon = W/q$. Here $W$ is that work and $q$ is the charge moved. It is the battery's voltage when no current flows. Despite the name, it is not a force.` },
    { front: r`How is a real battery modelled, and what current does it drive through a load?`, back: r`An ideal EMF in series with a small internal resistance, so one current flows through both: $I = \dfrac{\varepsilon}{R + r}$. Here $\varepsilon$ is the EMF, $r$ the internal resistance and $R$ the external load.` },
    { front: r`What is a battery's terminal voltage while it supplies current?`, back: r`$V_{\text{term}} = \varepsilon - Ir$: lower than the EMF by the drop across the internal resistance. Here $\varepsilon$ is the EMF, $I$ the current and $r$ the internal resistance. More current, more sag.` },
    { front: r`What is the terminal voltage of a battery that is being charged?`, back: r`$V_{\text{term}} = \varepsilon + Ir$, more than the EMF: the charger must beat the EMF and also push the current through $r$. Here $\varepsilon$ is the EMF, $I$ the charging current and $r$ the internal resistance.` },
    { front: r`What happens when a bare wire shorts a battery's terminals?`, back: r`Only $r$ limits the current, so $I_{\max} = \varepsilon / r$; the terminal voltage is 0, and all of the power heats the battery. Here $\varepsilon$ is the EMF and $r$ the internal resistance.` },
    { front: r`Where does the power the battery's chemistry supplies go?`, back: r`$\varepsilon I = I^2 R + I^2 r$: part reaches the load, part heats the battery. Here $\varepsilon I$ is the power the chemistry supplies, $I^2R$ the power delivered to the load $R$, and $I^2 r$ the power wasted in the internal resistance $r$. The load's share is also $V_{\text{term}} I$.` },
    { front: r`Is charge used up in the load?`, back: r`No. Every coulomb returns to the battery; only its energy is converted in the load.` },
    { front: r`Why can an old battery still read its full voltage on a voltmeter?`, back: r`Its EMF has not changed; its internal resistance has risen. An ideal voltmeter draws almost no current, so there is no $Ir$ drop to reveal the large $r$. Under a real load the terminal voltage sags badly.` },
  ],
  // 2 · EMF and Terminal Voltage: Worked Examples
  2: [
    { front: r`What does an ideal voltmeter read across a battery with nothing else attached?`, back: r`The EMF $\varepsilon$: no current flows, so there is no drop across the internal resistance.` },
    { front: r`A known load $R$ is connected and the terminal voltage drops to $V_{\text{term}}$. How do you find the current and the internal resistance?`, back: r`$I = V_{\text{term}} / R$, then $r = \dfrac{\varepsilon - V_{\text{term}}}{I}$. Check with $I = \dfrac{\varepsilon}{R + r}$. Here $\varepsilon$ is the EMF (the unloaded reading) and $r$ the internal resistance.` },
    { front: r`How do you check a battery's power bookkeeping?`, back: r`$\varepsilon I$ supplied $= I^2 R$ in the load $+ I^2 r$ inside. Here $\varepsilon$ is the EMF, $I$ the current, $R$ the load and $r$ the internal resistance.` },
    { front: r`What current flows when a battery is shorted, and where does the power go?`, back: r`$I_{\max} = \varepsilon / r$, and all of it heats the battery: $\varepsilon I_{\max} = I_{\max}^2\, r$. Here $\varepsilon$ is the EMF and $r$ the internal resistance.` },
    { front: r`What voltage must a charger supply to recharge a battery at current $I$?`, back: r`$V = \varepsilon + Ir$. Here $\varepsilon$ is the battery's EMF and $r$ its internal resistance. Using $\varepsilon - Ir$ is the discharging rule.` },
    { front: r`What is the common trap when finding the current a real battery drives?`, back: r`Using $\varepsilon / R$ and leaving $r$ out. The internal resistance is in series with the load: $I = \varepsilon / (R + r)$.` },
  ],
  // 3 · Cells and Meters
  3: [
    { front: r`What do the symbols $n$ and $F$ stand for in $\Delta G = -nFE$, and what are their units?`, back: r`$n$ is the moles of electrons transferred per mole of reaction (mol). $F$ is Faraday's constant, the charge on a mole of electrons: about 96 500 C/mol.` },
    { front: r`How do cells combine in series?`, back: r`Their EMFs add and their internal resistances add. A cell inserted backward SUBTRACTS its EMF, but its internal resistance still adds.` },
    { front: r`How do identical cells combine in parallel?`, back: r`The pack keeps one cell's EMF, and the internal resistances are in parallel: $r/2$ for two cells. Here $r$ is one cell's internal resistance. The pack sags less and lasts longer.` },
    { front: r`What does a milliamp-hour (mAh) rating measure, and how do you convert it?`, back: r`Charge, since $Q = It$. $1\ \text{mAh} = 3.6\ \text{C}$, so multiply mAh by 3.6 to get coulombs. The energy stored is about $QV$, where $Q$ is that charge and $V$ the battery's voltage.` },
    { front: r`How is an ammeter connected, and what is its ideal resistance?`, back: r`In series, so the current passes through it. Ideally about 0 Ω, so it does not change the current.` },
    { front: r`How is a voltmeter connected, and what is its ideal resistance?`, back: r`In parallel, across the element. Ideally nearly infinite, so it draws almost no current.` },
    { front: r`What happens if the meters are swapped?`, back: r`An ammeter across an element is a short: the element goes dark and the surge can blow the meter's fuse. A voltmeter in series chokes the current to nearly zero and reads almost the full EMF.` },
    { front: r`Where does a battery's EMF come from?`, back: r`From the redox reaction in its galvanic cells: $\Delta G = -nFE$. Here $\Delta G$ is the reaction's free-energy change, $n$ the moles of electrons transferred, $F$ Faraday's constant and $E$ the cell potential, the EMF. A spontaneous reaction ($\Delta G < 0$) gives a positive EMF.` },
    { front: r`In a galvanic cell, which electrode is the battery's + terminal?`, back: r`The cathode, where reduction happens. Electrons leave the anode (oxidation), run through the wire and arrive at the cathode.` },
  ],
  // 4 · Cells and Meters: Worked Examples
  4: [
    { front: r`How do you solve a series stack of real cells driving a load?`, back: r`Add the EMFs (a reversed cell subtracts) and add every internal resistance. Then $I = \dfrac{\varepsilon_{\text{total}}}{R + r_{\text{total}}}$ and $V_{\text{term}} = \varepsilon_{\text{total}} - I\,r_{\text{total}}$. Here $R$ is the load.` },
    { front: r`One cell in a series stack is reversed. What happens to the stack's internal resistance?`, back: r`Nothing: the reversed cell is still in the loop, so its internal resistance still adds. Only its EMF changes sign.` },
    { front: r`How do you check a stack's terminal voltage?`, back: r`It must equal $IR$ across the load, where $I$ is the current and $R$ the load resistance.` },
    { front: r`How do you turn a cell's mAh rating into coulombs and energy?`, back: r`Coulombs $=$ mAh $\times\ 3.6$. Energy $\approx QV$, where $Q$ is the charge in coulombs and $V$ the cell's voltage.` },
    { front: r`An ammeter is laid directly across one element. How do you find its reading?`, back: r`Treat the ammeter as a wire: redo the loop without that element. The whole loop current flows through the meter, and the bypassed element goes dark.` },
    { front: r`A voltmeter is put in series in a loop. What current flows, and what does it read?`, back: r`$I \approx \varepsilon / R_{\text{meter}}$, tiny, so the rest of the loop drops almost nothing and the meter reads about the full EMF. Here $\varepsilon$ is the EMF and $R_{\text{meter}}$ the meter's resistance.` },
  ],
  // 5 · Capacitance
  5: [
    { front: r`Give the symbol and the SI unit for capacitance and for charge.`, back: r`Capacitance: $C$, in farads (F), where $1\ \text{F} = 1\ \text{C/V}$. Charge: $Q$, in coulombs (C). Real capacitors are microfarads ($10^{-6}$ F) down to picofarads ($10^{-12}$ F).` },
    { front: r`What happens when a battery charges a capacitor?`, back: r`It moves charge from one plate to the other through the wires: $+Q$ on one plate, $-Q$ on the other. No charge crosses the gap, the net charge stays zero, and charging stops when the plates' voltage equals the battery's.` },
    { front: r`What does "the charge on a capacitor" mean?`, back: r`$Q$, the charge on EACH plate. The capacitor's net charge is always zero.` },
    { front: r`Define capacitance.`, back: r`Charge stored per volt: $C = Q/V$. Here $Q$ is the charge on each plate and $V$ the voltage across the plates. Handy: μF × V = μC.` },
    { front: r`The voltage across a capacitor doubles. What happens to $C$ and to $Q$?`, back: r`$C$ is fixed by how the capacitor is built, so it stays the same, and $Q$ doubles. $C = Q/V$ does not mean more voltage gives less capacitance.` },
    { front: r`What sets the capacitance of a parallel-plate capacitor?`, back: r`$C = \dfrac{\kappa \varepsilon_0 A}{d}$. Here $\kappa$ is the dielectric constant of what fills the gap (1 for a vacuum, about 1 for air), $\varepsilon_0$ the permittivity of free space, $A$ the plate area and $d$ the gap.` },
    { front: r`How do you rescale a parallel-plate capacitance?`, back: r`Multiply by the area factor, divide by the gap factor, multiply by $\kappa$. Double both $A$ and $d$ and $C$ is unchanged. A wider gap LOWERS $C$.` },
    { front: r`What is the field between parallel plates?`, back: r`Uniform: $E = V/d$, pointing from the + plate to the − plate, and essentially zero outside. Here $V$ is the voltage across the plates and $d$ the gap.` },
    { front: r`How does a charge move between the plates?`, back: r`It feels a constant force $F = qE$, so it accelerates uniformly, like a ball in gravity. Here $q$ is its charge and $E$ the field. A proton heads for the − plate, an electron for the + plate, and the much lighter electron accelerates far more.` },
  ],
  // 6 · Capacitance: Worked Examples
  6: [
    { front: r`What does $Q = CV$ give you, and what is the capacitor's net charge?`, back: r`The charge on EACH plate ($+Q$ and $-Q$). The net charge is always zero. Here $C$ is the capacitance and $V$ the voltage across it.` },
    { front: r`A capacitor is moved to a battery of a different voltage. What changes?`, back: r`The charge, $Q = CV$; the capacitance does not, since it belongs to the capacitor. Here $C$ is the capacitance and $V$ the new voltage.` },
    { front: r`How do you find a rebuilt parallel-plate capacitor's new capacitance?`, back: r`New $C$ = old $C$ × (area factor) ÷ (gap factor). No $\varepsilon_0$ needed.` },
    { front: r`What must you do before using $E = V/d$?`, back: r`Put the gap in meters: 1 mm $= 10^{-3}$ m, 1 nm $= 10^{-9}$ m. Here $E$ is the field, $V$ the voltage across the plates and $d$ the gap.` },
    { front: r`What do picofarads times volts give?`, back: r`Picocoulombs: $(9.0\ \text{pF})(12\ \text{V}) = 108\ \text{pC}$. The prefix carries straight through, as μF × V = μC does.` },
  ],
  // 7 · Dielectrics and Energy
  7: [
    { front: r`Give the symbol and the unit for the dielectric constant and for stored energy.`, back: r`Dielectric constant: $\kappa$, a pure number, at least 1 (1 for a vacuum). Stored energy: $U$, in joules (J).` },
    { front: r`What does a dielectric do inside a capacitor?`, back: r`Its molecules polarize: a thin negative layer lines up beside the + plate and a positive layer beside the − plate. Their field opposes the plates' field, so the field inside is weaker.` },
    { front: r`How does a dielectric change the capacitance?`, back: r`$C = \kappa C_0$. Here $C_0$ is the capacitance with a vacuum (or air) in the gap and $\kappa \ge 1$ the dielectric constant. Water's $\kappa$ is unusually large, for the same reason it dissolves salts.` },
    { front: r`What is dielectric breakdown, and why does a good dielectric help?`, back: r`Above its dielectric strength an insulator ionizes, conducts, and a spark jumps the gap. A good dielectric raises $C$ AND lets the plates sit closer or reach a higher voltage without breaking down.` },
    { front: r`Give the three forms of a capacitor's stored energy.`, back: r`$U = \tfrac12 QV = \tfrac12 CV^2 = \dfrac{Q^2}{2C}$. Here $Q$ is the charge on each plate, $V$ the voltage and $C$ the capacitance. The ½ appears because the voltage climbs from 0 to $V$ as the charge builds: the area of the triangle under $V$ against $Q$.` },
    { front: r`With the battery connected, what is fixed, and how do a dielectric's effects follow?`, back: r`$V$ is fixed, so use $U = \tfrac12 CV^2$: $U$ goes with $C$. Inserting $\kappa$: $Q$ and $U$ rise by $\kappa$; $V$ and $E$ stay the same. Here $C$ is the capacitance, $V$ the voltage, $Q$ the charge and $E$ the field.` },
    { front: r`With the capacitor isolated, what is fixed, and how do a dielectric's effects follow?`, back: r`$Q$ is fixed, so use $U = Q^2/2C$: $U$ goes as $1/C$. Inserting $\kappa$: $V$, $E$ and $U$ fall by $\kappa$; $Q$ stays the same. Here $Q$ is the charge, $C$ the capacitance, $V$ the voltage and $E$ the field.` },
    { front: r`The gap between a capacitor's plates is doubled. What happens to its energy?`, back: r`$C$ halves either way. Connected ($V$ fixed): charge flows back to the battery and $U$ halves. Isolated ($Q$ fixed): $V$ doubles and $U$ doubles, from the work you do pulling the attracting plates apart.` },
    { front: r`A battery charges a capacitor through a resistor. Where does the energy go?`, back: r`The battery delivers $QV$; the capacitor stores $\tfrac12 QV$; the other half becomes heat in the resistor, whatever its size. Here $Q$ is the final charge and $V$ the battery's voltage.` },
  ],
  // 8 · Dielectrics and Energy: Worked Examples
  8: [
    { front: r`A slab goes into a capacitor. What is the first question to ask?`, back: r`What is held fixed? Disconnected means $Q$ is fixed; connected means $V$ is fixed.` },
    { front: r`What happens to the capacitance when a slab fills the gap?`, back: r`It always becomes $\kappa C$, connected or not. Here $C$ is the capacitance before and $\kappa$ the slab's dielectric constant.` },
    { front: r`An isolated capacitor gets a slab. How do you find its new voltage and energy?`, back: r`$V = Q/C$ with the new $C$: down by $\kappa$. $U = Q^2/2C$: down by $\kappa$. Here $Q$ is the unchanged charge and $C$ the new capacitance.` },
    { front: r`A connected capacitor gets a slab. How do you find its new charge and energy?`, back: r`$Q = CV$ with the new $C$: up by $\kappa$, the battery adding the difference. $U = \tfrac12 CV^2$: up by $\kappa$. Here $V$ is the battery's unchanged voltage and $C$ the new capacitance.` },
    { front: r`An isolated capacitor's energy falls when a slab goes in. Where does it go?`, back: r`Into work: the field pulls the polarized slab into the gap. The battery is disconnected, so none of it can go back there.` },
    { front: r`What is the common trap with $\tfrac12 CV^2$ after a slab goes in?`, back: r`Updating $V$ but keeping the OLD $C$, or using $\tfrac12 CV^2$ with the old $V$ for an isolated capacitor. Use the new $C$ with the new $V$, or $Q^2/2C$ when $Q$ is fixed.` },
  ],
}
