import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-circ2`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`A bare wire shorts one branch of a parallel bank. What happens?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A technician measures 0 V across every one of four heaters wired in parallel behind a series resistor, yet the series resistor is hot and carries more current than normal. Which single fault explains all of these readings?`,
        options: [r`One heater has burned out and left its branch open`, r`A bare wire is bridging the terminals of one heater`, r`The series resistor has burned out and opened up`, r`The battery has gone flat and supplies no voltage`],
        correctAnswer: 1,
        explanation: r`A wire across one heater joins the two nodes that every heater shares, so all four read 0 V, and the lost bank resistance lets more current through the series resistor. An open heater would leave voltage across the other three, and an open series resistor or a flat battery would leave the series resistor with no current at all.`,
      },
      {
        question: r`A 12 V power pack, treated as ideal, is wired to a 2 Ω ballast, in series with a 4 Ω, a 6 Ω and a 12 Ω heating strip connected in parallel. A dropped paperclip with almost no resistance then touches both ends of the 12 Ω strip. What are the voltage on the strips and the power in the 2 Ω ballast now?`,
        options: [r`6 V on the strips; 18 W in the 2 Ω`, r`0 V on the strips; 0 W in the 2 Ω`, r`12 V on the strips; 72 W in the 2 Ω`, r`0 V on the strips; 72 W in the 2 Ω`],
        correctAnswer: 3,
        explanation: r`The paperclip joins the two nodes shared by all three parallel strips, so every strip has 0 V and the full 12 V sits across the 2 Ω: P = 12²/2 = 72 W. The 6 V and 18 W pair is the circuit before the short, 0 W assumes the current stops instead of rising, and 12 V on the strips ignores that shorted parallel strips have no voltage across them.`,
      },
    ],
  },
  [r`How does current between two electrodes divide among the body's tissues?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Two electrodes on a forearm hold the same voltage across two parallel paths: muscle at 300 Ω and bone at 2700 Ω. If the muscle path carries 18 mA, what current does the bone path carry?`,
        options: [r`162 mA`, r`18 mA`, r`2 mA`, r`6 mA`],
        correctAnswer: 2,
        explanation: r`Parallel paths share one voltage, so current is inversely proportional to resistance: the bone has 9 times the resistance and carries 18/9 = 2 mA. 162 mA multiplies by 9 instead of dividing, 18 mA assumes an even split, and 6 mA divides by 3 rather than by the resistance ratio of 9.`,
      },
      {
        question: r`During electrotherapy, a blood-rich path and a fat path connect the same two electrodes in parallel. The blood-rich path carries 15 mA and the fat path carries 3 mA. If the blood-rich path has a resistance of 400 Ω, what is the resistance of the fat path?`,
        options: [r`2000 Ω`, r`80 Ω`, r`1600 Ω`, r`400 Ω`],
        correctAnswer: 0,
        explanation: r`The fat carries one fifth of the current at the same voltage, so it has 5 times the resistance: 5 × 400 = 2000 Ω (both paths have 6 V). 80 Ω inverts the ratio, 1600 Ω uses the current difference of 12 mA to get a factor of 4, and 400 Ω would give equal currents.`,
      },
      {
        question: r`A total of 20 mA passes between two skin electrodes and splits between two parallel routes, a muscle route of 200 Ω and a fat route of 800 Ω. How much of that current goes through the fat?`,
        options: [r`16 mA`, r`10 mA`, r`5 mA`, r`4 mA`],
        correctAnswer: 3,
        explanation: r`Current divides inversely with resistance, so the fat gets 200/(200 + 800) = 1/5 of 20 mA, which is 4 mA. 16 mA is the muscle's share, 10 mA assumes an even split, and 5 mA divides the total by the resistance ratio of 4 instead of using the fraction 1/5.`,
      },
      {
        question: r`In a model of a limb, three routes connect one pair of skin contacts in parallel: a vessel route of 100 Ω, a muscle route of 200 Ω and a fatty route of 200 Ω. What share of the whole current goes by the vessel route?`,
        options: [r`one half`, r`one fifth`, r`one third`, r`four fifths`],
        correctAnswer: 0,
        explanation: r`With one shared voltage the currents go as 1/R, in the ratio 2 : 1 : 1, so the vessel route carries 2 of 4 parts, one half. One fifth uses the vessel route's share of the resistances (100 of 500 Ω), four fifths is the remainder of that wrong share, and one third assumes three equal currents.`,
      },
      {
        question: r`Electrodes hold 6 V across a region where a 2 kΩ muscle path is in parallel with a 12 kΩ fat path. How much more current does the muscle carry than the fat?`,
        options: [r`3.5 mA`, r`2.5 A`, r`2.5 mA`, r`0.5 mA`],
        correctAnswer: 2,
        explanation: r`Each path has the full 6 V: the muscle carries 6/2000 = 3 mA and the fat 6/12 000 = 0.5 mA, a difference of 2.5 mA. 3.5 mA is the sum of the two, 2.5 A ignores the kilo in kΩ, and 0.5 mA is just the fat's own current.`,
      },
      {
        question: r`A strip of bone has 50 times the resistance of a blood-filled vessel that is in parallel with it between the same two electrodes. If the bone carries 0.2 mA, what total current passes between the electrodes?`,
        options: [r`10.0 mA`, r`10.2 mA`, r`0.204 mA`, r`0.4 mA`],
        correctAnswer: 1,
        explanation: r`At the same voltage the vessel, with 1/50 of the resistance, carries 50 × 0.2 = 10 mA, and the total is 10 + 0.2 = 10.2 mA. 10.0 mA leaves out the bone's own current, 0.204 mA gives the vessel 1/50 of the bone's current instead of 50 times, and 0.4 mA assumes equal currents.`,
      },
    ],
  },
  [r`A resistor is in series with a parallel pair. How do you find the total current?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 36 V ideal battery connects to a 6 Ω resistor, which leads to a 12 Ω and a 4 Ω resistor joined in parallel. How much current leaves the battery?`,
        options: [r`4.0 A`, r`1.6 A`, r`12 A`, r`6.0 A`],
        correctAnswer: 0,
        explanation: r`The pair collapses to (12 × 4)/(12 + 4) = 3 Ω, the series resistor makes 9 Ω, and I = 36/9 = 4.0 A. 1.6 A adds all three resistors as if in series (22 Ω), 12 A uses only the 3 Ω pair, and 6.0 A uses only the 6 Ω series resistor.`,
      },
      {
        question: r`In a toy car, 2 A leaves the cell pack, crosses a 5 Ω speed-control coil, and then divides between a 20 Ω motor and a 30 Ω lamp connected in parallel before returning. Treating the cell pack as ideal, what is its voltage?`,
        options: [r`110 V`, r`24 V`, r`10 V`, r`34 V`],
        correctAnswer: 3,
        explanation: r`The motor and lamp together are (20 × 30)/(20 + 30) = 12 Ω, so the equivalent resistance is 5 + 12 = 17 Ω and V = 2 × 17 = 34 V. 110 V adds all three as if in series (55 Ω), 24 V counts only the motor and lamp, and 10 V counts only the 5 Ω coil.`,
      },
      {
        question: r`A dimmer of unknown resistance R is in series with two lamps, 40 Ω and 10 Ω, that are in parallel with each other. A 12 V ideal power pack then delivers 0.5 A to the whole arrangement. What is R?`,
        options: [r`16 Ω`, r`24 Ω`, r`32 Ω`, r`8 Ω`],
        correctAnswer: 0,
        explanation: r`The whole circuit is 12/0.5 = 24 Ω and the two lamps together are (40 × 10)/50 = 8 Ω, so R = 24 − 8 = 16 Ω. 24 Ω is the equivalent resistance without the lamps taken off, 32 Ω adds the lamps' 8 Ω instead of subtracting it, and 8 Ω is the lamp pair itself.`,
      },
      {
        question: r`A sensor board runs from a 9 V ideal cell: a 1 kΩ protection resistor is in series with a 3 kΩ thermistor and a 6 kΩ photocell that are in parallel with each other. What total current does the cell supply?`,
        options: [r`3 A`, r`0.9 mA`, r`4.5 mA`, r`3 mA`],
        correctAnswer: 3,
        explanation: r`The thermistor and photocell together are (3 × 6)/(3 + 6) = 2 kΩ, the total is 3 kΩ, and I = 9 V / 3000 Ω = 3 mA. 3 A drops the kilo, 0.9 mA adds all three in series (10 kΩ), and 4.5 mA uses that 2 kΩ alone.`,
      },
      {
        question: r`An ideal 40 V supply feeds a 10 Ω heater in series with two 12 Ω fans that are wired in parallel with each other. What current does the supply deliver?`,
        options: [r`1.2 A`, r`1.8 A`, r`2.5 A`, r`4.0 A`],
        correctAnswer: 2,
        explanation: r`Two equal 12 Ω branches collapse to 6 Ω, the total is 10 + 6 = 16 Ω, and I = 40/16 = 2.5 A. 1.2 A adds 10 + 12 + 12 = 34 Ω as if all were in series, 1.8 A counts the pair as 12 Ω, and 4.0 A leaves the pair out.`,
      },
      {
        question: r`A cell pack with no internal resistance drives a 2 Ω fuse link in series with two 4 Ω glow plugs that are in parallel with each other. The 2 Ω link is swapped for a 6 Ω one. How does the total current from the pack change?`,
        options: [r`It falls to one third of its old value`, r`It falls to one half of its old value`, r`It falls to one quarter of its old value`, r`It stays the same as its old value`],
        correctAnswer: 1,
        explanation: r`The two glow plugs together are 2 Ω both times, so the equivalent resistance goes from 2 + 2 = 4 Ω to 6 + 2 = 8 Ω and the current halves. One third compares only the links (2 Ω to 6 Ω) and forgets the glow plugs, one quarter squares the factor, and no change would need the same equivalent resistance.`,
      },
    ],
  },
  [r`How do you walk back out to find each branch current?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 24 V ideal bench supply pushes 3 A along a 4 Ω lead and on to a 6 Ω soldering iron and a 12 Ω glue gun connected in parallel. How much current does the 12 Ω glue gun take?`,
        options: [r`1.0 A`, r`2.0 A`, r`1.5 A`, r`3.0 A`],
        correctAnswer: 0,
        explanation: r`The lead drops 3 × 4 = 12 V, leaving 24 − 12 = 12 V across the parallel pair, so the 12 Ω glue gun takes 12/12 = 1.0 A. 2.0 A is the 6 Ω soldering iron (and also what the full 24 V would give), 1.5 A splits the total evenly, and 3.0 A is the total current.`,
      },
      {
        question: r`A 30 V ideal supply sends 2 A through a 9 Ω resistor and into two parallel branches. One of the branches carries 0.5 A. What is the resistance of that branch?`,
        options: [r`60 Ω`, r`36 Ω`, r`6 Ω`, r`24 Ω`],
        correctAnswer: 3,
        explanation: r`The series drop is 2 × 9 = 18 V, so the pair has 30 − 18 = 12 V, and the branch is 12/0.5 = 24 Ω. 60 Ω puts the full 30 V across the branch, 36 Ω uses the 18 V series drop, and 6 Ω divides the pair voltage by the total current, which gives the pair's combined resistance.`,
      },
      {
        question: r`A 10 V ideal reference drives 2 mA through a 2 kΩ trimmer and on to a 4 kΩ sensor and a 12 kΩ sensor connected in parallel. How much current does the 12 kΩ sensor carry?`,
        options: [r`1.5 mA`, r`0.5 mA`, r`0.83 mA`, r`0.5 A`],
        correctAnswer: 1,
        explanation: r`The series drop is 2 mA × 2 kΩ = 4 V, leaving 6 V across the parallel sensors, so the 12 kΩ sensor carries 6/12 000 = 0.5 mA. 1.5 mA is the 4 kΩ sensor, 0.83 mA puts the full 10 V on the 12 kΩ sensor, and 0.5 A drops the kilo.`,
      },
      {
        question: r`A 60 V ideal golf-cart pack sends 5 A along an 8 Ω cable to a 5 Ω motor and a 20 Ω horn connected in parallel. What current does each of them carry?`,
        options: [r`1 A in the 5 Ω; 4 A in the 20 Ω`, r`12 A in the 5 Ω; 3 A in the 20 Ω`, r`4 A in the 5 Ω; 1 A in the 20 Ω`, r`2.5 A in the 5 Ω; 2.5 A in the 20 Ω`],
        correctAnswer: 2,
        explanation: r`The cable drops 5 × 8 = 40 V, so the motor and horn have 20 V: 20/5 = 4 A and 20/20 = 1 A, which add to the 5 A total. The swapped pair gives the larger current to the larger resistor, 12 A and 3 A use the full 60 V, and 2.5 A each assumes an even split.`,
      },
      {
        question: r`A 15 V ideal battery sends 1.5 A through a 6 Ω resistor and into two identical resistors wired in parallel. What is the resistance of each of the identical resistors?`,
        options: [r`4 Ω`, r`8 Ω`, r`20 Ω`, r`12 Ω`],
        correctAnswer: 1,
        explanation: r`The series drop is 1.5 × 6 = 9 V, leaving 6 V across the pair, and each identical branch carries 0.75 A, so R = 6/0.75 = 8 Ω. 4 Ω divides by the total current (that is the pair's combined resistance), 20 Ω uses the full 15 V, and 12 Ω uses the 9 V series drop.`,
      },
      {
        question: r`A 12 V ideal car battery sends 2 A through a 3 Ω dashboard resistor and on to a 4 Ω fan and a 12 Ω lamp connected in parallel. What fraction of the battery voltage does the 12 Ω lamp receive, and what current does it carry?`,
        options: [r`All of it; 1.0 A`, r`One half of it; 1.5 A`, r`One half of it; 0.5 A`, r`One quarter of it; 0.25 A`],
        correctAnswer: 2,
        explanation: r`The series drop is 2 × 3 = 6 V, so the fan and lamp have 12 − 6 = 6 V, one half of the battery voltage, and the 12 Ω lamp carries 6/12 = 0.5 A. 1.0 A assumes the lamp sees all 12 V, 1.5 A is the current in the 4 Ω fan, and one quarter (3 V) does not match the 6 V left after the series drop.`,
      },
    ],
  },
  [r`What is the voltage across a parallel pair that sits behind a series resistor?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 24 V ideal supply sends a total of 4 A through a cable of 3.5 Ω and then into two motors wired in parallel. What voltage do the motors receive?`,
        options: [r`10 V`, r`14 V`, r`24 V`, r`38 V`],
        correctAnswer: 0,
        explanation: r`The cable drops 4 × 3.5 = 14 V, so the motors get 24 − 14 = 10 V. 14 V is the cable's drop rather than what is left, 24 V ignores the drop, and 38 V adds the drop to the supply voltage.`,
      },
      {
        question: r`A 12 V ideal power pack is wired through a 4 Ω ballast to two lamps connected in parallel. A voltmeter placed on the lamps reads 9 V. What total current leaves the power pack?`,
        options: [r`2.25 A`, r`3.0 A`, r`0.75 A`, r`5.25 A`],
        correctAnswer: 2,
        explanation: r`The ballast has 12 − 9 = 3 V across it, so I = 3/4 = 0.75 A. 2.25 A divides the 9 V lamp voltage by the 4 Ω, 3.0 A divides the whole 12 V by it, and 5.25 A adds the two voltages before dividing.`,
      },
      {
        question: r`A 20 V ideal charger delivers 0.5 A along a cable to two phones connected in parallel, and a meter shows 15 V at the phones. What is the resistance of the cable?`,
        options: [r`10 Ω`, r`30 Ω`, r`40 Ω`, r`2.5 Ω`],
        correctAnswer: 0,
        explanation: r`The cable drops 20 − 15 = 5 V at 0.5 A, so R = 5/0.5 = 10 Ω. 30 Ω uses the 15 V at the phones (that is the two phones' combined resistance), 40 Ω uses the whole 20 V (the equivalent resistance), and 2.5 Ω multiplies 5 V by 0.5 A instead of dividing.`,
      },
      {
        question: r`Two aquarium heaters are connected in parallel and have 8 V across them. They are supplied along a 3 Ω cord that carries 2 A in total from a power pack with no internal resistance. What is the voltage of the power pack?`,
        options: [r`2 V`, r`8 V`, r`6 V`, r`14 V`],
        correctAnswer: 3,
        explanation: r`The cord drops 2 × 3 = 6 V, and the power pack supplies that plus the heaters' 8 V: 14 V. 2 V subtracts the drop from the heater voltage, 8 V forgets the cord's drop, and 6 V is only the cord's drop.`,
      },
      {
        question: r`A 5 V ideal source drives 0.4 mA through a 5 kΩ resistor and then into two sensors wired in parallel. What voltage appears across the sensors?`,
        options: [r`2 V`, r`3 V`, r`5 V`, r`7 V`],
        correctAnswer: 1,
        explanation: r`The series drop is 0.4 mA × 5 kΩ = 0.4 × 10⁻³ × 5 × 10³ = 2 V, leaving 5 − 2 = 3 V for the sensors. 2 V is the drop itself, 5 V treats the sensors as if they sat straight across the source, and 7 V adds the drop.`,
      },
      {
        question: r`A 36 V ideal e-bike pack sends 3 A along a 4 Ω harness to two lights connected in parallel. A third light is then added in parallel with them, and the pack current rises to 4 A. How does the voltage at the lights change?`,
        options: [r`It rises by 4 V`, r`It falls by 16 V`, r`It falls by 4 V`, r`It stays at 24 V`],
        correctAnswer: 2,
        explanation: r`Before, the lights have 36 − 3 × 4 = 24 V; after, 36 − 4 × 4 = 20 V, a fall of 4 V. A rise gets the sign backwards (more current means a larger drop in the harness), 16 V is the new harness drop rather than the change, and no change forgets that the harness drop depends on the total current.`,
      },
    ],
  },
  [r`A branch opens. How do you re-solve the circuit?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 24 V ideal power pack drives a 4 Ω ballast in series with a 12 Ω lamp and a 6 Ω lamp that are in parallel with each other, and 3 A leaves the pack. The filament of the 6 Ω lamp then breaks. What current leaves the pack now?`,
        options: [r`3.0 A`, r`1.0 A`, r`2.0 A`, r`1.5 A`],
        correctAnswer: 3,
        explanation: r`Start again: the circuit is now the 4 Ω ballast and the 12 Ω lamp in series, 16 Ω, so I = 24/16 = 1.5 A. 3.0 A carries the old total over, 1.0 A is the old current of the 12 Ω lamp, and 2.0 A puts the whole 24 V across the 12 Ω lamp and ignores the ballast.`,
      },
      {
        question: r`An ideal 30 V supply feeds a 5 Ω resistor in series with two 20 Ω lamps wired in parallel. One lamp is removed from its socket. What is the voltage across the lamp that remains?`,
        options: [r`20 V`, r`24 V`, r`30 V`, r`40 V`],
        correctAnswer: 1,
        explanation: r`With one lamp the circuit is 5 + 20 = 25 Ω, so I = 30/25 = 1.2 A and the lamp has 1.2 × 20 = 24 V. 20 V is the lamp voltage before the change, 30 V ignores the series drop, and 40 V pushes the old total current of 2 A through the one remaining lamp.`,
      },
      {
        question: r`A 12 V ideal source drives a 1 kΩ resistor in series with two 2 kΩ resistors that are in parallel with each other. One of the 2 kΩ resistors fails open. What current now flows through the 1 kΩ resistor?`,
        options: [r`6 mA`, r`3 mA`, r`4 mA`, r`4 A`],
        correctAnswer: 2,
        explanation: r`The new equivalent resistance is 1 + 2 = 3 kΩ, so I = 12 V / 3000 Ω = 4 mA. 6 mA is the old total (when the pair was 1 kΩ), 3 mA is the old current of one branch, and 4 A drops the kilo.`,
      },
      {
        question: r`A cell pack with no internal resistance drives a 2 Ω fuse link in series with two 8 Ω glow plugs that are in parallel with each other. One glow plug fails and no longer conducts. Compared with the old total current, the new total current is`,
        options: [r`3/5 of the old current`, r`1/2 of the old current`, r`5/3 of the old current`, r`the same as the old current`],
        correctAnswer: 0,
        explanation: r`The equivalent resistance rises from 2 + 4 = 6 Ω to 2 + 8 = 10 Ω, so the current becomes 6/10 = 3/5 of what it was. One half looks only at the glow plugs' combined resistance doubling, 5/3 inverts the ratio, and the same current is the mistake of carrying the old total over.`,
      },
      {
        question: r`An ideal 54 V supply is wired through a 6 Ω cord to a 12 Ω heater and a 4 Ω heater connected in parallel. The 4 Ω heater is unplugged. What current does the 12 Ω heater carry now?`,
        options: [r`6.0 A`, r`1.5 A`, r`4.5 A`, r`3.0 A`],
        correctAnswer: 3,
        explanation: r`After the change the circuit is the 6 Ω cord and the 12 Ω heater in series, 18 Ω, so I = 54/18 = 3.0 A, all of it through the 12 Ω heater. 6.0 A is the old total current carried over, 1.5 A is the heater's old current, and 4.5 A puts the full 54 V across the heater.`,
      },
      {
        question: r`A 20 V ideal power pack drives a 2 Ω ballast in series with a 6 Ω lamp and a 3 Ω lamp that are in parallel with each other. The 3 Ω lamp is taken out of its socket. What is the voltage on the 2 Ω ballast after the change?`,
        options: [r`10 V`, r`5 V`, r`15 V`, r`20 V`],
        correctAnswer: 1,
        explanation: r`The circuit is now 2 + 6 = 8 Ω, so I = 20/8 = 2.5 A and the 2 Ω ballast has 2.5 × 2 = 5 V. 10 V is its voltage before the change (5 A through it), 15 V is the new voltage on the 6 Ω lamp, and 20 V is the voltage of the power pack.`,
      },
    ],
  },
  [r`Write both divider formulas.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 9 V ideal cell is connected to a 100 Ω fixed resistor and a 200 Ω thermistor in series. What voltage does the thermistor take?`,
        options: [r`3 V`, r`4.5 V`, r`18 V`, r`6 V`],
        correctAnswer: 3,
        explanation: r`Voltage divider: V = 9 × 200/(100 + 200) = 6 V. 3 V puts the other resistor on top (that is the 100 Ω resistor's share), 4.5 V splits the voltage evenly, and 18 V divides by the other resistor instead of the sum.`,
      },
      {
        question: r`A 10 A feed splits at a junction between a 4 Ω heater and a 16 Ω fan connected in parallel. How much of the 10 A goes to the heater?`,
        options: [r`2 A`, r`8 A`, r`5 A`, r`2.5 A`],
        correctAnswer: 1,
        explanation: r`Current divider, with the other resistor on top: I = 10 × 16/(4 + 16) = 8 A. 2 A puts the heater's own resistance on top (that is the fan's current), 5 A splits the current evenly, and 2.5 A divides the total current by the heater's 4 Ω, which mixes up amperes and ohms.`,
      },
      {
        question: r`A 30 Ω coil and a 50 Ω coil are connected in series to an ideal power pack. A voltmeter on the 30 Ω coil reads 6 V. What is the voltage of the power pack?`,
        options: [r`10 V`, r`2.25 V`, r`16 V`, r`9.6 V`],
        correctAnswer: 2,
        explanation: r`From V₁ = V × 30/(30 + 50), V = 6 × 80/30 = 16 V. 10 V is only the voltage across the 50 Ω coil, 2.25 V multiplies by 30/80 instead of dividing by it, and 9.6 V uses the 50 Ω coil in the ratio.`,
      },
      {
        question: r`A 10 Ω shunt and a 40 Ω meter coil are connected in parallel, and the 40 Ω coil carries 0.3 A. How much current arrives at the junction in total?`,
        options: [r`1.5 A`, r`1.2 A`, r`0.375 A`, r`0.6 A`],
        correctAnswer: 0,
        explanation: r`The 40 Ω coil gets the fraction 10/(10 + 40) = 1/5 of the total, so the total is 0.3 × 5 = 1.5 A (both have 12 V, and the 10 Ω shunt carries 1.2 A). 1.2 A is only the shunt, 0.375 A uses the fraction 40/50, and 0.6 A assumes an even split.`,
      },
      {
        question: r`A 5 V ideal logic supply is connected to a 2 kΩ pull-up and a 500 Ω sensor in series. What voltage does the 500 Ω sensor take?`,
        options: [r`4 V`, r`1 V`, r`1.25 V`, r`2.5 V`],
        correctAnswer: 1,
        explanation: r`With both in ohms, V = 5 × 500/(2000 + 500) = 1 V. 4 V is the 2 kΩ pull-up's share, 1.25 V divides by 2000 Ω alone rather than by the sum, and 2.5 V splits the voltage evenly.`,
      },
      {
        question: r`A 6 mA signal arrives at a junction and divides between a 3 kΩ detector, which must carry only 2 mA, and a bypass resistor in parallel with it. What resistance must the bypass have?`,
        options: [r`1.5 kΩ`, r`6 kΩ`, r`1 kΩ`, r`9 kΩ`],
        correctAnswer: 0,
        explanation: r`The bypass carries 6 − 2 = 4 mA at the same voltage, 2 mA × 3 kΩ = 6 V, so it is 6 V / 4 mA = 1.5 kΩ; check: 6 × 1.5/(3 + 1.5) = 2 mA. 6 kΩ inverts the ratio and would leave 4 mA in the 3 kΩ detector, 1 kΩ scales 3 kΩ by 2/6, and 9 kΩ scales it by 6/2.`,
      },
    ],
  },
  [r`What two checks finish a network problem?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 12 V ideal power pack drives a 2 Ω ballast in series with a 3 Ω lamp and a 6 Ω lamp that are in parallel with each other, and 3 A leaves the pack. A student reports 1 A in the 3 Ω lamp and 2 A in the 6 Ω lamp. What do the two final checks show?`,
        options: [r`The branch voltages agree, but the currents sum wrongly`, r`The currents sum correctly, and the branch voltages agree`, r`The currents sum wrongly, and the branch voltages differ`, r`The currents sum correctly, but the branch voltages differ`],
        correctAnswer: 3,
        explanation: r`1 A + 2 A matches the 3 A total, so the first check passes, but 1 A × 3 Ω = 3 V and 2 A × 6 Ω = 12 V are not equal, so the second fails: the student swapped the currents. The other statements each misreport one or both of these two checks.`,
      },
      {
        question: r`A solved network reports a total of 5 A entering a parallel pair, with 3 A in a 4 Ω branch. What must the report show for the other branch if both final checks are to pass?`,
        options: [r`2 A through a resistance of 4 Ω`, r`3 A through a resistance of 4 Ω`, r`2 A through a resistance of 6 Ω`, r`8 A through a resistance of 1.5 Ω`],
        correctAnswer: 2,
        explanation: r`The currents must add to the total, so the other branch carries 5 − 3 = 2 A, and it must share the first branch's 3 × 4 = 12 V, so R = 12/2 = 6 Ω. 2 A in 4 Ω gives only 8 V, 3 A in 4 Ω makes the currents add to 6 A, and 8 A in 1.5 Ω has 12 V but breaks the current sum.`,
      },
    ],
  },
  [r`What symbol stands for power, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A lab sheet lists four values for the same heater. Which one of them cannot be a power?`,
        options: [r`150 J/s`, r`150 W·s`, r`150 V·A`, r`150 W`],
        correctAnswer: 1,
        explanation: r`A watt is a joule per second and also a volt times an ampere, so 150 W, 150 J/s and 150 V·A are all powers. A watt multiplied by a second is a joule, so 150 W·s is an energy, not a power.`,
      },
      {
        question: r`A motor converts 3600 J of electrical energy in 2 minutes. Which line states its power correctly?`,
        options: [r`P = 30 W, since 1 W = 1 J/s`, r`P = 1800 W, since 1 W = 1 J/min`, r`P = 30 J, since 1 J = 1 W/s`, r`P = 432 kW, since 1 W = 1 J·s`],
        correctAnswer: 0,
        explanation: r`Power is energy per second: 3600 J / 120 s = 30 J/s = 30 W. 1800 divides by minutes, but the watt is a joule per second; 30 J gives power the unit of energy; and 432 kW multiplies energy by time instead of dividing.`,
      },
    ],
  },
  [r`What symbol stands for energy, and what is its SI unit? What other energy unit do electricity bills use?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A battery pack is labelled 0.5 kWh. Which SI value states the same quantity? Use 1 kWh = 3.6 × 10⁶ J.`,
        options: [r`1.8 × 10⁶ W`, r`5.0 × 10² J`, r`5.0 × 10² W`, r`1.8 × 10⁶ J`],
        correctAnswer: 3,
        explanation: r`A kilowatt-hour is energy, and its SI unit is the joule: 0.5 × 3.6 × 10⁶ = 1.8 × 10⁶ J. The answers in watts name a power, not an energy, and 5.0 × 10² J only moves the kilo without multiplying by the 3600 seconds in an hour.`,
      },
      {
        question: r`A student writes four sentences about the same heater. Which one uses the units of energy and power correctly?`,
        options: [r`A heater rated 1.5 kWh used 3 kW of energy in 2 h`, r`A heater rated 1.5 kW used 3 kW of energy in 2 h`, r`A heater rated 1.5 kW used 3 kWh of energy in 2 h`, r`A heater rated 1.5 J used 3 kWh of power in 2 h`],
        correctAnswer: 2,
        explanation: r`A rating is a power, in kW, and what is used over time is energy, in kWh: 1.5 kW × 2 h = 3 kWh. The other sentences give the rating in an energy unit, give the energy in kW, or call the kWh a power.`,
      },
    ],
  },
  [r`Write the three forms of electrical power, with the unit.`]: {
    kind: 'calc',
    more: [
      {
        question: r`An LED headlamp draws 0.5 A from a 6 V battery pack. How much power does it use?`,
        options: [r`3 W`, r`12 W`, r`1.5 W`, r`18 W`],
        correctAnswer: 0,
        explanation: r`P = IV = 0.5 × 6 = 3 W. 12 W divides the voltage by the current, 1.5 W squares the current and multiplies by the voltage, and 18 W squares the voltage and multiplies by the current.`,
      },
      {
        question: r`A 10 Ω heating coil in an incubator carries 3 A. How much power does the coil dissipate?`,
        options: [r`30 W`, r`900 W`, r`0.9 W`, r`90 W`],
        correctAnswer: 3,
        explanation: r`P = I²R = 3² × 10 = 90 W. 30 W forgets to square the current (IR is the 30 V across the coil), 900 W squares the resistance instead of the current, and 0.9 W divides I² by R.`,
      },
      {
        question: r`A 50 Ω test load for a defibrillator dissipates 200 W. What is the voltage across the load?`,
        options: [r`4 V`, r`100 V`, r`10 000 V`, r`2 V`],
        correctAnswer: 1,
        explanation: r`From P = V²/R, V² = PR = 200 × 50 = 10 000, so V = 100 V. 10 000 V forgets the square root, 4 V is P/R (which is I², in A²), and 2 V is the square root of that, the current in amperes.`,
      },
      {
        question: r`A nichrome wire with a resistance of 2 Ω dissipates 50 W. What current does the wire carry?`,
        options: [r`25 A`, r`100 A`, r`5 A`, r`10 A`],
        correctAnswer: 2,
        explanation: r`From P = I²R, I² = P/R = 50/2 = 25, so I = 5 A. 25 A forgets the square root, 100 A multiplies P by R, and 10 A takes the square root of P × R, which is the voltage across the wire.`,
      },
      {
        question: r`A pacemaker lead with a resistance of 500 Ω carries 2 mA during a pulse. How much power does the lead dissipate during the pulse?`,
        options: [r`2 W`, r`1 mW`, r`2000 W`, r`2 mW`],
        correctAnswer: 3,
        explanation: r`P = I²R = (2 × 10⁻³)² × 500 = 4 × 10⁻⁶ × 500 = 2 × 10⁻³ W = 2 mW. 2000 W leaves the current in milliamperes, 2 W converts the milli only once although the current is squared, and 1 mW comes from I × R = 1 (the voltage in volts) with no square.`,
      },
      {
        question: r`An electrosurgical tip dissipates 40 W while it carries 2 A. What is the resistance of the tip?`,
        options: [r`10 Ω`, r`20 Ω`, r`80 Ω`, r`160 Ω`],
        correctAnswer: 0,
        explanation: r`From P = I²R, R = P/I² = 40/2² = 10 Ω. 20 Ω divides by the current only once (P/I is the 20 V across the tip), 80 Ω multiplies P by I, and 160 Ω multiplies P by I².`,
      },
    ],
  },
  [r`Two resistors carry the same current (series). Which form of power do you use, and which resistor dissipates more?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 4 Ω fuse and a 12 Ω heating strip are connected in series, and 0.5 A passes through both. How many watts does each one turn into heat?`,
        options: [r`4 Ω: 3 W; 12 Ω: 1 W`, r`4 Ω: 2 W; 12 Ω: 6 W`, r`4 Ω: 8 W; 12 Ω: 24 W`, r`4 Ω: 1 W; 12 Ω: 3 W`],
        correctAnswer: 3,
        explanation: r`P = I²R with I² = 0.25: 0.25 × 4 = 1 W and 0.25 × 12 = 3 W, so the larger resistance turns more power into heat. The swapped pair gives more to the smaller resistance, 2 W and 6 W forget to square the current, and 8 W and 24 W divide R by the current.`,
      },
      {
        question: r`A 5 Ω lead and a 20 Ω heating pad are connected in series. The lead turns 3 W into heat. How many watts does the pad turn into heat?`,
        options: [r`0.75 W`, r`12 W`, r`48 W`, r`3 W`],
        correctAnswer: 1,
        explanation: r`The current is shared, so P = I²R is proportional to R: the 20 Ω pad has 4 times the resistance and dissipates 4 × 3 = 12 W. 0.75 W inverts the ratio (that is the parallel rule), 48 W squares the factor of 4, and 3 W assumes equal powers.`,
      },
      {
        question: r`Two heating strips of 3 Ω and 9 Ω are connected in series, and together they dissipate 48 W. What current flows through the strips?`,
        options: [r`4 A`, r`16 A`, r`2 A`, r`0.5 A`],
        correctAnswer: 2,
        explanation: r`Both carry the same current, so 48 = I²(3 + 9), I² = 4 and I = 2 A. 4 A forgets the square root, 16 A divides 48 W by the 3 Ω strip alone, and 0.5 A inverts the result.`,
      },
      {
        question: r`In a series string carrying 2 A, one resistor dissipates 20 W more than the 3 Ω resistor next to it. What is the resistance of that resistor?`,
        options: [r`5 Ω`, r`8 Ω`, r`13 Ω`, r`16 Ω`],
        correctAnswer: 1,
        explanation: r`The 3 Ω resistor dissipates 2² × 3 = 12 W, so the other dissipates 32 W and R = 32/2² = 8 Ω. 5 Ω is 20 W over I², the extra resistance without the 3 Ω added, 13 Ω divides 20 W by the current once and adds 3, and 16 Ω divides 32 W by the current only once.`,
      },
      {
        question: r`A 10 mA current passes through a 2 kΩ layer of skin and then through 500 Ω of deeper tissue in series. How much power is dissipated in the skin?`,
        options: [r`0.2 W`, r`0.05 W`, r`20 W`, r`200 kW`],
        correctAnswer: 0,
        explanation: r`P = I²R = (10 × 10⁻³)² × 2000 = 10⁻⁴ × 2000 = 0.2 W, more than the tissue because the skin has the larger resistance. 0.05 W is the tissue's power, 20 W multiplies I by R with no square (that is the 20 V across the skin), and 200 kW leaves the current in milliamperes.`,
      },
      {
        question: r`A 0.10 Ω fuse wire is in series with a copper lead of 0.02 Ω, so both carry the same current. How does the power dissipated in the fuse compare with the power in the lead?`,
        options: [r`25 times as much`, r`one fifth as much`, r`5 times as much`, r`the same amount`],
        correctAnswer: 2,
        explanation: r`With a shared current, P = I²R is proportional to R, and 0.10/0.02 = 5, so the fuse dissipates 5 times as much. 25 times squares the resistance ratio, one fifth uses the parallel rule where the smaller resistor dissipates more, and equal powers would need equal resistances.`,
      },
    ],
  },
  [r`Two resistors have the same voltage (parallel, or any outlet). Which form do you use, and which dissipates more?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 240 Ω lamp and a 20 Ω toaster are plugged into two sockets of the same 120 V outlet, so each has the full 120 V across it. How much power does each one draw?`,
        options: [r`Lamp 720 W; toaster 60 W`, r`Lamp 60 W; toaster 720 W`, r`Lamp 0.5 W; toaster 6 W`, r`Lamp 390 W; toaster 390 W`],
        correctAnswer: 1,
        explanation: r`Each has the full 120 V: 120²/240 = 14 400/240 = 60 W and 14 400/20 = 720 W, so the smaller resistance draws more. The swapped pair gives more to the larger resistance, 0.5 W and 6 W forget to square the voltage (those are the currents), and 390 W each splits the total evenly.`,
      },
      {
        question: r`An 8 Ω and a 2 Ω resistor are wired in parallel across the same supply. The 8 Ω resistor dissipates 5 W. How much power does the 2 Ω resistor dissipate?`,
        options: [r`1.25 W`, r`80 W`, r`20 W`, r`5 W`],
        correctAnswer: 2,
        explanation: r`With a shared voltage, P = V²/R is inversely proportional to R: one quarter of the resistance gives 4 × 5 = 20 W. 1.25 W uses the series rule (power proportional to R), 80 W squares the factor of 4, and 5 W assumes equal powers.`,
      },
      {
        question: r`One branch across a 6 V supply must dissipate 12 W. What resistance should that branch have?`,
        options: [r`2 Ω`, r`0.5 Ω`, r`72 Ω`, r`3 Ω`],
        correctAnswer: 3,
        explanation: r`From P = V²/R, R = V²/P = 36/12 = 3 Ω. 2 Ω is P/V (the current, 2 A), 0.5 Ω is V/P with no square, and 72 Ω multiplies P by V.`,
      },
      {
        question: r`A 5 Ω and a 20 Ω resistor are connected in parallel across a supply, and the 5 Ω resistor dissipates 20 W. What is the voltage that the two resistors share?`,
        options: [r`10 V`, r`100 V`, r`4 V`, r`2 V`],
        correctAnswer: 0,
        explanation: r`For the 5 Ω resistor V² = PR = 20 × 5 = 100, so V = 10 V, and the 20 Ω resistor has the same 10 V. 100 V forgets the square root, 4 V is P/R (which is I²), and 2 V is the square root of that, the current in amperes.`,
      },
      {
        question: r`Two electrode pads hold 4 V across a 2 kΩ gel path and an 8 kΩ skin path that lie in parallel. How much power is dissipated in the gel path?`,
        options: [r`2 mW`, r`8 W`, r`8 mW`, r`32 mW`],
        correctAnswer: 2,
        explanation: r`P = V²/R = 16/2000 = 8 × 10⁻³ W = 8 mW, more than the skin path because the gel has the smaller resistance. 2 mW is the skin path's power, 8 W leaves the resistance in kilohms, and 32 mW multiplies V² by the 2 instead of dividing.`,
      },
      {
        question: r`A 6 Ω and a 12 Ω resistor are in parallel across one supply. What fraction of the total power is dissipated in the 6 Ω resistor?`,
        options: [r`two thirds`, r`one third`, r`one half`, r`four fifths`],
        correctAnswer: 0,
        explanation: r`With the same voltage, P = V²/R gives the 6 Ω resistor twice the power of the 12 Ω resistor, so it takes 2 of 3 parts. One third gives the larger share to the larger resistor (the series rule), one half assumes equal powers, and four fifths squares the ratio to 4 : 1.`,
      },
    ],
  },
  [r`At fixed $R$, the current doubles. What happens to the power?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A resistor dissipates 5 W while it carries 0.2 A. The current is raised to 0.6 A and the resistance stays the same. What power does it dissipate now?`,
        options: [r`15 W`, r`45 W`, r`5 W`, r`135 W`],
        correctAnswer: 1,
        explanation: r`At fixed resistance P = I²R, so tripling the current multiplies the power by 3² = 9: 9 × 5 = 45 W. 15 W scales the power by 3 only, 5 W leaves it unchanged, and 135 W cubes the factor.`,
      },
      {
        question: r`A dimmer cuts the current in a lamp filament from 2 A to 1 A. The filament dissipated 100 W before. Treating its resistance as fixed, what does it dissipate now?`,
        options: [r`25 W`, r`50 W`, r`200 W`, r`400 W`],
        correctAnswer: 0,
        explanation: r`Halving the current at fixed resistance multiplies P = I²R by (1/2)² = 1/4, giving 25 W. 50 W halves the power without squaring, and 200 W and 400 W move the power the wrong way.`,
      },
      {
        question: r`A heater of fixed resistance must go from 30 W to 270 W. By what factor must the current through it change?`,
        options: [r`by a factor of 9`, r`by a factor of 81`, r`by a factor of 4.5`, r`by a factor of 3`],
        correctAnswer: 3,
        explanation: r`The power must rise 270/30 = 9 times, and P = I²R at fixed R, so the current must rise by √9 = 3. A factor of 9 forgets the square root, 81 squares the 9 instead, and 4.5 halves it.`,
      },
      {
        question: r`A coil of fixed resistance dissipates 12 W at 0.5 A. What current makes it dissipate 48 W?`,
        options: [r`2.0 A`, r`0.25 A`, r`1.0 A`, r`4.0 A`],
        correctAnswer: 2,
        explanation: r`The power is 4 times as large and P = I²R, so the current must double: 2 × 0.5 = 1.0 A. 2.0 A multiplies the current by 4 without the square root, 0.25 A halves it instead, and 4.0 A just quotes the factor.`,
      },
      {
        question: r`A sensing resistor dissipates 2 mW when it carries 10 mA. What does it dissipate at 50 mA, if its resistance does not change?`,
        options: [r`10 mW`, r`50 mW`, r`250 mW`, r`0.08 mW`],
        correctAnswer: 1,
        explanation: r`The current is 5 times as large, so P = I²R is 5² = 25 times as large: 25 × 2 mW = 50 mW. 10 mW scales by 5 only, 250 mW cubes the factor, and 0.08 mW divides by 25 instead of multiplying.`,
      },
      {
        question: r`A dimmer raises the current in a lamp by 20%, and the resistance of the filament stays the same. By what percentage does the lamp's power go up?`,
        options: [r`by 20%`, r`by 40%`, r`by 10%`, r`by 44%`],
        correctAnswer: 3,
        explanation: r`The current becomes 1.2 times as large, and P = I²R, so the power becomes 1.2² = 1.44 times as large, a 44% rise. 20% forgets the square, 40% doubles the percentage instead of squaring the factor, and 10% halves it.`,
      },
    ],
  },
  [r`At fixed $V$, the resistance halves. What happens to the power?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 240 Ω heater on a fixed-voltage supply dissipates 60 W. It is replaced by an 80 Ω heater on the same supply. What power does the new heater dissipate?`,
        options: [r`20 W`, r`540 W`, r`180 W`, r`60 W`],
        correctAnswer: 2,
        explanation: r`At fixed voltage P = V²/R, so one third of the resistance gives 3 times the power: 180 W. 20 W scales the power the same way as the resistance, 540 W squares the factor of 3, and 60 W assumes no change.`,
      },
      {
        question: r`A 12 V supply runs a film heater at 36 W. As the film warms up, its resistance doubles while the voltage stays at 12 V. What power does it dissipate then?`,
        options: [r`72 W`, r`18 W`, r`9 W`, r`144 W`],
        correctAnswer: 1,
        explanation: r`At fixed voltage P = V²/R, so doubling the resistance halves the power to 18 W. 72 W doubles the power as if the current were fixed, 9 W squares the factor of one half, and 144 W squares it the wrong way.`,
      },
      {
        question: r`A kettle element of 30 Ω gives 500 W on a fixed-voltage outlet. What resistance would give 1500 W on the same outlet?`,
        options: [r`10 Ω`, r`90 Ω`, r`3.3 Ω`, r`270 Ω`],
        correctAnswer: 0,
        explanation: r`At fixed voltage P = V²/R, so 3 times the power needs one third of the resistance: 30/3 = 10 Ω. 90 Ω raises the resistance by 3, 3.3 Ω divides by 9 as if the dependence were squared, and 270 Ω multiplies by 9.`,
      },
      {
        question: r`One heating element alone draws 400 W from a fixed-voltage supply. A second identical element is connected in series with it, doubling the resistance across the supply. What total power is drawn now?`,
        options: [r`800 W`, r`400 W`, r`100 W`, r`200 W`],
        correctAnswer: 3,
        explanation: r`The voltage is fixed and the resistance doubles, so P = V²/R halves to 200 W. 800 W would be right for adding the element in parallel (half the resistance), 400 W assumes no change, and 100 W squares the factor of one half.`,
      },
      {
        question: r`A 2 kΩ load on a constant-voltage reference takes 30 mW. It is swapped for a 500 Ω load on the same reference. How many milliwatts does the new load take?`,
        options: [r`7.5 mW`, r`120 mW`, r`480 mW`, r`0.12 mW`],
        correctAnswer: 1,
        explanation: r`2 kΩ is 2000 Ω, so the resistance falls to one quarter and P = V²/R rises 4 times: 120 mW. 7.5 mW divides by 4, 480 mW uses 4² = 16, and 0.12 mW compares 500 with 2 and treats the resistance as 250 times larger.`,
      },
      {
        question: r`A heating wire is trimmed so that its resistance is one fifth of what it was, and it is reconnected to the same fixed voltage. How does the power it dissipates change?`,
        options: [r`It rises 25 times`, r`It falls to one fifth`, r`It rises 5 times`, r`It falls to 1/25`],
        correctAnswer: 2,
        explanation: r`At fixed voltage P = V²/R, so one fifth of the resistance gives 5 times the power. 25 times squares the factor, a fall to one fifth uses P = I²R as if the current were fixed, and 1/25 does both.`,
      },
    ],
  },
  [r`$V$ triples and $R$ doubles. By what factor does the power change?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The voltage across a heater is raised from 5 V to 20 V, and at the same time its element is swapped from 10 Ω to 20 Ω. How does the new power compare with the old?`,
        options: [r`It becomes 8 times as large`, r`It becomes 2 times as large`, r`It becomes 32 times as large`, r`It becomes 4 times as large`],
        correctAnswer: 0,
        explanation: r`In P = V²/R the voltage factor of 4 is squared and the resistance factor of 2 divides: 16/2 = 8 (2.5 W becomes 20 W). 2 times forgets to square the voltage factor, 32 times multiplies by the resistance factor, and 4 times squares the ratio 4/2.`,
      },
      {
        question: r`An element dissipates 40 W. The voltage across it is tripled, and its resistance is also tripled. What power does it dissipate now?`,
        options: [r`40 W`, r`360 W`, r`120 W`, r`1080 W`],
        correctAnswer: 2,
        explanation: r`P = V²/R changes by 3²/3 = 3, so the power is 3 × 40 = 120 W. 40 W assumes the two changes cancel, 360 W applies only the squared voltage factor of 9, and 1080 W multiplies by the resistance factor instead of dividing.`,
      },
      {
        question: r`A coil dissipates 30 W. The current through it is doubled while its resistance is cut to one third. What power does it dissipate now?`,
        options: [r`20 W`, r`120 W`, r`360 W`, r`40 W`],
        correctAnswer: 3,
        explanation: r`Using P = I²R, the factors multiply: 2² × (1/3) = 4/3, and 4/3 of 30 W is 40 W. 20 W forgets to square the current factor, 120 W ignores the resistance change, and 360 W multiplies by 3 instead of dividing.`,
      },
      {
        question: r`The voltage across an element is doubled, and the power must become 16 times as large. How must the resistance of the element change?`,
        options: [r`It must fall to one half`, r`It must fall to one quarter`, r`It must rise to 4 times`, r`It must rise to 8 times`],
        correctAnswer: 1,
        explanation: r`The voltage alone multiplies P = V²/R by 2² = 4, so the resistance must supply another factor of 4 by falling to one quarter. One half would give only 8 times, and raising the resistance to 4 or 8 times would lower the power to 1 or 1/2 of its old value.`,
      },
      {
        question: r`The resistance of a heater becomes 9 times as large. By what factor must the voltage across it be multiplied for the power to stay the same?`,
        options: [r`It must be multiplied by 9`, r`It must be multiplied by 81`, r`It must be multiplied by 1/3`, r`It must be multiplied by 3`],
        correctAnswer: 3,
        explanation: r`For P = V²/R to stay the same, V² must rise 9 times with R, so V rises by √9 = 3. A factor of 9 forgets that the voltage is squared, 81 squares the wrong way, and 1/3 lowers the voltage when the power would already have fallen.`,
      },
      {
        question: r`A 2 kΩ load running at 5 V is replaced by a 200 kΩ load running at 50 V. How does the power in the new load compare with the 12.5 mW in the old one?`,
        options: [r`It is unchanged at 12.5 mW`, r`It rises 10 times to 125 mW`, r`It falls 10 times to 1.25 mW`, r`It rises 100 times to 1.25 W`],
        correctAnswer: 0,
        explanation: r`The voltage factor of 10 is squared and the resistance factor of 100 divides: 10²/100 = 1, so the power is still 50²/200 000 = 12.5 mW. A 10 times rise would need the resistance to rise only 10 times, a 10 times fall uses 10/100 without squaring the voltage factor, and a 100 times rise ignores the resistance change.`,
      },
    ],
  },
  [r`How do you get energy from power? What is a kilowatt-hour?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 5 W phone charger runs for exactly 1 hour. How much electrical energy does it deliver, in joules?`,
        options: [r`3.0 × 10² J`, r`5.0 × 10⁰ J`, r`1.8 × 10⁴ J`, r`1.8 × 10⁷ J`],
        correctAnswer: 2,
        explanation: r`E = Pt = 5 W × 3600 s = 18 000 J = 1.8 × 10⁴ J. 3.0 × 10² J multiplies by 60 minutes instead of 3600 seconds, 5.0 × 10⁰ J (just 5 J) multiplies by 1 hour without converting, and 1.8 × 10⁷ J treats the 5 W as 5 kW.`,
      },
      {
        question: r`A 2 kW water heater must supply 5 kWh of energy to warm a tank. For how long must it run?`,
        options: [r`10 h`, r`2.5 h`, r`0.4 h`, r`25 h`],
        correctAnswer: 1,
        explanation: r`From E = Pt, t = E/P = 5 kWh / 2 kW = 2.5 h. 10 h multiplies the two numbers, 0.4 h divides the power by the energy, and 25 h slips a power of ten.`,
      },
      {
        question: r`A small refrigerator uses 1.2 kWh of energy over 24 hours. What is its average power?`,
        options: [r`50 W`, r`20 W`, r`5 W`, r`500 W`],
        correctAnswer: 0,
        explanation: r`P = E/t = 1.2 kWh / 24 h = 0.05 kW = 50 W. 20 W divides 24 by 1.2, and 5 W and 500 W each slip a power of ten when changing kilowatts to watts.`,
      },
      {
        question: r`A defibrillator delivers 300 J to a patient in a pulse lasting 5 ms. What is the average power during the pulse?`,
        options: [r`60 W`, r`1.5 W`, r`60 kW`, r`1.5 kW`],
        correctAnswer: 2,
        explanation: r`P = E/t = 300 J / (5 × 10⁻³ s) = 6 × 10⁴ W = 60 kW. 60 W leaves the time in milliseconds, 1.5 W multiplies 300 J by 0.005 s instead of dividing, and 1.5 kW multiplies 300 by 5.`,
      },
      {
        question: r`A storage cell holds 3.6 × 10⁶ J, which is 1 kWh. For how long could it run a 100 W lamp?`,
        options: [r`1 h`, r`10 h`, r`36 h`, r`100 h`],
        correctAnswer: 1,
        explanation: r`100 W is 0.1 kW, so t = E/P = 1 kWh / 0.1 kW = 10 h (3.6 × 10⁶ J / 100 W = 3.6 × 10⁴ s). 1 h treats the lamp as 1 kW, 36 h mishandles the change from 3.6 × 10⁴ s to hours (there are 3600 s in an hour), and 100 h slips a power of ten.`,
      },
      {
        question: r`Device A runs at 500 W for 3 hours. Device B runs at 1500 W for 20 minutes. How do the energies they use compare?`,
        options: [r`B uses 3 times as much as A`, r`A uses 9 times as much as B`, r`A uses the same amount as B`, r`A uses 3 times as much as B`],
        correctAnswer: 3,
        explanation: r`E = Pt: device A uses 0.5 kW × 3 h = 1.5 kWh and device B uses 1.5 kW × (1/3) h = 0.5 kWh, so A uses 3 times as much. Giving B the larger energy compares only the powers, 9 times compares only the running times, and equal energies would need equal products of power and time.`,
      },
    ],
  },
  [r`How does the power an ideal source delivers compare with the power in the resistors?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Three resistors connected to one ideal source dissipate 5 W, 10 W and 15 W, and the source supplies a total current of 2.5 A. What is the source voltage?`,
        options: [r`75 V`, r`12 V`, r`4 V`, r`30 V`],
        correctAnswer: 1,
        explanation: r`The source delivers the sum of the resistor powers, 30 W, and P = V × I gives V = 30/2.5 = 12 V. 75 V multiplies 30 W by 2.5 A, 4 V uses only the 10 W resistor, and 30 V is just the total power read as a voltage.`,
      },
      {
        question: r`A 12 V ideal power pack drives a 2 Ω ballast in series with a 6 Ω lamp and a 12 Ω lamp that are in parallel with each other. Without working out the three powers one at a time, what total power do the ballast and the two lamps dissipate?`,
        options: [r`24 W`, r`7.2 W`, r`72 W`, r`36 W`],
        correctAnswer: 0,
        explanation: r`The equivalent resistance is 2 + 4 = 6 Ω, so the pack supplies 2 A and delivers 12 × 2 = 24 W, which equals the total dissipated in the ballast and lamps. 7.2 W adds all three in series (20 Ω), 72 W uses only the 2 Ω ballast, and 36 W uses only the lamps' combined 4 Ω.`,
      },
      {
        question: r`A 5 V ideal supply delivers 200 mA to a small circuit board. The processor on the board dissipates 0.7 W, and the only other load is an LED driver. How much power does the driver dissipate?`,
        options: [r`1.7 W`, r`0.7 W`, r`999 W`, r`0.3 W`],
        correctAnswer: 3,
        explanation: r`The supply delivers 5 V × 0.200 A = 1.0 W, and that must equal the sum of the loads, so the driver takes 1.0 − 0.7 = 0.3 W. 1.7 W adds instead of subtracting, 0.7 W assumes an even split, and 999 W leaves the current in milliamperes.`,
      },
      {
        question: r`A cell pack with no internal resistance sends 3 A into a heater made of three elements that give off 9 W, 12 W and 15 W. What single resistance would draw the same power from this pack?`,
        options: [r`12 Ω`, r`0.25 Ω`, r`4 Ω`, r`108 Ω`],
        correctAnswer: 2,
        explanation: r`The pack delivers 9 + 12 + 15 = 36 W at 3 A, so its voltage is 36/3 = 12 V and the equivalent resistance is 12/3 = 4 Ω (or 36/3²). 12 Ω stops at P/I, which is the voltage, 0.25 Ω inverts the ratio, and 108 Ω multiplies 36 by 3.`,
      },
      {
        question: r`An ideal 9 V supply runs a set of lamps that take 3 W altogether. One more lamp that takes 1.5 W is then clipped straight onto the supply terminals. By what factor does the supply current rise?`,
        options: [r`1.5 times`, r`2 times`, r`0.5 times`, r`4.5 times`],
        correctAnswer: 0,
        explanation: r`The supply's power equals the total dissipated, which goes from 3 W to 4.5 W, and at a fixed 9 V the current rises in the same ratio: 4.5/3 = 1.5. 2 times assumes the load doubled, 0.5 times compares only the added 1.5 W with the 3 W, and 4.5 times quotes the new power in watts.`,
      },
      {
        question: r`A 12 V ideal battery supplies 0.5 A to a network of five resistors for 10 minutes. How much thermal energy do the resistors produce in total?`,
        options: [r`60 J`, r`6 J`, r`18 000 J`, r`3600 J`],
        correctAnswer: 3,
        explanation: r`The resistors together dissipate what the battery delivers, 12 × 0.5 = 6 W, so in 600 s they produce 6 × 600 = 3600 J. 60 J leaves the time in minutes, 6 J is the power read as an energy, and 18 000 J multiplies by the five resistors as if each took the full 6 W.`,
      },
    ],
  },
  [r`Why do power lines run at high voltage?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A transmission line carries 100 A and loses 40 kW as heat. The same power is then sent through the same line at twice the voltage. How much power does the line lose now?`,
        options: [r`20 kW`, r`80 kW`, r`10 kW`, r`160 kW`],
        correctAnswer: 2,
        explanation: r`The same power at twice the voltage needs half the current, 50 A, and the loss I²R falls to (1/2)² = 1/4 of 40 kW, which is 10 kW. 20 kW forgets the square, and 80 kW and 160 kW assume a higher voltage raises the loss.`,
      },
      {
        question: r`A farm is sent 12 kW at a line voltage of 400 V through a line whose wires have a total resistance of 2 Ω. What percentage of the power sent is lost as heat in the line?`,
        options: [r`1.5%`, r`15%`, r`0.5%`, r`30%`],
        correctAnswer: 1,
        explanation: r`The line current is I = P/V = 12 000/400 = 30 A, so the loss is I²R = 900 × 2 = 1800 W, which is 1800/12 000 = 15%. 0.5% uses IR = 60 with no square, 1.5% slips a power of ten, and 30% doubles the loss.`,
      },
      {
        question: r`A line with a total resistance of 5 Ω must carry 50 kW while losing no more than 500 W as heat. What is the lowest line voltage that achieves this?`,
        options: [r`5 kV`, r`500 V`, r`50 V`, r`50 kV`],
        correctAnswer: 0,
        explanation: r`The loss limit gives I² = 500/5 = 100, so I = 10 A at most, and V = P/I = 50 000/10 = 5000 V = 5 kV. 500 V forgets the square root and allows 100 A, 50 V is only the voltage dropped along the line (10 A × 5 Ω), and 50 kV slips a power of ten.`,
      },
      {
        question: r`A 10 kW load is supplied at a line voltage of 500 V. The heat loss in the line must stay at or below 800 W. What is the largest total resistance the line can have?`,
        options: [r`40 Ω`, r`312 Ω`, r`0.5 Ω`, r`2 Ω`],
        correctAnswer: 3,
        explanation: r`The line current is I = P/V = 10 000/500 = 20 A, and I²R = 800 W gives R = 800/400 = 2 Ω. 40 Ω divides 800 W by the current only once, 312 Ω uses V²/P with the full 500 V as if it all sat across the line, and 0.5 Ω inverts the result.`,
      },
      {
        question: r`A substation sends 1 MW at a line voltage of 100 kV through a line with a total resistance of 10 Ω. How much power is lost as heat in the line?`,
        options: [r`1 kW`, r`100 W`, r`100 kW`, r`1000 MW`],
        correctAnswer: 0,
        explanation: r`I = P/V = 10⁶/10⁵ = 10 A, so the loss is I²R = 10² × 10 = 1000 W = 1 kW. 100 W is IR with no square, 100 kW is the loss if the voltage were read as 10 kV, and 1000 MW puts the whole line voltage across the wires in V²/R.`,
      },
      {
        question: r`A plant can send 60 kW through a line of total resistance 3 Ω at a line voltage of either 3 kV or 30 kV. How much power is lost as heat in the line in each case?`,
        options: [r`12 W at 3 kV; 1200 W at 30 kV`, r`1200 W at 3 kV; 120 W at 30 kV`, r`1200 W at 3 kV; 12 W at 30 kV`, r`60 W at 3 kV; 6 W at 30 kV`],
        correctAnswer: 2,
        explanation: r`At 3 kV the current is 60 000/3000 = 20 A and the loss is 20² × 3 = 1200 W; at 30 kV it is 2 A and 2² × 3 = 12 W. The swapped pair has the loss rising with voltage, 120 W forgets that the loss falls with the square of the current, and 60 W and 6 W use IR with no square.`,
      },
    ],
  },
  [r`What does the harm in an electric shock, and why is wet skin dangerous?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A mechanic with dry skin, for a body resistance of 1 × 10⁵ Ω, touches both terminals of a 12 V car battery. What current passes through the mechanic's body?`,
        options: [r`12 mA`, r`0.12 mA`, r`1.2 mA`, r`120 mA`],
        correctAnswer: 1,
        explanation: r`I = V/R = 12/(1 × 10⁵) = 1.2 × 10⁻⁴ A = 0.12 mA, far too small to harm. 12 mA is the wet-skin value with 1 × 10³ Ω, and 1.2 mA and 120 mA slip powers of ten.`,
      },
      {
        question: r`A passage states that about 10 mA through the body makes the hand muscles lock. For a person with wet skin and a body resistance of 1 × 10³ Ω, what voltage drives that current?`,
        options: [r`10 V`, r`1000 V`, r`100 V`, r`0.1 V`],
        correctAnswer: 0,
        explanation: r`V = IR = 10 × 10⁻³ A × 1 × 10³ Ω = 10 V. 1000 V is the answer for dry skin at 1 × 10⁵ Ω, 100 V slips a power of ten, and 0.1 V slips two powers of ten the other way.`,
      },
      {
        question: r`A technician touches a 60 V terminal, and a meter shows 3 mA passing through the technician's body. What is the resistance of the body along that path?`,
        options: [r`2 × 10¹ Ω`, r`2 × 10⁷ Ω`, r`5 × 10⁻⁵ Ω`, r`2 × 10⁴ Ω`],
        correctAnswer: 3,
        explanation: r`R = V/I = 60/(3 × 10⁻³) = 2 × 10⁴ Ω, between the dry and wet values. 2 × 10¹ Ω leaves the current in milliamperes, 2 × 10⁷ Ω treats the 3 mA as 3 μA, and 5 × 10⁻⁵ Ω divides the current by the voltage.`,
      },
      {
        question: r`Sweat lowers a worker's body resistance from 1 × 10⁵ Ω to 2 × 10⁴ Ω. For contact with the same voltage, how does the current through the body change?`,
        options: [r`It becomes 25 times as large`, r`It becomes 5 times as large`, r`It becomes one fifth as large`, r`It becomes 50 times as large`],
        correctAnswer: 1,
        explanation: r`I = V/R at a fixed voltage, and the resistance falls to one fifth, so the current becomes 5 times as large. 25 times squares the factor, one fifth has the current falling with the resistance, and 50 times slips a power of ten.`,
      },
      {
        question: r`With wet skin (1 × 10³ Ω), contact with 12 V drives a certain current through the body. What voltage would drive the same current through a person with dry skin (1 × 10⁵ Ω)?`,
        options: [r`120 V`, r`0.12 V`, r`1200 V`, r`12 V`],
        correctAnswer: 2,
        explanation: r`The wet-skin current is 12/10³ = 12 mA; with 100 times the resistance, the same current needs 100 times the voltage, 12 × 10⁻³ × 10⁵ = 1200 V. 120 V uses a factor of 10, 0.12 V divides by 100, and 12 V ignores the change in resistance.`,
      },
      {
        question: r`A passage puts the let-go threshold near 10 mA. A person touches a 50 V source, once with dry skin (1 × 10⁵ Ω) and once with wet skin (1 × 10³ Ω). In which case is the threshold passed, and what are the currents?`,
        options: [r`Dry skin only: 50 mA dry, 0.5 mA wet`, r`Both of them: 500 mA wet, 50 mA dry`, r`Neither one: 5 mA wet, 0.05 mA dry`, r`Wet skin only: 50 mA wet, 0.5 mA dry`],
        correctAnswer: 3,
        explanation: r`I = V/R: wet skin gives 50/10³ = 50 mA, above 10 mA, and dry skin gives 50/10⁵ = 0.5 mA, below it. Naming dry skin swaps the two resistances, and the answers with both or neither come from currents that are 10 times too large or 10 times too small.`,
      },
    ],
  },
  [r`An appliance has a power rating at a known voltage. How do you find its current and resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A hair dryer is rated 1200 W on a 120 V outlet. What are its current and its resistance while it runs?`,
        options: [r`10 A and 12 Ω`, r`10 A and 120 Ω`, r`0.1 A and 1200 Ω`, r`10 A and 1.2 Ω`],
        correctAnswer: 0,
        explanation: r`I = P/V = 1200/120 = 10 A, then R = V/I = 120/10 = 12 Ω; check: I²R = 100 × 12 = 1200 W. 0.1 A and 1200 Ω invert the first step to V/P, and 120 Ω and 1.2 Ω have the right current but slip a power of ten in V/I.`,
      },
      {
        question: r`A car headlamp is rated 60 W at 12 V. What is the resistance of its filament while it is lit?`,
        options: [r`5.0 Ω`, r`0.2 Ω`, r`720 Ω`, r`2.4 Ω`],
        correctAnswer: 3,
        explanation: r`I = P/V = 60/12 = 5 A, then R = V/I = 12/5 = 2.4 Ω (or V²/P = 144/60). 5.0 Ω stops at P/V, which is the current in amperes, 0.2 Ω is V/P, and 720 Ω multiplies P by V.`,
      },
      {
        question: r`A night light draws 0.25 A from a 120 V outlet. What are its power rating and its resistance?`,
        options: [r`480 W and 30 Ω`, r`30 W and 480 Ω`, r`30 W and 30 Ω`, r`480 W and 480 Ω`],
        correctAnswer: 1,
        explanation: r`P = IV = 0.25 × 120 = 30 W and R = V/I = 120/0.25 = 480 Ω; check: V²/R = 14 400/480 = 30 W. The other answers swap the two operations, dividing where the power needs a product or multiplying where the resistance needs a quotient.`,
      },
      {
        question: r`An oven element is rated 3.6 kW on a 240 V supply. What current does it draw?`,
        options: [r`15 A`, r`0.015 A`, r`67 A`, r`864 A`],
        correctAnswer: 0,
        explanation: r`I = P/V = 3600 W / 240 V = 15 A. 0.015 A leaves the power in kilowatts, 67 A divides the voltage by the power in kilowatts, and 864 A multiplies 3.6 by 240.`,
      },
      {
        question: r`A heater is rated 100 W at 200 V. Treating its resistance as fixed, what current does it draw when it is connected to a 100 V supply instead?`,
        options: [r`0.50 A`, r`1.0 A`, r`0.25 A`, r`4.0 A`],
        correctAnswer: 2,
        explanation: r`The rating gives R = V²/P = 200²/100 = 400 Ω, and on 100 V the current is 100/400 = 0.25 A. 0.50 A is the rated current at 200 V, 1.0 A divides the rated 100 W by the new 100 V although the power is no longer 100 W, and 4.0 A inverts V/R.`,
      },
      {
        question: r`A 1500 W heater and a 300 W blender are both rated for the same 120 V outlet. How do the heater's current and resistance compare with the blender's?`,
        options: [r`5 times the current and 5 times the resistance`, r`one fifth the current and 5 times the resistance`, r`5 times the current and 1/25 of the resistance`, r`5 times the current and one fifth the resistance`],
        correctAnswer: 3,
        explanation: r`At the same voltage I = P/V, so 5 times the power means 5 times the current, and R = V²/P means one fifth of the resistance. Giving the heater 5 times the resistance, or one fifth of the current, treats a higher rating as a larger resistance, and 1/25 squares a factor that enters only once.`,
      },
    ],
  },
  [r`What do you get when you divide a power by a current?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A small motor takes in 90 W while it carries 6 A. What is the voltage across the motor?`,
        options: [r`2.5 V`, r`540 V`, r`15 V`, r`3240 V`],
        correctAnswer: 2,
        explanation: r`Dividing a power by a current gives the voltage: V = P/I = 90/6 = 15 V. 2.5 divides by the current twice, which is P/I², a resistance in ohms; 540 multiplies P by I; and 3240 multiplies P by I².`,
      },
      {
        question: r`A USB hand warmer dissipates 10 W while it carries 2 A. What are the voltage across it and its resistance?`,
        options: [r`5 V and 5 Ω`, r`5 V and 2.5 Ω`, r`20 V and 10 Ω`, r`2.5 V and 5 Ω`],
        correctAnswer: 1,
        explanation: r`V = P/I = 10/2 = 5 V, and then R = V/I = 5/2 = 2.5 Ω. 5 Ω reuses P/I as the resistance, 20 V and 10 Ω multiply P by I for the voltage, and 2.5 V and 5 Ω swap the two results.`,
      },
      {
        question: r`A student divides a heater's 36 W by its current of 3 A and writes down 12 Ω for the heater. Which statement about this result is correct?`,
        options: [r`The result is 12 Ω; the voltage is 4 V`, r`The result is 12 V; the resistance is 12 Ω`, r`The result is 12 V; the resistance is 4 Ω`, r`The result is 108 V; the resistance is 36 Ω`],
        correctAnswer: 2,
        explanation: r`P/I is a voltage: 36 W / 3 A = 12 V. The resistance needs one more division by the current, 12 V / 3 A = 4 Ω (or P/I² = 36/9). Calling 12 a resistance repeats the student's slip, and 108 V multiplies the power by the current.`,
      },
      {
        question: r`An implanted stimulator dissipates 6 mW in the tissue between its contacts while it passes 2 mA. What is the voltage between the contacts?`,
        options: [r`3 mV`, r`3 V`, r`12 V`, r`1500 V`],
        correctAnswer: 1,
        explanation: r`V = P/I, and 6 × 10⁻³ W divided by 2 × 10⁻³ A is 3 V; the two milli prefixes cancel. 3 mV keeps a milli that has cancelled, 12 V multiplies the two numbers, and 1500 comes from P/I², which is the resistance in ohms.`,
      },
      {
        question: r`Two devices each carry 4 A. One dissipates 48 W and the other dissipates 80 W. How much larger is the voltage across the second device?`,
        options: [r`8 V`, r`2 V`, r`32 V`, r`128 V`],
        correctAnswer: 0,
        explanation: r`V = P/I gives 48/4 = 12 V and 80/4 = 20 V, a difference of 8 V. 2 V divides by the current twice (those are the resistances, 3 Ω and 5 Ω), 32 V is the power difference with no division, and 128 V multiplies that difference by the current.`,
      },
      {
        question: r`A regulator holds the current in a device at 0.5 A while the power the device takes in rises from 5 W to 15 W. By how much does the voltage across the device rise?`,
        options: [r`10 V`, r`40 V`, r`5 V`, r`20 V`],
        correctAnswer: 3,
        explanation: r`V = P/I: the voltage goes from 5/0.5 = 10 V to 15/0.5 = 30 V, a rise of 20 V. 10 V takes the power change of 10 W as the voltage change, 40 V divides it by the current twice, and 5 V multiplies it by the current.`,
      },
    ],
  },
  [r`How do you find energy use in kilowatt-hours, and the cost?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A porch light of 60 W burns for 5 hours. The utility charges 10 cents for each kWh. What is the charge for those 5 hours?`,
        options: [r`3 cents`, r`30 cents`, r`$3.00`, r`$30.00`],
        correctAnswer: 0,
        explanation: r`60 W is 0.06 kW, so the energy is 0.06 × 5 = 0.3 kWh and the cost is 0.3 × 10 = 3 cents. The 30 dollar answer leaves the power in watts (300 × 10 cents), and the other two slip one or two powers of ten along the way.`,
      },
      {
        question: r`A 2000 W clothes dryer runs for 15 minutes. How much energy does it use, in kilowatt-hours?`,
        options: [r`30 kWh`, r`0.5 kWh`, r`500 kWh`, r`8.0 kWh`],
        correctAnswer: 1,
        explanation: r`Convert first: 2000 W = 2 kW and 15 min = 0.25 h, so the energy is 2 × 0.25 = 0.5 kWh. 30 kWh leaves the time in minutes, 500 kWh leaves the power in watts, and 8.0 kWh divides by 0.25 h instead of multiplying.`,
      },
      {
        question: r`A 3 kW sauna stove adds 90 cents to a bill at a rate of 15 cents per kWh. For how long was the stove on?`,
        options: [r`6 h`, r`18 h`, r`0.5 h`, r`2 h`],
        correctAnswer: 3,
        explanation: r`The energy bought is 90/15 = 6 kWh, and t = 6 kWh / 3 kW = 2 h. 6 h stops at the number of kilowatt-hours, 18 h multiplies by the power instead of dividing, and 0.5 h inverts the last division.`,
      },
      {
        question: r`A 500 W pump that runs for 4 hours adds 50 cents to the electricity bill. What is the price of electricity per kilowatt-hour?`,
        options: [r`25 cents`, r`12.5 cents`, r`100 cents`, r`2.5 cents`],
        correctAnswer: 0,
        explanation: r`The pump uses 0.5 kW × 4 h = 2 kWh, so the price is 50/2 = 25 cents per kWh. 12.5 cents divides by the 4 hours alone, 100 cents multiplies by 2 kWh instead of dividing, and 2.5 cents slips a power of ten.`,
      },
      {
        question: r`A 100 W aquarium heater stays on for 240 hours in a row (10 days). The utility charges 25 cents for each kWh. What is the charge?`,
        options: [r`$0.25`, r`$6000`, r`$6.00`, r`$24.00`],
        correctAnswer: 2,
        explanation: r`0.1 kW × 240 h = 24 kWh, and 24 × 25 cents = 600 cents, which is 6 dollars. The 25 cent answer multiplies by 10 days without changing days to hours, 6000 dollars leaves the power in watts, and 24 dollars quotes the kilowatt-hours without applying the price.`,
      },
      {
        question: r`A 60 W bulb is replaced by a 10 W LED. Over 1000 hours of use at 20 cents per kilowatt-hour, how much money does the swap save?`,
        options: [r`$12.00`, r`$10.00`, r`$2.00`, r`$14.00`],
        correctAnswer: 1,
        explanation: r`The saving in power is 50 W = 0.05 kW, so the energy saved is 0.05 × 1000 = 50 kWh, worth 50 × 20 cents = 10 dollars. 12 dollars is the full cost of running the old bulb, 2 dollars is the cost of running the LED, and 14 dollars adds the two costs instead of subtracting.`,
      },
    ],
  },
}
