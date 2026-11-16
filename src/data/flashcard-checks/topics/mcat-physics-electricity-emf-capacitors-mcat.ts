import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-electricity-emf-capacitors-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Two identical $1.5$ V cells, each with internal resistance $r$, are connected in parallel. What are the pack's EMF and internal resistance?`]: {
    question: r`Three identical cells, each with an EMF of 2.0 V and an internal resistance of 0.60 Ω, are wired side by side (+ to +, − to −) and used to run a 0.80 Ω lamp. What current flows through the lamp?`,
    options: [r`2.5 A`, r`6.0 A`, r`2.0 A`, r`0.77 A`],
    correctAnswer: 2,
    explanation: r`Side by side, the pack keeps an EMF of 2.0 V and its three internal resistances combine in parallel to 0.20 Ω, so I = 2.0/(0.20 + 0.80) = 2.0 A. The 2.5 A answer ignores the internal resistance, 6.0 A adds the three EMFs as if the cells were in series, and 0.77 A adds the three internal resistances to 1.8 Ω.`,
  },
  [r`A phone battery is rated $2000$ mAh at $3.7$ V. How much charge does it hold, and roughly how much energy?`]: {
    question: r`A power-tool battery pack is rated 5000 mAh at 10 V. About how much charge can it deliver, and about how much energy does it hold?`,
    options: [r`18 000 C and 1.8 × 10⁵ J`, r`5000 C and 5.0 × 10⁴ J`, r`18 000 C and 1.8 × 10³ J`, r`300 C and 3.0 × 10³ J`],
    correctAnswer: 0,
    explanation: r`A mAh rating is charge: 5.0 A for 3600 s is 18 000 C, and the energy is about QV = (18 000)(10) = 1.8 × 10⁵ J. Reading 5000 mAh as 5000 C skips the hour-to-second conversion, 300 C uses 60 s for an hour, and 1.8 × 10³ J divides the charge by the voltage instead of multiplying.`,
  },
  [r`What happens if an ammeter is mistakenly connected in parallel across a lamp?`]: {
    question: r`An ideal 12 V supply runs a 20 Ω heating coil and a 40 Ω lamp wired one after the other, so the coil has 4.0 V across it. A student then clips a meter set to measure current, with negligible resistance, from one side of the lamp to the other. What happens to the coil's voltage and to the lamp?`,
    options: [r`The coil's voltage stays at 4.0 V, and the lamp stays lit`, r`The coil's voltage falls to 0 V, and the lamp gets brighter`, r`The coil's voltage rises to 12 V, and the lamp gets brighter`, r`The coil's voltage rises to 12 V, and the lamp goes dark`],
    correctAnswer: 3,
    explanation: r`The meter is a near-zero-resistance path around the lamp, so the lamp is shorted, has about 0 V across it and goes dark, and the whole 12 V lands on the coil while the current jumps from 0.20 A to 0.60 A. Saying nothing changes treats the meter as if it had a huge resistance, and a brighter lamp is impossible once almost all the current detours around it.`,
  },
  [r`A voltmeter wired in series with a $100\,\Omega$ resistor across an ideal $9.0$ V battery reads about {{c1::$9.0$ V}}.`]: {
    question: r`An ideal 5.0 V supply is meant to drive a 1.0 kΩ and a 4.0 kΩ resistor in series. By mistake, a voltmeter with a resistance of 10 MΩ is wired into the loop in series with both resistors. About what does the meter read, and what is the voltage across the 4.0 kΩ resistor?`,
    options: [r`0 V on the meter and about 4.0 V on the resistor`, r`5.0 V on the meter and about 0 V on the resistor`, r`1.0 V on the meter and about 4.0 V on the resistor`, r`5.0 V on the meter and about 4.0 V on the resistor`],
    correctAnswer: 1,
    explanation: r`The meter's 10 MΩ dwarfs the 5.0 kΩ of the resistors, so the current is nearly zero, the resistors drop almost nothing, and nearly the whole 5.0 V appears across the meter. The answers with 4.0 V on the resistor use the normal voltage divider as if the meter were a plain wire, and they cannot be right because the drops around the loop must still add to 5.0 V.`,
  },
  [r`A battery's EMF is the cell potential of its galvanic cell, set by the redox reaction through $\Delta G = -nFE$; the battery's positive terminal is the {{c1::cathode}}.`]: {
    question: r`In a discharging silver oxide button cell, silver oxide is reduced to silver at one electrode while zinc is oxidized at the other. Which electrode is the cell's positive terminal, and which way do electrons move in the external wire?`,
    options: [r`The silver oxide electrode; electrons flow through the wire toward it`, r`The silver oxide electrode; electrons flow through the wire away from it`, r`The zinc electrode; electrons flow through the wire toward it`, r`The zinc electrode; electrons flow through the wire away from it`],
    correctAnswer: 0,
    explanation: r`Reduction happens at the cathode, and in a galvanic cell the cathode is the higher-potential, positive terminal, so it is the silver oxide electrode. Electrons released by zinc oxidation travel through the wire to that cathode. Choosing zinc as positive confuses the anode with the positive terminal, and electrons flowing away from the cathode would have reduction supplying electrons instead of using them.`,
  },
  [r`Why can a worn-out battery read its full EMF on a voltmeter, yet fail as soon as a real load is attached?`]: {
    question: r`An aged flashlight cell still has an EMF of 1.5 V, but its internal resistance has risen to 2.0 Ω. What does an ideal voltmeter read across it with nothing attached, and what is its terminal voltage while it runs a 1.0 Ω bulb?`,
    options: [r`0.50 V open, 0.50 V under load`, r`1.5 V open, 1.0 V under load`, r`1.5 V open, 0.50 V under load`, r`0.50 V open, 1.5 V under load`],
    correctAnswer: 2,
    explanation: r`With only an ideal voltmeter attached almost no current flows, so Ir ≈ 0 and the reading is the full 1.5 V. With the bulb, I = 1.5/(2.0 + 1.0) = 0.50 A and the terminal voltage is 1.5 − (0.50)(2.0) = 0.50 V. The 1.0 V answer is the internal drop Ir, not what is left for the bulb, and the answers with 0.50 V open wrongly apply the loaded sag to an open circuit.`,
  },
  [r`A voltmeter reads $9.0$ V across an unloaded battery and $8.0$ V once a $4.0\,\Omega$ resistor is connected across it. What is the internal resistance?`]: {
    question: r`A homemade cell reads 3.0 V on a voltmeter with nothing else attached. When a small motor is connected, the voltmeter across the cell reads 2.4 V and an ammeter shows 0.30 A through the motor. What is the cell's internal resistance?`,
    options: [r`8.0 Ω`, r`2.0 Ω`, r`10 Ω`, r`0.50 Ω`],
    correctAnswer: 1,
    explanation: r`The open-circuit reading is the EMF, so 3.0 − 2.4 = 0.60 V is dropped inside the cell while 0.30 A flows: r = 0.60/0.30 = 2.0 Ω. The 8.0 Ω value is 2.4/0.30, which is the motor's resistance, 10 Ω is 3.0/0.30, the total resistance of the loop, and 0.50 Ω divides current by the lost voltage.`,
  },
  [r`Four $1.5$ V cells are stacked in series, but one is inserted backward. The total EMF is {{c1::$3.0$ V}}.`]: {
    question: r`A radio takes four 1.5 V cells end to end. With the radio switched off, a voltmeter across the whole loaded holder reads 3.0 V instead of the expected 6.0 V. Which fault explains this reading?`,
    options: [r`Two cells have been inserted backward`, r`One cell is missing, bridged by a wire`, r`All four cells have been inserted backward`, r`One cell has been inserted backward`],
    correctAnswer: 3,
    explanation: r`A reversed cell subtracts its EMF instead of adding it: 1.5 + 1.5 + 1.5 − 1.5 = 3.0 V. Two reversed cells would cancel the other two and give 0 V, a missing cell bridged by a wire would leave 4.5 V, and four reversed cells would still give 6.0 V in size, only with the opposite polarity.`,
  },
  [r`A parallel-plate capacitor's plate area is doubled and its plate gap is tripled. What is the new capacitance?`]: {
    question: r`A capacitor with circular plates has a capacitance of 30 nF. It is rebuilt with plates of twice the radius, and the gap between the plates is doubled. What is the new capacitance?`,
    options: [r`60 nF`, r`30 nF`, r`120 nF`, r`240 nF`],
    correctAnswer: 0,
    explanation: r`Doubling the radius makes the plate area four times as large, and doubling the gap halves the capacitance, so C ∝ A/d gives 30 × 4/2 = 60 nF. The 30 nF answer treats area as proportional to radius, 120 nF ignores the wider gap, and 240 nF multiplies by the gap factor instead of dividing.`,
  },
  [r`How does a dielectric between the plates raise a capacitor's capacitance?`]: {
    question: r`The plates of an isolated capacitor carry +40 nC and −40 nC. A slab with κ = 5 fills the gap. What induced charge appears on the face of the slab that touches the positive plate?`,
    options: [r`Negative, and equal in size to 40 nC`, r`Positive, and smaller in size than 40 nC`, r`Negative, and smaller in size than 40 nC`, r`Positive, and equal in size to 40 nC`],
    correctAnswer: 2,
    explanation: r`The slab's molecules polarize with their negative ends toward the positive plate, so that face is negative, and it only partly cancels the plate's field: the field falls to one fifth, not to zero, so the induced charge (32 nC) is smaller than 40 nC. An induced charge equal to 40 nC would cancel the field completely, as in a conductor, and a positive face would strengthen the field and lower the capacitance.`,
  },
  [r`$12$ V is applied across capacitor plates $2.0$ mm apart. What is the electric field between them?`]: {
    question: r`A designer needs a uniform field of 4.0 × 10⁵ V/m between two parallel plates and has a 200 V supply. How far apart should the plates be?`,
    options: [r`2.0 mm`, r`0.50 mm`, r`0.50 m`, r`5.0 mm`],
    correctAnswer: 1,
    explanation: r`For parallel plates E = V/d, so d = V/E = 200/(4.0 × 10⁵) = 5.0 × 10⁻⁴ m, which is 0.50 mm. The 2.0 mm answer divides E by V, 0.50 m forgets to convert from metres to millimetres, and 5.0 mm slips a power of ten in that conversion.`,
  },
  [r`A battery charges an uncharged capacitor through a resistor, moving charge $Q$ at voltage $V$. How much energy does the battery supply, and where does it all go?`]: {
    question: r`A battery charges an empty capacitor through a resistor. When charging is complete, the capacitor stores 3.0 mJ. How much energy did the battery supply, and how much became heat in the resistor?`,
    options: [r`3.0 mJ supplied, 0 mJ lost as heat`, r`6.0 mJ supplied, 6.0 mJ lost as heat`, r`4.5 mJ supplied, 1.5 mJ lost as heat`, r`6.0 mJ supplied, 3.0 mJ lost as heat`],
    correctAnswer: 3,
    explanation: r`The battery moves charge Q at its full voltage and supplies QV, while the capacitor stores only ½QV, so the battery supplied 6.0 mJ and the other 3.0 mJ became heat. Saying nothing is lost assumes all of the battery's work is stored, 6.0 mJ of heat double counts the supply, and the 4.5 mJ answer assumes the lost share depends on the resistor when it is always half.`,
  },
  [r`A capacitor's stored energy is $U = \tfrac{1}{2}QV = \tfrac{1}{2}CV^2 =$ {{c1::$Q^2/2C$}}.`]: {
    question: r`During one full discharge, 10 mC of charge drains from the capacitor of a flash unit and 0.50 J is released. What is the capacitance?`,
    options: [r`200 μF`, r`100 μF`, r`50 μF`, r`20 μF`],
    correctAnswer: 1,
    explanation: r`With charge and energy known, use U = Q²/2C, so the capacitance is Q²/2U = (1.0 × 10⁻²)²/(2 × 0.50) = 1.0 × 10⁻⁴ F, or 100 μF. The 200 μF answer leaves out the factor of 2, 50 μF halves once too often, and 20 comes from dividing Q by U, which gives 1/V and not a capacitance.`,
  },
  [r`With the battery still connected, doubling a capacitor's plate separation {{c1::halves}} both its charge and its stored energy.`]: {
    question: r`A capacitor stays connected to its battery, holding 40 μC and storing 8.0 mJ. The plates are then pushed to half their original separation. What are the new charge and stored energy?`,
    options: [r`80 μC and 16 mJ`, r`40 μC and 4.0 mJ`, r`20 μC and 4.0 mJ`, r`80 μC and 32 mJ`],
    correctAnswer: 0,
    explanation: r`The battery holds V fixed while halving the gap doubles C, so Q = CV doubles to 80 μC and U = ½CV² doubles to 16 mJ. The 40 μC and 4.0 mJ answer is what an isolated capacitor would do, 20 μC and 4.0 mJ runs the change in the wrong direction, and 32 mJ squares the factor of 2 as if the voltage had doubled.`,
  },
  [r`The plates of a charged, isolated capacitor are pulled apart to twice their separation. What happens to $C$, $Q$, $V$, and $U$?`]: {
    question: r`A charged capacitor is disconnected from its battery while it has 30 V across it and stores 6.0 mJ. A student then pulls the plates apart to three times their separation. What is the new voltage, and how much work does the student do?`,
    options: [r`90 V, and the student does 18 mJ of work`, r`10 V, and the student does 4.0 mJ of work`, r`90 V, and the student does 12 mJ of work`, r`30 V, and the student does 0 mJ of work`],
    correctAnswer: 2,
    explanation: r`The charge is trapped, C falls to one third, so V = Q/C triples to 90 V and U = Q²/2C triples to 18 mJ. The student supplies the increase, 18 − 6.0 = 12 mJ, by pulling the attracting plates apart. The 18 mJ answer gives the final energy instead of the change, 10 V inverts the change in voltage, and 30 V with no work treats the voltage as fixed, which is true only with a battery attached.`,
  },
  [r`A $2.0\,\mu$F capacitor charged to $100$ V is disconnected, then filled with a $\kappa = 4$ slab. What are its new voltage and stored energy?`]: {
    question: r`An isolated capacitor carries 100 μC on each plate at 120 V, so it stores 6.0 mJ. A slab is slid in to fill the gap, and the voltage drops to 20 V. How much energy does the capacitor store now?`,
    options: [r`6.0 mJ`, r`36 mJ`, r`0.17 mJ`, r`1.0 mJ`],
    correctAnswer: 3,
    explanation: r`The charge is trapped, so the energy ½QV falls in step with the voltage, from 120 V to 20 V: one sixth of 6.0 mJ is 1.0 mJ, which means κ = 6. Keeping 6.0 mJ assumes the energy of an isolated capacitor cannot change, 36 mJ multiplies by κ as if a battery held the voltage fixed, and 0.17 mJ uses V² with the old capacitance.`,
  },
  [r`A dielectric ($\kappa$) is slid into a capacitor that stays connected to its battery. What happens to $Q$, $V$, $E$, and $U$?`]: {
    question: r`With its 12 V supply still attached, an air capacitor holding 60 μC has its gap flooded with an insulating oil of κ = 3. How much additional charge does the supply deliver, and how does the field in the gap change?`,
    options: [r`120 μC, and the field is unchanged`, r`180 μC, and the field is unchanged`, r`120 μC, and the field falls to one third`, r`0 μC, and the field falls to one third`],
    correctAnswer: 0,
    explanation: r`The supply holds V at 12 V, so E = V/d is unchanged, while the capacitance triples and the charge grows from 60 μC to 180 μC, an extra 120 μC. The 180 μC answer gives the final charge instead of the added charge. The answers with a weaker field describe an isolated capacitor, where the charge is trapped and the field drops by κ.`,
  },
  [r`Capacitance is the charge stored per volt, $C = Q/V$, measured in {{c1::farads}} ($1\text{ F} = 1\text{ C/V}$).`]: {
    question: r`When the voltage across a sensor's capacitor is raised from 2.0 V to 5.0 V, an extra 150 pC flows onto each plate. What is its capacitance?`,
    options: [r`30 pF`, r`75 pF`, r`50 pF`, r`450 pF`],
    correctAnswer: 2,
    explanation: r`Capacitance is charge per volt and is fixed by construction, so the added charge per added volt gives it: 150 pC/3.0 V = 50 pF (pC per V is pF). The 30 pF and 75 pF answers divide the added charge by the final or the starting voltage instead of the change, and 450 multiplies charge by voltage.`,
  },
  [r`A 12 V battery with internal resistance 1.0 Ω is connected to an external 5.0 Ω resistor. What is the terminal voltage?`]: {
    question: r`A 10 Ω heating coil is run from a 24 V supply whose internal resistance is 2.0 Ω. How many volts appear across the supply's terminals while the coil is on?`,
    options: [r`4.0 V`, r`20 V`, r`24 V`, r`28 V`],
    correctAnswer: 1,
    explanation: r`The current is I = 24/(10 + 2.0) = 2.0 A, so the terminal voltage is 24 − (2.0)(2.0) = 20 V, which matches IR = (2.0)(10) across the coil. The 4.0 V answer is the internal drop itself, 24 V ignores the internal resistance, and 28 V adds the drop, which happens only while a battery is being charged.`,
  },
  [r`A battery of emf $12$ V and internal resistance $0.5\,\Omega$ delivers $4$ A. What is its terminal voltage?`]: {
    question: r`While running a motor at 3.0 A, a power pack shows 5.4 V at its terminals. Its internal resistance is 0.20 Ω. What would an ideal voltmeter show across the pack with the motor disconnected?`,
    options: [r`4.8 V`, r`5.4 V`, r`0.60 V`, r`6.0 V`],
    correctAnswer: 3,
    explanation: r`With nothing attached the meter shows the EMF. While discharging, the terminal voltage is the EMF minus Ir, so the EMF is 5.4 + (3.0)(0.20) = 6.0 V. The 4.8 V answer subtracts the internal drop a second time, 5.4 V ignores the internal resistance, and 0.60 V is only the voltage lost inside the pack.`,
  },
  [r`Why do car headlights dim when the starter motor engages?`]: {
    question: r`A car battery has an EMF of 12.0 V and an internal resistance of 0.010 Ω. With only the headlights on it supplies 10 A. When the starter motor engages, the total current rises to 200 A. What happens to the voltage across the headlights?`,
    options: [r`It falls from 11.9 V to 10.0 V`, r`It falls from 11.9 V to 2.0 V`, r`It rises from 11.9 V to 14.0 V`, r`It stays at 11.9 V throughout`],
    correctAnswer: 0,
    explanation: r`The headlights get the terminal voltage, ε − Ir: 12.0 − (10)(0.010) = 11.9 V at first, then 12.0 − (200)(0.010) = 10.0 V while the starter runs, so they dim. The 2.0 V answer is the internal drop, not what is left, 14.0 V adds the drop instead of subtracting it, and a steady 11.9 V ignores the larger current through the internal resistance.`,
  },
  [r`What error appears when a real voltmeter with finite resistance is placed across a large resistor?`]: {
    question: r`Two 1.0 MΩ resistors are connected in series across an ideal 12 V supply. A voltmeter whose own resistance is 1.0 MΩ is connected across one of the resistors. What does it read?`,
    options: [r`6.0 V`, r`8.0 V`, r`4.0 V`, r`12 V`],
    correctAnswer: 2,
    explanation: r`The meter is in parallel with one resistor, and together they make 0.50 MΩ, so that pair takes 12 × 0.50/1.5 = 4.0 V. The reading is lower than the 6.0 V that was there before the meter was attached, which is the loading error. The 8.0 V answer is the voltage across the other resistor, and 12 V is the supply voltage.`,
  },
  [r`A voltmeter is placed {{c1::in parallel}} with the element and must have very high resistance.`]: {
    question: r`A student must measure the voltage across a 2.0 kΩ resistor in a running circuit. Meter P has a resistance of 10 MΩ and meter Q has a resistance of 0.10 Ω. Which meter should be used, and how should it be connected?`,
    options: [r`Meter P, inserted in line with the resistor`, r`Meter P, connected across the resistor's two ends`, r`Meter Q, connected across the resistor's two ends`, r`Meter Q, inserted in line with the resistor`],
    correctAnswer: 1,
    explanation: r`A voltmeter must sit across the element so it shares the same potential difference, and it needs a very high resistance so that it diverts almost no current: meter P in parallel. Putting meter P in line would choke off the circuit's current, meter Q across the resistor would short it out, and meter Q in line is how an ammeter measures current, not voltage.`,
  },
  [r`An ammeter is placed {{c1::in series}} and must have very low resistance so it barely perturbs the circuit.`]: {
    question: r`An ideal 6.0 V battery drives a 10 Ω resistor. A student inserts a poor ammeter with an internal resistance of 2.0 Ω in series to measure the current. What does the ammeter read?`,
    options: [r`0.60 A`, r`3.0 A`, r`0.75 A`, r`0.50 A`],
    correctAnswer: 3,
    explanation: r`In series the meter's resistance adds to the loop, so the current is 6.0/(10 + 2.0) = 0.50 A, lower than the 0.60 A that flowed before the meter went in. This is why an ammeter needs a very low resistance. The 3.0 A answer divides the battery voltage by the meter's resistance alone, and 0.75 A subtracts the meter's resistance instead of adding it.`,
  },
  [r`EMF is not a force; it is the {{c1::energy per unit charge}} supplied by a source, measured in volts.`]: {
    question: r`A hand-cranked generator gives 24 J of electrical energy to every 4.0 C that passes through it. A solar panel gives 30 J to every 10 C. Which source has the larger EMF, and why?`,
    options: [r`The generator, because it gives 6.0 J per coulomb`, r`The solar panel, because it gives 30 J in total`, r`The solar panel, because it moves 10 C of charge`, r`The generator, because it exerts 24 N of force`],
    correctAnswer: 0,
    explanation: r`EMF is energy supplied per unit charge: the generator gives 24/4.0 = 6.0 V and the panel gives 30/10 = 3.0 V, so the generator has the larger EMF. Total energy and total charge moved depend on how long a source runs, not on its EMF, and EMF is not a force, so it is never measured in newtons.`,
  },
  [r`Adding another parallel branch raises total current, so the internal $Ir$ drop grows and terminal voltage {{c1::falls}}.`]: {
    question: r`A 12 V battery with an internal resistance of 1.0 Ω runs two 6.0 Ω lamps in parallel: the total current is 3.0 A and the terminal voltage is 9.0 V. A third 6.0 Ω lamp is added in parallel. What are the new total current and terminal voltage?`,
    options: [r`4.5 A in total, with the terminal voltage still at 9.0 V`, r`2.0 A in total, with the terminal voltage up to 10 V`, r`4.0 A in total, with the terminal voltage down to 8.0 V`, r`3.0 A in total, with the terminal voltage still at 9.0 V`],
    correctAnswer: 2,
    explanation: r`Three 6.0 Ω lamps in parallel make 2.0 Ω, so I = 12/(2.0 + 1.0) = 4.0 A and the terminal voltage is 12 − (4.0)(1.0) = 8.0 V: more current means a larger internal drop, so every lamp dims a little. The 4.5 A answer gives each lamp 1.5 A as if the battery were ideal, 2.0 A assumes the added lamp raises the resistance, and 3.0 A assumes nothing changes.`,
  },
  [r`When is a battery's terminal voltage greater than its emf?`]: {
    question: r`A rechargeable pack has an EMF of 9.0 V and an internal resistance of 0.50 Ω. While it sits in a circuit, a meter across its terminals shows 10 V. What must be going on?`,
    options: [r`It is being discharged by a current of 2.0 A`, r`It is being charged by a current of 2.0 A`, r`It is being charged by a current of 20 A`, r`It is sitting idle with a current of 0 A`],
    correctAnswer: 1,
    explanation: r`A terminal voltage above the EMF means current is being forced backward through the battery, so V = ε + Ir and I = (10 − 9.0)/0.50 = 2.0 A of charging current. A discharging battery reads below its EMF, an idle one reads exactly 9.0 V, and 20 A divides the whole 10 V by the internal resistance instead of only the extra 1.0 V.`,
  },
}
