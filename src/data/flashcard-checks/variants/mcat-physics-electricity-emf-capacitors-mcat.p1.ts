import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-physics-electricity-emf-capacitors-mcat`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`Two identical $1.5$ V cells, each with internal resistance $r$, are connected in parallel. What are the pack's EMF and internal resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A doorbell uses two identical cells, each with an EMF of 6.0 V and an internal resistance of 2.0 Ω, connected in parallel (+ to +, − to −). When the button is pressed, the pair runs a 5.0 Ω buzzer. What is the voltage across the buzzer?`,
        options: [r`6.0 V`, r`5.0 V`, r`6.7 V`, r`4.3 V`],
        correctAnswer: 1,
        explanation: r`In parallel the pack's EMF stays 6.0 V and its internal resistance is 2.0/2 = 1.0 Ω, so I = 6.0/(1.0 + 5.0) = 1.0 A and the buzzer has (1.0)(5.0) = 5.0 V. 6.0 V ignores the internal resistance, 6.7 V treats the cells as a series stack (12 V and 4.0 Ω), and 4.3 V keeps the EMF right but uses the full 2.0 Ω instead of halving it.`,
      },
      {
        question: r`Three identical cells, each with an EMF of 1.5 V and an internal resistance of 0.90 Ω, are connected in parallel (+ to +, − to −) across a 0.20 Ω heating wire. What current flows through each cell?`,
        options: [r`1.0 A`, r`3.0 A`, r`9.0 A`, r`1.4 A`],
        correctAnswer: 0,
        explanation: r`The pack has an EMF of 1.5 V and an internal resistance of 0.90/3 = 0.30 Ω, so the wire carries 1.5/(0.30 + 0.20) = 3.0 A, shared equally by the three identical cells: 1.0 A each. 3.0 A is the total current, not one cell's share, 9.0 A multiplies by three instead of dividing, and 1.4 A is what a single cell alone would deliver.`,
      },
      {
        question: r`A pack is made of two identical cells connected in parallel (+ to +, − to −). An ideal voltmeter across the pack reads 1.5 V with no load and 1.2 V while the pack delivers 0.60 A to a lamp. What is the internal resistance of EACH cell?`,
        options: [r`0.50 Ω`, r`0.25 Ω`, r`2.0 Ω`, r`1.0 Ω`],
        correctAnswer: 3,
        explanation: r`The pack's internal resistance is the lost voltage over the current: (1.5 − 1.2)/0.60 = 0.50 Ω. Two equal resistances in parallel give half of one, so each cell has 2 × 0.50 = 1.0 Ω. 0.50 Ω is the pack's value, 0.25 Ω halves it instead of doubling it, and 2.0 Ω is 1.2/0.60, the lamp's resistance.`,
      },
      {
        question: r`A solar garden lamp stores its energy in 2 identical rechargeable cells connected in parallel (+ to +, − to −). An upgraded model has 6 of the same cells in parallel. Compared with the old battery pack, how do the new pack's EMF and internal resistance change?`,
        options: [r`The EMF triples, and the resistance falls to one third`, r`The EMF is unchanged, and the resistance falls to one third`, r`The EMF is unchanged, and the resistance falls to one sixth`, r`The EMF triples, and the resistance rises to three times`],
        correctAnswer: 1,
        explanation: r`Cells in parallel share one EMF, so it stays the same, while n equal internal resistances in parallel give r/n. Going from r/2 to r/6 is a fall to one third. A tripled EMF belongs to cells added in series, and one sixth compares the new pack with a single cell rather than with the old pack of two.`,
      },
      {
        question: r`Five identical cells, each with an EMF of 1.5 V and an internal resistance of 250 mΩ, are connected in parallel (+ to +, − to −) and drive a 0.45 Ω motor winding that is held still, so it acts as a plain resistor. What current does the pack deliver?`,
        options: [r`3.0 A`, r`4.4 A`, r`2.1 A`, r`3.3 A`],
        correctAnswer: 0,
        explanation: r`The pack's EMF is 1.5 V and its internal resistance is 250 mΩ/5 = 50 mΩ = 0.050 Ω, so I = 1.5/(0.050 + 0.45) = 3.0 A. 4.4 A treats the cells as a series stack (7.5 V and 1.25 Ω), 2.1 A uses one cell's full 0.25 Ω, and 3.3 A leaves out the internal resistance altogether.`,
      },
      {
        question: r`A designer needs a low-resistance supply for a camera flash and has identical cells, each with an EMF of 1.5 V and an internal resistance of 0.60 Ω. How many must be connected in parallel (+ to +, − to −) to bring the supply's internal resistance down to 0.15 Ω, and what EMF does the supply then have?`,
        options: [r`4 cells, giving 1.5 V`, r`4 cells, giving 6.0 V`, r`2 cells, giving 1.5 V`, r`2 cells, giving 3.0 V`],
        correctAnswer: 0,
        explanation: r`For n cells in parallel the internal resistance is r/n, so 0.60/n = 0.15 gives n = 4, and the EMF of a parallel pack equals one cell's 1.5 V. An EMF of 6.0 V or 3.0 V adds the EMFs as if the cells were in series, and 2 cells would only bring the resistance down to 0.30 Ω.`,
      },
    ],
  },
  [r`A phone battery is rated $2000$ mAh at $3.7$ V. How much charge does it hold, and roughly how much energy?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A tablet battery rated 3000 mAh runs a reading light that draws a steady 500 mA. For about how long can it run the light from a full charge?`,
        options: [r`0.17 h`, r`6.0 h`, r`1.5 h`, r`6.0 min`],
        correctAnswer: 1,
        explanation: r`A mAh rating is charge, Q = It, so t = Q/I = (3000 mAh)/(500 mA) = 6.0 h. 0.17 h inverts the ratio, 1.5 h multiplies the two numbers and shifts the decimal, and 6.0 min forgets that the rating counts hours.`,
      },
      {
        question: r`The label on a hearing-aid cell reads 100 mAh. Expressed in coulombs, how much charge does this rating say the cell can push through a circuit over its life?`,
        options: [r`100 C`, r`6.0 C`, r`360 C`, r`360 000 C`],
        correctAnswer: 2,
        explanation: r`100 mAh is 0.100 A flowing for 3600 s, so Q = It = (0.100)(3600) = 360 C. 100 C reads the rating as if it were already in coulombs, 6.0 C multiplies by 60 instead of 3600, and 360 000 C forgets to turn mA into A.`,
      },
      {
        question: r`A drone battery is rated 1500 mAh at 12 V. About how much energy does it store?`,
        options: [r`6.5 × 10⁴ J`, r`1.8 × 10⁴ J`, r`1.8 × 10¹ J`, r`6.5 × 10⁷ J`],
        correctAnswer: 0,
        explanation: r`The charge is Q = (1.5 A)(3600 s) = 5400 C, and the energy is about QV = (5400)(12) ≈ 6.5 × 10⁴ J. 1.8 × 10⁴ J multiplies 1500 by 12 with no conversions, 1.8 × 10¹ J is 1.5 Ah times 12 V, which is watt-hours and not joules, and 6.5 × 10⁷ J forgets the milli.`,
      },
      {
        question: r`Over its working life, an implanted pacemaker cell pushes a total of 9000 C of charge through its circuit. What capacity rating does this correspond to?`,
        options: [r`2.5 mAh`, r`2500 mAh`, r`9000 mAh`, r`150 mAh`],
        correctAnswer: 1,
        explanation: r`One ampere-hour is 3600 C, so 9000 C is 9000/3600 = 2.5 Ah = 2500 mAh. 2.5 mAh stops at ampere-hours and mislabels them, 9000 mAh treats coulombs and mAh as the same thing, and 150 mAh divides by 60 instead of 3600.`,
      },
      {
        question: r`Battery A is rated 4000 mAh at 3.0 V. Battery B is rated 2000 mAh at 12 V. How does the energy stored in B compare with the energy stored in A?`,
        options: [r`B stores twice as much energy as A`, r`B stores half as much energy as A`, r`B stores four times as much energy as A`, r`B stores the same amount of energy as A`],
        correctAnswer: 0,
        explanation: r`Energy is roughly QV, so B/A = (2000 × 12)/(4000 × 3.0) = 24 000/12 000 = 2. Half compares only the mAh ratings, which measure charge, four times compares only the voltages, and equal energy would need the two products of rating and voltage to match.`,
      },
      {
        question: r`A fully charged 1200 mAh camera battery is drained completely in 30 minutes by a constant current. How large is that current?`,
        options: [r`0.60 A`, r`0.040 A`, r`2.4 A`, r`36 A`],
        correctAnswer: 2,
        explanation: r`From Q = It, I = Q/t = (1.2 Ah)/(0.50 h) = 2.4 A. 0.60 A multiplies by the half hour instead of dividing, 0.040 A divides 1200 mA by 30 without converting minutes to hours, and 36 A multiplies 1.2 by 30.`,
      },
    ],
  },
  [r`What happens if an ammeter is mistakenly connected in parallel across a lamp?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An ideal 9.0 V supply runs lamp 1 and lamp 2 connected in series, and both glow. A student then adds one meter. Lamp 1 goes dark, lamp 2 glows brighter than before, and the meter's fuse soon blows. What did the student do?`,
        options: [r`Connected an ammeter in parallel with lamp 1`, r`Connected an ammeter in series with lamp 1`, r`Connected a voltmeter in parallel with lamp 1`, r`Connected a voltmeter in series with lamp 1`],
        correctAnswer: 0,
        explanation: r`An ammeter has almost no resistance, so across lamp 1 it shorts that lamp: lamp 1 gets nearly 0 V, lamp 2 gets nearly the whole 9.0 V, and the larger current runs through the meter. An ammeter in series or a voltmeter in parallel would leave both lamps glowing as before, and a voltmeter in series would darken both lamps.`,
      },
      {
        question: r`An ammeter with a resistance of 0.010 Ω is mistakenly connected in parallel with a 10 Ω lamp in a working circuit. How does the current arriving at the junction divide between the meter and the lamp?`,
        options: [r`About 99.9% takes the lamp, because it has far more resistance`, r`About 50% takes each path, because parallel branches share equally`, r`About 99.9% takes the meter, because it has far less resistance`, r`About 0.1% takes the meter, because an ammeter only samples current`],
        correctAnswer: 2,
        explanation: r`Parallel branches have the same voltage, so current divides in inverse proportion to resistance: the meter takes 10/(10 + 0.010) ≈ 99.9% and the lamp is left nearly dark. Giving the lamp the larger share gets the inverse rule backward, equal sharing holds only for equal resistances, and an ammeter does not sample a small part of the current; it carries whatever its tiny resistance allows.`,
      },
    ],
  },
  [r`A voltmeter wired in series with a $100\,\Omega$ resistor across an ideal $9.0$ V battery reads about {{c1::$9.0$ V}}.`]: {
    kind: 'concept',
    more: [
      {
        question: r`A voltmeter with a resistance of 10 MΩ is mistakenly wired in series with a 50 Ω resistor across an ideal 6.0 V battery. The 50 Ω resistor is then swapped for a 500 Ω resistor, with the meter still in series. What happens to the meter's reading?`,
        options: [r`It falls to about 0.60 V, because the resistance is ten times larger`, r`It falls to about 3.0 V, because the two now share the voltage equally`, r`It stays at about 6.0 V, because the resistor still drops almost nothing`, r`It falls to about 0 V, because a meter in series blocks the voltage`],
        correctAnswer: 2,
        explanation: r`In a series loop the voltage divides in proportion to resistance, and 500 Ω is still negligible next to 10 MΩ, so the meter keeps essentially all 6.0 V. A tenfold fall treats the reading as inversely proportional to the resistor, equal sharing would need a resistor of 10 MΩ, and a series voltmeter blocks the current, not the voltage, which appears across it.`,
      },
      {
        question: r`An ideal 12 V battery, a lamp and a voltmeter are wired in a single series loop; the lamp is dark and the meter reads 12 V. The student then closes the loop with a wire where the meter was and connects the meter in parallel with the lamp. What is seen now?`,
        options: [r`The lamp lights, and the meter reads about 0 V`, r`The lamp lights, and the meter reads about 12 V`, r`The lamp stays dark, and the meter reads about 12 V`, r`The lamp stays dark, and the meter reads about 0 V`],
        correctAnswer: 1,
        explanation: r`In series the meter's huge resistance choked the current, so the lamp was dark and the meter held the whole 12 V. In parallel it draws almost no current, so the lamp gets the full current and lights, and the meter reads the 12 V that is now across the lamp. A dark lamp belongs to the series mistake, and 0 V would mean no voltage across a glowing lamp.`,
      },
    ],
  },
  [r`A battery's EMF is the cell potential of its galvanic cell, set by the redox reaction through $\Delta G = -nFE$; the battery's positive terminal is the {{c1::cathode}}.`]: {
    kind: 'concept',
    more: [
      {
        question: r`For a proposed cell reaction as it is written, ΔG is +50 kJ per mole. Using ΔG = −nFE, what does this say about using the reaction, as written, to power a circuit?`,
        options: [r`E is negative, so the reaction cannot drive a current as written`, r`E is positive, so the reaction can drive a current as written`, r`E is positive, so the reaction cannot drive a current as written`, r`E is negative, so the reaction can drive a current as written`],
        correctAnswer: 0,
        explanation: r`With n and F positive, a positive ΔG makes E = −ΔG/nF negative, and a non-spontaneous reaction cannot act as a battery in that direction. A positive E needs a negative ΔG, and the answers that pair a negative E with a working battery, or a positive E with a dead one, break the link between spontaneity and a positive EMF.`,
      },
      {
        question: r`While a flashlight cell discharges, electrode X is the one joined to the terminal marked −. Which process takes place at X, and what is X called?`,
        options: [r`Reduction takes place at X, which is the cathode`, r`Oxidation takes place at X, which is the anode`, r`Oxidation takes place at X, which is the cathode`, r`Reduction takes place at X, which is the anode`],
        correctAnswer: 1,
        explanation: r`In a galvanic cell the positive terminal is the cathode, where reduction occurs, so the negative terminal is the anode, where oxidation releases electrons into the wire. Reduction at the cathode describes the + terminal instead, and the two mixed answers pair a process with the wrong electrode name.`,
      },
    ],
  },
  [r`Why can a worn-out battery read its full EMF on a voltmeter, yet fail as soon as a real load is attached?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two 9 V batteries, one fresh and one worn out, both read 9.0 V on an ideal voltmeter with nothing else attached. Which test tells them apart?`,
        options: [r`Read each open-circuit voltage with the voltmeter leads reversed`, r`Read each open-circuit voltage with a higher-resistance voltmeter`, r`Read each terminal voltage while it drives the same small resistor`, r`Read each terminal voltage while it drives only an ideal voltmeter`],
        correctAnswer: 2,
        explanation: r`Wear shows up as a larger internal resistance, and that only matters when current flows: under the same load the worn battery's terminal voltage, ε − Ir, sags far more. Reversing the leads, using a better voltmeter, or loading it only with an ideal voltmeter all leave the current near zero, so Ir ≈ 0 and both batteries still show 9.0 V.`,
      },
      {
        question: r`A worn battery has an EMF of 6.0 V and an internal resistance of 4.0 Ω. With which load connected across it is its terminal voltage closest to 6.0 V, and why?`,
        options: [r`A 400 Ω load, because it draws the smallest current`, r`A 0.40 Ω load, because it draws the largest current`, r`A 4.0 Ω load, because it matches the internal resistance`, r`Any of the loads, because the EMF stays fixed at 6.0 V`],
        correctAnswer: 0,
        explanation: r`Terminal voltage is ε − Ir, so it stays near the EMF only when the current, and with it the drop Ir, is small: a 400 Ω load gives 6.0 × 400/404 ≈ 5.9 V. A 0.40 Ω load leaves only about 0.5 V, a matched 4.0 Ω load gives 3.0 V, and although the EMF is fixed, the terminal voltage is not.`,
      },
    ],
  },
  [r`A voltmeter reads $9.0$ V across an unloaded battery and $8.0$ V once a $4.0\,\Omega$ resistor is connected across it. What is the internal resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An ideal voltmeter across a lantern battery shows 12 V while the battery is idle. A 3.0 Ω heater is then wired across the terminals, and the meter shows 9.0 V. How large is the battery's internal resistance?`,
        options: [r`4.0 Ω`, r`3.0 Ω`, r`1.0 Ω`, r`0.33 Ω`],
        correctAnswer: 2,
        explanation: r`The idle reading is the EMF. With the heater, I = 9.0/3.0 = 3.0 A, and the missing 3.0 V is dropped inside the battery: r = (12 − 9.0)/3.0 = 1.0 Ω. 4.0 Ω divides the whole EMF by the current, 3.0 Ω is just the heater's resistance, and 0.33 Ω divides the lost 3.0 V by 9.0 V instead of by the current.`,
      },
      {
        question: r`A battery reads 6.0 V on an ideal voltmeter with no load, and its internal resistance is known to be 0.50 Ω. With an unknown resistor connected across it, the terminal reading is 5.0 V. What is the resistance of the resistor?`,
        options: [r`3.0 Ω`, r`0.60 Ω`, r`2.5 Ω`, r`12 Ω`],
        correctAnswer: 2,
        explanation: r`The 1.0 V lost inside the battery fixes the current: I = (6.0 − 5.0)/0.50 = 2.0 A. The resistor has the terminal voltage across it, so R = 5.0/2.0 = 2.5 Ω. 3.0 Ω divides the EMF, not the terminal voltage, by the current, 0.60 Ω scales r by 6.0/5.0, and 12 Ω is 6.0/0.50.`,
      },
      {
        question: r`A sensor battery reads 3.0 V with nothing attached. While it supplies 50 mA to a transmitter, the reading across its terminals is 2.8 V. What is its internal resistance?`,
        options: [r`0.0040 Ω`, r`56 Ω`, r`60 Ω`, r`4.0 Ω`],
        correctAnswer: 3,
        explanation: r`The lost voltage is 3.0 − 2.8 = 0.20 V at 50 mA = 0.050 A, so r = 0.20/0.050 = 4.0 Ω. 0.0040 Ω divides by 50 without converting mA to A, 56 Ω is 2.8/0.050, the transmitter's effective resistance, and 60 Ω divides the whole EMF by the current.`,
      },
      {
        question: r`A bench power pack has an internal resistance of 2.0 Ω. While it feeds an 8.0 Ω heating coil, an ideal meter shows 4.0 V between the pack's terminals. What will the meter show once the coil is unplugged and nothing draws current?`,
        options: [r`4.0 V`, r`5.0 V`, r`3.0 V`, r`6.0 V`],
        correctAnswer: 1,
        explanation: r`With the coil attached, I = 4.0/8.0 = 0.50 A, so the drop inside the pack is (0.50)(2.0) = 1.0 V and the EMF is 4.0 + 1.0 = 5.0 V, which is what the meter shows with no load. 4.0 V assumes the reading does not change, 3.0 V subtracts the internal drop instead of adding it, and 6.0 V adds 2.0 Ω to 4.0 V as if ohms were volts.`,
      },
      {
        question: r`When a resistor R is connected across a battery, an ideal voltmeter across the terminals shows the reading fall to 80% of its open-circuit value. How does the battery's internal resistance r compare with R?`,
        options: [r`r = R/5`, r`r = 4R`, r`r = 5R`, r`r = R/4`],
        correctAnswer: 3,
        explanation: r`R and r carry the same current, so their voltages are in the ratio of their resistances: R takes 80% of the EMF and r takes the other 20%, giving r/R = 20/80 = 1/4. R/5 compares the lost 20% with the whole EMF instead of with the 80% across R, and 4R and 5R invert those two ratios.`,
      },
      {
        question: r`A microelectrode source reads 100 mV on an ideal voltmeter with nothing attached. With a 4.0 MΩ resistor connected across it, the reading falls to 80 mV. What is the source's internal resistance?`,
        options: [r`1.0 MΩ`, r`5.0 MΩ`, r`0.25 MΩ`, r`1.0 kΩ`],
        correctAnswer: 0,
        explanation: r`The current is I = (80 mV)/(4.0 MΩ) = 20 nA, and the missing 20 mV is dropped inside the source: r = (20 mV)/(20 nA) = 1.0 MΩ. 5.0 MΩ divides the whole 100 mV by the current, 0.25 MΩ inverts the 20 mV to 80 mV ratio, and 1.0 kΩ slips three powers of ten.`,
      },
    ],
  },
  [r`Four $1.5$ V cells are stacked in series, but one is inserted backward. The total EMF is {{c1::$3.0$ V}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A toy's battery compartment holds six 2.0 V cells connected in series, but a child loads two of them the wrong way round. What EMF does the toy receive?`,
        options: [r`8.0 V`, r`4.0 V`, r`12 V`, r`10 V`],
        correctAnswer: 1,
        explanation: r`Four cells push one way and two push against them: (4)(2.0) − (2)(2.0) = 4.0 V. 8.0 V just leaves the two reversed cells out instead of subtracting them, 12 V ignores the reversal, and 10 V subtracts only one of the two reversed cells' worth from the full stack.`,
      },
      {
        question: r`Three cells, each with an EMF of 2.0 V and an internal resistance of 1.0 Ω, are connected in series with a 7.0 Ω lamp, but one cell is inserted backward. What is the voltage across the lamp?`,
        options: [r`4.2 V`, r`2.0 V`, r`1.4 V`, r`1.8 V`],
        correctAnswer: 2,
        explanation: r`The reversed cell subtracts, so the EMF is 2.0 + 2.0 − 2.0 = 2.0 V, but all three internal resistances still add: I = 2.0/(3.0 + 7.0) = 0.20 A and the lamp has (0.20)(7.0) = 1.4 V. 4.2 V uses the full 6.0 V, 2.0 V ignores the internal resistances, and 1.8 V counts only one cell's 1.0 Ω.`,
      },
      {
        question: r`Eight 1.5 V cells are stacked in series, with nothing else connected. An ideal voltmeter across the stack reads 6.0 V, with the expected polarity, instead of 12 V. How many of the cells are in backward?`,
        options: [r`Two cells`, r`Four cells`, r`One cell`, r`Three cells`],
        correctAnswer: 0,
        explanation: r`Each reversed cell removes its own 1.5 V and cancels another 1.5 V, so it lowers the total by 3.0 V. A shortfall of 12 − 6.0 = 6.0 V therefore means two reversed cells: (6)(1.5) − (2)(1.5) = 6.0 V. Four cells counts only 1.5 V lost per reversed cell and would really give 0 V; one cell gives 9.0 V and three give 3.0 V.`,
      },
      {
        question: r`A flashlight takes five identical cells in series, and one of them is put in backward. What fraction of the correctly loaded stack's EMF does the stack now have?`,
        options: [r`Four fifths of the correct value`, r`One fifth of the correct value`, r`Two fifths of the correct value`, r`Three fifths of the correct value`],
        correctAnswer: 3,
        explanation: r`Four cells push forward and one pushes back, so the total is 4ε − ε = 3ε out of a possible 5ε, or three fifths. Four fifths just removes the reversed cell without letting it subtract, one fifth is the share of a single cell, and two fifths is the amount lost, not the amount left.`,
      },
      {
        question: r`A thin-film stack has 20 cells in series, each with an EMF of 500 mV. During assembly, three of the cells were placed backward. What is the stack's EMF?`,
        options: [r`7.0 V`, r`8.5 V`, r`10 V`, r`7000 V`],
        correctAnswer: 0,
        explanation: r`Seventeen cells push forward and three push back: (17 − 3)(0.500 V) = 7.0 V. 8.5 V leaves the three reversed cells out but does not subtract them, 10 V ignores the reversal, and 7000 V forgets that 500 mV is 0.500 V.`,
      },
      {
        question: r`A camping lantern runs on five identical cells in series. One has been loaded the wrong way round, and with the lantern switched off an ideal voltmeter across the whole set reads 4.8 V. What is the EMF of each cell?`,
        options: [r`1.2 V`, r`1.6 V`, r`0.96 V`, r`2.4 V`],
        correctAnswer: 1,
        explanation: r`Four forward cells minus one reversed cell leaves a net of three: 3ε = 4.8 V, so ε = 1.6 V. 1.2 V divides by four, as if the reversed cell simply dropped out, 0.96 V divides by all five cells, and 2.4 V divides by two.`,
      },
    ],
  },
  [r`A parallel-plate capacitor's plate area is doubled and its plate gap is tripled. What is the new capacitance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A touch-screen sensor is a 20 pF air-filled parallel-plate capacitor. A redesign uses plates of three times the area and brings them to half the original spacing. What is the capacitance of the redesigned sensor?`,
        options: [r`30 pF`, r`13 pF`, r`3.3 pF`, r`120 pF`],
        correctAnswer: 3,
        explanation: r`C is proportional to A/d: tripling A multiplies C by 3 and halving d multiplies it by 2, so C = (20)(6) = 120 pF. 30 pF divides by 2 for the smaller gap instead of multiplying, 13 pF divides by 3 for the larger plates instead of multiplying, and 3.3 pF inverts both factors.`,
      },
      {
        question: r`An engineer must shrink a parallel-plate capacitor for a hearing aid: the new plates have half the original area, yet the capacitance has to be three times as large. With the same material between the plates, what must the new gap be?`,
        options: [r`Two thirds of the original gap`, r`Six times the original gap`, r`One sixth of the original gap`, r`Three halves of the original gap`],
        correctAnswer: 2,
        explanation: r`C is proportional to A/d, so 3 = (1/2)/(d′/d), giving d′/d = 1/6: half the area costs a factor of 2, and the gap must make up a factor of 6. Six times inverts the dependence on d, and two thirds and three halves combine the 2 and the 3 by dividing them instead of multiplying.`,
      },
      {
        question: r`A 10 pF air-filled parallel-plate capacitor in a humidity sensor has its gap doubled, and the wider gap is then completely filled with a polymer of κ = 6. What is the new capacitance?`,
        options: [r`30 pF`, r`120 pF`, r`60 pF`, r`0.83 pF`],
        correctAnswer: 0,
        explanation: r`C = κε₀A/d: doubling d halves C and the polymer multiplies it by 6, so C = (10)(6/2) = 30 pF. 120 pF multiplies by 2 for the wider gap, 60 pF ignores the gap change, and 0.83 pF divides by both factors.`,
      },
      {
        question: r`A 12 pF capacitor has square plates. It is rebuilt with square plates whose sides are three times as long, and the gap is widened from 1.0 mm to 3.0 mm. What is the new capacitance?`,
        options: [r`12 pF`, r`108 pF`, r`4.0 pF`, r`36 pF`],
        correctAnswer: 3,
        explanation: r`Tripling the side of a square multiplies its area by 9, and tripling the gap divides C by 3, so C = (12)(9/3) = 36 pF. 12 pF treats the area as only tripled, 108 pF ignores the wider gap, and 4.0 pF ignores the larger plates.`,
      },
      {
        question: r`An air-filled parallel-plate capacitor has plates of area 0.010 m² separated by 0.90 mm. Taking ε₀ ≈ 9.0 × 10⁻¹² F/m, what is its capacitance?`,
        options: [r`1.0 × 10⁻¹³ F`, r`8.1 × 10⁻¹⁷ F`, r`1.0 × 10⁻¹⁰ F`, r`1.0 × 10⁻⁸ F`],
        correctAnswer: 2,
        explanation: r`C = ε₀A/d = (9.0 × 10⁻¹²)(0.010)/(9.0 × 10⁻⁴ m) = 1.0 × 10⁻¹⁰ F, which is 100 pF. 1.0 × 10⁻¹³ F leaves the gap as 0.90 instead of 9.0 × 10⁻⁴ m, 8.1 × 10⁻¹⁷ F multiplies by the gap instead of dividing, and 1.0 × 10⁻⁸ F slips two powers of ten.`,
      },
      {
        question: r`A pressure sensor is an air-filled parallel-plate capacitor of 40 pF. Pressing on it reduces the plate gap by 20%, with the plate area unchanged. What is its capacitance while pressed?`,
        options: [r`32 pF`, r`50 pF`, r`48 pF`, r`200 pF`],
        correctAnswer: 1,
        explanation: r`The gap becomes 0.80d, and C is proportional to 1/d, so C = 40/0.80 = 50 pF. 32 pF multiplies by 0.80 as if C were proportional to d, 48 pF adds 20% instead of dividing by 0.80, and 200 pF divides by 0.20, the change in the gap, instead of by the new gap.`,
      },
    ],
  },
  [r`How does a dielectric between the plates raise a capacitor's capacitance?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A slab of dielectric is slid into the gap of an isolated, charged capacitor. Which statement about what the slab does is NOT correct?`,
        options: [r`It polarizes, as its molecules line up in the field`, r`It adds extra free charge to the two metal plates`, r`It sets up induced charges that weaken the net field`, r`It lowers the voltage between the two metal plates`],
        correctAnswer: 1,
        explanation: r`An isolated capacitor has no path for charge to arrive, so the free charge on the plates stays the same; the slab only polarizes. Its induced surface charges partly cancel the field, so the voltage falls for the same Q and C = Q/V rises. The other three statements describe exactly that mechanism and are all true.`,
      },
      {
        question: r`Slab X is made of molecules that polarize weakly, and slab Y of molecules that polarize strongly. Each in turn fills the gap of the same isolated capacitor carrying the same charge. Which slab gives the higher capacitance, and why?`,
        options: [r`Slab X, because its induced charge cancels less of the field`, r`Slab Y, because it puts more free charge on the metal plates`, r`Slab X, because it lets more of the field through the gap`, r`Slab Y, because its induced charge cancels more of the field`],
        correctAnswer: 3,
        explanation: r`Stronger polarization means larger induced surface charges, a weaker net field and so a lower voltage for the same Q, which is a larger C = Q/V (a larger κ). Slab X cancels less of the field, so it lowers the voltage less and raises C less. A slab does not put free charge on the plates of an isolated capacitor.`,
      },
    ],
  },
  [r`$12$ V is applied across capacitor plates $2.0$ mm apart. What is the electric field between them?`]: {
    kind: 'calc',
    more: [
      {
        question: r`In an air-cleaning unit, two flat parallel plates sit 4.0 cm apart and are held at a potential difference of 2000 V. How strong is the uniform field in the gap?`,
        options: [r`5.0 × 10² V/m`, r`8.0 × 10¹ V/m`, r`5.0 × 10⁴ V/m`, r`8.0 × 10³ V/m`],
        correctAnswer: 2,
        explanation: r`E = V/d = 2000/(4.0 × 10⁻² m) = 5.0 × 10⁴ V/m. 5.0 × 10² V/m divides by 4.0 without converting cm to m, 8.0 × 10¹ V/m multiplies 2000 V by 0.040 m, and 8.0 × 10³ V/m multiplies 2000 by 4.0.`,
      },
      {
        question: r`The deflection plates of an old display tube are 2.0 cm apart, and a uniform field of 3.0 × 10⁴ V/m is needed between them. What voltage must be applied across the plates?`,
        options: [r`6.0 × 10² V`, r`6.0 × 10⁴ V`, r`1.5 × 10⁶ V`, r`6.0 × 10⁰ V`],
        correctAnswer: 0,
        explanation: r`V = Ed = (3.0 × 10⁴ V/m)(2.0 × 10⁻² m) = 6.0 × 10² V. 6.0 × 10⁴ V multiplies by 2.0 without converting cm to m, 1.5 × 10⁶ V divides the field by the gap instead of multiplying, and 6.0 × 10⁰ V converts the centimeters twice.`,
      },
      {
        question: r`The voltage across a pair of parallel plates is tripled, and the plates are moved to half their original separation. By what factor does the field between them change?`,
        options: [r`It becomes 1.5 times as large`, r`It becomes 6 times as large`, r`It becomes 2/3 as large`, r`It becomes 1/6 as large`],
        correctAnswer: 1,
        explanation: r`E = V/d, so tripling V multiplies E by 3 and halving d multiplies it by 2: a factor of 6 overall. 1.5 times treats the smaller gap as lowering the field, 1/6 inverts both changes, and 2/3 inverts the voltage change only.`,
      },
      {
        question: r`In gel electrophoresis, 120 V is applied between electrodes at the two ends of a gel, giving a uniform field of 800 V/m along it. How long is the gel?`,
        options: [r`6.7 m`, r`1.5 cm`, r`150 cm`, r`15 cm`],
        correctAnswer: 3,
        explanation: r`d = V/E = 120/800 = 0.15 m = 15 cm. 6.7 m divides the field by the voltage, and 1.5 cm and 150 cm slip a power of ten in turning 0.15 m into centimeters.`,
      },
      {
        question: r`Parallel plates 6.0 mm apart have 24 V across them. Point X is 1.0 mm from the positive plate and point Y is 4.0 mm from the positive plate, both inside the gap. What is the potential difference between X and Y?`,
        options: [r`24 V`, r`12 V`, r`4.0 V`, r`16 V`],
        correctAnswer: 1,
        explanation: r`The field is uniform, E = 24 V/6.0 mm = 4.0 V per mm, and X and Y are 3.0 mm apart along the field, so the difference is (4.0)(3.0) = 12 V. 24 V is the difference between the plates themselves, 4.0 V is the change over only 1.0 mm, and 16 V uses Y's full 4.0 mm distance from the plate instead of the 3.0 mm between the points.`,
      },
      {
        question: r`A lipid bilayer 5.0 nm thick can be modeled as the gap of a parallel-plate capacitor. If the uniform field inside it is 2.0 × 10⁷ V/m, what is the voltage across the bilayer?`,
        options: [r`100 mV`, r`10 mV`, r`1.0 mV`, r`250 mV`],
        correctAnswer: 0,
        explanation: r`V = Ed = (2.0 × 10⁷ V/m)(5.0 × 10⁻⁹ m) = 0.10 V = 100 mV. 10 mV and 1.0 mV slip one or two powers of ten in handling the nanometers, and 250 mV comes from dividing 5.0 by 2.0 instead of multiplying the field by the thickness.`,
      },
    ],
  },
  [r`A battery charges an uncharged capacitor through a resistor, moving charge $Q$ at voltage $V$. How much energy does the battery supply, and where does it all go?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 9.0 V battery charges an empty capacitor through a resistor, moving 4.0 mC onto its plates by the time charging is complete. How much energy ends up stored in the capacitor?`,
        options: [r`18 mJ`, r`36 mJ`, r`9.0 mJ`, r`72 mJ`],
        correctAnswer: 0,
        explanation: r`The battery supplies QV = (4.0 mC)(9.0 V) = 36 mJ, but the capacitor stores only half of that, ½QV = 18 mJ; the other 18 mJ becomes heat in the resistor. 36 mJ is everything the battery supplied, 9.0 mJ halves twice, and 72 mJ doubles instead of halving.`,
      },
      {
        question: r`A 10 V battery fully charges an empty 20 μF capacitor through a 50 Ω resistor. How much energy does the battery supply in the process?`,
        options: [r`1.0 mJ`, r`4.0 mJ`, r`2.0 mJ`, r`0.20 mJ`],
        correctAnswer: 2,
        explanation: r`The charge moved is Q = CV = 20 μF × 10 V = 200 μC, and the battery supplies QV = 200 μC × 10 V = 2.0 mJ, whatever the resistor's size. 1.0 mJ is only the half the capacitor stores, 4.0 mJ doubles the right answer, and 0.20 mJ is the charge in mC mistaken for energy.`,
      },
      {
        question: r`A temperature probe shows that 0.60 mJ of heat was produced in a resistor while a battery, connected through that resistor, fully charged an empty capacitor. In the process 100 μC moved onto the plates. What is the battery's voltage?`,
        options: [r`6.0 V`, r`24 V`, r`12 V`, r`3.0 V`],
        correctAnswer: 2,
        explanation: r`The heat is half of what the battery supplies, ½QV, so V = 2 × 0.60 mJ/100 μC = 1.2 × 10⁻³/1.0 × 10⁻⁴ = 12 V. 6.0 V sets the heat equal to the full QV, 24 V doubles twice, and 3.0 V halves where it should double.`,
      },
      {
        question: r`A 6.0 V battery supplies 1.8 mJ in total while it fully charges an empty capacitor through a resistor. How much charge ends up on each plate?`,
        options: [r`600 μC`, r`150 μC`, r`30 μC`, r`300 μC`],
        correctAnswer: 3,
        explanation: r`The battery supplies QV, so Q = (1.8 × 10⁻³ J)/(6.0 V) = 3.0 × 10⁻⁴ C = 300 μC. 600 μC wrongly sets the battery's energy equal to ½QV, which is the capacitor's share, 150 μC halves instead, and 30 μC slips a power of ten.`,
      },
      {
        question: r`An empty capacitor is fully charged through a resistor by a battery, and the heat produced in the resistor is measured. The experiment is repeated with the same capacitor and resistor but with a battery of twice the voltage. How does the heat compare?`,
        options: [r`It is 2 times as large`, r`It is the same as before`, r`It is 4 times as large`, r`It is half as large`],
        correctAnswer: 2,
        explanation: r`The heat is ½QV, and with the same capacitor Q = CV also doubles, so the heat is ½(2Q)(2V), four times as large. Twice as large forgets that the charge grows with the voltage, and the heat is the same regardless of the resistor's size, not regardless of the battery's voltage.`,
      },
      {
        question: r`A steady 400 V supply fully charges an empty 250 μF flash capacitor through the resistance of its charging circuit. How much energy becomes heat in that resistance?`,
        options: [r`20 J`, r`40 J`, r`10 J`, r`0.050 J`],
        correctAnswer: 0,
        explanation: r`Q = CV = (250 × 10⁻⁶ F)(400 V) = 0.10 C, so the supply delivers QV = 40 J; the capacitor stores half and the other 20 J becomes heat. 40 J is the supply's whole output, 10 J halves twice, and 0.050 J is ½CV with the voltage not squared.`,
      },
    ],
  },
  [r`A capacitor's stored energy is $U = \tfrac{1}{2}QV = \tfrac{1}{2}CV^2 =$ {{c1::$Q^2/2C$}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`Before delivering a shock, a defibrillator brings its 40 μF capacitor up to 1000 V. How many joules are then available in the capacitor?`,
        options: [r`20 J`, r`40 J`, r`0.020 J`, r`0.040 J`],
        correctAnswer: 0,
        explanation: r`U = ½CV² = ½(40 × 10⁻⁶ F)(1000 V)² = ½(40 × 10⁻⁶)(10⁶) = 20 J. 40 J leaves out the ½, 0.020 J forgets to square the voltage, and 0.040 J makes both mistakes.`,
      },
      {
        question: r`An isolated 2.0 μF capacitor stores 1.0 μJ. How much charge is on each plate?`,
        options: [r`2.0 μC`, r`4.0 μC`, r`1.0 μC`, r`1.4 μC`],
        correctAnswer: 0,
        explanation: r`From U = Q²/2C, Q² = 2CU = 2(2.0 × 10⁻⁶)(1.0 × 10⁻⁶) = 4.0 × 10⁻¹² C², so Q = 2.0 × 10⁻⁶ C = 2.0 μC. 4.0 μC forgets the square root, 1.0 μC just divides 2.0 by 2, and 1.4 μC drops the factor of 2 before taking the root.`,
      },
      {
        question: r`A 4.0 μF capacitor in a power supply must store 0.80 mJ. To what voltage must it be charged?`,
        options: [r`400 V`, r`14 V`, r`20 V`, r`200 V`],
        correctAnswer: 2,
        explanation: r`From U = ½CV², V² = 2U/C = 2(0.80 × 10⁻³)/(4.0 × 10⁻⁶) = 400 V², so V = 20 V. 400 V forgets the square root, 14 V leaves out the factor of 2 before the root, and 200 V is U/C with no root and no factor of 2.`,
      },
      {
        question: r`A technician knows only two things about a charged capacitor in a welder: it contains 30 mJ of energy, and 2.0 mC sits on its positive plate. What potential difference is there between its terminals?`,
        options: [r`15 V`, r`60 V`, r`7.5 V`, r`30 V`],
        correctAnswer: 3,
        explanation: r`With Q and U known, use U = ½QV: V = 2U/Q = 2(30 mJ)/(2.0 mC) = 30 V. 15 V leaves out the factor of 2 (it uses U = QV), 60 V doubles twice, and 7.5 V halves where it should double.`,
      },
      {
        question: r`Leakage slowly drains a charged capacitor that is connected to nothing else, until the charge on its plates is one third of the starting value. Its capacitance has not changed. What fraction of the original energy is still stored?`,
        options: [r`One ninth of the original energy`, r`One third of the original energy`, r`Two thirds of the original energy`, r`One sixth of the original energy`],
        correctAnswer: 0,
        explanation: r`With C fixed, U = Q²/2C is proportional to Q², so one third of the charge leaves (1/3)² = 1/9 of the energy. One third treats the energy as proportional to Q, two thirds is the fraction of the charge that was lost, and one sixth halves the one third instead of squaring it.`,
      },
      {
        question: r`A patch of cell membrane with a capacitance of 10 pF holds 1.0 pC on each face. How much energy is stored in it?`,
        options: [r`1.0 × 10⁻¹³ J`, r`5.0 × 10⁻² J`, r`5.0 × 10⁻²⁴ J`, r`5.0 × 10⁻¹⁴ J`],
        correctAnswer: 3,
        explanation: r`U = Q²/2C = (1.0 × 10⁻¹²)²/(2 × 10 × 10⁻¹²) = (1.0 × 10⁻²⁴)/(2.0 × 10⁻¹¹) = 5.0 × 10⁻¹⁴ J. 1.0 × 10⁻¹³ J leaves out the 2, 5.0 × 10⁻² J forgets to square the charge, and 5.0 × 10⁻²⁴ J multiplies Q by C instead of dividing Q² by C.`,
      },
    ],
  },
  [r`With the battery still connected, doubling a capacitor's plate separation {{c1::halves}} both its charge and its stored energy.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A capacitor stays connected to its battery, holding 90 μC and storing 2.7 mJ. The plates are then pulled to three times their original separation. What are the new charge and stored energy?`,
        options: [r`90 μC and 8.1 mJ`, r`30 μC and 0.90 mJ`, r`30 μC and 0.30 mJ`, r`270 μC and 8.1 mJ`],
        correctAnswer: 1,
        explanation: r`The battery holds V fixed while C falls to one third, so Q = CV falls to 30 μC and U = ½CV² falls to 0.90 mJ. 90 μC and 8.1 mJ is the result for an isolated capacitor, where Q is trapped and U triples; 0.30 mJ divides the energy by 9; and 270 μC triples the charge as if C had grown.`,
      },
      {
        question: r`The plates of a 6.0 μF variable capacitor in a radio tuner are wired to a 12 V battery. With the battery still attached, a knob moves the plates to twice their original separation. How much charge moves, and in which direction?`,
        options: [r`72 μC flows off the plates`, r`36 μC flows off the plates`, r`36 μC flows onto the plates`, r`72 μC flows onto the plates`],
        correctAnswer: 1,
        explanation: r`At first Q = CV = (6.0 μF)(12 V) = 72 μC. Doubling the separation halves C to 3.0 μF while V stays 12 V, so the plates can hold only 36 μC and the other 36 μC flows back to the battery. Losing all 72 μC would leave the plates empty, and charge flowing on would need C to rise, as it does when plates move closer.`,
      },
      {
        question: r`A capacitor remains connected to its battery while its plates are moved. Its stored energy falls from 20 mJ to 4.0 mJ. How does the new plate separation compare with the old one?`,
        options: [r`It is 5 times the old separation`, r`It is 1/5 of the old separation`, r`It is 25 times the old separation`, r`It is 2.2 times the old separation`],
        correctAnswer: 0,
        explanation: r`With V fixed, U = ½CV² is proportional to C, and C is proportional to 1/d, so energy falling to one fifth means the separation is 5 times larger. One fifth of the separation would raise the energy fivefold, 25 times squares the factor, and 2.2 times takes its square root.`,
      },
      {
        question: r`An 8.0 μF capacitor is connected to a 10 V battery, and it stays connected while the plates are pulled to four times their original separation. How much energy does it store afterward?`,
        options: [r`1600 μJ`, r`400 μJ`, r`100 μJ`, r`25 μJ`],
        correctAnswer: 2,
        explanation: r`C falls to 8.0/4 = 2.0 μF with V held at 10 V, so U = ½CV² = ½(2.0 μF)(10 V)² = 100 μJ. 400 μJ is the energy before the plates moved, 1600 μJ is the isolated-capacitor result in which the energy rises fourfold, and 25 μJ divides the starting energy by 16.`,
      },
      {
        question: r`A capacitor wired to a 24 V battery holds 50 μC. With the battery still attached, the plate separation is doubled. What are the voltage across the capacitor and the charge on it afterward?`,
        options: [r`48 V and 50 μC`, r`12 V and 25 μC`, r`24 V and 25 μC`, r`24 V and 100 μC`],
        correctAnswer: 2,
        explanation: r`The battery fixes the voltage at 24 V; C halves, so Q = CV halves to 25 μC. 48 V and 50 μC describes an isolated capacitor, where the charge is trapped and the voltage doubles, 12 V lets the voltage change even though the battery holds it, and 100 μC doubles the charge as if C had doubled.`,
      },
      {
        question: r`A capacitor connected to a 1.5 V cell holds 3.0 nC. With the cell still connected, the gap between the plates is widened from 0.20 mm to 1.0 mm. How much charge does it hold now?`,
        options: [r`600 pC`, r`15 000 pC`, r`3000 pC`, r`120 pC`],
        correctAnswer: 0,
        explanation: r`The gap is 5 times wider, so C falls to one fifth while V stays 1.5 V, and Q = CV falls to 3.0 nC/5 = 0.60 nC = 600 pC. 15 000 pC multiplies by 5 instead of dividing, 3000 pC assumes the charge is trapped, as on an isolated capacitor, and 120 pC divides by 25.`,
      },
    ],
  },
  [r`The plates of a charged, isolated capacitor are pulled apart to twice their separation. What happens to $C$, $Q$, $V$, and $U$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A capacitor holding 20 μC at 10 V is disconnected from its battery. Its plates are then pulled to four times their original separation. What are the voltage and the charge afterward?`,
        options: [r`10 V and 5.0 μC`, r`2.5 V and 20 μC`, r`40 V and 20 μC`, r`40 V and 80 μC`],
        correctAnswer: 2,
        explanation: r`The charge is trapped at 20 μC, and C falls to one quarter, so V = Q/C rises fourfold to 40 V. 10 V and 5.0 μC is the battery-connected result, 2.5 V divides the voltage by 4 instead of multiplying, and 80 μC lets the trapped charge grow.`,
      },
      {
        question: r`An 8.0 μF capacitor is charged to 50 V and then disconnected, so it stores 10 mJ. Its plates are then pushed to half their original separation. How much energy does it store now?`,
        options: [r`20 mJ`, r`5.0 mJ`, r`10 mJ`, r`2.5 mJ`],
        correctAnswer: 1,
        explanation: r`Q is trapped and halving the separation doubles C, so U = Q²/2C halves to 5.0 mJ (the voltage falls to 25 V). 20 mJ uses the battery-connected rule, where U is proportional to C, 10 mJ assumes nothing changes, and 2.5 mJ halves twice.`,
      },
      {
        question: r`The plates of a charged, isolated capacitor are pulled apart until the voltage across it has risen from 12 V to 60 V. By what factor has the stored energy changed?`,
        options: [r`It is 25 times as large`, r`It is 1/5 as large`, r`It is the same as before`, r`It is 5 times as large`],
        correctAnswer: 3,
        explanation: r`The charge is trapped, so U = ½QV is proportional to V: the voltage is 5 times larger, and so is the energy, paid for by the work of pulling the plates apart. 25 times uses ½CV² while forgetting that C fell to one fifth, 1/5 inverts the change, and the energy cannot stay the same when work is done on the plates.`,
      },
      {
        question: r`A charged, isolated capacitor has a gap of 2.0 mm and a field of 3000 V/m between its plates, so it has 6.0 V across it. The gap is then widened to 6.0 mm. What are the field and the voltage now?`,
        options: [r`1000 V/m and 6.0 V`, r`9000 V/m and 18 V`, r`3000 V/m and 6.0 V`, r`3000 V/m and 18 V`],
        correctAnswer: 3,
        explanation: r`Q is trapped and C falls to one third, so V = Q/C triples to 18 V. The gap also tripled, so E = V/d = 18/(6.0 × 10⁻³) = 3000 V/m, unchanged. 1000 V/m and 6.0 V holds the voltage fixed, as a battery would, 9000 V/m triples the field along with the voltage, and 3000 V/m with 6.0 V leaves the voltage unchanged even though C fell.`,
      },
      {
        question: r`An isolated 200 pF capacitor carries 6.0 nC on each plate. Its plates are pulled to twice their original separation. What is the voltage across it afterward?`,
        options: [r`60 V`, r`15 V`, r`30 V`, r`120 V`],
        correctAnswer: 0,
        explanation: r`At first V = Q/C = (6.0 × 10⁻⁹)/(200 × 10⁻¹²) = 30 V. The charge is trapped and C halves to 100 pF, so V doubles to 60 V. 30 V is the starting value, 15 V halves it instead of doubling it, and 120 V doubles it twice.`,
      },
      {
        question: r`A capacitor holds 12 μC at 4.0 V and is then disconnected from its battery. The plates are pulled to three times their original separation. What is its capacitance now?`,
        options: [r`9.0 μF`, r`3.0 μF`, r`0.33 μF`, r`1.0 μF`],
        correctAnswer: 3,
        explanation: r`Before, C = Q/V = 12 μC/4.0 V = 3.0 μF. C is proportional to 1/d, so tripling the separation gives 1.0 μF (the trapped 12 μC now sits at 12 V). 9.0 μF multiplies by 3, 3.0 μF is the value before the plates moved, and 0.33 μF divides by 9.`,
      },
    ],
  },
  [r`A $2.0\,\mu$F capacitor charged to $100$ V is disconnected, then filled with a $\kappa = 4$ slab. What are its new voltage and stored energy?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A student measures the energy of a charged air capacitor that is connected to nothing: 12 mJ. She pushes an unknown plastic sheet in until the gap is full and measures 3.0 mJ. What is the plastic's dielectric constant?`,
        options: [r`κ = 2`, r`κ = 16`, r`κ = 0.25`, r`κ = 4`],
        correctAnswer: 3,
        explanation: r`With Q trapped, U = Q²/2C, and C rises by κ, so the energy falls by κ: κ = 12/3.0 = 4. κ = 2 takes a square root that does not belong, κ = 16 squares the ratio, and κ = 0.25 inverts it (a dielectric constant is never below 1).`,
      },
      {
        question: r`After being charged and disconnected, an air capacitor in a level sensor is flooded with an insulating liquid that fills its gap, and its voltage falls to 40% of what it was. What percentage of its original energy does it still store?`,
        options: [r`16%`, r`60%`, r`40%`, r`250%`],
        correctAnswer: 2,
        explanation: r`The charge is trapped, so U = ½QV is proportional to V: the energy falls to 40% along with the voltage (the liquid has κ = 2.5, and U = Q²/2C falls by κ). 16% squares the factor, as if U = ½CV² applied with C unchanged, 60% is the share that was lost, and 250% multiplies by κ, which is the battery-connected result.`,
      },
      {
        question: r`A 3.0 μF air capacitor in a pulsed laser supply is charged to 200 V, storing 60 mJ, and is then isolated. Oil with κ = 6 is poured in to fill the gap. How much energy is stored now?`,
        options: [r`360 mJ`, r`10 mJ`, r`60 mJ`, r`1.7 mJ`],
        correctAnswer: 1,
        explanation: r`Q is trapped, C rises sixfold, and U = Q²/2C falls sixfold: 60/6 = 10 mJ. 360 mJ uses the battery-connected rule, where the energy rises by κ, 60 mJ assumes the energy is unchanged, and 1.7 mJ divides by κ² = 36.`,
      },
      {
        question: r`An isolated capacitor filled with a κ = 3 slab has 20 V across it and stores 2.0 mJ. The slab is pulled completely out, leaving air in the gap. What are the voltage and stored energy now?`,
        options: [r`60 V and 18 mJ`, r`6.7 V and 0.67 mJ`, r`20 V and 6.0 mJ`, r`60 V and 6.0 mJ`],
        correctAnswer: 3,
        explanation: r`The charge is trapped and C falls to one third, so V = Q/C triples to 60 V and U = Q²/2C triples to 6.0 mJ; the extra energy is the work done pulling the slab out. 18 mJ multiplies the energy by 9, 6.7 V and 0.67 mJ is what inserting a slab would do, and 20 V keeps the voltage fixed as a battery would.`,
      },
      {
        question: r`An isolated air capacitor with a 1.0 mm gap has 500 V across it. A slab with κ = 5 is slid in to fill the gap. What is the electric field in the gap afterward?`,
        options: [r`5.0 × 10⁵ V/m`, r`1.0 × 10⁵ V/m`, r`2.5 × 10⁶ V/m`, r`1.0 × 10² V/m`],
        correctAnswer: 1,
        explanation: r`With Q trapped, the voltage falls by κ to 100 V, so E = V/d = 100/(1.0 × 10⁻³ m) = 1.0 × 10⁵ V/m. 5.0 × 10⁵ V/m is the field before the slab went in, 2.5 × 10⁶ V/m multiplies by κ instead of dividing, and 1.0 × 10² V/m forgets to convert the millimeter.`,
      },
      {
        question: r`A capacitor whose air-filled capacitance is 5.0 μF is charged and then disconnected. After a slab with κ = 4 is slid in to fill the gap, the voltage across it is 15 V. How much charge is on each plate?`,
        options: [r`75 μC`, r`1200 μC`, r`300 μC`, r`19 μC`],
        correctAnswer: 2,
        explanation: r`With the slab in, C = (4)(5.0 μF) = 20 μF, so Q = CV = (20 μF)(15 V) = 300 μC, the same charge it held before the slab (5.0 μF at 60 V). 75 μC pairs the air-filled capacitance with the final voltage, 1200 μC pairs the filled capacitance with the original 60 V, and 19 μC divides that 75 μC by κ.`,
      },
    ],
  },
  [r`A dielectric ($\kappa$) is slid into a capacitor that stays connected to its battery. What happens to $Q$, $V$, $E$, and $U$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A capacitor stays connected to its battery while a slab is slid in to fill the gap. Its stored energy rises from 2.0 mJ to 7.0 mJ. What is the slab's dielectric constant?`,
        options: [r`κ = 1.9`, r`κ = 12`, r`κ = 0.29`, r`κ = 3.5`],
        correctAnswer: 3,
        explanation: r`With V fixed, U = ½CV² rises in step with C, which rises by κ, so κ = 7.0/2.0 = 3.5. κ = 1.9 takes a square root that does not belong, κ = 12 squares the ratio, and κ = 0.29 inverts it.`,
      },
      {
        question: r`A 4.0 μF air capacitor stays connected to a 10 V supply while a slab with κ = 5 is slid in to fill the gap. How much energy does it store afterward?`,
        options: [r`0.20 mJ`, r`0.040 mJ`, r`5.0 mJ`, r`1.0 mJ`],
        correctAnswer: 3,
        explanation: r`V stays 10 V and C becomes 20 μF, so U = ½CV² = ½(20 × 10⁻⁶)(10)² = 1.0 × 10⁻³ J. 0.20 mJ is the energy before the slab, 0.040 mJ divides by κ as for an isolated capacitor, and 5.0 mJ multiplies by κ² = 25.`,
      },
      {
        question: r`The plates of a capacitor are 0.30 mm apart and wired to a 6.0 V battery. With the battery still attached, a sheet of mica with κ = 4 is pushed in until it occupies the whole space. How strong is the electric field in the mica?`,
        options: [r`5.0 × 10³ V/m`, r`8.0 × 10⁴ V/m`, r`2.0 × 10⁴ V/m`, r`2.0 × 10¹ V/m`],
        correctAnswer: 2,
        explanation: r`The battery holds V at 6.0 V, so E = V/d = 6.0/(3.0 × 10⁻⁴ m) = 2.0 × 10⁴ V/m, the same as before the mica went in. 5.0 × 10³ V/m divides by κ, which happens only for an isolated capacitor, 8.0 × 10⁴ V/m multiplies by κ, and 2.0 × 10¹ V/m forgets to convert millimeters.`,
      },
      {
        question: r`With its battery still attached, a capacitor has its gap filled by a slab with κ = 2.5, and afterward each plate holds 100 μC. How much charge did each plate hold before the slab went in?`,
        options: [r`250 μC`, r`40 μC`, r`100 μC`, r`16 μC`],
        correctAnswer: 1,
        explanation: r`With V fixed, Q = CV rises by κ, so the charge before was 100/2.5 = 40 μC and the battery delivered the other 60 μC. 250 μC multiplies by κ instead of dividing, 100 μC assumes the charge is trapped, as on an isolated capacitor, and 16 μC divides by κ twice.`,
      },
      {
        question: r`A capacitor filled with a κ = 3 slab is connected to a battery, holding 90 μC and storing 1.8 mJ. With the battery still connected, the slab is pulled completely out, leaving air in the gap. What are the charge and stored energy now?`,
        options: [r`90 μC and 5.4 mJ`, r`30 μC and 0.60 mJ`, r`30 μC and 0.20 mJ`, r`270 μC and 5.4 mJ`],
        correctAnswer: 1,
        explanation: r`The battery holds V fixed while C falls to one third, so both Q = CV and U = ½CV² fall to one third: 30 μC and 0.60 mJ. 90 μC and 5.4 mJ is the isolated result, with the charge trapped and the energy tripled, 0.20 mJ divides the energy by 9, and 270 μC multiplies by κ as if a slab were being added.`,
      },
      {
        question: r`A 50 pF air capacitor stays connected to a 1.5 V cell while its gap is filled with pure water, for which κ is about 80. About how much charge does each plate hold afterward?`,
        options: [r`75 pC`, r`0.94 pC`, r`4000 pC`, r`6000 pC`],
        correctAnswer: 3,
        explanation: r`C becomes (80)(50 pF) = 4000 pF with V held at 1.5 V, so Q = CV = (4000 pF)(1.5 V) = 6000 pC. 75 pC is the charge before the water went in, 0.94 pC divides that by κ, and 4000 pC is the new capacitance with the voltage left out.`,
      },
    ],
  },
  [r`Capacitance is the charge stored per volt, $C = Q/V$, measured in {{c1::farads}} ($1\text{ F} = 1\text{ C/V}$).`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 220 μF capacitor in a power supply is charged to 5.0 V. How much charge is on each plate?`,
        options: [r`0.044 mC`, r`1100 mC`, r`11 mC`, r`1.1 mC`],
        correctAnswer: 3,
        explanation: r`Q = CV = (220 μF)(5.0 V) = 1100 μC = 1.1 mC. 0.044 mC divides the capacitance by the voltage, 1100 mC labels the microcoulombs as millicoulombs, and 11 mC slips a power of ten.`,
      },
      {
        question: r`A defibrillator's 50 μF capacitor must hold 0.10 C on each plate. What voltage is needed across it?`,
        options: [r`5.0 V`, r`0.0020 V`, r`200 V`, r`2000 V`],
        correctAnswer: 3,
        explanation: r`V = Q/C = 0.10/(50 × 10⁻⁶) = 2000 V. 5.0 V multiplies 0.10 by 50 instead of dividing, 0.0020 V divides by 50 without the 10⁻⁶ for micro, and 200 V slips a power of ten.`,
      },
      {
        question: r`A patch of cell membrane holds 1.4 pC of separated charge on each face when the voltage across it is 70 mV. What is the patch's capacitance?`,
        options: [r`0.020 pF`, r`20 pF`, r`0.098 pF`, r`50 pF`],
        correctAnswer: 1,
        explanation: r`C = Q/V = 1.4 × 10⁻¹² C ÷ 0.070 V = 2.0 × 10⁻¹¹ F = 20 pF. 0.020 pF divides by 70 without converting mV to V, 0.098 pF multiplies charge by voltage, and 50 pF comes from inverting the ratio, 70/1.4.`,
      },
      {
        question: r`Capacitors X and Y are each connected to the same battery until fully charged. Each plate of X ends up holding 3 times the charge that each plate of Y holds. How do their capacitances compare?`,
        options: [r`X has 1/3 the capacitance of Y`, r`X has 3 times the capacitance of Y`, r`X has 9 times the capacitance of Y`, r`X has the same capacitance as Y`],
        correctAnswer: 1,
        explanation: r`C = Q/V, and both have the same V, so the capacitance is proportional to the charge held: X has 3 times the capacitance. One third inverts the ratio, 9 times squares it, and equal capacitances on the same battery would hold equal charges.`,
      },
      {
        question: r`For one capacitor, a graph of the charge on each plate against the voltage across it is a straight line through the origin and through the point (4.0 V, 12 μC). How much charge is on each plate at 10 V?`,
        options: [r`30 μC`, r`4.8 μC`, r`120 μC`, r`18 μC`],
        correctAnswer: 0,
        explanation: r`The slope of the line is the capacitance, C = Q/V = 12 μC/4.0 V = 3.0 μF, so at 10 V each plate holds (3.0 μF)(10 V) = 30 μC. 4.8 μC scales the charge down by 4.0/10 instead of up, 120 μC multiplies 12 by 10, and 18 μC adds 6.0 to the charge because 6.0 V was added.`,
      },
      {
        question: r`A 2.0 μF capacitor has 3.0 V across it. A charging circuit then adds 8.0 μC to the charge on each plate. What is the voltage across it now?`,
        options: [r`4.0 V`, r`7.0 V`, r`19 V`, r`11 V`],
        correctAnswer: 1,
        explanation: r`The added charge raises the voltage by ΔV = ΔQ/C = 8.0 μC/2.0 μF = 4.0 V, so the new voltage is 3.0 + 4.0 = 7.0 V. 4.0 V is only the change, 19 V multiplies 8.0 by 2.0 instead of dividing, and 11 V adds 8.0 μC to 3.0 V as if they were the same kind of quantity.`,
      },
    ],
  },
  [r`A 12 V battery with internal resistance 1.0 Ω is connected to an external 5.0 Ω resistor. What is the terminal voltage?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 9.0 V battery with an internal resistance of 0.50 Ω is connected to a 4.0 Ω heating element. What is the battery's terminal voltage?`,
        options: [r`8.0 V`, r`9.0 V`, r`1.0 V`, r`10 V`],
        correctAnswer: 0,
        explanation: r`I = ε/(R + r) = 9.0/4.5 = 2.0 A, so V = ε − Ir = 9.0 − (2.0)(0.50) = 8.0 V, which also equals IR = (2.0)(4.0). 9.0 V ignores the internal drop, 1.0 V is the internal drop itself, and 10 V adds the drop instead of subtracting it.`,
      },
      {
        question: r`A battery has an EMF of 12 V and an internal resistance of 2.0 Ω. What load resistance connected across it makes its terminal voltage 9.0 V?`,
        options: [r`8.0 Ω`, r`6.0 Ω`, r`4.5 Ω`, r`0.67 Ω`],
        correctAnswer: 1,
        explanation: r`The internal drop must be 12 − 9.0 = 3.0 V, so I = 3.0/2.0 = 1.5 A, and the load has the terminal voltage across it: R = 9.0/1.5 = 6.0 Ω. 8.0 Ω divides the whole EMF by the current, 4.5 Ω divides 9.0 V by the 2.0 Ω, and 0.67 Ω inverts the 9.0 to 3.0 voltage ratio.`,
      },
      {
        question: r`A battery is connected to a load whose resistance is 4 times the battery's internal resistance. What fraction of the EMF appears as terminal voltage?`,
        options: [r`0.75 of the EMF`, r`0.80 of the EMF`, r`0.25 of the EMF`, r`0.20 of the EMF`],
        correctAnswer: 1,
        explanation: r`The load and the internal resistance carry the same current, so the terminal voltage is ε·R/(R + r) = ε(4r)/(5r) = 0.80ε. 0.20 is the share lost inside the battery, and 0.75 and 0.25 compare 4r with 3r or r with 4r instead of using the total 5r.`,
      },
      {
        question: r`A phone cell has an EMF of 3.7 V and an internal resistance of 100 mΩ. It is connected to a 1.75 Ω load. What is its terminal voltage?`,
        options: [r`3.7 V`, r`0.20 V`, r`0.064 V`, r`3.5 V`],
        correctAnswer: 3,
        explanation: r`With r = 0.100 Ω, I = 3.7/(1.75 + 0.100) = 2.0 A and V = 3.7 − (2.0)(0.100) = 3.5 V. 3.7 V ignores the internal drop, 0.20 V is the internal drop itself, and 0.064 V treats the 100 mΩ as 100 Ω.`,
      },
      {
        question: r`An 18 V battery with an internal resistance of 1.0 Ω is connected to two 4.0 Ω heaters wired in series. What is the battery's terminal voltage?`,
        options: [r`8.0 V`, r`16 V`, r`18 V`, r`2.0 V`],
        correctAnswer: 1,
        explanation: r`The external resistance is 4.0 + 4.0 = 8.0 Ω, so I = 18/(8.0 + 1.0) = 2.0 A and V = 18 − (2.0)(1.0) = 16 V. 8.0 V is the voltage across just one heater, 18 V ignores the internal drop, and 2.0 V is the internal drop itself.`,
      },
      {
        question: r`A 6.0 Ω resistor connected across a battery has 3.0 V across it. The battery's internal resistance is 2.0 Ω. What is the battery's EMF?`,
        options: [r`3.0 V`, r`5.0 V`, r`2.0 V`, r`4.0 V`],
        correctAnswer: 3,
        explanation: r`The current is I = 3.0/6.0 = 0.50 A, so the internal drop is (0.50)(2.0) = 1.0 V and ε = V + Ir = 3.0 + 1.0 = 4.0 V. 3.0 V is the terminal voltage, 5.0 V adds the 2.0 Ω to the 3.0 V directly, and 2.0 V subtracts the internal drop instead of adding it.`,
      },
    ],
  },
  [r`A battery of emf $12$ V and internal resistance $0.5\,\Omega$ delivers $4$ A. What is its terminal voltage?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A battery with an EMF of 9.0 V and an internal resistance of 0.40 Ω delivers 5.0 A to a pump. What is its terminal voltage?`,
        options: [r`11 V`, r`7.0 V`, r`2.0 V`, r`9.0 V`],
        correctAnswer: 1,
        explanation: r`V = ε − Ir = 9.0 − (5.0)(0.40) = 7.0 V; the missing 2.0 V is dropped inside the battery. 11 V adds the internal drop, which is right only while a battery is being charged, 2.0 V is the drop itself, and 9.0 V ignores it.`,
      },
      {
        question: r`A car battery has an EMF of 12.6 V and an internal resistance of 0.020 Ω. While the starter runs, the terminal voltage is 9.6 V. What current is the battery delivering?`,
        options: [r`150 A`, r`480 A`, r`630 A`, r`0.060 A`],
        correctAnswer: 0,
        explanation: r`The internal drop is 12.6 − 9.6 = 3.0 V, so I = 3.0/0.020 = 150 A. 480 A divides the terminal voltage by r, 630 A divides the whole EMF by r, and 0.060 A multiplies 3.0 by 0.020 instead of dividing.`,
      },
      {
        question: r`A battery measures 24 V at its terminals with no current flowing and 22 V while it delivers 4.0 A. What is its internal resistance?`,
        options: [r`5.5 Ω`, r`0.50 Ω`, r`6.0 Ω`, r`2.0 Ω`],
        correctAnswer: 1,
        explanation: r`With no current the terminals show the EMF, 24 V. At 4.0 A the internal drop is 24 − 22 = 2.0 V, so r = 2.0/4.0 = 0.50 Ω. 5.5 Ω is 22/4.0, the load's resistance, 6.0 Ω divides the EMF by the current, and 2.0 Ω inverts the ratio.`,
      },
      {
        question: r`A battery with an EMF of 12.0 V shows 11.4 V at its terminals while delivering 3.0 A. What will its terminal voltage be while it delivers 9.0 A?`,
        options: [r`3.8 V`, r`11.4 V`, r`10.2 V`, r`10.8 V`],
        correctAnswer: 2,
        explanation: r`The drop at 3.0 A is 0.60 V, so r = 0.20 Ω; at 9.0 A the drop is (9.0)(0.20) = 1.8 V and V = 12.0 − 1.8 = 10.2 V. 3.8 V divides the terminal voltage by 3, 11.4 V assumes the terminal voltage does not depend on current, and 10.8 V only doubles the drop when the current has tripled.`,
      },
      {
        question: r`A 1.50 V cell with an internal resistance of 0.50 Ω supplies 200 mA to a small radio. What is its terminal voltage?`,
        options: [r`1.60 V`, r`0.10 V`, r`1.40 V`, r`1.00 V`],
        correctAnswer: 2,
        explanation: r`V = ε − Ir = 1.50 − (0.200 A)(0.50 Ω) = 1.40 V. 1.60 V adds the internal drop instead of subtracting it, 0.10 V is the drop itself, and 1.00 V subtracts the 0.50 Ω directly as if it were a voltage.`,
      },
      {
        question: r`A battery with an EMF of 10 V and an internal resistance of 0.50 Ω delivers 5.0 A. What percentage of its EMF appears across its terminals?`,
        options: [r`75%`, r`25%`, r`95%`, r`50%`],
        correctAnswer: 0,
        explanation: r`The internal drop is Ir = (5.0)(0.50) = 2.5 V, so the terminal voltage is 7.5 V, which is 75% of the EMF. 25% is the share lost inside the battery, 95% subtracts 0.50 from 10 as if the resistance were a voltage, and 50% subtracts 5.0, the current.`,
      },
    ],
  },
  [r`Why do car headlights dim when the starter motor engages?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A car's headlights dim each time the starter motor engages. Which change would make the dimming less noticeable?`,
        options: [r`A battery with the same EMF and a higher internal resistance`, r`A starter motor that draws a larger current from the battery`, r`A longer, thinner cable between the battery and the headlights`, r`A battery with the same EMF and a lower internal resistance`],
        correctAnswer: 3,
        explanation: r`The dimming comes from the drop Ir inside the battery when the starter's large current flows, so a smaller r means a smaller fall in terminal voltage. A higher internal resistance or a starter that draws more current makes Ir larger, and a longer, thinner cable only adds resistance in series with the headlights without reducing the sag.`,
      },
      {
        question: r`In a house, the lamps and an air conditioner are connected in parallel to a supply line that has a small resistance of its own. The lamps dim for a moment as the air conditioner's motor starts. What best explains this?`,
        options: [r`The larger total current raises the voltage drop in the supply line`, r`The motor takes current that had been flowing through the lamps`, r`The motor lowers the EMF of the supply while it is starting up`, r`The larger total current raises the resistance of the lamp filaments`],
        correctAnswer: 0,
        explanation: r`This is the headlight effect again: the motor's starting current adds to the total, the drop across the supply's own resistance grows, and less voltage is left across everything in parallel. The motor does not steal current from a parallel branch held at fixed voltage, the supply's EMF is unchanged, and the lamps dim because of lower voltage, not because their filaments change.`,
      },
    ],
  },
  [r`What error appears when a real voltmeter with finite resistance is placed across a large resistor?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 2.0 MΩ resistor is in series with another resistor across an ideal battery, and the voltage across the 2.0 MΩ resistor is to be measured. Two voltmeters are available, with resistances of 0.10 MΩ and 1000 MΩ. Which reads closer to the voltage that was there before a meter was attached, and how is its reading off?`,
        options: [r`The 1000 MΩ meter, which reads slightly too high`, r`The 0.10 MΩ meter, which reads slightly too low`, r`The 0.10 MΩ meter, which reads slightly too high`, r`The 1000 MΩ meter, which reads slightly too low`],
        correctAnswer: 3,
        explanation: r`Any real voltmeter in parallel with the resistor lowers the resistance of that section, so the section takes a smaller share of the battery voltage and the reading is low. The 1000 MΩ meter barely changes 2.0 MΩ, so its error is tiny; the 0.10 MΩ meter pulls the section below 0.10 MΩ and reads far too low. Loading never makes the reading too high.`,
      },
      {
        question: r`A voltmeter with a resistance of 1.0 MΩ is used in two circuits. In the first it is connected across one of two 100 Ω resistors in series across an ideal battery; in the second, across one of two 1.0 MΩ resistors in series across an ideal battery. Where is the loading error significant, and why?`,
        options: [r`Across the 100 Ω resistor, where the meter halves the local resistance`, r`Across the 1.0 MΩ resistor, where the meter doubles the local resistance`, r`Across the 1.0 MΩ resistor, where the meter halves the local resistance`, r`Across both equally, since the meter has the same resistance each time`],
        correctAnswer: 2,
        explanation: r`The meter is in parallel with the resistor it measures. Next to 100 Ω, a 1.0 MΩ meter changes the combined resistance by only about 0.01%, but next to 1.0 MΩ it cuts the combination to 0.50 MΩ, so that section takes a third of the voltage instead of half. A parallel path always lowers resistance, never doubles it, and the error depends on the meter's resistance relative to the resistor's.`,
      },
    ],
  },
  [r`A voltmeter is placed {{c1::in parallel}} with the element and must have very high resistance.`]: {
    kind: 'concept',
    more: [
      {
        question: r`An ideal battery, a switch, resistor R1 and resistor R2 are connected in series in one loop. How should a voltmeter be attached to measure the voltage across R2?`,
        options: [r`One lead on each end of R2, with the loop left intact`, r`One lead on each end of R1, with the loop left intact`, r`The loop is cut beside R2, and the meter fills the gap`, r`Both leads on the same end of R2, with the loop intact`],
        correctAnswer: 0,
        explanation: r`A voltmeter goes in parallel with the element, one lead on each side, so it sees the same potential difference, and the circuit itself is not broken. Leads across R1 measure R1's voltage instead, cutting the loop puts the meter in series, where it stops the current, and two leads on the same point read 0 V.`,
      },
      {
        question: r`A resistor is in series with a second resistor across an ideal battery, and a voltmeter is connected in parallel with the first resistor. If the meter is swapped for ones of lower and lower resistance, what happens?`,
        options: [r`Less current diverts through the meter, and the reading rises above the undisturbed voltage`, r`More current diverts through the meter, and the reading falls below the undisturbed voltage`, r`More current diverts through the meter, and the reading rises above the undisturbed voltage`, r`Less current diverts through the meter, and the reading stays at the undisturbed voltage`],
        correctAnswer: 1,
        explanation: r`A lower-resistance meter carries more current and lowers the resistance of the section it is in parallel with, so that section takes a smaller share of the battery voltage and the reading falls. This is why a voltmeter needs a very high resistance. Lower resistance cannot mean less diverted current, and a parallel path never raises the voltage across the section.`,
      },
    ],
  },
  [r`An ammeter is placed {{c1::in series}} and must have very low resistance so it barely perturbs the circuit.`]: {
    kind: 'concept',
    more: [
      {
        question: r`An ideal battery runs lamp 1 and lamp 2 connected in parallel. A student wants the current through lamp 2 alone. Where does the ammeter go?`,
        options: [r`In lamp 1's branch, in series with lamp 1`, r`Beside the battery, in series with the battery`, r`Across lamp 2's ends, in parallel with lamp 2`, r`In lamp 2's branch, in series with lamp 2`],
        correctAnswer: 3,
        explanation: r`An ammeter reads the current that passes through it, so it must sit in series with lamp 2 inside that lamp's own branch. In lamp 1's branch it reads lamp 1's current, next to the battery it reads the total for both lamps, and in parallel with lamp 2 its tiny resistance would short the lamp and the battery.`,
      },
      {
        question: r`An ideal 10 V battery drives a 10 Ω resistor, so 1.0 A flows. To check this, a student can insert in series either meter X, with a resistance of 0.10 Ω, or meter Y, with a resistance of 10 Ω. Which meter reads closer to 1.0 A, and what does it read?`,
        options: [r`Meter Y, which reads about 0.99 A`, r`Meter X, which reads about 0.50 A`, r`Meter X, which reads about 0.99 A`, r`Meter Y, which reads about 0.50 A`],
        correctAnswer: 2,
        explanation: r`A series meter adds its resistance to the loop. Meter X gives 10/(10 + 0.10) ≈ 0.99 A, almost the undisturbed current, while meter Y gives 10/(10 + 10) = 0.50 A, halving the very current it is meant to measure. So the low-resistance meter is the better ammeter, and the answers that swap the two readings or pick meter Y are wrong.`,
      },
    ],
  },
  [r`EMF is not a force; it is the {{c1::energy per unit charge}} supplied by a source, measured in volts.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A solar cell gives 3.0 mJ of electrical energy to every 5.0 mC of charge that passes through it. What is its EMF?`,
        options: [r`1.7 V`, r`15 V`, r`0.60 V`, r`0.015 V`],
        correctAnswer: 2,
        explanation: r`EMF is energy per unit charge: ε = W/q = 3.0 mJ ÷ 5.0 mC = 0.60 V. 1.7 V inverts the ratio, and 15 V and 0.015 V multiply energy by charge instead of dividing.`,
      },
      {
        question: r`Over its working life, a 1.5 V cell moves a total of 400 C of charge through itself. How much energy does its chemistry supply in total?`,
        options: [r`600 J`, r`270 J`, r`400 J`, r`1.5 J`],
        correctAnswer: 0,
        explanation: r`Each coulomb receives 1.5 J, so W = qε = (400 C)(1.5 V) = 600 J. 270 J divides the charge by the EMF, 400 J treats coulombs as joules, and 1.5 J is the energy given to a single coulomb.`,
      },
      {
        question: r`The chemistry in a 12 V battery supplies 3600 J of energy during one job. How much charge passed through the battery?`,
        options: [r`300 C`, r`43 200 C`, r`3600 C`, r`0.0033 C`],
        correctAnswer: 0,
        explanation: r`A 12 V source gives 12 J to each coulomb, so q = W/ε = 3600/12 = 300 C. 43 200 C multiplies instead of dividing, 3600 C treats joules as coulombs, and 0.0033 C inverts the ratio.`,
      },
      {
        question: r`A cell has an EMF of 2.0 V. How much energy does it supply to each electron that passes through it? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`8.0 × 10⁻²⁰ J`, r`1.6 × 10⁻¹⁹ J`, r`1.3 × 10¹⁹ J`, r`3.2 × 10⁻¹⁹ J`],
        correctAnswer: 3,
        explanation: r`Energy is charge times EMF: W = qε = 1.6 × 10⁻¹⁹ C × 2.0 V = 3.2 × 10⁻¹⁹ J. 8.0 × 10⁻²⁰ J divides the charge by the EMF, 1.6 × 10⁻¹⁹ J is the result for a 1.0 V source, and 1.3 × 10¹⁹ J divides the EMF by the charge.`,
      },
      {
        question: r`A 9.0 V battery and a 1.5 V cell each move the same amount of charge through themselves. How does the energy supplied by the battery compare with the energy supplied by the cell?`,
        options: [r`It is 1/6 as large`, r`It is the same amount`, r`It is 6 times as large`, r`It is 7.5 times as large`],
        correctAnswer: 2,
        explanation: r`W = qε, so for equal charge the energy is proportional to the EMF: 9.0/1.5 = 6. One sixth inverts the ratio, equal energy would need equal EMFs because the charge is already the same, and 7.5 is the difference between the two EMFs, not their ratio.`,
      },
      {
        question: r`An electric eel's organ acts as a source with an EMF of 500 V and drives a 0.80 A pulse of current for 2.0 ms. How much energy does the organ supply during the pulse?`,
        options: [r`800 J`, r`400 J`, r`0.80 J`, r`0.0016 J`],
        correctAnswer: 2,
        explanation: r`The charge moved is q = It = (0.80 A)(2.0 × 10⁻³ s) = 1.6 × 10⁻³ C, and each coulomb receives 500 J, so W = qε = 0.80 J. 800 J forgets to convert milliseconds, 400 J is the EMF times the current, which is power, and 0.0016 J is the charge with the EMF left out.`,
      },
    ],
  },
  [r`Adding another parallel branch raises total current, so the internal $Ir$ drop grows and terminal voltage {{c1::falls}}.`]: {
    kind: 'concept',
    more: [
      {
        question: r`A battery with a noticeable internal resistance runs three identical lamps connected in parallel. One lamp burns out, leaving its branch open. What happens to the other two lamps?`,
        options: [r`They brighten slightly, because the internal Ir drop gets smaller`, r`They dim slightly, because the internal Ir drop gets larger`, r`They stay the same, because parallel branches are independent`, r`They go out completely, because the open branch breaks the loop`],
        correctAnswer: 0,
        explanation: r`Removing a branch raises the load resistance, so the total current falls, the internal drop Ir shrinks, and the terminal voltage across the remaining lamps rises. This is the reverse of adding a branch. The drop does not grow when current falls, branches are independent only for a source with no internal resistance, and an open branch stops the current only in a series loop, not in the other parallel branches.`,
      },
      {
        question: r`A battery with a noticeable internal resistance runs two identical lamps connected in parallel. A third identical lamp is then added in parallel. How do the battery's total current and the current in each original lamp change?`,
        options: [r`The total current rises, and each original lamp's current rises`, r`The total current falls, and each original lamp's current falls`, r`The total current stays fixed, and each original lamp's current falls`, r`The total current rises, and each original lamp's current falls`],
        correctAnswer: 3,
        explanation: r`The extra branch lowers the load resistance, so the battery's total current rises; the larger Ir drop lowers the terminal voltage, so each original lamp, with less voltage across it, carries less current. Each lamp's current cannot rise while its voltage falls, and the total cannot fall or stay fixed when the load resistance drops.`,
      },
    ],
  },
  [r`When is a battery's terminal voltage greater than its emf?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A car battery has an EMF of 12.0 V and an internal resistance of 0.050 Ω. An alternator charges it at 40 A. What is the voltage across its terminals?`,
        options: [r`10.0 V`, r`12.0 V`, r`2.0 V`, r`14.0 V`],
        correctAnswer: 3,
        explanation: r`During charging, current is forced backward through the battery, so the internal drop adds: V = ε + Ir = 12.0 + (40)(0.050) = 14.0 V. 10.0 V subtracts the drop, which is the discharge rule, 12.0 V ignores it, and 2.0 V is the drop alone.`,
      },
      {
        question: r`An electric-bike pack with an EMF of 8.0 V takes 0.50 A from its charger, and the charger's display shows 8.4 V at the pack's terminals. How large is the pack's internal resistance?`,
        options: [r`16 Ω`, r`17 Ω`, r`0.20 Ω`, r`0.80 Ω`],
        correctAnswer: 3,
        explanation: r`While charging, V = ε + Ir, so r = (8.4 − 8.0)/0.50 = 0.80 Ω. 16 Ω divides the EMF by the current, 17 Ω divides the terminal voltage by the current, and 0.20 Ω multiplies the 0.40 V by 0.50 instead of dividing.`,
      },
      {
        question: r`A laptop's charging circuit pushes 2.0 A into a lithium cell and records 4.2 V at the cell's terminals. The cell's internal resistance is 0.15 Ω. What is the cell's EMF?`,
        options: [r`4.5 V`, r`4.2 V`, r`3.9 V`, r`0.30 V`],
        correctAnswer: 2,
        explanation: r`During charging the terminal voltage exceeds the EMF by Ir: ε = V − Ir = 4.2 − (2.0)(0.15) = 3.9 V. 4.5 V adds the drop, which is how to find the EMF of a discharging cell, 4.2 V ignores the drop, and 0.30 V is the drop alone.`,
      },
      {
        question: r`A rechargeable coin cell in a watch has an EMF of 3.0 V and an internal resistance of 10 Ω. A solar charging chip keeps 3.2 V on the cell's terminals. How much current flows into the cell?`,
        options: [r`320 mA`, r`20 mA`, r`620 mA`, r`2.0 mA`],
        correctAnswer: 1,
        explanation: r`From V = ε + Ir, I = (3.2 − 3.0)/10 = 0.020 A = 20 mA. 320 mA divides the whole terminal voltage by r, 620 mA adds the two voltages before dividing, and 2.0 mA slips a power of ten.`,
      },
      {
        question: r`A battery with an EMF of 12 V and an internal resistance of 0.50 Ω is charged at 4.0 A. What is its terminal voltage, and how much electrical power does the charger deliver to the battery?`,
        options: [r`10 V and 40 W`, r`12 V and 48 W`, r`14 V and 56 W`, r`14 V and 8.0 W`],
        correctAnswer: 2,
        explanation: r`V = ε + Ir = 12 + (4.0)(0.50) = 14 V, and the charger delivers P = IV = (4.0)(14) = 56 W: 48 W is stored chemically and 8.0 W heats the battery. 10 V and 40 W uses the discharge rule, 12 V and 48 W ignores the internal drop, and 8.0 W is only the heating in the internal resistance.`,
      },
      {
        question: r`A battery with an EMF of 9.0 V shows 9.3 V at its terminals while being charged at 1.0 A. What will its terminal voltage be while it is charged at 3.0 A?`,
        options: [r`27.9 V`, r`9.9 V`, r`8.1 V`, r`9.3 V`],
        correctAnswer: 1,
        explanation: r`At 1.0 A the excess over the EMF is Ir = 0.30 V, so r = 0.30 Ω; at 3.0 A the excess is 0.90 V and V = 9.0 + 0.90 = 9.9 V. 27.9 V triples the whole terminal voltage, 8.1 V subtracts the drop as for discharge, and 9.3 V assumes the terminal voltage does not depend on current.`,
      },
    ],
  },
}
