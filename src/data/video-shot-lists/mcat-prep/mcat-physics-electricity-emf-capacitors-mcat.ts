import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Circuits Part 3: EMF & Capacitance
 * (topic mcat-physics-electricity-emf-capacitors-mcat, the third of four Circuits topics).
 *
 * Source: the 2-part lesson (src/data/interactive-lessons/mcat-mcat-physics-electricity-emf-capacitors-mcat-part1..2.ts),
 * its deck figures (mcat-cp-circuits.ts: EMF vs. terminal voltage, meters; mcat-cp-emf-capacitors.ts:
 * cells in series/parallel, the parallel-plate capacitor, the dielectric, the connected-vs-isolated rows)
 * and its lesson-built exit pool. Eight Manim clips in four pairs (owner format, Nov 2026):
 * a CONCEPT clip that teaches the idea and ends on the "Remember" recap, then a
 * WORKED-EXAMPLES clip with two examples, each shown in full with a pause-and-try
 * prompt before the solution. Concept clips get conceptual checkpoint questions;
 * worked-example clips get questions that mirror their two examples with new numbers.
 *
 * Pair 1 (clips 1–2): lesson Part 1 — What EMF Means; EMF vs. Terminal Voltage. Clip 1 opens the topic.
 * Pair 2 (clips 3–4): lesson Part 1 — Batteries in Series and Parallel (with capacity); Meters; Where EMF Comes From.
 * Pair 3 (clips 5–6): lesson Part 2 — Capacitance; The Parallel-Plate Capacitor.
 * Pair 4 (clips 7–8): lesson Part 2 — Dielectrics; Stored Energy. Clip 8 hands off to Circuits Part 4
 * (Capacitor Networks). Left out as low-yield: the ohmmeter, the value of ε₀, E = σ/ε₀,
 * tabulated dielectric constants and air's breakdown field, and the field energy density.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Proposed codes: emf1/emf2, meter1/meter2, cap1/cap2,
 * energy1/energy2. They use new scenarios and numbers, so they never repeat an
 * exit-quiz item or a worked example.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat',
  title: 'Circuits Part 3: EMF & Capacitance',
  overview:
    'Eight animated clips in four pairs that make the battery real and then add the element that stores charge: what EMF is and why the terminal voltage sags under load, how cells stack and how meters must be connected, what capacitance is and how a parallel-plate capacitor\'s shape sets it, and how dielectrics and the connected-or-isolated question decide where the stored energy goes. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Narration stays exam-neutral, so the clips also serve introductory physics; the biology links (the cell membrane as a thin capacitor, water as a polar dielectric, galvanic cells and free energy) are the ones the exam leans on. Each clip ends with three checkpoint questions; the topic exit quiz follows the last clip.',
  clips: [
    // ── 1 · EMF and terminal voltage (concepts) ──────────────────────────
    {
      title: 'EMF and Terminal Voltage',
      minutes: 6.5,
      goal: 'Explain what a battery\'s EMF is, model a real battery as an EMF with a series internal resistance, and predict its terminal voltage when it is open, loaded, shorted or being charged.',
      keyPoints: [
        'Opening: Circuits Parts 1 and 2 treated every battery as a perfect, fixed voltage. This topic makes the battery real, then adds the capacitor, which stores charge instead of passing it.',
        'EMF is the work the battery\'s chemistry does per coulomb it pushes "uphill" from the − terminal to the + terminal: ε = W/q, in volts (1 V = 1 J/C). Despite the name it is not a force; it is the battery\'s maximum voltage, the pump\'s pressure when nothing flows.',
        'A real battery is an ideal EMF in series with a small internal resistance r, so the same current flows through r and the load R: I = ε/(R + r), and the terminal voltage is V_term = ε − Ir.',
        'Four cases: open circuit (I = 0, V_term = ε); under load (V_term sags by Ir, more current means more sag, so headlights dim while the starter cranks); short circuit (I_max = ε/r, V_term = 0, all the power heats the battery); being charged (current forced backward, V_term = ε + Ir, so a charger must supply more than the EMF).',
        'Energy bookkeeping: the chemistry supplies εI, the internal resistance wastes I²r, and the load receives I²R = V_term·I.',
        'An aging battery keeps its EMF but its internal resistance rises, so an unloaded voltmeter test still reads full voltage while the battery sags badly under a real load.',
      ],
      showOnScreen: [
        'Title card: "Circuits Part 3: EMF & Capacitance", with the four Circuits topics as a row of tiles and this one lit',
        'A battery drawn as a pump lifting positive charges up a ramp from − to +, with ε = W/q building beside it',
        'The real-battery model: a dashed box holding an ideal cell and a small resistor r, wired to an external R, one current arrow through both',
        'A V_term-versus-I line falling from ε at I = 0 to zero at I = ε/r, with dots for open, loaded and shorted, then the line extended past ε for charging',
        'An energy bar splitting εI into I²r (inside the battery) and I²R (in the load)',
        'The "Remember" recap',
        'End card: "Up next: EMF and Terminal Voltage: Worked Examples"',
      ],
      pitfalls: [
        'Treating the label voltage as fixed: under load the terminal voltage is lower by Ir.',
        'Using ε − Ir for a battery being charged; charging needs ε + Ir.',
        'Calling EMF a force, or picturing charge being used up in the load.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-emf-capacitors-mcat', 'mcat-physics-electricity-kirchhoff-power-mcat'],
      checkpoint: [
        {
          question: 'A car\'s headlights dim noticeably while its starter motor cranks the engine. What best explains the dimming?',
          options: [
            'The starter uses up charge the headlights need',
            'The large starter current drops voltage across r',
            'The battery\'s EMF falls while the starter runs',
            'The starter adds series resistance to the lights',
          ],
          correctAnswer: 1,
          explanation:
            'The starter draws a very large current, and that current flows through the battery\'s internal resistance, so the terminal voltage V_term = ε − Ir sags and the headlights get less voltage. Charge is never used up in a circuit, only energy is converted; the EMF is set by the chemistry and stays about the same; and the starter is connected in parallel with the lights, not in series, so it adds no series resistance to them.',
        },
        {
          question: 'A charger pushes current backward into a rechargeable battery\'s positive terminal. How must the charger\'s voltage compare with the battery\'s EMF?',
          options: [
            'It must exceed the EMF by Ir',
            'It must be below the EMF by Ir',
            'It must equal the EMF exactly',
            'It must equal only the drop Ir',
          ],
          correctAnswer: 0,
          explanation:
            'Charging current runs backward through the battery, so the charger has to overcome the EMF AND push current through the internal resistance: V_term = ε + Ir. "Below by Ir" is the discharging rule, ε − Ir; "exactly the EMF" would drive no current at all; and Ir alone ignores the EMF the charger is pushing against.',
        },
        {
          question: 'A thick wire of negligible resistance is connected straight across a battery\'s terminals. What are the current and the terminal voltage?',
          options: [
            'Infinite current, since the wire has no resistance',
            'The terminal voltage stays at ε, with no load attached',
            'The current is ε/r, and the terminal voltage is zero',
            'No current, since there is no load to use the charge',
          ],
          correctAnswer: 2,
          explanation:
            'With R = 0 only the internal resistance limits the current, so I_max = ε/r, and the whole EMF is dropped across r: V_term = ε − Ir = 0, and all of the power heats the battery. The current is not infinite because r is still in the loop; V_term = ε holds only with NO current (an open circuit); and a wire is a complete path, so current flows with or without a "load".',
        },
      ],
    },
    // ── 2 · EMF and terminal voltage (worked examples) ───────────────────
    {
      title: 'EMF and Terminal Voltage: Worked Examples',
      minutes: 5,
      goal: 'Find a battery\'s EMF and internal resistance from two voltmeter readings, account for its power, and find its short-circuit current and charging voltage.',
      keyPoints: [
        'An ideal voltmeter on an unloaded battery reads the EMF, because I = 0 means no internal drop.',
        'With a known load, I = V_term/R, then r = (ε − V_term)/I; check with I = ε/(R + r).',
        'Power: εI supplied, I²R delivered, I²r wasted, and the last two add to the first.',
        'Short circuit: I_max = ε/r, and every watt εI = I²r heats the battery. Charging: V_term = ε + Ir.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a voltmeter on a bare battery reading 9.0 V, then a 4.0 Ω resistor clipped on and the reading dropping to 8.0 V; the missing 1.0 V appears inside the dashed battery box',
        'Example 1 (d): an 18 W bar splitting into 16 W and 2.0 W',
        'Example 2: the battery model three times over: a 5.5 Ω load, a shorting wire glowing hot, and a charger pushing current backward',
        'The "Remember" recap of the method',
        'End card: "Up next: Cells and Meters"',
      ],
      workedExample:
        'Example 1: A voltmeter across a battery reads 9.0 V with nothing else attached. With a 4.0 Ω resistor connected across the terminals, it reads 8.0 V. (a) What is the battery\'s EMF? (b) What current flows through the resistor? (c) What is the battery\'s internal resistance? (d) How much power does the chemistry supply, and where does it go? (a) No load means I ≈ 0, so ε = 9.0 V; (b) I = 8.0 / 4.0 = 2.0 A; (c) r = (9.0 − 8.0) / 2.0 = 0.50 Ω, and the check 9.0 / (4.0 + 0.50) = 2.0 A agrees; (d) εI = (9.0)(2.0) = 18 W supplied, I²R = (4.0)(4.0) = 16 W to the resistor, I²r = (4.0)(0.50) = 2.0 W wasted inside, and 16 + 2.0 = 18 W. Example 2: A battery has EMF 12 V and internal resistance 0.50 Ω. (a) What current does it drive through a 5.5 Ω load, and what is its terminal voltage? (b) If a wire shorts its terminals, what current flows, and how much power heats the battery? (c) What voltage must a charger supply to recharge it at 3.0 A? (a) I = 12 / (5.5 + 0.50) = 2.0 A, and V_term = 12 − (2.0)(0.50) = 11 V, which matches IR = (2.0)(5.5) = 11 V; (b) I_max = 12 / 0.50 = 24 A, and I²r = (24)²(0.50) = 288 W, the same as εI = (12)(24), because all of it is dissipated inside; (c) V = ε + Ir = 12 + (3.0)(0.50) = 13.5 V.',
      pitfalls: [
        'Computing the current as ε/R and leaving r out of the loop.',
        'Reporting the internal drop (ε − V_term) as the internal resistance without dividing by I.',
        'Using the discharging sign when the battery is being charged.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-emf-capacitors-mcat', 'mcat-physics-electricity-kirchhoff-power-mcat'],
      checkpoint: [
        {
          question: 'A voltmeter reads 6.0 V across an unloaded battery and 4.8 V once a 2.0 Ω resistor is connected across its terminals. What is the battery\'s internal resistance?',
          options: ['0.40 Ω', '1.2 Ω', '0.50 Ω', '2.5 Ω'],
          correctAnswer: 2,
          explanation:
            'The unloaded reading is the EMF, 6.0 V. With the resistor on, I = V_term/R = 4.8 / 2.0 = 2.4 A, and the missing 1.2 V is dropped inside: r = 1.2 / 2.4 = 0.50 Ω (check: 6.0 / 2.5 = 2.4 A). 0.40 Ω takes the current as ε/R = 3.0 A, ignoring the internal resistance; 1.2 Ω is the internal voltage drop with the volts read as ohms; and 2.5 Ω is ε/I, the total R + r, not r alone.',
        },
        {
          question: 'A battery with EMF 6.0 V and internal resistance 1.0 Ω drives a 5.0 Ω resistor. How much power is wasted inside the battery?',
          options: ['1.0 W', '5.0 W', '6.0 W', '36 W'],
          correctAnswer: 0,
          explanation:
            'The current is I = ε/(R + r) = 6.0 / 6.0 = 1.0 A, so the internal loss is I²r = (1.0)²(1.0) = 1.0 W. 5.0 W is I²R, the power delivered to the resistor; 6.0 W is εI, the total the chemistry supplies; and 36 W is ε²/r, which puts the whole EMF across r as if the battery were shorted.',
        },
        {
          question: 'A cell with EMF 1.5 V and internal resistance 0.25 Ω is being recharged at 0.80 A. What terminal voltage must the charger maintain?',
          options: ['1.3 V', '1.5 V', '1.9 V', '1.7 V'],
          correctAnswer: 3,
          explanation:
            'Charging current is forced backward through the cell, so the internal drop adds to the EMF: V = ε + Ir = 1.5 + (0.80)(0.25) = 1.5 + 0.20 = 1.7 V. 1.3 V uses the discharging sign, ε − Ir; 1.5 V ignores the internal resistance; and 1.9 V counts the 0.20 V internal drop twice.',
        },
      ],
    },
    // ── 3 · Cells and meters (concepts) ──────────────────────────────────
    {
      title: 'Cells and Meters',
      minutes: 7,
      goal: 'Predict the EMF and internal resistance of cells in series and in parallel, read a capacity rating as charge, connect ammeters and voltmeters correctly and predict what happens when they are swapped, and say where a cell\'s EMF comes from.',
      keyPoints: [
        'Cells in series (+ to − to +): EMFs add and internal resistances add. A cell inserted backward SUBTRACTS its EMF: four 1.5 V cells with one reversed give 3.0 V, not 4.5 V.',
        'Identical cells in parallel keep one cell\'s EMF, but their internal resistances are in parallel (r/2 for two), so the pack sags less and lasts longer. Series for more voltage, parallel for more current capacity at the same voltage.',
        'A milliamp-hour rating is a quantity of CHARGE, because Q = It: 1000 mAh is 1.0 A for an hour, or 3600 C. The energy stored is roughly QV.',
        'An ammeter goes in series and an ideal one has about 0 Ω; a voltmeter goes in parallel and an ideal one has nearly infinite resistance, so neither disturbs the circuit. Real meters are close: a voltmeter reads slightly low, and an ammeter slightly lowers the current it measures.',
        'Swapped meters: an ammeter across an element shorts it, so the element goes dark and the surge can blow the meter\'s fuse; a voltmeter in series chokes the current to nearly zero and reads almost the full EMF.',
        'Where EMF comes from: a battery is one or more galvanic cells. The EMF is the cell potential, set by the redox reaction through ΔG = −nFE, and the positive terminal is the cathode.',
      ],
      showOnScreen: [
        'Four cells stacked + to − as a potential staircase climbing 1.5 V per step to 6.0 V, then one cell flipped so its step goes down: 3.0 V',
        'Two identical cells side by side in parallel: the meter still reads 1.5 V, the two internal resistors drawn as a parallel pair',
        'A phone battery label, "3.7 V · 1000 mAh", with mAh rewritten as (1.0 A)(3600 s) = 3600 C',
        'A two-resistor loop with an ammeter in series and a voltmeter across one resistor, then the swaps: the ammeter across the resistor (current detours through it, the resistor goes dark) and the voltmeter in series (current arrows fade to nothing, the meter reads the EMF)',
        'A galvanic cell, anode and cathode, with ΔG = −nFE beside it and the cathode labelled "+ terminal"',
        'The "Remember" recap',
        'End card: "Up next: Cells and Meters: Worked Examples"',
      ],
      pitfalls: [
        'Treating a reversed cell as removed: it subtracts its EMF, it does not just contribute nothing.',
        'Expecting identical cells in parallel to add their EMFs.',
        'Swapping the meters\' places or their ideal resistances.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-emf-capacitors-mcat', 'mcat-physics-electricity-electrochemistry-mcat'],
      checkpoint: [
        {
          question: 'In a series stack of identical cells, one cell has been inserted backward. What does that cell do to the stack\'s total EMF?',
          options: [
            'It subtracts its own EMF from the total',
            'It adds nothing, as if it had been removed',
            'It cancels the EMF of the entire stack',
            'It still adds, since EMF has no direction',
          ],
          correctAnswer: 0,
          explanation:
            'A reversed cell pushes charge against the others, so its EMF counts with a minus sign: it does not merely drop out, it takes away one cell\'s worth. Treating it as removed misses that it actively opposes the rest; it cancels only ONE other cell, not the whole stack; and EMF does have a direction, from the − terminal to the + terminal through the cell.',
        },
        {
          question: 'Why should a voltmeter have an extremely large resistance compared with the element it is connected across?',
          options: [
            'So it can safely carry the whole circuit current',
            'So it adds a large voltage drop for it to measure',
            'So it blocks the current through the element',
            'So it draws almost no current from the circuit',
          ],
          correctAnswer: 3,
          explanation:
            'A voltmeter sits in parallel with the element, so any current it draws is current diverted from the circuit, which changes the very voltage it is trying to read. A huge resistance means it draws almost nothing. Carrying the full circuit current is the job of an AMMETER in series; a voltmeter in parallel adds no series drop; and it is connected beside the element, so it cannot block the element\'s current.',
        },
        {
          question: 'Two galvanic cells run reactions with the same ΔG per mole of reaction, but one transfers 1 mol of electrons and the other transfers 2 mol. How do their EMFs compare?',
          options: [
            'The 2-electron cell\'s EMF is twice as large',
            'The 1-electron cell\'s EMF is twice as large',
            'They are equal, since both have the same ΔG',
            'It depends on which cell has larger electrodes',
          ],
          correctAnswer: 1,
          explanation:
            'From ΔG = −nFE, the EMF is E = −ΔG/(nF). With the same ΔG, the cell that moves half as many electrons gets twice the energy per coulomb, so the 1-electron cell has twice the EMF. Doubling n with n in the numerator inverts the relationship; equal EMFs ignore n; and electrode size changes how much charge a cell can deliver, not its EMF.',
        },
      ],
    },
    // ── 4 · Cells and meters (worked examples) ───────────────────────────
    {
      title: 'Cells and Meters: Worked Examples',
      minutes: 5,
      goal: 'Solve a series stack of real cells, including a reversed cell and a capacity rating, and predict the readings when meters are connected correctly and when they are swapped.',
      keyPoints: [
        'Series stack: add the EMFs (a reversed cell subtracts), add the internal resistances (a reversed cell still adds its r), then I = ε_total/(R + r_total) and V_term = ε_total − I·r_total.',
        'Capacity: mAh × 3.6 gives coulombs (1 mAh = 3.6 C); energy ≈ QV.',
        'An ammeter laid across an element replaces it with a wire: redo the loop without that element.',
        'A voltmeter in series dominates the loop: the current is about ε/R_meter, and almost the whole EMF appears across the meter.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: three cells as a potential staircase with their small internal resistors, the bulb lighting, then the middle cell flipping and the staircase dropping one step',
        'Example 2: the resistor-and-lamp loop three times: meters placed correctly, the ammeter across the lamp (lamp dark, the meter path glowing), and the voltmeter in series (the loop dims to nothing)',
        'The "Remember" recap of the method',
        'End card: "Up next: Capacitance"',
      ],
      workedExample:
        'Example 1: Three 1.5 V cells, each with internal resistance 0.20 Ω, are connected in series to a 2.4 Ω bulb. (a) What are the stack\'s total EMF and internal resistance? (b) What current flows, and what is the stack\'s terminal voltage? (c) If one cell is inserted backward, what are the new EMF and current? (d) Each cell is rated 2000 mAh. How much charge is that in coulombs, and roughly how much energy does one cell hold? (a) ε = 3 × 1.5 = 4.5 V and r = 3 × 0.20 = 0.60 Ω; (b) I = 4.5 / (2.4 + 0.60) = 1.5 A, and V_term = 4.5 − (1.5)(0.60) = 3.6 V, which matches IR = (1.5)(2.4) = 3.6 V; (c) ε = 1.5 + 1.5 − 1.5 = 1.5 V, the internal resistance is still 0.60 Ω, so I = 1.5 / 3.0 = 0.50 A; (d) Q = (2.0 A)(3600 s) = 7200 C, and the energy is about QV = (7200)(1.5) ≈ 1.1 × 10⁴ J. Example 2: A 12 V battery of negligible internal resistance drives a 4.0 Ω resistor and a 2.0 Ω lamp in series. (a) What do an ideal ammeter in series and an ideal voltmeter across the lamp read? (b) If the ammeter (about 0 Ω) is instead connected directly across the lamp, what does it read, and what happens to the lamp? (c) If a 1.0 MΩ voltmeter is instead connected in series in the loop, what current flows and what does the meter read? (a) I = 12 / 6.0 = 2.0 A, and the lamp\'s voltage is (2.0)(2.0) = 4.0 V; (b) the meter shorts the lamp, leaving only the 4.0 Ω resistor: I = 12 / 4.0 = 3.0 A through the meter, and the lamp has about 0 V and goes dark; (c) I ≈ 12 / (1.0 × 10⁶) = 1.2 × 10⁻⁵ A (12 μA), so the resistor and lamp drop almost nothing and the meter reads about 12 V.',
      pitfalls: [
        'Dropping a reversed cell\'s internal resistance along with its EMF: it is still in the loop.',
        'Leaving out the internal resistances when finding the current.',
        'Expecting a parallel ammeter to read the normal current.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-emf-capacitors-mcat', 'mcat-physics-electricity-dc-circuits-mcat'],
      checkpoint: [
        {
          question: 'Four 1.5 V cells, each with internal resistance 0.25 Ω, are in series with a 5.0 Ω lamp, but one cell is inserted backward. What current flows?',
          options: ['0.60 A', '1.0 A', '0.50 A', '0.78 A'],
          correctAnswer: 2,
          explanation:
            'The reversed cell subtracts its EMF, so ε = 1.5 + 1.5 + 1.5 − 1.5 = 3.0 V, while all four internal resistances stay in the loop: r = 1.0 Ω. I = 3.0 / (5.0 + 1.0) = 0.50 A. 0.60 A leaves out the internal resistance (3.0 / 5.0); 1.0 A ignores the reversal (6.0 / 6.0); and 0.78 A treats the reversed cell as removed, EMF and resistance both (4.5 / 5.75).',
        },
        {
          question: 'Two 1.5 V cells, each with internal resistance 0.30 Ω, are connected in series to a 2.4 Ω bulb. What is the terminal voltage of the two-cell stack?',
          options: ['2.4 V', '3.0 V', '2.7 V', '0.60 V'],
          correctAnswer: 0,
          explanation:
            'The stack has ε = 3.0 V and r = 0.60 Ω, so I = 3.0 / (2.4 + 0.60) = 1.0 A and V_term = 3.0 − (1.0)(0.60) = 2.4 V, the same as IR across the bulb. 3.0 V is the EMF, the open-circuit reading; 2.7 V counts only one cell\'s internal resistance; and 0.60 V is the drop inside the cells, not the terminal voltage.',
        },
        {
          question: 'A 9.0 V battery of negligible internal resistance drives a 3.0 Ω resistor and a 6.0 Ω bulb in series. An ammeter (about 0 Ω) is connected directly across the bulb. What does it read?',
          options: ['1.0 A', '3.0 A', '0.0 A', '1.5 A'],
          correctAnswer: 1,
          explanation:
            'The ammeter acts as a wire across the bulb, shorting it out, so the loop is left with only the 3.0 Ω resistor: I = 9.0 / 3.0 = 3.0 A, all of it through the meter, and the bulb goes dark. 1.0 A is the normal series current (9.0 / 9.0), which the meter would read only if it were in series; 0.0 A forgets that a near-zero-resistance path takes the current; and 1.5 A (9.0 / 6.0) shorts the wrong element, as if the resistor were bypassed instead of the bulb.',
        },
      ],
    },
    // ── 5 · Capacitance (concepts) ───────────────────────────────────────
    {
      title: 'Capacitance',
      minutes: 6.5,
      goal: 'Explain how a capacitor charges, what capacitance measures and what sets it, and describe the uniform field between parallel plates and how a charge moves in it.',
      keyPoints: [
        'A capacitor is two conductors separated by an insulator. The battery moves charge from one plate to the other through the wires: +Q on one, −Q on the other. No charge crosses the gap, the net charge stays zero, and "the charge on a capacitor" means the charge on EACH plate.',
        'Charging stops when the plates\' voltage equals the battery\'s. Capacitance is charge stored per volt: C = Q/V, in farads (1 F = 1 C/V). Real capacitors are μF to pF, and μF × V = μC.',
        'C = Q/V does not mean more voltage gives less capacitance: C is fixed by construction. Double the voltage and the charge doubles.',
        'Parallel plates: C = κε₀A/d. Bigger plates give more room for charge (C ∝ A); closer plates attract each other\'s charge more strongly, so more charge piles on per volt (C ∝ 1/d). Doubling both A and d leaves C unchanged.',
        'The field between the plates is uniform, E = V/d, pointing from + to −, and essentially zero outside. A charge between the plates feels a constant force qE and accelerates uniformly, like a ball in gravity.',
      ],
      showOnScreen: [
        'A battery connected to two plates: electrons pulled off one plate and pushed onto the other through the wires, nothing crossing the gap, +Q and −Q labels growing until the plate voltage meets the battery\'s',
        'A Q-versus-V line through the origin with slope C: doubling V doubles Q on the same line',
        'The parallel-plate figure with A and d marked, then the change table filling in: A × 2 → 2C, d × 2 → C/2, both doubled → C, κ = 3 → 3C',
        'Evenly spaced field lines from the + plate to the − plate, none outside, then a proton and an electron each released from rest and speeding up steadily in opposite directions',
        'The "Remember" recap',
        'End card: "Up next: Capacitance: Worked Examples"',
      ],
      pitfalls: [
        'Reading C = Q/V as "C falls when V rises".',
        'Picturing charge crossing the gap, or a capacitor with a net charge.',
        'Inverting the separation dependence: capacitance FALLS as the plates move apart.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-emf-capacitors-mcat', 'mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'While a battery charges an empty capacitor, where does the charge that builds up on the two plates come from?',
          options: [
            'The battery moves it from one plate to the other',
            'It leaps across the gap from one plate to the other',
            'The battery adds net positive charge to the capacitor',
            'It is created in the insulator between the plates',
          ],
          correctAnswer: 0,
          explanation:
            'The battery pulls electrons off one plate and pushes them onto the other through the wires, leaving +Q and −Q while the capacitor\'s net charge stays zero. No charge crosses the insulating gap; the battery moves charge rather than adding net charge; and charge is conserved, never created, so the insulator only separates the plates.',
        },
        {
          question: 'A capacitor connected to a battery has its plates moved closer together, and more charge flows onto them. What is the physical reason?',
          options: [
            'The plate area grows as the gap gets smaller',
            'Some of the charge leaks across the thinner gap',
            'The plates\' opposite charges attract more strongly',
            'The battery\'s EMF rises as the gap gets smaller',
          ],
          correctAnswer: 2,
          explanation:
            'With the plates closer, the +Q and −Q attract each other more strongly across the gap, so at the same voltage more charge can pile on: C ∝ 1/d. The plate area is unchanged by moving the plates; charge does not cross an intact insulator; and the battery\'s EMF is set by its chemistry, not by the capacitor.',
        },
        {
          question: 'An electron is released from rest midway between the plates of a charged parallel-plate capacitor. How does it move?',
          options: [
            'With constant acceleration toward the − plate',
            'With constant acceleration toward the + plate',
            'With growing acceleration as it nears the + plate',
            'At a constant speed toward the + plate',
          ],
          correctAnswer: 1,
          explanation:
            'The field points from + to −, and an electron is pushed opposite the field, toward the + plate. Because the field between the plates is uniform, the force qE and therefore the acceleration are the same everywhere, so it speeds up steadily. Moving toward the − plate is the direction a positive charge would go; a growing acceleration belongs to the field of a point charge, not parallel plates; and a constant force gives constant ACCELERATION, not constant speed.',
        },
      ],
    },
    // ── 6 · Capacitance (worked examples) ────────────────────────────────
    {
      title: 'Capacitance: Worked Examples',
      minutes: 5,
      goal: 'Use Q = CV with the plate charge and net charge kept straight, rescale a parallel-plate capacitance from its area and gap, and find the uniform field E = V/d after converting units.',
      keyPoints: [
        'Q = CV gives the charge on EACH plate; the capacitor\'s net charge is always zero.',
        'C belongs to the capacitor: a new voltage changes Q, not C.',
        'Rescale as factors: new C = old C × (area factor) ÷ (gap factor).',
        'E = V/d needs the gap in meters: 1 mm = 10⁻³ m, 1 nm = 10⁻⁹ m.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a capacitor with +27 μC and −27 μC labels on its plates and a "net: 0" tag, then the battery swapped for 18 V and the labels doubling while the C readout stays at 3.0 μF',
        'Example 2: the parallel-plate figure with the gap converted to meters beside E = V/d, then the plates widening threefold and separating twofold with live C, Q and E readouts',
        'The "Remember" recap of the method',
        'End card: "Up next: Dielectrics and Energy"',
      ],
      workedExample:
        'Example 1: A 3.0 μF capacitor is connected to a 9.0 V battery until fully charged. (a) What charge is on each plate? (b) What is the net charge of the whole capacitor? (c) The same capacitor is then charged with an 18 V battery instead. What are its capacitance and its charge? (a) Q = CV = (3.0 μF)(9.0 V) = 27 μC, +27 μC on one plate and −27 μC on the other; (b) zero, because the battery only moved charge from one plate to the other; (c) C is still 3.0 μF, set by its construction, and Q = (3.0 μF)(18 V) = 54 μC. Example 2: An air-filled parallel-plate capacitor has C = 6.0 pF and a plate gap of 1.5 mm, and it is connected to a 12 V battery. (a) What is the electric field between the plates? (b) The plates are replaced with plates of three times the area, and the gap is doubled. What is the new capacitance? (c) With the 12 V battery still connected, what are the new charge and the new field? (a) E = V/d = 12 / (1.5 × 10⁻³ m) = 8.0 × 10³ V/m; (b) C = 6.0 pF × 3 ÷ 2 = 9.0 pF; (c) Q = (9.0 pF)(12 V) = 108 pC, up from 72 pC, and E = 12 / (3.0 × 10⁻³ m) = 4.0 × 10³ V/m.',
      pitfalls: [
        'Plugging millimeters or nanometers into E = V/d without converting.',
        'Inverting the gap factor: a wider gap lowers C.',
        'Reporting a nonzero net charge, or doubling Q to count both plates.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-emf-capacitors-mcat', 'mcat-physics-electricity-electrostatics-mcat', 'mcat-biological-basis-behavior-mcat'],
      checkpoint: [
        {
          question: 'A capacitor holds 45 μC on each plate when 9.0 V is across it. Its voltage is then lowered to 3.0 V. What is its capacitance now?',
          options: ['15 μF', '5.0 μF', '1.7 μF', '0.20 μF'],
          correctAnswer: 1,
          explanation:
            'C = Q/V = 45 μC / 9.0 V = 5.0 μF, and capacitance is set by the capacitor\'s construction, so lowering the voltage leaves it at 5.0 μF (the charge falls to 15 μC). 15 μF divides the old charge by the new voltage; 1.7 μF scales C with the voltage, misreading C = Q/V as cause and effect; and 0.20 μF is V/Q, the formula upside down.',
        },
        {
          question: 'A parallel-plate capacitor is rebuilt with plates of four times the area, and the gap between them is doubled. Its new capacitance, compared with the original C, is:',
          options: ['8C', 'C/2', '2C', '4C'],
          correctAnswer: 2,
          explanation:
            'C ∝ A/d, so four times the area multiplies C by 4 and twice the gap divides it by 2: 4 ÷ 2 = 2C. 8C multiplies by the gap factor instead of dividing, as if C grew with d; C/2 inverts both factors (d/A); and 4C ignores the wider gap.',
        },
        {
          question: 'A cell membrane 7.0 nm thick has a resting potential of 70 mV across it. Treating it as a parallel-plate capacitor, what is the field inside the membrane?',
          options: ['1.0 × 10⁷ V/m', '1.0 × 10¹⁰ V/m', '1.0 × 10⁻² V/m', '4.9 × 10⁻¹⁰ V/m'],
          correctAnswer: 0,
          explanation:
            'Convert both quantities first: V = 0.070 V and d = 7.0 × 10⁻⁹ m, so E = V/d = 0.070 / 7.0 × 10⁻⁹ = 1.0 × 10⁷ V/m, a huge field across a very thin insulator. 1.0 × 10¹⁰ V/m leaves the potential in millivolts; 1.0 × 10⁻² V/m leaves the thickness in nanometers; and 4.9 × 10⁻¹⁰ V/m multiplies V by d instead of dividing.',
        },
      ],
    },
    // ── 7 · Dielectrics and stored energy (concepts) ─────────────────────
    {
      title: 'Dielectrics and Energy',
      minutes: 7,
      goal: 'Explain how a dielectric raises capacitance and why breakdown limits voltage, and predict how the stored energy changes depending on whether the battery stays connected or the capacitor is isolated.',
      keyPoints: [
        'A dielectric is an insulator between the plates. Its molecules polarize: electron clouds shift and polar molecules rotate, so a thin negative layer lines up beside the + plate and a positive layer beside the − plate. These induced charges partly cancel the plates\' field.',
        'For the same Q, the field and the voltage drop by κ, so C = κC₀ (κ ≥ 1). Water\'s κ is unusually large, for the same reason it dissolves salts: its polar molecules screen charges from each other.',
        'Every insulator breaks down above its dielectric strength: it ionizes, conducts, and a spark jumps. A good dielectric raises C AND lets the plates sit closer or reach a higher voltage without breaking down.',
        'Charging takes work, stored in the field: U = ½QV = ½CV² = Q²/2C. The ½ appears because the voltage climbs from 0 to V as charge builds; on a V-versus-Q graph the energy is the triangle\'s area.',
        'Pick the form for what is held fixed. Battery connected: V fixed, U = ½CV², so U ∝ C. Isolated: Q fixed, U = Q²/2C, so U ∝ 1/C. Inserting κ: connected, Q and U rise by κ; isolated, V, E and U fall by κ. Pulling an isolated capacitor\'s plates apart raises V and U (you do work against their attraction); with the battery connected, Q and U fall.',
        'A battery charging a capacitor through a resistor delivers QV but the capacitor stores only ½QV; the other half becomes heat in the resistance, whatever its size.',
      ],
      showOnScreen: [
        'The dielectric figure: a slab of molecules between charged plates, each molecule\'s charges shifting until a − layer faces the + plate, a weaker red field inside opposing the blue one',
        'A κ readout: C₀ → κC₀ as the slab slides in at fixed Q, with the voltmeter needle falling by κ',
        'A spark jumping an air gap when E passes the breakdown limit, then the same gap holding firm with a dielectric in it',
        'A V-versus-Q line with the triangle under it shaded and labelled ½QV',
        'The connected-versus-isolated table built row by row as up, down and same arrows for C, Q, V, E and U',
        'An energy bar for charging through a resistor: QV from the battery, half to the capacitor, half to heat',
        'The "Remember" recap',
        'End card: "Up next: Dielectrics and Energy: Worked Examples"',
      ],
      pitfalls: [
        'Assuming a dielectric always adds energy: with Q fixed it LOWERS U by κ.',
        'Using ½CV² for an isolated capacitor whose C changes; use Q²/2C.',
        'Forgetting the ½, or thinking a smaller resistor saves the lost half.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-emf-capacitors-mcat', 'mcat-physics-electricity-rc-circuits-mcat'],
      checkpoint: [
        {
          question: 'A dielectric slab sits between the plates of a charged capacitor. What lines up on the slab\'s face next to the positive plate, and what does it do?',
          options: [
            'Positive charge, which partly cancels the field',
            'Negative charge, which strengthens the field',
            'Free electrons, which carry current to the plate',
            'Negative charge, which partly cancels the field',
          ],
          correctAnswer: 3,
          explanation:
            'The molecules polarize: their negative charge is drawn toward the + plate and their positive charge toward the − plate. Those induced layers make a field opposite the plates\' field, so the field inside is weaker. Positive charge beside the + plate has the polarization backward; induced charges opposite the plates weaken the field rather than strengthen it; and an insulator has no free electrons to carry current.',
        },
        {
          question: 'Two identical capacitors are charged by the same battery. One stays connected; the other is disconnected. Then both have their plate separation doubled. Which now stores more energy?',
          options: [
            'The isolated one, since its voltage rises as C falls',
            'The connected one, since its battery supplies energy',
            'Neither, since C fell by the same factor in both',
            'Neither, since both capacitors lose half their energy',
          ],
          correctAnswer: 0,
          explanation:
            'Doubling d halves C in both. The connected one keeps V, so U = ½CV² halves; the isolated one keeps Q, so V doubles and U = Q²/2C doubles, from the work done pulling the plates apart. The isolated capacitor ends with four times the energy of the connected one. The battery actually takes charge and energy back as C falls; the same change in C has opposite effects depending on what is fixed; and halving is right only for the connected one.',
        },
        {
          question: 'A 2 μF capacitor and an 8 μF capacitor are charged so that each holds the same charge on its plates. Which stores more energy?',
          options: [
            'The 8 μF one, four times as much',
            'The 2 μF one, four times as much',
            'Both the same, since Q is equal',
            'The 8 μF one, sixteen times as much',
          ],
          correctAnswer: 1,
          explanation:
            'With Q the same, use U = Q²/2C: energy goes as 1/C, so the 2 μF capacitor stores 8/2 = 4 times as much. It needs four times the voltage to hold that charge. Picking the 8 μF capacitor reaches for ½CV² as if V were the same; equal charge does not mean equal energy; and sixteen times squares the capacitance ratio.',
        },
      ],
    },
    // ── 8 · Dielectrics and stored energy (worked examples) ──────────────
    {
      title: 'Dielectrics and Energy: Worked Examples',
      minutes: 5,
      goal: 'Follow a capacitor\'s charge, capacitance, voltage and stored energy when a dielectric is inserted with the battery disconnected and with it connected.',
      keyPoints: [
        'First ask what is fixed: disconnected means Q fixed, connected means V fixed.',
        'C always becomes κC; then the fixed quantity gives the other one: V = Q/C if isolated, Q = CV if connected.',
        'Energy: Q²/2C for an isolated capacitor (U ÷ κ), ½CV² for a connected one (U × κ).',
        'Same slab, opposite energy change: everything hinges on whether Q or V is held constant.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the battery unplugged with a "Q fixed" tag, the κ = 4 slab sliding in, readouts for C, V and U updating line by line',
        'Example 2: the same slab sliding in with the battery left on and a "V fixed" tag, charge flowing in from the battery',
        'The two energy bars side by side: 1.0 × 10⁻² J falling to 2.5 × 10⁻³ J, and rising to 4.0 × 10⁻² J',
        'The "Remember" recap of the method',
        'End card: "Up next: Capacitor Networks (Circuits Part 4)"',
      ],
      workedExample:
        'Example 1: A 2.0 μF air-filled capacitor is charged to 100 V and then disconnected from the battery. A slab with κ = 4 is slid in to fill the gap. (a) What charge is on the plates, and does it change when the slab goes in? (b) What is the new capacitance? (c) What is the new voltage? (d) How much energy was stored before the slab went in? (e) How much energy is stored after, and where did the difference go? (a) Q = CV = (2.0 μF)(100 V) = 200 μC, fixed because the charge has nowhere to go; (b) C = 4 × 2.0 μF = 8.0 μF; (c) V = 200 μC / 8.0 μF = 25 V, down by κ, and the field falls by κ too; (d) U = ½(2.0 × 10⁻⁶)(100)² = 1.0 × 10⁻² J; (e) U = ½(8.0 × 10⁻⁶)(25)² = 2.5 × 10⁻³ J, down by κ = 4 (the shortcut: U = Q²/2C with Q fixed and C × 4), and the missing energy went into the work the field did pulling the slab in. Example 2: The same 2.0 μF capacitor gets the same κ = 4 slab, but this time the 100 V battery stays connected. (a) What charge is on the plates now? (b) What energy is stored, compared with the original 1.0 × 10⁻² J? (a) V stays 100 V, so Q = (8.0 μF)(100 V) = 800 μC: the battery adds 600 μC; (b) U = ½(8.0 × 10⁻⁶)(100)² = 4.0 × 10⁻² J, four times the original.',
      pitfalls: [
        'Holding V fixed for a disconnected capacitor, or Q fixed for a connected one.',
        'Updating V but leaving C at its old value in ½CV².',
        'Assuming a dielectric always raises the stored energy.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-emf-capacitors-mcat', 'mcat-physics-electricity-rc-circuits-mcat'],
      checkpoint: [
        {
          question: 'A 5.0 μF capacitor is charged to 60 V and disconnected from the battery. A slab with κ = 3 is then slid in to fill the gap. What is the new voltage across it?',
          options: ['180 V', '20 V', '60 V', '6.7 V'],
          correctAnswer: 1,
          explanation:
            'Disconnected means Q is fixed: Q = (5.0 μF)(60 V) = 300 μC. The slab makes C = 3 × 5.0 = 15 μF, so V = Q/C = 300 / 15 = 20 V, down by κ. 180 V multiplies by κ instead of dividing; 60 V holds V fixed, the rule for a connected capacitor; and 6.7 V divides by κ twice.',
        },
        {
          question: 'A 4.0 μF capacitor is charged to 50 V and isolated. A slab with κ = 5 is then slid in to fill the gap. How much energy does the capacitor store afterward?',
          options: ['2.5 × 10⁻² J', '5.0 × 10⁻³ J', '2.0 × 10⁻⁴ J', '1.0 × 10⁻³ J'],
          correctAnswer: 3,
          explanation:
            'Before: U = ½(4.0 × 10⁻⁶)(50)² = 5.0 × 10⁻³ J. Isolated means Q is fixed, so U = Q²/2C falls by κ: 5.0 × 10⁻³ / 5 = 1.0 × 10⁻³ J (check: Q = 200 μC, C = 20 μF, V = 10 V, ½(20 × 10⁻⁶)(10)² = 1.0 × 10⁻³ J). 2.5 × 10⁻² J multiplies by κ, the connected result; 5.0 × 10⁻³ J is the energy before the slab; and 2.0 × 10⁻⁴ J uses the new voltage with the OLD capacitance.',
        },
        {
          question: 'A 1.5 μF capacitor stays connected to a 40 V battery while a slab with κ = 4 is slid in to fill the gap. What charge is on each plate afterward?',
          options: ['240 μC', '60 μC', '15 μC', '960 μC'],
          correctAnswer: 0,
          explanation:
            'Connected means V stays 40 V. The slab makes C = 4 × 1.5 = 6.0 μF, so Q = CV = (6.0 μF)(40 V) = 240 μC; the battery adds 180 μC to the original 60 μC. 60 μC holds Q fixed, the isolated rule; 15 μC divides by κ as if the charge fell; and 960 μC multiplies by κ twice.',
        },
      ],
    },
  ],
}
